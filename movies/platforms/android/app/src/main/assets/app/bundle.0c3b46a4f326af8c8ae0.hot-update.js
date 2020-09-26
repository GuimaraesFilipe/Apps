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
        this.movie = true;
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
        this.resultRecentlyAdded = [];
        this.RecentlyAddedImage = [];
        this.filteredRecentlyAdded = [];
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
        this.extractRecentlyAdded();
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
                    "imdb_id": "tt10648198",
                    "title": "Dime Cuándo Tú",
                    "year": "2020"
                },
                {
                    "imdb_id": "tt10687740",
                    "title": "Princezna zakletá v čase",
                    "year": "2020"
                },
                {
                    "imdb_id": "tt11622272",
                    "title": "Spring Uje spring",
                    "year": "2020"
                },
                {
                    "imdb_id": "tt11354164",
                    "title": "老後の資金がありません",
                    "year": "2020"
                },
                {
                    "imdb_id": "tt10431332",
                    "title": "Legend Quest: The Origin",
                    "year": "2020"
                },
                {
                    "imdb_id": "tt11697690",
                    "title": "The Woman Who Ran",
                    "year": "2020"
                }] };
        this.onGetUpComing(result);
    }
    onGetUpComing(res) {
        for (let key in res.movie_results) {
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
    extractRecentlyAdded() {
        const result = { "tv_results": [{
                    "imdb_id": "tt10681614",
                    "title": "The Deceived",
                    "year": "2020"
                },
                {
                    "imdb_id": "tt12753692",
                    "title": "Connected: The Hidden Science of Everything",
                    "year": "2020"
                },
                {
                    "imdb_id": "tt9208876",
                    "title": "The Falcon and the Winter Soldier",
                    "year": "2020"
                },
                {
                    "imdb_id": "tt10857210",
                    "title": "Muppets Now",
                    "year": "2020"
                },
                {
                    "imdb_id": "tt12792004",
                    "title": "The Oprah Conversation",
                    "year": "2020"
                },
                {
                    "imdb_id": "tt9789660",
                    "title": "Transformers: War for Cybertron Trilogy",
                    "year": "2020"
                }] };
        this.onGetRecentlyAdded(result);
    }
    onGetRecentlyAdded(res) {
        for (let key in res.tv_results) {
            this.resultRecentlyAdded.push({ value: res.tv_results[key] });
        }
        this.resultRecentlyAdded.forEach(obj => {
            this.extractImageTrendingShows(obj.value.imdb_id);
        });
    }
    extractImageRecentlyAdded(value) {
        this.myService.getImageName(value)
            .subscribe((result) => {
            this.onGetImageRecentlyAdded(result);
        }, (error) => {
            console.log(error);
        });
    }
    onGetImageRecentlyAdded(res) {
        for (let key in res) {
            this.RecentlyAddedImage.push({ image: res });
            this.filteredRecentlyAdded = this.RecentlyAddedImage.reduce((acc, current) => {
                const x = acc.find(item => item.image === current.image);
                if (!x) {
                    return acc.concat([current]);
                }
                else {
                    return acc;
                }
            }, []);
            console.log('filtered', this.filtered);
        }
    }
    selectedSearchM(args) {
        this.resultSelected = [];
        this.SelectedFiltered = [];
        this.movie_show = "";
        let selected = args.object.bindingContext;
        this.movie_show = selected.image.id;
        this.isHomepage = !this.isHomepage;
        console.log(' got MOvieShow', this.movie_show);
        this.extractSelectMovieShow(this.movie_show);
    }
    selectedSearch(args) {
        this.movie = !this.movie;
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
        this.movie = !this.movie;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0Esa0ZBQXFGO0FBQ3JGLDhGQUErRDtBQUMvRCxrRUFBNEM7QUFFNUMsdUZBQXNEO0FBQ3RELDRGQUEyRTtBQUczRSxrR0FBNkQ7QUFDN0QsSUFBSSxhQUFhLEdBQUcsbUJBQU8sQ0FBQyxtREFBYSxDQUFDLENBQUM7QUFFM0MsaUdBQW9EO0FBQ3BELCtFQUF3RDtBQUV4RCxvRkFBMkU7QUFlM0UsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQTJEdEIsWUFBb0IsSUFBZ0IsRUFBUyxTQUE0QixFQUFVLGdCQUFrQyxFQUFVLFlBQTBCO1FBQXJJLFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFtQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQXpEM0osV0FBTSxHQUFZLElBQUksQ0FBQztRQUVyQixXQUFNLEdBQWUsRUFBRSxDQUFDO1FBQ3hCLFlBQU8sR0FBZSxFQUFFLENBQUM7UUFDekIsWUFBTyxHQUFlLEVBQUUsQ0FBQztRQUN6QixZQUFPLEdBQWUsRUFBRSxDQUFDO1FBQ3pCLG1CQUFjLEdBQWUsRUFBRSxDQUFDO1FBQ2hDLGdCQUFXLEdBQWUsRUFBRSxDQUFDO1FBQzdCLGFBQVEsR0FBZSxFQUFFLENBQUM7UUFDMUIsY0FBUyxHQUFlLEVBQUUsQ0FBQztRQUMzQixxQkFBZ0IsR0FBZSxFQUFFLENBQUM7UUFHbEMsYUFBUSxHQUFrQixFQUFFLENBQUM7UUFFNUIsUUFBRyxHQUFXLE9BQU8sQ0FBQztRQUN2QixVQUFLLEdBQVcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFJekMsZUFBVSxHQUFDLEVBQUUsQ0FBQztRQUNmLFFBQUcsR0FBRyxDQUFDLENBQUM7UUFDUixhQUFRLEdBQUcsQ0FB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M2I0NmE0ZjMyNmFmOGM4YWUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidWkvc2VhcmNoLWJhclwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCJ+L2FwcC5jb21wb25lbnRcIlxuaW1wb3J0IHsgU2Nyb2xsVmlldywgU2Nyb2xsRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXdcIjtcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgeyBnZXRGcmFtZUJ5SWQsIEZyYW1lLCBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xuaW1wb3J0IHsgVG9rZW5Nb2RlbCwgQXV0b0NvbXBsZXRlRXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1hdXRvY29tcGxldGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgaXNJT1MsIGlzQW5kcm9pZCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xudmFyIHV0aWxpdHlNb2R1bGUgPSByZXF1aXJlKFwidXRpbHMvdXRpbHNcIik7XG5kZWNsYXJlIGNvbnN0IFVJQXBwbGljYXRpb247XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IE15SHR0cEdldFNlcnZpY2UyIH0gZnJvbSBcIi4vaHR0cC1nZXQuc2VydmljZXNcIjsgIFxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yXCI7XG5pbXBvcnQgeyBBbnlUeHRSZWNvcmQgfSBmcm9tIFwiZG5zXCI7XG5pbXBvcnQgeyBnZXRTdHJpbmcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBpc0J1c3k6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHJhbmRvbTogYW55O1xuICAgIHJlc3VsdDogQXJyYXk8YW55PiA9IFtdOyBcbiAgICByZXN1bHQyOiBBcnJheTxhbnk+ID0gW107IFxuICAgIHJlc3VsdDM6IEFycmF5PGFueT4gPSBbXTsgXG4gICAgcmVzdWx0NDogQXJyYXk8YW55PiA9IFtdOyBcbiAgICByZXN1bHRTZWxlY3RlZDogQXJyYXk8YW55PiA9IFtdOyBcbiAgICBzdWdnZXN0aW9uczogQXJyYXk8YW55PiA9IFtdO1xuICAgIGZpbHRlcmVkOiBBcnJheTxhbnk+ID0gW107XG4gICAgZmlsdGVyZWQyOiBBcnJheTxhbnk+ID0gW107XG4gICAgU2VsZWN0ZWRGaWx0ZXJlZDogQXJyYXk8YW55PiA9IFtdO1xuICAgIHN1Z2dlc3Q6IE9ic2VydmFibGVBcnJheTxUb2tlbk1vZGVsPjtcbiAgXHRkYjogYW55O1xuICAgIHNlbGVjdGVkOiBBcnJheTxPYmplY3Q+ID0gW107XG4gICAgdXNlcl9pZDogc3RyaW5nO1xuICAgICB1cmw6IHN0cmluZyA9IFwiPHVybD5cIjsgXG4gICAgdmFsdWU6Ym9vbGVhbiA9IHV0aWxzLmlzRGF0YVVSSSh0aGlzLnVybCk7XG4gICAgQFZpZXdDaGlsZChcIm1vdmllU2hvd1wiLHtzdGF0aWM6IGZhbHNlfSkgbW92aWVTaG93OiBFbGVtZW50UmVmO1xuICAgICBAVmlld0NoaWxkKFwibWVkMlwiLCB7c3RhdGljOiBmYWxzZX0pIG1lZDI6IEVsZW1lbnRSZWY7XG4gICAgIEBWaWV3Q2hpbGQoXCJtZWQzXCIse3N0YXRpYzogZmFsc2V9KSBtZWQzOiBFbGVtZW50UmVmO1xuICAgICBtb3ZpZV9zaG93PVwiXCI7XG4gICAgc3VtID0gMDtcbiAgICBzdW1Ub3RhbCA9IDA7XG4gICAgc3VtRGVhdGhzID0gMDtcbiAgICBzdW1wb3A9MDtcbiAgICBzdW1hY3RpdmU9MDtcbiAgICBzdW1yZWNvdmVyZWQ9MDtcbiAgICBpc05vdExvZ2dlZEluPSB0cnVlO1xuICAgIGlzSG9tZXBhZ2UgPSB0cnVlO1xuICAgIG1vdmllPSB0cnVlO1xuICAgIHJlZD10cnVlO1xuICAgIGdyZWVuPXRydWU7XG4gICAgb3JhbmdlPXRydWU7XG4gICAgY3JlYXRlQW5kVXBkYXRlOiBhbnk7XG4gICAgbWVkSGVyYlN1cDogQXJyYXk8T2JqZWN0PiA9IFtdO1xuICAgIGlzTm90U2VhcmNoPSB0cnVlO1xuICAgIGZyYW1lID0gRnJhbWUuZ2V0RnJhbWVCeUlkKFwibXlGcmFtZVwiKTtcbiAgICBpc1NjYW49dHJ1ZTtcbiAgcmVzdWx0VXBDb21pbmc6IEFycmF5PGFueT4gPSBbXTsgXG4gIFVwQ29taW5nSW1hZ2U6IEFycmF5PGFueT4gPSBbXTsgXG4gIGZpbHRlcmVkVXBDb21pbmc6IEFycmF5PGFueT4gPSBbXTsgXG4gIHJlc3VsdFRyZW5kaW5nU2hvd3M6IEFycmF5PGFueT4gPSBbXTsgXG4gIFRyZW5kaW5nU2hvd3NJbWFnZTpBcnJheTxhbnk+ID0gW107IFxuICBmaWx0ZXJlZFRyZW5kaW5nU2hvd3M6IEFycmF5PGFueT4gPSBbXTsgXG4gIHJlc3VsdFJlY2VudGx5QWRkZWQ6QXJyYXk8YW55PiA9IFtdOyBcbiAgUmVjZW50bHlBZGRlZEltYWdlOkFycmF5PGFueT4gPSBbXTsgXG4gIGZpbHRlcmVkUmVjZW50bHlBZGRlZDpBcnJheTxhbnk+ID0gW107IFxuXG4gICAgXG5cblxuICAgIG9uQnVzeUNoYW5nZWQoYXJnczogRXZlbnREYXRhKSB7XG4gICAgICBsZXQgaW5kaWNhdG9yOiBBY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj5hcmdzLm9iamVjdDtcbiAgICAgIGNvbnNvbGUubG9nKFwiaW5kaWNhdG9yLmJ1c3kgY2hhbmdlZCB0bzogXCIgKyBpbmRpY2F0b3IuYnVzeSk7XG4gIH1cbiAgIFxuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxwcml2YXRlIG15U2VydmljZTogTXlIdHRwR2V0U2VydmljZTIsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBhcHBjb21wb25lbnQ6IEFwcENvbXBvbmVudCkge1xuXG4gICAgICBcblxuICAgICAgIFxuICAgIH0gXG4gICAgXG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIFxuICAgICAgLy8gdGhpcy5leHRyYWN0RGF0YSgpO1xuICAgICAgdGhpcy5leHRyYWN0T25BaXIoKTtcbiAgICAgIHRoaXMuZXh0cmFjdFRyZW5kaW5nU2hvd3MoKTtcbiAgICAgIHRoaXMuZXh0cmFjdFVwQ29taW5nKCk7XG4gICAgICB0aGlzLmV4dHJhY3RUcmVuZGluZ01vdmllcygpO1xuICAgICAgdGhpcy5leHRyYWN0UmVjZW50bHlBZGRlZCgpO1xuICAgICAgLy8gdGhpcy5zZWxlY3RJdGVtcygpO1xuICAgIH1cbiAgLy8gICBleHRyYWN0RGF0YSgpIHtcbiAgLy8gICAgIHRoaXMubXlTZXJ2aWNlLmdldEFsbCgpXG4gIC8vICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgXG4gIC8vICAgICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvbihyZXN1bHQpO1xuICAgICAgICAgICAgICBcbiAgLy8gICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAvLyAgICAgICAgIH0pO1xuICAvLyB9XG4gIFxuLy8gICBzZWxlY3RJdGVtcygpIHtcbi8vICAgICB0aGlzLmRpc21pc3NLZXlib2FyZCgpO1xuICAgXG4vLyAgICAgaWYgKCF0aGlzLmlzSG9tZXBhZ2Upe1xuLy8gICAgICAgdGhpcy5yZXN1bHQ9W107XG4vLyAgICAgICB0aGlzLm15U2VydmljZS5nZXRJbmZvKClcbiAgIFxuLy8gICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgb2JqZWN0XCIscmVzdWx0KVxuLy8gICAgICAgICB0aGlzLm9uR2V0RGF0YVN1Y2Nlc3MocmVzdWx0KVxuICAgICAgICAgIFxuICAgICAgICAgIFxuLy8gICAgICAgfSwgKGVycm9yKSA9PiB7XG4vLyAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuLy8gICAgICAgfSk7XG5cbi8vICAgICB9XG4vLyAgICAgZWxzZXtcbi8vICAgICAgIHRoaXMuaXNIb21lcGFnZSA9ICF0aGlzLmlzSG9tZXBhZ2U7XG4vLyAgICAgICB0aGlzLm15U2VydmljZS5nZXRJbmZvKClcbiAgIFxuLy8gICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgb2JqZWN0XCIscmVzdWx0KVxuLy8gICAgICAgICB0aGlzLm9uR2V0RGF0YVN1Y2Nlc3MocmVzdWx0KVxuICAgICAgICAgIFxuICAgICAgICAgIFxuLy8gICAgICAgfSwgKGVycm9yKSA9PiB7XG4vLyAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuLy8gICAgICAgfSk7XG4vLyAgICAgfVxuICBcblxuLy8gfSBcblxub25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7IFxuICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICBjb25zb2xlLmxvZyhcImRyYXdlcjFcIilcbiAgXG59XG5cbnByaXZhdGUgb25HZXREYXRhU3VjY2VzcyhyZXMpIHtcblxuZm9yIChsZXQga2V5IGluIHJlcy5yZXNwb25zZSkge1xuICB0aGlzLnJlc3VsdC5wdXNoKHt2YWx1ZTogcmVzLnJlc3BvbnNlW2tleV19KTtcbiAgY29uc29sZS5sb2coXCJ0aGlzIGFycmF5XCIsIHRoaXMucmVzdWx0KTtcbn1cblxuICB9XG4gIG9uU2Nyb2xsKGFyZ3M6IFNjcm9sbEV2ZW50RGF0YSkge1xuICAgIGNvbnN0IHNjcm9sbFZpZXcgPSBhcmdzLm9iamVjdCBhcyBTY3JvbGxWaWV3O1xuXG4gICAgLy8gY29uc29sZS5sb2coXCJzY3JvbGxYOiBcIiArIGFyZ3Muc2Nyb2xsWCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJzY3JvbGxZOiBcIiArIGFyZ3Muc2Nyb2xsWSk7XG59XG5cbmV4dHJhY3RPbkFpcigpIHtcbiAgLy8gY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBleHRyYWN0XCIpXG4gIC8vIHRoaXMubXlTZXJ2aWNlLmdldE9uQWlyKClcbiAgLy8gICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhcIk9OIEFJUiBPTiBBSVIgT04gQUlSXCIsIHJlc3VsdClcbiAgICAgICAgY29uc3QgcmVzdWx0PSB7ICBcInR2X3Jlc3VsdHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJZb3dpcyBCZW46IFRoZSBTZXJpZXNcIixcbiAgICAgICAgICAgIFwiaW1kYl9pZFwiOiBcInR0MTMwMzkwNDJcIixcbiAgICAgICAgICAgICBcInllYXJcIjogXCIyMDIwXCJcbiAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJUbyBrYWZlIHRpcyBIYXJhc1wiLFxuICAgICAgICAgICBcImltZGJfaWRcIjogXCJ0dDAzODQ3NDVcIixcbiAgICAgICAgICAgIFwieWVhclwiOiBcIjIwMDNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkJldHR5cyBEaWFnbm9zZVwiLFxuICAgICAgICAgICAgXCJpbWRiX2lkXCI6IFwidHQ0MzEwNDI2XCIsXG4gICAgICAgICAgICBcInllYXJcIjogXCIyMDE1XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgICB7XG4gICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkRyw6FnYSDDtnLDtmvDtnPDtmtcIixcbiAgICAgICAgICAgXCJpbWRiX2lkXCI6IFwidHQ5NDgwNDMyXCIsXG4gICAgICAgICAgIFwieWVhclwiOiBcIjIwMTlcIlxuICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkhhdXRlIERvZ1wiLFxuICAgICAgICAgICBcImltZGJfaWRcIjogXCJ0dDEzMDY0MjA2XCIsXG4gICAgICAgICAgIFwieWVhclwiOiBcIjIwMjBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBBbWJlciBSdWZmaW4gU2hvd1wiLFxuICAgICAgICAgICAgXCJpbWRiX2lkXCI6IFwidHQxMTA1ODA3OFwiLFxuICAgICAgICAgICAgIFwieWVhclwiOiBcIjIwMjBcIlxuICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiTWFnaWMgb2YgRGlzbmV5J3MgQW5pbWFsIEtpbmdkb21cIixcbiAgICAgICAgICAgXCJpbWRiX2lkXCI6IFwidHQxMDE5NjM3OFwiLFxuICAgICAgICAgIFwieWVhclwiOiBcIjIwMjBcIlxuICAgICAgICAgfSxcbiAgICAgICAgIHtcbiAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlplaHUgWmVcIixcbiAgICAgICAgICAgXCJpbWRiX2lkXCI6IFwidHQwMDc3MTA4XCIsXG4gICAgICAgICAgICBcInllYXJcIjogXCIxOTc4XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJUaGUgU2Nob29sIE51cnNlIEZpbGVzXCIsXG4gICAgICAgICAgICBcImltZGJfaWRcIjogXCJ0dDEyODc5NTIyXCIsXG4gICAgICAgICAgICBcInllYXJcIjogXCIyMDIwXCJcbiAgICAgICAgICB9XX1cbiAgICAgICAgICB0aGlzLm9uR2V0U3RhdGljcyhyZXN1bHQpO1xuICAgICAgICAgIFxuICAgICAgLy8gfSwgKGVycm9yKSA9PiB7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgLy8gfSk7XG59XG5cbnByaXZhdGUgb25HZXRTdGF0aWNzKHJlcykge1xuICBcbiBcblxuICBmb3IgKGxldCBrZXkgaW4gcmVzLnR2X3Jlc3VsdHMpIHtcbiAgICBcbiAgICB0aGlzLnJlc3VsdDIucHVzaCh7dmFsdWU6IHJlcy50dl9yZXN1bHRzW2tleV19KTtcbiAgXG4gICAgLy8gY29uc29sZS5sb2coXCJyZXN1bHRpbmcgaW4gXCIsdGhpcy5yZXN1bHQyKTtcbiAgXG4gIFxuICB9XG4gIFxuICB0aGlzLnJlc3VsdDIuZm9yRWFjaChvYmogPT4ge1xuICAgIHRoaXMuZXh0cmFjdEltYWdlKG9iai52YWx1ZS5pbWRiX2lkKTtcbiAgIH0pO1xuICBcbiAgXG4gIFxuICAgIH1cbiAgICBleHRyYWN0SW1hZ2UodmFsdWUpIHtcblxuICAgICAgdGhpcy5teVNlcnZpY2UuZ2V0SW1hZ2VOYW1lKHZhbHVlKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBpbWFnZSByZXN1bHQgXCIsIHJlc3VsdClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICB0aGlzLm9uR2V0SW1hZ2UocmVzdWx0KTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgICBvbkdldEltYWdlKHJlcykge1xuICAgICAgXG4gICAgXG4gICAgICBmb3IgKGxldCBrZXkgaW4gcmVzKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmZpbHRlcmVkLnB1c2goe2ltYWdlOiByZXN9KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJJTUFHRSBSRXN1bHQgXCIsdGhpcy5yZXN1bHQpO1xuICAgIFxuICAgICAgICB0aGlzLnJlc3VsdD0gdGhpcy5maWx0ZXJlZC5yZWR1Y2UoKGFjYywgY3VycmVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHggPSBhY2MuZmluZChpdGVtID0+IGl0ZW0uaW1hZ2UgPT09IGN1cnJlbnQuaW1hZ2UpO1xuICAgICAgICAgIGlmICgheCkge1xuICAgICAgICAgICAgcmV0dXJuIGFjYy5jb25jYXQoW2N1cnJlbnRdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9XG4gICAgICAgIH0sIFtdKTtcbiAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZpbHRlcmVkJywgdGhpcy5maWx0ZXJlZCk7XG4gICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICAgIH1cblxuZXh0cmFjdFRyZW5kaW5nTW92aWVzKCkge1xuICBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGV4dHJhY3QgVHJlbmRpbmcgTW92aWVzXCIpXG4gIC8vIHRoaXMubXlTZXJ2aWNlLmdldFRyZW5kaW5nTW92aWVzKClcbiAgLy8gICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlRSRU5ESU5nIFRSRU5ESU5HXCIsIHJlc3VsdClcbiAgICAgICAgY29uc3QgcmVzdWx0PSAge1xuICAgICAgICAgIFwibW92aWVfcmVzdWx0c1wiOiBbXG4gICAgICAgIFxuICAgICAgICAgICB7XG4gICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkRvbid0IFJlYWQgVGhpcyBPbiBhIFBsYW5lXCIsXG4gICAgICAgICAgXCJ5ZWFyXCI6IFwiMFwiLFxuICAgICAgICAgICAgXCJpbWRiX2lkXCI6IFwidHQ3NTI1NzkyXCJcbiAgICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiQnJ1dHVzIFZzIEPDqXNhclwiLFxuICAgICAgICAgICAgXCJ5ZWFyXCI6IFwiMjAyMFwiLFxuICAgICAgICAgICAgXCJpbWRiX2lkXCI6IFwidHQxMDU1NzUyNFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImltZGJfaWRcIjpcInR0MDQyMzcxM1wiLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOlwiUGx1cyBiZWxsZSBsYSB2aWVcIixcbiAgICAgICAgICAgIFwieWVhclwiOlwiMjAwNFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICAgIHRoaXMub25HZXRUcmVuZGluZ01vdmllcyhyZXN1bHQpO1xuICAgICAgICAgIFxuICAgICAgLy8gfSwgKGVycm9yKSA9PiB7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgLy8gfSk7XG59XG5cbnByaXZhdGUgb25HZXRUcmVuZGluZ01vdmllcyhyZXMpIHtcbiAgXG4gXG5cbiAgZm9yIChsZXQga2V5IGluIHJlcy5tb3ZpZV9yZXN1bHRzKSB7XG4gICAgXG4gICAgdGhpcy5yZXN1bHQzLnB1c2goe3ZhbHVlOiByZXMubW92aWVfcmVzdWx0c1trZXldfSk7XG4gIFxuICAgIC8vIGNvbnNvbGUubG9nKFwicmVzdWx0aW5nIGluIFwiLHRoaXMucmVzdWx0Mik7XG4gIFxuICBcbiAgfVxuICBcbiAgdGhpcy5yZXN1bHQzLmZvckVhY2gob2JqID0+IHtcbiAgICB0aGlzLmV4dHJhY3RJbWFnZTIob2JqLnZhbHVlLmltZGJfaWQpO1xuICAgfSk7XG4gIFxuICBcbiAgXG4gICAgfVxuXG4gICAgZXh0cmFjdEltYWdlMih2YWx1ZSkge1xuXG4gICAgICB0aGlzLm15U2VydmljZS5nZXRJbWFnZU5hbWUyKHZhbHVlKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBpbWFnZSByZXN1bHQgXCIsIHJlc3VsdClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICB0aGlzLm9uR2V0SW1hZ2UyKHJlc3VsdCk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICAgb25HZXRJbWFnZTIocmVzKSB7XG4gICAgICBcbiAgICBcbiAgICAgIGZvciAobGV0IGtleSBpbiByZXMpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZmlsdGVyZWQyLnB1c2goe2ltYWdlOiByZXN9KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJJTUFHRSBSRXN1bHQgXCIsdGhpcy5yZXN1bHQpO1xuICAgIFxuICAgICAgICB0aGlzLnJlc3VsdDQ9IHRoaXMuZmlsdGVyZWQyLnJlZHVjZSgoYWNjLCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgeCA9IGFjYy5maW5kKGl0ZW0gPT4gaXRlbS5pbWFnZSA9PT0gY3VycmVudC5pbWFnZSk7XG4gICAgICAgICAgaWYgKCF4KSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjLmNvbmNhdChbY3VycmVudF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgW10pO1xuICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZmlsdGVyZWQnLCB0aGlzLmZpbHRlcmVkKTtcbiAgICAgXG4gICAgICAgIFxuICAgICAgfVxuICAgICAgXG4gICAgICBcblxuXG5cblxuXG4gICAgICB0aGlzLnJhbmRvbT10aGlzLnJlc3VsdDRbTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSoyKV0uaW1hZ2UucG9zdGVyO1xuICAgICAgY29uc29sZS5sb2codGhpcy5yYW5kb20pXG4gICAgICBcbiAgICAgICAgfVxuICAgICBcbiAgICAgICAgXG5leHRyYWN0VXBDb21pbmcoKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgZXh0cmFjdFwiKVxuICAvLyB0aGlzLm15U2VydmljZS5nZXRPblVwQ29taW5nKClcbiAgLy8gICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhcIk9OIEFJUiBPTiBBSVIgT04gQUlSXCIsIHJlc3VsdClcbiAgICAgICAgY29uc3QgcmVzdWx0PSB7ICBcIm1vdmllX3Jlc3VsdHNcIjogW3tcbiAgICAgICAgICBcImltZGJfaWRcIjpcInR0MTA2NDgxOThcIixcbiAgICAgICAgICBcInRpdGxlXCI6XCJEaW1lIEN1w6FuZG8gVMO6XCIsXG4gICAgICAgICAgXCJ5ZWFyXCI6XCIyMDIwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaW1kYl9pZFwiOlwidHQxMDY4Nzc0MFwiLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOlwiUHJpbmNlem5hIHpha2xldMOhIHYgxI1hc2VcIixcbiAgICAgICAgICAgIFwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDExNjIyMjcyXCIsXG4gICAgICAgICAgXCJ0aXRsZVwiOlwiU3ByaW5nIFVqZSBzcHJpbmdcIixcbiAgICAgICAgICBcInllYXJcIjpcIjIwMjBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDExMzU0MTY0XCIsXG4gICAgICAgICAgICBcInRpdGxlXCI6XCLogIHlvozjga7os4fph5HjgYzjgYLjgorjgb7jgZvjgpNcIixcbiAgICAgICAgICAgIFwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImltZGJfaWRcIjpcInR0MTA0MzEzMzJcIixcblwidGl0bGVcIjpcIkxlZ2VuZCBRdWVzdDogVGhlIE9yaWdpblwiLFxuXCJ5ZWFyXCI6XCIyMDIwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaW1kYl9pZFwiOlwidHQxMTY5NzY5MFwiLFxuXCJ0aXRsZVwiOlwiVGhlIFdvbWFuIFdobyBSYW5cIixcblwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgfV19XG4gICAgICAgIFxuICAgICAgICAgIHRoaXMub25HZXRVcENvbWluZyhyZXN1bHQpO1xuICAgICAgICAgIFxuICAgICAgLy8gfSwgKGVycm9yKSA9PiB7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgLy8gfSk7XG59XG5cbnByaXZhdGUgb25HZXRVcENvbWluZyhyZXMpIHtcbiAgXG4gXG5cbiAgZm9yIChsZXQga2V5IGluIHJlcy5tb3ZpZV9yZXN1bHRzKSB7XG4gICAgXG4gICAgdGhpcy5yZXN1bHRVcENvbWluZy5wdXNoKHt2YWx1ZTogcmVzLm1vdmllX3Jlc3VsdHNba2V5XX0pO1xuICBcbiAgICAvLyBjb25zb2xlLmxvZyhcInJlc3VsdGluZyBpbiBcIix0aGlzLnJlc3VsdDIpO1xuICBcbiAgXG4gIH1cbiAgXG4gIHRoaXMucmVzdWx0VXBDb21pbmcuZm9yRWFjaChvYmogPT4ge1xuICAgIHRoaXMuZXh0cmFjdEltYWdlVXBDb21pbmcob2JqLnZhbHVlLmltZGJfaWQpO1xuICAgfSk7XG4gIFxuICBcbiAgXG4gICAgfVxuICAgIGV4dHJhY3RJbWFnZVVwQ29taW5nKHZhbHVlKSB7XG5cbiAgICAgIHRoaXMubXlTZXJ2aWNlLmdldEltYWdlTmFtZSh2YWx1ZSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgaW1hZ2UgcmVzdWx0IFwiLCByZXN1bHQpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgdGhpcy5vbkdldEltYWdlVXBDb21pbmcocmVzdWx0KTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgICBvbkdldEltYWdlVXBDb21pbmcocmVzKSB7XG4gICAgICBcbiAgICBcbiAgICAgIGZvciAobGV0IGtleSBpbiByZXMpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuVXBDb21pbmdJbWFnZS5wdXNoKHtpbWFnZTogcmVzfSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSU1BR0UgUkVzdWx0IFwiLHRoaXMucmVzdWx0KTtcbiAgICBcbiAgICAgICAgdGhpcy5maWx0ZXJlZFVwQ29taW5nPSB0aGlzLlVwQ29taW5nSW1hZ2UucmVkdWNlKChhY2MsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgICBjb25zdCB4ID0gYWNjLmZpbmQoaXRlbSA9PiBpdGVtLmltYWdlID09PSBjdXJyZW50LmltYWdlKTtcbiAgICAgICAgICBpZiAoIXgpIHtcbiAgICAgICAgICAgIHJldHVybiBhY2MuY29uY2F0KFtjdXJyZW50XSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBbXSk7XG4gICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdmaWx0ZXJlZCcsIHRoaXMuZmlsdGVyZWQpO1xuICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgfVxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGV4dHJhY3RUcmVuZGluZ1Nob3dzKCkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgZXh0cmFjdFwiKVxuICAgICAgICAgIC8vIHRoaXMubXlTZXJ2aWNlLmdldE9uVHJlbmRpbmdTaG93KClcbiAgICAgICAgICAvLyAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgLy8gICAgICAgY29uc29sZS5sb2coXCJPTiBBSVIgT04gQUlSIE9OIEFJUlwiLCByZXN1bHQpXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0PSB7ICBcInR2X3Jlc3VsdHNcIjogW3tcbiAgICAgICAgICAgICAgICAgIFwiaW1kYl9pZFwiOlwidHQxMjYyNDg0NFwiLFxuICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOlwiVGhlIEdyZWF0IEhlaXN0XCIsXG4gICAgICAgICAgICAgICAgICBcInllYXJcIjpcIjIwMjBcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDk4NDkyMTBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOlwiQmlvaGFja2Vyc1wiLFxuICAgICAgICAgICAgICAgICAgICBcInllYXJcIjpcIjIwMjBcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDEwNjIzNTUwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjpcIlRoZSBGdWdpdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInllYXJcIjpcIjIwMjBcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDY5MDU2ODZcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOlwiTG92ZWNyYWZ0IENvdW50cnlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ5ZWFyXCI6XCIyMDIwXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaW1kYl9pZFwiOlwidHQxMDU4NDYwOFwiLFxuICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6XCJUZWVuYWdlIEJvdW50eSBIdW50ZXJzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImltZGJfaWRcIjpcInR0MTA5ODY0MTBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOlwiVGVkIExhc3NvXCIsXG4gICAgICAgICAgICAgICAgICAgIFwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgICAgICAgICB9XX1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHRoaXMub25HZXRUcmVuZGluZ1Nob3dzKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBwcml2YXRlIG9uR2V0VHJlbmRpbmdTaG93cyhyZXMpIHtcbiAgICAgICAgICBcbiAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gcmVzLnR2X3Jlc3VsdHMpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5yZXN1bHRUcmVuZGluZ1Nob3dzLnB1c2goe3ZhbHVlOiByZXMudHZfcmVzdWx0c1trZXldfSk7XG4gICAgICAgICAgXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlc3VsdGluZyBpbiBcIix0aGlzLnJlc3VsdDIpO1xuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICB0aGlzLnJlc3VsdFRyZW5kaW5nU2hvd3MuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICAgICAgdGhpcy5leHRyYWN0SW1hZ2VUcmVuZGluZ1Nob3dzKG9iai52YWx1ZS5pbWRiX2lkKTtcbiAgICAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBleHRyYWN0SW1hZ2VUcmVuZGluZ1Nob3dzKHZhbHVlKSB7XG4gICAgICAgIFxuICAgICAgICAgICAgICB0aGlzLm15U2VydmljZS5nZXRJbWFnZU5hbWUodmFsdWUpXG4gICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBpbWFnZSByZXN1bHQgXCIsIHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkdldEltYWdlVHJlbmRpbmdTaG93cyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICBvbkdldEltYWdlVHJlbmRpbmdTaG93cyhyZXMpIHtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHJlcykge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuVHJlbmRpbmdTaG93c0ltYWdlLnB1c2goe2ltYWdlOiByZXN9KTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIklNQUdFIFJFc3VsdCBcIix0aGlzLnJlc3VsdCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcmVkVHJlbmRpbmdTaG93cz0gdGhpcy5UcmVuZGluZ1Nob3dzSW1hZ2UucmVkdWNlKChhY2MsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHggPSBhY2MuZmluZChpdGVtID0+IGl0ZW0uaW1hZ2UgPT09IGN1cnJlbnQuaW1hZ2UpO1xuICAgICAgICAgICAgICAgICAgaWYgKCF4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2MuY29uY2F0KFtjdXJyZW50XSk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdmaWx0ZXJlZCcsIHRoaXMuZmlsdGVyZWQpO1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGV4dHJhY3RSZWNlbnRseUFkZGVkKCkge1xuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBleHRyYWN0XCIpXG4gICAgICAgICAgICAgICAgICAvLyB0aGlzLm15U2VydmljZS5nZXRPblJlY2VudGx5QWRkZWQoKVxuICAgICAgICAgICAgICAgICAgLy8gICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgLy8gICAgICAgY29uc29sZS5sb2coXCJPTiBBSVIgT04gQUlSIE9OIEFJUlwiLCByZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQ9IHsgIFwidHZfcmVzdWx0c1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImltZGJfaWRcIjpcInR0MTA2ODE2MTRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOlwiVGhlIERlY2VpdmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImltZGJfaWRcIjpcInR0MTI3NTM2OTJcIixcblwidGl0bGVcIjpcIkNvbm5lY3RlZDogVGhlIEhpZGRlbiBTY2llbmNlIG9mIEV2ZXJ5dGhpbmdcIixcblwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImltZGJfaWRcIjpcInR0OTIwODg3NlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjpcIlRoZSBGYWxjb24gYW5kIHRoZSBXaW50ZXIgU29sZGllclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImltZGJfaWRcIjpcInR0MTA4NTcyMTBcIixcblwidGl0bGVcIjpcIk11cHBldHMgTm93XCIsXG5cInllYXJcIjpcIjIwMjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDEyNzkyMDA0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOlwiVGhlIE9wcmFoIENvbnZlcnNhdGlvblwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInllYXJcIjpcIjIwMjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDk3ODk2NjBcIixcblwidGl0bGVcIjpcIlRyYW5zZm9ybWVyczogV2FyIGZvciBDeWJlcnRyb24gVHJpbG9neVwiLFxuXCJ5ZWFyXCI6XCIyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfV19XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkdldFJlY2VudGx5QWRkZWQocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgLy8gfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBvbkdldFJlY2VudGx5QWRkZWQocmVzKSB7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gcmVzLnR2X3Jlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0UmVjZW50bHlBZGRlZC5wdXNoKHt2YWx1ZTogcmVzLnR2X3Jlc3VsdHNba2V5XX0pO1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVzdWx0aW5nIGluIFwiLHRoaXMucmVzdWx0Mik7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdFJlY2VudGx5QWRkZWQuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3RJbWFnZVRyZW5kaW5nU2hvd3Mob2JqLnZhbHVlLmltZGJfaWQpO1xuICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGV4dHJhY3RJbWFnZVJlY2VudGx5QWRkZWQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15U2VydmljZS5nZXRJbWFnZU5hbWUodmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgaW1hZ2UgcmVzdWx0IFwiLCByZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uR2V0SW1hZ2VSZWNlbnRseUFkZGVkKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICBvbkdldEltYWdlUmVjZW50bHlBZGRlZChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlY2VudGx5QWRkZWRJbWFnZS5wdXNoKHtpbWFnZTogcmVzfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIklNQUdFIFJFc3VsdCBcIix0aGlzLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJlZFJlY2VudGx5QWRkZWQ9IHRoaXMuUmVjZW50bHlBZGRlZEltYWdlLnJlZHVjZSgoYWNjLCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHggPSBhY2MuZmluZChpdGVtID0+IGl0ZW0uaW1hZ2UgPT09IGN1cnJlbnQuaW1hZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjLmNvbmNhdChbY3VycmVudF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZmlsdGVyZWQnLCB0aGlzLmZpbHRlcmVkKTtcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgXG4vLyAgICAgZ2V0SW1hZ2VOYW1lKHZhbHVlKSB7XG4vLyAgICAgICB2YXIgbG93ZXI9dmFsdWUuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKGxvd2VyKTtcbi8vICAgICAgIHJldHVybiBgfi9pbWFnZXMvJHtsb3dlcn0ucG5nYDtcbi8vICAgfVxuXG5cblxuXG4gIFxuXG4gICBcbi8vIGFkZEludGVyYWN0aW9uKG1lZEhlcmJTdXA6IHN0cmluZykge1xuLy8gICBjb25zb2xlLmxvZyhcImFkZCBtZWRIZXJiU3VwXCIsIG1lZEhlcmJTdXApXG4vLyAgICAgZGlhbG9ncy5hY3Rpb24oe1xuLy8gICAgICAgIHRpdGxlOiBcIkFyZSB5b3Ugc3VyZSB0aGF0IHlvdSB3YW50IHRvIGFkZCB0aGlzIG1lZGljaW5lIHRvIHlvdXIgbGlzdD9cIixcbi8vICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuLy8gICAgICAgYWN0aW9uczogW1wiWWVzXCIsIFwiTm9cIl1cbi8vICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG4vLyAgICAgICBpZiAocmVzdWx0ID09IFwiWWVzXCIpIHtcbi8vICAgICAgICB0aGlzLm1lZEhlcmJTdXBfbmFtZSA9IG1lZEhlcmJTdXA7XG4vLyAgICAgICAgdGhpcy5tZWRpY2luZV9mb3JtID0gXCJQaWxsXCI7XG4vLyAgICAgICAgIHRoaXMuZGIuZXhlY1NRTChcIklOU0VSVCBJTlRPIG1lZGljaW5lcyAobWVkaWNpbmVzX25hbWUsIG1lZGljaW5lX2Rvc2FnZSwgbWVkaWNpbmVfZm9ybSwgbWVkaWNpbmVfZnJlcXVlbmN5LCB1c2VyX2lkKSBWQUxVRVMgKD8sPyw/LD8sPylcIiwgW3RoaXMubWVkSGVyYlN1cF9uYW1lLCB0aGlzLm1lZGljaW5lX2Rvc2FnZSwgdGhpcy5tZWRpY2luZV9mb3JtLCB0aGlzLm1lZGljaW5lX2ZyZXF1ZW5jeSwgdGhpcy51c2VyX2lkXSkudGhlbihpZCA9PiB7XG4vLyAgICAgICAgICAgIHRoaXMubWVkaWNpbmVMaXN0LnVuc2hpZnQoe2lkOiBpZCwgbmFtZTogdGhpcy5tZWRIZXJiU3VwX25hbWUsIGRvc2FnZTogdGhpcy5tZWRpY2luZV9kb3NhZ2UsIGZvcm06IHRoaXMubWVkaWNpbmVfZm9ybSwgZnJlcXVlbmN5OnRoaXMubWVkaWNpbmVfZnJlcXVlbmN5fSk7XG4vLyAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIGFkZGluZyB3YXMgYSBzdWNlc3NcIiwgdGhpcy5tZWRpY2luZUxpc3QpO1xuLy8gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KCdNZWRpY2luZSBzYXZlZCBzdWNjZXNzZnVsbHk6Jyk7XG4gICAgICAgICAgIFxuLy8gICAgICAgIH0sIGVycm9yID0+IHtcbi8vICAgICAgICAgICAgY29uc29sZS5sb2coJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGFkZGluZyBhbiBpdGVtIHRvIHlvdXIgbGlzdC4nLCBlcnJvcik7XG4vLyAgICAgICAgICAgIHRoaXMubWVkSGVyYlN1cF9uYW1lID0gXCJcIjtcbi8vICAgICAgICAgICAgdGhpcy5tZWRpY2luZV9kb3NhZ2UgPSBcIlwiO1xuLy8gICAgICAgICAgICB0aGlzLm1lZGljaW5lX2Zvcm0gPSBcIlwiO1xuLy8gICAgICAgICAgICB0aGlzLm1lZGljaW5lX2ZyZXF1ZW5jeSA9IFwiXCI7XG4vLyAgICAgICAgfSk7XG5cbi8vICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09IFwiTm9cIikge1xuICAgICAgIFxuLy8gICAgICAgfVxuLy8gICAgIH0pO1xuLy8gICAgfVxuXG5zZWxlY3RlZFNlYXJjaE0oYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgdGhpcy5yZXN1bHRTZWxlY3RlZCA9IFtdO1xuICB0aGlzLlNlbGVjdGVkRmlsdGVyZWQ9W107XG4gIHRoaXMubW92aWVfc2hvdz1cIlwiO1xubGV0IHNlbGVjdGVkPSA8YW55PmFyZ3Mub2JqZWN0LmJpbmRpbmdDb250ZXh0O1xudGhpcy5tb3ZpZV9zaG93PXNlbGVjdGVkLmltYWdlLmlkO1xuICB0aGlzLmlzSG9tZXBhZ2UgPSAhdGhpcy5pc0hvbWVwYWdlO1xuIGNvbnNvbGUubG9nKCcgZ290IE1PdmllU2hvdycsIHRoaXMubW92aWVfc2hvdyk7XG4gdGhpcy5leHRyYWN0U2VsZWN0TW92aWVTaG93KHRoaXMubW92aWVfc2hvdyk7XG5cbn1cblxuc2VsZWN0ZWRTZWFyY2goYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgdGhpcy5tb3ZpZT0hdGhpcy5tb3ZpZTtcbiAgdGhpcy5yZXN1bHRTZWxlY3RlZCA9IFtdO1xuICB0aGlzLlNlbGVjdGVkRmlsdGVyZWQ9W107XG4gIHRoaXMubW92aWVfc2hvdz1cIlwiO1xubGV0IHNlbGVjdGVkPSA8YW55PmFyZ3Mub2JqZWN0LmJpbmRpbmdDb250ZXh0O1xudGhpcy5tb3ZpZV9zaG93PXNlbGVjdGVkLmltYWdlLmlkO1xuICB0aGlzLmlzSG9tZXBhZ2UgPSAhdGhpcy5pc0hvbWVwYWdlO1xuIGNvbnNvbGUubG9nKCcgZ290IE1PdmllU2hvdycsIHRoaXMubW92aWVfc2hvdyk7XG4gdGhpcy5leHRyYWN0U2VsZWN0TW92aWVTaG93KHRoaXMubW92aWVfc2hvdyk7XG5cbn1cblxuZXh0cmFjdFNlbGVjdE1vdmllU2hvdyh2YWx1ZSkge1xuICBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGV4dHJhY3QgU2VsZWN0ZWQgbW92aWVTaG93c1wiKVxuICB0aGlzLm15U2VydmljZS5nZXRTZWxlY3RlZE1vdmllU2hvdyh2YWx1ZSlcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIHJlc3VsdFwiLCByZXN1bHQpXG4gICAgICAgIFxuICAgICAgICAgIHRoaXMub25HZXRTZWxlY3RNb3ZpZVNob3cocmVzdWx0KTtcbiAgICAgICAgICBcbiAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xufVxuXG5wcml2YXRlIG9uR2V0U2VsZWN0TW92aWVTaG93KHJlcykge1xuICBcbiBcblxuICBmb3IgKGxldCBrZXkgaW4gcmVzKSB7XG4gICAgXG4gICAgXG4gICAgdGhpcy5TZWxlY3RlZEZpbHRlcmVkLnB1c2goe3ZhbHVlOiByZXN9KTtcbiAgXG4gICAgXG4gIFxuICBcbiAgfVxuICB0aGlzLnJlc3VsdFNlbGVjdGVkPSB0aGlzLlNlbGVjdGVkRmlsdGVyZWQucmVkdWNlKChhY2MsIGN1cnJlbnQpID0+IHtcbiAgICBjb25zdCB4ID0gYWNjLmZpbmQoaXRlbSA9PiBpdGVtLmltYWdlID09PSBjdXJyZW50LmltYWdlKTtcbiAgICBpZiAoIXgpIHtcbiAgICAgIHJldHVybiBhY2MuY29uY2F0KFtjdXJyZW50XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuICB9LCBbXSk7XG4gIFxuICBcbiAgY29uc29sZS5sb2coXCJyZXN1bHRpbmcgaW4gXCIsdGhpcy5yZXN1bHRTZWxlY3RlZCk7XG4gIFxuICBcbiAgICB9XG5cbiAgICAgXG4gICBcbiAgICBvbkhvbWVUYXAoKTogdm9pZCB7XG4gICAgICB0aGlzLm1vdmllPSF0aGlzLm1vdmllO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hvbWVcIl0pO1xuICAgICAgICBpZighdGhpcy5pc0hvbWVwYWdlKXtcbiAgICAgICAgICB0aGlzLmlzSG9tZXBhZ2U9IXRoaXMuaXNIb21lcGFnZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkhpc3RvcnlUYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaGlzdG9yeVwiXSk7XG4gIFxuICAgIH1cblxuXG4gICAgXG4gICAgIFxuICAgIFxuXG4gICBcbiAgICAgIGRpc21pc3NLZXlib2FyZCgpIHtcbiAgICAgICAgaWYgKGlzSU9TKSB7XG4gICAgICAgICAgVUlBcHBsaWNhdGlvbi5zaGFyZWRBcHBsaWNhdGlvbi5rZXlXaW5kb3cuZW5kRWRpdGluZyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICAgICAgdXRpbHMuYWQuZGlzbWlzc1NvZnRJbnB1dCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICBcblxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9