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
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";
import { AnyTxtRecord } from "dns";
import { getString } from "tns-core-modules/application-settings";
import { ListViewEventData } from "nativescript-ui-listview";


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
@Injectable()

export class HomeComponent implements OnInit {

  isBusy: boolean = true;
    random: any;
    result: Array<any> = []; 
    result2: Array<any> = []; 
    result3: Array<any> = []; 
    result4: Array<any> = []; 
    resultSelected: Array<any> = []; 
    suggestions: Array<any> = [];
    filtered: Array<any> = [];
    filtered2: Array<any> = [];
    SelectedFiltered: Array<any> = [];
    suggest: ObservableArray<TokenModel>;
  	db: any;
    selected: Array<Object> = [];
    user_id: string;
     url: string = "<url>"; 
    value:boolean = utils.isDataURI(this.url);
    @ViewChild("movieShow",{static: false}) movieShow: ElementRef;
     @ViewChild("med2", {static: false}) med2: ElementRef;
     @ViewChild("med3",{static: false}) med3: ElementRef;
     movie_show="";
    sum = 0;
    sumTotal = 0;
    sumDeaths = 0;
    sumpop=0;
    sumactive=0;
    sumrecovered=0;
    isNotLoggedIn= true;
    isHomepage = true;
    movie= true;
    red=true;
    green=true;
    orange=true;
    createAndUpdate: any;
    medHerbSup: Array<Object> = [];
    isNotSearch= true;
    frame = Frame.getFrameById("myFrame");
    isScan=true;
  resultUpComing: Array<any> = []; 
  UpComingImage: Array<any> = []; 
  filteredUpComing: Array<any> = []; 
  resultTrendingShows: Array<any> = []; 
  TrendingShowsImage:Array<any> = []; 
  filteredTrendingShows: Array<any> = []; 
  resultRecentlyAdded:Array<any> = []; 
  RecentlyAddedImage:Array<any> = []; 
  filteredRecentlyAdded:Array<any> = []; 

    


    onBusyChanged(args: EventData) {
      let indicator: ActivityIndicator = <ActivityIndicator>args.object;
      console.log("indicator.busy changed to: " + indicator.busy);
  }
   
    
    constructor(private http: HttpClient,private myService: MyHttpGetService2, private routerExtensions: RouterExtensions, private appcomponent: AppComponent) {

      

       
    } 
    

