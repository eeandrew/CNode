"use strict";
var core_1 = require('@angular/core');
var MenuItem = (function () {
    function MenuItem() {
    }
    MenuItem.prototype.onTouch = function (event) {
        alert('touch');
    };
    MenuItem.prototype.ngAfterViewInit = function () {
        console.log(this.name);
        this.stackLayoutEle = this.stackLayoutRef.nativeElement;
        // this.stackLayoutEle.on(GestureTypes.tap,()=>{
        //   console.log('tap');
        //   alert('tap')
        // });
    };
    __decorate([
        core_1.Input('name'), 
        __metadata('design:type', String)
    ], MenuItem.prototype, "name", void 0);
    __decorate([
        core_1.Input('border'), 
        __metadata('design:type', Boolean)
    ], MenuItem.prototype, "border", void 0);
    __decorate([
        core_1.ViewChild('stacklayout'), 
        __metadata('design:type', Object)
    ], MenuItem.prototype, "stackLayoutRef", void 0);
    MenuItem = __decorate([
        core_1.Component({
            selector: 'menu-item',
            styleUrls: ['MenuItem/menuitem.css'],
            template: "\n    <StackLayout orientation=\"horizontal\" (tap)=\"onTouch($event)\" #stacklayout class=\"menu-item\">\n        <Label [text]=\"name\"  ></Label>\n    </StackLayout>\n    <StackLayout *ngIf=\"border\" class=\"border-bottom\"></StackLayout>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MenuItem);
    return MenuItem;
}());
exports.MenuItem = MenuItem;
//# sourceMappingURL=menuitem.component.js.map