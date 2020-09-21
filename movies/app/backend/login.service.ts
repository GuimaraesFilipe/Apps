import { Injectable } from "@angular/core";
import { User } from "../shared/user.model";
import { BackendService } from "./backend.service";
import { DatabaseService } from "../backend/sqlite.service";
@Injectable()
export class LoginService {
    constructor(private database: DatabaseService) {
}

register(user: User) {
        return new Promise<Object>((resolve, reject) => {
this.database.getdbConnection()
                .then(db => {
                    db.execSQL("INSERT INTO users (user_id,password,firstName,lastName, photo,date,country,favorite) VALUES (?,?,?,?,?,?,?,?)", [user.email, user.password, user.firstName, user.lastName, user.photo, user.date, user.country, user.favorite]).then(id => {
                        resolve({ status: true });
                    }, err => {
                        reject( err);
                    });
                });
        });
    }
login(user: User) {
        return new Promise<Object>((resolve, reject) => {
this.database.getdbConnection()
                .then(db => {
                    db.all("SELECT * FROM users where user_id like'" + user.email + "' and password like '" + user.password + "'").then(rows => {
                        if (rows.length > 0) {
                            BackendService.token = "dummy_token";
                            resolve({ status: true });
                        }
                        else {
                            reject({ status: false });
                        }
                    });
                });
        });
    }

    

 delete(user: User) {
this.database.getdbConnection()
                .then(db => {
                    db.execSQL("DELETE FROM users WHERE user_id like '"+ user.email + "'").then(rows => {
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