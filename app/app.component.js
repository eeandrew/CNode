"use strict";
var core_1 = require("@angular/core");
var platform_1 = require('platform');
var topiclist_service_1 = require('./Services/topiclist.service');
var tab_component_1 = require('./Components/Tab/tab.component');
var scrollbar_component_1 = require('./Components/ScrollBar/scrollbar.component');
var hscroller_component_1 = require('./Components/HScroller/hscroller.component');
var page_1 = require("ui/page");
var AppComponent = (function () {
    function AppComponent(page, _changeDetectionRef, _topicListService) {
        this.page = page;
        this._changeDetectionRef = _changeDetectionRef;
        this._topicListService = _topicListService;
        this.leftPos = 20;
        this.tabWidth = 0;
        this.tabs = [{ label: '首页', icon: '&#xf015;' }, { label: '招聘', icon: '&#xf19d;' }, { label: '收藏', icon: '&#xf004;' }, { label: '通知', icon: '&#xf0f3;' }, { label: '我', icon: '&#xf007;' }];
        /**
         * 0:no directin 1:right -1:left
         */
        this.xDirection = 0;
        this.myItems = [];
        for (var i = 0; i < 50; i++) {
            this.myItems.push({ id: i, name: "data item " + i });
        }
    }
    AppComponent.prototype.ngOnInit = function () {
        this.onScrollViewScrolling = this.onScrollViewScrolling.bind(this);
        this.onTabChange = this.onTabChange.bind(this);
        var topicParam = {
            tab: 'job',
            limit: 1
        };
        this._topicListService.getTopicList(topicParam);
    };
    AppComponent.prototype.isAndroid = function () {
        return platform_1.device.os === platform_1.platformNames.android;
    };
    AppComponent.prototype.isIOS = function () {
        return platform_1.device.os === platform_1.platformNames.ios;
    };
    AppComponent.prototype.onScrollViewScrolling = function (event) {
        var scrollX = event.scrollX;
        console.log(scrollX);
        this.leftPos = (scrollX / (this.tabWidth * 3)) * 240 + 20;
        this._changeDetectionRef.detectChanges();
    };
    Object.defineProperty(AppComponent.prototype, "dataItems", {
        get: function () {
            return [{ name: 'test', description: 'test' }];
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onTabChange = function (index) {
        this.scrollView.scrollToHorizontalOffset(index * this.tabWidth, true);
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log(platform_1.screen.mainScreen.widthDIPs);
        setTimeout(function () {
            _this.tabWidth = platform_1.screen.mainScreen.widthDIPs;
            _this.leftPos = 20;
        }, 1);
        this.scrollView = this.scrollViewRef.nativeElement;
        this.wrapper = this.wrapperRef.nativeElement;
        this.isAndroid() && this.scrollView.android.setShowsHorizontalScrollIndicator(false);
        this.scrollView.on('scroll', this.onScrollViewScrolling);
        if (this.isIOS()) {
            this.scrollView.ios.showsHorizontalScrollIndicator = false;
            this.scrollView.ios.scrollEnabled = true;
            this.scrollView.ios.pagingEnabled = true;
        }
    };
    __decorate([
        core_1.ViewChild('scrollview'), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "scrollViewRef", void 0);
    __decorate([
        core_1.ViewChild('wrapper'), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "wrapperRef", void 0);
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "mp-app",
            providers: [topiclist_service_1.TopicListService],
            template: "\n    <!--Action Bar-->\n    <scroll-bar [leftPos]=\"leftPos\" [onTabChange]=\"onTabChange\"></scroll-bar>\n    <DockLayout stretchLastChild=\"true\" class=\"main-body\">\n      <!--Bottom Tab-->\n      <StackLayout dock=\"bottom\">\n        <tab [tabs]=\"tabs\"></tab>\n      </StackLayout>\n      <StackLayout #wrapper class=\"scrollview-wrapper\" dock=\"top\">\n          <ScrollView  #scrollview class=\"scrollview\" orientation=\"horizontal\" >\n              <StackLayout class=\"scrollview-content\" orientation=\"horizontal\" >\n                  <GridLayout class=\"scrollview-tab\" rows=\"auto,*\" [style.width]=\"tabWidth\">\n                    <ListView [items]=\"myItems\" row=\"1\">\n                        <template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\n                            <StackLayout>\n                                <Label [text]='\"index: \" + i'></Label>\n                                <Label [text]='\"[\" + item.id +\"] \" + item.name'></Label>\n                            </StackLayout>\n                        </template>\n                    </ListView>\n                  </GridLayout>\n                  <StackLayout class=\"scrollview-tab\" [style.width]=\"tabWidth\"><Label text=\"2\"></Label></StackLayout>\n                  <StackLayout class=\"scrollview-tab\" [style.width]=\"tabWidth\"><Label text=\"3\"></Label></StackLayout>\n                  <StackLayout class=\"scrollview-tab\" [style.width]=\"tabWidth\"><Label text=\"4\"></Label></StackLayout>\n              </StackLayout>\n          </ScrollView>\n      </StackLayout>\n     </DockLayout>\n    ",
            directives: [tab_component_1.Tab, scrollbar_component_1.ScrollBar, hscroller_component_1.HScroller]
        }),
        __param(0, core_1.Inject(page_1.Page)), 
        __metadata('design:paramtypes', [page_1.Page, core_1.ChangeDetectorRef, topiclist_service_1.TopicListService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map