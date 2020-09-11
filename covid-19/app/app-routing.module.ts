import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";


import { HomeComponent } from "./home/home.component";
import { HistoryComponent } from "./history/history.component";






const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "history", component: HistoryComponent },
  



   


    

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
    
})
export class AppRoutingModule { }
