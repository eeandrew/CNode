"use strict";
var core_1 = require('@angular/core');
var platform_service_1 = require('../../Services/platform.service');
var HScroller = (function () {
    function HScroller(_platformService, _changeDetectionRef) {
        this._platformService = _platformService;
        this._changeDetectionRef = _changeDetectionRef;
        this.tabWidth = 0;
        this.leftPos = 20;
        this.myItems = [];
        for (var i = 0; i < 50; i++) {
            this.myItems.push({ id: i, name: "data item " + i });
        }
    }
    HScroller.prototype.ngOnInit = function () {
        this.onScrollViewScrolling = this.onScrollViewScrolling.bind(this);
    };
    HScroller.prototype.ngOnChanges = function (changes) {
        if ('activeIndex' in changes) {
            var activeIndex = changes['activeIndex'].currentValue;
            this.onTabChange(activeIndex);
        }
    };
    HScroller.prototype.onTabChange = function (index) {
        this.scrollView && this.scrollView.scrollToHorizontalOffset(index * this.tabWidth, true);
    };
    HScroller.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.tabWidth = _this._platformService.getScreenWidthDIP();
        }, 1);
        this.scrollView = this.scrollviewRef.nativeElement;
        if (this._platformService.isIOS()) {
            this.scrollView.ios.showsHorizontalScrollIndicator = false;
            this.scrollView.ios.scrollEnabled = true;
            this.scrollView.ios.pagingEnabled = true;
        }
        this.scrollView.on('scroll', this.onScrollViewScrolling);
    };
    HScroller.prototype.onScrollViewScrolling = function (event) {
        var scrollX = event.scrollX;
        this.leftPos = (scrollX / (this.tabWidth * 3)) * 240 + 20;
        this.onScroll && this.onScroll(this.leftPos);
    };
    __decorate([
        core_1.ViewChild('scrollview'), 
        __metadata('design:type', Object)
    ], HScroller.prototype, "scrollviewRef", void 0);
    __decorate([
        core_1.Input('onScroll'), 
        __metadata('design:type', Function)
    ], HScroller.prototype, "onScroll", void 0);
    __decorate([
        core_1.Input('activeIndex'), 
        __metadata('design:type', Number)
    ], HScroller.prototype, "activeIndex", void 0);
    HScroller = __decorate([
        core_1.Component({
            selector: 'hscroller',
            template: "\n     <ScrollView  #scrollview class=\"scrollview\" orientation=\"horizontal\" >\n        <StackLayout class=\"scrollview-content\" orientation=\"horizontal\" >\n            <GridLayout class=\"scrollview-tab\" rows=\"auto,*\" [style.width]=\"tabWidth\">\n              <ListView [items]=\"myItems\" row=\"1\">\n                  <template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\n                      <StackLayout>\n                          <Label [text]='\"index: \" + i'></Label>\n                          <Label [text]='\"[\" + item.id +\"] \" + item.name'></Label>\n                      </StackLayout>\n                  </template>\n              </ListView>\n            </GridLayout>\n            <StackLayout class=\"scrollview-tab\" [style.width]=\"tabWidth\"><Label text=\"2\"></Label></StackLayout>\n            <StackLayout class=\"scrollview-tab\" [style.width]=\"tabWidth\"><Label text=\"3\"></Label></StackLayout>\n            <StackLayout class=\"scrollview-tab\" [style.width]=\"tabWidth\"><Label text=\"4\"></Label></StackLayout>\n        </StackLayout>\n    </ScrollView>\n  ",
            styleUrls: [],
            providers: [platform_service_1.PlatformService]
        }), 
        __metadata('design:paramtypes', [platform_service_1.PlatformService, core_1.ChangeDetectorRef])
    ], HScroller);
    return HScroller;
}());
exports.HScroller = HScroller;
//# sourceMappingURL=hscroller.component.js.map