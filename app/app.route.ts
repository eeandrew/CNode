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

const routes: RouterConfig = [
  {
    path: "", redirectTo: "/index", terminal: true
  },
  {
    path:'index',component:TabPage
  }
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, { enableTracing: false })
];