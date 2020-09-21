import { Component, ElementRef, ViewChild, OnInit, ChangeDetectorRef } from "@angular/core";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { Router } from "@angular/router";

import { setString, getString } from "application-settings";


import { User } from "../shared/user.model";

import { LoginService } from "~/backend/login.service";

import * as fs from "file-system";
import * as imagepicker from "nativescript-imagepicker";
import { knownFolders, path } from "file-system";
import { ImageAsset } from "tns-core-modules/image-asset";
import * as bgHttp from "nativescript-background-http";
import { isIOS } from "platform";
import { of, timer, interval, BehaviorSubject} from 'rxjs';
import { sampleTime, concatMap, scan, map } from 'rxjs/operators';

import {ImageSource, fromFile, fromResource, fromBase64} from "tns-core-modules/image-source";
import * as _ from 'lodash';
import { EventData} from "tns-core-modules/data/observable";
import { DatePicker } from "tns-core-modules/ui/date-picker";
const Observable = require("tns-core-modules/data/observable").Observable;
declare let android: any; // or use tns-platform-declarations
declare let java: any;
import * as utils from "tns-core-modules/utils/utils";
import * as Facebook from "nativescript-facebook";
import { NavigationService } from "~/backend/facebook.service";
import * as appSettings from "tns-core-modules/application-settings";
import { init, initAnalytics } from "nativescript-facebook";
import {  isAndroid } from 'tns-core-modules/platform';

declare const UIApplication;


