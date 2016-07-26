import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnInit,
  ChangeDetectorRef
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
    <ScrollView #scrollview class="scrollview" orientation="horizontal">
      <ng-content></ng-content>
    </ScrollView>
  `,
  styleUrls:[],
  providers:[PlatformService]
})
export class HScroller implements AfterViewInit,OnInit{
  @ViewChild('scrollview') scrollviewRef;
  private scrollView:ScrollView;
  tabWidth = 0;
  leftPos = 20;
  constructor(private _platformService:PlatformService,
  private _changeDetectionRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.onScrollViewScrolling = this.onScrollViewScrolling.bind(this);
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
    console.log(scrollX);
    this.leftPos = (scrollX / (this.tabWidth*3)) * 240 + 20;
    this._changeDetectionRef.detectChanges();
  }
}