"use strict";
var core_1 = require('@angular/core');
var ScrollBar = (function () {
    function ScrollBar(_changeDetectionRef) {
        this._changeDetectionRef = _changeDetectionRef;
    }
    ScrollBar.prototype.changeTab = function (index) {
        this.onTabChange && this.onTabChange(index);
    };
    ScrollBar.prototype.ngOnChanges = function (changes) {
        if ('tabIndex' in changes) {
            this.getTitle(changes['tabIndex'].currentValue);
        }
    };
    ScrollBar.prototype.getTitle = function (index) {
        switch (index) {
            case 0:
                this.title = '';
                break;
            case 1:
                this.title = '招聘';
                break;
            case 2:
                this.title = '收藏';
                break;
            case 3:
                this.title = '通知';
                break;
            case 4:
                this.title = '我';
                break;
            default:
                this.title = '首页';
        }
    };
    __decorate([
        core_1.ViewChild('indicator'), 
        __metadata('design:type', Object)
    ], ScrollBar.prototype, "indicatorRef", void 0);
    __decorate([
        core_1.Input('leftPos'), 
        __metadata('design:type', Number)
    ], ScrollBar.prototype, "leftPos", void 0);
    __decorate([
        core_1.Input('onTabChange'), 
        __metadata('design:type', Function)
    ], ScrollBar.prototype, "onTabChange", void 0);
    __decorate([
        core_1.Input('tabIndex'), 
        __metadata('design:type', Number)
    ], ScrollBar.prototype, "tabIndex", void 0);
    ScrollBar = __decorate([
        core_1.Component({
            selector: 'scroll-bar',
            template: "\n   <ActionBar [title]=\"title\">\n   <ActionItem *ngIf=\"tabIndex === 0\">\n      <ScrollView orientation=\"horizontal\" width=\"320\" >\n        <AbsoluteLayout class=\"navigator-wrapper\">\n          <StackLayout orientation=\"horizontal\" class=\"navigator\">\n            <Label class=\"navigator-item\" text=\"\u5168\u90E8\" (tap)=\"changeTab(0)\"></Label>\n            <Label class=\"navigator-item\" text=\"\u7CBE\u534E\" (tap)=\"changeTab(1)\"></Label>\n            <Label class=\"navigator-item\" text=\"\u5206\u4EAB\" (tap)=\"changeTab(2)\"></Label>\n            <Label class=\"navigator-item\" text=\"\u95EE\u7B54\" (tap)=\"changeTab(3)\"></Label>\n          </StackLayout>\n        <AbsoluteLayout class=\"indicator\">\n          <Label class=\"indicator-item\" #indicator [left]=\"leftPos\"></Label>\n        </AbsoluteLayout>\n        </AbsoluteLayout>\n      </ScrollView>\n    </ActionItem>\n    </ActionBar>\n  ",
            styleUrls: ['./Components/ScrollBar/scrollbar.css']
        }), 
        __metadata('design:paramtypes', [core_1.ChangeDetectorRef])
    ], ScrollBar);
    return ScrollBar;
}());
exports.ScrollBar = ScrollBar;
//# sourceMappingURL=scrollbar.component.js.map