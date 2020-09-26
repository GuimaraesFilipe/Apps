webpackHotUpdate("bundle",{

/***/ "./home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
const router_1 = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
const app_component_1 = __webpack_require__("./app.component.ts");
const utils = __webpack_require__("../node_modules/@nativescript/core/utils/utils.js");
const frame_1 = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
const platform_1 = __webpack_require__("../node_modules/@nativescript/core/platform/platform.js");
var utilityModule = __webpack_require__("../node_modules/@nativescript/core/utils/utils.js");
const app = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
const http_get_services_1 = __webpack_require__("./home/http-get.services.ts");
const http_1 = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
let HomeComponent = class HomeComponent {
    constructor(http, myService, routerExtensions, appcomponent) {
        this.http = http;
        this.myService = myService;
        this.routerExtensions = routerExtensions;
        this.appcomponent = appcomponent;
        this.isBusy = true;
        this.result = [];
        this.result2 = [];
        this.result3 = [];
        this.result4 = [];
        this.resultSelected = [];
        this.suggestions = [];
        this.filtered = [];
        this.filtered2 = [];
        this.SelectedFiltered = [];
        this.selected = [];
        this.url = "<url>";
        this.value = utils.isDataURI(this.url);
        this.movie_show = "";
        this.sum = 0;
        this.sumTotal = 0;
        this.sumDeaths = 0;
        this.sumpop = 0;
        this.sumactive = 0;
        this.sumrecovered = 0;
        this.isNotLoggedIn = true;
        this.isHomepage = true;
        this.red = true;
        this.green = true;
        this.orange = true;
        this.medHerbSup = [];
        this.isNotSearch = true;
        this.frame = frame_1.Frame.getFrameById("myFrame");
        this.isScan = true;
        this.resultUpComing = [];
        this.UpComingImage = [];
        this.filteredUpComing = [];
        this.resultTrendingShows = [];
        this.TrendingShowsImage = [];
        this.filteredTrendingShows = [];
    }
    onBusyChanged(args) {
        let indicator = args.object;
        console.log("indicator.busy changed to: " + indicator.busy);
    }
    ngOnInit() {
        this.extractOnAir();
        this.extractTrendingShows();
        this.extractUpComing();
        this.extractTrendingMovies();
    }
    onDrawerButtonTap() {
        const sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
        console.log("drawer1");
    }
    onGetDataSuccess(res) {
        for (let key in res.response) {
            this.result.push({ value: res.response[key] });
            console.log("this array", this.result);
        }
    }
    onScroll(args) {
        const scrollView = args.object;
    }
    extractOnAir() {
        const result = { "tv_results": [
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
                }
            ] };
        this.onGetStatics(result);
    }
    onGetStatics(res) {
        for (let key in res.tv_results) {
            this.result2.push({ value: res.tv_results[key] });
        }
        this.result2.forEach(obj => {
            this.extractImage(obj.value.imdb_id);
        });
    }
    extractImage(value) {
        this.myService.getImageName(value)
            .subscribe((result) => {
            this.onGetImage(result);
        }, (error) => {
            console.log(error);
        });
    }
    onGetImage(res) {
        for (let key in res) {
            this.filtered.push({ image: res });
            this.result = this.filtered.reduce((acc, current) => {
                const x = acc.find(item => item.image === current.image);
                if (!x) {
                    return acc.concat([current]);
                }
                else {
                    return acc;
                }
            }, []);
        }
    }
    extractTrendingMovies() {
        console.log("this is the extract Trending Movies");
        const result = {
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
                    "imdb_id": "tt0423713",
                    "title": "Plus belle la vie",
                    "year": "2004"
                }
            ]
        };
        this.onGetTrendingMovies(result);
    }
    onGetTrendingMovies(res) {
        for (let key in res.movie_results) {
            this.result3.push({ value: res.movie_results[key] });
        }
        this.result3.forEach(obj => {
            this.extractImage2(obj.value.imdb_id);
        });
    }
    extractImage2(value) {
        this.myService.getImageName2(value)
            .subscribe((result) => {
            this.onGetImage2(result);
        }, (error) => {
            console.log(error);
        });
    }
    onGetImage2(res) {
        for (let key in res) {
            this.filtered2.push({ image: res });
            this.result4 = this.filtered2.reduce((acc, current) => {
                const x = acc.find(item => item.image === current.image);
                if (!x) {
                    return acc.concat([current]);
                }
                else {
                    return acc;
                }
            }, []);
        }
        this.random = this.result4[Math.floor(Math.random() * 2)].image.poster;
        console.log(this.random);
    }
    extractUpComing() {
        const result = { "movie_results": [{
                    "imdb_id": "tt11427380",
                    "title": "Love, Be Loved, Leave, Be Left",
                    "year": "2020"
                },
                {
                    "imdb_id": "tt11162826",
                    "title": "Naked Animals",
                    "year": "2020",
                },
                {
                    "imdb_id": "tt11622272",
                    "title": "Spring Uje spring",
                    "year": "2020"
                },
                {
                    "imdb_id": "tt9753002",
                    "title": "Mi gran despedida",
                    "year": "2020"
                },
                {
                    "imdb_id": "tt2317113",
                    "title": "St. Sebastian",
                    "year": "2020"
                },
                {
                    "imdb_id": "tt10820264",
                    "title": "Two Eyes",
                    "year": "2020"
                }] };
        this.onGetUpComing(result);
    }
    onGetUpComing(res) {
        for (let key in res.tv_results) {
            this.resultUpComing.push({ value: res.movie_results[key] });
        }
        this.resultUpComing.forEach(obj => {
            this.extractImageUpComing(obj.value.imdb_id);
        });
    }
    extractImageUpComing(value) {
        this.myService.getImageName(value)
            .subscribe((result) => {
            this.onGetImageUpComing(result);
        }, (error) => {
            console.log(error);
        });
    }
    onGetImageUpComing(res) {
        for (let key in res) {
            this.UpComingImage.push({ image: res });
            this.filteredUpComing = this.UpComingImage.reduce((acc, current) => {
                const x = acc.find(item => item.image === current.image);
                if (!x) {
                    return acc.concat([current]);
                }
                else {
                    return acc;
                }
            }, []);
        }
    }
    extractTrendingShows() {
        const result = { "tv_results": [{
                    "imdb_id": "tt12624844",
                    "title": "The Great Heist",
                    "year": "2020"
                },
                {
                    "imdb_id": "tt9849210",
                    "title": "Biohackers",
                    "year": "2020"
                },
                {
                    "imdb_id": "tt10623550",
                    "title": "The Fugitive",
                    "year": "2020"
                },
                {
                    "imdb_id": "tt6905686",
                    "title": "Lovecraft Country",
                    "year": "2020"
                },
                {
                    "imdb_id": "tt10584608",
                    "title": "Teenage Bounty Hunters",
                    "year": "2020"
                },
                {
                    "imdb_id": "tt10986410",
                    "title": "Ted Lasso",
                    "year": "2020"
                }] };
        this.onGetTrendingShows(result);
    }
    onGetTrendingShows(res) {
        for (let key in res.tv_results) {
            this.resultTrendingShows.push({ value: res.tv_results[key] });
        }
        this.resultTrendingShows.forEach(obj => {
            this.extractImageTrendingShows(obj.value.imdb_id);
        });
    }
    extractImageTrendingShows(value) {
        this.myService.getImageName(value)
            .subscribe((result) => {
            this.onGetImageTrendingShows(result);
        }, (error) => {
            console.log(error);
        });
    }
    onGetImageTrendingShows(res) {
        for (let key in res) {
            this.TrendingShowsImage.push({ image: res });
            this.filteredTrendingShows = this.TrendingShowsImage.reduce((acc, current) => {
                const x = acc.find(item => item.image === current.image);
                if (!x) {
                    return acc.concat([current]);
                }
                else {
                    return acc;
                }
            }, []);
        }
    }
    selectedSearch(args) {
        this.resultSelected = [];
        this.SelectedFiltered = [];
        this.movie_show = "";
        let selected = args.object.bindingContext;
        this.movie_show = selected.image.id;
        this.isHomepage = !this.isHomepage;
        console.log(' got MOvieShow', this.movie_show);
        this.extractSelectMovieShow(this.movie_show);
    }
    extractSelectMovieShow(value) {
        console.log("this is the extract Selected movieShows");
        this.myService.getSelectedMovieShow(value)
            .subscribe((result) => {
            this.onGetSelectMovieShow(result);
        }, (error) => {
            console.log(error);
        });
    }
    onGetSelectMovieShow(res) {
        for (let key in res) {
            this.SelectedFiltered.push({ value: res });
        }
        this.resultSelected = this.SelectedFiltered.reduce((acc, current) => {
            const x = acc.find(item => item.image === current.image);
            if (!x) {
                return acc.concat([current]);
            }
            else {
                return acc;
            }
        }, []);
        console.log("resulting in ", this.resultSelected);
    }
    onHomeTap() {
        this.routerExtensions.navigate(["/home"]);
        if (!this.isHomepage) {
            this.isHomepage = !this.isHomepage;
        }
    }
    onHistoryTap() {
        this.routerExtensions.navigate(["/history"]);
    }
    dismissKeyboard() {
        if (platform_1.isIOS) {
            UIApplication.sharedApplication.keyWindow.endEditing(true);
        }
        if (platform_1.isAndroid) {
            utils.ad.dismissSoftInput();
        }
    }
};
HomeComponent.ctorParameters = () => [
    { type: http_1.HttpClient },
    { type: http_get_services_1.MyHttpGetService2 },
    { type: router_1.RouterExtensions },
    { type: app_component_1.AppComponent }
];
__decorate([
    core_1.ViewChild("movieShow", { static: false }),
    __metadata("design:type", core_1.ElementRef)
], HomeComponent.prototype, "movieShow", void 0);
__decorate([
    core_1.ViewChild("med2", { static: false }),
    __metadata("design:type", core_1.ElementRef)
], HomeComponent.prototype, "med2", void 0);
__decorate([
    core_1.ViewChild("med3", { static: false }),
    __metadata("design:type", core_1.ElementRef)
], HomeComponent.prototype, "med3", void 0);
HomeComponent = __decorate([
    core_1.Component({
        selector: "Home",
        template: __importDefault(__webpack_require__("./home/home.component.html")).default,
        styles: [__importDefault(__webpack_require__("./home/home.component.css")).default]
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient, http_get_services_1.MyHttpGetService2, router_1.RouterExtensions, app_component_1.AppComponent])
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0Esa0ZBQXFGO0FBQ3JGLDhGQUErRDtBQUMvRCxrRUFBNEM7QUFFNUMsdUZBQXNEO0FBQ3RELDRGQUEyRTtBQUczRSxrR0FBNkQ7QUFDN0QsSUFBSSxhQUFhLEdBQUcsbUJBQU8sQ0FBQyxtREFBYSxDQUFDLENBQUM7QUFFM0MsaUdBQW9EO0FBQ3BELCtFQUF3RDtBQUV4RCxvRkFBMkU7QUFlM0UsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQXVEdEIsWUFBb0IsSUFBZ0IsRUFBUyxTQUE0QixFQUFVLGdCQUFrQyxFQUFVLFlBQTBCO1FBQXJJLFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFtQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQXJEM0osV0FBTSxHQUFZLElBQUksQ0FBQztRQUVyQixXQUFNLEdBQWUsRUFBRSxDQUFDO1FBQ3hCLFlBQU8sR0FBZSxFQUFFLENBQUM7UUFDekIsWUFBTyxHQUFlLEVBQUUsQ0FBQztRQUN6QixZQUFPLEdBQWUsRUFBRSxDQUFDO1FBQ3pCLG1CQUFjLEdBQWUsRUFBRSxDQUFDO1FBQ2hDLGdCQUFXLEdBQWUsRUFBRSxDQUFDO1FBQzdCLGFBQVEsR0FBZSxFQUFFLENBQUM7UUFDMUIsY0FBUyxHQUFlLEVBQUUsQ0FBQztRQUMzQixxQkFBZ0IsR0FBZSxFQUFFLENBQUM7UUFHbEMsYUFBUSxHQUFrQixFQUFFLENBQUM7UUFFNUIsUUFBRyxHQUFXLE9BQU8sQ0FBQztRQUN2QixVQUFLLEdBQVcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFJekMsZUFBVSxHQUFDLEVBQUUsQ0FBQztRQUNmLFFBQUcsR0FBRyxDQUFDLENBQUM7UUFDUixhQUFRLEdBQUcsQ0FB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RUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQzs4QkFBTyxpQkFBVTsyQ0FBQztBQUNsQjtJQUFsQyxnQkFBUyxDQUFDLE1BQU0sRUFBQyxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQzs4QkFBTyxpQkFBVTsyQ0FBQztBQXJCNUMsYUFBYTtJQVJ6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU07UUFFaEIsb0ZBQW9DOztLQUV2QyxDQUFDO0lBQ0QsaUJBQVUsRUFBRTtxQ0F5RGlCLGlCQUFVLEVBQW9CLHFDQUFpQixFQUE0Qix5QkFBZ0IsRUFBd0IsNEJBQVk7R0F2RGhKLGFBQWEsQ0F5ckJ6QjtBQXpyQlksc0NBQWEiLCJmaWxlIjoiYnVuZGxlLjE4ZDBiOTc3NGYwZmRkNTE1OWQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidWkvc2VhcmNoLWJhclwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCJ+L2FwcC5jb21wb25lbnRcIlxuaW1wb3J0IHsgU2Nyb2xsVmlldywgU2Nyb2xsRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXdcIjtcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgeyBnZXRGcmFtZUJ5SWQsIEZyYW1lLCBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xuaW1wb3J0IHsgVG9rZW5Nb2RlbCwgQXV0b0NvbXBsZXRlRXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1hdXRvY29tcGxldGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgaXNJT1MsIGlzQW5kcm9pZCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xudmFyIHV0aWxpdHlNb2R1bGUgPSByZXF1aXJlKFwidXRpbHMvdXRpbHNcIik7XG5kZWNsYXJlIGNvbnN0IFVJQXBwbGljYXRpb247XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IE15SHR0cEdldFNlcnZpY2UyIH0gZnJvbSBcIi4vaHR0cC1nZXQuc2VydmljZXNcIjsgIFxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yXCI7XG5pbXBvcnQgeyBBbnlUeHRSZWNvcmQgfSBmcm9tIFwiZG5zXCI7XG5pbXBvcnQgeyBnZXRTdHJpbmcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBpc0J1c3k6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHJhbmRvbTogYW55O1xuICAgIHJlc3VsdDogQXJyYXk8YW55PiA9IFtdOyBcbiAgICByZXN1bHQyOiBBcnJheTxhbnk+ID0gW107IFxuICAgIHJlc3VsdDM6IEFycmF5PGFueT4gPSBbXTsgXG4gICAgcmVzdWx0NDogQXJyYXk8YW55PiA9IFtdOyBcbiAgICByZXN1bHRTZWxlY3RlZDogQXJyYXk8YW55PiA9IFtdOyBcbiAgICBzdWdnZXN0aW9uczogQXJyYXk8YW55PiA9IFtdO1xuICAgIGZpbHRlcmVkOiBBcnJheTxhbnk+ID0gW107XG4gICAgZmlsdGVyZWQyOiBBcnJheTxhbnk+ID0gW107XG4gICAgU2VsZWN0ZWRGaWx0ZXJlZDogQXJyYXk8YW55PiA9IFtdO1xuICAgIHN1Z2dlc3Q6IE9ic2VydmFibGVBcnJheTxUb2tlbk1vZGVsPjtcbiAgXHRkYjogYW55O1xuICAgIHNlbGVjdGVkOiBBcnJheTxPYmplY3Q+ID0gW107XG4gICAgdXNlcl9pZDogc3RyaW5nO1xuICAgICB1cmw6IHN0cmluZyA9IFwiPHVybD5cIjsgXG4gICAgdmFsdWU6Ym9vbGVhbiA9IHV0aWxzLmlzRGF0YVVSSSh0aGlzLnVybCk7XG4gICAgQFZpZXdDaGlsZChcIm1vdmllU2hvd1wiLHtzdGF0aWM6IGZhbHNlfSkgbW92aWVTaG93OiBFbGVtZW50UmVmO1xuICAgICBAVmlld0NoaWxkKFwibWVkMlwiLCB7c3RhdGljOiBmYWxzZX0pIG1lZDI6IEVsZW1lbnRSZWY7XG4gICAgIEBWaWV3Q2hpbGQoXCJtZWQzXCIse3N0YXRpYzogZmFsc2V9KSBtZWQzOiBFbGVtZW50UmVmO1xuICAgICBtb3ZpZV9zaG93PVwiXCI7XG4gICAgc3VtID0gMDtcbiAgICBzdW1Ub3RhbCA9IDA7XG4gICAgc3VtRGVhdGhzID0gMDtcbiAgICBzdW1wb3A9MDtcbiAgICBzdW1hY3RpdmU9MDtcbiAgICBzdW1yZWNvdmVyZWQ9MDtcbiAgICBpc05vdExvZ2dlZEluPSB0cnVlO1xuICAgIGlzSG9tZXBhZ2UgPSB0cnVlO1xuICAgIHJlZD10cnVlO1xuICAgIGdyZWVuPXRydWU7XG4gICAgb3JhbmdlPXRydWU7XG4gICAgY3JlYXRlQW5kVXBkYXRlOiBhbnk7XG4gICAgbWVkSGVyYlN1cDogQXJyYXk8T2JqZWN0PiA9IFtdO1xuICAgIGlzTm90U2VhcmNoPSB0cnVlO1xuICAgIGZyYW1lID0gRnJhbWUuZ2V0RnJhbWVCeUlkKFwibXlGcmFtZVwiKTtcbiAgICBpc1NjYW49dHJ1ZTtcbiAgcmVzdWx0VXBDb21pbmc6IEFycmF5PGFueT4gPSBbXTsgXG4gIFVwQ29taW5nSW1hZ2U6IEFycmF5PGFueT4gPSBbXTsgXG4gIGZpbHRlcmVkVXBDb21pbmc6IEFycmF5PGFueT4gPSBbXTsgXG4gIHJlc3VsdFRyZW5kaW5nU2hvd3M6IEFycmF5PGFueT4gPSBbXTsgXG4gIFRyZW5kaW5nU2hvd3NJbWFnZTpBcnJheTxhbnk+ID0gW107IFxuICBmaWx0ZXJlZFRyZW5kaW5nU2hvd3M6IEFycmF5PGFueT4gPSBbXTsgXG5cbiAgICBcblxuXG4gICAgb25CdXN5Q2hhbmdlZChhcmdzOiBFdmVudERhdGEpIHtcbiAgICAgIGxldCBpbmRpY2F0b3I6IEFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPmFyZ3Mub2JqZWN0O1xuICAgICAgY29uc29sZS5sb2coXCJpbmRpY2F0b3IuYnVzeSBjaGFuZ2VkIHRvOiBcIiArIGluZGljYXRvci5idXN5KTtcbiAgfVxuICAgXG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LHByaXZhdGUgbXlTZXJ2aWNlOiBNeUh0dHBHZXRTZXJ2aWNlMiwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGFwcGNvbXBvbmVudDogQXBwQ29tcG9uZW50KSB7XG5cbiAgICAgIFxuXG4gICAgICAgXG4gICAgfSBcbiAgICBcblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgXG4gICAgICAvLyB0aGlzLmV4dHJhY3REYXRhKCk7XG4gICAgICB0aGlzLmV4dHJhY3RPbkFpcigpO1xuICAgICAgdGhpcy5leHRyYWN0VHJlbmRpbmdTaG93cygpO1xuICAgICAgdGhpcy5leHRyYWN0VXBDb21pbmcoKTtcbiAgICAgIHRoaXMuZXh0cmFjdFRyZW5kaW5nTW92aWVzKCk7XG4gICAgICAvLyB0aGlzLnNlbGVjdEl0ZW1zKCk7XG4gICAgfVxuICAvLyAgIGV4dHJhY3REYXRhKCkge1xuICAvLyAgICAgdGhpcy5teVNlcnZpY2UuZ2V0QWxsKClcbiAgLy8gICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgLy8gICAgICAgICAgICAgdGhpcy5zdWdnZXN0aW9uKHJlc3VsdCk7XG4gICAgICAgICAgICAgIFxuICAvLyAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIC8vICAgICAgICAgfSk7XG4gIC8vIH1cbiAgXG4vLyAgIHNlbGVjdEl0ZW1zKCkge1xuLy8gICAgIHRoaXMuZGlzbWlzc0tleWJvYXJkKCk7XG4gICBcbi8vICAgICBpZiAoIXRoaXMuaXNIb21lcGFnZSl7XG4vLyAgICAgICB0aGlzLnJlc3VsdD1bXTtcbi8vICAgICAgIHRoaXMubXlTZXJ2aWNlLmdldEluZm8oKVxuICAgXG4vLyAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICBcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBvYmplY3RcIixyZXN1bHQpXG4vLyAgICAgICAgIHRoaXMub25HZXREYXRhU3VjY2VzcyhyZXN1bHQpXG4gICAgICAgICAgXG4gICAgICAgICAgXG4vLyAgICAgICB9LCAoZXJyb3IpID0+IHtcbi8vICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4vLyAgICAgICB9KTtcblxuLy8gICAgIH1cbi8vICAgICBlbHNle1xuLy8gICAgICAgdGhpcy5pc0hvbWVwYWdlID0gIXRoaXMuaXNIb21lcGFnZTtcbi8vICAgICAgIHRoaXMubXlTZXJ2aWNlLmdldEluZm8oKVxuICAgXG4vLyAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICBcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBvYmplY3RcIixyZXN1bHQpXG4vLyAgICAgICAgIHRoaXMub25HZXREYXRhU3VjY2VzcyhyZXN1bHQpXG4gICAgICAgICAgXG4gICAgICAgICAgXG4vLyAgICAgICB9LCAoZXJyb3IpID0+IHtcbi8vICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4vLyAgICAgICB9KTtcbi8vICAgICB9XG4gIFxuXG4vLyB9IFxuXG5vbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHsgXG4gIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gIGNvbnNvbGUubG9nKFwiZHJhd2VyMVwiKVxuICBcbn1cblxucHJpdmF0ZSBvbkdldERhdGFTdWNjZXNzKHJlcykge1xuXG5mb3IgKGxldCBrZXkgaW4gcmVzLnJlc3BvbnNlKSB7XG4gIHRoaXMucmVzdWx0LnB1c2goe3ZhbHVlOiByZXMucmVzcG9uc2Vba2V5XX0pO1xuICBjb25zb2xlLmxvZyhcInRoaXMgYXJyYXlcIiwgdGhpcy5yZXN1bHQpO1xufVxuXG4gIH1cbiAgb25TY3JvbGwoYXJnczogU2Nyb2xsRXZlbnREYXRhKSB7XG4gICAgY29uc3Qgc2Nyb2xsVmlldyA9IGFyZ3Mub2JqZWN0IGFzIFNjcm9sbFZpZXc7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcInNjcm9sbFg6IFwiICsgYXJncy5zY3JvbGxYKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcInNjcm9sbFk6IFwiICsgYXJncy5zY3JvbGxZKTtcbn1cblxuZXh0cmFjdE9uQWlyKCkge1xuICAvLyBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGV4dHJhY3RcIilcbiAgLy8gdGhpcy5teVNlcnZpY2UuZ2V0T25BaXIoKVxuICAvLyAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKFwiT04gQUlSIE9OIEFJUiBPTiBBSVJcIiwgcmVzdWx0KVxuICAgICAgICBjb25zdCByZXN1bHQ9IHsgIFwidHZfcmVzdWx0c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIllvd2lzIEJlbjogVGhlIFNlcmllc1wiLFxuICAgICAgICAgICAgXCJpbWRiX2lkXCI6IFwidHQxMzAzOTA0MlwiLFxuICAgICAgICAgICAgIFwieWVhclwiOiBcIjIwMjBcIlxuICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRvIGthZmUgdGlzIEhhcmFzXCIsXG4gICAgICAgICAgIFwiaW1kYl9pZFwiOiBcInR0MDM4NDc0NVwiLFxuICAgICAgICAgICAgXCJ5ZWFyXCI6IFwiMjAwM1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiQmV0dHlzIERpYWdub3NlXCIsXG4gICAgICAgICAgICBcImltZGJfaWRcIjogXCJ0dDQzMTA0MjZcIixcbiAgICAgICAgICAgIFwieWVhclwiOiBcIjIwMTVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgIHtcbiAgICAgICAgICAgICBcInRpdGxlXCI6IFwiRHLDoWdhIMO2csO2a8O2c8O2a1wiLFxuICAgICAgICAgICBcImltZGJfaWRcIjogXCJ0dDk0ODA0MzJcIixcbiAgICAgICAgICAgXCJ5ZWFyXCI6IFwiMjAxOVwiXG4gICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICBcInRpdGxlXCI6IFwiSGF1dGUgRG9nXCIsXG4gICAgICAgICAgIFwiaW1kYl9pZFwiOiBcInR0MTMwNjQyMDZcIixcbiAgICAgICAgICAgXCJ5ZWFyXCI6IFwiMjAyMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEFtYmVyIFJ1ZmZpbiBTaG93XCIsXG4gICAgICAgICAgICBcImltZGJfaWRcIjogXCJ0dDExMDU4MDc4XCIsXG4gICAgICAgICAgICAgXCJ5ZWFyXCI6IFwiMjAyMFwiXG4gICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJNYWdpYyBvZiBEaXNuZXkncyBBbmltYWwgS2luZ2RvbVwiLFxuICAgICAgICAgICBcImltZGJfaWRcIjogXCJ0dDEwMTk2Mzc4XCIsXG4gICAgICAgICAgXCJ5ZWFyXCI6IFwiMjAyMFwiXG4gICAgICAgICB9LFxuICAgICAgICAge1xuICAgICAgICAgICBcInRpdGxlXCI6IFwiWmVodSBaZVwiLFxuICAgICAgICAgICBcImltZGJfaWRcIjogXCJ0dDAwNzcxMDhcIixcbiAgICAgICAgICAgIFwieWVhclwiOiBcIjE5NzhcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBTY2hvb2wgTnVyc2UgRmlsZXNcIixcbiAgICAgICAgICAgIFwiaW1kYl9pZFwiOiBcInR0MTI4Nzk1MjJcIixcbiAgICAgICAgICAgIFwieWVhclwiOiBcIjIwMjBcIlxuICAgICAgICAgIH1dfVxuICAgICAgICAgIHRoaXMub25HZXRTdGF0aWNzKHJlc3VsdCk7XG4gICAgICAgICAgXG4gICAgICAvLyB9LCAoZXJyb3IpID0+IHtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAvLyB9KTtcbn1cblxucHJpdmF0ZSBvbkdldFN0YXRpY3MocmVzKSB7XG4gIFxuIFxuXG4gIGZvciAobGV0IGtleSBpbiByZXMudHZfcmVzdWx0cykge1xuICAgIFxuICAgIHRoaXMucmVzdWx0Mi5wdXNoKHt2YWx1ZTogcmVzLnR2X3Jlc3VsdHNba2V5XX0pO1xuICBcbiAgICAvLyBjb25zb2xlLmxvZyhcInJlc3VsdGluZyBpbiBcIix0aGlzLnJlc3VsdDIpO1xuICBcbiAgXG4gIH1cbiAgXG4gIHRoaXMucmVzdWx0Mi5mb3JFYWNoKG9iaiA9PiB7XG4gICAgdGhpcy5leHRyYWN0SW1hZ2Uob2JqLnZhbHVlLmltZGJfaWQpO1xuICAgfSk7XG4gIFxuICBcbiAgXG4gICAgfVxuICAgIGV4dHJhY3RJbWFnZSh2YWx1ZSkge1xuXG4gICAgICB0aGlzLm15U2VydmljZS5nZXRJbWFnZU5hbWUodmFsdWUpXG4gICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGltYWdlIHJlc3VsdCBcIiwgcmVzdWx0KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHRoaXMub25HZXRJbWFnZShyZXN1bHQpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgIG9uR2V0SW1hZ2UocmVzKSB7XG4gICAgICBcbiAgICBcbiAgICAgIGZvciAobGV0IGtleSBpbiByZXMpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZmlsdGVyZWQucHVzaCh7aW1hZ2U6IHJlc30pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIklNQUdFIFJFc3VsdCBcIix0aGlzLnJlc3VsdCk7XG4gICAgXG4gICAgICAgIHRoaXMucmVzdWx0PSB0aGlzLmZpbHRlcmVkLnJlZHVjZSgoYWNjLCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgeCA9IGFjYy5maW5kKGl0ZW0gPT4gaXRlbS5pbWFnZSA9PT0gY3VycmVudC5pbWFnZSk7XG4gICAgICAgICAgaWYgKCF4KSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjLmNvbmNhdChbY3VycmVudF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgW10pO1xuICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZmlsdGVyZWQnLCB0aGlzLmZpbHRlcmVkKTtcbiAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgXG4gICAgICBcbiAgICAgICAgfVxuXG5leHRyYWN0VHJlbmRpbmdNb3ZpZXMoKSB7XG4gIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgZXh0cmFjdCBUcmVuZGluZyBNb3ZpZXNcIilcbiAgLy8gdGhpcy5teVNlcnZpY2UuZ2V0VHJlbmRpbmdNb3ZpZXMoKVxuICAvLyAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVFJFTkRJTmcgVFJFTkRJTkdcIiwgcmVzdWx0KVxuICAgICAgICBjb25zdCByZXN1bHQ9ICB7XG4gICAgICAgICAgXCJtb3ZpZV9yZXN1bHRzXCI6IFtcbiAgICAgICAgXG4gICAgICAgICAgIHtcbiAgICAgICAgICAgICBcInRpdGxlXCI6IFwiRG9uJ3QgUmVhZCBUaGlzIE9uIGEgUGxhbmVcIixcbiAgICAgICAgICBcInllYXJcIjogXCIwXCIsXG4gICAgICAgICAgICBcImltZGJfaWRcIjogXCJ0dDc1MjU3OTJcIlxuICAgICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJCcnV0dXMgVnMgQ8Opc2FyXCIsXG4gICAgICAgICAgICBcInllYXJcIjogXCIyMDIwXCIsXG4gICAgICAgICAgICBcImltZGJfaWRcIjogXCJ0dDEwNTU3NTI0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaW1kYl9pZFwiOlwidHQwNDIzNzEzXCIsXG4gICAgICAgICAgICBcInRpdGxlXCI6XCJQbHVzIGJlbGxlIGxhIHZpZVwiLFxuICAgICAgICAgICAgXCJ5ZWFyXCI6XCIyMDA0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgICAgdGhpcy5vbkdldFRyZW5kaW5nTW92aWVzKHJlc3VsdCk7XG4gICAgICAgICAgXG4gICAgICAvLyB9LCAoZXJyb3IpID0+IHtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAvLyB9KTtcbn1cblxucHJpdmF0ZSBvbkdldFRyZW5kaW5nTW92aWVzKHJlcykge1xuICBcbiBcblxuICBmb3IgKGxldCBrZXkgaW4gcmVzLm1vdmllX3Jlc3VsdHMpIHtcbiAgICBcbiAgICB0aGlzLnJlc3VsdDMucHVzaCh7dmFsdWU6IHJlcy5tb3ZpZV9yZXN1bHRzW2tleV19KTtcbiAgXG4gICAgLy8gY29uc29sZS5sb2coXCJyZXN1bHRpbmcgaW4gXCIsdGhpcy5yZXN1bHQyKTtcbiAgXG4gIFxuICB9XG4gIFxuICB0aGlzLnJlc3VsdDMuZm9yRWFjaChvYmogPT4ge1xuICAgIHRoaXMuZXh0cmFjdEltYWdlMihvYmoudmFsdWUuaW1kYl9pZCk7XG4gICB9KTtcbiAgXG4gIFxuICBcbiAgICB9XG5cbiAgICBleHRyYWN0SW1hZ2UyKHZhbHVlKSB7XG5cbiAgICAgIHRoaXMubXlTZXJ2aWNlLmdldEltYWdlTmFtZTIodmFsdWUpXG4gICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGltYWdlIHJlc3VsdCBcIiwgcmVzdWx0KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHRoaXMub25HZXRJbWFnZTIocmVzdWx0KTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgICBvbkdldEltYWdlMihyZXMpIHtcbiAgICAgIFxuICAgIFxuICAgICAgZm9yIChsZXQga2V5IGluIHJlcykge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5maWx0ZXJlZDIucHVzaCh7aW1hZ2U6IHJlc30pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIklNQUdFIFJFc3VsdCBcIix0aGlzLnJlc3VsdCk7XG4gICAgXG4gICAgICAgIHRoaXMucmVzdWx0ND0gdGhpcy5maWx0ZXJlZDIucmVkdWNlKChhY2MsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgICBjb25zdCB4ID0gYWNjLmZpbmQoaXRlbSA9PiBpdGVtLmltYWdlID09PSBjdXJyZW50LmltYWdlKTtcbiAgICAgICAgICBpZiAoIXgpIHtcbiAgICAgICAgICAgIHJldHVybiBhY2MuY29uY2F0KFtjdXJyZW50XSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBbXSk7XG4gICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdmaWx0ZXJlZCcsIHRoaXMuZmlsdGVyZWQpO1xuICAgICBcbiAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIFxuXG5cblxuXG5cbiAgICAgIHRoaXMucmFuZG9tPXRoaXMucmVzdWx0NFtNYXRoLmZsb29yKCBNYXRoLnJhbmRvbSgpKjIpXS5pbWFnZS5wb3N0ZXI7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnJhbmRvbSlcbiAgICAgIFxuICAgICAgICB9XG4gICAgIFxuICAgICAgICBcbmV4dHJhY3RVcENvbWluZygpIHtcbiAgLy8gY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBleHRyYWN0XCIpXG4gIC8vIHRoaXMubXlTZXJ2aWNlLmdldE9uVXBDb21pbmcoKVxuICAvLyAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKFwiT04gQUlSIE9OIEFJUiBPTiBBSVJcIiwgcmVzdWx0KVxuICAgICAgICBjb25zdCByZXN1bHQ9IHsgIFwibW92aWVfcmVzdWx0c1wiOiBbe1xuICAgICAgICAgIFwiaW1kYl9pZFwiOlwidHQxMTQyNzM4MFwiLFxuICAgICAgICAgIFwidGl0bGVcIjpcIkxvdmUsIEJlIExvdmVkLCBMZWF2ZSwgQmUgTGVmdFwiLFxuICAgICAgICAgIFwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDExMTYyODI2XCIsXG4gICAgICAgICAgXCJ0aXRsZVwiOlwiTmFrZWQgQW5pbWFsc1wiLFxuICAgICAgICAgIFwieWVhclwiOlwiMjAyMFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgIFwiaW1kYl9pZFwiOlwidHQxMTYyMjI3MlwiLFxuICAgICAgICAgIFwidGl0bGVcIjpcIlNwcmluZyBVamUgc3ByaW5nXCIsXG4gICAgICAgICAgXCJ5ZWFyXCI6XCIyMDIwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICBcImltZGJfaWRcIjpcInR0OTc1MzAwMlwiLFxuICAgICAgICAgIFwidGl0bGVcIjpcIk1pIGdyYW4gZGVzcGVkaWRhXCIsXG4gICAgICAgICAgXCJ5ZWFyXCI6XCIyMDIwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICBcImltZGJfaWRcIjpcInR0MjMxNzExM1wiLFxuICAgICAgICAgIFwidGl0bGVcIjpcIlN0LiBTZWJhc3RpYW5cIixcbiAgICAgICAgICBcInllYXJcIjpcIjIwMjBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgIFwiaW1kYl9pZFwiOlwidHQxMDgyMDI2NFwiLFxuICAgICAgICAgIFwidGl0bGVcIjpcIlR3byBFeWVzXCIsXG4gICAgICAgICAgXCJ5ZWFyXCI6XCIyMDIwXCJcbiAgICAgICAgICB9XX1cbiAgICAgICAgXG4gICAgICAgICAgdGhpcy5vbkdldFVwQ29taW5nKHJlc3VsdCk7XG4gICAgICAgICAgXG4gICAgICAvLyB9LCAoZXJyb3IpID0+IHtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAvLyB9KTtcbn1cblxucHJpdmF0ZSBvbkdldFVwQ29taW5nKHJlcykge1xuICBcbiBcblxuICBmb3IgKGxldCBrZXkgaW4gcmVzLnR2X3Jlc3VsdHMpIHtcbiAgICBcbiAgICB0aGlzLnJlc3VsdFVwQ29taW5nLnB1c2goe3ZhbHVlOiByZXMubW92aWVfcmVzdWx0c1trZXldfSk7XG4gIFxuICAgIC8vIGNvbnNvbGUubG9nKFwicmVzdWx0aW5nIGluIFwiLHRoaXMucmVzdWx0Mik7XG4gIFxuICBcbiAgfVxuICBcbiAgdGhpcy5yZXN1bHRVcENvbWluZy5mb3JFYWNoKG9iaiA9PiB7XG4gICAgdGhpcy5leHRyYWN0SW1hZ2VVcENvbWluZyhvYmoudmFsdWUuaW1kYl9pZCk7XG4gICB9KTtcbiAgXG4gIFxuICBcbiAgICB9XG4gICAgZXh0cmFjdEltYWdlVXBDb21pbmcodmFsdWUpIHtcblxuICAgICAgdGhpcy5teVNlcnZpY2UuZ2V0SW1hZ2VOYW1lKHZhbHVlKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBpbWFnZSByZXN1bHQgXCIsIHJlc3VsdClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICB0aGlzLm9uR2V0SW1hZ2VVcENvbWluZyhyZXN1bHQpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgIG9uR2V0SW1hZ2VVcENvbWluZyhyZXMpIHtcbiAgICAgIFxuICAgIFxuICAgICAgZm9yIChsZXQga2V5IGluIHJlcykge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5VcENvbWluZ0ltYWdlLnB1c2goe2ltYWdlOiByZXN9KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJJTUFHRSBSRXN1bHQgXCIsdGhpcy5yZXN1bHQpO1xuICAgIFxuICAgICAgICB0aGlzLmZpbHRlcmVkVXBDb21pbmc9IHRoaXMuVXBDb21pbmdJbWFnZS5yZWR1Y2UoKGFjYywgY3VycmVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHggPSBhY2MuZmluZChpdGVtID0+IGl0ZW0uaW1hZ2UgPT09IGN1cnJlbnQuaW1hZ2UpO1xuICAgICAgICAgIGlmICgheCkge1xuICAgICAgICAgICAgcmV0dXJuIGFjYy5jb25jYXQoW2N1cnJlbnRdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9XG4gICAgICAgIH0sIFtdKTtcbiAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZpbHRlcmVkJywgdGhpcy5maWx0ZXJlZCk7XG4gICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZXh0cmFjdFRyZW5kaW5nU2hvd3MoKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBleHRyYWN0XCIpXG4gICAgICAgICAgLy8gdGhpcy5teVNlcnZpY2UuZ2V0T25UcmVuZGluZ1Nob3coKVxuICAgICAgICAgIC8vICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAvLyAgICAgICBjb25zb2xlLmxvZyhcIk9OIEFJUiBPTiBBSVIgT04gQUlSXCIsIHJlc3VsdClcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQ9IHsgIFwidHZfcmVzdWx0c1wiOiBbe1xuICAgICAgICAgICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDEyNjI0ODQ0XCIsXG4gICAgICAgICAgICAgICAgICBcInRpdGxlXCI6XCJUaGUgR3JlYXQgSGVpc3RcIixcbiAgICAgICAgICAgICAgICAgIFwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImltZGJfaWRcIjpcInR0OTg0OTIxMFwiLFxuICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6XCJCaW9oYWNrZXJzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImltZGJfaWRcIjpcInR0MTA2MjM1NTBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOlwiVGhlIEZ1Z2l0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImltZGJfaWRcIjpcInR0NjkwNTY4NlwiLFxuICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6XCJMb3ZlY3JhZnQgQ291bnRyeVwiLFxuICAgICAgICAgICAgICAgICAgICBcInllYXJcIjpcIjIwMjBcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDEwNTg0NjA4XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjpcIlRlZW5hZ2UgQm91bnR5IEh1bnRlcnNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ5ZWFyXCI6XCIyMDIwXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaW1kYl9pZFwiOlwidHQxMDk4NjQxMFwiLFxuICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6XCJUZWQgTGFzc29cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ5ZWFyXCI6XCIyMDIwXCJcbiAgICAgICAgICAgICAgICAgIH1dfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgdGhpcy5vbkdldFRyZW5kaW5nU2hvd3MocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHByaXZhdGUgb25HZXRUcmVuZGluZ1Nob3dzKHJlcykge1xuICAgICAgICAgIFxuICAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAgIGZvciAobGV0IGtleSBpbiByZXMudHZfcmVzdWx0cykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnJlc3VsdFRyZW5kaW5nU2hvd3MucHVzaCh7dmFsdWU6IHJlcy50dl9yZXN1bHRzW2tleV19KTtcbiAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVzdWx0aW5nIGluIFwiLHRoaXMucmVzdWx0Mik7XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIHRoaXMucmVzdWx0VHJlbmRpbmdTaG93cy5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgICB0aGlzLmV4dHJhY3RJbWFnZVRyZW5kaW5nU2hvd3Mob2JqLnZhbHVlLmltZGJfaWQpO1xuICAgICAgICAgICB9KTtcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV4dHJhY3RJbWFnZVRyZW5kaW5nU2hvd3ModmFsdWUpIHtcbiAgICAgICAgXG4gICAgICAgICAgICAgIHRoaXMubXlTZXJ2aWNlLmdldEltYWdlTmFtZSh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGltYWdlIHJlc3VsdCBcIiwgcmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uR2V0SW1hZ2VUcmVuZGluZ1Nob3dzKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgIG9uR2V0SW1hZ2VUcmVuZGluZ1Nob3dzKHJlcykge1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gcmVzKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5UcmVuZGluZ1Nob3dzSW1hZ2UucHVzaCh7aW1hZ2U6IHJlc30pO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSU1BR0UgUkVzdWx0IFwiLHRoaXMucmVzdWx0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRUcmVuZGluZ1Nob3dzPSB0aGlzLlRyZW5kaW5nU2hvd3NJbWFnZS5yZWR1Y2UoKGFjYywgY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgeCA9IGFjYy5maW5kKGl0ZW0gPT4gaXRlbS5pbWFnZSA9PT0gY3VycmVudC5pbWFnZSk7XG4gICAgICAgICAgICAgICAgICBpZiAoIXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYy5jb25jYXQoW2N1cnJlbnRdKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZpbHRlcmVkJywgdGhpcy5maWx0ZXJlZCk7XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgXG4vLyAgICAgZ2V0SW1hZ2VOYW1lKHZhbHVlKSB7XG4vLyAgICAgICB2YXIgbG93ZXI9dmFsdWUuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKGxvd2VyKTtcbi8vICAgICAgIHJldHVybiBgfi9pbWFnZXMvJHtsb3dlcn0ucG5nYDtcbi8vICAgfVxuXG5cblxuXG4gIFxuXG4gICBcbi8vIGFkZEludGVyYWN0aW9uKG1lZEhlcmJTdXA6IHN0cmluZykge1xuLy8gICBjb25zb2xlLmxvZyhcImFkZCBtZWRIZXJiU3VwXCIsIG1lZEhlcmJTdXApXG4vLyAgICAgZGlhbG9ncy5hY3Rpb24oe1xuLy8gICAgICAgIHRpdGxlOiBcIkFyZSB5b3Ugc3VyZSB0aGF0IHlvdSB3YW50IHRvIGFkZCB0aGlzIG1lZGljaW5lIHRvIHlvdXIgbGlzdD9cIixcbi8vICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuLy8gICAgICAgYWN0aW9uczogW1wiWWVzXCIsIFwiTm9cIl1cbi8vICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG4vLyAgICAgICBpZiAocmVzdWx0ID09IFwiWWVzXCIpIHtcbi8vICAgICAgICB0aGlzLm1lZEhlcmJTdXBfbmFtZSA9IG1lZEhlcmJTdXA7XG4vLyAgICAgICAgdGhpcy5tZWRpY2luZV9mb3JtID0gXCJQaWxsXCI7XG4vLyAgICAgICAgIHRoaXMuZGIuZXhlY1NRTChcIklOU0VSVCBJTlRPIG1lZGljaW5lcyAobWVkaWNpbmVzX25hbWUsIG1lZGljaW5lX2Rvc2FnZSwgbWVkaWNpbmVfZm9ybSwgbWVkaWNpbmVfZnJlcXVlbmN5LCB1c2VyX2lkKSBWQUxVRVMgKD8sPyw/LD8sPylcIiwgW3RoaXMubWVkSGVyYlN1cF9uYW1lLCB0aGlzLm1lZGljaW5lX2Rvc2FnZSwgdGhpcy5tZWRpY2luZV9mb3JtLCB0aGlzLm1lZGljaW5lX2ZyZXF1ZW5jeSwgdGhpcy51c2VyX2lkXSkudGhlbihpZCA9PiB7XG4vLyAgICAgICAgICAgIHRoaXMubWVkaWNpbmVMaXN0LnVuc2hpZnQoe2lkOiBpZCwgbmFtZTogdGhpcy5tZWRIZXJiU3VwX25hbWUsIGRvc2FnZTogdGhpcy5tZWRpY2luZV9kb3NhZ2UsIGZvcm06IHRoaXMubWVkaWNpbmVfZm9ybSwgZnJlcXVlbmN5OnRoaXMubWVkaWNpbmVfZnJlcXVlbmN5fSk7XG4vLyAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIGFkZGluZyB3YXMgYSBzdWNlc3NcIiwgdGhpcy5tZWRpY2luZUxpc3QpO1xuLy8gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KCdNZWRpY2luZSBzYXZlZCBzdWNjZXNzZnVsbHk6Jyk7XG4gICAgICAgICAgIFxuLy8gICAgICAgIH0sIGVycm9yID0+IHtcbi8vICAgICAgICAgICAgY29uc29sZS5sb2coJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGFkZGluZyBhbiBpdGVtIHRvIHlvdXIgbGlzdC4nLCBlcnJvcik7XG4vLyAgICAgICAgICAgIHRoaXMubWVkSGVyYlN1cF9uYW1lID0gXCJcIjtcbi8vICAgICAgICAgICAgdGhpcy5tZWRpY2luZV9kb3NhZ2UgPSBcIlwiO1xuLy8gICAgICAgICAgICB0aGlzLm1lZGljaW5lX2Zvcm0gPSBcIlwiO1xuLy8gICAgICAgICAgICB0aGlzLm1lZGljaW5lX2ZyZXF1ZW5jeSA9IFwiXCI7XG4vLyAgICAgICAgfSk7XG5cbi8vICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09IFwiTm9cIikge1xuICAgICAgIFxuLy8gICAgICAgfVxuLy8gICAgIH0pO1xuLy8gICAgfVxuXG5zZWxlY3RlZFNlYXJjaChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICB0aGlzLnJlc3VsdFNlbGVjdGVkID0gW107XG4gIHRoaXMuU2VsZWN0ZWRGaWx0ZXJlZD1bXTtcbiAgdGhpcy5tb3ZpZV9zaG93PVwiXCI7XG5sZXQgc2VsZWN0ZWQ9IDxhbnk+YXJncy5vYmplY3QuYmluZGluZ0NvbnRleHQ7XG50aGlzLm1vdmllX3Nob3c9c2VsZWN0ZWQuaW1hZ2UuaWQ7XG4gIHRoaXMuaXNIb21lcGFnZSA9ICF0aGlzLmlzSG9tZXBhZ2U7XG4gY29uc29sZS5sb2coJyBnb3QgTU92aWVTaG93JywgdGhpcy5tb3ZpZV9zaG93KTtcbiB0aGlzLmV4dHJhY3RTZWxlY3RNb3ZpZVNob3codGhpcy5tb3ZpZV9zaG93KTtcblxufVxuXG5leHRyYWN0U2VsZWN0TW92aWVTaG93KHZhbHVlKSB7XG4gIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgZXh0cmFjdCBTZWxlY3RlZCBtb3ZpZVNob3dzXCIpXG4gIHRoaXMubXlTZXJ2aWNlLmdldFNlbGVjdGVkTW92aWVTaG93KHZhbHVlKVxuICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgcmVzdWx0XCIsIHJlc3VsdClcbiAgICAgICAgXG4gICAgICAgICAgdGhpcy5vbkdldFNlbGVjdE1vdmllU2hvdyhyZXN1bHQpO1xuICAgICAgICAgIFxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG59XG5cbnByaXZhdGUgb25HZXRTZWxlY3RNb3ZpZVNob3cocmVzKSB7XG4gIFxuIFxuXG4gIGZvciAobGV0IGtleSBpbiByZXMpIHtcbiAgICBcbiAgICBcbiAgICB0aGlzLlNlbGVjdGVkRmlsdGVyZWQucHVzaCh7dmFsdWU6IHJlc30pO1xuICBcbiAgICBcbiAgXG4gIFxuICB9XG4gIHRoaXMucmVzdWx0U2VsZWN0ZWQ9IHRoaXMuU2VsZWN0ZWRGaWx0ZXJlZC5yZWR1Y2UoKGFjYywgY3VycmVudCkgPT4ge1xuICAgIGNvbnN0IHggPSBhY2MuZmluZChpdGVtID0+IGl0ZW0uaW1hZ2UgPT09IGN1cnJlbnQuaW1hZ2UpO1xuICAgIGlmICgheCkge1xuICAgICAgcmV0dXJuIGFjYy5jb25jYXQoW2N1cnJlbnRdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gIH0sIFtdKTtcbiAgXG4gIFxuICBjb25zb2xlLmxvZyhcInJlc3VsdGluZyBpbiBcIix0aGlzLnJlc3VsdFNlbGVjdGVkKTtcbiAgXG4gIFxuICAgIH1cblxuICAgICBcbiAgIFxuICAgIG9uSG9tZVRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lXCJdKTtcbiAgICAgICAgaWYoIXRoaXMuaXNIb21lcGFnZSl7XG4gICAgICAgICAgdGhpcy5pc0hvbWVwYWdlPSF0aGlzLmlzSG9tZXBhZ2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25IaXN0b3J5VGFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hpc3RvcnlcIl0pO1xuICBcbiAgICB9XG5cblxuICAgIFxuICAgICBcbiAgICBcblxuICAgXG4gICAgICBkaXNtaXNzS2V5Ym9hcmQoKSB7XG4gICAgICAgIGlmIChpc0lPUykge1xuICAgICAgICAgIFVJQXBwbGljYXRpb24uc2hhcmVkQXBwbGljYXRpb24ua2V5V2luZG93LmVuZEVkaXRpbmcodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgICAgIHV0aWxzLmFkLmRpc21pc3NTb2Z0SW5wdXQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgXG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==