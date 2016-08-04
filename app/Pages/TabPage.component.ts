import { 
  Component, 
  OnInit, 
  ChangeDetectorRef
 } from "@angular/core";
import {
  TopicListService
} from '../Services/topiclist.service';
import {
  Tab
} from '../Components/Tab/tab.component';
import {
  ScrollBar
} from '../Components/ScrollBar/scrollbar.component';
import {
  HScroller
} from '../Components/HScroller/hscroller.component';

@Component({
    selector: "mp-app",
    providers:[TopicListService],
    template:`
    <!--Action Bar-->
    <scroll-bar [leftPos]="leftPos" [onTabChange]="onTabChange" [tabIndex]="activeTab"></scroll-bar>
    <DockLayout stretchLastChild="true">
      <!--底部tab-->
      <StackLayout dock="bottom">
        <tab [tabs]="tabs" [onTabChange]="onMainTabChange"></tab>
      </StackLayout>
      <!--主内容区-->
      <StackLayout class="scrollview-wrapper" dock="top">
          <!--首页-->
          <hscroller *ngIf="activeTab === 0" [onScroll]="onScroll" [activeIndex]="activeIndex"></hscroller>
          <Label text="tab2" *ngIf="activeTab === 1"></Label>
      </StackLayout>
     </DockLayout>
    `,
    directives:[Tab,ScrollBar,HScroller]
})
export class TabPage implements OnInit {
  leftPos = 20;
  tabWidth = 0;
  activeIndex = 0;
  activeTab = 0;
  tabs = [{label:'首页',icon:'fa-home'},{label:'招聘',icon:'fa-graduation-cap'},{label:'收藏',icon:'fa-heart'},{label:'通知',icon:'fa-bell'},{label:'我',icon:'fa-user'}]
  /**
   * 0:no directin 1:right -1:left
   */
  private xDirection: number = 0;
  constructor( private _changeDetectionRef: ChangeDetectorRef,
    private _topicListService: TopicListService) {
  }

  ngOnInit() {
    this.onTabChange = this.onTabChange.bind(this);
    this.onMainTabChange = this.onMainTabChange.bind(this);
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

  private onMainTabChange(index:number) {
    this.activeTab = index;
  }

 get dataItems() {
   return [{name:'test',description:'test'}];
  }

  private onTabChange(index:number) {
    this.activeIndex = index;
  }
}