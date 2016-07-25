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
    let headers = new Headers();
    headers.append("Authorization", "Bearer ");
    return this._http.get('https://api.everlive.com/v1/GWfRtXi1Lwt4jcqK/Groceries',{
      headers
    })
      .toPromise()
      .then(res => {alert(res);return res;})
      .catch(this.handleErr)
  }

  private handleErr(err:any) {
    alert(JSON.stringify(err));
    return Promise.reject(err);
  }

}