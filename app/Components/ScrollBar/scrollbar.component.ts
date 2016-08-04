import {
  Component,
  Input,
  AfterViewInit,
  ViewChild,
  OnChanges,
  SimpleChange,
  ChangeDetectorRef
} from '@angular/core';

@Component({
  selector:'scroll-bar',
  template:`
   <ActionBar [title]="title">
   <ActionItem *ngIf="tabIndex === 0">
      <ScrollView orientation="horizontal" width="320" >
        <AbsoluteLayout class="navigator-wrapper">
          <StackLayout orientation="horizontal" class="navigator">
            <Label class="navigator-item" text="全部" (tap)="changeTab(0)"></Label>
            <Label class="navigator-item" text="精华" (tap)="changeTab(1)"></Label>
            <Label class="navigator-item" text="分享" (tap)="changeTab(2)"></Label>
            <Label class="navigator-item" text="问答" (tap)="changeTab(3)"></Label>
          </StackLayout>
        <AbsoluteLayout class="indicator">
          <Label class="indicator-item" #indicator [left]="leftPos"></Label>
        </AbsoluteLayout>
        </AbsoluteLayout>
      </ScrollView>
    </ActionItem>
    </ActionBar>
  `,
  styleUrls:['./Components/ScrollBar/scrollbar.css']
})
export class ScrollBar implements OnChanges{
  @ViewChild('indicator') indicatorRef;
  @Input('leftPos') leftPos:Number;
  @Input('onTabChange') onTabChange: Function;
  @Input('tabIndex') tabIndex: Number;
  public title:string;
  constructor(private _changeDetectionRef: ChangeDetectorRef) {

  }

  private changeTab(index:number) {
    this.onTabChange && this.onTabChange(index);
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    if('tabIndex' in changes) {
      this.getTitle(changes['tabIndex'].currentValue);
    }
  }

  private getTitle(index:Number) {
    switch(index) {
      case 0:
        this.title = '';
        break;
      case 1:
        this.title = '招聘';
        break;
      case 2:
        this.title = '收藏';
        break;
      case 3:
        this.title = '通知';
        break;
      case 4:
        this.title = '我';
        break;
      default:
        this.title = '首页';
    }
  }
}