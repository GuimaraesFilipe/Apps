// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { enableProdMode } from '@angular/core';


import { AppModule } from "./app.module"; 
import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { DropDownModule } from "nativescript-drop-down/angular";
import { AppComponent } from "./app.component";
 
@NgModule({
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ],
    imports:      [
        NativeScriptModule,
        DropDownModule,
    ],
})
class AppComponentModule {
}


enableProdMode();
platformNativeScriptDynamic().bootstrapModule(AppModule);



