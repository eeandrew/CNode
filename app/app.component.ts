import { 
  Component, 
  ElementRef, 
  ViewChild, 
  Inject, 
  OnInit, 
  AfterViewInit, 
  ChangeDetectorRef
 } from "@angular/core";
import { 
  View 
} from "ui/core/view";
import {
  ScrollView
} from 'ui/scroll-view';
import {  
  Label
} from 'ui/label';
import {
  StackLayout
} from 'ui/layouts/stack-layout';
import {
  GestureTypes,
  TouchGestureEventData
} from 'ui/gestures';
import {
  device,
  platformNames,
  screen
} from 'platform';
import {
  TopicListService
} from './Services/topiclist.service';
import {
  Tab
} from './Components/Tab/tab.component';
import {
  ScrollBar
} from './Components/ScrollBar/scrollbar.component';
import {
  HScroller
} from './Components/HScroller/hscroller.component';
import { RadSideDrawer } from "nativescript-telerik-ui/sidedrawer";
import { Page } from "ui/page";
import { ActionItem } from "ui/action-bar";
import sideDrawerModule = require('nativescript-telerik-ui/sidedrawer');
import * as ObservableModule from "data/observable";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";

@Component({
    moduleId: module.id,
    selector: "mp-app",
    providers:[TopicListService],
    template:`
    <!--Action Bar-->
    <scroll-bar [leftPos]="leftPos" [onTabChange]="onTabChange"></scroll-bar>
    <DockLayout stretchLastChild="true" class="main-body">
      <!--Bottom Tab-->
      <StackLayout dock="bottom">
        <tab [tabs]="tabs"></tab>
      </StackLayout>
      <StackLayout class="scrollview-wrapper" dock="top">
          <hscroller [onScroll]="onScroll" [activeIndex]="activeIndex"></hscroller>
      </StackLayout>
     </DockLayout>
    `,
    directives:[Tab,ScrollBar,HScroller]
})
export class AppComponent implements OnInit,AfterViewInit {
  private indicator: Label;
  leftPos = 20;
  tabWidth = 0;
  activeIndex = 0;
  tabs = [{label:'首页',icon:'&#xf015;'},{label:'招聘',icon:'&#xf19d;'},{label:'收藏',icon:'&#xf004;'},{label:'通知',icon:'&#xf0f3;'},{label:'我',icon:'&#xf007;'}]
  /**
   * 0:no directin 1:right -1:left
   */
  private xDirection: number = 0;
  constructor( @Inject(Page) private page: Page, 
    private _changeDetectionRef: ChangeDetectorRef,
    private _topicListService: TopicListService) {
  }

  ngOnInit() {
    this.onTabChange = this.onTabChange.bind(this);
    this.onScroll = this.onScroll.bind(this);
    const topicParam = {
      tab:'job',
      limit:1
    };
    this._topicListService.getTopicList(topicParam)
  }

  private onScroll(pos:number){
    this.leftPos = pos;
    this._changeDetectionRef.detectChanges();
  }

 get dataItems() {
   return [{name:'test',description:'test'}];
  }

  private onTabChange(index:number) {
    this.activeIndex = index;
  }
  
  ngAfterViewInit() {
    console.log(screen.mainScreen.widthDIPs);
    setTimeout(()=>{
      this.tabWidth = screen.mainScreen.widthDIPs;
      this.leftPos = 20;
    },1);
  }
}