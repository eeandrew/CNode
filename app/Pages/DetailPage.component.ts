import { 
  Component, 
  OnInit, 
  ChangeDetectorRef
 } from "@angular/core";
import {
  Tab
} from '../Components/Tab/tab.component';

@Component({
    selector:"detail-page",
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
              <Image class="avatar-small" src="res://avatar_default"></Image>
              <Label [text]="author" class="font12 ml5"></Label>
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
export class DetailPage {
  constructor() {
    this.onTabClick = this.onTabClick.bind(this);
  }

  title:string = "头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息";
  author:string = "eeandrew";
  time:string = "1小时前";
  content:string = '头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息';

  tabs:Array<{label:string,icon:string,active:boolean}> = [
    {label:'浏览(998)',icon:'fa-eye',active:false},
    {label:'收藏',icon:'fa-heart',active:false},
    {label:'评论(11k)',icon:'fa-comment',active:false}
  ];
  onTabClick(index) {
    let item = this.tabs[index];
    item.active = !item.active;
    this.tabs = Array.prototype.concat(this.tabs.slice(0,index),item,this.tabs.slice(++index));
  }
}
