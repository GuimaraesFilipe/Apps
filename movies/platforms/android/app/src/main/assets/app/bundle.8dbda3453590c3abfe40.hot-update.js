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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0Esa0ZBQXFGO0FBQ3JGLDhGQUErRDtBQUMvRCxrRUFBNEM7QUFFNUMsdUZBQXNEO0FBQ3RELDRGQUEyRTtBQUczRSxrR0FBNkQ7QUFDN0QsSUFBSSxhQUFhLEdBQUcsbUJBQU8sQ0FBQyxtREFBYSxDQUFDLENBQUM7QUFFM0MsaUdBQW9EO0FBQ3BELCtFQUF3RDtBQUV4RCxvRkFBMkU7QUFlM0UsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQXVEdEIsWUFBb0IsSUFBZ0IsRUFBUyxTQUE0QixFQUFVLGdCQUFrQyxFQUFVLFlBQTBCO1FBQXJJLFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFtQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQXJEM0osV0FBTSxHQUFZLElBQUksQ0FBQztRQUVyQixXQUFNLEdBQWUsRUFBRSxDQUFDO1FBQ3hCLFlBQU8sR0FBZSxFQUFFLENBQUM7UUFDekIsWUFBTyxHQUFlLEVBQUUsQ0FBQztRQUN6QixZQUFPLEdBQWUsRUFBRSxDQUFDO1FBQ3pCLG1CQUFjLEdBQWUsRUFBRSxDQUFDO1FBQ2hDLGdCQUFXLEdBQWUsRUFBRSxDQUFDO1FBQzdCLGFBQVEsR0FBZSxFQUFFLENBQUM7UUFDMUIsY0FBUyxHQUFlLEVBQUUsQ0FBQztRQUMzQixxQkFBZ0IsR0FBZSxFQUFFLENBQUM7UUFHbEMsYUFBUSxHQUFrQixFQUFFLENBQUM7UUFFNUIsUUFBRyxHQUFXLE9BQU8sQ0FBQztRQUN2QixVQUFLLEdBQVcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFJekMsZUFBVSxHQUFDLEVBQUUsQ0FBQztRQUNmLFFBQUcsR0FBRyxDQUFDLENBQUM7UUFDUixhQUFRLEdBQUcsQ0FB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QUFNLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7OEJBQU8saUJBQVU7MkNBQUM7QUFDbEI7SUFBbEMsZ0JBQVMsQ0FBQyxNQUFNLEVBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7OEJBQU8saUJBQVU7MkNBQUM7QUFyQjVDLGFBQWE7SUFSekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNO1FBRWhCLG9GQUFvQzs7S0FFdkMsQ0FBQztJQUNELGlCQUFVLEVBQUU7cUNBeURpQixpQkFBVSxFQUFvQixxQ0FBaUIsRUFBNEIseUJBQWdCLEVBQXdCLDRCQUFZO0dBdkRoSixhQUFhLENBeXJCekI7QUF6ckJZLHNDQUFhIiwiZmlsZSI6ImJ1bmRsZS44ZGJkYTM0NTM1OTBjM2FiZmU0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwifi9hcHAuY29tcG9uZW50XCJcbmltcG9ydCB7IFNjcm9sbFZpZXcsIFNjcm9sbEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3Njcm9sbC12aWV3XCI7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiO1xuaW1wb3J0IHsgZ2V0RnJhbWVCeUlkLCBGcmFtZSwgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIjtcbmltcG9ydCB7IFRva2VuTW9kZWwsIEF1dG9Db21wbGV0ZUV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktYXV0b2NvbXBsZXRlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IGlzSU9TLCBpc0FuZHJvaWQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcbnZhciB1dGlsaXR5TW9kdWxlID0gcmVxdWlyZShcInV0aWxzL3V0aWxzXCIpO1xuZGVjbGFyZSBjb25zdCBVSUFwcGxpY2F0aW9uO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlMiB9IGZyb20gXCIuL2h0dHAtZ2V0LnNlcnZpY2VzXCI7ICBcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGl2aXR5LWluZGljYXRvclwiO1xuaW1wb3J0IHsgQW55VHh0UmVjb3JkIH0gZnJvbSBcImRuc1wiO1xuaW1wb3J0IHsgZ2V0U3RyaW5nIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXG59KVxuQEluamVjdGFibGUoKVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgaXNCdXN5OiBib29sZWFuID0gdHJ1ZTtcbiAgICByYW5kb206IGFueTtcbiAgICByZXN1bHQ6IEFycmF5PGFueT4gPSBbXTsgXG4gICAgcmVzdWx0MjogQXJyYXk8YW55PiA9IFtdOyBcbiAgICByZXN1bHQzOiBBcnJheTxhbnk+ID0gW107IFxuICAgIHJlc3VsdDQ6IEFycmF5PGFueT4gPSBbXTsgXG4gICAgcmVzdWx0U2VsZWN0ZWQ6IEFycmF5PGFueT4gPSBbXTsgXG4gICAgc3VnZ2VzdGlvbnM6IEFycmF5PGFueT4gPSBbXTtcbiAgICBmaWx0ZXJlZDogQXJyYXk8YW55PiA9IFtdO1xuICAgIGZpbHRlcmVkMjogQXJyYXk8YW55PiA9IFtdO1xuICAgIFNlbGVjdGVkRmlsdGVyZWQ6IEFycmF5PGFueT4gPSBbXTtcbiAgICBzdWdnZXN0OiBPYnNlcnZhYmxlQXJyYXk8VG9rZW5Nb2RlbD47XG4gIFx0ZGI6IGFueTtcbiAgICBzZWxlY3RlZDogQXJyYXk8T2JqZWN0PiA9IFtdO1xuICAgIHVzZXJfaWQ6IHN0cmluZztcbiAgICAgdXJsOiBzdHJpbmcgPSBcIjx1cmw+XCI7IFxuICAgIHZhbHVlOmJvb2xlYW4gPSB1dGlscy5pc0RhdGFVUkkodGhpcy51cmwpO1xuICAgIEBWaWV3Q2hpbGQoXCJtb3ZpZVNob3dcIix7c3RhdGljOiBmYWxzZX0pIG1vdmllU2hvdzogRWxlbWVudFJlZjtcbiAgICAgQFZpZXdDaGlsZChcIm1lZDJcIiwge3N0YXRpYzogZmFsc2V9KSBtZWQyOiBFbGVtZW50UmVmO1xuICAgICBAVmlld0NoaWxkKFwibWVkM1wiLHtzdGF0aWM6IGZhbHNlfSkgbWVkMzogRWxlbWVudFJlZjtcbiAgICAgbW92aWVfc2hvdz1cIlwiO1xuICAgIHN1bSA9IDA7XG4gICAgc3VtVG90YWwgPSAwO1xuICAgIHN1bURlYXRocyA9IDA7XG4gICAgc3VtcG9wPTA7XG4gICAgc3VtYWN0aXZlPTA7XG4gICAgc3VtcmVjb3ZlcmVkPTA7XG4gICAgaXNOb3RMb2dnZWRJbj0gdHJ1ZTtcbiAgICBpc0hvbWVwYWdlID0gdHJ1ZTtcbiAgICByZWQ9dHJ1ZTtcbiAgICBncmVlbj10cnVlO1xuICAgIG9yYW5nZT10cnVlO1xuICAgIGNyZWF0ZUFuZFVwZGF0ZTogYW55O1xuICAgIG1lZEhlcmJTdXA6IEFycmF5PE9iamVjdD4gPSBbXTtcbiAgICBpc05vdFNlYXJjaD0gdHJ1ZTtcbiAgICBmcmFtZSA9IEZyYW1lLmdldEZyYW1lQnlJZChcIm15RnJhbWVcIik7XG4gICAgaXNTY2FuPXRydWU7XG4gIHJlc3VsdFVwQ29taW5nOiBBcnJheTxhbnk+ID0gW107IFxuICBVcENvbWluZ0ltYWdlOiBBcnJheTxhbnk+ID0gW107IFxuICBmaWx0ZXJlZFVwQ29taW5nOiBBcnJheTxhbnk+ID0gW107IFxuICByZXN1bHRUcmVuZGluZ1Nob3dzOiBBcnJheTxhbnk+ID0gW107IFxuICBUcmVuZGluZ1Nob3dzSW1hZ2U6QXJyYXk8YW55PiA9IFtdOyBcbiAgZmlsdGVyZWRUcmVuZGluZ1Nob3dzOiBBcnJheTxhbnk+ID0gW107IFxuXG4gICAgXG5cblxuICAgIG9uQnVzeUNoYW5nZWQoYXJnczogRXZlbnREYXRhKSB7XG4gICAgICBsZXQgaW5kaWNhdG9yOiBBY3Rpdml0eUluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj5hcmdzLm9iamVjdDtcbiAgICAgIGNvbnNvbGUubG9nKFwiaW5kaWNhdG9yLmJ1c3kgY2hhbmdlZCB0bzogXCIgKyBpbmRpY2F0b3IuYnVzeSk7XG4gIH1cbiAgIFxuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxwcml2YXRlIG15U2VydmljZTogTXlIdHRwR2V0U2VydmljZTIsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBhcHBjb21wb25lbnQ6IEFwcENvbXBvbmVudCkge1xuXG4gICAgICBcblxuICAgICAgIFxuICAgIH0gXG4gICAgXG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIFxuICAgICAgLy8gdGhpcy5leHRyYWN0RGF0YSgpO1xuICAgICAgdGhpcy5leHRyYWN0T25BaXIoKTtcbiAgICAgIHRoaXMuZXh0cmFjdFRyZW5kaW5nU2hvd3MoKTtcbiAgICAgIHRoaXMuZXh0cmFjdFVwQ29taW5nKCk7XG4gICAgICB0aGlzLmV4dHJhY3RUcmVuZGluZ01vdmllcygpO1xuICAgICAgLy8gdGhpcy5zZWxlY3RJdGVtcygpO1xuICAgIH1cbiAgLy8gICBleHRyYWN0RGF0YSgpIHtcbiAgLy8gICAgIHRoaXMubXlTZXJ2aWNlLmdldEFsbCgpXG4gIC8vICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgXG4gIC8vICAgICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvbihyZXN1bHQpO1xuICAgICAgICAgICAgICBcbiAgLy8gICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAvLyAgICAgICAgIH0pO1xuICAvLyB9XG4gIFxuLy8gICBzZWxlY3RJdGVtcygpIHtcbi8vICAgICB0aGlzLmRpc21pc3NLZXlib2FyZCgpO1xuICAgXG4vLyAgICAgaWYgKCF0aGlzLmlzSG9tZXBhZ2Upe1xuLy8gICAgICAgdGhpcy5yZXN1bHQ9W107XG4vLyAgICAgICB0aGlzLm15U2VydmljZS5nZXRJbmZvKClcbiAgIFxuLy8gICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgb2JqZWN0XCIscmVzdWx0KVxuLy8gICAgICAgICB0aGlzLm9uR2V0RGF0YVN1Y2Nlc3MocmVzdWx0KVxuICAgICAgICAgIFxuICAgICAgICAgIFxuLy8gICAgICAgfSwgKGVycm9yKSA9PiB7XG4vLyAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuLy8gICAgICAgfSk7XG5cbi8vICAgICB9XG4vLyAgICAgZWxzZXtcbi8vICAgICAgIHRoaXMuaXNIb21lcGFnZSA9ICF0aGlzLmlzSG9tZXBhZ2U7XG4vLyAgICAgICB0aGlzLm15U2VydmljZS5nZXRJbmZvKClcbiAgIFxuLy8gICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgb2JqZWN0XCIscmVzdWx0KVxuLy8gICAgICAgICB0aGlzLm9uR2V0RGF0YVN1Y2Nlc3MocmVzdWx0KVxuICAgICAgICAgIFxuICAgICAgICAgIFxuLy8gICAgICAgfSwgKGVycm9yKSA9PiB7XG4vLyAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuLy8gICAgICAgfSk7XG4vLyAgICAgfVxuICBcblxuLy8gfSBcblxub25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7IFxuICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICBjb25zb2xlLmxvZyhcImRyYXdlcjFcIilcbiAgXG59XG5cbnByaXZhdGUgb25HZXREYXRhU3VjY2VzcyhyZXMpIHtcblxuZm9yIChsZXQga2V5IGluIHJlcy5yZXNwb25zZSkge1xuICB0aGlzLnJlc3VsdC5wdXNoKHt2YWx1ZTogcmVzLnJlc3BvbnNlW2tleV19KTtcbiAgY29uc29sZS5sb2coXCJ0aGlzIGFycmF5XCIsIHRoaXMucmVzdWx0KTtcbn1cblxuICB9XG4gIG9uU2Nyb2xsKGFyZ3M6IFNjcm9sbEV2ZW50RGF0YSkge1xuICAgIGNvbnN0IHNjcm9sbFZpZXcgPSBhcmdzLm9iamVjdCBhcyBTY3JvbGxWaWV3O1xuXG4gICAgLy8gY29uc29sZS5sb2coXCJzY3JvbGxYOiBcIiArIGFyZ3Muc2Nyb2xsWCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJzY3JvbGxZOiBcIiArIGFyZ3Muc2Nyb2xsWSk7XG59XG5cbmV4dHJhY3RPbkFpcigpIHtcbiAgLy8gY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBleHRyYWN0XCIpXG4gIC8vIHRoaXMubXlTZXJ2aWNlLmdldE9uQWlyKClcbiAgLy8gICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhcIk9OIEFJUiBPTiBBSVIgT04gQUlSXCIsIHJlc3VsdClcbiAgICAgICAgY29uc3QgcmVzdWx0PSB7ICBcInR2X3Jlc3VsdHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJZb3dpcyBCZW46IFRoZSBTZXJpZXNcIixcbiAgICAgICAgICAgIFwiaW1kYl9pZFwiOiBcInR0MTMwMzkwNDJcIixcbiAgICAgICAgICAgICBcInllYXJcIjogXCIyMDIwXCJcbiAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJUbyBrYWZlIHRpcyBIYXJhc1wiLFxuICAgICAgICAgICBcImltZGJfaWRcIjogXCJ0dDAzODQ3NDVcIixcbiAgICAgICAgICAgIFwieWVhclwiOiBcIjIwMDNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkJldHR5cyBEaWFnbm9zZVwiLFxuICAgICAgICAgICAgXCJpbWRiX2lkXCI6IFwidHQ0MzEwNDI2XCIsXG4gICAgICAgICAgICBcInllYXJcIjogXCIyMDE1XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgICB7XG4gICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkRyw6FnYSDDtnLDtmvDtnPDtmtcIixcbiAgICAgICAgICAgXCJpbWRiX2lkXCI6IFwidHQ5NDgwNDMyXCIsXG4gICAgICAgICAgIFwieWVhclwiOiBcIjIwMTlcIlxuICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkhhdXRlIERvZ1wiLFxuICAgICAgICAgICBcImltZGJfaWRcIjogXCJ0dDEzMDY0MjA2XCIsXG4gICAgICAgICAgIFwieWVhclwiOiBcIjIwMjBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBBbWJlciBSdWZmaW4gU2hvd1wiLFxuICAgICAgICAgICAgXCJpbWRiX2lkXCI6IFwidHQxMTA1ODA3OFwiLFxuICAgICAgICAgICAgIFwieWVhclwiOiBcIjIwMjBcIlxuICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiTWFnaWMgb2YgRGlzbmV5J3MgQW5pbWFsIEtpbmdkb21cIixcbiAgICAgICAgICAgXCJpbWRiX2lkXCI6IFwidHQxMDE5NjM3OFwiLFxuICAgICAgICAgIFwieWVhclwiOiBcIjIwMjBcIlxuICAgICAgICAgfSxcbiAgICAgICAgIHtcbiAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlplaHUgWmVcIixcbiAgICAgICAgICAgXCJpbWRiX2lkXCI6IFwidHQwMDc3MTA4XCIsXG4gICAgICAgICAgICBcInllYXJcIjogXCIxOTc4XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJUaGUgU2Nob29sIE51cnNlIEZpbGVzXCIsXG4gICAgICAgICAgICBcImltZGJfaWRcIjogXCJ0dDEyODc5NTIyXCIsXG4gICAgICAgICAgICBcInllYXJcIjogXCIyMDIwXCJcbiAgICAgICAgICB9XX1cbiAgICAgICAgICB0aGlzLm9uR2V0U3RhdGljcyhyZXN1bHQpO1xuICAgICAgICAgIFxuICAgICAgLy8gfSwgKGVycm9yKSA9PiB7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgLy8gfSk7XG59XG5cbnByaXZhdGUgb25HZXRTdGF0aWNzKHJlcykge1xuICBcbiBcblxuICBmb3IgKGxldCBrZXkgaW4gcmVzLnR2X3Jlc3VsdHMpIHtcbiAgICBcbiAgICB0aGlzLnJlc3VsdDIucHVzaCh7dmFsdWU6IHJlcy50dl9yZXN1bHRzW2tleV19KTtcbiAgXG4gICAgLy8gY29uc29sZS5sb2coXCJyZXN1bHRpbmcgaW4gXCIsdGhpcy5yZXN1bHQyKTtcbiAgXG4gIFxuICB9XG4gIFxuICB0aGlzLnJlc3VsdDIuZm9yRWFjaChvYmogPT4ge1xuICAgIHRoaXMuZXh0cmFjdEltYWdlKG9iai52YWx1ZS5pbWRiX2lkKTtcbiAgIH0pO1xuICBcbiAgXG4gIFxuICAgIH1cbiAgICBleHRyYWN0SW1hZ2UodmFsdWUpIHtcblxuICAgICAgdGhpcy5teVNlcnZpY2UuZ2V0SW1hZ2VOYW1lKHZhbHVlKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBpbWFnZSByZXN1bHQgXCIsIHJlc3VsdClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICB0aGlzLm9uR2V0SW1hZ2UocmVzdWx0KTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgICBvbkdldEltYWdlKHJlcykge1xuICAgICAgXG4gICAgXG4gICAgICBmb3IgKGxldCBrZXkgaW4gcmVzKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmZpbHRlcmVkLnB1c2goe2ltYWdlOiByZXN9KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJJTUFHRSBSRXN1bHQgXCIsdGhpcy5yZXN1bHQpO1xuICAgIFxuICAgICAgICB0aGlzLnJlc3VsdD0gdGhpcy5maWx0ZXJlZC5yZWR1Y2UoKGFjYywgY3VycmVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHggPSBhY2MuZmluZChpdGVtID0+IGl0ZW0uaW1hZ2UgPT09IGN1cnJlbnQuaW1hZ2UpO1xuICAgICAgICAgIGlmICgheCkge1xuICAgICAgICAgICAgcmV0dXJuIGFjYy5jb25jYXQoW2N1cnJlbnRdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9XG4gICAgICAgIH0sIFtdKTtcbiAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZpbHRlcmVkJywgdGhpcy5maWx0ZXJlZCk7XG4gICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICAgIH1cblxuZXh0cmFjdFRyZW5kaW5nTW92aWVzKCkge1xuICBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGV4dHJhY3QgVHJlbmRpbmcgTW92aWVzXCIpXG4gIC8vIHRoaXMubXlTZXJ2aWNlLmdldFRyZW5kaW5nTW92aWVzKClcbiAgLy8gICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlRSRU5ESU5nIFRSRU5ESU5HXCIsIHJlc3VsdClcbiAgICAgICAgY29uc3QgcmVzdWx0PSAge1xuICAgICAgICAgIFwibW92aWVfcmVzdWx0c1wiOiBbXG4gICAgICAgIFxuICAgICAgICAgICB7XG4gICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkRvbid0IFJlYWQgVGhpcyBPbiBhIFBsYW5lXCIsXG4gICAgICAgICAgXCJ5ZWFyXCI6IFwiMFwiLFxuICAgICAgICAgICAgXCJpbWRiX2lkXCI6IFwidHQ3NTI1NzkyXCJcbiAgICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiQnJ1dHVzIFZzIEPDqXNhclwiLFxuICAgICAgICAgICAgXCJ5ZWFyXCI6IFwiMjAyMFwiLFxuICAgICAgICAgICAgXCJpbWRiX2lkXCI6IFwidHQxMDU1NzUyNFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImltZGJfaWRcIjpcInR0MDQyMzcxM1wiLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOlwiUGx1cyBiZWxsZSBsYSB2aWVcIixcbiAgICAgICAgICAgIFwieWVhclwiOlwiMjAwNFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICAgIHRoaXMub25HZXRUcmVuZGluZ01vdmllcyhyZXN1bHQpO1xuICAgICAgICAgIFxuICAgICAgLy8gfSwgKGVycm9yKSA9PiB7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgLy8gfSk7XG59XG5cbnByaXZhdGUgb25HZXRUcmVuZGluZ01vdmllcyhyZXMpIHtcbiAgXG4gXG5cbiAgZm9yIChsZXQga2V5IGluIHJlcy5tb3ZpZV9yZXN1bHRzKSB7XG4gICAgXG4gICAgdGhpcy5yZXN1bHQzLnB1c2goe3ZhbHVlOiByZXMubW92aWVfcmVzdWx0c1trZXldfSk7XG4gIFxuICAgIC8vIGNvbnNvbGUubG9nKFwicmVzdWx0aW5nIGluIFwiLHRoaXMucmVzdWx0Mik7XG4gIFxuICBcbiAgfVxuICBcbiAgdGhpcy5yZXN1bHQzLmZvckVhY2gob2JqID0+IHtcbiAgICB0aGlzLmV4dHJhY3RJbWFnZTIob2JqLnZhbHVlLmltZGJfaWQpO1xuICAgfSk7XG4gIFxuICBcbiAgXG4gICAgfVxuXG4gICAgZXh0cmFjdEltYWdlMih2YWx1ZSkge1xuXG4gICAgICB0aGlzLm15U2VydmljZS5nZXRJbWFnZU5hbWUyKHZhbHVlKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBpbWFnZSByZXN1bHQgXCIsIHJlc3VsdClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICB0aGlzLm9uR2V0SW1hZ2UyKHJlc3VsdCk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICAgb25HZXRJbWFnZTIocmVzKSB7XG4gICAgICBcbiAgICBcbiAgICAgIGZvciAobGV0IGtleSBpbiByZXMpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZmlsdGVyZWQyLnB1c2goe2ltYWdlOiByZXN9KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJJTUFHRSBSRXN1bHQgXCIsdGhpcy5yZXN1bHQpO1xuICAgIFxuICAgICAgICB0aGlzLnJlc3VsdDQ9IHRoaXMuZmlsdGVyZWQyLnJlZHVjZSgoYWNjLCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgeCA9IGFjYy5maW5kKGl0ZW0gPT4gaXRlbS5pbWFnZSA9PT0gY3VycmVudC5pbWFnZSk7XG4gICAgICAgICAgaWYgKCF4KSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjLmNvbmNhdChbY3VycmVudF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgW10pO1xuICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZmlsdGVyZWQnLCB0aGlzLmZpbHRlcmVkKTtcbiAgICAgXG4gICAgICAgIFxuICAgICAgfVxuICAgICAgXG4gICAgICBcblxuXG5cblxuXG4gICAgICB0aGlzLnJhbmRvbT10aGlzLnJlc3VsdDRbTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSoyKV0uaW1hZ2UucG9zdGVyO1xuICAgICAgY29uc29sZS5sb2codGhpcy5yYW5kb20pXG4gICAgICBcbiAgICAgICAgfVxuICAgICBcbiAgICAgICAgXG5leHRyYWN0VXBDb21pbmcoKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgZXh0cmFjdFwiKVxuICAvLyB0aGlzLm15U2VydmljZS5nZXRPblVwQ29taW5nKClcbiAgLy8gICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhcIk9OIEFJUiBPTiBBSVIgT04gQUlSXCIsIHJlc3VsdClcbiAgICAgICAgY29uc3QgcmVzdWx0PSB7ICBcIm1vdmllX3Jlc3VsdHNcIjogW3tcbiAgICAgICAgICBcImltZGJfaWRcIjpcInR0MTA2NDgxOThcIixcbiAgICAgICAgICBcInRpdGxlXCI6XCJEaW1lIEN1w6FuZG8gVMO6XCIsXG4gICAgICAgICAgXCJ5ZWFyXCI6XCIyMDIwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaW1kYl9pZFwiOlwidHQxMDY4Nzc0MFwiLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOlwiUHJpbmNlem5hIHpha2xldMOhIHYgxI1hc2VcIixcbiAgICAgICAgICAgIFwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDExNjIyMjcyXCIsXG4gICAgICAgICAgXCJ0aXRsZVwiOlwiU3ByaW5nIFVqZSBzcHJpbmdcIixcbiAgICAgICAgICBcInllYXJcIjpcIjIwMjBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDExMzU0MTY0XCIsXG5cInRpdGxlXCI6XCLogIHlvozjga7os4fph5HjgYzjgYLjgorjgb7jgZvjgpNcIixcblwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImltZGJfaWRcIjpcInR0MTA0MzEzMzJcIixcblwidGl0bGVcIjpcIkxlZ2VuZCBRdWVzdDogVGhlIE9yaWdpblwiLFxuXCJ5ZWFyXCI6XCIyMDIwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaW1kYl9pZFwiOlwidHQxMTY5NzY5MFwiLFxuXCJ0aXRsZVwiOlwiVGhlIFdvbWFuIFdobyBSYW5cIixcblwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgfV19XG4gICAgICAgIFxuICAgICAgICAgIHRoaXMub25HZXRVcENvbWluZyhyZXN1bHQpO1xuICAgICAgICAgIFxuICAgICAgLy8gfSwgKGVycm9yKSA9PiB7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgLy8gfSk7XG59XG5cbnByaXZhdGUgb25HZXRVcENvbWluZyhyZXMpIHtcbiAgXG4gXG5cbiAgZm9yIChsZXQga2V5IGluIHJlcy5tb3ZpZV9yZXN1bHRzKSB7XG4gICAgXG4gICAgdGhpcy5yZXN1bHRVcENvbWluZy5wdXNoKHt2YWx1ZTogcmVzLm1vdmllX3Jlc3VsdHNba2V5XX0pO1xuICBcbiAgICAvLyBjb25zb2xlLmxvZyhcInJlc3VsdGluZyBpbiBcIix0aGlzLnJlc3VsdDIpO1xuICBcbiAgXG4gIH1cbiAgXG4gIHRoaXMucmVzdWx0VXBDb21pbmcuZm9yRWFjaChvYmogPT4ge1xuICAgIHRoaXMuZXh0cmFjdEltYWdlVXBDb21pbmcob2JqLnZhbHVlLmltZGJfaWQpO1xuICAgfSk7XG4gIFxuICBcbiAgXG4gICAgfVxuICAgIGV4dHJhY3RJbWFnZVVwQ29taW5nKHZhbHVlKSB7XG5cbiAgICAgIHRoaXMubXlTZXJ2aWNlLmdldEltYWdlTmFtZSh2YWx1ZSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgaW1hZ2UgcmVzdWx0IFwiLCByZXN1bHQpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgdGhpcy5vbkdldEltYWdlVXBDb21pbmcocmVzdWx0KTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgICBvbkdldEltYWdlVXBDb21pbmcocmVzKSB7XG4gICAgICBcbiAgICBcbiAgICAgIGZvciAobGV0IGtleSBpbiByZXMpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuVXBDb21pbmdJbWFnZS5wdXNoKHtpbWFnZTogcmVzfSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSU1BR0UgUkVzdWx0IFwiLHRoaXMucmVzdWx0KTtcbiAgICBcbiAgICAgICAgdGhpcy5maWx0ZXJlZFVwQ29taW5nPSB0aGlzLlVwQ29taW5nSW1hZ2UucmVkdWNlKChhY2MsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgICBjb25zdCB4ID0gYWNjLmZpbmQoaXRlbSA9PiBpdGVtLmltYWdlID09PSBjdXJyZW50LmltYWdlKTtcbiAgICAgICAgICBpZiAoIXgpIHtcbiAgICAgICAgICAgIHJldHVybiBhY2MuY29uY2F0KFtjdXJyZW50XSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBbXSk7XG4gICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdmaWx0ZXJlZCcsIHRoaXMuZmlsdGVyZWQpO1xuICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgfVxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGV4dHJhY3RUcmVuZGluZ1Nob3dzKCkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgZXh0cmFjdFwiKVxuICAgICAgICAgIC8vIHRoaXMubXlTZXJ2aWNlLmdldE9uVHJlbmRpbmdTaG93KClcbiAgICAgICAgICAvLyAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgLy8gICAgICAgY29uc29sZS5sb2coXCJPTiBBSVIgT04gQUlSIE9OIEFJUlwiLCByZXN1bHQpXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0PSB7ICBcInR2X3Jlc3VsdHNcIjogW3tcbiAgICAgICAgICAgICAgICAgIFwiaW1kYl9pZFwiOlwidHQxMjYyNDg0NFwiLFxuICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOlwiVGhlIEdyZWF0IEhlaXN0XCIsXG4gICAgICAgICAgICAgICAgICBcInllYXJcIjpcIjIwMjBcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDk4NDkyMTBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOlwiQmlvaGFja2Vyc1wiLFxuICAgICAgICAgICAgICAgICAgICBcInllYXJcIjpcIjIwMjBcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDEwNjIzNTUwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjpcIlRoZSBGdWdpdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInllYXJcIjpcIjIwMjBcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDY5MDU2ODZcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOlwiTG92ZWNyYWZ0IENvdW50cnlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ5ZWFyXCI6XCIyMDIwXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaW1kYl9pZFwiOlwidHQxMDU4NDYwOFwiLFxuICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6XCJUZWVuYWdlIEJvdW50eSBIdW50ZXJzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImltZGJfaWRcIjpcInR0MTA5ODY0MTBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOlwiVGVkIExhc3NvXCIsXG4gICAgICAgICAgICAgICAgICAgIFwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgICAgICAgICB9XX1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHRoaXMub25HZXRUcmVuZGluZ1Nob3dzKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBwcml2YXRlIG9uR2V0VHJlbmRpbmdTaG93cyhyZXMpIHtcbiAgICAgICAgICBcbiAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gcmVzLnR2X3Jlc3VsdHMpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5yZXN1bHRUcmVuZGluZ1Nob3dzLnB1c2goe3ZhbHVlOiByZXMudHZfcmVzdWx0c1trZXldfSk7XG4gICAgICAgICAgXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlc3VsdGluZyBpbiBcIix0aGlzLnJlc3VsdDIpO1xuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICB0aGlzLnJlc3VsdFRyZW5kaW5nU2hvd3MuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICAgICAgdGhpcy5leHRyYWN0SW1hZ2VUcmVuZGluZ1Nob3dzKG9iai52YWx1ZS5pbWRiX2lkKTtcbiAgICAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBleHRyYWN0SW1hZ2VUcmVuZGluZ1Nob3dzKHZhbHVlKSB7XG4gICAgICAgIFxuICAgICAgICAgICAgICB0aGlzLm15U2VydmljZS5nZXRJbWFnZU5hbWUodmFsdWUpXG4gICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBpbWFnZSByZXN1bHQgXCIsIHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkdldEltYWdlVHJlbmRpbmdTaG93cyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICBvbkdldEltYWdlVHJlbmRpbmdTaG93cyhyZXMpIHtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHJlcykge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuVHJlbmRpbmdTaG93c0ltYWdlLnB1c2goe2ltYWdlOiByZXN9KTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIklNQUdFIFJFc3VsdCBcIix0aGlzLnJlc3VsdCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcmVkVHJlbmRpbmdTaG93cz0gdGhpcy5UcmVuZGluZ1Nob3dzSW1hZ2UucmVkdWNlKChhY2MsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHggPSBhY2MuZmluZChpdGVtID0+IGl0ZW0uaW1hZ2UgPT09IGN1cnJlbnQuaW1hZ2UpO1xuICAgICAgICAgICAgICAgICAgaWYgKCF4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2MuY29uY2F0KFtjdXJyZW50XSk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdmaWx0ZXJlZCcsIHRoaXMuZmlsdGVyZWQpO1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgIFxuLy8gICAgIGdldEltYWdlTmFtZSh2YWx1ZSkge1xuLy8gICAgICAgdmFyIGxvd2VyPXZhbHVlLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XG4vLyAgICAgICBjb25zb2xlLmxvZyhsb3dlcik7XG4vLyAgICAgICByZXR1cm4gYH4vaW1hZ2VzLyR7bG93ZXJ9LnBuZ2A7XG4vLyAgIH1cblxuXG5cblxuICBcblxuICAgXG4vLyBhZGRJbnRlcmFjdGlvbihtZWRIZXJiU3VwOiBzdHJpbmcpIHtcbi8vICAgY29uc29sZS5sb2coXCJhZGQgbWVkSGVyYlN1cFwiLCBtZWRIZXJiU3VwKVxuLy8gICAgIGRpYWxvZ3MuYWN0aW9uKHtcbi8vICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmUgdGhhdCB5b3Ugd2FudCB0byBhZGQgdGhpcyBtZWRpY2luZSB0byB5b3VyIGxpc3Q/XCIsXG4vLyAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcbi8vICAgICAgIGFjdGlvbnM6IFtcIlllc1wiLCBcIk5vXCJdXG4vLyAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuLy8gICAgICAgaWYgKHJlc3VsdCA9PSBcIlllc1wiKSB7XG4vLyAgICAgICAgdGhpcy5tZWRIZXJiU3VwX25hbWUgPSBtZWRIZXJiU3VwO1xuLy8gICAgICAgIHRoaXMubWVkaWNpbmVfZm9ybSA9IFwiUGlsbFwiO1xuLy8gICAgICAgICB0aGlzLmRiLmV4ZWNTUUwoXCJJTlNFUlQgSU5UTyBtZWRpY2luZXMgKG1lZGljaW5lc19uYW1lLCBtZWRpY2luZV9kb3NhZ2UsIG1lZGljaW5lX2Zvcm0sIG1lZGljaW5lX2ZyZXF1ZW5jeSwgdXNlcl9pZCkgVkFMVUVTICg/LD8sPyw/LD8pXCIsIFt0aGlzLm1lZEhlcmJTdXBfbmFtZSwgdGhpcy5tZWRpY2luZV9kb3NhZ2UsIHRoaXMubWVkaWNpbmVfZm9ybSwgdGhpcy5tZWRpY2luZV9mcmVxdWVuY3ksIHRoaXMudXNlcl9pZF0pLnRoZW4oaWQgPT4ge1xuLy8gICAgICAgICAgICB0aGlzLm1lZGljaW5lTGlzdC51bnNoaWZ0KHtpZDogaWQsIG5hbWU6IHRoaXMubWVkSGVyYlN1cF9uYW1lLCBkb3NhZ2U6IHRoaXMubWVkaWNpbmVfZG9zYWdlLCBmb3JtOiB0aGlzLm1lZGljaW5lX2Zvcm0sIGZyZXF1ZW5jeTp0aGlzLm1lZGljaW5lX2ZyZXF1ZW5jeX0pO1xuLy8gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiBhZGRpbmcgd2FzIGEgc3VjZXNzXCIsIHRoaXMubWVkaWNpbmVMaXN0KTtcbi8vICAgICAgICAgICAgZGlhbG9ncy5hbGVydCgnTWVkaWNpbmUgc2F2ZWQgc3VjY2Vzc2Z1bGx5OicpO1xuICAgICAgICAgICBcbi8vICAgICAgICB9LCBlcnJvciA9PiB7XG4vLyAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBhZGRpbmcgYW4gaXRlbSB0byB5b3VyIGxpc3QuJywgZXJyb3IpO1xuLy8gICAgICAgICAgICB0aGlzLm1lZEhlcmJTdXBfbmFtZSA9IFwiXCI7XG4vLyAgICAgICAgICAgIHRoaXMubWVkaWNpbmVfZG9zYWdlID0gXCJcIjtcbi8vICAgICAgICAgICAgdGhpcy5tZWRpY2luZV9mb3JtID0gXCJcIjtcbi8vICAgICAgICAgICAgdGhpcy5tZWRpY2luZV9mcmVxdWVuY3kgPSBcIlwiO1xuLy8gICAgICAgIH0pO1xuXG4vLyAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PSBcIk5vXCIpIHtcbiAgICAgICBcbi8vICAgICAgIH1cbi8vICAgICB9KTtcbi8vICAgIH1cblxuc2VsZWN0ZWRTZWFyY2goYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgdGhpcy5yZXN1bHRTZWxlY3RlZCA9IFtdO1xuICB0aGlzLlNlbGVjdGVkRmlsdGVyZWQ9W107XG4gIHRoaXMubW92aWVfc2hvdz1cIlwiO1xubGV0IHNlbGVjdGVkPSA8YW55PmFyZ3Mub2JqZWN0LmJpbmRpbmdDb250ZXh0O1xudGhpcy5tb3ZpZV9zaG93PXNlbGVjdGVkLmltYWdlLmlkO1xuICB0aGlzLmlzSG9tZXBhZ2UgPSAhdGhpcy5pc0hvbWVwYWdlO1xuIGNvbnNvbGUubG9nKCcgZ290IE1PdmllU2hvdycsIHRoaXMubW92aWVfc2hvdyk7XG4gdGhpcy5leHRyYWN0U2VsZWN0TW92aWVTaG93KHRoaXMubW92aWVfc2hvdyk7XG5cbn1cblxuZXh0cmFjdFNlbGVjdE1vdmllU2hvdyh2YWx1ZSkge1xuICBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGV4dHJhY3QgU2VsZWN0ZWQgbW92aWVTaG93c1wiKVxuICB0aGlzLm15U2VydmljZS5nZXRTZWxlY3RlZE1vdmllU2hvdyh2YWx1ZSlcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIHJlc3VsdFwiLCByZXN1bHQpXG4gICAgICAgIFxuICAgICAgICAgIHRoaXMub25HZXRTZWxlY3RNb3ZpZVNob3cocmVzdWx0KTtcbiAgICAgICAgICBcbiAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xufVxuXG5wcml2YXRlIG9uR2V0U2VsZWN0TW92aWVTaG93KHJlcykge1xuICBcbiBcblxuICBmb3IgKGxldCBrZXkgaW4gcmVzKSB7XG4gICAgXG4gICAgXG4gICAgdGhpcy5TZWxlY3RlZEZpbHRlcmVkLnB1c2goe3ZhbHVlOiByZXN9KTtcbiAgXG4gICAgXG4gIFxuICBcbiAgfVxuICB0aGlzLnJlc3VsdFNlbGVjdGVkPSB0aGlzLlNlbGVjdGVkRmlsdGVyZWQucmVkdWNlKChhY2MsIGN1cnJlbnQpID0+IHtcbiAgICBjb25zdCB4ID0gYWNjLmZpbmQoaXRlbSA9PiBpdGVtLmltYWdlID09PSBjdXJyZW50LmltYWdlKTtcbiAgICBpZiAoIXgpIHtcbiAgICAgIHJldHVybiBhY2MuY29uY2F0KFtjdXJyZW50XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuICB9LCBbXSk7XG4gIFxuICBcbiAgY29uc29sZS5sb2coXCJyZXN1bHRpbmcgaW4gXCIsdGhpcy5yZXN1bHRTZWxlY3RlZCk7XG4gIFxuICBcbiAgICB9XG5cbiAgICAgXG4gICBcbiAgICBvbkhvbWVUYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSk7XG4gICAgICAgIGlmKCF0aGlzLmlzSG9tZXBhZ2Upe1xuICAgICAgICAgIHRoaXMuaXNIb21lcGFnZT0hdGhpcy5pc0hvbWVwYWdlO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uSGlzdG9yeVRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9oaXN0b3J5XCJdKTtcbiAgXG4gICAgfVxuXG5cbiAgICBcbiAgICAgXG4gICAgXG5cbiAgIFxuICAgICAgZGlzbWlzc0tleWJvYXJkKCkge1xuICAgICAgICBpZiAoaXNJT1MpIHtcbiAgICAgICAgICBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uLmtleVdpbmRvdy5lbmRFZGl0aW5nKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgICAgICB1dGlscy5hZC5kaXNtaXNzU29mdElucHV0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIFxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=