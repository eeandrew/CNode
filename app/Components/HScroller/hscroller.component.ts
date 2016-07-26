import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnInit,
  ChangeDetectorRef,
  Input,
  OnChanges,
  SimpleChange
} from '@angular/core';
import {
  ScrollView
} from 'ui/scroll-view';
import {
  PlatformService
} from '../../Services/platform.service';

@Component({
  selector:'hscroller',
  template:`
     <ScrollView  #scrollview class="scrollview" orientation="horizontal" >
        <StackLayout class="scrollview-content" orientation="horizontal" >
            <GridLayout class="scrollview-tab" rows="auto,*" [style.width]="tabWidth">
              <ListView [items]="myItems" row="1">
                  <template let-item="item" let-i="index" let-odd="odd" let-even="even">
                      <StackLayout>
                          <Label [text]='"index: " + i'></Label>
                          <Label [text]='"[" + item.id +"] " + item.name'></Label>
                      </StackLayout>
                  </template>
              </ListView>
            </GridLayout>
            <StackLayout class="scrollview-tab" [style.width]="tabWidth"><Label text="2"></Label></StackLayout>
            <StackLayout class="scrollview-tab" [style.width]="tabWidth"><Label text="3"></Label></StackLayout>
            <StackLayout class="scrollview-tab" [style.width]="tabWidth"><Label text="4"></Label></StackLayout>
        </StackLayout>
    </ScrollView>
  `,
  styleUrls:[],
  providers:[PlatformService]
})
export class HScroller implements AfterViewInit,OnInit,OnChanges{
  @ViewChild('scrollview') scrollviewRef;
  @Input('onScroll') onScroll: Function;
  @Input('activeIndex') activeIndex:number;
  private scrollView:ScrollView;
  tabWidth = 0;
  leftPos = 20;
  public myItems;
  constructor(private _platformService:PlatformService,
  private _changeDetectionRef: ChangeDetectorRef) {
    this.myItems = [];
    for (var i = 0; i < 50; i++) {
        this.myItems.push({id:i, name:"data item " + i});
    }
  }

  ngOnInit() {
    this.onScrollViewScrolling = this.onScrollViewScrolling.bind(this);
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    if('activeIndex' in changes) {
      let activeIndex = changes['activeIndex'].currentValue;
      this.onTabChange(activeIndex);
    }
  }

   private onTabChange(index:number) {
    this.scrollView && this.scrollView.scrollToHorizontalOffset(index * this.tabWidth,true);
  }

  ngAfterViewInit() {
    setTimeout(()=>{
      this.tabWidth = this._platformService.getScreenWidthDIP();
    },1);
    this.scrollView = this.scrollviewRef.nativeElement;
    if(this._platformService.isIOS()) {
      this.scrollView.ios.showsHorizontalScrollIndicator = false;
      this.scrollView.ios.scrollEnabled = true;
      this.scrollView.ios.pagingEnabled = true;
    }
   this.scrollView.on('scroll',this.onScrollViewScrolling);
  }
  private onScrollViewScrolling(event):void {
    let scrollX = event.scrollX;
    this.leftPos = (scrollX / (this.tabWidth*3)) * 240 + 20;
    this.onScroll && this.onScroll(this.leftPos);
  }
}