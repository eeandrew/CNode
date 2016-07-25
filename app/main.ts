// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {AppComponent} from "./app.component";
import { SIDEDRAWER_PROVIDERS } from "nativescript-telerik-ui/sidedrawer/angular";
import { LISTVIEW_PROVIDERS } from 'nativescript-telerik-ui/listview/angular';
import {enableProdMode} from '@angular/core';
import {setStatusBarColors} from "./utils/status-bar-util";
import {HTTP_PROVIDERS} from '@angular/http';
setStatusBarColors();
nativeScriptBootstrap(AppComponent,[SIDEDRAWER_PROVIDERS,LISTVIEW_PROVIDERS,HTTP_PROVIDERS],{startPageActionBarHidden:false});