import { Injectable } from "@angular/core";
import { Medicine } from "../shared/medicines.model";
import { BackendService } from "./backend.service";
import { DatabaseService } from "./sqlite.service";
import { User } from "kinvey-nativescript-sdk";
@Injectable()
export class MedicineService {
    constructor(private database: DatabaseService) {
}
addNew(medicine: Medicine) {
        return new Promise<Object>((resolve, reject) => {
this.database.getdbConnection()
                .then(db => {
                    db.execSQL("INSERT INTO medicines (medicines_name, medicine_dosage, medicine_form, medicine_ frequency, user_id) VALUES (?,?,?,?,?,?,?)", [medicine.name, medicine.dosage, medicine.form, medicine. frequency, medicine.email]).then(id => {
                        resolve({ status: true });
                    }, err => {
                        reject({ status: false });
                        console.log("error adding med!!")
                    });
                });
        });
    }
show(user: User) {
        return new Promise<Object>((resolve, reject) => {
this.database.getdbConnection()
                .then(db => {
                    db.all("SELECT * FROM medicines where user_id like'" + user.email +"'").then(rows => {
                        if (rows.length > 0) {
                            BackendService.token = "dummy_token";
                            resolve({ status: true });
                        }
                        else {
                            reject({ status: false });
                            console.log("medicine show error!!")
                        }
                    });
                });
        });
    }

    

 delete(medicine : Medicine) {
this.database.getdbConnection()
                .then(db => {
                    db.execSQL("DELETE FROM medicines WHERE id like '"+ medicine.id + "'").then(rows => {
                        BackendService.token = "";
                        this.database.closedbConnection();
                    });
                });
        
    }


logout() {
        BackendService.token = "";
        this.database.closedbConnection();
    }
}