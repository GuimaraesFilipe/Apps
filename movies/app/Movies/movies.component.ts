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
import { MyHttpGetService } from "./http-get.services";  
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";


@Component({
    selector: "Movies",
    moduleId: module.id,
    templateUrl: "./movies.component.html",
    styleUrls: ['./movies.component.css']
})
@Injectable()

export class MoviesComponent implements OnInit {

  isBusy: boolean = true;
    random: any;
    result: Array<any> = []; 
    result2: Array<any> = []; 
    result3: Array<any> = []; 
    result4: Array<any> = []; 
    suggestions: Array<any> = [];
    filtered: Array<any> = [];
    filtered2: Array<any> = [];
    suggest: ObservableArray<TokenModel>;
  	db: any;
   
    user_id: string;
     url: string = "<url>"; 
    value:boolean = utils.isDataURI(this.url);
     @ViewChild("movieShow",{static: false}) movieShow: ElementRef;
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

    


    onBusyChanged(args: EventData) {
      let indicator: ActivityIndicator = <ActivityIndicator>args.object;
      console.log("indicator.busy changed to: " + indicator.busy);
  }
   
    
    constructor(private http: HttpClient,private myService: MyHttpGetService, private routerExtensions: RouterExtensions, private appcomponent: AppComponent) {


      
       
    } 
    

    ngOnInit(): void {
      
      // this.extractData();
      this.extractOnAir();
      this.extractTrendingMovies();
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
  
//   selectItems() {
//     this.dismissKeyboard();
   
//     if (!this.isHomepage){
//       this.result=[];
//       this.myService.getInfo()
   
//       .subscribe((result) => {
    
//         console.log("this is the object",result)
//         this.onGetDataSuccess(result)
          
          
//       }, (error) => {
//           console.log(error);
//       });

//     }
//     else{
//       this.isHomepage = !this.isHomepage;
//       this.myService.getInfo()
   
//       .subscribe((result) => {
    
//         console.log("this is the object",result)
//         this.onGetDataSuccess(result)
          
          
//       }, (error) => {
//           console.log(error);
//       });
//     }
  

// } 

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

extractOnAir() {
  console.log("this is the extract")
  this.myService.getOnAir()
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
  
  
  }
  
  this.result2.forEach(obj => {
    this.extractImage(obj.value.imdb_id);
   });
  
  
  
    }
    extractImage(value) {

      this.myService.getImageName(value)
          .subscribe((result) => {
            // console.log("this is the image result ", result)
            
              this.onGetImage(result);
              
              
          }, (error) => {
              console.log(error);
          });
    }
    
     onGetImage(res) {
      
    
      for (let key in res) {
        
        this.filtered.push({image: res.poster});
        // console.log("IMAGE REsult ",this.result);
    
        this.result= this.filtered.reduce((acc, current) => {
          const x = acc.find(item => item.image === current.image);
          if (!x) {
            return acc.concat([current]);
          } else {
            return acc;
          }
        }, []);
    
        // console.log('filtered', this.filtered);
     
        
        
      }
      
      
      
        }

extractTrendingMovies() {
  console.log("this is the extract Trending Movies")
  this.myService.getTrendingMovies()
      .subscribe((result) => {
        // console.log("this is the result", result)
        
          this.onGetTrendingMovies(result);
          
      }, (error) => {
          console.log(error);
      });
}

private onGetTrendingMovies(res) {
  
 

  for (let key in res.movie_results) {
    
    this.result3.push({value: res.movie_results[key]});
  
    // console.log("resulting in ",this.result2);
  
  
  }
  
  this.result3.forEach(obj => {
    this.extractImage2(obj.value.imdb_id);
   });
  
  
  
    }

    extractImage2(value) {

      this.myService.getImageName2(value)
          .subscribe((result) => {
            // console.log("this is the image result ", result)
            
              this.onGetImage2(result);
              
              
          }, (error) => {
              console.log(error);
          });
    }
    
     onGetImage2(res) {
      
    
      for (let key in res) {
        
        this.filtered2.push({image: res.poster});
        // console.log("IMAGE REsult ",this.result);
    
        this.result4= this.filtered2.reduce((acc, current) => {
          const x = acc.find(item => item.image === current.image);
          if (!x) {
            return acc.concat([current]);
          } else {
            return acc;
          }
        }, []);
    
        // console.log('filtered', this.filtered);
     
        
      }
      
      





      this.random=this.result4[Math.floor( Math.random()*10)].image;
      console.log(this.random)
      
        }
     


   
//     getImageName(value) {
//       var lower=value.charAt(0).toLowerCase() + value.slice(1);
//       console.log(lower);
//       return `~/images/${lower}.png`;
//   }




  

   

// addInteraction(medHerbSup: string) {
//   console.log("add medHerbSup", medHerbSup)
//     dialogs.action({
//        title: "Are you sure that you want to add this medicine to your list?",
//        cancelButtonText: "Cancel",
//       actions: ["Yes", "No"]
//     }).then(result => {
//       if (result == "Yes") {
//        this.medHerbSup_name = medHerbSup;
//        this.medicine_form = "Pill";
//         this.db.execSQL("INSERT INTO medicines (medicines_name, medicine_dosage, medicine_form, medicine_frequency, user_id) VALUES (?,?,?,?,?)", [this.medHerbSup_name, this.medicine_dosage, this.medicine_form, this.medicine_frequency, this.user_id]).then(id => {
//            this.medicineList.unshift({id: id, name: this.medHerbSup_name, dosage: this.medicine_dosage, form: this.medicine_form, frequency:this.medicine_frequency});
//            console.log(" adding was a sucess", this.medicineList);
//            dialogs.alert('Medicine saved successfully:');
           
//        }, error => {
//            console.log('An error occurred while adding an item to your list.', error);
//            this.medHerbSup_name = "";
//            this.medicine_dosage = "";
//            this.medicine_form = "";
//            this.medicine_frequency = "";
//        });

//       } else if (result == "No") {
       
//       }
//     });
//    }

// selectedSearch() {
//   this.movieShow= [];
//   this.isHomepage = !this.isHomepage;
//  console.log(' Got MovieShow', this.med_1)
// this.databaseService.getdbConnection()
// .then(db => {
//   db.all("SELECT * FROM medHerbSup WHERE medHerbSup = ?" ,[this.med_1] ).then(rows => {
//     for (var row in rows) {
//       this.medHerbSup.push({ id:rows[row][0], medHerbSup: rows[row][1], uses: rows[row][2], sideEffects: rows[row][3], precautions: rows[row][4], overdose: rows[row][5] });
                 
//               }

             
//               this.med_1= getString("med1");
              
//               this.db = db;

//               if(this.medHerbSup.length === 0){
                
//                 dialogs.action({
//                   title: "Interaction error ",
//                   message: "Sorry! this interactions is not in our system.",
//                 cancelButtonText: "Ok",
      
//                 });}
//                 else{
//                   console.log(" getting data was a sucess", this.medHerbSup );
//                 }
             
             
//   }, error => {
    
//     dialogs.action({
//       title: "Interaction error ",
//       message: "Sorry! this interactions is not in our system.",
//     cancelButtonText: "Ok",

//     });
//     console.log("SELECT ERROR", error + this.medHerbSup);
    
//   });
// });
// }
   
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
