"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var list_view_1 = require('ui/list-view');
var menuitem_component_1 = require('../MenuItem/menuitem.component');
var DrawerContent = (function () {
    function DrawerContent(page, _changeDetectionRef) {
        this.page = page;
        this._changeDetectionRef = _changeDetectionRef;
        this.titleText = '点击头像登录';
        this.avatarUrl = 'res://avatar_default';
        this.menuItems = [];
    }
    DrawerContent.prototype.ngAfterViewInit = function () {
        this.avatarEle = this.avatarRef.nativeElement;
        this.titleEle = this.titleRef.nativeElement;
        this.listWrapperEle = this.listWrapperRef.nativeElement;
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
        //初始头像
        //this.updateAvatarUrl(this.avatarUrl);
        //初始名称
        //this.updateAvatarTitle(this.titleText);
    };
    DrawerContent.prototype.updateAvatarUrl = function (url) {
        this.avatarEle && (this.avatarEle.src = url);
    };
    DrawerContent.prototype.updateAvatarTitle = function (title) {
        this.titleEle && (this.titleEle.text = title);
    };
    DrawerContent.prototype.onAvatarClick = function () {
        console.log('avatar');
    };
    DrawerContent.prototype.ngOnInit = function () {
        // this.menuItems.push({name:'全部',icon:'test'});
        // this.menuItems.push({name:'精华',icon:'test'});
        // this.menuItems.push({name:'分享',icon:'test'});
        // this.menuItems.push({name:'问答',icon:'test'});
        // this.menuItems.push({name:'招聘',icon:'test',border:true});
        // this.menuItems.push({name:'消息',icon:'test'});
        // this.menuItems.push({name:'设置',icon:'test'});
        // this.menuItems.push({name:'关于',icon:'test'});
        //this.updateAvatarUrl = this.updateAvatarUrl.bind(this);
        //this.updateAvatarTitle = this.updateAvatarTitle.bind(this);
    };
    DrawerContent.prototype.populateListView = function () {
        this.listViewEle = new list_view_1.ListView();
        this.listViewEle.items = ['test1', 'test2'];
        this.listWrapperEle.addChild(this.listViewEle);
    };
    __decorate([
        core_1.ViewChild('avatar'), 
        __metadata('design:type', core_1.ElementRef)
    ], DrawerContent.prototype, "avatarRef", void 0);
    __decorate([
        core_1.ViewChild('title'), 
        __metadata('design:type', core_1.ElementRef)
    ], DrawerContent.prototype, "titleRef", void 0);
    __decorate([
        core_1.ViewChild('listWrapper'), 
        __metadata('design:type', core_1.ElementRef)
    ], DrawerContent.prototype, "listWrapperRef", void 0);
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent), 
        __metadata('design:type', angular_1.RadSideDrawerComponent)
    ], DrawerContent.prototype, "drawerComponent", void 0);
    DrawerContent = __decorate([
        core_1.Component({
            selector: 'drawer-content',
            templateUrl: 'DrawerContent/drawercontent.html',
            styleUrls: ['DrawerContent/drawercontent.css'],
            directives: [menuitem_component_1.MenuItem]
        }),
        __param(0, core_1.Inject(page_1.Page)), 
        __metadata('design:paramtypes', [page_1.Page, core_1.ChangeDetectorRef])
    ], DrawerContent);
    return DrawerContent;
}());
exports.DrawerContent = DrawerContent;
//# sourceMappingURL=drawercontent.component.js.map