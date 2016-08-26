import { 
  Component, 
  OnInit, 
  ChangeDetectorRef
 } from "@angular/core";
import {
  Tab
} from '../Components/Tab/tab.component';
import {
  Router
} from "@angular/router";
import {
  TopicListService
} from '../Services/topiclist.service';
@Component({
    selector:"detail-page",
    providers:[TopicListService],
    template:`
    <ActionBar title="详情">
    </ActionBar>
    <DockLayout stretchLastChild="true">
      <!--底部按钮-->
      <StackLayout dock="bottom">
        <tab [tabs]="tabs" [onTabChange]="onTabClick" displayMode="{{true}}"></tab>
      </StackLayout>
      <!--详情内容-->
      <StackLayout dock="top" orientation="vertical" class="detail-section">
        <ScrollView orientation="vertical" class="topic-detail">
          <StackLayout orientation="vertical">
            <Label [text]="title" textWrap="true" class="detail-title"></Label>
            <StackLayout orientation="horizontal" class="meta-section">
              <Image class="avatar-small" [src]="author.avatar_url"></Image>
              <Label [text]="author.loginname" class="font12 ml5"></Label>
              <Label [text]="time" class="font12 ml5"></Label>
            </StackLayout>
            <StackLayout>
              <Label [text]="content" textWrap="true" class="detail-content font15"></Label>
            </StackLayout>
          </StackLayout>
        </ScrollView>
      </StackLayout>
    </DockLayout>`,
    directives:[Tab],
    styleUrls:["Pages/DetailPage.css"]
})
export class DetailPage implements OnInit{
  constructor(private _router: Router,
    private _topicService: TopicListService) {
    this.onTabClick = this.onTabClick.bind(this);
  }

  ngOnInit() {
    let params = {
      id: this._router.url.trim().split('/detail/')[1] 
    }
    this._topicService
     .getTopicDetail(params)
     .then(data => {
       const result = data._body;
        if(result && result.success) {
          console.log(JSON.stringify(result.data));
          this.title = result.data.title;
          this.author = result.data.author;
          this.time = result.data.create_at;
          this.content = result.data.content;
        }
     }).catch(error => {
       console.log(error);
     })
  }

  title:string = "";
  author:any = {};
  time:string = "";
  content:string = '';

  tabs:Array<{label:string,icon:string,active:boolean}> = [
    {label:'浏览(998)',icon:'fa-eye',active:false},
    {label:'收藏',icon:'fa-heart',active:false},
    {label:'评论(11k)',icon:'fa-comment',active:false}
  ];
  onTabClick(index) {
    if(index === 2) {
      this._router.navigate(["/response"]);
      return;
    }
    let item = this.tabs[index];
    item.active = !item.active;
    this.tabs = Array.prototype.concat(this.tabs.slice(0,index),item,this.tabs.slice(++index));
  }
}
