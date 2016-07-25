import { Component, ElementRef, ViewChild, Inject, OnInit, ChangeDetectorRef,AfterViewInit } from "@angular/core";
import { View } from "ui/core/view";
import { RadSideDrawer } from "nativescript-telerik-ui/sidedrawer";
import { Page } from "ui/page";
import { ActionItem } from "ui/action-bar";
import sideDrawerModule = require('nativescript-telerik-ui/sidedrawer');
import * as ObservableModule from "data/observable";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";

import {
  Image
} from 'ui/image';
import {
  Label
} from 'ui/label';
import {
  GridLayout
} from 'ui/layouts/grid-layout';
import {
  ListView
} from 'ui/list-view';

import {
  MenuItem
} from '../MenuItem/menuitem.component';

@Component({
  selector:'drawer-content',
  templateUrl:'DrawerContent/drawercontent.html',
  styleUrls:['DrawerContent/drawercontent.css'],
  directives:[MenuItem]
})
export class DrawerContent implements OnInit,AfterViewInit {
  public titleText: string = '点击头像登录';
  public avatarUrl: string = 'res://avatar_default';
  @ViewChild('avatar') avatarRef: ElementRef;
  @ViewChild('title') titleRef: ElementRef;
  @ViewChild('listWrapper') listWrapperRef: ElementRef;
  private avatarEle: Image;
  private titleEle: Label;
  private listWrapperEle: GridLayout;
  private listViewEle: ListView;
  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  private drawer: SideDrawerType;

  menuItems:Array<Object> = [];
  constructor(@Inject(Page) private page: Page, private _changeDetectionRef: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.avatarEle = this.avatarRef.nativeElement;
    this.titleEle = this.titleRef.nativeElement;
    this.listWrapperEle = this.listWrapperRef.nativeElement;
    this.drawer = this.drawerComponent.sideDrawer;
    this._changeDetectionRef.detectChanges();
    //初始头像
    //this.updateAvatarUrl(this.avatarUrl);
    //初始名称
    //this.updateAvatarTitle(this.titleText);
  }
  updateAvatarUrl(url:string) {
    this.avatarEle && (this.avatarEle.src=url);
  }
  updateAvatarTitle(title:string) {
    this.titleEle && (this.titleEle.text = title);
  }
  onAvatarClick() {
    console.log('avatar');
  }
  ngOnInit() {
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
  }
  populateListView() {
    this.listViewEle = new ListView();
    this.listViewEle.items = ['test1','test2'];
    this.listWrapperEle.addChild(this.listViewEle);
  }
}