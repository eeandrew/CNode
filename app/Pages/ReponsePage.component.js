"use strict";
var core_1 = require('@angular/core');
var ResponsePage = (function () {
    function ResponsePage() {
    }
    ResponsePage = __decorate([
        core_1.Component({
            selector: 'response-page',
            template: "\n    <ActionBar title=\"\u56DE\u590D\"></ActionBar>\n    <DockLayout stretchLastChild=\"true\">\n      <StackLayout orientation=\"vertical\" dock=\"bottom\" class=\"input-section\">\n        <Label class=\"border\"></Label>\n        <TextView class=\"reponse-input\" (text)=\"response\" hint=\"\u8FD9\u91CC\u56DE\u590D\"></TextView>\n      </StackLayout>\n      <StackLayout dock=\"top\">\n        <Label text=\"Hello World\"></Label>\n      </StackLayout>\n    </DockLayout>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], ResponsePage);
    return ResponsePage;
}());
exports.ResponsePage = ResponsePage;
//# sourceMappingURL=ReponsePage.component.js.map