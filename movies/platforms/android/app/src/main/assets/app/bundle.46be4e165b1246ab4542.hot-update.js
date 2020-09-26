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
            this.extractImageRecentlyAdded(obj.value.imdb_id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0Esa0ZBQXFGO0FBQ3JGLDhGQUErRDtBQUMvRCxrRUFBNEM7QUFFNUMsdUZBQXNEO0FBQ3RELDRGQUEyRTtBQUczRSxrR0FBNkQ7QUFDN0QsSUFBSSxhQUFhLEdBQUcsbUJBQU8sQ0FBQyxtREFBYSxDQUFDLENBQUM7QUFFM0MsaUdBQW9EO0FBQ3BELCtFQUF3RDtBQUV4RCxvRkFBMkU7QUFlM0UsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQTJEdEIsWUFBb0IsSUFBZ0IsRUFBUyxTQUE0QixFQUFVLGdCQUFrQyxFQUFVLFlBQTBCO1FBQXJJLFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFtQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQXpEM0osV0FBTSxHQUFZLElBQUksQ0FBQztRQUVyQixXQUFNLEdBQWUsRUFBRSxDQUFDO1FBQ3hCLFlBQU8sR0FBZSxFQUFFLENBQUM7UUFDekIsWUFBTyxHQUFlLEVBQUUsQ0FBQztRQUN6QixZQUFPLEdBQWUsRUFBRSxDQUFDO1FBQ3pCLG1CQUFjLEdBQWUsRUFBRSxDQUFDO1FBQ2hDLGdCQUFXLEdBQWUsRUFBRSxDQUFDO1FBQzdCLGFBQVEsR0FBZSxFQUFFLENBQUM7UUFDMUIsY0FBUyxHQUFlLEVBQUUsQ0FBQztRQUMzQixxQkFBZ0IsR0FBZSxFQUFFLENBQUM7UUFHbEMsYUFBUSxHQUFrQixFQUFFLENBQUM7UUFFNUIsUUFBRyxHQUFXLE9BQU8sQ0FBQztRQUN2QixVQUFLLEdBQVcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFJekMsZUFBVSxHQUFDLEVBQUUsQ0FBQztRQUNmLFFBQUcsR0FBRyxDQUFDLENBQUM7UUFDUixhQUFRLEdBQUcsQ0FB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QUM7SUFDRCxZQUFZO1FBQ1IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFFakQsQ0FBQztJQVFDLGVBQWU7UUFDYixJQUFJLGdCQUFLLEVBQUU7WUFDVCxhQUFhLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1RDtRQUNELElBQUksb0JBQVMsRUFBRTtZQUNiLEtBQUssQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7Q0FLTjs7WUFudkI2QixpQkFBVTtZQUFvQixxQ0FBaUI7WUFBNEIseUJBQWdCO1lBQXdCLDRCQUFZOztBQXhDakg7SUFBdkMsZ0JBQVMsQ0FBQyxXQUFXLEVBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7OEJBQVksaUJBQVU7Z0RBQUM7QUFDekI7SUFBbkMsZ0JBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7OEJBQU8saUJBQVU7MkNBQUM7QUFDbEI7SUFBbEMsZ0JBQVMsQ0FBQyxNQUFNLEVBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7OEJBQU8saUJBQVU7MkNBQUM7QUFyQjVDLGFBQWE7SUFSekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNO1FBRWhCLG9GQUFvQzs7S0FFdkMsQ0FBQztJQUNELGlCQUFVLEVBQUU7cUNBNkRpQixpQkFBVSxFQUFvQixxQ0FBaUIsRUFBNEIseUJBQWdCLEVBQXdCLDRCQUFZO0dBM0RoSixhQUFhLENBOHlCekI7QUE5eUJZLHNDQUFhIiwiZmlsZSI6ImJ1bmRsZS40NmJlNGUxNjViMTI0NmFiNDU0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwifi9hcHAuY29tcG9uZW50XCJcbmltcG9ydCB7IFNjcm9sbFZpZXcsIFNjcm9sbEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3Njcm9sbC12aWV3XCI7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiO1xuaW1wb3J0IHsgZ2V0RnJhbWVCeUlkLCBGcmFtZSwgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIjtcbmltcG9ydCB7IFRva2VuTW9kZWwsIEF1dG9Db21wbGV0ZUV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktYXV0b2NvbXBsZXRlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IGlzSU9TLCBpc0FuZHJvaWQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcbnZhciB1dGlsaXR5TW9kdWxlID0gcmVxdWlyZShcInV0aWxzL3V0aWxzXCIpO1xuZGVjbGFyZSBjb25zdCBVSUFwcGxpY2F0aW9uO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlMiB9IGZyb20gXCIuL2h0dHAtZ2V0LnNlcnZpY2VzXCI7ICBcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGl2aXR5LWluZGljYXRvclwiO1xuaW1wb3J0IHsgQW55VHh0UmVjb3JkIH0gZnJvbSBcImRuc1wiO1xuaW1wb3J0IHsgZ2V0U3RyaW5nIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXG59KVxuQEluamVjdGFibGUoKVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgaXNCdXN5OiBib29sZWFuID0gdHJ1ZTtcbiAgICByYW5kb206IGFueTtcbiAgICByZXN1bHQ6IEFycmF5PGFueT4gPSBbXTsgXG4gICAgcmVzdWx0MjogQXJyYXk8YW55PiA9IFtdOyBcbiAgICByZXN1bHQzOiBBcnJheTxhbnk+ID0gW107IFxuICAgIHJlc3VsdDQ6IEFycmF5PGFueT4gPSBbXTsgXG4gICAgcmVzdWx0U2VsZWN0ZWQ6IEFycmF5PGFueT4gPSBbXTsgXG4gICAgc3VnZ2VzdGlvbnM6IEFycmF5PGFueT4gPSBbXTtcbiAgICBmaWx0ZXJlZDogQXJyYXk8YW55PiA9IFtdO1xuICAgIGZpbHRlcmVkMjogQXJyYXk8YW55PiA9IFtdO1xuICAgIFNlbGVjdGVkRmlsdGVyZWQ6IEFycmF5PGFueT4gPSBbXTtcbiAgICBzdWdnZXN0OiBPYnNlcnZhYmxlQXJyYXk8VG9rZW5Nb2RlbD47XG4gIFx0ZGI6IGFueTtcbiAgICBzZWxlY3RlZDogQXJyYXk8T2JqZWN0PiA9IFtdO1xuICAgIHVzZXJfaWQ6IHN0cmluZztcbiAgICAgdXJsOiBzdHJpbmcgPSBcIjx1cmw+XCI7IFxuICAgIHZhbHVlOmJvb2xlYW4gPSB1dGlscy5pc0RhdGFVUkkodGhpcy51cmwpO1xuICAgIEBWaWV3Q2hpbGQoXCJtb3ZpZVNob3dcIix7c3RhdGljOiBmYWxzZX0pIG1vdmllU2hvdzogRWxlbWVudFJlZjtcbiAgICAgQFZpZXdDaGlsZChcIm1lZDJcIiwge3N0YXRpYzogZmFsc2V9KSBtZWQyOiBFbGVtZW50UmVmO1xuICAgICBAVmlld0NoaWxkKFwibWVkM1wiLHtzdGF0aWM6IGZhbHNlfSkgbWVkMzogRWxlbWVudFJlZjtcbiAgICAgbW92aWVfc2hvdz1cIlwiO1xuICAgIHN1bSA9IDA7XG4gICAgc3VtVG90YWwgPSAwO1xuICAgIHN1bURlYXRocyA9IDA7XG4gICAgc3VtcG9wPTA7XG4gICAgc3VtYWN0aXZlPTA7XG4gICAgc3VtcmVjb3ZlcmVkPTA7XG4gICAgaXNOb3RMb2dnZWRJbj0gdHJ1ZTtcbiAgICBpc0hvbWVwYWdlID0gdHJ1ZTtcbiAgICBtb3ZpZT0gdHJ1ZTtcbiAgICByZWQ9dHJ1ZTtcbiAgICBncmVlbj10cnVlO1xuICAgIG9yYW5nZT10cnVlO1xuICAgIGNyZWF0ZUFuZFVwZGF0ZTogYW55O1xuICAgIG1lZEhlcmJTdXA6IEFycmF5PE9iamVjdD4gPSBbXTtcbiAgICBpc05vdFNlYXJjaD0gdHJ1ZTtcbiAgICBmcmFtZSA9IEZyYW1lLmdldEZyYW1lQnlJZChcIm15RnJhbWVcIik7XG4gICAgaXNTY2FuPXRydWU7XG4gIHJlc3VsdFVwQ29taW5nOiBBcnJheTxhbnk+ID0gW107IFxuICBVcENvbWluZ0ltYWdlOiBBcnJheTxhbnk+ID0gW107IFxuICBmaWx0ZXJlZFVwQ29taW5nOiBBcnJheTxhbnk+ID0gW107IFxuICByZXN1bHRUcmVuZGluZ1Nob3dzOiBBcnJheTxhbnk+ID0gW107IFxuICBUcmVuZGluZ1Nob3dzSW1hZ2U6QXJyYXk8YW55PiA9IFtdOyBcbiAgZmlsdGVyZWRUcmVuZGluZ1Nob3dzOiBBcnJheTxhbnk+ID0gW107IFxuICByZXN1bHRSZWNlbnRseUFkZGVkOkFycmF5PGFueT4gPSBbXTsgXG4gIFJlY2VudGx5QWRkZWRJbWFnZTpBcnJheTxhbnk+ID0gW107IFxuICBmaWx0ZXJlZFJlY2VudGx5QWRkZWQ6QXJyYXk8YW55PiA9IFtdOyBcblxuICAgIFxuXG5cbiAgICBvbkJ1c3lDaGFuZ2VkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgICAgbGV0IGluZGljYXRvcjogQWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+YXJncy5vYmplY3Q7XG4gICAgICBjb25zb2xlLmxvZyhcImluZGljYXRvci5idXN5IGNoYW5nZWQgdG86IFwiICsgaW5kaWNhdG9yLmJ1c3kpO1xuICB9XG4gICBcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQscHJpdmF0ZSBteVNlcnZpY2U6IE15SHR0cEdldFNlcnZpY2UyLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgYXBwY29tcG9uZW50OiBBcHBDb21wb25lbnQpIHtcblxuICAgICAgXG5cbiAgICAgICBcbiAgICB9IFxuICAgIFxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICBcbiAgICAgIC8vIHRoaXMuZXh0cmFjdERhdGEoKTtcbiAgICAgIHRoaXMuZXh0cmFjdE9uQWlyKCk7XG4gICAgICB0aGlzLmV4dHJhY3RUcmVuZGluZ1Nob3dzKCk7XG4gICAgICB0aGlzLmV4dHJhY3RVcENvbWluZygpO1xuICAgICAgdGhpcy5leHRyYWN0VHJlbmRpbmdNb3ZpZXMoKTtcbiAgICAgIHRoaXMuZXh0cmFjdFJlY2VudGx5QWRkZWQoKTtcbiAgICAgIC8vIHRoaXMuc2VsZWN0SXRlbXMoKTtcbiAgICB9XG4gIC8vICAgZXh0cmFjdERhdGEoKSB7XG4gIC8vICAgICB0aGlzLm15U2VydmljZS5nZXRBbGwoKVxuICAvLyAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAvLyAgICAgICAgICAgICB0aGlzLnN1Z2dlc3Rpb24ocmVzdWx0KTtcbiAgICAgICAgICAgICAgXG4gIC8vICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgLy8gICAgICAgICB9KTtcbiAgLy8gfVxuICBcbi8vICAgc2VsZWN0SXRlbXMoKSB7XG4vLyAgICAgdGhpcy5kaXNtaXNzS2V5Ym9hcmQoKTtcbiAgIFxuLy8gICAgIGlmICghdGhpcy5pc0hvbWVwYWdlKXtcbi8vICAgICAgIHRoaXMucmVzdWx0PVtdO1xuLy8gICAgICAgdGhpcy5teVNlcnZpY2UuZ2V0SW5mbygpXG4gICBcbi8vICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgIFxuLy8gICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIG9iamVjdFwiLHJlc3VsdClcbi8vICAgICAgICAgdGhpcy5vbkdldERhdGFTdWNjZXNzKHJlc3VsdClcbiAgICAgICAgICBcbiAgICAgICAgICBcbi8vICAgICAgIH0sIChlcnJvcikgPT4ge1xuLy8gICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vICAgICAgIH0pO1xuXG4vLyAgICAgfVxuLy8gICAgIGVsc2V7XG4vLyAgICAgICB0aGlzLmlzSG9tZXBhZ2UgPSAhdGhpcy5pc0hvbWVwYWdlO1xuLy8gICAgICAgdGhpcy5teVNlcnZpY2UuZ2V0SW5mbygpXG4gICBcbi8vICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgIFxuLy8gICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIG9iamVjdFwiLHJlc3VsdClcbi8vICAgICAgICAgdGhpcy5vbkdldERhdGFTdWNjZXNzKHJlc3VsdClcbiAgICAgICAgICBcbiAgICAgICAgICBcbi8vICAgICAgIH0sIChlcnJvcikgPT4ge1xuLy8gICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vICAgICAgIH0pO1xuLy8gICAgIH1cbiAgXG5cbi8vIH0gXG5cbm9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQgeyBcbiAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgY29uc29sZS5sb2coXCJkcmF3ZXIxXCIpXG4gIFxufVxuXG5wcml2YXRlIG9uR2V0RGF0YVN1Y2Nlc3MocmVzKSB7XG5cbmZvciAobGV0IGtleSBpbiByZXMucmVzcG9uc2UpIHtcbiAgdGhpcy5yZXN1bHQucHVzaCh7dmFsdWU6IHJlcy5yZXNwb25zZVtrZXldfSk7XG4gIGNvbnNvbGUubG9nKFwidGhpcyBhcnJheVwiLCB0aGlzLnJlc3VsdCk7XG59XG5cbiAgfVxuICBvblNjcm9sbChhcmdzOiBTY3JvbGxFdmVudERhdGEpIHtcbiAgICBjb25zdCBzY3JvbGxWaWV3ID0gYXJncy5vYmplY3QgYXMgU2Nyb2xsVmlldztcblxuICAgIC8vIGNvbnNvbGUubG9nKFwic2Nyb2xsWDogXCIgKyBhcmdzLnNjcm9sbFgpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwic2Nyb2xsWTogXCIgKyBhcmdzLnNjcm9sbFkpO1xufVxuXG5leHRyYWN0T25BaXIoKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgZXh0cmFjdFwiKVxuICAvLyB0aGlzLm15U2VydmljZS5nZXRPbkFpcigpXG4gIC8vICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgLy8gICAgICAgY29uc29sZS5sb2coXCJPTiBBSVIgT04gQUlSIE9OIEFJUlwiLCByZXN1bHQpXG4gICAgICAgIGNvbnN0IHJlc3VsdD0geyAgXCJ0dl9yZXN1bHRzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiWW93aXMgQmVuOiBUaGUgU2VyaWVzXCIsXG4gICAgICAgICAgICBcImltZGJfaWRcIjogXCJ0dDEzMDM5MDQyXCIsXG4gICAgICAgICAgICAgXCJ5ZWFyXCI6IFwiMjAyMFwiXG4gICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVG8ga2FmZSB0aXMgSGFyYXNcIixcbiAgICAgICAgICAgXCJpbWRiX2lkXCI6IFwidHQwMzg0NzQ1XCIsXG4gICAgICAgICAgICBcInllYXJcIjogXCIyMDAzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJCZXR0eXMgRGlhZ25vc2VcIixcbiAgICAgICAgICAgIFwiaW1kYl9pZFwiOiBcInR0NDMxMDQyNlwiLFxuICAgICAgICAgICAgXCJ5ZWFyXCI6IFwiMjAxNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICAge1xuICAgICAgICAgICAgIFwidGl0bGVcIjogXCJEcsOhZ2Egw7Zyw7Zrw7Zzw7ZrXCIsXG4gICAgICAgICAgIFwiaW1kYl9pZFwiOiBcInR0OTQ4MDQzMlwiLFxuICAgICAgICAgICBcInllYXJcIjogXCIyMDE5XCJcbiAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgIFwidGl0bGVcIjogXCJIYXV0ZSBEb2dcIixcbiAgICAgICAgICAgXCJpbWRiX2lkXCI6IFwidHQxMzA2NDIwNlwiLFxuICAgICAgICAgICBcInllYXJcIjogXCIyMDIwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAge1xuICAgICAgICAgIFwidGl0bGVcIjogXCJUaGUgQW1iZXIgUnVmZmluIFNob3dcIixcbiAgICAgICAgICAgIFwiaW1kYl9pZFwiOiBcInR0MTEwNTgwNzhcIixcbiAgICAgICAgICAgICBcInllYXJcIjogXCIyMDIwXCJcbiAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIk1hZ2ljIG9mIERpc25leSdzIEFuaW1hbCBLaW5nZG9tXCIsXG4gICAgICAgICAgIFwiaW1kYl9pZFwiOiBcInR0MTAxOTYzNzhcIixcbiAgICAgICAgICBcInllYXJcIjogXCIyMDIwXCJcbiAgICAgICAgIH0sXG4gICAgICAgICB7XG4gICAgICAgICAgIFwidGl0bGVcIjogXCJaZWh1IFplXCIsXG4gICAgICAgICAgIFwiaW1kYl9pZFwiOiBcInR0MDA3NzEwOFwiLFxuICAgICAgICAgICAgXCJ5ZWFyXCI6IFwiMTk3OFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFNjaG9vbCBOdXJzZSBGaWxlc1wiLFxuICAgICAgICAgICAgXCJpbWRiX2lkXCI6IFwidHQxMjg3OTUyMlwiLFxuICAgICAgICAgICAgXCJ5ZWFyXCI6IFwiMjAyMFwiXG4gICAgICAgICAgfV19XG4gICAgICAgICAgdGhpcy5vbkdldFN0YXRpY3MocmVzdWx0KTtcbiAgICAgICAgICBcbiAgICAgIC8vIH0sIChlcnJvcikgPT4ge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIC8vIH0pO1xufVxuXG5wcml2YXRlIG9uR2V0U3RhdGljcyhyZXMpIHtcbiAgXG4gXG5cbiAgZm9yIChsZXQga2V5IGluIHJlcy50dl9yZXN1bHRzKSB7XG4gICAgXG4gICAgdGhpcy5yZXN1bHQyLnB1c2goe3ZhbHVlOiByZXMudHZfcmVzdWx0c1trZXldfSk7XG4gIFxuICAgIC8vIGNvbnNvbGUubG9nKFwicmVzdWx0aW5nIGluIFwiLHRoaXMucmVzdWx0Mik7XG4gIFxuICBcbiAgfVxuICBcbiAgdGhpcy5yZXN1bHQyLmZvckVhY2gob2JqID0+IHtcbiAgICB0aGlzLmV4dHJhY3RJbWFnZShvYmoudmFsdWUuaW1kYl9pZCk7XG4gICB9KTtcbiAgXG4gIFxuICBcbiAgICB9XG4gICAgZXh0cmFjdEltYWdlKHZhbHVlKSB7XG5cbiAgICAgIHRoaXMubXlTZXJ2aWNlLmdldEltYWdlTmFtZSh2YWx1ZSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgaW1hZ2UgcmVzdWx0IFwiLCByZXN1bHQpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgdGhpcy5vbkdldEltYWdlKHJlc3VsdCk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICAgb25HZXRJbWFnZShyZXMpIHtcbiAgICAgIFxuICAgIFxuICAgICAgZm9yIChsZXQga2V5IGluIHJlcykge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5maWx0ZXJlZC5wdXNoKHtpbWFnZTogcmVzfSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSU1BR0UgUkVzdWx0IFwiLHRoaXMucmVzdWx0KTtcbiAgICBcbiAgICAgICAgdGhpcy5yZXN1bHQ9IHRoaXMuZmlsdGVyZWQucmVkdWNlKChhY2MsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgICBjb25zdCB4ID0gYWNjLmZpbmQoaXRlbSA9PiBpdGVtLmltYWdlID09PSBjdXJyZW50LmltYWdlKTtcbiAgICAgICAgICBpZiAoIXgpIHtcbiAgICAgICAgICAgIHJldHVybiBhY2MuY29uY2F0KFtjdXJyZW50XSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBbXSk7XG4gICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdmaWx0ZXJlZCcsIHRoaXMuZmlsdGVyZWQpO1xuICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgfVxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgICB9XG5cbmV4dHJhY3RUcmVuZGluZ01vdmllcygpIHtcbiAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBleHRyYWN0IFRyZW5kaW5nIE1vdmllc1wiKVxuICAvLyB0aGlzLm15U2VydmljZS5nZXRUcmVuZGluZ01vdmllcygpXG4gIC8vICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJUUkVORElOZyBUUkVORElOR1wiLCByZXN1bHQpXG4gICAgICAgIGNvbnN0IHJlc3VsdD0gIHtcbiAgICAgICAgICBcIm1vdmllX3Jlc3VsdHNcIjogW1xuICAgICAgICBcbiAgICAgICAgICAge1xuICAgICAgICAgICAgIFwidGl0bGVcIjogXCJEb24ndCBSZWFkIFRoaXMgT24gYSBQbGFuZVwiLFxuICAgICAgICAgIFwieWVhclwiOiBcIjBcIixcbiAgICAgICAgICAgIFwiaW1kYl9pZFwiOiBcInR0NzUyNTc5MlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkJydXR1cyBWcyBDw6lzYXJcIixcbiAgICAgICAgICAgIFwieWVhclwiOiBcIjIwMjBcIixcbiAgICAgICAgICAgIFwiaW1kYl9pZFwiOiBcInR0MTA1NTc1MjRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDA0MjM3MTNcIixcbiAgICAgICAgICAgIFwidGl0bGVcIjpcIlBsdXMgYmVsbGUgbGEgdmllXCIsXG4gICAgICAgICAgICBcInllYXJcIjpcIjIwMDRcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgICB0aGlzLm9uR2V0VHJlbmRpbmdNb3ZpZXMocmVzdWx0KTtcbiAgICAgICAgICBcbiAgICAgIC8vIH0sIChlcnJvcikgPT4ge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIC8vIH0pO1xufVxuXG5wcml2YXRlIG9uR2V0VHJlbmRpbmdNb3ZpZXMocmVzKSB7XG4gIFxuIFxuXG4gIGZvciAobGV0IGtleSBpbiByZXMubW92aWVfcmVzdWx0cykge1xuICAgIFxuICAgIHRoaXMucmVzdWx0My5wdXNoKHt2YWx1ZTogcmVzLm1vdmllX3Jlc3VsdHNba2V5XX0pO1xuICBcbiAgICAvLyBjb25zb2xlLmxvZyhcInJlc3VsdGluZyBpbiBcIix0aGlzLnJlc3VsdDIpO1xuICBcbiAgXG4gIH1cbiAgXG4gIHRoaXMucmVzdWx0My5mb3JFYWNoKG9iaiA9PiB7XG4gICAgdGhpcy5leHRyYWN0SW1hZ2UyKG9iai52YWx1ZS5pbWRiX2lkKTtcbiAgIH0pO1xuICBcbiAgXG4gIFxuICAgIH1cblxuICAgIGV4dHJhY3RJbWFnZTIodmFsdWUpIHtcblxuICAgICAgdGhpcy5teVNlcnZpY2UuZ2V0SW1hZ2VOYW1lMih2YWx1ZSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgaW1hZ2UgcmVzdWx0IFwiLCByZXN1bHQpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgdGhpcy5vbkdldEltYWdlMihyZXN1bHQpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgIG9uR2V0SW1hZ2UyKHJlcykge1xuICAgICAgXG4gICAgXG4gICAgICBmb3IgKGxldCBrZXkgaW4gcmVzKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmZpbHRlcmVkMi5wdXNoKHtpbWFnZTogcmVzfSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSU1BR0UgUkVzdWx0IFwiLHRoaXMucmVzdWx0KTtcbiAgICBcbiAgICAgICAgdGhpcy5yZXN1bHQ0PSB0aGlzLmZpbHRlcmVkMi5yZWR1Y2UoKGFjYywgY3VycmVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHggPSBhY2MuZmluZChpdGVtID0+IGl0ZW0uaW1hZ2UgPT09IGN1cnJlbnQuaW1hZ2UpO1xuICAgICAgICAgIGlmICgheCkge1xuICAgICAgICAgICAgcmV0dXJuIGFjYy5jb25jYXQoW2N1cnJlbnRdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9XG4gICAgICAgIH0sIFtdKTtcbiAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZpbHRlcmVkJywgdGhpcy5maWx0ZXJlZCk7XG4gICAgIFxuICAgICAgICBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgXG5cblxuXG5cblxuICAgICAgdGhpcy5yYW5kb209dGhpcy5yZXN1bHQ0W01hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkqMildLmltYWdlLnBvc3RlcjtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucmFuZG9tKVxuICAgICAgXG4gICAgICAgIH1cbiAgICAgXG4gICAgICAgIFxuZXh0cmFjdFVwQ29taW5nKCkge1xuICAvLyBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGV4dHJhY3RcIilcbiAgLy8gdGhpcy5teVNlcnZpY2UuZ2V0T25VcENvbWluZygpXG4gIC8vICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgLy8gICAgICAgY29uc29sZS5sb2coXCJPTiBBSVIgT04gQUlSIE9OIEFJUlwiLCByZXN1bHQpXG4gICAgICAgIGNvbnN0IHJlc3VsdD0geyAgXCJtb3ZpZV9yZXN1bHRzXCI6IFt7XG4gICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDEwNjQ4MTk4XCIsXG4gICAgICAgICAgXCJ0aXRsZVwiOlwiRGltZSBDdcOhbmRvIFTDulwiLFxuICAgICAgICAgIFwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImltZGJfaWRcIjpcInR0MTA2ODc3NDBcIixcbiAgICAgICAgICAgIFwidGl0bGVcIjpcIlByaW5jZXpuYSB6YWtsZXTDoSB2IMSNYXNlXCIsXG4gICAgICAgICAgICBcInllYXJcIjpcIjIwMjBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgIFwiaW1kYl9pZFwiOlwidHQxMTYyMjI3MlwiLFxuICAgICAgICAgIFwidGl0bGVcIjpcIlNwcmluZyBVamUgc3ByaW5nXCIsXG4gICAgICAgICAgXCJ5ZWFyXCI6XCIyMDIwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaW1kYl9pZFwiOlwidHQxMTM1NDE2NFwiLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOlwi6ICB5b6M44Gu6LOH6YeR44GM44GC44KK44G+44Gb44KTXCIsXG4gICAgICAgICAgICBcInllYXJcIjpcIjIwMjBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDEwNDMxMzMyXCIsXG5cInRpdGxlXCI6XCJMZWdlbmQgUXVlc3Q6IFRoZSBPcmlnaW5cIixcblwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImltZGJfaWRcIjpcInR0MTE2OTc2OTBcIixcblwidGl0bGVcIjpcIlRoZSBXb21hbiBXaG8gUmFuXCIsXG5cInllYXJcIjpcIjIwMjBcIlxuICAgICAgICAgIH1dfVxuICAgICAgICBcbiAgICAgICAgICB0aGlzLm9uR2V0VXBDb21pbmcocmVzdWx0KTtcbiAgICAgICAgICBcbiAgICAgIC8vIH0sIChlcnJvcikgPT4ge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIC8vIH0pO1xufVxuXG5wcml2YXRlIG9uR2V0VXBDb21pbmcocmVzKSB7XG4gIFxuIFxuXG4gIGZvciAobGV0IGtleSBpbiByZXMubW92aWVfcmVzdWx0cykge1xuICAgIFxuICAgIHRoaXMucmVzdWx0VXBDb21pbmcucHVzaCh7dmFsdWU6IHJlcy5tb3ZpZV9yZXN1bHRzW2tleV19KTtcbiAgXG4gICAgLy8gY29uc29sZS5sb2coXCJyZXN1bHRpbmcgaW4gXCIsdGhpcy5yZXN1bHQyKTtcbiAgXG4gIFxuICB9XG4gIFxuICB0aGlzLnJlc3VsdFVwQ29taW5nLmZvckVhY2gob2JqID0+IHtcbiAgICB0aGlzLmV4dHJhY3RJbWFnZVVwQ29taW5nKG9iai52YWx1ZS5pbWRiX2lkKTtcbiAgIH0pO1xuICBcbiAgXG4gIFxuICAgIH1cbiAgICBleHRyYWN0SW1hZ2VVcENvbWluZyh2YWx1ZSkge1xuXG4gICAgICB0aGlzLm15U2VydmljZS5nZXRJbWFnZU5hbWUodmFsdWUpXG4gICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGltYWdlIHJlc3VsdCBcIiwgcmVzdWx0KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHRoaXMub25HZXRJbWFnZVVwQ29taW5nKHJlc3VsdCk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICAgb25HZXRJbWFnZVVwQ29taW5nKHJlcykge1xuICAgICAgXG4gICAgXG4gICAgICBmb3IgKGxldCBrZXkgaW4gcmVzKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLlVwQ29taW5nSW1hZ2UucHVzaCh7aW1hZ2U6IHJlc30pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIklNQUdFIFJFc3VsdCBcIix0aGlzLnJlc3VsdCk7XG4gICAgXG4gICAgICAgIHRoaXMuZmlsdGVyZWRVcENvbWluZz0gdGhpcy5VcENvbWluZ0ltYWdlLnJlZHVjZSgoYWNjLCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgeCA9IGFjYy5maW5kKGl0ZW0gPT4gaXRlbS5pbWFnZSA9PT0gY3VycmVudC5pbWFnZSk7XG4gICAgICAgICAgaWYgKCF4KSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjLmNvbmNhdChbY3VycmVudF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgW10pO1xuICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZmlsdGVyZWQnLCB0aGlzLmZpbHRlcmVkKTtcbiAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgXG4gICAgICBcbiAgICAgICAgfVxuICAgICAgICBleHRyYWN0VHJlbmRpbmdTaG93cygpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGV4dHJhY3RcIilcbiAgICAgICAgICAvLyB0aGlzLm15U2VydmljZS5nZXRPblRyZW5kaW5nU2hvdygpXG4gICAgICAgICAgLy8gICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKFwiT04gQUlSIE9OIEFJUiBPTiBBSVJcIiwgcmVzdWx0KVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdD0geyAgXCJ0dl9yZXN1bHRzXCI6IFt7XG4gICAgICAgICAgICAgICAgICBcImltZGJfaWRcIjpcInR0MTI2MjQ4NDRcIixcbiAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjpcIlRoZSBHcmVhdCBIZWlzdFwiLFxuICAgICAgICAgICAgICAgICAgXCJ5ZWFyXCI6XCIyMDIwXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaW1kYl9pZFwiOlwidHQ5ODQ5MjEwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjpcIkJpb2hhY2tlcnNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ5ZWFyXCI6XCIyMDIwXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaW1kYl9pZFwiOlwidHQxMDYyMzU1MFwiLFxuICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6XCJUaGUgRnVnaXRpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ5ZWFyXCI6XCIyMDIwXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaW1kYl9pZFwiOlwidHQ2OTA1Njg2XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjpcIkxvdmVjcmFmdCBDb3VudHJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImltZGJfaWRcIjpcInR0MTA1ODQ2MDhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOlwiVGVlbmFnZSBCb3VudHkgSHVudGVyc1wiLFxuICAgICAgICAgICAgICAgICAgICBcInllYXJcIjpcIjIwMjBcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDEwOTg2NDEwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjpcIlRlZCBMYXNzb1wiLFxuICAgICAgICAgICAgICAgICAgICBcInllYXJcIjpcIjIwMjBcIlxuICAgICAgICAgICAgICAgICAgfV19XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB0aGlzLm9uR2V0VHJlbmRpbmdTaG93cyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcHJpdmF0ZSBvbkdldFRyZW5kaW5nU2hvd3MocmVzKSB7XG4gICAgICAgICAgXG4gICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICAgZm9yIChsZXQga2V5IGluIHJlcy50dl9yZXN1bHRzKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMucmVzdWx0VHJlbmRpbmdTaG93cy5wdXNoKHt2YWx1ZTogcmVzLnR2X3Jlc3VsdHNba2V5XX0pO1xuICAgICAgICAgIFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZXN1bHRpbmcgaW4gXCIsdGhpcy5yZXN1bHQyKTtcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgdGhpcy5yZXN1bHRUcmVuZGluZ1Nob3dzLmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdEltYWdlVHJlbmRpbmdTaG93cyhvYmoudmFsdWUuaW1kYl9pZCk7XG4gICAgICAgICAgIH0pO1xuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXh0cmFjdEltYWdlVHJlbmRpbmdTaG93cyh2YWx1ZSkge1xuICAgICAgICBcbiAgICAgICAgICAgICAgdGhpcy5teVNlcnZpY2UuZ2V0SW1hZ2VOYW1lKHZhbHVlKVxuICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgaW1hZ2UgcmVzdWx0IFwiLCByZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25HZXRJbWFnZVRyZW5kaW5nU2hvd3MocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgb25HZXRJbWFnZVRyZW5kaW5nU2hvd3MocmVzKSB7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiByZXMpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLlRyZW5kaW5nU2hvd3NJbWFnZS5wdXNoKHtpbWFnZTogcmVzfSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJJTUFHRSBSRXN1bHQgXCIsdGhpcy5yZXN1bHQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJlZFRyZW5kaW5nU2hvd3M9IHRoaXMuVHJlbmRpbmdTaG93c0ltYWdlLnJlZHVjZSgoYWNjLCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB4ID0gYWNjLmZpbmQoaXRlbSA9PiBpdGVtLmltYWdlID09PSBjdXJyZW50LmltYWdlKTtcbiAgICAgICAgICAgICAgICAgIGlmICgheCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjLmNvbmNhdChbY3VycmVudF0pO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBbXSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZmlsdGVyZWQnLCB0aGlzLmZpbHRlcmVkKTtcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBleHRyYWN0UmVjZW50bHlBZGRlZCgpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgZXh0cmFjdFwiKVxuICAgICAgICAgICAgICAgICAgLy8gdGhpcy5teVNlcnZpY2UuZ2V0T25SZWNlbnRseUFkZGVkKClcbiAgICAgICAgICAgICAgICAgIC8vICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKFwiT04gQUlSIE9OIEFJUiBPTiBBSVJcIiwgcmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0PSB7ICBcInR2X3Jlc3VsdHNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDEwNjgxNjE0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjpcIlRoZSBEZWNlaXZlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInllYXJcIjpcIjIwMjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDEyNzUzNjkyXCIsXG5cInRpdGxlXCI6XCJDb25uZWN0ZWQ6IFRoZSBIaWRkZW4gU2NpZW5jZSBvZiBFdmVyeXRoaW5nXCIsXG5cInllYXJcIjpcIjIwMjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDkyMDg4NzZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6XCJUaGUgRmFsY29uIGFuZCB0aGUgV2ludGVyIFNvbGRpZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInllYXJcIjpcIjIwMjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDEwODU3MjEwXCIsXG5cInRpdGxlXCI6XCJNdXBwZXRzIE5vd1wiLFxuXCJ5ZWFyXCI6XCIyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1kYl9pZFwiOlwidHQ5Nzg5NjYwXCIsXG5cInRpdGxlXCI6XCJUcmFuc2Zvcm1lcnM6IFdhciBmb3IgQ3liZXJ0cm9uIFRyaWxvZ3lcIixcblwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1dfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25HZXRSZWNlbnRseUFkZGVkKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIC8vIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHByaXZhdGUgb25HZXRSZWNlbnRseUFkZGVkKHJlcykge1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHJlcy50dl9yZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdFJlY2VudGx5QWRkZWQucHVzaCh7dmFsdWU6IHJlcy50dl9yZXN1bHRzW2tleV19KTtcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlc3VsdGluZyBpbiBcIix0aGlzLnJlc3VsdDIpO1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRSZWNlbnRseUFkZGVkLmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0SW1hZ2VSZWNlbnRseUFkZGVkKG9iai52YWx1ZS5pbWRiX2lkKTtcbiAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBleHRyYWN0SW1hZ2VSZWNlbnRseUFkZGVkKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5teVNlcnZpY2UuZ2V0SW1hZ2VOYW1lKHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGltYWdlIHJlc3VsdCBcIiwgcmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkdldEltYWdlUmVjZW50bHlBZGRlZChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgb25HZXRJbWFnZVJlY2VudGx5QWRkZWQocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiByZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5SZWNlbnRseUFkZGVkSW1hZ2UucHVzaCh7aW1hZ2U6IHJlc30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJJTUFHRSBSRXN1bHQgXCIsdGhpcy5yZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRSZWNlbnRseUFkZGVkPSB0aGlzLlJlY2VudGx5QWRkZWRJbWFnZS5yZWR1Y2UoKGFjYywgY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB4ID0gYWNjLmZpbmQoaXRlbSA9PiBpdGVtLmltYWdlID09PSBjdXJyZW50LmltYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYy5jb25jYXQoW2N1cnJlbnRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBbXSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZpbHRlcmVkJywgdGhpcy5maWx0ZXJlZCk7XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgIFxuLy8gICAgIGdldEltYWdlTmFtZSh2YWx1ZSkge1xuLy8gICAgICAgdmFyIGxvd2VyPXZhbHVlLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XG4vLyAgICAgICBjb25zb2xlLmxvZyhsb3dlcik7XG4vLyAgICAgICByZXR1cm4gYH4vaW1hZ2VzLyR7bG93ZXJ9LnBuZ2A7XG4vLyAgIH1cblxuXG5cblxuICBcblxuICAgXG4vLyBhZGRJbnRlcmFjdGlvbihtZWRIZXJiU3VwOiBzdHJpbmcpIHtcbi8vICAgY29uc29sZS5sb2coXCJhZGQgbWVkSGVyYlN1cFwiLCBtZWRIZXJiU3VwKVxuLy8gICAgIGRpYWxvZ3MuYWN0aW9uKHtcbi8vICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmUgdGhhdCB5b3Ugd2FudCB0byBhZGQgdGhpcyBtZWRpY2luZSB0byB5b3VyIGxpc3Q/XCIsXG4vLyAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcbi8vICAgICAgIGFjdGlvbnM6IFtcIlllc1wiLCBcIk5vXCJdXG4vLyAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuLy8gICAgICAgaWYgKHJlc3VsdCA9PSBcIlllc1wiKSB7XG4vLyAgICAgICAgdGhpcy5tZWRIZXJiU3VwX25hbWUgPSBtZWRIZXJiU3VwO1xuLy8gICAgICAgIHRoaXMubWVkaWNpbmVfZm9ybSA9IFwiUGlsbFwiO1xuLy8gICAgICAgICB0aGlzLmRiLmV4ZWNTUUwoXCJJTlNFUlQgSU5UTyBtZWRpY2luZXMgKG1lZGljaW5lc19uYW1lLCBtZWRpY2luZV9kb3NhZ2UsIG1lZGljaW5lX2Zvcm0sIG1lZGljaW5lX2ZyZXF1ZW5jeSwgdXNlcl9pZCkgVkFMVUVTICg/LD8sPyw/LD8pXCIsIFt0aGlzLm1lZEhlcmJTdXBfbmFtZSwgdGhpcy5tZWRpY2luZV9kb3NhZ2UsIHRoaXMubWVkaWNpbmVfZm9ybSwgdGhpcy5tZWRpY2luZV9mcmVxdWVuY3ksIHRoaXMudXNlcl9pZF0pLnRoZW4oaWQgPT4ge1xuLy8gICAgICAgICAgICB0aGlzLm1lZGljaW5lTGlzdC51bnNoaWZ0KHtpZDogaWQsIG5hbWU6IHRoaXMubWVkSGVyYlN1cF9uYW1lLCBkb3NhZ2U6IHRoaXMubWVkaWNpbmVfZG9zYWdlLCBmb3JtOiB0aGlzLm1lZGljaW5lX2Zvcm0sIGZyZXF1ZW5jeTp0aGlzLm1lZGljaW5lX2ZyZXF1ZW5jeX0pO1xuLy8gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiBhZGRpbmcgd2FzIGEgc3VjZXNzXCIsIHRoaXMubWVkaWNpbmVMaXN0KTtcbi8vICAgICAgICAgICAgZGlhbG9ncy5hbGVydCgnTWVkaWNpbmUgc2F2ZWQgc3VjY2Vzc2Z1bGx5OicpO1xuICAgICAgICAgICBcbi8vICAgICAgICB9LCBlcnJvciA9PiB7XG4vLyAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBhZGRpbmcgYW4gaXRlbSB0byB5b3VyIGxpc3QuJywgZXJyb3IpO1xuLy8gICAgICAgICAgICB0aGlzLm1lZEhlcmJTdXBfbmFtZSA9IFwiXCI7XG4vLyAgICAgICAgICAgIHRoaXMubWVkaWNpbmVfZG9zYWdlID0gXCJcIjtcbi8vICAgICAgICAgICAgdGhpcy5tZWRpY2luZV9mb3JtID0gXCJcIjtcbi8vICAgICAgICAgICAgdGhpcy5tZWRpY2luZV9mcmVxdWVuY3kgPSBcIlwiO1xuLy8gICAgICAgIH0pO1xuXG4vLyAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PSBcIk5vXCIpIHtcbiAgICAgICBcbi8vICAgICAgIH1cbi8vICAgICB9KTtcbi8vICAgIH1cblxuc2VsZWN0ZWRTZWFyY2hNKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gIHRoaXMucmVzdWx0U2VsZWN0ZWQgPSBbXTtcbiAgdGhpcy5TZWxlY3RlZEZpbHRlcmVkPVtdO1xuICB0aGlzLm1vdmllX3Nob3c9XCJcIjtcbmxldCBzZWxlY3RlZD0gPGFueT5hcmdzLm9iamVjdC5iaW5kaW5nQ29udGV4dDtcbnRoaXMubW92aWVfc2hvdz1zZWxlY3RlZC5pbWFnZS5pZDtcbiAgdGhpcy5pc0hvbWVwYWdlID0gIXRoaXMuaXNIb21lcGFnZTtcbiBjb25zb2xlLmxvZygnIGdvdCBNT3ZpZVNob3cnLCB0aGlzLm1vdmllX3Nob3cpO1xuIHRoaXMuZXh0cmFjdFNlbGVjdE1vdmllU2hvdyh0aGlzLm1vdmllX3Nob3cpO1xuXG59XG5cbnNlbGVjdGVkU2VhcmNoKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gIHRoaXMubW92aWU9IXRoaXMubW92aWU7XG4gIHRoaXMucmVzdWx0U2VsZWN0ZWQgPSBbXTtcbiAgdGhpcy5TZWxlY3RlZEZpbHRlcmVkPVtdO1xuICB0aGlzLm1vdmllX3Nob3c9XCJcIjtcbmxldCBzZWxlY3RlZD0gPGFueT5hcmdzLm9iamVjdC5iaW5kaW5nQ29udGV4dDtcbnRoaXMubW92aWVfc2hvdz1zZWxlY3RlZC5pbWFnZS5pZDtcbiAgdGhpcy5pc0hvbWVwYWdlID0gIXRoaXMuaXNIb21lcGFnZTtcbiBjb25zb2xlLmxvZygnIGdvdCBNT3ZpZVNob3cnLCB0aGlzLm1vdmllX3Nob3cpO1xuIHRoaXMuZXh0cmFjdFNlbGVjdE1vdmllU2hvdyh0aGlzLm1vdmllX3Nob3cpO1xuXG59XG5cbmV4dHJhY3RTZWxlY3RNb3ZpZVNob3codmFsdWUpIHtcbiAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBleHRyYWN0IFNlbGVjdGVkIG1vdmllU2hvd3NcIilcbiAgdGhpcy5teVNlcnZpY2UuZ2V0U2VsZWN0ZWRNb3ZpZVNob3codmFsdWUpXG4gICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSByZXN1bHRcIiwgcmVzdWx0KVxuICAgICAgICBcbiAgICAgICAgICB0aGlzLm9uR2V0U2VsZWN0TW92aWVTaG93KHJlc3VsdCk7XG4gICAgICAgICAgXG4gICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbn1cblxucHJpdmF0ZSBvbkdldFNlbGVjdE1vdmllU2hvdyhyZXMpIHtcbiAgXG4gXG5cbiAgZm9yIChsZXQga2V5IGluIHJlcykge1xuICAgIFxuICAgIFxuICAgIHRoaXMuU2VsZWN0ZWRGaWx0ZXJlZC5wdXNoKHt2YWx1ZTogcmVzfSk7XG4gIFxuICAgIFxuICBcbiAgXG4gIH1cbiAgdGhpcy5yZXN1bHRTZWxlY3RlZD0gdGhpcy5TZWxlY3RlZEZpbHRlcmVkLnJlZHVjZSgoYWNjLCBjdXJyZW50KSA9PiB7XG4gICAgY29uc3QgeCA9IGFjYy5maW5kKGl0ZW0gPT4gaXRlbS5pbWFnZSA9PT0gY3VycmVudC5pbWFnZSk7XG4gICAgaWYgKCF4KSB7XG4gICAgICByZXR1cm4gYWNjLmNvbmNhdChbY3VycmVudF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cbiAgfSwgW10pO1xuICBcbiAgXG4gIGNvbnNvbGUubG9nKFwicmVzdWx0aW5nIGluIFwiLHRoaXMucmVzdWx0U2VsZWN0ZWQpO1xuICBcbiAgXG4gICAgfVxuXG4gICAgIFxuICAgXG4gICAgb25Ib21lVGFwKCk6IHZvaWQge1xuICAgICAgdGhpcy5tb3ZpZT0hdGhpcy5tb3ZpZTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lXCJdKTtcbiAgICAgICAgaWYoIXRoaXMuaXNIb21lcGFnZSl7XG4gICAgICAgICAgdGhpcy5pc0hvbWVwYWdlPSF0aGlzLmlzSG9tZXBhZ2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25IaXN0b3J5VGFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hpc3RvcnlcIl0pO1xuICBcbiAgICB9XG5cblxuICAgIFxuICAgICBcbiAgICBcblxuICAgXG4gICAgICBkaXNtaXNzS2V5Ym9hcmQoKSB7XG4gICAgICAgIGlmIChpc0lPUykge1xuICAgICAgICAgIFVJQXBwbGljYXRpb24uc2hhcmVkQXBwbGljYXRpb24ua2V5V2luZG93LmVuZEVkaXRpbmcodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgICAgIHV0aWxzLmFkLmRpc21pc3NTb2Z0SW5wdXQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgXG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==