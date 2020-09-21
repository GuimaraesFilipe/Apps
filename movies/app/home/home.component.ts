import { SearchBar } from "ui/search-bar";
import { Component, OnInit, ViewChild, ElementRef, Injectable } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import {AppComponent} from "~/app.component"
import { ScrollView, ScrollEventData } from "tns-core-modules/ui/scroll-view";
import * as utils from "tns-core-modules/utils/utils";
import { getFrameById, Frame, EventData } from "tns-core-modules/ui/frame";
import { TokenModel, AutoCompleteEventData } from "nativescript-ui-autocomplete";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { isIOS, isAndroid } from 'tns-core-modules/platform';
var utilityModule = require("utils/utils");
declare const UIApplication;
import * as app from "tns-core-modules/application";
import { MyHttpGetService2 } from "./http-get.services";  
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
@Injectable()

export class HomeComponent implements OnInit {
  Country: [];
  userAgent: string;
  origin: string;
  continent:string;
  country:string;
  population:string;
  cases:number;
  recovered:number;
  active:number;
  deaths:number;
  tests:number;
  date:string;
  

    all: Array<any> = []; 
    all2: Array<any> = []; 
    all3: Array<any> = []; 
    all4: Array<any> = []; 
    all5: Array<any> = []; 
    all6: Array<any> = []; 
    all7: Array<any> = []; 
    global: Array<any> = []; 
    result: Array<any> = []; 
    result2: Array<any> = []; 
    suggestions: Array<any> = [];
    filtered: Array<any> = [];
    suggest: ObservableArray<TokenModel>;
  	db: any;
    med_1: string;
    med_2: string;
    med_3:String;
    advice="";
    evidence="";
    comment="";
    benefit="";
    med_HerbSup="";
    medHerbSup_name = "";
    medicine_dosage= "";
    medicine_form="";
    medicine_frequency="";
    exists = true;
    medicineList: Array<Object> = [];
    user_id: string;
     url: string = "<url>"; 
    value:boolean = utils.isDataURI(this.url);
     @ViewChild("med1",{static: false}) med1: ElementRef;
     @ViewChild("med2", {static: false}) med2: ElementRef;
     @ViewChild("med3",{static: false}) med3: ElementRef;
    sum = 0;
    sumTotal = 0;
    sumDeaths = 0;
    sumpop=0;
    sumactive=0;
    sumrecovered=0;
    isNotLoggedIn= true;
    isHomepage = true;
    red=true;
    green=true;
    orange=true;
    createAndUpdate: any;
    medHerbSup: Array<Object> = [];
    isNotSearch= true;
    frame = Frame.getFrameById("myFrame");
    isScan=true;

    
    toggleDisplay() {
        this.isHomepage = !this.isHomepage;
       }
    textFieldValue: string = "";

    onButtonTap(): void {
        console.log("Button was pressed");
    }

    searchPhrase: string;
    onSearchSubmit(args): void {
        let searchBar = <SearchBar>args.object;
        console.log("You are searching for " + searchBar.text);
    }

   
    
    constructor(private http: HttpClient,private myService: MyHttpGetService2, private routerExtensions: RouterExtensions, private appcomponent: AppComponent) {


      
       
    } 
    

    ngOnInit(): void {
      
      // this.extractData();
      this.extractStatics();
      // this.selectItems();
    }
  //   extractData() {
  //     this.myService.getAll()
  //         .subscribe((result) => {
           
            
  //             this.suggestion(result);
              
  //         }, (error) => {
  //             console.log(error);
  //         });
  // }
  
  selectItems() {
    this.dismissKeyboard();
   
    if (!this.isHomepage){
      this.result=[];
      this.myService.getInfo()
   
      .subscribe((result) => {
    
        console.log("this is the object",result)
        this.onGetDataSuccess(result)
          
          
      }, (error) => {
          console.log(error);
      });

    }
    else{
      this.isHomepage = !this.isHomepage;
      this.myService.getInfo()
   
      .subscribe((result) => {
    
        console.log("this is the object",result)
        this.onGetDataSuccess(result)
          
          
      }, (error) => {
          console.log(error);
      });
    }
  

} 

onDrawerButtonTap(): void { 
  const sideDrawer = <RadSideDrawer>app.getRootView();
  sideDrawer.showDrawer();
  console.log("drawer1")
  
}

private onGetDataSuccess(res) {

for (let key in res.response) {
  this.result.push({value: res.response[key]});
  console.log("this array", this.result);
}

  }
  onScroll(args: ScrollEventData) {
    const scrollView = args.object as ScrollView;

    // console.log("scrollX: " + args.scrollX);
    // console.log("scrollY: " + args.scrollY);
}

extractStatics() {
  console.log("this is the extract")
  this.myService.getAll()
      .subscribe((result) => {
        // console.log("this is the result", result)
        
          this.onGetStatics(result);
          
      }, (error) => {
          console.log(error);
      });
}


private onGetStatics(res) {
  
 

for (let key in res.tv_results) {
  
  this.result2.push({value: res.tv_results[key]});
  // console.log("resulting in ",this.result2);
  this.extractImage(res.tv_results.imdb_id);
  
}




this.global.push({new: this.sum, total: this.sumTotal,mpop:this.sumpop, active: this.sumactive, recovered:this.sumrecovered, deaths: this.sumDeaths});



  }


 
    onMedSelected($event: AutoCompleteEventData) {
      const token = <TokenModel>$event.token;
      this.med_1= token.text;

      console.log(this.med_1)
  }
  onMedSelected2($event: AutoCompleteEventData) {
    const token = <TokenModel>$event.token;
    this.med_2= token.text;
    
    console.log(this.med_2)
}

   
//     getImageName(value) {
//       var lower=value.charAt(0).toLowerCase() + value.slice(1);
//       console.log(lower);
//       return `~/images/${lower}.png`;
//   }


extractImage(value) {

  this.myService.getImageName2(value)
      .subscribe((result) => {
        // console.log("this is the image result ", result)
        
          this.onGetImage(result);
          
      }, (error) => {
          console.log(error);
      });
}

 onGetImage(res) {
  
 

 
    
    this.result.push({image: res});
    console.log("IMAGE REsult ",this.result);
    
    
  
  
  
  
    }

  

    suggestion(res) {
      this.Country = res.response;
      this.suggest= new ObservableArray<TokenModel>();

      for (let i = 0; i < this.Country.length; i++) {
          this.suggest.push(new TokenModel(this.Country[i], undefined));
      }
    
  }

     onChatBotTap(){
      utilityModule.openUrl("https://webchat.snatchbot.me/51c70035c97802cbc3d55b31bf6195a04e4f480a644a6c455d2831929c0ec6ef");
     
   }
   
    onHomeTap(): void {
        this.routerExtensions.navigate(["/home"]);
        if(!this.isHomepage){
          this.isHomepage=!this.isHomepage;
        }
    }
    onHistoryTap(): void {
        this.routerExtensions.navigate(["/history"]);
  
    }


    
     
    

   
      dismissKeyboard() {
        if (isIOS) {
          UIApplication.sharedApplication.keyWindow.endEditing(true);
        }
        if (isAndroid) {
          utils.ad.dismissSoftInput();
        }
      }

    


}
