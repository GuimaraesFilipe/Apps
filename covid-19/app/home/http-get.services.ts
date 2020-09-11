import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable(
    // Instead of providers array you can use provideIn
    // Learn more https://angular.io/guide/providers
    // {
    //     providedIn: "root"
    // }
)
export class MyHttpGetService2 {
    private serverUrl = "https://covid-193.p.rapidapi.com/countries";
    

    constructor(private http: HttpClient) { }

    getCountry() {
        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: headers });
    }

    private createRequestHeader() {
        // set headers here e.g.
        let headers = new HttpHeaders({
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
	        "x-rapidapi-key": "1ebca4f1c3msh15dce4c7b4ed44cp1747ecjsn58028a67a977",
        
         });

        return headers;
    }
    getInfo(){
        const serverUrl1 = `https://covid-193.p.rapidapi.com/statistics?country=all`;
        let headers = this.Header();
        
        return this.http.get(serverUrl1, { headers: headers});
    }
    getAll(){
        const serverUrl1 =  "https://covid-193.p.rapidapi.com/statistics";
        let headers = this.Header();

        return this.http.get(serverUrl1, { headers: headers});
       
    }
    
    
    private Header() {
        // set headers here e.g.
        let headers = new HttpHeaders({
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": "1ebca4f1c3msh15dce4c7b4ed44cp1747ecjsn58028a67a977"
         });
         
         

        return headers;
    }
}