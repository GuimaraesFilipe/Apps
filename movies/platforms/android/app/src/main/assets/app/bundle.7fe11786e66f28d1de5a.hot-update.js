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
        const serverUrl1 = `https://movies-tvshows-data-imdb.p.rapidapi.com/?imdb=${value}&type=get-show-images-by-imdb`;
        let headers = this.Header();
        return this.http.get(serverUrl1, { headers: headers });
    }
    Header() {
        let headers = new http_1.HttpHeaders({
            "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
            "x-rapidapi-key": "1ebca4f1c3msh15dce4c7b4ed44cp1747ecjsn58028a67a977"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2h0dHAtZ2V0LnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsa0ZBQTJDO0FBQzNDLG9GQUEyRTtBQVMzRSxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQUkxQixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBSDVCLGNBQVMsR0FBRyw0Q0FBNEMsQ0FBQztJQUd6QixDQUFDO0lBRXpDLFVBQVU7UUFDTixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU8sbUJBQW1CO1FBRXZCLElBQUksT0FBTyxHQUFHLElBQUksa0JBQVcsQ0FBQztZQUMxQixpQkFBaUIsRUFBRSwwQkFBMEI7WUFDaEQsZ0JBQWdCLEVBQUUsb0RBQW9EO1NBRXJFLENBQUMsQ0FBQztRQUVKLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFDRCxPQUFPO1FBQ0gsTUFBTSxVQUFVLEdBQUcseURBQXlELENBQUM7UUFDN0UsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRTVCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELE1BQU07UUFDRixNQUFNLFVBQVUsR0FBRyxvRkFBb0YsQ0FBQztRQUN4RyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFNUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztJQUUxRCxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQUs7UUFHZixNQUFNLFVBQVUsR0FBRyx5REFBeUQsS0FBSywrQkFBK0IsQ0FBQztRQUNuSCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztJQUV4RCxDQUFDO0lBR08sTUFBTTtRQUVWLElBQUksT0FBTyxHQUFHLElBQUksa0JBQVcsQ0FBQztZQUMxQixpQkFBaUIsRUFBRSx5Q0FBeUM7WUFDNUQsZ0JBQWdCLEVBQUUsb0RBQW9EO1NBQ3hFLENBQUMsQ0FBQztRQUlKLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7Q0FDSjs7WUFyRDZCLGlCQUFVOztBQUozQixpQkFBaUI7SUFQN0IsaUJBQVUsRUFNVjtxQ0FLNkIsaUJBQVU7R0FKM0IsaUJBQWlCLENBeUQ3QjtBQXpEWSw4Q0FBaUIiLCJmaWxlIjoiYnVuZGxlLjdmZTExNzg2ZTY2ZjI4ZDFkZTVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbkBJbmplY3RhYmxlKFxyXG4gICAgLy8gSW5zdGVhZCBvZiBwcm92aWRlcnMgYXJyYXkgeW91IGNhbiB1c2UgcHJvdmlkZUluXHJcbiAgICAvLyBMZWFybiBtb3JlIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9wcm92aWRlcnNcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBwcm92aWRlZEluOiBcInJvb3RcIlxyXG4gICAgLy8gfVxyXG4pXHJcbmV4cG9ydCBjbGFzcyBNeUh0dHBHZXRTZXJ2aWNlMiB7XHJcbiAgICBwcml2YXRlIHNlcnZlclVybCA9IFwiaHR0cHM6Ly9jb3ZpZC0xOTMucC5yYXBpZGFwaS5jb20vY291bnRyaWVzXCI7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICAgIGdldENvdW50cnkoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RIZWFkZXIoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnNlcnZlclVybCwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlUmVxdWVzdEhlYWRlcigpIHtcclxuICAgICAgICAvLyBzZXQgaGVhZGVycyBoZXJlIGUuZy5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgICAgIFwieC1yYXBpZGFwaS1ob3N0XCI6IFwiY292aWQtMTkzLnAucmFwaWRhcGkuY29tXCIsXHJcblx0ICAgICAgICBcIngtcmFwaWRhcGkta2V5XCI6IFwiMWViY2E0ZjFjM21zaDE1ZGNlNGM3YjRlZDQ0Y3AxNzQ3ZWNqc241ODAyOGE2N2E5NzdcIixcclxuICAgICAgICBcclxuICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xyXG4gICAgfVxyXG4gICAgZ2V0SW5mbygpe1xyXG4gICAgICAgIGNvbnN0IHNlcnZlclVybDEgPSBgaHR0cHM6Ly9jb3ZpZC0xOTMucC5yYXBpZGFwaS5jb20vc3RhdGlzdGljcz9jb3VudHJ5PWFsbGA7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLkhlYWRlcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHNlcnZlclVybDEsIHsgaGVhZGVyczogaGVhZGVyc30pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbCgpe1xyXG4gICAgICAgIGNvbnN0IHNlcnZlclVybDEgPSBcImh0dHBzOi8vbW92aWVzLXR2c2hvd3MtZGF0YS1pbWRiLnAucmFwaWRhcGkuY29tLz9wYWdlPTEmdHlwZT1nZXQtYWlyaW5ndG9kYXktc2hvd3NcIjtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuSGVhZGVyKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHNlcnZlclVybDEsIHsgaGVhZGVyczogaGVhZGVyc30pO1xyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBzXHJcbiAgICBnZXRJbWFnZU5hbWUyKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gdmFyIGxvd2VyPXZhbHVlLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobG93ZXIpO1xyXG4gICAgICAgIGNvbnN0IHNlcnZlclVybDEgPSBgaHR0cHM6Ly9tb3ZpZXMtdHZzaG93cy1kYXRhLWltZGIucC5yYXBpZGFwaS5jb20vP2ltZGI9JHt2YWx1ZX0mdHlwZT1nZXQtc2hvdy1pbWFnZXMtYnktaW1kYmA7IFxyXG4gICAgICBsZXQgaGVhZGVycyA9IHRoaXMuSGVhZGVyKCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHNlcnZlclVybDEsIHsgaGVhZGVyczogaGVhZGVyc30pO1xyXG4gICAgICAgIC8vIHJldHVybiBgfi9pbWFnZXMvZmxhZ3MvJHtsb3dlcn0tZmxhZy1jb3VudHJ5LW5hdGlvbi11bmlvbi1lbXBpcmUucG5nYDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBwcml2YXRlIEhlYWRlcigpIHtcclxuICAgICAgICAvLyBzZXQgaGVhZGVycyBoZXJlIGUuZy5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgICAgIFwieC1yYXBpZGFwaS1ob3N0XCI6IFwibW92aWVzLXR2c2hvd3MtZGF0YS1pbWRiLnAucmFwaWRhcGkuY29tXCIsXHJcbiAgICAgICAgICAgIFwieC1yYXBpZGFwaS1rZXlcIjogXCIxZWJjYTRmMWMzbXNoMTVkY2U0YzdiNGVkNDRjcDE3NDdlY2pzbjU4MDI4YTY3YTk3N1wiXHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgICBcclxuICAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==