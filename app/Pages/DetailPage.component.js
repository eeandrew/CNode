"use strict";
var core_1 = require("@angular/core");
var tab_component_1 = require('../Components/Tab/tab.component');
var DetailPage = (function () {
    function DetailPage() {
        this.title = "头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息";
        this.author = "eeandrew";
        this.time = "1小时前";
        this.content = '头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息 \
  头部信息头部信息头部信息头部信息头部信息头部信息头部信息头部信息';
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
        this.tabs = Array.prototype.concat(this.tabs.slice(0, index), item, this.tabs.slice(++index));
    };
    DetailPage = __decorate([
        core_1.Component({
            selector: "detail-page",
            template: "\n    <ActionBar title=\"\u8BE6\u60C5\">\n    </ActionBar>\n    <DockLayout stretchLastChild=\"true\">\n      <!--\u5E95\u90E8\u6309\u94AE-->\n      <StackLayout dock=\"bottom\">\n        <tab [tabs]=\"tabs\" [onTabChange]=\"onTabClick\" displayMode=\"{{true}}\"></tab>\n      </StackLayout>\n      <!--\u8BE6\u60C5\u5185\u5BB9-->\n      <StackLayout dock=\"top\" orientation=\"vertical\" class=\"detail-section\">\n        <ScrollView orientation=\"vertical\" class=\"topic-detail\">\n          <StackLayout orientation=\"vertical\">\n            <Label [text]=\"title\" textWrap=\"true\" class=\"detail-title\"></Label>\n            <StackLayout orientation=\"horizontal\" class=\"meta-section\">\n              <Image class=\"avatar-small\" src=\"res://avatar_default\"></Image>\n              <Label [text]=\"author\" class=\"font12 ml5\"></Label>\n              <Label [text]=\"time\" class=\"font12 ml5\"></Label>\n            </StackLayout>\n            <StackLayout>\n              <Label [text]=\"content\" textWrap=\"true\" class=\"detail-content font15\"></Label>\n            </StackLayout>\n          </StackLayout>\n        </ScrollView>\n      </StackLayout>\n    </DockLayout>",
            directives: [tab_component_1.Tab],
            styleUrls: ["Pages/DetailPage.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], DetailPage);
    return DetailPage;
}());
exports.DetailPage = DetailPage;
//# sourceMappingURL=DetailPage.component.js.map