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
            this.onGetRecentlyAdded(result);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0Esa0ZBQXFGO0FBQ3JGLDhGQUErRDtBQUMvRCxrRUFBNEM7QUFFNUMsdUZBQXNEO0FBQ3RELDRGQUEyRTtBQUczRSxrR0FBNkQ7QUFDN0QsSUFBSSxhQUFhLEdBQUcsbUJBQU8sQ0FBQyxtREFBYSxDQUFDLENBQUM7QUFFM0MsaUdBQW9EO0FBQ3BELCtFQUF3RDtBQUV4RCxvRkFBMkU7QUFlM0UsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQTBEdEIsWUFBb0IsSUFBZ0IsRUFBUyxTQUE0QixFQUFVLGdCQUFrQyxFQUFVLFlBQTBCO1FBQXJJLFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFtQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQXhEM0osV0FBTSxHQUFZLElBQUksQ0FBQztRQUVyQixXQUFNLEdBQWUsRUFBRSxDQUFDO1FBQ3hCLFlBQU8sR0FBZSxFQUFFLENBQUM7UUFDekIsWUFBTyxHQUFlLEVBQUUsQ0FBQztRQUN6QixZQUFPLEdBQWUsRUFBRSxDQUFDO1FBQ3pCLG1CQUFjLEdBQWUsRUFBRSxDQUFDO1FBQ2hDLGdCQUFXLEdBQWUsRUFBRSxDQUFDO1FBQzdCLGFBQVEsR0FBZSxFQUFFLENBQUM7UUFDMUIsY0FBUyxHQUFlLEVBQUUsQ0FBQztRQUMzQixxQkFBZ0IsR0FBZSxFQUFFLENBQUM7UUFHbEMsYUFBUSxHQUFrQixFQUFFLENBQUM7UUFFNUIsUUFBRyxHQUFXLE9BQU8sQ0FBQztRQUN2QixVQUFLLEdBQVcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFJekMsZUFBVSxHQUFDLEVBQUUsQ0FBQztRQUNmLFFBQUcsR0FBRyxDQUFDLENBQUM7UUFDUixhQUFRLEdBQUcsQ0FB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UnpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTTtRQUVoQixvRkFBb0M7O0tBRXZDLENBQUM7SUFDRCxpQkFBVSxFQUFFO3FDQTREaUIsaUJBQVUsRUFBb0IscUNBQWlCLEVBQTRCLHlCQUFnQixFQUF3Qiw0QkFBWTtHQTFEaEosYUFBYSxDQW15QnpCO0FBbnlCWSxzQ0FBYSIsImZpbGUiOiJidW5kbGUuODA5MTQ2OWM5NjY3MDFhODcxODIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCJ1aS9zZWFyY2gtYmFyXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIn4vYXBwLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBTY3JvbGxWaWV3LCBTY3JvbGxFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zY3JvbGwtdmlld1wiO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IGdldEZyYW1lQnlJZCwgRnJhbWUsIEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XG5pbXBvcnQgeyBUb2tlbk1vZGVsLCBBdXRvQ29tcGxldGVFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWF1dG9jb21wbGV0ZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBpc0lPUywgaXNBbmRyb2lkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XG52YXIgdXRpbGl0eU1vZHVsZSA9IHJlcXVpcmUoXCJ1dGlscy91dGlsc1wiKTtcbmRlY2xhcmUgY29uc3QgVUlBcHBsaWNhdGlvbjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgTXlIdHRwR2V0U2VydmljZTIgfSBmcm9tIFwiLi9odHRwLWdldC5zZXJ2aWNlc1wiOyAgXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3JcIjtcbmltcG9ydCB7IEFueVR4dFJlY29yZCB9IGZyb20gXCJkbnNcIjtcbmltcG9ydCB7IGdldFN0cmluZyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGlzQnVzeTogYm9vbGVhbiA9IHRydWU7XG4gICAgcmFuZG9tOiBhbnk7XG4gICAgcmVzdWx0OiBBcnJheTxhbnk+ID0gW107IFxuICAgIHJlc3VsdDI6IEFycmF5PGFueT4gPSBbXTsgXG4gICAgcmVzdWx0MzogQXJyYXk8YW55PiA9IFtdOyBcbiAgICByZXN1bHQ0OiBBcnJheTxhbnk+ID0gW107IFxuICAgIHJlc3VsdFNlbGVjdGVkOiBBcnJheTxhbnk+ID0gW107IFxuICAgIHN1Z2dlc3Rpb25zOiBBcnJheTxhbnk+ID0gW107XG4gICAgZmlsdGVyZWQ6IEFycmF5PGFueT4gPSBbXTtcbiAgICBmaWx0ZXJlZDI6IEFycmF5PGFueT4gPSBbXTtcbiAgICBTZWxlY3RlZEZpbHRlcmVkOiBBcnJheTxhbnk+ID0gW107XG4gICAgc3VnZ2VzdDogT2JzZXJ2YWJsZUFycmF5PFRva2VuTW9kZWw+O1xuICBcdGRiOiBhbnk7XG4gICAgc2VsZWN0ZWQ6IEFycmF5PE9iamVjdD4gPSBbXTtcbiAgICB1c2VyX2lkOiBzdHJpbmc7XG4gICAgIHVybDogc3RyaW5nID0gXCI8dXJsPlwiOyBcbiAgICB2YWx1ZTpib29sZWFuID0gdXRpbHMuaXNEYXRhVVJJKHRoaXMudXJsKTtcbiAgICBAVmlld0NoaWxkKFwibW92aWVTaG93XCIse3N0YXRpYzogZmFsc2V9KSBtb3ZpZVNob3c6IEVsZW1lbnRSZWY7XG4gICAgIEBWaWV3Q2hpbGQoXCJtZWQyXCIsIHtzdGF0aWM6IGZhbHNlfSkgbWVkMjogRWxlbWVudFJlZjtcbiAgICAgQFZpZXdDaGlsZChcIm1lZDNcIix7c3RhdGljOiBmYWxzZX0pIG1lZDM6IEVsZW1lbnRSZWY7XG4gICAgIG1vdmllX3Nob3c9XCJcIjtcbiAgICBzdW0gPSAwO1xuICAgIHN1bVRvdGFsID0gMDtcbiAgICBzdW1EZWF0aHMgPSAwO1xuICAgIHN1bXBvcD0wO1xuICAgIHN1bWFjdGl2ZT0wO1xuICAgIHN1bXJlY292ZXJlZD0wO1xuICAgIGlzTm90TG9nZ2VkSW49IHRydWU7XG4gICAgaXNIb21lcGFnZSA9IHRydWU7XG4gICAgcmVkPXRydWU7XG4gICAgZ3JlZW49dHJ1ZTtcbiAgICBvcmFuZ2U9dHJ1ZTtcbiAgICBjcmVhdGVBbmRVcGRhdGU6IGFueTtcbiAgICBtZWRIZXJiU3VwOiBBcnJheTxPYmplY3Q+ID0gW107XG4gICAgaXNOb3RTZWFyY2g9IHRydWU7XG4gICAgZnJhbWUgPSBGcmFtZS5nZXRGcmFtZUJ5SWQoXCJteUZyYW1lXCIpO1xuICAgIGlzU2Nhbj10cnVlO1xuICByZXN1bHRVcENvbWluZzogQXJyYXk8YW55PiA9IFtdOyBcbiAgVXBDb21pbmdJbWFnZTogQXJyYXk8YW55PiA9IFtdOyBcbiAgZmlsdGVyZWRVcENvbWluZzogQXJyYXk8YW55PiA9IFtdOyBcbiAgcmVzdWx0VHJlbmRpbmdTaG93czogQXJyYXk8YW55PiA9IFtdOyBcbiAgVHJlbmRpbmdTaG93c0ltYWdlOkFycmF5PGFueT4gPSBbXTsgXG4gIGZpbHRlcmVkVHJlbmRpbmdTaG93czogQXJyYXk8YW55PiA9IFtdOyBcbiAgcmVzdWx0UmVjZW50bHlBZGRlZDogYW55O1xuICBSZWNlbnRseUFkZGVkSW1hZ2U6IGFueTtcbiAgZmlsdGVyZWRSZWNlbnRseUFkZGVkOiBhbnk7XG5cbiAgICBcblxuXG4gICAgb25CdXN5Q2hhbmdlZChhcmdzOiBFdmVudERhdGEpIHtcbiAgICAgIGxldCBpbmRpY2F0b3I6IEFjdGl2aXR5SW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPmFyZ3Mub2JqZWN0O1xuICAgICAgY29uc29sZS5sb2coXCJpbmRpY2F0b3IuYnVzeSBjaGFuZ2VkIHRvOiBcIiArIGluZGljYXRvci5idXN5KTtcbiAgfVxuICAgXG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LHByaXZhdGUgbXlTZXJ2aWNlOiBNeUh0dHBHZXRTZXJ2aWNlMiwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGFwcGNvbXBvbmVudDogQXBwQ29tcG9uZW50KSB7XG5cbiAgICAgIFxuXG4gICAgICAgXG4gICAgfSBcbiAgICBcblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgXG4gICAgICAvLyB0aGlzLmV4dHJhY3REYXRhKCk7XG4gICAgICB0aGlzLmV4dHJhY3RPbkFpcigpO1xuICAgICAgdGhpcy5leHRyYWN0VHJlbmRpbmdTaG93cygpO1xuICAgICAgdGhpcy5leHRyYWN0VXBDb21pbmcoKTtcbiAgICAgIHRoaXMuZXh0cmFjdFRyZW5kaW5nTW92aWVzKCk7XG4gICAgICAvLyB0aGlzLnNlbGVjdEl0ZW1zKCk7XG4gICAgfVxuICAvLyAgIGV4dHJhY3REYXRhKCkge1xuICAvLyAgICAgdGhpcy5teVNlcnZpY2UuZ2V0QWxsKClcbiAgLy8gICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgLy8gICAgICAgICAgICAgdGhpcy5zdWdnZXN0aW9uKHJlc3VsdCk7XG4gICAgICAgICAgICAgIFxuICAvLyAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIC8vICAgICAgICAgfSk7XG4gIC8vIH1cbiAgXG4vLyAgIHNlbGVjdEl0ZW1zKCkge1xuLy8gICAgIHRoaXMuZGlzbWlzc0tleWJvYXJkKCk7XG4gICBcbi8vICAgICBpZiAoIXRoaXMuaXNIb21lcGFnZSl7XG4vLyAgICAgICB0aGlzLnJlc3VsdD1bXTtcbi8vICAgICAgIHRoaXMubXlTZXJ2aWNlLmdldEluZm8oKVxuICAgXG4vLyAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICBcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBvYmplY3RcIixyZXN1bHQpXG4vLyAgICAgICAgIHRoaXMub25HZXREYXRhU3VjY2VzcyhyZXN1bHQpXG4gICAgICAgICAgXG4gICAgICAgICAgXG4vLyAgICAgICB9LCAoZXJyb3IpID0+IHtcbi8vICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4vLyAgICAgICB9KTtcblxuLy8gICAgIH1cbi8vICAgICBlbHNle1xuLy8gICAgICAgdGhpcy5pc0hvbWVwYWdlID0gIXRoaXMuaXNIb21lcGFnZTtcbi8vICAgICAgIHRoaXMubXlTZXJ2aWNlLmdldEluZm8oKVxuICAgXG4vLyAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICBcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBvYmplY3RcIixyZXN1bHQpXG4vLyAgICAgICAgIHRoaXMub25HZXREYXRhU3VjY2VzcyhyZXN1bHQpXG4gICAgICAgICAgXG4gICAgICAgICAgXG4vLyAgICAgICB9LCAoZXJyb3IpID0+IHtcbi8vICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4vLyAgICAgICB9KTtcbi8vICAgICB9XG4gIFxuXG4vLyB9IFxuXG5vbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHsgXG4gIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gIGNvbnNvbGUubG9nKFwiZHJhd2VyMVwiKVxuICBcbn1cblxucHJpdmF0ZSBvbkdldERhdGFTdWNjZXNzKHJlcykge1xuXG5mb3IgKGxldCBrZXkgaW4gcmVzLnJlc3BvbnNlKSB7XG4gIHRoaXMucmVzdWx0LnB1c2goe3ZhbHVlOiByZXMucmVzcG9uc2Vba2V5XX0pO1xuICBjb25zb2xlLmxvZyhcInRoaXMgYXJyYXlcIiwgdGhpcy5yZXN1bHQpO1xufVxuXG4gIH1cbiAgb25TY3JvbGwoYXJnczogU2Nyb2xsRXZlbnREYXRhKSB7XG4gICAgY29uc3Qgc2Nyb2xsVmlldyA9IGFyZ3Mub2JqZWN0IGFzIFNjcm9sbFZpZXc7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcInNjcm9sbFg6IFwiICsgYXJncy5zY3JvbGxYKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcInNjcm9sbFk6IFwiICsgYXJncy5zY3JvbGxZKTtcbn1cblxuZXh0cmFjdE9uQWlyKCkge1xuICAvLyBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGV4dHJhY3RcIilcbiAgLy8gdGhpcy5teVNlcnZpY2UuZ2V0T25BaXIoKVxuICAvLyAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKFwiT04gQUlSIE9OIEFJUiBPTiBBSVJcIiwgcmVzdWx0KVxuICAgICAgICBjb25zdCByZXN1bHQ9IHsgIFwidHZfcmVzdWx0c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIllvd2lzIEJlbjogVGhlIFNlcmllc1wiLFxuICAgICAgICAgICAgXCJpbWRiX2lkXCI6IFwidHQxMzAzOTA0MlwiLFxuICAgICAgICAgICAgIFwieWVhclwiOiBcIjIwMjBcIlxuICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRvIGthZmUgdGlzIEhhcmFzXCIsXG4gICAgICAgICAgIFwiaW1kYl9pZFwiOiBcInR0MDM4NDc0NVwiLFxuICAgICAgICAgICAgXCJ5ZWFyXCI6IFwiMjAwM1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiQmV0dHlzIERpYWdub3NlXCIsXG4gICAgICAgICAgICBcImltZGJfaWRcIjogXCJ0dDQzMTA0MjZcIixcbiAgICAgICAgICAgIFwieWVhclwiOiBcIjIwMTVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgIHtcbiAgICAgICAgICAgICBcInRpdGxlXCI6IFwiRHLDoWdhIMO2csO2a8O2c8O2a1wiLFxuICAgICAgICAgICBcImltZGJfaWRcIjogXCJ0dDk0ODA0MzJcIixcbiAgICAgICAgICAgXCJ5ZWFyXCI6IFwiMjAxOVwiXG4gICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICBcInRpdGxlXCI6IFwiSGF1dGUgRG9nXCIsXG4gICAgICAgICAgIFwiaW1kYl9pZFwiOiBcInR0MTMwNjQyMDZcIixcbiAgICAgICAgICAgXCJ5ZWFyXCI6IFwiMjAyMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEFtYmVyIFJ1ZmZpbiBTaG93XCIsXG4gICAgICAgICAgICBcImltZGJfaWRcIjogXCJ0dDExMDU4MDc4XCIsXG4gICAgICAgICAgICAgXCJ5ZWFyXCI6IFwiMjAyMFwiXG4gICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJNYWdpYyBvZiBEaXNuZXkncyBBbmltYWwgS2luZ2RvbVwiLFxuICAgICAgICAgICBcImltZGJfaWRcIjogXCJ0dDEwMTk2Mzc4XCIsXG4gICAgICAgICAgXCJ5ZWFyXCI6IFwiMjAyMFwiXG4gICAgICAgICB9LFxuICAgICAgICAge1xuICAgICAgICAgICBcInRpdGxlXCI6IFwiWmVodSBaZVwiLFxuICAgICAgICAgICBcImltZGJfaWRcIjogXCJ0dDAwNzcxMDhcIixcbiAgICAgICAgICAgIFwieWVhclwiOiBcIjE5NzhcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBTY2hvb2wgTnVyc2UgRmlsZXNcIixcbiAgICAgICAgICAgIFwiaW1kYl9pZFwiOiBcInR0MTI4Nzk1MjJcIixcbiAgICAgICAgICAgIFwieWVhclwiOiBcIjIwMjBcIlxuICAgICAgICAgIH1dfVxuICAgICAgICAgIHRoaXMub25HZXRTdGF0aWNzKHJlc3VsdCk7XG4gICAgICAgICAgXG4gICAgICAvLyB9LCAoZXJyb3IpID0+IHtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAvLyB9KTtcbn1cblxucHJpdmF0ZSBvbkdldFN0YXRpY3MocmVzKSB7XG4gIFxuIFxuXG4gIGZvciAobGV0IGtleSBpbiByZXMudHZfcmVzdWx0cykge1xuICAgIFxuICAgIHRoaXMucmVzdWx0Mi5wdXNoKHt2YWx1ZTogcmVzLnR2X3Jlc3VsdHNba2V5XX0pO1xuICBcbiAgICAvLyBjb25zb2xlLmxvZyhcInJlc3VsdGluZyBpbiBcIix0aGlzLnJlc3VsdDIpO1xuICBcbiAgXG4gIH1cbiAgXG4gIHRoaXMucmVzdWx0Mi5mb3JFYWNoKG9iaiA9PiB7XG4gICAgdGhpcy5leHRyYWN0SW1hZ2Uob2JqLnZhbHVlLmltZGJfaWQpO1xuICAgfSk7XG4gIFxuICBcbiAgXG4gICAgfVxuICAgIGV4dHJhY3RJbWFnZSh2YWx1ZSkge1xuXG4gICAgICB0aGlzLm15U2VydmljZS5nZXRJbWFnZU5hbWUodmFsdWUpXG4gICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGltYWdlIHJlc3VsdCBcIiwgcmVzdWx0KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHRoaXMub25HZXRJbWFnZShyZXN1bHQpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgIG9uR2V0SW1hZ2UocmVzKSB7XG4gICAgICBcbiAgICBcbiAgICAgIGZvciAobGV0IGtleSBpbiByZXMpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZmlsdGVyZWQucHVzaCh7aW1hZ2U6IHJlc30pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIklNQUdFIFJFc3VsdCBcIix0aGlzLnJlc3VsdCk7XG4gICAgXG4gICAgICAgIHRoaXMucmVzdWx0PSB0aGlzLmZpbHRlcmVkLnJlZHVjZSgoYWNjLCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgeCA9IGFjYy5maW5kKGl0ZW0gPT4gaXRlbS5pbWFnZSA9PT0gY3VycmVudC5pbWFnZSk7XG4gICAgICAgICAgaWYgKCF4KSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjLmNvbmNhdChbY3VycmVudF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgW10pO1xuICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZmlsdGVyZWQnLCB0aGlzLmZpbHRlcmVkKTtcbiAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgXG4gICAgICBcbiAgICAgICAgfVxuXG5leHRyYWN0VHJlbmRpbmdNb3ZpZXMoKSB7XG4gIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgZXh0cmFjdCBUcmVuZGluZyBNb3ZpZXNcIilcbiAgLy8gdGhpcy5teVNlcnZpY2UuZ2V0VHJlbmRpbmdNb3ZpZXMoKVxuICAvLyAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVFJFTkRJTmcgVFJFTkRJTkdcIiwgcmVzdWx0KVxuICAgICAgICBjb25zdCByZXN1bHQ9ICB7XG4gICAgICAgICAgXCJtb3ZpZV9yZXN1bHRzXCI6IFtcbiAgICAgICAgXG4gICAgICAgICAgIHtcbiAgICAgICAgICAgICBcInRpdGxlXCI6IFwiRG9uJ3QgUmVhZCBUaGlzIE9uIGEgUGxhbmVcIixcbiAgICAgICAgICBcInllYXJcIjogXCIwXCIsXG4gICAgICAgICAgICBcImltZGJfaWRcIjogXCJ0dDc1MjU3OTJcIlxuICAgICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJCcnV0dXMgVnMgQ8Opc2FyXCIsXG4gICAgICAgICAgICBcInllYXJcIjogXCIyMDIwXCIsXG4gICAgICAgICAgICBcImltZGJfaWRcIjogXCJ0dDEwNTU3NTI0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaW1kYl9pZFwiOlwidHQwNDIzNzEzXCIsXG4gICAgICAgICAgICBcInRpdGxlXCI6XCJQbHVzIGJlbGxlIGxhIHZpZVwiLFxuICAgICAgICAgICAgXCJ5ZWFyXCI6XCIyMDA0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgICAgdGhpcy5vbkdldFRyZW5kaW5nTW92aWVzKHJlc3VsdCk7XG4gICAgICAgICAgXG4gICAgICAvLyB9LCAoZXJyb3IpID0+IHtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAvLyB9KTtcbn1cblxucHJpdmF0ZSBvbkdldFRyZW5kaW5nTW92aWVzKHJlcykge1xuICBcbiBcblxuICBmb3IgKGxldCBrZXkgaW4gcmVzLm1vdmllX3Jlc3VsdHMpIHtcbiAgICBcbiAgICB0aGlzLnJlc3VsdDMucHVzaCh7dmFsdWU6IHJlcy5tb3ZpZV9yZXN1bHRzW2tleV19KTtcbiAgXG4gICAgLy8gY29uc29sZS5sb2coXCJyZXN1bHRpbmcgaW4gXCIsdGhpcy5yZXN1bHQyKTtcbiAgXG4gIFxuICB9XG4gIFxuICB0aGlzLnJlc3VsdDMuZm9yRWFjaChvYmogPT4ge1xuICAgIHRoaXMuZXh0cmFjdEltYWdlMihvYmoudmFsdWUuaW1kYl9pZCk7XG4gICB9KTtcbiAgXG4gIFxuICBcbiAgICB9XG5cbiAgICBleHRyYWN0SW1hZ2UyKHZhbHVlKSB7XG5cbiAgICAgIHRoaXMubXlTZXJ2aWNlLmdldEltYWdlTmFtZTIodmFsdWUpXG4gICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGltYWdlIHJlc3VsdCBcIiwgcmVzdWx0KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHRoaXMub25HZXRJbWFnZTIocmVzdWx0KTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgICBvbkdldEltYWdlMihyZXMpIHtcbiAgICAgIFxuICAgIFxuICAgICAgZm9yIChsZXQga2V5IGluIHJlcykge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5maWx0ZXJlZDIucHVzaCh7aW1hZ2U6IHJlc30pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIklNQUdFIFJFc3VsdCBcIix0aGlzLnJlc3VsdCk7XG4gICAgXG4gICAgICAgIHRoaXMucmVzdWx0ND0gdGhpcy5maWx0ZXJlZDIucmVkdWNlKChhY2MsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgICBjb25zdCB4ID0gYWNjLmZpbmQoaXRlbSA9PiBpdGVtLmltYWdlID09PSBjdXJyZW50LmltYWdlKTtcbiAgICAgICAgICBpZiAoIXgpIHtcbiAgICAgICAgICAgIHJldHVybiBhY2MuY29uY2F0KFtjdXJyZW50XSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBbXSk7XG4gICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdmaWx0ZXJlZCcsIHRoaXMuZmlsdGVyZWQpO1xuICAgICBcbiAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIFxuXG5cblxuXG5cbiAgICAgIHRoaXMucmFuZG9tPXRoaXMucmVzdWx0NFtNYXRoLmZsb29yKCBNYXRoLnJhbmRvbSgpKjIpXS5pbWFnZS5wb3N0ZXI7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnJhbmRvbSlcbiAgICAgIFxuICAgICAgICB9XG4gICAgIFxuICAgICAgICBcbmV4dHJhY3RVcENvbWluZygpIHtcbiAgLy8gY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBleHRyYWN0XCIpXG4gIC8vIHRoaXMubXlTZXJ2aWNlLmdldE9uVXBDb21pbmcoKVxuICAvLyAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKFwiT04gQUlSIE9OIEFJUiBPTiBBSVJcIiwgcmVzdWx0KVxuICAgICAgICBjb25zdCByZXN1bHQ9IHsgIFwibW92aWVfcmVzdWx0c1wiOiBbe1xuICAgICAgICAgIFwiaW1kYl9pZFwiOlwidHQxMDY0ODE5OFwiLFxuICAgICAgICAgIFwidGl0bGVcIjpcIkRpbWUgQ3XDoW5kbyBUw7pcIixcbiAgICAgICAgICBcInllYXJcIjpcIjIwMjBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDEwNjg3NzQwXCIsXG4gICAgICAgICAgICBcInRpdGxlXCI6XCJQcmluY2V6bmEgemFrbGV0w6EgdiDEjWFzZVwiLFxuICAgICAgICAgICAgXCJ5ZWFyXCI6XCIyMDIwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICBcImltZGJfaWRcIjpcInR0MTE2MjIyNzJcIixcbiAgICAgICAgICBcInRpdGxlXCI6XCJTcHJpbmcgVWplIHNwcmluZ1wiLFxuICAgICAgICAgIFwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImltZGJfaWRcIjpcInR0MTEzNTQxNjRcIixcbiAgICAgICAgICAgIFwidGl0bGVcIjpcIuiAgeW+jOOBruizh+mHkeOBjOOBguOCiuOBvuOBm+OCk1wiLFxuICAgICAgICAgICAgXCJ5ZWFyXCI6XCIyMDIwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaW1kYl9pZFwiOlwidHQxMDQzMTMzMlwiLFxuXCJ0aXRsZVwiOlwiTGVnZW5kIFF1ZXN0OiBUaGUgT3JpZ2luXCIsXG5cInllYXJcIjpcIjIwMjBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDExNjk3NjkwXCIsXG5cInRpdGxlXCI6XCJUaGUgV29tYW4gV2hvIFJhblwiLFxuXCJ5ZWFyXCI6XCIyMDIwXCJcbiAgICAgICAgICB9XX1cbiAgICAgICAgXG4gICAgICAgICAgdGhpcy5vbkdldFVwQ29taW5nKHJlc3VsdCk7XG4gICAgICAgICAgXG4gICAgICAvLyB9LCAoZXJyb3IpID0+IHtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAvLyB9KTtcbn1cblxucHJpdmF0ZSBvbkdldFVwQ29taW5nKHJlcykge1xuICBcbiBcblxuICBmb3IgKGxldCBrZXkgaW4gcmVzLm1vdmllX3Jlc3VsdHMpIHtcbiAgICBcbiAgICB0aGlzLnJlc3VsdFVwQ29taW5nLnB1c2goe3ZhbHVlOiByZXMubW92aWVfcmVzdWx0c1trZXldfSk7XG4gIFxuICAgIC8vIGNvbnNvbGUubG9nKFwicmVzdWx0aW5nIGluIFwiLHRoaXMucmVzdWx0Mik7XG4gIFxuICBcbiAgfVxuICBcbiAgdGhpcy5yZXN1bHRVcENvbWluZy5mb3JFYWNoKG9iaiA9PiB7XG4gICAgdGhpcy5leHRyYWN0SW1hZ2VVcENvbWluZyhvYmoudmFsdWUuaW1kYl9pZCk7XG4gICB9KTtcbiAgXG4gIFxuICBcbiAgICB9XG4gICAgZXh0cmFjdEltYWdlVXBDb21pbmcodmFsdWUpIHtcblxuICAgICAgdGhpcy5teVNlcnZpY2UuZ2V0SW1hZ2VOYW1lKHZhbHVlKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBpbWFnZSByZXN1bHQgXCIsIHJlc3VsdClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICB0aGlzLm9uR2V0SW1hZ2VVcENvbWluZyhyZXN1bHQpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgIG9uR2V0SW1hZ2VVcENvbWluZyhyZXMpIHtcbiAgICAgIFxuICAgIFxuICAgICAgZm9yIChsZXQga2V5IGluIHJlcykge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5VcENvbWluZ0ltYWdlLnB1c2goe2ltYWdlOiByZXN9KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJJTUFHRSBSRXN1bHQgXCIsdGhpcy5yZXN1bHQpO1xuICAgIFxuICAgICAgICB0aGlzLmZpbHRlcmVkVXBDb21pbmc9IHRoaXMuVXBDb21pbmdJbWFnZS5yZWR1Y2UoKGFjYywgY3VycmVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHggPSBhY2MuZmluZChpdGVtID0+IGl0ZW0uaW1hZ2UgPT09IGN1cnJlbnQuaW1hZ2UpO1xuICAgICAgICAgIGlmICgheCkge1xuICAgICAgICAgICAgcmV0dXJuIGFjYy5jb25jYXQoW2N1cnJlbnRdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9XG4gICAgICAgIH0sIFtdKTtcbiAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZpbHRlcmVkJywgdGhpcy5maWx0ZXJlZCk7XG4gICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZXh0cmFjdFRyZW5kaW5nU2hvd3MoKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBleHRyYWN0XCIpXG4gICAgICAgICAgLy8gdGhpcy5teVNlcnZpY2UuZ2V0T25UcmVuZGluZ1Nob3coKVxuICAgICAgICAgIC8vICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAvLyAgICAgICBjb25zb2xlLmxvZyhcIk9OIEFJUiBPTiBBSVIgT04gQUlSXCIsIHJlc3VsdClcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQ9IHsgIFwidHZfcmVzdWx0c1wiOiBbe1xuICAgICAgICAgICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDEyNjI0ODQ0XCIsXG4gICAgICAgICAgICAgICAgICBcInRpdGxlXCI6XCJUaGUgR3JlYXQgSGVpc3RcIixcbiAgICAgICAgICAgICAgICAgIFwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImltZGJfaWRcIjpcInR0OTg0OTIxMFwiLFxuICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6XCJCaW9oYWNrZXJzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImltZGJfaWRcIjpcInR0MTA2MjM1NTBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOlwiVGhlIEZ1Z2l0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImltZGJfaWRcIjpcInR0NjkwNTY4NlwiLFxuICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6XCJMb3ZlY3JhZnQgQ291bnRyeVwiLFxuICAgICAgICAgICAgICAgICAgICBcInllYXJcIjpcIjIwMjBcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDEwNTg0NjA4XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjpcIlRlZW5hZ2UgQm91bnR5IEh1bnRlcnNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ5ZWFyXCI6XCIyMDIwXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaW1kYl9pZFwiOlwidHQxMDk4NjQxMFwiLFxuICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6XCJUZWQgTGFzc29cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ5ZWFyXCI6XCIyMDIwXCJcbiAgICAgICAgICAgICAgICAgIH1dfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgdGhpcy5vbkdldFRyZW5kaW5nU2hvd3MocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHByaXZhdGUgb25HZXRUcmVuZGluZ1Nob3dzKHJlcykge1xuICAgICAgICAgIFxuICAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAgIGZvciAobGV0IGtleSBpbiByZXMudHZfcmVzdWx0cykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnJlc3VsdFRyZW5kaW5nU2hvd3MucHVzaCh7dmFsdWU6IHJlcy50dl9yZXN1bHRzW2tleV19KTtcbiAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVzdWx0aW5nIGluIFwiLHRoaXMucmVzdWx0Mik7XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIHRoaXMucmVzdWx0VHJlbmRpbmdTaG93cy5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgICB0aGlzLmV4dHJhY3RJbWFnZVRyZW5kaW5nU2hvd3Mob2JqLnZhbHVlLmltZGJfaWQpO1xuICAgICAgICAgICB9KTtcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV4dHJhY3RJbWFnZVRyZW5kaW5nU2hvd3ModmFsdWUpIHtcbiAgICAgICAgXG4gICAgICAgICAgICAgIHRoaXMubXlTZXJ2aWNlLmdldEltYWdlTmFtZSh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGltYWdlIHJlc3VsdCBcIiwgcmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uR2V0SW1hZ2VUcmVuZGluZ1Nob3dzKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgIG9uR2V0SW1hZ2VUcmVuZGluZ1Nob3dzKHJlcykge1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gcmVzKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5UcmVuZGluZ1Nob3dzSW1hZ2UucHVzaCh7aW1hZ2U6IHJlc30pO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSU1BR0UgUkVzdWx0IFwiLHRoaXMucmVzdWx0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRUcmVuZGluZ1Nob3dzPSB0aGlzLlRyZW5kaW5nU2hvd3NJbWFnZS5yZWR1Y2UoKGFjYywgY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgeCA9IGFjYy5maW5kKGl0ZW0gPT4gaXRlbS5pbWFnZSA9PT0gY3VycmVudC5pbWFnZSk7XG4gICAgICAgICAgICAgICAgICBpZiAoIXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYy5jb25jYXQoW2N1cnJlbnRdKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZpbHRlcmVkJywgdGhpcy5maWx0ZXJlZCk7XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXh0cmFjdFJlY2VudGx5QWRkZWQoKSB7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGV4dHJhY3RcIilcbiAgICAgICAgICAgICAgICAgIC8vIHRoaXMubXlTZXJ2aWNlLmdldE9uUmVjZW50bHlBZGRlZCgpXG4gICAgICAgICAgICAgICAgICAvLyAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAvLyAgICAgICBjb25zb2xlLmxvZyhcIk9OIEFJUiBPTiBBSVIgT04gQUlSXCIsIHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdD0geyAgXCJ0dl9yZXN1bHRzXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1kYl9pZFwiOlwidHQxMDY4MTYxNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6XCJUaGUgRGVjZWl2ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ5ZWFyXCI6XCIyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1kYl9pZFwiOlwidHQxMjc1MzY5MlwiLFxuXCJ0aXRsZVwiOlwiQ29ubmVjdGVkOiBUaGUgSGlkZGVuIFNjaWVuY2Ugb2YgRXZlcnl0aGluZ1wiLFxuXCJ5ZWFyXCI6XCIyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1kYl9pZFwiOlwidHQ5MjA4ODc2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOlwiVGhlIEZhbGNvbiBhbmQgdGhlIFdpbnRlciBTb2xkaWVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ5ZWFyXCI6XCIyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1kYl9pZFwiOlwidHQxMDg1NzIxMFwiLFxuXCJ0aXRsZVwiOlwiTXVwcGV0cyBOb3dcIixcblwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImltZGJfaWRcIjpcInR0MTI3OTIwMDRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6XCJUaGUgT3ByYWggQ29udmVyc2F0aW9uXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImltZGJfaWRcIjpcInR0OTc4OTY2MFwiLFxuXCJ0aXRsZVwiOlwiVHJhbnNmb3JtZXJzOiBXYXIgZm9yIEN5YmVydHJvbiBUcmlsb2d5XCIsXG5cInllYXJcIjpcIjIwMjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XX1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uR2V0UmVjZW50bHlBZGRlZChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAvLyB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBwcml2YXRlIG9uR2V0UmVjZW50bHlBZGRlZChyZXMpIHtcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiByZXMudHZfcmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRSZWNlbnRseUFkZGVkLnB1c2goe3ZhbHVlOiByZXMudHZfcmVzdWx0c1trZXldfSk7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZXN1bHRpbmcgaW4gXCIsdGhpcy5yZXN1bHQyKTtcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0UmVjZW50bHlBZGRlZC5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdEltYWdlVHJlbmRpbmdTaG93cyhvYmoudmFsdWUuaW1kYl9pZCk7XG4gICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZXh0cmFjdEltYWdlUmVjZW50bHlBZGRlZCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlTZXJ2aWNlLmdldEltYWdlTmFtZSh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBpbWFnZSByZXN1bHQgXCIsIHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25HZXRSZWNlbnRseUFkZGVkKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICBvbkdldEltYWdlUmVjZW50bHlBZGRlZChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlY2VudGx5QWRkZWRJbWFnZS5wdXNoKHtpbWFnZTogcmVzfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIklNQUdFIFJFc3VsdCBcIix0aGlzLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJlZFJlY2VudGx5QWRkZWQ9IHRoaXMuUmVjZW50bHlBZGRlZEltYWdlLnJlZHVjZSgoYWNjLCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHggPSBhY2MuZmluZChpdGVtID0+IGl0ZW0uaW1hZ2UgPT09IGN1cnJlbnQuaW1hZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjLmNvbmNhdChbY3VycmVudF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZmlsdGVyZWQnLCB0aGlzLmZpbHRlcmVkKTtcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgXG4vLyAgICAgZ2V0SW1hZ2VOYW1lKHZhbHVlKSB7XG4vLyAgICAgICB2YXIgbG93ZXI9dmFsdWUuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKGxvd2VyKTtcbi8vICAgICAgIHJldHVybiBgfi9pbWFnZXMvJHtsb3dlcn0ucG5nYDtcbi8vICAgfVxuXG5cblxuXG4gIFxuXG4gICBcbi8vIGFkZEludGVyYWN0aW9uKG1lZEhlcmJTdXA6IHN0cmluZykge1xuLy8gICBjb25zb2xlLmxvZyhcImFkZCBtZWRIZXJiU3VwXCIsIG1lZEhlcmJTdXApXG4vLyAgICAgZGlhbG9ncy5hY3Rpb24oe1xuLy8gICAgICAgIHRpdGxlOiBcIkFyZSB5b3Ugc3VyZSB0aGF0IHlvdSB3YW50IHRvIGFkZCB0aGlzIG1lZGljaW5lIHRvIHlvdXIgbGlzdD9cIixcbi8vICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuLy8gICAgICAgYWN0aW9uczogW1wiWWVzXCIsIFwiTm9cIl1cbi8vICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG4vLyAgICAgICBpZiAocmVzdWx0ID09IFwiWWVzXCIpIHtcbi8vICAgICAgICB0aGlzLm1lZEhlcmJTdXBfbmFtZSA9IG1lZEhlcmJTdXA7XG4vLyAgICAgICAgdGhpcy5tZWRpY2luZV9mb3JtID0gXCJQaWxsXCI7XG4vLyAgICAgICAgIHRoaXMuZGIuZXhlY1NRTChcIklOU0VSVCBJTlRPIG1lZGljaW5lcyAobWVkaWNpbmVzX25hbWUsIG1lZGljaW5lX2Rvc2FnZSwgbWVkaWNpbmVfZm9ybSwgbWVkaWNpbmVfZnJlcXVlbmN5LCB1c2VyX2lkKSBWQUxVRVMgKD8sPyw/LD8sPylcIiwgW3RoaXMubWVkSGVyYlN1cF9uYW1lLCB0aGlzLm1lZGljaW5lX2Rvc2FnZSwgdGhpcy5tZWRpY2luZV9mb3JtLCB0aGlzLm1lZGljaW5lX2ZyZXF1ZW5jeSwgdGhpcy51c2VyX2lkXSkudGhlbihpZCA9PiB7XG4vLyAgICAgICAgICAgIHRoaXMubWVkaWNpbmVMaXN0LnVuc2hpZnQoe2lkOiBpZCwgbmFtZTogdGhpcy5tZWRIZXJiU3VwX25hbWUsIGRvc2FnZTogdGhpcy5tZWRpY2luZV9kb3NhZ2UsIGZvcm06IHRoaXMubWVkaWNpbmVfZm9ybSwgZnJlcXVlbmN5OnRoaXMubWVkaWNpbmVfZnJlcXVlbmN5fSk7XG4vLyAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIGFkZGluZyB3YXMgYSBzdWNlc3NcIiwgdGhpcy5tZWRpY2luZUxpc3QpO1xuLy8gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KCdNZWRpY2luZSBzYXZlZCBzdWNjZXNzZnVsbHk6Jyk7XG4gICAgICAgICAgIFxuLy8gICAgICAgIH0sIGVycm9yID0+IHtcbi8vICAgICAgICAgICAgY29uc29sZS5sb2coJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGFkZGluZyBhbiBpdGVtIHRvIHlvdXIgbGlzdC4nLCBlcnJvcik7XG4vLyAgICAgICAgICAgIHRoaXMubWVkSGVyYlN1cF9uYW1lID0gXCJcIjtcbi8vICAgICAgICAgICAgdGhpcy5tZWRpY2luZV9kb3NhZ2UgPSBcIlwiO1xuLy8gICAgICAgICAgICB0aGlzLm1lZGljaW5lX2Zvcm0gPSBcIlwiO1xuLy8gICAgICAgICAgICB0aGlzLm1lZGljaW5lX2ZyZXF1ZW5jeSA9IFwiXCI7XG4vLyAgICAgICAgfSk7XG5cbi8vICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09IFwiTm9cIikge1xuICAgICAgIFxuLy8gICAgICAgfVxuLy8gICAgIH0pO1xuLy8gICAgfVxuXG5zZWxlY3RlZFNlYXJjaChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICB0aGlzLnJlc3VsdFNlbGVjdGVkID0gW107XG4gIHRoaXMuU2VsZWN0ZWRGaWx0ZXJlZD1bXTtcbiAgdGhpcy5tb3ZpZV9zaG93PVwiXCI7XG5sZXQgc2VsZWN0ZWQ9IDxhbnk+YXJncy5vYmplY3QuYmluZGluZ0NvbnRleHQ7XG50aGlzLm1vdmllX3Nob3c9c2VsZWN0ZWQuaW1hZ2UuaWQ7XG4gIHRoaXMuaXNIb21lcGFnZSA9ICF0aGlzLmlzSG9tZXBhZ2U7XG4gY29uc29sZS5sb2coJyBnb3QgTU92aWVTaG93JywgdGhpcy5tb3ZpZV9zaG93KTtcbiB0aGlzLmV4dHJhY3RTZWxlY3RNb3ZpZVNob3codGhpcy5tb3ZpZV9zaG93KTtcblxufVxuXG5leHRyYWN0U2VsZWN0TW92aWVTaG93KHZhbHVlKSB7XG4gIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgZXh0cmFjdCBTZWxlY3RlZCBtb3ZpZVNob3dzXCIpXG4gIHRoaXMubXlTZXJ2aWNlLmdldFNlbGVjdGVkTW92aWVTaG93KHZhbHVlKVxuICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgcmVzdWx0XCIsIHJlc3VsdClcbiAgICAgICAgXG4gICAgICAgICAgdGhpcy5vbkdldFNlbGVjdE1vdmllU2hvdyhyZXN1bHQpO1xuICAgICAgICAgIFxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG59XG5cbnByaXZhdGUgb25HZXRTZWxlY3RNb3ZpZVNob3cocmVzKSB7XG4gIFxuIFxuXG4gIGZvciAobGV0IGtleSBpbiByZXMpIHtcbiAgICBcbiAgICBcbiAgICB0aGlzLlNlbGVjdGVkRmlsdGVyZWQucHVzaCh7dmFsdWU6IHJlc30pO1xuICBcbiAgICBcbiAgXG4gIFxuICB9XG4gIHRoaXMucmVzdWx0U2VsZWN0ZWQ9IHRoaXMuU2VsZWN0ZWRGaWx0ZXJlZC5yZWR1Y2UoKGFjYywgY3VycmVudCkgPT4ge1xuICAgIGNvbnN0IHggPSBhY2MuZmluZChpdGVtID0+IGl0ZW0uaW1hZ2UgPT09IGN1cnJlbnQuaW1hZ2UpO1xuICAgIGlmICgheCkge1xuICAgICAgcmV0dXJuIGFjYy5jb25jYXQoW2N1cnJlbnRdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gIH0sIFtdKTtcbiAgXG4gIFxuICBjb25zb2xlLmxvZyhcInJlc3VsdGluZyBpbiBcIix0aGlzLnJlc3VsdFNlbGVjdGVkKTtcbiAgXG4gIFxuICAgIH1cblxuICAgICBcbiAgIFxuICAgIG9uSG9tZVRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lXCJdKTtcbiAgICAgICAgaWYoIXRoaXMuaXNIb21lcGFnZSl7XG4gICAgICAgICAgdGhpcy5pc0hvbWVwYWdlPSF0aGlzLmlzSG9tZXBhZ2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25IaXN0b3J5VGFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hpc3RvcnlcIl0pO1xuICBcbiAgICB9XG5cblxuICAgIFxuICAgICBcbiAgICBcblxuICAgXG4gICAgICBkaXNtaXNzS2V5Ym9hcmQoKSB7XG4gICAgICAgIGlmIChpc0lPUykge1xuICAgICAgICAgIFVJQXBwbGljYXRpb24uc2hhcmVkQXBwbGljYXRpb24ua2V5V2luZG93LmVuZEVkaXRpbmcodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgICAgIHV0aWxzLmFkLmRpc21pc3NTb2Z0SW5wdXQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgXG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==