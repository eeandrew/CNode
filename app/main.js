"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var application_1 = require("nativescript-angular/application");
var app_component_1 = require("./app.component");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var angular_2 = require('nativescript-telerik-ui/listview/angular');
var status_bar_util_1 = require("./utils/status-bar-util");
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var nativescript_ng2_fonticon_1 = require('nativescript-ng2-fonticon');
var router_2 = require('nativescript-angular/router');
var app_route_1 = require('./app.route');
status_bar_util_1.setStatusBarColors();
application_1.nativeScriptBootstrap(app_component_1.AppComponent, [
    app_route_1.APP_ROUTER_PROVIDERS,
    router_2.NS_ROUTER_PROVIDERS,
    router_1.RouterOutletMap,
    angular_1.SIDEDRAWER_PROVIDERS,
    angular_2.LISTVIEW_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    {
        provide: nativescript_ng2_fonticon_1.TNSFontIconService,
        useFactory: function () {
            return new nativescript_ng2_fonticon_1.TNSFontIconService({
                'fa': 'fonts/font-awesome.css'
            });
        }
    }
], { startPageActionBarHidden: false });
//# sourceMappingURL=main.js.map