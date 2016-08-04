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
        <Label text="bottom"></Label>
        <tab [tabs]="tabs" [onTabChange]="onTabClick"></tab>
      </StackLayout>
      <StackLayout dock="top">
        <Label text="top"></Label>
      </StackLayout>
    </DockLayout>`,
})
export class DetailPage {
  tabs = [{label:'首页',icon:'fa-home'},{label:'招聘',icon:'fa-graduation-cap'},{label:'收藏',icon:'fa-heart'},{label:'通知',icon:'fa-bell'},{label:'我',icon:'fa-user'}];

  onTabClick() {

  }
}
