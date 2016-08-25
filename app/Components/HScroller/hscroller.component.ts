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

@Component({
  selector:'hscroller',
  template:`
     <ScrollView  #scrollview class="scrollview" orientation="horizontal">
        <StackLayout class="scrollview-content" orientation="horizontal" >
            <GridLayout class="scrollview-tab" rows="auto,*" [style.width]="tabWidth" >
              <RadListView [items]="items" row="1" (itemTap)="onItemTap(item)" class="scrollview-content">
                  <template listItemTemplate let-item="item" let-i="index">
                    <StackLayout orientation="vertical" class="list-item">
                      <StackLayout orientation="horizontal" class="list-content">
                        <!--头像-->
                        <Image class="list-avatar" [src]="item.author.avatar_url"></Image>
                        <!--用户名 创建时间-->
                        <StackLayout orientation="vertical">
                          <Label [text]="item.author.loginname" class="font15"></Label>
                          <Label [text]="item.create_at" class="font10"></Label>
                        </StackLayout>
                      </StackLayout>
                      <!--title-->
                      <StackLayout orientation="vertical" class="list-title font15">
                          <Label [text]="item.title" textWrap="true"></Label>
                      </StackLayout>
                      <!--meta信息-->
                      <GridLayout rows="auto" columns="1*,1*,1*" class="meta-section">
                        <!--收藏-->
                        <StackLayout row="0" col="0" class="meta-tag" orientation="vertical">
                          <StackLayout orientation="horizontal" class="meta-tag-item font12">
                            <Label class="font-awesome" text="{{'fa-heart' | fonticon}}"></Label>
                            <Label text="收藏"></Label>
                          </StackLayout>
                        </StackLayout>
                        <!--浏览-->
                        <StackLayout row="0" col="1" class="meta-tag" orientation="vertical">
                          <StackLayout orientation="horizontal" class="meta-tag-item font12">
                            <Label class="font-awesome" text="{{'fa-eye' | fonticon}}"></Label>
                            <Label text="浏览"></Label>
                          </StackLayout>
                        </StackLayout>
                        <!--评论-->
                        <StackLayout row="0" col="2" class="meta-tag" orientation="vertical">
                          <StackLayout orientation="horizontal" class="meta-tag-item font12">
                            <Label class="font-awesome" text="{{'fa-comment' | fonticon}}"></Label>
                            <Label text="评论"></Label>
                          </StackLayout>
                        </StackLayout>
                      </GridLayout>
                      <Label class="border-bottom"></Label>
                    </StackLayout>
                  </template>
              </RadListView>
            </GridLayout>
            <StackLayout class="scrollview-tab" [style.width]="tabWidth"><Label text="2"></Label></StackLayout>
            <StackLayout class="scrollview-tab" [style.width]="tabWidth"><Label text="3"></Label></StackLayout>
            <StackLayout class="scrollview-tab" [style.width]="tabWidth"><Label text="4"></Label></StackLayout>
        </StackLayout>
    </ScrollView>
  `,
  styleUrls:[],
  providers:[PlatformService],
  pipes:[TNSFontIconPipe]
})
export class HScroller implements AfterViewInit,OnInit,OnChanges{
  @ViewChild('scrollview') scrollviewRef;
  @Input('onScroll') onScroll: Function;
  @Input('activeIndex') activeIndex:number;
  @Input('items') items:Array<any>;

  private scrollView:ScrollView;
  tabWidth = 0;
  leftPos = 20;
  constructor(private _platformService:PlatformService,
  private _changeDetectionRef: ChangeDetectorRef,
  private _router: Router) {
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

  onItemTap(item) {
    console.log(item);
    this._router.navigate(["/detail"]);
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