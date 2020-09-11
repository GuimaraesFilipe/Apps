
import * as BitmapFactory from "nativescript-bitmap-factory";

import { Component, ElementRef, ViewChild, OnInit, Injectable } from "@angular/core";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page, Observable } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import * as app from "tns-core-modules/application";

import { Router } from "@angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";


import { getString } from "application-settings";


import * as dialogs from "tns-core-modules/ui/dialogs";


 

import { fromEventPattern } from "rxjs";

import { ListViewEventData } from "nativescript-ui-listview";
import { fromBase64, ImageSource } from "@nativescript/core/image-source";
declare let sun:any;
declare let android: any; // or use tns-platform-declarations
declare let java: any;
declare let sourceData: any;



@Component({
    selector: "ns-app",
    moduleId: module.id,   
    templateUrl: "app.component.html"
})

@Injectable()

export class AppComponent implements OnInit{
    public userList: Array<Object> = [];
    public user_id: string;
    user_firstName = "";
    user_photo="";
    user_lastName= "";
    user_date="";
    user_country="";
    user_address="";
    user_email="";
    user_password="";
    img_url:any;
     drawer: RadSideDrawer;

    db: any;


    isLoggingIn = true;
    @ViewChild("firstName", {static: false}) firstName: ElementRef;
    @ViewChild("photo", {static: false}) photo: ElementRef;
    @ViewChild("photoImage", {static: false}) photoImage: ElementRef;
    @ViewChild("email", {static: false}) email: ElementRef;
    @ViewChild("address", {static: false}) address: ElementRef;
    @ViewChild("country", {static: false}) country: ElementRef;
    @ViewChild("dateofBirth", {static: false}) dateofBirth: ElementRef;
    @ViewChild("lastName", {static: false}) lastName: ElementRef;
    @ViewChild("password", {static: false}) password: ElementRef;
    @ViewChild("confirmPassword", {static: false}) confirmPassword: ElementRef;
  consumer: any;
  imageFromBase64: any;
  image:ImageSource
  
    
     


    

     
    constructor(private router: Router,private routerExtensions: RouterExtensions) {
 
  }

        ngOnInit(): void {
    
          this.user_id ="";
          
        }
        login() {
            this.routerExtensions.navigate(["/login"]);
            const sideDrawer = <RadSideDrawer>app.getRootView();
             sideDrawer.closeDrawer();
            
        }
        enablepic(args) {
          
          let consumer = <any>args.object.bindingContext;

          this.consumer= consumer.photo;
          console.log("Getting image as BASE64", this.consumer)
    
          this.imageFromBase64 = ImageSource.fromBase64Sync(this.consumer);
          
          console.log("IMAGE CONVERTED TO BLOB", this.imageFromBase64)
        
          
        }

        
        onHomeTap(): void {
          this.routerExtensions.navigate(["/home"]);
          const sideDrawer = <RadSideDrawer>app.getRootView();
          sideDrawer.closeDrawer();
        }

        onMainTap(): void {
          this.routerExtensions.navigate(["/homelogin"]);
          const sideDrawer = <RadSideDrawer>app.getRootView();
          sideDrawer.closeDrawer();
        }
        onLoginTap(): void {
            this.routerExtensions.navigate(["/login"]);
            const sideDrawer = <RadSideDrawer>app.getRootView();
            sideDrawer.closeDrawer();
        }
        
        onMedTap(): void {
            this.routerExtensions.navigate(["/addMed"]);
            const sideDrawer = <RadSideDrawer>app.getRootView();
            sideDrawer.closeDrawer();
            
        }
        onInteractTap(): void {
            this.routerExtensions.navigate(["/addMed"]);
            const sideDrawer = <RadSideDrawer>app.getRootView();
             sideDrawer.closeDrawer();
            
        }
        onAboutTap(): void {
          this.routerExtensions.navigate(["/about"]);
          const sideDrawer = <RadSideDrawer>app.getRootView();
          sideDrawer.closeDrawer();
           
      }  


      

        enableUpdate() {

          this.routerExtensions.navigate(["/settings"])
         
         
        }




        
      }
