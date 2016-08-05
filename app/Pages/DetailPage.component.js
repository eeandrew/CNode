"use strict";
var core_1 = require("@angular/core");
var tab_component_1 = require('../Components/Tab/tab.component');
var DetailPage = (function () {
    function DetailPage() {
        this.tabs = [
            { label: '浏览(998)', icon: 'fa-eye', active: false },
            { label: '收藏', icon: 'fa-heart', active: false },
            { label: '评论(11k)', icon: 'fa-comment', active: false }
        ];
        this.onTabClick = this.onTabClick.bind(this);
    }
    DetailPage.prototype.onTabClick = function (index) {
        var item = this.tabs[index];
        item.active = !item.active;
        //this.tabs = Array.prototype.concat(this.tabs.slice(0,index),item,this.tabs.slice(++index));
    };
    DetailPage = __decorate([
        core_1.Component({
            selector: "detail-page",
            template: "\n    <DockLayout stretchLastChild=\"true\">\n      <StackLayout dock=\"bottom\">\n        <tab [tabs]=\"tabs\" [onTabChange]=\"onTabClick\" displayMode=\"{{true}}\"></tab>\n      </StackLayout>\n      <StackLayout dock=\"top\">\n        <Label text=\"top\"></Label>\n      </StackLayout>\n    </DockLayout>",
            directives: [tab_component_1.Tab]
        }), 
        __metadata('design:paramtypes', [])
    ], DetailPage);
    return DetailPage;
}());
exports.DetailPage = DetailPage;
//# sourceMappingURL=DetailPage.component.js.map