import {
  Component,
  Input,
  AfterViewInit,
  ViewChild
} from '@angular/core';

@Component({
  selector:'scroll-bar',
  template:`
   <ActionBar title="CNode">
    <ScrollView orientation="horizontal" width="320">
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
    </ActionBar>
  `,
  styleUrls:['./Components/ScrollBar/scrollbar.css']
})
export class ScrollBar {
  @ViewChild('indicator') indicatorRef;
  @Input('leftPos') leftPos:Number;
  @Input('onTabChange') onTabChange: Function;
  private changeTab(index:number) {
    this.onTabChange && this.onTabChange(index);
  }
}