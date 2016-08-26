"use strict";
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var platform_service_1 = require('../../Services/platform.service');
var nativescript_ng2_fonticon_1 = require('nativescript-ng2-fonticon');
var HScroller = (function () {
    function HScroller(_platformService, _changeDetectionRef, _router) {
        this._platformService = _platformService;
        this._changeDetectionRef = _changeDetectionRef;
        this._router = _router;
        this.tabWidth = 0;
        this.leftPos = 20;
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
    HScroller.prototype.onItemTap = function (args) {
        console.log(JSON.stringify(this.items[args.itemIndex]));
        var item = this.items[args.itemIndex];
        this._router.navigate([("/detail/" + item.id)]);
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
    __decorate([
        core_1.Input('items'), 
        __metadata('design:type', Array)
    ], HScroller.prototype, "items", void 0);
    HScroller = __decorate([
        core_1.Component({
            selector: 'hscroller',
            template: "\n     <ScrollView  #scrollview class=\"scrollview\" orientation=\"horizontal\">\n        <StackLayout class=\"scrollview-content\" orientation=\"horizontal\" >\n            <GridLayout class=\"scrollview-tab\" rows=\"auto,*\" [style.width]=\"tabWidth\" >\n              <RadListView [items]=\"items\" row=\"1\" (itemTap)=\"onItemTap($event)\" class=\"scrollview-content\">\n                  <template listItemTemplate let-item=\"item\" let-i=\"index\">\n                    <StackLayout orientation=\"vertical\" class=\"list-item\">\n                      <StackLayout orientation=\"horizontal\" class=\"list-content \">\n                        <!--\u5934\u50CF-->\n                        <Image class=\"list-avatar\" [src]=\"item.author.avatar_url\"></Image>\n                        <!--\u7528\u6237\u540D \u521B\u5EFA\u65F6\u95F4-->\n                        <StackLayout orientation=\"vertical\">\n                          <Label [text]=\"item.author.loginname\" class=\"font15\"></Label>\n                          <Label [text]=\"item.create_at\" class=\"font10\"></Label>\n                        </StackLayout>\n                      </StackLayout>\n                      <!--title-->\n                      <StackLayout orientation=\"vertical\" class=\"list-title font15\">\n                          <Label [text]=\"item.title\" textWrap=\"true\"></Label>\n                      </StackLayout>\n                      <!--meta\u4FE1\u606F-->\n                      <GridLayout rows=\"auto\" columns=\"1*,1*,1*\" class=\"meta-section\">\n                        <!--\u6536\u85CF-->\n                        <StackLayout row=\"0\" col=\"0\" class=\"meta-tag\" orientation=\"vertical\">\n                          <StackLayout orientation=\"horizontal\" class=\"meta-tag-item font12\">\n                            <Label class=\"font-awesome\" text=\"{{'fa-heart' | fonticon}}\"></Label>\n                            <Label text=\"\u6536\u85CF\"></Label>\n                          </StackLayout>\n                        </StackLayout>\n                        <!--\u6D4F\u89C8-->\n                        <StackLayout row=\"0\" col=\"1\" class=\"meta-tag\" orientation=\"vertical\">\n                          <StackLayout orientation=\"horizontal\" class=\"meta-tag-item font12\">\n                            <Label class=\"font-awesome\" text=\"{{'fa-eye' | fonticon}}\"></Label>\n                            <Label text=\"\u6D4F\u89C8\"></Label>\n                          </StackLayout>\n                        </StackLayout>\n                        <!--\u8BC4\u8BBA-->\n                        <StackLayout row=\"0\" col=\"2\" class=\"meta-tag\" orientation=\"vertical\">\n                          <StackLayout orientation=\"horizontal\" class=\"meta-tag-item font12\">\n                            <Label class=\"font-awesome\" text=\"{{'fa-comment' | fonticon}}\"></Label>\n                            <Label text=\"\u8BC4\u8BBA\"></Label>\n                          </StackLayout>\n                        </StackLayout>\n                      </GridLayout>\n                      <Label class=\"border-bottom\"></Label>\n                    </StackLayout>\n                  </template>\n              </RadListView>\n            </GridLayout>\n            <StackLayout class=\"scrollview-tab\" [style.width]=\"tabWidth\"><Label text=\"2\"></Label></StackLayout>\n            <StackLayout class=\"scrollview-tab\" [style.width]=\"tabWidth\"><Label text=\"3\"></Label></StackLayout>\n            <StackLayout class=\"scrollview-tab\" [style.width]=\"tabWidth\"><Label text=\"4\"></Label></StackLayout>\n        </StackLayout>\n    </ScrollView>\n  ",
            styleUrls: [],
            providers: [platform_service_1.PlatformService],
            pipes: [nativescript_ng2_fonticon_1.TNSFontIconPipe]
        }), 
        __metadata('design:paramtypes', [platform_service_1.PlatformService, core_1.ChangeDetectorRef, router_1.Router])
    ], HScroller);
    return HScroller;
}());
exports.HScroller = HScroller;
//# sourceMappingURL=hscroller.component.js.map