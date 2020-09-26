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
    getTrendingMovies() {
        const serverUrl1 = "https://movies-tvshows-data-imdb.p.rapidapi.com/?page=1&type=get-trending-movies";
        let headers = this.Header();
        return this.http.get(serverUrl1, { headers: headers });
    }
    getOnAir() {
        const serverUrl1 = "https://movies-tvshows-data-imdb.p.rapidapi.com/?page=1&type=get-airingtoday-shows";
        let headers = this.Header();
        return this.http.get(serverUrl1, { headers: headers });
    }
    getOnUpComing() {
        const serverUrl1 = "https://movies-tvshows-data-imdb.p.rapidapi.com/?page=1&type=get-upcoming-movies";
        let headers = this.Header();
        return this.http.get(serverUrl1, { headers: headers });
    }
    getOnTrendingShow() {
        const serverUrl1 = "https://movies-tvshows-data-imdb.p.rapidapi.com/?page=1&type=get-trending-shows";
        let headers = this.Header();
        return this.http.get(serverUrl1, { headers: headers });
    }
    getOnRecentlyAdded() {
        const serverUrl1 = "https://movies-tvshows-data-imdb.p.rapidapi.com/?page=1&type=get-recently-added-shows";
        let headers = this.Header();
        return this.http.get(serverUrl1, { headers: headers });
    }
    getImageName(value) {
        const serverUrl1 = `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${value}`;
        let headers = this.Header2();
        return this.http.get(serverUrl1, { headers: headers });
    }
    getImageName2(value) {
        const serverUrl1 = `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${value}`;
        let headers = this.Header2();
        return this.http.get(serverUrl1, { headers: headers });
    }
    getSelectedMovieShow(value) {
        const serverUrl1 = `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${value}`;
        let headers = this.Header2();
        return this.http.get(serverUrl1, { headers: headers });
    }
    Header() {
        let headers = new http_1.HttpHeaders({
            "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
            "x-rapidapi-key": "f202e0f401msh7f74c1bb498e590p130cfajsn9347834a60fa",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2h0dHAtZ2V0LnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsa0ZBQTJDO0FBQzNDLG9GQUEyRTtBQVMzRSxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQUkxQixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBSDVCLGNBQVMsR0FBRyw0Q0FBNEMsQ0FBQztJQUd6QixDQUFDO0lBRXpDLFVBQVU7UUFDTixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU8sbUJBQW1CO1FBRXZCLElBQUksT0FBTyxHQUFHLElBQUksa0JBQVcsQ0FBQztZQUMxQixpQkFBaUIsRUFBRSwwQkFBMEI7WUFDaEQsZ0JBQWdCLEVBQUUsb0RBQW9EO1NBRXJFLENBQUMsQ0FBQztRQUVKLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFDRCxpQkFBaUI7UUFDYixNQUFNLFVBQVUsR0FBRyxrRkFBa0YsQ0FBQztRQUN0RyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFNUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsUUFBUTtRQUNKLE1BQU0sVUFBVSxHQUFHLG9GQUFvRixDQUFDO1FBQ3hHLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUU1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBRTFELENBQUM7SUFDRCxhQUFhO1FBQ1QsTUFBTSxVQUFVLEdBQUcsa0ZBQWtGLENBQUM7UUFDdEcsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRTVCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7SUFFMUQsQ0FBQztJQUVELGlCQUFpQjtRQUNiLE1BQU0sVUFBVSxHQUFHLGlGQUFpRixDQUFDO1FBQ3JHLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUU1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBRTFELENBQUM7SUFDRCxrQkFBa0I7UUFDZCxNQUFNLFVBQVUsR0FBRyx1RkFBdUYsQ0FBQztRQUMzRyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFNUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztJQUUxRCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQUs7UUFHZCxNQUFNLFVBQVUsR0FBRyx1RUFBdUUsS0FBSyxFQUFFLENBQUM7UUFDcEcsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7SUFFeEQsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFLO1FBR2YsTUFBTSxVQUFVLEdBQUcsdUVBQXVFLEtBQUssRUFBRSxDQUFDO1FBQ3BHLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBRXhELENBQUM7SUFDRCxvQkFBb0IsQ0FBQyxLQUFLO1FBR3RCLE1BQU0sVUFBVSxHQUFHLHVFQUF1RSxLQUFLLEVBQUUsQ0FBQztRQUNwRyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztJQUV4RCxDQUFDO0lBR08sTUFBTTtRQUVWLElBQUksT0FBTyxHQUFHLElBQUksa0JBQVcsQ0FBQztZQUMxQixpQkFBaUIsRUFBRSx5Q0FBeUM7WUFDNUQsZ0JBQWdCLEVBQUUsb0RBQW9EO1NBQ3hFLENBQUMsQ0FBQztRQUlKLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFDTyxPQUFPO1FBRVgsSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxDQUFDO1lBQzFCLGlCQUFpQixFQUFFLHdEQUF3RDtZQUMzRSxnQkFBZ0IsRUFBRSxvREFBb0Q7U0FDeEUsQ0FBQyxDQUFDO1FBSUosT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztDQUNKOztZQXZHNkIsaUJBQVU7O0FBSjNCLGlCQUFpQjtJQVA3QixpQkFBVSxFQU1WO3FDQUs2QixpQkFBVTtHQUozQixpQkFBaUIsQ0EyRzdCO0FBM0dZLDhDQUFpQiIsImZpbGUiOiJidW5kbGUuMzc5MDA5MzBiZTdiYzEzYTliM2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5cclxuQEluamVjdGFibGUoXHJcbiAgICAvLyBJbnN0ZWFkIG9mIHByb3ZpZGVycyBhcnJheSB5b3UgY2FuIHVzZSBwcm92aWRlSW5cclxuICAgIC8vIExlYXJuIG1vcmUgaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL3Byb3ZpZGVyc1xyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbiAgICAvLyB9XHJcbilcclxuZXhwb3J0IGNsYXNzIE15SHR0cEdldFNlcnZpY2UyIHtcclxuICAgIHByaXZhdGUgc2VydmVyVXJsID0gXCJodHRwczovL2NvdmlkLTE5My5wLnJhcGlkYXBpLmNvbS9jb3VudHJpZXNcIjtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gICAgZ2V0Q291bnRyeSgpIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuY3JlYXRlUmVxdWVzdEhlYWRlcigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuc2VydmVyVXJsLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXF1ZXN0SGVhZGVyKCkge1xyXG4gICAgICAgIC8vIHNldCBoZWFkZXJzIGhlcmUgZS5nLlxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAgICAgXCJ4LXJhcGlkYXBpLWhvc3RcIjogXCJjb3ZpZC0xOTMucC5yYXBpZGFwaS5jb21cIixcclxuXHQgICAgICAgIFwieC1yYXBpZGFwaS1rZXlcIjogXCIxZWJjYTRmMWMzbXNoMTVkY2U0YzdiNGVkNDRjcDE3NDdlY2pzbjU4MDI4YTY3YTk3N1wiLFxyXG4gICAgICAgIFxyXG4gICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgICB9XHJcbiAgICBnZXRUcmVuZGluZ01vdmllcygpe1xyXG4gICAgICAgIGNvbnN0IHNlcnZlclVybDEgPSBcImh0dHBzOi8vbW92aWVzLXR2c2hvd3MtZGF0YS1pbWRiLnAucmFwaWRhcGkuY29tLz9wYWdlPTEmdHlwZT1nZXQtdHJlbmRpbmctbW92aWVzXCI7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLkhlYWRlcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHNlcnZlclVybDEsIHsgaGVhZGVyczogaGVhZGVyc30pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE9uQWlyKCl7XHJcbiAgICAgICAgY29uc3Qgc2VydmVyVXJsMSA9IFwiaHR0cHM6Ly9tb3ZpZXMtdHZzaG93cy1kYXRhLWltZGIucC5yYXBpZGFwaS5jb20vP3BhZ2U9MSZ0eXBlPWdldC1haXJpbmd0b2RheS1zaG93c1wiO1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5IZWFkZXIoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoc2VydmVyVXJsMSwgeyBoZWFkZXJzOiBoZWFkZXJzfSk7XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIGdldE9uVXBDb21pbmcoKXtcclxuICAgICAgICBjb25zdCBzZXJ2ZXJVcmwxID0gXCJodHRwczovL21vdmllcy10dnNob3dzLWRhdGEtaW1kYi5wLnJhcGlkYXBpLmNvbS8/cGFnZT0xJnR5cGU9Z2V0LXVwY29taW5nLW1vdmllc1wiO1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5IZWFkZXIoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoc2VydmVyVXJsMSwgeyBoZWFkZXJzOiBoZWFkZXJzfSk7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBnZXRPblRyZW5kaW5nU2hvdygpe1xyXG4gICAgICAgIGNvbnN0IHNlcnZlclVybDEgPSBcImh0dHBzOi8vbW92aWVzLXR2c2hvd3MtZGF0YS1pbWRiLnAucmFwaWRhcGkuY29tLz9wYWdlPTEmdHlwZT1nZXQtdHJlbmRpbmctc2hvd3NcIjtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuSGVhZGVyKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHNlcnZlclVybDEsIHsgaGVhZGVyczogaGVhZGVyc30pO1xyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBnZXRPblJlY2VudGx5QWRkZWQoKXtcclxuICAgICAgICBjb25zdCBzZXJ2ZXJVcmwxID0gXCJodHRwczovL21vdmllcy10dnNob3dzLWRhdGEtaW1kYi5wLnJhcGlkYXBpLmNvbS8/cGFnZT0xJnR5cGU9Z2V0LXJlY2VudGx5LWFkZGVkLXNob3dzXCI7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLkhlYWRlcigpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChzZXJ2ZXJVcmwxLCB7IGhlYWRlcnM6IGhlYWRlcnN9KTtcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdldEltYWdlTmFtZSh2YWx1ZSkge1xyXG4gICAgICAgIC8vIHZhciBsb3dlcj12YWx1ZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxvd2VyKTtcclxuICAgICAgICBjb25zdCBzZXJ2ZXJVcmwxID0gYGh0dHBzOi8vaW1kYi1pbnRlcm5ldC1tb3ZpZS1kYXRhYmFzZS11bm9mZmljaWFsLnAucmFwaWRhcGkuY29tL2ZpbG0vJHt2YWx1ZX1gOyBcclxuICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLkhlYWRlcjIoKTtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoc2VydmVyVXJsMSwgeyBoZWFkZXJzOiBoZWFkZXJzfSk7XHJcbiAgICAgICAgLy8gcmV0dXJuIGB+L2ltYWdlcy9mbGFncy8ke2xvd2VyfS1mbGFnLWNvdW50cnktbmF0aW9uLXVuaW9uLWVtcGlyZS5wbmdgO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRJbWFnZU5hbWUyKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gdmFyIGxvd2VyPXZhbHVlLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobG93ZXIpO1xyXG4gICAgICAgIGNvbnN0IHNlcnZlclVybDEgPSBgaHR0cHM6Ly9pbWRiLWludGVybmV0LW1vdmllLWRhdGFiYXNlLXVub2ZmaWNpYWwucC5yYXBpZGFwaS5jb20vZmlsbS8ke3ZhbHVlfWA7IFxyXG4gICAgICBsZXQgaGVhZGVycyA9IHRoaXMuSGVhZGVyMigpO1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldChzZXJ2ZXJVcmwxLCB7IGhlYWRlcnM6IGhlYWRlcnN9KTtcclxuICAgICAgICAvLyByZXR1cm4gYH4vaW1hZ2VzL2ZsYWdzLyR7bG93ZXJ9LWZsYWctY291bnRyeS1uYXRpb24tdW5pb24tZW1waXJlLnBuZ2A7XHJcbiAgICB9XHJcbiAgICBnZXRTZWxlY3RlZE1vdmllU2hvdyh2YWx1ZSkge1xyXG4gICAgICAgIC8vIHZhciBsb3dlcj12YWx1ZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxvd2VyKTtcclxuICAgICAgICBjb25zdCBzZXJ2ZXJVcmwxID0gYGh0dHBzOi8vaW1kYi1pbnRlcm5ldC1tb3ZpZS1kYXRhYmFzZS11bm9mZmljaWFsLnAucmFwaWRhcGkuY29tL2ZpbG0vJHt2YWx1ZX1gOyBcclxuICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLkhlYWRlcjIoKTtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoc2VydmVyVXJsMSwgeyBoZWFkZXJzOiBoZWFkZXJzfSk7XHJcbiAgICAgICAgLy8gcmV0dXJuIGB+L2ltYWdlcy9mbGFncy8ke2xvd2VyfS1mbGFnLWNvdW50cnktbmF0aW9uLXVuaW9uLWVtcGlyZS5wbmdgO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIHByaXZhdGUgSGVhZGVyKCkge1xyXG4gICAgICAgIC8vIHNldCBoZWFkZXJzIGhlcmUgZS5nLlxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAgICAgXCJ4LXJhcGlkYXBpLWhvc3RcIjogXCJtb3ZpZXMtdHZzaG93cy1kYXRhLWltZGIucC5yYXBpZGFwaS5jb21cIixcclxuICAgICAgICAgICAgXCJ4LXJhcGlkYXBpLWtleVwiOiBcImYyMDJlMGY0MDFtc2g3Zjc0YzFiYjQ5OGU1OTBwMTMwY2ZhanNuOTM0NzgzNGE2MGZhXCIsXHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgICBcclxuICAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBIZWFkZXIyKCkge1xyXG4gICAgICAgIC8vIHNldCBoZWFkZXJzIGhlcmUgZS5nLlxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAgICAgXCJ4LXJhcGlkYXBpLWhvc3RcIjogXCJpbWRiLWludGVybmV0LW1vdmllLWRhdGFiYXNlLXVub2ZmaWNpYWwucC5yYXBpZGFwaS5jb21cIixcclxuICAgICAgICAgICAgXCJ4LXJhcGlkYXBpLWtleVwiOiBcIjFlYmNhNGYxYzNtc2gxNWRjZTRjN2I0ZWQ0NGNwMTc0N2VjanNuNTgwMjhhNjdhOTc3XCIsXHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgICBcclxuICAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==