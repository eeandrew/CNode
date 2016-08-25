import { 
  Component, 
  OnInit, 
  ChangeDetectorRef
 } from "@angular/core";
 import {
   RouterConfig,
 } from '@angular/router';
 import {
   nsProvideRouter
 } from 'nativescript-angular/router';
import {
  TabPage
} from './Pages/TabPage.component';
import {
  DetailPage
} from './Pages/DetailPage.component';
import {
  ResponsePage
} from './Pages/ReponsePage.component';

const routes: RouterConfig = [
  {
    path: "", redirectTo: "/index", terminal: true
  },
  {
    path:'index',component:TabPage
  },{
    path:'detail',component:DetailPage
  },{
    path:'response',component:ResponsePage
  }
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, { enableTracing: false })
];