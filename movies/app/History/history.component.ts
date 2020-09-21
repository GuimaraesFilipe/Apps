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

import { DatePicker } from "tns-core-modules/ui/date-picker";
declare const UIApplication;
import { MyHttpGetService } from "./http-get.services";  
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Component({
    selector: "History",
    moduleId: module.id,
    templateUrl: "./history.component.html",
    styleUrls: ['./history.component.css']
})
@Injectable()

export class HistoryComponent implements OnInit {


  Country: [];
  Countries:  Array<any> = []; 
  chartCases: Array<any> = []; 
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
  
  minDate: Date = new Date(2019, 12, 1);
  maxDate: Date = new Date(2022, 12, 30);

    all: Array<any> = []; 
    all2: Array<any> = []; 
    all3: Array<any> = []; 
    all4: Array<any> = []; 
    all5: Array<any> = []; 
    all6: Array<any> = []; 
    all7: Array<any> = []; 
    global: Array<any> = []; 
    result= []; 
    result2: Array<any> = []; 
    result3: Array<any> = []; 
    suggestions: Array<any> = [];
    filtered: Array<any> = [];
    suggest: ObservableArray<TokenModel>;
    db: any;
    countryDate:any;
    countryMonth:any;
    countryYear:any;
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
    barchart = []; 
    

    
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
  
   
    
    constructor( private http: HttpClient, private myService: MyHttpGetService, private routerExtensions: RouterExtensions, private appcomponent: AppComponent) {


      
       
    } 

    onDateChanged(args) {
      
   
  }

  onDayChanged(args) {
    if(args.value<=9){
      this.countryDate=`0${args.value}`;
    }else{
      this.countryDate=args.value;
    }
  
      console.log("Day New value: " + this.countryDate);
    
  }

  onMonthChanged(args) {
    if(args.value<=9){
      this.countryMonth=`0${args.value}`;
    }else{
      this.countryMonth=args.value;
    }
 
      console.log("Month New value: " + this.countryMonth);
    
  }

  onYearChanged(args) {
    this.countryYear=args.value;
    
  }

    

    ngOnInit(): void {

      this.extractData();
      // this.extractStatics();
      this.extractChart();
    
   
    
    }
   
    
    extractData() {
      this.myService.getCountry()
          .subscribe((result) => {
            // console.log("this is the result",result)
            
              this.suggestion(result);
              
          }, (error) => {
              console.log(error);
          });
  }
  
  selectItems() {
    this.dismissKeyboard();
   
    if (!this.isHomepage){
     
      this.myService.getInfo(this.med_1, this.countryDate, this.countryMonth, this.countryYear)
   
      .subscribe((result) => {
    
        console.log("this is the object",result)
        this.onGetDataSuccess(result)
          
          
      }, (error) => {
          console.log(error);
      });

    }
    else{
      this.isHomepage = !this.isHomepage;
      
      this.myService.getInfo(this.med_1, this.countryDate, this.countryMonth, this.countryYear)
   
      .subscribe((result) => {
    
        console.log("this is the object",result)
        this.onGetDataSuccess(result)
          
          
      }, (error) => {
          console.log(error);
      });
    }
  

} 
private onGetDataSuccess(res) {
this.result=[];
this.filtered=[];
console.log("array to 0", this.result);
for(let key in res.response){
  this.filtered.push({value: res.response[key]});
  
}
this.result= this.filtered.reduce((acc, current) => {
  const x = acc.find(item => item.value.country === current.value.country);
  if (!x) {
    return acc.concat([current]);
  } else {
    return acc;
  }
}, []);
console.log("this array", this.result);



  }
  
  onScroll(args: ScrollEventData) {
    const scrollView = args.object as ScrollView;

    // console.log("scrollX: " + args.scrollX);
    // console.log("scrollY: " + args.scrollY);
}

// extractStatics() {
//   this.myService.getAll()
//       .subscribe((result) => {
//         // console.log("this is the result",result)
        
//           this.onGetStatics(result);
          
//       }, (error) => {
//           console.log(error);
//       });
// }
private onGetStatics(res) {
  
 

for (let key in res.response) {
  
  this.result2.push({value: res.response[key]});
  
} 






  }
  extractChart() {
    this.myService.getAll()
        .subscribe((result) => {
          // console.log("this is the result",result)
          
            this.onGetStatics(result);
            
        }, (error) => {
            console.log(error);
        });
  }
  private onGetChart(res) {
    
  
  for (let key in res.response) {
    
    this.result3.push(res.response[key]);
 
    
  }

  this.Countries = this.result3.map(a => a.country);
 
  this.chartCases = this.result3.map(a => a.cases.total);
 

  this.global.push({Country:this.Countries, Cases:this.chartCases})
  console.log("dsniodansd",this.chartCases)
  
  
  
    }


 
    onMedSelected($event: AutoCompleteEventData) {
      const token = <TokenModel>$event.token;
      this.med_1= token.text;
      this.dismissKeyboard();
      console.log(this.med_1)
  }
  onMedSelected2($event: AutoCompleteEventData) {
    const token = <TokenModel>$event.token;
    this.med_2= token.text;
    
    console.log(this.med_2)
}

   
    getImageName(value) {
      var lower=value.charAt(0).toLowerCase() + value.slice(1);
      console.log(lower);
      return `~/images/${lower}.png`;
  }

  getImageName2(value) {
    var lower=value.charAt(0).toLowerCase() + value.slice(1);
    console.log(lower);
    return `~/images/flags/${lower}-flag-country-nation-union-empire.png`;
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
