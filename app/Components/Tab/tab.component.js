"use strict";
var core_1 = require('@angular/core');
var Tab = (function () {
    function Tab() {
        this.activeIndex = 0;
    }
    Tab.prototype.ngOnInit = function () {
        this.columns = this.getColumns(this.tabs.length);
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
            template: "\n    <GridLayout class=\"bottom-tab\" rows=\"1,*\" [columns]=\"columns\">\n      <Label class=\"border\" row=\"0\" col=\"0\" [colSpan]=\"tabs.length\"></Label>\n      <AbsoluteLayout (tap)=\"onTabClick(i)\" row=\"1\" [col]=\"i\" class=\"bottom-tab-item\" *ngFor=\"let tab of tabs;let i = index;\">\n        <StackLayout orientation=\"vertical\" [ngClass]=\"getClass(i)\">\n          <Label text=\"&#xf015;\" class=\"font-awesome tab-icon\" ></Label>\n          <Label [text]=\"tab.label\" class=\"tab-label\"></Label>\n        </StackLayout>\n      </AbsoluteLayout>\n    </GridLayout>\n  ",
            styleUrls: ['./Components/Tab/tab.css']
        }), 
        __metadata('design:paramtypes', [])
    ], Tab);
    return Tab;
}());
exports.Tab = Tab;
//# sourceMappingURL=tab.component.js.map