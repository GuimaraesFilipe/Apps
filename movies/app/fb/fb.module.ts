import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { FbComponent } from "./fb.component";
import { CommonModule } from "@angular/common";

import { NativeScriptFacebookModule } from "nativescript-facebook/angular";

export const routerConfig = [
    {
        path: "",
        component:  FbComponent
    }
];

@NgModule({
    imports: [
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig),
        CommonModule
    ],
    declarations: [  FbComponent ],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class FbModule { }