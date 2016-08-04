"use strict";
var core_1 = require("@angular/core");
var DetailPage = (function () {
    function DetailPage() {
        this.tabs = [{ label: '首页', icon: 'fa-home' }, { label: '招聘', icon: 'fa-graduation-cap' }, { label: '收藏', icon: 'fa-heart' }, { label: '通知', icon: 'fa-bell' }, { label: '我', icon: 'fa-user' }];
    }
    DetailPage.prototype.onTabClick = function () {
    };
    DetailPage = __decorate([
        core_1.Component({
            selector: "detail-page",
            template: "\n    <DockLayout stretchLastChild=\"true\">\n      <StackLayout dock=\"bottom\">\n        <Label text=\"bottom\"></Label>\n        <tab [tabs]=\"tabs\" [onTabChange]=\"onTabClick\"></tab>\n      </StackLayout>\n      <StackLayout dock=\"top\">\n        <Label text=\"top\"></Label>\n      </StackLayout>\n    </DockLayout>",
        }), 
        __metadata('design:paramtypes', [])
    ], DetailPage);
    return DetailPage;
}());
exports.DetailPage = DetailPage;
//# sourceMappingURL=DetailPage.component.js.map