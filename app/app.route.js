"use strict";
var router_1 = require('nativescript-angular/router');
var TabPage_component_1 = require('./Pages/TabPage.component');
var DetailPage_component_1 = require('./Pages/DetailPage.component');
var ReponsePage_component_1 = require('./Pages/ReponsePage.component');
var routes = [
    {
        path: "", redirectTo: "/index", terminal: true
    },
    {
        path: 'index', component: TabPage_component_1.TabPage
    }, {
        path: 'detail/:id', component: DetailPage_component_1.DetailPage
    }, {
        path: 'response', component: ReponsePage_component_1.ResponsePage
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.nsProvideRouter(routes, { enableTracing: false })
];
//# sourceMappingURL=app.route.js.map