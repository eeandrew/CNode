import {
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector:'tab',
  template:`
    <GridLayout class="bottom-tab" rows="1,*" [columns]="columns">
      <Label class="border" row="0" col="0" [colSpan]="tabs.length"></Label>
      <AbsoluteLayout (tap)="onTabClick(i)" row="1" [col]="i" class="bottom-tab-item" *ngFor="let tab of tabs;let i = index;">
        <StackLayout orientation="vertical" [ngClass]="getClass(i)">
          <Label text="&#xf015;" class="font-awesome tab-icon" ></Label>
          <Label [text]="tab.label" class="tab-label"></Label>
        </StackLayout>
      </AbsoluteLayout>
    </GridLayout>
  `,
  styleUrls:['./Components/Tab/tab.css']
})
export class Tab implements OnInit{
  @Input('tabs') tabs:Array<Object>;
  //@Input('onTabChange') onTabChange:Function;
  columns:string;
  activeIndex:number = 0;
  ngOnInit() {
    this.columns = this.getColumns(this.tabs.length);
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
  }

  private getClass(index) {
    return {
      "major-gray-color": this.activeIndex !== index,
      "major-blue-color": this.activeIndex === index,
    };
  }
}