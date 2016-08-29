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
  Router
} from "@angular/router";
import {
  ScrollView
} from 'ui/scroll-view';
import {
  PlatformService
} from '../../Services/platform.service';
import {
  TNSFontIconPipe
} from 'nativescript-ng2-fonticon';
import {
  ListItem
} from '../ListItem/ListItem.component';

@Component({
  selector:'hscroller',
  templateUrl:'Components/HScroller/hscroller.html',
  styleUrls:[],
  providers:[PlatformService],
  pipes:[TNSFontIconPipe],
  directives:[ListItem]
})
export class HScroller implements AfterViewInit,OnInit,OnChanges{
  @ViewChild('scrollview') scrollviewRef;
  @Input('onScroll') onScroll: Function;
  @Input('activeIndex') activeIndex:number;
  @Input('all') all:Array<any>;
  @Input('good') good:Array<any>;
  @Input('share') share:Array<any>;
  @Input('ask') ask:Array<any>;

  private scrollView:ScrollView;
  tabWidth = 0;
  leftPos = 20;
  constructor(private _platformService:PlatformService,
  private _changeDetectionRef: ChangeDetectorRef,
  private _router: Router) {
    this.onItemTap = this.onItemTap.bind(this);
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

  onItemTap(args) {
    let items;
    switch(this.activeIndex) {
      case 0:
        items = this.all;
        break;
      case 1:
        items = this.good;
        break;
      case 2:
       items = this.share;
       break;
      case 3:
        items = this.ask;
        break;
    }
    let item = items[args.itemIndex];
    console.log(JSON.stringify(item));
    this._router.navigate([`/detail/${item.id}`]);
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