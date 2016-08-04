"use strict";
var router_1 = require('nativescript-angular/router');
var TabPage_component_1 = require('./Pages/TabPage.component');
var DetailPage_component_1 = require('./Pages/DetailPage.component');
var routes = [
    {
        path: "", redirectTo: "/index", terminal: true
    },
    {
        path: 'index', component: TabPage_component_1.TabPage
    }, {
        path: 'detail', component: DetailPage_component_1.DetailPage
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.nsProvideRouter(routes, { enableTracing: false })
];
//# sourceMappingURL=app.route.js.map