@Component({
    selector: "login",

    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  linkContent = null;
  photosContent = null;
  genericContent = null;
  canShowLinksShareDialog = false;
  canShowPhotosShareDialog = false;
  canShowLinksMessageDialog = false;
  canShowGenericMessageDialog = false;
  eventCounter = 0;


    public cameraImage: ImageAsset;

    user: User;
   isLoggingIn = true;
   @ViewChild("firstName", {static: false}) firstName: ElementRef;
   @ViewChild("photo", {static: false}) photo: ElementRef;
   @ViewChild("email", {static: false}) email: ElementRef;
   @ViewChild("favorite", {static: false}) favorite: ElementRef;
   @ViewChild("country", {static: false}) country: ElementRef;
   @ViewChild("dateofBirth", {static: false}) dateofBirth: ElementRef;
   @ViewChild("lastName", {static: false}) lastName: ElementRef;
   @ViewChild("password", {static: false}) password: ElementRef;
    @ViewChild("confirmPassword", {static: false}) confirmPassword: ElementRef;
    user_id: any;
   toggleDisplay() {
     this.isLoggingIn = !this.isLoggingIn;
    }




    constructor(
     private router: Router,
     private routerExtensions: RouterExtensions,
     private page: Page,
     private userService: LoginService,

     private ref: ChangeDetectorRef, private navigationService: NavigationService
    ) {
     this.user = new User();
      // have to init after facebook sdk inited
      setTimeout(() => {
        this.init();
    }, 100);


    }
   ngOnInit() {
     this.page.actionBarHidden = true;
    }

    init() {
      this.linkContent = this.generateLinksShareContent();

      this.genericContent = this.generateGenericTemplateContent();
      this.canShowLinksShareDialog = Facebook.canShareDialogShow(this.linkContent);
      this.canShowPhotosShareDialog = Facebook.canShareDialogShow(this.photosContent);
      this.canShowLinksMessageDialog = Facebook.canMessageDialogShow(this.linkContent);
      this.canShowGenericMessageDialog = Facebook.canMessageDialogShow(this.genericContent);
  }
  onLogin(eventData: Facebook.LoginEventData) {
    if (eventData.error) {
        alert("Error during login: " + eventData.error);
    } else {
        appSettings.setString("access_token", eventData.loginResponse.token);
        this.navigationService.go(['home']);
    }
}

FBLogin() {
    Facebook.login((error, fbData) => {
        if (error) {
            alert("Error during login: " + error.message);
        } else {
            appSettings.setString("access_token", fbData.token);
            this.navigationService.go(['fb']);
        }
    });
}

toggleShow() {
  console.log(this.password.nativeElement.secure);
  this.password.nativeElement.secure = !this.password.nativeElement.secure;
}
toggleShow2() {
  console.log(this.confirmPassword.nativeElement.secure);
  this.confirmPassword.nativeElement.secure = !this.confirmPassword.nativeElement.secure;
}

getCurrentAccessToken() {
    let accessToken = Facebook.getCurrentAccessToken();

    alert("Current access token: " + JSON.stringify(accessToken, null, '\t'));
}

generateLinksShareContent() {
    return Facebook.createShareLinksContent('https://www.nativescript.org',
        'Create Native iOS and Android Apps With JavaScript',
        {
            hashtag: '#Nativescript'
        });
}



generateGenericTemplateContent() {
    return Facebook.createShareMessageGenericTemplateContent({
        element: {
            title: 'Nativescript',
            subtitle: 'Create Native iOS and Android Apps With JavaScript',
            imageUrl: 'https://d2odgkulk9w7if.cloudfront.net/images/default-source/home/how-it-works-min.png',
            button: {
                title: 'Check Doc',
                url: 'https://docs.nativescript.org'
            },
            defaultAction: {
                title: 'Go HomePage',
                url: 'https://www.nativescript.org'
            }
        },
        // it seems android have to provide a pageId, otherwise the MessageDialog just wont show
        pageID: 'testestsett',
        imageAspectRatio: Facebook.MessageGenericTemplateImageAspectRatio.Horizontal
    });
}

onShareDialog() {
    Facebook.showShareDialog(this.linkContent, (error, result) => {
        if (error) {
            console.error(error);
            return;
        }
        alert('Successfully shared');
    });
}

onShareDialogPhotos() {
    Facebook.showShareDialog(this.photosContent);
}

onSendDialog() {
    Facebook.showMessageDialog(this.linkContent);
}

onSendGenericDialog() {
    Facebook.showMessageDialog(this.genericContent);
}

logEvent() {
    this.eventCounter++;
    Facebook.logEvent('Login', [{
        key: 'counter',
        value: this.eventCounter.toString()
    }]);
}


   submit() {

     if (!this.user.isValidEmail()) {
      alert("Enter a valid email address.");
      return;
     }
     if(!this.isLoggingIn){
      if (this.user.password.length < 6 ) {
        alert("Your password must have at least 6 characters");
        return;
      }
      if (this.user.firstName.length == 0 ) {
        alert("Enter a valid first name.");
        return;
      }
      if (this.user.lastName.length == 0) {
        alert("Enter a valid last name.");
        return;
      }
      if (this.user.date.length < 10) {
        alert("Please enter your date of birth following the model 'dd/mm/yy'.");
        return;
      }
      if (this.user.country.length == 0) {
        alert("Enter a valid country.");
        return;
      }
      if (this.user.favorite.length == 0) {
        alert("Enter a valid favorite genre.");
        return;
      }
      // if (this.user.password !== this.confirmPassword.nativeElement) {
      //   alert("Your password and confirm password does not match.");
      //   return;
      // }
    }

     if (this.isLoggingIn) {

      this.login();
      this.user_id = getString("user_id");

     } else {
      this.signUp();
     }
    }

    dismissKeyboard() {
      if (isIOS) {
        UIApplication.sharedApplication.keyWindow.endEditing(true);
      }
      if (isAndroid) {
        utils.ad.dismissSoftInput();
      }
    }

   login() {
     this.userService.login(this.user)
      .then(status => {
       setString("user_id", this.user.email);

       this.routerExtensions.navigate(["/home"], { clearHistory: true });
      }, err => {
       this.clearFields();
       dialogs.action({
        title: "Login error ",
        message: "Unfortunately we could not find your account.",
      cancelButtonText: "Ok",

    });

      });
    }
   signUp() {


     this.userService.register(this.user)
      .then(status => {
       alert("Your account was successfully created.");
       this.toggleDisplay();
       this.clearFields();
      }, err => {
       this.clearFields();
       alert("Unfortunately we were unable to create your account.")
       console.log(err)
      });
    }
   clearFields() {
     this.user.email = '';
     this.user.password = '';
     this.user.firstName='';
     this.user.lastName='';
     this.user.date='';
     this.user.favorite='';
     this.user.country='';
  

    }
  focusPassword() {
      this.password.nativeElement.focus();
  }
  focusConfirmPassword() {
      if (!this.isLoggingIn) {
          this.confirmPassword.nativeElement.focus();
      }
  }
  focusFirstName() {
    if (!this.isLoggingIn) {
        this.firstName.nativeElement.focus();
    }

}


  focusLastName() {
    if (!this.isLoggingIn) {
        this.lastName.nativeElement.focus();
    }

}
  focusDate() {
  if (!this.isLoggingIn) {
      this.dateofBirth.nativeElement.focus();
  }

}
  focusFavorite() {
  if (!this.isLoggingIn) {
      this.favorite.nativeElement.focus();
  }

}
  focusCountry() {
  if (!this.isLoggingIn) {
      this.country.nativeElement.focus();
  }

}

focusEmail() {
  if (!this.isLoggingIn) {
      this.email.nativeElement.focus();
  }

}

public getImage() {
  let context = imagepicker.create({
    mode: "single"
});
this.startSelection(context);
}

private startSelection(context) {
  context
      .authorize()
      .then(() => {
          return context.present();
      })
      .then((selection) => {

          console.log("Selection done: " + JSON.stringify(selection));

          let imageAsset = selection.length > 0 ? selection[0] : null;
          this.cameraImage = imageAsset;
          if (imageAsset){
            console.log("converting to String", imageAsset)
            // console.log("camera image is set", this.cameraImage)
            this.convert64(this.cameraImage);
          }

      }).catch(function (e) {
          console.log(" error selection"+e);
      });
}
convert64(img){


                ImageSource.fromAsset(img)
                .then(image => { let a = image.toBase64String('png');
                this.user.photo=a.toString();
                console.log("Photo is converted to string ",this.user.photo); })


}

forgotPassword() {
  prompt({
      title: "Forgot Password",
      message: "Enter the email address you used to register for Consumer Friendly App to reset your password.",
      inputType: "email",
      defaultText: "",
      okButtonText: "Ok",
      cancelButtonText: "Cancel"
  })
}








}
