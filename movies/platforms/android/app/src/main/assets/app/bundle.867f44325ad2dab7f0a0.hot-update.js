webpackHotUpdate("bundle",{

/***/ "./home/http-get.services.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
const http_1 = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
let MyHttpGetService2 = class MyHttpGetService2 {
    constructor(http) {
        this.http = http;
        this.serverUrl = "https://covid-193.p.rapidapi.com/countries";
    }
    getCountry() {
        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: headers });
    }
    createRequestHeader() {
        let headers = new http_1.HttpHeaders({
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": "1ebca4f1c3msh15dce4c7b4ed44cp1747ecjsn58028a67a977",
        });
        return headers;
    }
    getInfo() {
        const serverUrl1 = `https://covid-193.p.rapidapi.com/statistics?country=all`;
        let headers = this.Header();
        return this.http.get(serverUrl1, { headers: headers });
    }
    getAll() {
        const serverUrl1 = "https://movies-tvshows-data-imdb.p.rapidapi.com/?page=1&type=get-airingtoday-shows";
        let headers = this.Header();
        return this.http.get(serverUrl1, { headers: headers });
    }
    getImageName2(value) {
        const serverUrl1 = `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${value}`;
        let headers = this.Header2();
        return this.http.get(serverUrl1, { headers: headers });
    }
    Header() {
        let headers = new http_1.HttpHeaders({
            "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
            "x-rapidapi-key": "1ebca4f1c3msh15dce4c7b4ed44cp1747ecjsn58028a67a977"
        });
        return headers;
    }
    Header2() {
        let headers = new http_1.HttpHeaders({
            "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
            "x-rapidapi-key": "1ebca4f1c3msh15dce4c7b4ed44cp1747ecjsn58028a67a977",
        });
        return headers;
    }
};
MyHttpGetService2.ctorParameters = () => [
    { type: http_1.HttpClient }
];
MyHttpGetService2 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], MyHttpGetService2);
exports.MyHttpGetService2 = MyHttpGetService2;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2h0dHAtZ2V0LnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsa0ZBQTJDO0FBQzNDLG9GQUEyRTtBQVMzRSxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQUkxQixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBSDVCLGNBQVMsR0FBRyw0Q0FBNEMsQ0FBQztJQUd6QixDQUFDO0lBRXpDLFVBQVU7UUFDTixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU8sbUJBQW1CO1FBRXZCLElBQUksT0FBTyxHQUFHLElBQUksa0JBQVcsQ0FBQztZQUMxQixpQkFBaUIsRUFBRSwwQkFBMEI7WUFDaEQsZ0JBQWdCLEVBQUUsb0RBQW9EO1NBRXJFLENBQUMsQ0FBQztRQUVKLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFDRCxPQUFPO1FBQ0gsTUFBTSxVQUFVLEdBQUcseURBQXlELENBQUM7UUFDN0UsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRTVCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELE1BQU07UUFDRixNQUFNLFVBQVUsR0FBRyxvRkFBb0YsQ0FBQztRQUN4RyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFNUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztJQUUxRCxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQUs7UUFHZixNQUFNLFVBQVUsR0FBRyx1RUFBdUUsS0FBSyxFQUFFLENBQUM7UUFDcEcsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7SUFFeEQsQ0FBQztJQUdPLE1BQU07UUFFVixJQUFJLE9BQU8sR0FBRyxJQUFJLGtCQUFXLENBQUM7WUFDMUIsaUJBQWlCLEVBQUUseUNBQXlDO1lBQzVELGdCQUFnQixFQUFFLG9EQUFvRDtTQUN4RSxDQUFDLENBQUM7UUFJSixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBQ08sT0FBTztRQUVYLElBQUksT0FBTyxHQUFHLElBQUksa0JBQVcsQ0FBQztZQUMxQixpQkFBaUIsRUFBRSx3REFBd0Q7WUFDM0UsZ0JBQWdCLEVBQUUsb0RBQW9EO1NBQ3hFLENBQUMsQ0FBQztRQUlKLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7Q0FDSjs7WUFoRTZCLGlCQUFVOztBQUozQixpQkFBaUI7SUFQN0IsaUJBQVUsRUFNVjtxQ0FLNkIsaUJBQVU7R0FKM0IsaUJBQWlCLENBb0U3QjtBQXBFWSw4Q0FBaUIiLCJmaWxlIjoiYnVuZGxlLjg2N2Y0NDMyNWFkMmRhYjdmMGEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbkBJbmplY3RhYmxlKFxyXG4gICAgLy8gSW5zdGVhZCBvZiBwcm92aWRlcnMgYXJyYXkgeW91IGNhbiB1c2UgcHJvdmlkZUluXHJcbiAgICAvLyBMZWFybiBtb3JlIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9wcm92aWRlcnNcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBwcm92aWRlZEluOiBcInJvb3RcIlxyXG4gICAgLy8gfVxyXG4pXHJcbmV4cG9ydCBjbGFzcyBNeUh0dHBHZXRTZXJ2aWNlMiB7XHJcbiAgICBwcml2YXRlIHNlcnZlclVybCA9IFwiaHR0cHM6Ly9jb3ZpZC0xOTMucC5yYXBpZGFwaS5jb20vY291bnRyaWVzXCI7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICAgIGdldENvdW50cnkoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RIZWFkZXIoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnNlcnZlclVybCwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlUmVxdWVzdEhlYWRlcigpIHtcclxuICAgICAgICAvLyBzZXQgaGVhZGVycyBoZXJlIGUuZy5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgICAgIFwieC1yYXBpZGFwaS1ob3N0XCI6IFwiY292aWQtMTkzLnAucmFwaWRhcGkuY29tXCIsXHJcblx0ICAgICAgICBcIngtcmFwaWRhcGkta2V5XCI6IFwiMWViY2E0ZjFjM21zaDE1ZGNlNGM3YjRlZDQ0Y3AxNzQ3ZWNqc241ODAyOGE2N2E5NzdcIixcclxuICAgICAgICBcclxuICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xyXG4gICAgfVxyXG4gICAgZ2V0SW5mbygpe1xyXG4gICAgICAgIGNvbnN0IHNlcnZlclVybDEgPSBgaHR0cHM6Ly9jb3ZpZC0xOTMucC5yYXBpZGFwaS5jb20vc3RhdGlzdGljcz9jb3VudHJ5PWFsbGA7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLkhlYWRlcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHNlcnZlclVybDEsIHsgaGVhZGVyczogaGVhZGVyc30pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbCgpe1xyXG4gICAgICAgIGNvbnN0IHNlcnZlclVybDEgPSBcImh0dHBzOi8vbW92aWVzLXR2c2hvd3MtZGF0YS1pbWRiLnAucmFwaWRhcGkuY29tLz9wYWdlPTEmdHlwZT1nZXQtYWlyaW5ndG9kYXktc2hvd3NcIjtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuSGVhZGVyKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHNlcnZlclVybDEsIHsgaGVhZGVyczogaGVhZGVyc30pO1xyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldEltYWdlTmFtZTIodmFsdWUpIHtcclxuICAgICAgICAvLyB2YXIgbG93ZXI9dmFsdWUuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhsb3dlcik7XHJcbiAgICAgICAgY29uc3Qgc2VydmVyVXJsMSA9IGBodHRwczovL2ltZGItaW50ZXJuZXQtbW92aWUtZGF0YWJhc2UtdW5vZmZpY2lhbC5wLnJhcGlkYXBpLmNvbS9maWxtLyR7dmFsdWV9YDsgXHJcbiAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5IZWFkZXIyKCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHNlcnZlclVybDEsIHsgaGVhZGVyczogaGVhZGVyc30pO1xyXG4gICAgICAgIC8vIHJldHVybiBgfi9pbWFnZXMvZmxhZ3MvJHtsb3dlcn0tZmxhZy1jb3VudHJ5LW5hdGlvbi11bmlvbi1lbXBpcmUucG5nYDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBwcml2YXRlIEhlYWRlcigpIHtcclxuICAgICAgICAvLyBzZXQgaGVhZGVycyBoZXJlIGUuZy5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgICAgIFwieC1yYXBpZGFwaS1ob3N0XCI6IFwibW92aWVzLXR2c2hvd3MtZGF0YS1pbWRiLnAucmFwaWRhcGkuY29tXCIsXHJcbiAgICAgICAgICAgIFwieC1yYXBpZGFwaS1rZXlcIjogXCIxZWJjYTRmMWMzbXNoMTVkY2U0YzdiNGVkNDRjcDE3NDdlY2pzbjU4MDI4YTY3YTk3N1wiXHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgICBcclxuICAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBIZWFkZXIyKCkge1xyXG4gICAgICAgIC8vIHNldCBoZWFkZXJzIGhlcmUgZS5nLlxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAgICAgXCJ4LXJhcGlkYXBpLWhvc3RcIjogXCJpbWRiLWludGVybmV0LW1vdmllLWRhdGFiYXNlLXVub2ZmaWNpYWwucC5yYXBpZGFwaS5jb21cIixcclxuICAgICAgICAgICAgXCJ4LXJhcGlkYXBpLWtleVwiOiBcIjFlYmNhNGYxYzNtc2gxNWRjZTRjN2I0ZWQ0NGNwMTc0N2VjanNuNTgwMjhhNjdhOTc3XCIsXHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgICBcclxuICAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==