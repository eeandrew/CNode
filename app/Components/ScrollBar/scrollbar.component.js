"use strict";
var core_1 = require('@angular/core');
var ScrollBar = (function () {
    function ScrollBar() {
    }
    ScrollBar.prototype.changeTab = function (index) {
        this.onTabChange && this.onTabChange(index);
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
    ScrollBar = __decorate([
        core_1.Component({
            selector: 'scroll-bar',
            template: "\n   <ActionBar title=\"CNode\">\n    <ScrollView orientation=\"horizontal\" width=\"320\">\n      <AbsoluteLayout class=\"navigator-wrapper\">\n        <StackLayout orientation=\"horizontal\" class=\"navigator\">\n          <Label class=\"navigator-item\" text=\"\u5168\u90E8\" (tap)=\"changeTab(0)\"></Label>\n          <Label class=\"navigator-item\" text=\"\u7CBE\u534E\" (tap)=\"changeTab(1)\"></Label>\n          <Label class=\"navigator-item\" text=\"\u5206\u4EAB\" (tap)=\"changeTab(2)\"></Label>\n          <Label class=\"navigator-item\" text=\"\u95EE\u7B54\" (tap)=\"changeTab(3)\"></Label>\n        </StackLayout>\n      <AbsoluteLayout class=\"indicator\">\n        <Label class=\"indicator-item\" #indicator [left]=\"leftPos\"></Label>\n      </AbsoluteLayout>\n      </AbsoluteLayout>\n    </ScrollView>\n    </ActionBar>\n  ",
            styleUrls: ['./Components/ScrollBar/scrollbar.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ScrollBar);
    return ScrollBar;
}());
exports.ScrollBar = ScrollBar;
//# sourceMappingURL=scrollbar.component.js.map