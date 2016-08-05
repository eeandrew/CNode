"use strict";
var core_1 = require('@angular/core');
var nativescript_ng2_fonticon_1 = require('nativescript-ng2-fonticon');
var enums_1 = require("ui/enums");
var Tab = (function () {
    function Tab() {
        this.activeIndex = 0;
    }
    Tab.prototype.ngOnInit = function () {
        this.columns = this.getColumns(this.tabs.length);
    };
    Tab.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tabElem = this.tabRef.nativeElement;
        this.tabElem.animate({
            translate: { x: 0, y: 40 },
            duration: 0,
        });
        setTimeout(function () {
            _this.tabElem.animate({
                translate: { x: 0, y: 0 },
                opacity: 1,
                duration: 300,
                curve: enums_1.AnimationCurve.easeIn
            });
        }, 100);
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
        this.onTabChange && this.onTabChange(index);
    };
    Tab.prototype.getClass = function (index) {
        var item = this.tabs[index];
        return {
            "major-gray-color": this.activeIndex !== index || !item.active,
            "major-blue-color": (this.activeIndex === index && !this.displayMode) || (this.displayMode && item.active),
        };
    };
    __decorate([
        core_1.Input('tabs'), 
        __metadata('design:type', Array)
    ], Tab.prototype, "tabs", void 0);
    __decorate([
        core_1.Input('onTabChange'), 
        __metadata('design:type', Function)
    ], Tab.prototype, "onTabChange", void 0);
    __decorate([
        core_1.Input('displayMode'), 
        __metadata('design:type', Boolean)
    ], Tab.prototype, "displayMode", void 0);
    __decorate([
        core_1.ViewChild('tab'), 
        __metadata('design:type', Object)
    ], Tab.prototype, "tabRef", void 0);
    Tab = __decorate([
        core_1.Component({
            selector: 'tab',
            template: "\n    <GridLayout class=\"tab\" rows=\"1,*\" [columns]=\"columns\" #tab>\n      <Label class=\"border\" row=\"0\" col=\"0\" [colSpan]=\"tabs.length\"></Label>\n      <AbsoluteLayout (tap)=\"onTabClick(i)\" row=\"1\" [col]=\"i\" class=\"tab-item\" *ngFor=\"let tab of tabs;let i = index;\">\n        <StackLayout orientation=\"vertical\" [ngClass]=\"getClass(i)\">\n          <Label [text]=\"tab.icon | fonticon\" class=\"font-awesome tab-icon\" ></Label>\n          <Label [text]=\"tab.label\" class=\"tab-label\"></Label>\n        </StackLayout>\n      </AbsoluteLayout>\n    </GridLayout>\n  ",
            styleUrls: ['./Components/Tab/tab.css'],
            pipes: [nativescript_ng2_fonticon_1.TNSFontIconPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], Tab);
    return Tab;
}());
exports.Tab = Tab;
//# sourceMappingURL=tab.component.js.map