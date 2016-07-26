"use strict";
var core_1 = require('@angular/core');
var platform_service_1 = require('../../Services/platform.service');
var HScroller = (function () {
    function HScroller(_platformService, _changeDetectionRef) {
        this._platformService = _platformService;
        this._changeDetectionRef = _changeDetectionRef;
        this.tabWidth = 0;
        this.leftPos = 20;
    }
    HScroller.prototype.ngOnInit = function () {
        this.onScrollViewScrolling = this.onScrollViewScrolling.bind(this);
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
        console.log(scrollX);
        this.leftPos = (scrollX / (this.tabWidth * 3)) * 240 + 20;
        this._changeDetectionRef.detectChanges();
    };
    __decorate([
        core_1.ViewChild('scrollview'), 
        __metadata('design:type', Object)
    ], HScroller.prototype, "scrollviewRef", void 0);
    HScroller = __decorate([
        core_1.Component({
            selector: 'hscroller',
            template: "\n    <ScrollView #scrollview class=\"scrollview\" orientation=\"horizontal\">\n      <ng-content></ng-content>\n    </ScrollView>\n  ",
            styleUrls: [],
            providers: [platform_service_1.PlatformService]
        }), 
        __metadata('design:paramtypes', [platform_service_1.PlatformService, core_1.ChangeDetectorRef])
    ], HScroller);
    return HScroller;
}());
exports.HScroller = HScroller;
//# sourceMappingURL=hscroller.component.js.map