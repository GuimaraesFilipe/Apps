
import * as BitmapFactory from "nativescript-bitmap-factory";
import { BackendService } from "./backend/backend.service";
import { DatabaseService } from "./backend/sqlite.service";
import { AuthGuard } from "./backend/auth-guard.service";
import { LoginService } from "./backend/login.service";
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
  
    
     


    

     
  constructor(private authService: AuthGuard,private databaseService: DatabaseService,private router: Router,private userService: LoginService,private routerExtensions: RouterExtensions, private logged: BackendService) {
 
      
      
    

      
  

    this.databaseService.getdbConnection()
    
    .then(db => {
    //    db.execSQL("DROP TABLE medicines").then(() => {
    // }, error => {
    // console.log("medicines table ERROR", error);
    // });
    db.execSQL("CREATE TABLE IF NOT EXISTS medicines (id INTEGER PRIMARY KEY AUTOINCREMENT, medicines_name TEXT, medicine_dosage TEXT, medicine_form TEXT, medicine_frequency TEXT, user_id TEXT)").then(() => {
    }, error => {
    console.log("CREATE TABLE ERROR", error);
    });
    // db.execSQL("DROP TABLE users").then(() => {
    // }, error => {
    // console.log("CREATE TABLE ERROR", error);
    // });
    db.execSQL("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id TEXT UNIQUE, password TEXT, firstName TEXT,lastName TEXT, photo BLOB, date TEXT,country TEXT,favorite TEXT)").then(() => {
    }, error => {
    console.log("CREATE TABLE ERROR", error);
    });

    db.execSQL("DROP TABLE interactions").then(() => {
    }, error => {
    console.log("CREATE TABLE ERROR", error);
    });

    db.execSQL("CREATE TABLE IF NOT EXISTS interactions (id INTEGER PRIMARY KEY AUTOINCREMENT, med_1 TEXT , med_2 TEXT , advice TEXT, evidence TEXT, comment TEXT, benefit TEXT)").then(() => {
      console.log("interactions created")
    }, error => {
    console.log("CREATE TABLE ERROR", error);
    });
    
    db.execSQL("INSERT INTO interactions (med_1 , med_2 , advice , evidence, comment, benefit) VALUES ('Docetaxel', 'St Johns wort', 'St Johns wort reduces the blood concentrations of docetaxel','Well Established', 'Crossover study', 'Avoid')").then(() => {
      console.log("interactions inserted")
    }, error => {
    console.log("INSERT INTO ERROR", error);
    });

    db.execSQL("INSERT INTO interactions (med_1 , med_2 , advice , evidence, comment, benefit) VALUES ('Docetaxel', 'Echinacea', 'A study has investigated a possible interaction between an echinacea extract and docetaxel. The study found that echinacea did not affect the blood concentrations of docetaxel, suggesting that a significant interaction between echinacea and docetaxel is unlikely.','Well Established', 'A pharmacokinetic study in patients with cancer has investigated the effect of an echinacea purpurea extract (Echinaforce; 20 oral drops three times daily for 14 days) on the pharmacokinetics of docetaxel, compared to docetaxel alone. The study found that the echinacea extract did not significantly affect the blood concentrations of docetaxel. A significant interaction between echinacea and docetaxel is unlikely.', 'ok')").then(() => {
      console.log("interactions inserted ")
    }, error => {
    console.log("INSERT INTO ERROR", error);
    });
    db.execSQL("INSERT INTO interactions (med_1 , med_2 , advice , evidence, comment, benefit) VALUES ('Echinacea', 'Docetaxel', 'A study has investigated a possible interaction between an echinacea extract and docetaxel. The study found that echinacea did not affect the blood concentrations of docetaxel, suggesting that a significant interaction between echinacea and docetaxel is unlikely.','Well Established', 'A pharmacokinetic study in patients with cancer has investigated the effect of an echinacea purpurea extract (Echinaforce; 20 oral drops three times daily for 14 days) on the pharmacokinetics of docetaxel, compared to docetaxel alone. The study found that the echinacea extract did not significantly affect the blood concentrations of docetaxel. A significant interaction between echinacea and docetaxel is unlikely.', 'ok')").then(() => {
      console.log("interactions inserted ECHINACEA")
    }, error => {
    console.log("INSERT INTO ERROR", error);
    });

    db.execSQL("INSERT INTO interactions (med_1 , med_2 , advice , evidence, comment, benefit) VALUES ('St Johns wort', 'Docetaxel', 'St Johns wort reduces the blood concentrations of docetaxel','Well Established', 'Crossover study', 'Avoid')").then(() => {
      console.log("interactions inserted")
    }, error => {
    console.log("INSERT INTO ERROR", error);
    });

    db.execSQL("INSERT INTO interactions (med_1 , med_2 , advice , evidence, comment, benefit) VALUES ('St Johns wort', 'Esomeprazole', 'A study has investigated a possible interaction between an echinacea extract and docetaxel. The study found that echinacea did not affect the blood concentrations of docetaxel, suggesting that a significant interaction between echinacea and docetaxel is unlikely.','Well Established', 'A pharmacokinetic study in patients with cancer has investigated the effect of an echinacea purpurea extract (Echinaforce; 20 oral drops three times daily for 14 days) on the pharmacokinetics of docetaxel, compared to docetaxel alone. The study found that the echinacea extract did not significantly affect the blood concentrations of docetaxel. A significant interaction between echinacea and docetaxel is unlikely.', 'careful')").then(() => {
      console.log("interactions inserted ESOMEPRAZOLE")
    }, error => {
    console.log("INSERT INTO ERROR", error);
    });
    db.execSQL("INSERT INTO interactions (med_1 , med_2 , advice , evidence, comment, benefit) VALUES ('Esomeprazole', 'St Johns wort', 'A study has investigated a possible interaction between an echinacea extract and docetaxel. The study found that echinacea did not affect the blood concentrations of docetaxel, suggesting that a significant interaction between echinacea and docetaxel is unlikely.','Well Established', 'A pharmacokinetic study in patients with cancer has investigated the effect of an echinacea purpurea extract (Echinaforce; 20 oral drops three times daily for 14 days) on the pharmacokinetics of docetaxel, compared to docetaxel alone. The study found that the echinacea extract did not significantly affect the blood concentrations of docetaxel. A significant interaction between echinacea and docetaxel is unlikely.', 'careful')").then(() => {
      console.log("interactions inserted")
    }, error => {
    console.log("INSERT INTO ERROR", error);
    });
    
 

    db.execSQL("DROP TABLE medHerbSup").then(() => {
    }, error => {
    console.log("CREATE TABLE ERROR", error);
    });

    db.execSQL("CREATE TABLE IF NOT EXISTS medHerbSup (id INTEGER PRIMARY KEY AUTOINCREMENT, medHerbSup TEXT, uses TEXT, sideEffects TEXT, precautions TEXT, overdose TEXT)").then(() => {
      console.log("medHerbSup created")
    }, error => {
    console.log("CREATE TABLE ERROR", error);
    });
    
    db.execSQL("INSERT INTO  medHerbSup (medHerbSup, uses, sideEffects, precautions, overdose) VALUES ('Amoxicillin', 'Amoxicillin is used to treat a wide variety of bacterial infections. This medication is a penicillin-type antibiotic. It works by stopping the growth of bacteria.', 'Nausea, vomiting, or diarrhea may occur. If any of these effects persist or worsen, tell your doctor or pharmacist promptly.','Before taking amoxicillin, tell your doctor or pharmacist if you are allergic to it; or to penicillin or cephalosporin antibiotics; or if you have any other allergies. This product may contain inactive ingredients, which can cause allergic reactions or other problems. Talk to your pharmacist for more details.', 'If someone has overdosed and has serious symptoms such as passing out or trouble breathing, call 911. Otherwise, call a poison control center right away. US residents can call their local poison control center at 1-800-222-1222. Canada residents can call a provincial poison control center. Symptoms of overdose may include: severe vomiting, persistent diarrhea, a severe decrease in the amount of urine, or seizures.')").then(() => {
      console.log("medHebSup inserted")
    }, error => {
    console.log("INSERT INTO ERROR", error);
    });


    db.execSQL("INSERT INTO  medHerbSup (medHerbSup, uses, sideEffects, precautions, overdose) VALUES ('Docetaxel', 'This medication is used to treat cancer (such as breast, lung, prostate, stomach, and head/neck cancer). Docetaxel is a member of a family of drugs called taxanes. This drug works by slowing cell growth.', 'Pain or swelling at the injection site, nausea, vomiting, diarrhea, excessive tearing, fatigue, dizziness, drowsiness, feeling drunk, constipation, and loss of appetite may occur. Nausea and vomiting can be severe. In some cases, your doctor may prescribe medication to prevent or relieve nausea and vomiting. Eating several small meals, not eating before treatment, or limiting activity may help lessen some of these effects. If any of these effects last or get worse, tell your doctor or pharmacist promptly.','Before using docetaxel, tell your doctor or pharmacist if you are allergic to it; or to similar drugs (taxane-type drugs such as paclitaxel, cabazitaxel); or if you have any other allergies. This product may contain inactive ingredients (such as polysorbate 80), which can cause allergic reactions or other problems. Talk to your pharmacist for more details.','If someone has overdosed and has serious symptoms such as passing out or trouble breathing, call 911. Otherwise, call a poison control center right away. US residents can call their local poison control center at 1-800-222-1222. Canada residents can call a provincial poison control center.')").then(() => {
      console.log("medHebSup inserted")
    }, error => {
    console.log("INSERT INTO ERROR", error);
    });



    });}

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
