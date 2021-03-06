// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {AppComponent} from "./app.component";
import { SIDEDRAWER_PROVIDERS } from "nativescript-telerik-ui/sidedrawer/angular";
import { LISTVIEW_PROVIDERS } from 'nativescript-telerik-ui/listview/angular';
import {enableProdMode} from '@angular/core';
import {setStatusBarColors} from "./utils/status-bar-util";
import {HTTP_PROVIDERS} from '@angular/http';
import {RouterOutletMap} from '@angular/router';
import {TNSFontIconService} from 'nativescript-ng2-fonticon';
import {NS_ROUTER_PROVIDERS} from 'nativescript-angular/router';
import {
  APP_ROUTER_PROVIDERS
} from './app.route';

setStatusBarColors();
nativeScriptBootstrap(
  AppComponent,
  [
    APP_ROUTER_PROVIDERS,
    NS_ROUTER_PROVIDERS,
    RouterOutletMap,
    SIDEDRAWER_PROVIDERS,
    LISTVIEW_PROVIDERS,
    HTTP_PROVIDERS,
    {
        provide: TNSFontIconService,
        useFactory: () => {
            return new TNSFontIconService({
                'fa': 'fonts/font-awesome.css'
            });
        }
    }
  ],
{startPageActionBarHidden:false});