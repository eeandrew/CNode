"use strict";
var core_1 = require('@angular/core');
var nativescript_ng2_fonticon_1 = require('nativescript-ng2-fonticon');
var ListItem = (function () {
    function ListItem() {
    }
    ListItem.prototype.ngOnInit = function () {
        console.log('-----------list item init------------');
    };
    __decorate([
        core_1.Input('items'), 
        __metadata('design:type', Array)
    ], ListItem.prototype, "items", void 0);
    __decorate([
        core_1.Input('onItemTap'), 
        __metadata('design:type', Function)
    ], ListItem.prototype, "onItemTap", void 0);
    ListItem = __decorate([
        core_1.Component({
            selector: 'items',
            template: "\n    <RadListView [items]=\"items\" row=\"1\" class=\"scrollview-content\" (itemTap)=\"onItemTap($event)\">\n        <template listItemTemplate let-item=\"item\" let-i=\"index\">\n        <StackLayout orientation=\"vertical\" class=\"list-item\">\n            <StackLayout orientation=\"horizontal\" class=\"list-content \">\n            <!--\u5934\u50CF-->\n            <Image class=\"list-avatar\" [src]=\"item.author.avatar_url\"></Image>\n            <!--\u7528\u6237\u540D \u521B\u5EFA\u65F6\u95F4-->\n            <StackLayout orientation=\"vertical\">\n                <Label [text]=\"item.author.loginname\" class=\"font15\"></Label>\n                <Label [text]=\"item.create_at\" class=\"font10\"></Label>\n            </StackLayout>\n            </StackLayout>\n            <!--title-->\n            <StackLayout orientation=\"vertical\" class=\"list-title font15\">\n                <Label [text]=\"item.title\" textWrap=\"true\"></Label>\n            </StackLayout>\n            <!--meta\u4FE1\u606F-->\n            <GridLayout rows=\"auto\" columns=\"1*,1*,1*\" class=\"meta-section\">\n            <!--\u6536\u85CF-->\n            <StackLayout row=\"0\" col=\"0\" class=\"meta-tag\" orientation=\"vertical\">\n                <StackLayout orientation=\"horizontal\" class=\"meta-tag-item font12\">\n                <Label class=\"font-awesome\" text=\"{{'fa-heart' | fonticon}}\"></Label>\n                <Label text=\"\u6536\u85CF\"></Label>\n                </StackLayout>\n            </StackLayout>\n            <!--\u6D4F\u89C8-->\n            <StackLayout row=\"0\" col=\"1\" class=\"meta-tag\" orientation=\"vertical\">\n                <StackLayout orientation=\"horizontal\" class=\"meta-tag-item font12\">\n                <Label class=\"font-awesome\" text=\"{{'fa-eye' | fonticon}}\"></Label>\n                <Label text=\"\u6D4F\u89C8\"></Label>\n                </StackLayout>\n            </StackLayout>\n            <!--\u8BC4\u8BBA-->\n            <StackLayout row=\"0\" col=\"2\" class=\"meta-tag\" orientation=\"vertical\">\n                <StackLayout orientation=\"horizontal\" class=\"meta-tag-item font12\">\n                <Label class=\"font-awesome\" text=\"{{'fa-comment' | fonticon}}\"></Label>\n                <Label text=\"\u8BC4\u8BBA\"></Label>\n                </StackLayout>\n            </StackLayout>\n            </GridLayout>\n            <Label class=\"border-bottom\"></Label>\n        </StackLayout>\n        </template>\n    </RadListView>\n  ",
            pipes: [nativescript_ng2_fonticon_1.TNSFontIconPipe],
        }), 
        __metadata('design:paramtypes', [])
    ], ListItem);
    return ListItem;
}());
exports.ListItem = ListItem;
//# sourceMappingURL=ListItem.component.js.map