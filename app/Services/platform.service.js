"use strict";
var core_1 = require('@angular/core');
var platform_1 = require('platform');
var PlatformService = (function () {
    function PlatformService() {
    }
    PlatformService.prototype.isAndroid = function () {
        return platform_1.device.os === platform_1.platformNames.android;
    };
    PlatformService.prototype.isIOS = function () {
        return platform_1.device.os === platform_1.platformNames.ios;
    };
    PlatformService.prototype.getScreenWidthDIP = function () {
        return platform_1.screen.mainScreen.widthDIPs;
    };
    PlatformService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PlatformService);
    return PlatformService;
}());
exports.PlatformService = PlatformService;
//# sourceMappingURL=platform.service.js.map