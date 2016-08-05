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
    <DockLayout stretchLastChild="true">
      <StackLayout dock="bottom">
        <tab [tabs]="tabs" [onTabChange]="onTabClick" displayMode="{{true}}"></tab>
      </StackLayout>
      <StackLayout dock="top">
        <Label text="top"></Label>
      </StackLayout>
    </DockLayout>`,
    directives:[Tab]
})
export class DetailPage {
  constructor() {
    this.onTabClick = this.onTabClick.bind(this);
  }

  tabs:Array<{label:string,icon:string,active:boolean}> = [
    {label:'浏览(998)',icon:'fa-eye',active:false},
    {label:'收藏',icon:'fa-heart',active:false},
    {label:'评论(11k)',icon:'fa-comment',active:false}
  ];
  onTabClick(index) {
    let item = this.tabs[index];
    item.active = !item.active;
    //this.tabs = Array.prototype.concat(this.tabs.slice(0,index),item,this.tabs.slice(++index));
  }
}
