"use strict";
var core_1 = require('@angular/core');
var ListItem = (function () {
    function ListItem() {
    }
    __decorate([
        core_1.Input('item'), 
        __metadata('design:type', Object)
    ], ListItem.prototype, "item", void 0);
    ListItem = __decorate([
        core_1.Component({
            selector: 'list-item',
            template: "\n     <StackLayout orientation=\"vertical\" class=\"list-item\">\n        <StackLayout orientation=\"horizontal\" class=\"list-content\">\n          <Image class=\"list-avatar\" [src]=\"item.author.avatar_url\"></Image>\n          <StackLayout orientation=\"vertical\">\n            <Label [text]=\"item.title\"></Label>\n          </StackLayout>\n        </StackLayout>\n        <Label class=\"border-bottom\"></Label>\n      </StackLayout>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], ListItem);
    return ListItem;
}());
exports.ListItem = ListItem;
//# sourceMappingURL=ListItem.component.js.map