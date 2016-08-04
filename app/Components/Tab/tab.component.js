"use strict";
var core_1 = require('@angular/core');
var nativescript_ng2_fonticon_1 = require('nativescript-ng2-fonticon');
var Tab = (function () {
    function Tab() {
        this.activeIndex = 0;
        this.test = false;
    }
    Tab.prototype.ngOnInit = function () {
        this.columns = this.getColumns(this.tabs.length);
    };
    Tab.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.test = true;
        }, 10);
    };
    Tab.prototype.getColumns = function (count) {
        var columns = [];
        for (var i = 0; i < count; i++) {
            columns.push('1*');
        }
        return columns.join(',');
    };
    Tab.prototype.onTabClick = function (index) {
        this.activeIndex = index;
    };
    Tab.prototype.testClass = function () {
        return {
            "font-awesome": this.test,
            "tab-icon": this.test
        };
    };
    Tab.prototype.getClass = function (index) {
        return {
            "major-gray-color": this.activeIndex !== index,
            "major-blue-color": this.activeIndex === index,
        };
    };
    __decorate([
        core_1.Input('tabs'), 
        __metadata('design:type', Array)
    ], Tab.prototype, "tabs", void 0);
    Tab = __decorate([
        core_1.Component({
            selector: 'tab',
            template: "\n    <GridLayout class=\"tab\" rows=\"1,*\" [columns]=\"columns\">\n      <Label class=\"border\" row=\"0\" col=\"0\" [colSpan]=\"tabs.length\"></Label>\n      <AbsoluteLayout (tap)=\"onTabClick(i)\" row=\"1\" [col]=\"i\" class=\"tab-item\" *ngFor=\"let tab of tabs;let i = index;\">\n        <StackLayout orientation=\"vertical\" [ngClass]=\"getClass(i)\">\n          <Label [text]=\"tab.icon | fonticon\" class=\"font-awesome tab-icon\" ></Label>\n          <Label [text]=\"tab.label\" class=\"tab-label\"></Label>\n        </StackLayout>\n      </AbsoluteLayout>\n    </GridLayout>\n  ",
            styleUrls: ['./Components/Tab/tab.css'],
            pipes: [nativescript_ng2_fonticon_1.TNSFontIconPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], Tab);
    return Tab;
}());
exports.Tab = Tab;
//# sourceMappingURL=tab.component.js.map