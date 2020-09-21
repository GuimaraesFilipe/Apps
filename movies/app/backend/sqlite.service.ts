import { Injectable } from "@angular/core";
var Sqlite = require("nativescript-sqlite");
@Injectable()
export class DatabaseService {
public getdbConnection() {
return new Sqlite('consumerApp');
}
public closedbConnection() {
new Sqlite('consumerApp')
.then((db) => {
db.close();
});
}
}