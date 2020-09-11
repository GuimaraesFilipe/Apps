import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { registerElement } from "nativescript-angular";
registerElement("PreviousNextView", () => require("nativescript-iqkeyboardmanager").PreviousNextView);
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";


import { KinveyModule, UserService as KinveyUserService } from "kinvey-nativescript-sdk/lib/angular";

import { DropDownModule } from "nativescript-drop-down/angular";



import { HomeComponent } from "./home/home.component";

import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";



import * as application from 'tns-core-modules/application';
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { init, initAnalytics } from "nativescript-facebook";
import { BarcodeScanner } from "nativescript-barcodescanner";
import { NativeScriptFacebookModule } from "nativescript-facebook/angular";
import { MyHttpGetService2 } from "./home/http-get.services";
import { MyHttpGetService } from "./history/http-get.services";

import { HistoryComponent } from "./history/history.component";



export function createBarcodeScanner() {
  return new BarcodeScanner();
}

application.on(application.launchEvent, function (args) {
    init("1771472059772879");
    initAnalytics();
});

@NgModule({ 
    bootstrap: [
        AppComponent
    ],
    imports: [
        DropDownModule,
        NativeScriptFacebookModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptUISideDrawerModule,
        NativeScriptHttpClientModule,
        AppRoutingModule,
        NativeScriptUIListViewModule,
        NativeScriptModule,
        NativeScriptFacebookModule,
        NativeScriptUIChartModule,
      
     
      

        KinveyModule.init({
            appKey: "kid_SyY8LYO8M",
            appSecret: "09282985d7c540f7b076a9c7fd884c77"
        })
    ],
    declarations: [
        AppComponent,
        HistoryComponent,
      
    
 
    

        
    ],
    providers: [
        

  
        HomeComponent,
        MyHttpGetService,
        AppComponent,
        HistoryComponent, 
        MyHttpGetService2,
    
      
 
        
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