    ngOnInit(): void {
      
      // this.extractData();
      this.extractOnAir();
      this.extractTrendingShows();
      this.extractUpComing();
      this.extractTrendingMovies();
      this.extractRecentlyAdded();
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
  // console.log("this is the extract")
  // this.myService.getOnAir()
  //     .subscribe((result) => {
  //       console.log("ON AIR ON AIR ON AIR", result)
        const result= {  "tv_results": [
          {
            "title": "Yowis Ben: The Series",
            "imdb_id": "tt13039042",
             "year": "2020"
           },
            {
            "title": "To kafe tis Haras",
           "imdb_id": "tt0384745",
            "year": "2003"
          },
          {
            "title": "Bettys Diagnose",
            "imdb_id": "tt4310426",
            "year": "2015"
          },
           {
             "title": "Drága örökösök",
           "imdb_id": "tt9480432",
           "year": "2019"
         },
          {
             "title": "Haute Dog",
           "imdb_id": "tt13064206",
           "year": "2020"
          },
         {
          "title": "The Amber Ruffin Show",
            "imdb_id": "tt11058078",
             "year": "2020"
         },
          {
            "title": "Magic of Disney's Animal Kingdom",
           "imdb_id": "tt10196378",
          "year": "2020"
         },
         {
           "title": "Zehu Ze",
           "imdb_id": "tt0077108",
            "year": "1978"
          },
          {
            "title": "The School Nurse Files",
            "imdb_id": "tt12879522",
            "year": "2020"
          }]}
          this.onGetStatics(result);
          
      // }, (error) => {
      //     console.log(error);
      // });
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
        
        this.filtered.push({image: res});
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
  // this.myService.getTrendingMovies()
  //     .subscribe((result) => {
        // console.log("TRENDINg TRENDING", result)
        const result=  {
          "movie_results": [
        
           {
             "title": "Don't Read This On a Plane",
          "year": "0",
            "imdb_id": "tt7525792"
          },
        
          {
            "title": "Brutus Vs César",
            "year": "2020",
            "imdb_id": "tt10557524"
          },
          {
            "imdb_id":"tt0423713",
            "title":"Plus belle la vie",
            "year":"2004"
            }
        ]
            }        
          this.onGetTrendingMovies(result);
          
      // }, (error) => {
      //     console.log(error);
      // });
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
        
        this.filtered2.push({image: res});
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
      
      





      this.random=this.result4[Math.floor( Math.random()*2)].image.poster;
      console.log(this.random)
      
        }
     
        
extractUpComing() {
  // console.log("this is the extract")
  // this.myService.getOnUpComing()
  //     .subscribe((result) => {
  //       console.log("ON AIR ON AIR ON AIR", result)
        const result= {  "movie_results": [{
          "imdb_id":"tt10648198",
          "title":"Dime Cuándo Tú",
          "year":"2020"
          },
          {
            "imdb_id":"tt10687740",
            "title":"Princezna zakletá v čase",
            "year":"2020"
          },
          {
          "imdb_id":"tt11622272",
          "title":"Spring Uje spring",
          "year":"2020"
          },
          {
            "imdb_id":"tt11354164",
            "title":"老後の資金がありません",
            "year":"2020"
          },
          {
            "imdb_id":"tt10431332",
"title":"Legend Quest: The Origin",
"year":"2020"
          },
          {
            "imdb_id":"tt11697690",
"title":"The Woman Who Ran",
"year":"2020"
          }]}
        
          this.onGetUpComing(result);
          
      // }, (error) => {
      //     console.log(error);
      // });
}

private onGetUpComing(res) {
  
 

  for (let key in res.movie_results) {
    
    this.resultUpComing.push({value: res.movie_results[key]});
  
    // console.log("resulting in ",this.result2);
  
  
  }
  
  this.resultUpComing.forEach(obj => {
    this.extractImageUpComing(obj.value.imdb_id);
   });
  
  
  
    }
    extractImageUpComing(value) {

      this.myService.getImageName(value)
          .subscribe((result) => {
            // console.log("this is the image result ", result)
            
              this.onGetImageUpComing(result);
              
              
          }, (error) => {
              console.log(error);
          });
    }
    
