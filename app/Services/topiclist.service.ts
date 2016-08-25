import {
  Injectable
} from '@angular/core';
import {
  Http,
  Headers,
  Response
} from '@angular/http';
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/toPromise';
import * as http from 'http';

@Injectable()
export class TopicListService {

  private baseURL:string = 'https://cnodejs.org/api/v1/';

  private mockData():any {
    return {
      _body:{
        success:true,
        data:[{
          author:{
            loginname:'eeandrew',
            avatar_url:'xxx',
          },
          create_at:'昨天',
          title:'这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题'
        },{
          author:{
            loginname:'eeandrew',
            avatar_url:'xxx',
          },
          create_at:'昨天',
          title:'这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题'
        }]
      }
    };
  }

  constructor(private _http: Http) {

  }

  private makeGetQueryString(params:Object):string {
    let queryString = '';
    for(let key in params) {
      if(params.hasOwnProperty(key)) {
        queryString += `${key}=${params[key]}&`;
      }
    }
    return queryString;
  }

  public getTopicList(params:Object) {
    const queryString = this.makeGetQueryString(params);
    const queryUrl = `${this.baseURL}topics?${queryString}`;
    return this._http.get(queryUrl)
      .toPromise()
      .then(res => {return res;})
      .catch(this.handleErr)
    //return Promise.resolve(this.mockData());
}

  private handleErr(err:any) {
    alert(JSON.stringify(err));
    return Promise.reject(err);
  }

}