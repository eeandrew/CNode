import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  ViewChild
} from '@angular/core';
import {
  TNSFontIconPipe
} from 'nativescript-ng2-fonticon';
import {
  GridLayout
} from 'ui/layouts/grid-layout';
import {
  AnimationCurve
} from "ui/enums";

@Component({
  selector:'tab',
  template:`
    <GridLayout class="tab" rows="1,*" [columns]="columns" #tab>
      <Label class="border" row="0" col="0" [colSpan]="tabs.length"></Label>
      <AbsoluteLayout (tap)="onTabClick(i)" row="1" [col]="i" class="tab-item" *ngFor="let tab of tabs;let i = index;">
        <StackLayout orientation="vertical" [ngClass]="getClass(i)">
          <Label [text]="tab.icon | fonticon" class="font-awesome tab-icon" ></Label>
          <Label [text]="tab.label" class="tab-label"></Label>
        </StackLayout>
      </AbsoluteLayout>
    </GridLayout>
  `,
  styleUrls:['./Components/Tab/tab.css'],
  pipes: [TNSFontIconPipe]
})
export class Tab implements OnInit,AfterViewInit{
  @Input('tabs') tabs:Array<{label:string,icon:string,active:boolean}>;
  @Input('onTabChange') onTabChange:Function;
  @Input('displayMode') displayMode:boolean;
  @ViewChild('tab') tabRef;

  tabElem: GridLayout;
  columns:string;
  activeIndex:number = 0;
  ngOnInit() {
    this.columns = this.getColumns(this.tabs.length);
  }

  ngAfterViewInit() {
    this.tabElem = this.tabRef.nativeElement;
    this.tabElem.animate({
      translate:{x:0,y:40},
      duration:0,
    });
    setTimeout(()=>{
      this.tabElem.animate({
        translate:{x:0,y:0},
        opacity:1,
        duration:300,
        curve:AnimationCurve.easeIn
      });
    },100);
  }

  private getColumns(count:number):string {
    let columns = [];
    for(let i=0;i<count;i++) {
      columns.push('1*');
    }
    return columns.join(',');
  }

  private onTabClick(index:number):void {
    this.activeIndex = index;
    this.onTabChange && this.onTabChange(index);
  }


  private getClass(index) {
    let item = this.tabs[index];
    return {
      "major-gray-color": this.activeIndex !== index || !item.active,
      "major-blue-color": (this.activeIndex === index && !this.displayMode) || (this.displayMode && item.active) ,
    };
  }
}