     onGetImageUpComing(res) {
      
    
      for (let key in res) {
        
        this.UpComingImage.push({image: res});
        // console.log("IMAGE REsult ",this.result);
    
        this.filteredUpComing= this.UpComingImage.reduce((acc, current) => {
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
        extractTrendingShows() {
          // console.log("this is the extract")
          // this.myService.getOnTrendingShow()
          //     .subscribe((result) => {
          //       console.log("ON AIR ON AIR ON AIR", result)
                const result= {  "tv_results": [{
                  "imdb_id":"tt12624844",
                  "title":"The Great Heist",
                  "year":"2020"
                  },
                  {
                    "imdb_id":"tt9849210",
                    "title":"Biohackers",
                    "year":"2020"
                  },
                  {
                    "imdb_id":"tt10623550",
                    "title":"The Fugitive",
                    "year":"2020"
                  },
                  {
                    "imdb_id":"tt6905686",
                    "title":"Lovecraft Country",
                    "year":"2020"
                  },
                  {
                    "imdb_id":"tt10584608",
                    "title":"Teenage Bounty Hunters",
                    "year":"2020"
                  },
                  {
                    "imdb_id":"tt10986410",
                    "title":"Ted Lasso",
                    "year":"2020"
                  }]}
                
                  this.onGetTrendingShows(result);
                  
              // }, (error) => {
              //     console.log(error);
              // });
        }
        
        private onGetTrendingShows(res) {
          
         
        
          for (let key in res.tv_results) {
            
            this.resultTrendingShows.push({value: res.tv_results[key]});
          
            // console.log("resulting in ",this.result2);
          
          
          }
          
          this.resultTrendingShows.forEach(obj => {
            this.extractImageTrendingShows(obj.value.imdb_id);
           });
          
          
          
            }
            extractImageTrendingShows(value) {
        
              this.myService.getImageName(value)
                  .subscribe((result) => {
                    // console.log("this is the image result ", result)
                    
                      this.onGetImageTrendingShows(result);
                      
                      
                  }, (error) => {
                      console.log(error);
                  });
            }
            
             onGetImageTrendingShows(res) {
              
            
              for (let key in res) {
                
                this.TrendingShowsImage.push({image: res});
                // console.log("IMAGE REsult ",this.result);
            
                this.filteredTrendingShows= this.TrendingShowsImage.reduce((acc, current) => {
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
                extractRecentlyAdded() {
                  // console.log("this is the extract")
                  // this.myService.getOnRecentlyAdded()
                  //     .subscribe((result) => {
                  //       console.log("ON AIR ON AIR ON AIR", result)
                        const result= {  "tv_results": [{
                          "imdb_id":"tt10681614",
                          "title":"The Deceived",
                          "year":"2020"
                          },
                          {
                            "imdb_id":"tt12753692",
"title":"Connected: The Hidden Science of Everything",
"year":"2020"
                          },
                          {
                            "imdb_id":"tt9208876",
                            "title":"The Falcon and the Winter Soldier",
                            "year":"2020"
                          },
                          {
                            "imdb_id":"tt10857210",
"title":"Muppets Now",
"year":"2020"
                          },
                          {
                            "imdb_id":"tt9789660",
"title":"Transformers: War for Cybertron Trilogy",
"year":"2020"
                          }]}
                        
                          this.onGetRecentlyAdded(result);
                          
                      // }, (error) => {
                      //     console.log(error);
                      // });
                }
                
                private onGetRecentlyAdded(res) {
                  
                 
                
                  for (let key in res.tv_results) {
                    
                    this.resultRecentlyAdded.push({value: res.tv_results[key]});
                  
                    // console.log("resulting in ",this.result2);
                  
                  
                  }
                  
                  this.resultRecentlyAdded.forEach(obj => {
                    this.extractImageRecentlyAdded(obj.value.imdb_id);
                   });
                  
                  
                  
                    }
                    extractImageRecentlyAdded(value) {
                
                      this.myService.getImageName(value)
                          .subscribe((result) => {
                            // console.log("this is the image result ", result)
                            
                              this.onGetImageRecentlyAdded(result);
                              
                              
                          }, (error) => {
                              console.log(error);
                          });
                    }
                    
                     onGetImageRecentlyAdded(res) {
                      
                    
                      for (let key in res) {
                        
                        this.RecentlyAddedImage.push({image: res});
                        // console.log("IMAGE REsult ",this.result);
                    
                        this.filteredRecentlyAdded= this.RecentlyAddedImage.reduce((acc, current) => {
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

selectedSearchM(args: ListViewEventData) {
  this.resultSelected = [];
  this.SelectedFiltered=[];
  this.movie_show="";
let selected= <any>args.object.bindingContext;
this.movie_show=selected.image.id;
  this.isHomepage = !this.isHomepage;
 console.log(' got MOvieShow', this.movie_show);
 this.extractSelectMovie(this.movie_show);

}
extractSelectMovie(value) {
  console.log("this is the extract Selected movieShows")
  this.myService.getOnSimilarMovies(value)
      .subscribe((result) => {
        // console.log("this is the result", result)
        
          this.onGetSelectMovieShow(result);
          
      }, (error) => {
          console.log(error);
      });
}

selectedSearch(args: ListViewEventData) {
  this.movie=!this.movie;
  this.resultSelected = [];
  this.SelectedFiltered=[];
  this.movie_show="";
let selected= <any>args.object.bindingContext;
this.movie_show=selected.image.id;
  this.isHomepage = !this.isHomepage;
 console.log(' got MOvieShow', this.movie_show);
 this.extractSelectShow(this.movie_show);

}

extractSelectShow(value) {
  console.log("this is the extract Selected movieShows")
  this.myService.getOnSimilarTvShows(value)
      .subscribe((result) => {
        console.log("this is the result", result)
        
          this.onGetSelectMovieShow(result);
          
      }, (error) => {
          console.log(error);
      });
}

private onGetSelectMovieShow(res) {
  
 

  for (let key in res) {
    
    
    this.SelectedFiltered.push({value: res});
  
    
  
  
  }
  this.resultSelected= this.SelectedFiltered.reduce((acc, current) => {
    const x = acc.find(item => item.image === current.image);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);
  
  
  console.log("resulting in ",this.resultSelected);
  
  
    }

     
   
    onHomeTap(): void {
      this.movie=!this.movie;
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
