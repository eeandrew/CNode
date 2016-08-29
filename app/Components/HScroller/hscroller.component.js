"use strict";
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var platform_service_1 = require('../../Services/platform.service');
var nativescript_ng2_fonticon_1 = require('nativescript-ng2-fonticon');
var ListItem_component_1 = require('../ListItem/ListItem.component');
var HScroller = (function () {
    function HScroller(_platformService, _changeDetectionRef, _router) {
        this._platformService = _platformService;
        this._changeDetectionRef = _changeDetectionRef;
        this._router = _router;
        this.tabWidth = 0;
        this.leftPos = 20;
        this.onItemTap = this.onItemTap.bind(this);
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
        var items;
        switch (this.activeIndex) {
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
        var item = items[args.itemIndex];
        console.log(JSON.stringify(item));
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
        core_1.Input('all'), 
        __metadata('design:type', Array)
    ], HScroller.prototype, "all", void 0);
    __decorate([
        core_1.Input('good'), 
        __metadata('design:type', Array)
    ], HScroller.prototype, "good", void 0);
    __decorate([
        core_1.Input('share'), 
        __metadata('design:type', Array)
    ], HScroller.prototype, "share", void 0);
    __decorate([
        core_1.Input('ask'), 
        __metadata('design:type', Array)
    ], HScroller.prototype, "ask", void 0);
    HScroller = __decorate([
        core_1.Component({
            selector: 'hscroller',
            templateUrl: 'Components/HScroller/hscroller.html',
            styleUrls: [],
            providers: [platform_service_1.PlatformService],
            pipes: [nativescript_ng2_fonticon_1.TNSFontIconPipe],
            directives: [ListItem_component_1.ListItem]
        }), 
        __metadata('design:paramtypes', [platform_service_1.PlatformService, core_1.ChangeDetectorRef, router_1.Router])
    ], HScroller);
    return HScroller;
}());
exports.HScroller = HScroller;
//# sourceMappingURL=hscroller.component.js.map