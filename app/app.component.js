"use strict";
var core_1 = require("@angular/core");
var platform_1 = require('platform');
var topiclist_service_1 = require('./Services/topiclist.service');
var tab_component_1 = require('./Components/Tab/tab.component');
var scrollbar_component_1 = require('./Components/ScrollBar/scrollbar.component');
var hscroller_component_1 = require('./Components/HScroller/hscroller.component');
var page_1 = require("ui/page");
var AppComponent = (function () {
    function AppComponent(page, _changeDetectionRef, _topicListService) {
        this.page = page;
        this._changeDetectionRef = _changeDetectionRef;
        this._topicListService = _topicListService;
        this.leftPos = 20;
        this.tabWidth = 0;
        this.activeIndex = 0;
        this.tabs = [{ label: '首页', icon: '&#xf015;' }, { label: '招聘', icon: '&#xf19d;' }, { label: '收藏', icon: '&#xf004;' }, { label: '通知', icon: '&#xf0f3;' }, { label: '我', icon: '&#xf007;' }];
        /**
         * 0:no directin 1:right -1:left
         */
        this.xDirection = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.onTabChange = this.onTabChange.bind(this);
        this.onScroll = this.onScroll.bind(this);
        var topicParam = {
            tab: 'job',
            limit: 1
        };
        this._topicListService.getTopicList(topicParam);
    };
    AppComponent.prototype.onScroll = function (pos) {
        this.leftPos = pos;
        this._changeDetectionRef.detectChanges();
    };
    Object.defineProperty(AppComponent.prototype, "dataItems", {
        get: function () {
            return [{ name: 'test', description: 'test' }];
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onTabChange = function (index) {
        this.activeIndex = index;
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log(platform_1.screen.mainScreen.widthDIPs);
        setTimeout(function () {
            _this.tabWidth = platform_1.screen.mainScreen.widthDIPs;
            _this.leftPos = 20;
        }, 1);
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "mp-app",
            providers: [topiclist_service_1.TopicListService],
            template: "\n    <!--Action Bar-->\n    <scroll-bar [leftPos]=\"leftPos\" [onTabChange]=\"onTabChange\"></scroll-bar>\n    <DockLayout stretchLastChild=\"true\" class=\"main-body\">\n      <!--Bottom Tab-->\n      <StackLayout dock=\"bottom\">\n        <tab [tabs]=\"tabs\"></tab>\n      </StackLayout>\n      <StackLayout class=\"scrollview-wrapper\" dock=\"top\">\n          <hscroller [onScroll]=\"onScroll\" [activeIndex]=\"activeIndex\"></hscroller>\n      </StackLayout>\n     </DockLayout>\n    ",
            directives: [tab_component_1.Tab, scrollbar_component_1.ScrollBar, hscroller_component_1.HScroller]
        }),
        __param(0, core_1.Inject(page_1.Page)), 
        __metadata('design:paramtypes', [page_1.Page, core_1.ChangeDetectorRef, topiclist_service_1.TopicListService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map