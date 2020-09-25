import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import {LoginComponent } from "./login/login.component";

import { HomeComponent } from "./home/home.component";
import { MoviesComponent } from "./Movies/movies.component";
import { AuthGuard } from "./backend/auth-guard.service";



export const authProviders = [
    AuthGuard
]; 


const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "history", component:MoviesComponent },
    {path: "login",  component: LoginComponent},
  



   


    

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
    
})
export class AppRoutingModule { }
