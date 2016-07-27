import { 
  Component, 
  OnInit, 
  ChangeDetectorRef
 } from "@angular/core";
 import {
   RouterConfig,
   Router
 } from '@angular/router';
 import {
   NS_ROUTER_DIRECTIVES
 } from 'nativescript-angular/router';


@Component({
    selector: 'app',
    directives: [NS_ROUTER_DIRECTIVES],
    template: `<page-router-outlet></page-router-outlet>`
})
export class AppComponent{}