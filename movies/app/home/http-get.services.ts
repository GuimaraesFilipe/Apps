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
    getTrendingMovies(){
        const serverUrl1 = "https://movies-tvshows-data-imdb.p.rapidapi.com/?page=1&type=get-trending-movies";
        let headers = this.Header();
        
        return this.http.get(serverUrl1, { headers: headers});
    }

    getOnAir(){
        const serverUrl1 = "https://movies-tvshows-data-imdb.p.rapidapi.com/?page=1&type=get-airingtoday-shows";
        let headers = this.Header();

        return this.http.get(serverUrl1, { headers: headers});
       
    }
    getOnUpComing(){
        const serverUrl1 = "https://movies-tvshows-data-imdb.p.rapidapi.com/?page=1&type=get-upcoming-movies";
        let headers = this.Header();

        return this.http.get(serverUrl1, { headers: headers});
       
    }

    getOnTrendingShow(){
        const serverUrl1 = "https://movies-tvshows-data-imdb.p.rapidapi.com/?page=1&type=get-trending-shows";
        let headers = this.Header();

        return this.http.get(serverUrl1, { headers: headers});
       
    }
    getOnRecentlyAdded(){
        const serverUrl1 = "https://movies-tvshows-data-imdb.p.rapidapi.com/?page=1&type=get-recently-added-shows";
        let headers = this.Header();

        return this.http.get(serverUrl1, { headers: headers});
       
    }
    getOnSimilarMovies(value){
        const serverUrl1 = `https://movies-tvshows-data-imdb.p.rapidapi.com/?page=1&imdb=${value}&type=get-similar-movies`;
        let headers = this.Header();

        return this.http.get(serverUrl1, { headers: headers});
       
    }
    getOnSimilarTvShows(value){
        const serverUrl1 = `https://movies-tvshows-data-imdb.p.rapidapi.com/?page=1&imdb=${value}&type=get-similar-shows`;
        let headers = this.Header();
        return this.http.get(serverUrl1, { headers: headers});
       
    }

    getImageName(value) {
        // var lower=value.charAt(0).toLowerCase() + value.slice(1);
        // console.log(lower);
        const serverUrl1 = `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${value}`; 
      let headers = this.Header2();
      return this.http.get(serverUrl1, { headers: headers});
        // return `~/images/flags/${lower}-flag-country-nation-union-empire.png`;
    }
    
    getImageName2(value) {
        // var lower=value.charAt(0).toLowerCase() + value.slice(1);
        // console.log(lower);
        const serverUrl1 = `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${value}`; 
      let headers = this.Header2();
      return this.http.get(serverUrl1, { headers: headers});
        // return `~/images/flags/${lower}-flag-country-nation-union-empire.png`;
    }
    getSelectedMovieShow(value) {
        // var lower=value.charAt(0).toLowerCase() + value.slice(1);
        // console.log(lower);
        const serverUrl1 = `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${value}`; 
      let headers = this.Header2();
      return this.http.get(serverUrl1, { headers: headers});
        // return `~/images/flags/${lower}-flag-country-nation-union-empire.png`;
    }
    
    
    private Header() {
        // set headers here e.g.
        let headers = new HttpHeaders({
            "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
            "x-rapidapi-key": "f202e0f401msh7f74c1bb498e590p130cfajsn9347834a60fa",
         });
         
         

        return headers;
    }
    private Header2() {
        // set headers here e.g.
        let headers = new HttpHeaders({
            "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
            "x-rapidapi-key": "1ebca4f1c3msh15dce4c7b4ed44cp1747ecjsn58028a67a977",
         });
         
         

        return headers;
    }
}