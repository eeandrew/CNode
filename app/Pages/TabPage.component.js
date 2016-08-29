"use strict";
var core_1 = require("@angular/core");
var topiclist_service_1 = require('../Services/topiclist.service');
var tab_component_1 = require('../Components/Tab/tab.component');
var scrollbar_component_1 = require('../Components/ScrollBar/scrollbar.component');
var hscroller_component_1 = require('../Components/HScroller/hscroller.component');
var TabPage = (function () {
    function TabPage(_changeDetectionRef, _topicListService) {
        this._changeDetectionRef = _changeDetectionRef;
        this._topicListService = _topicListService;
        this.leftPos = 20;
        this.tabWidth = 0;
        this.activeIndex = 0;
        this.activeTab = 0;
        this.tabs = [{ label: '首页', icon: 'fa-home' }, { label: '招聘', icon: 'fa-graduation-cap' }, { label: '收藏', icon: 'fa-heart' }, { label: '通知', icon: 'fa-bell' }, { label: '我', icon: 'fa-user' }];
        /**
         * 0:no directin 1:right -1:left
         */
        this.xDirection = 0;
        this.all = [];
        this.good = [];
        this.share = [];
        this.ask = [];
        this.loadListItems = this.loadListItems.bind(this);
        this.getHttpParams = this.getHttpParams.bind(this);
        this.setItems = this.setItems.bind(this);
    }
    TabPage.prototype.ngOnInit = function () {
        this.onTabChange = this.onTabChange.bind(this);
        this.onMainTabChange = this.onMainTabChange.bind(this);
        this.onScroll = this.onScroll.bind(this);
        this.loadListItems();
    };
    TabPage.prototype.loadListItems = function () {
        var _this = this;
        var params = this.getHttpParams();
        this._topicListService
            .getTopicList(params)
            .then(function (data) {
            var result = data._body;
            if (result && result.success) {
                console.log(result.data);
                _this.setItems(result.data);
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    TabPage.prototype.setItems = function (items) {
        switch (this.activeIndex) {
            case 0:
                this.all = items;
                break;
            case 1:
                this.good = items;
                break;
            case 2:
                this.share = items;
                break;
            case 3:
                this.ask = items;
                break;
            default:
                this.all = items;
                break;
        }
    };
    TabPage.prototype.onScroll = function (pos) {
        this.leftPos = pos;
        this._changeDetectionRef.detectChanges();
    };
    TabPage.prototype.onMainTabChange = function (index) {
        this.activeTab = index;
    };
    TabPage.prototype.getTabKey = function (index) {
        switch (index) {
            case 0:
                return '';
            case 1:
                return 'good';
            case 2:
                return 'share';
            case 3:
                return 'ask';
            default:
                return '';
        }
    };
    TabPage.prototype.getHttpParams = function () {
        var params = {
            tab: this.getTabKey(this.activeIndex),
            limit: 20
        };
        return params;
    };
    Object.defineProperty(TabPage.prototype, "dataItems", {
        get: function () {
            return [{ name: 'test', description: 'test' }];
        },
        enumerable: true,
        configurable: true
    });
    TabPage.prototype.onTabChange = function (index) {
        this.activeIndex = index;
        setTimeout(this.loadListItems, 500);
    };
    TabPage = __decorate([
        core_1.Component({
            selector: "mp-app",
            providers: [topiclist_service_1.TopicListService],
            template: "\n    <!--Action Bar-->\n    <scroll-bar [leftPos]=\"leftPos\" [onTabChange]=\"onTabChange\" [tabIndex]=\"activeTab\"></scroll-bar>\n    <DockLayout stretchLastChild=\"true\">\n      <!--\u5E95\u90E8tab-->\n      <StackLayout dock=\"bottom\">\n        <tab [tabs]=\"tabs\" [onTabChange]=\"onMainTabChange\"></tab>\n      </StackLayout>\n      <!--\u4E3B\u5185\u5BB9\u533A-->\n      <StackLayout class=\"scrollview-wrapper\" dock=\"top\">\n          <!--\u9996\u9875-->\n          <hscroller [all]=\"all\" [good]=\"good\" [share]=\"share\" [ask]=\"ask\" *ngIf=\"activeTab === 0\" [onScroll]=\"onScroll\" [activeIndex]=\"activeIndex\"></hscroller>\n          <Label text=\"tab2\" *ngIf=\"activeTab === 1\"></Label>\n      </StackLayout>\n     </DockLayout>\n    ",
            directives: [tab_component_1.Tab, scrollbar_component_1.ScrollBar, hscroller_component_1.HScroller]
        }), 
        __metadata('design:paramtypes', [core_1.ChangeDetectorRef, topiclist_service_1.TopicListService])
    ], TabPage);
    return TabPage;
}());
exports.TabPage = TabPage;
//# sourceMappingURL=TabPage.component.js.map