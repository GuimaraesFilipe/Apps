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
                    "imdb_id": "tt10613518",
                    "title": "La piazza della mia città - Bologna e Lo Stato Sociale",
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
                    "imdb_id": "tt11148740",
                    "title": "Town of Glory",
                    "year": "2020"
                },
                {
                    "imdb_id": "tt5194252",
                    "title": "The Bad Dad",
                    "year": "2020"
                },
                {
                    "imdb_id": "tt8333418",
                    "title": "The Last Laugh",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0Esa0ZBQXFGO0FBQ3JGLDhGQUErRDtBQUMvRCxrRUFBNEM7QUFFNUMsdUZBQXNEO0FBQ3RELDRGQUEyRTtBQUczRSxrR0FBNkQ7QUFDN0QsSUFBSSxhQUFhLEdBQUcsbUJBQU8sQ0FBQyxtREFBYSxDQUFDLENBQUM7QUFFM0MsaUdBQW9EO0FBQ3BELCtFQUF3RDtBQUV4RCxvRkFBMkU7QUFlM0UsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQXVEdEIsWUFBb0IsSUFBZ0IsRUFBUyxTQUE0QixFQUFVLGdCQUFrQyxFQUFVLFlBQTBCO1FBQXJJLFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFtQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQXJEM0osV0FBTSxHQUFZLElBQUksQ0FBQztRQUVyQixXQUFNLEdBQWUsRUFBRSxDQUFDO1FBQ3hCLFlBQU8sR0FBZSxFQUFFLENBQUM7UUFDekIsWUFBTyxHQUFlLEVBQUUsQ0FBQztRQUN6QixZQUFPLEdBQWUsRUFBRSxDQUFDO1FBQ3pCLG1CQUFjLEdBQWUsRUFBRSxDQUFDO1FBQ2hDLGdCQUFXLEdBQWUsRUFBRSxDQUFDO1FBQzdCLGFBQVEsR0FBZSxFQUFFLENBQUM7UUFDMUIsY0FBUyxHQUFlLEVBQUUsQ0FBQztRQUMzQixxQkFBZ0IsR0FBZSxFQUFFLENBQUM7UUFHbEMsYUFBUSxHQUFrQixFQUFFLENBQUM7UUFFNUIsUUFBRyxHQUFXLE9BQU8sQ0FBQztRQUN2QixVQUFLLEdBQVcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFJekMsZUFBVSxHQUFDLEVBQUUsQ0FBQztRQUNmLFFBQUcsR0FBRyxDQUFDLENBQUM7UUFDUixhQUFRLEdBQUcsQ0FB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TSxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDOzhCQUFPLGlCQUFVOzJDQUFDO0FBQ2xCO0lBQWxDLGdCQUFTLENBQUMsTUFBTSxFQUFDLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDOzhCQUFPLGlCQUFVOzJDQUFDO0FBckI1QyxhQUFhO0lBUnpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTTtRQUVoQixvRkFBb0M7O0tBRXZDLENBQUM7SUFDRCxpQkFBVSxFQUFFO3FDQXlEaUIsaUJBQVUsRUFBb0IscUNBQWlCLEVBQTRCLHlCQUFnQixFQUF3Qiw0QkFBWTtHQXZEaEosYUFBYSxDQXlyQnpCO0FBenJCWSxzQ0FBYSIsImZpbGUiOiJidW5kbGUuODlhZjRkZTk0OTM3OGM2M2JkOTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCJ1aS9zZWFyY2gtYmFyXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIn4vYXBwLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBTY3JvbGxWaWV3LCBTY3JvbGxFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zY3JvbGwtdmlld1wiO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IGdldEZyYW1lQnlJZCwgRnJhbWUsIEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XG5pbXBvcnQgeyBUb2tlbk1vZGVsLCBBdXRvQ29tcGxldGVFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWF1dG9jb21wbGV0ZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBpc0lPUywgaXNBbmRyb2lkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XG52YXIgdXRpbGl0eU1vZHVsZSA9IHJlcXVpcmUoXCJ1dGlscy91dGlsc1wiKTtcbmRlY2xhcmUgY29uc3QgVUlBcHBsaWNhdGlvbjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgTXlIdHRwR2V0U2VydmljZTIgfSBmcm9tIFwiLi9odHRwLWdldC5zZXJ2aWNlc1wiOyAgXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3JcIjtcbmltcG9ydCB7IEFueVR4dFJlY29yZCB9IGZyb20gXCJkbnNcIjtcbmltcG9ydCB7IGdldFN0cmluZyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGlzQnVzeTogYm9vbGVhbiA9IHRydWU7XG4gICAgcmFuZG9tOiBhbnk7XG4gICAgcmVzdWx0OiBBcnJheTxhbnk+ID0gW107IFxuICAgIHJlc3VsdDI6IEFycmF5PGFueT4gPSBbXTsgXG4gICAgcmVzdWx0MzogQXJyYXk8YW55PiA9IFtdOyBcbiAgICByZXN1bHQ0OiBBcnJheTxhbnk+ID0gW107IFxuICAgIHJlc3VsdFNlbGVjdGVkOiBBcnJheTxhbnk+ID0gW107IFxuICAgIHN1Z2dlc3Rpb25zOiBBcnJheTxhbnk+ID0gW107XG4gICAgZmlsdGVyZWQ6IEFycmF5PGFueT4gPSBbXTtcbiAgICBmaWx0ZXJlZDI6IEFycmF5PGFueT4gPSBbXTtcbiAgICBTZWxlY3RlZEZpbHRlcmVkOiBBcnJheTxhbnk+ID0gW107XG4gICAgc3VnZ2VzdDogT2JzZXJ2YWJsZUFycmF5PFRva2VuTW9kZWw+O1xuICBcdGRiOiBhbnk7XG4gICAgc2VsZWN0ZWQ6IEFycmF5PE9iamVjdD4gPSBbXTtcbiAgICB1c2VyX2lkOiBzdHJpbmc7XG4gICAgIHVybDogc3RyaW5nID0gXCI8dXJsPlwiOyBcbiAgICB2YWx1ZTpib29sZWFuID0gdXRpbHMuaXNEYXRhVVJJKHRoaXMudXJsKTtcbiAgICBAVmlld0NoaWxkKFwibW92aWVTaG93XCIse3N0YXRpYzogZmFsc2V9KSBtb3ZpZVNob3c6IEVsZW1lbnRSZWY7XG4gICAgIEBWaWV3Q2hpbGQoXCJtZWQyXCIsIHtzdGF0aWM6IGZhbHNlfSkgbWVkMjogRWxlbWVudFJlZjtcbiAgICAgQFZpZXdDaGlsZChcIm1lZDNcIix7c3RhdGljOiBmYWxzZX0pIG1lZDM6IEVsZW1lbnRSZWY7XG4gICAgIG1vdmllX3Nob3c9XCJcIjtcbiAgICBzdW0gPSAwO1xuICAgIHN1bVRvdGFsID0gMDtcbiAgICBzdW1EZWF0aHMgPSAwO1xuICAgIHN1bXBvcD0wO1xuICAgIHN1bWFjdGl2ZT0wO1xuICAgIHN1bXJlY292ZXJlZD0wO1xuICAgIGlzTm90TG9nZ2VkSW49IHRydWU7XG4gICAgaXNIb21lcGFnZSA9IHRydWU7XG4gICAgcmVkPXRydWU7XG4gICAgZ3JlZW49dHJ1ZTtcbiAgICBvcmFuZ2U9dHJ1ZTtcbiAgICBjcmVhdGVBbmRVcGRhdGU6IGFueTtcbiAgICBtZWRIZXJiU3VwOiBBcnJheTxPYmplY3Q+ID0gW107XG4gICAgaXNOb3RTZWFyY2g9IHRydWU7XG4gICAgZnJhbWUgPSBGcmFtZS5nZXRGcmFtZUJ5SWQoXCJteUZyYW1lXCIpO1xuICAgIGlzU2Nhbj10cnVlO1xuICByZXN1bHRVcENvbWluZzogQXJyYXk8YW55PiA9IFtdOyBcbiAgVXBDb21pbmdJbWFnZTogQXJyYXk8YW55PiA9IFtdOyBcbiAgZmlsdGVyZWRVcENvbWluZzogQXJyYXk8YW55PiA9IFtdOyBcbiAgcmVzdWx0VHJlbmRpbmdTaG93czogQXJyYXk8YW55PiA9IFtdOyBcbiAgVHJlbmRpbmdTaG93c0ltYWdlOkFycmF5PGFueT4gPSBbXTsgXG4gIGZpbHRlcmVkVHJlbmRpbmdTaG93czogQXJyYXk8YW55PiA9IFtdOyBcblxuICAgIFxuXG5cbiAgICBvbkJ1c3lDaGFuZ2VkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgICAgbGV0IGluZGljYXRvcjogQWN0aXZpdHlJbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+YXJncy5vYmplY3Q7XG4gICAgICBjb25zb2xlLmxvZyhcImluZGljYXRvci5idXN5IGNoYW5nZWQgdG86IFwiICsgaW5kaWNhdG9yLmJ1c3kpO1xuICB9XG4gICBcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQscHJpdmF0ZSBteVNlcnZpY2U6IE15SHR0cEdldFNlcnZpY2UyLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgYXBwY29tcG9uZW50OiBBcHBDb21wb25lbnQpIHtcblxuICAgICAgXG5cbiAgICAgICBcbiAgICB9IFxuICAgIFxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICBcbiAgICAgIC8vIHRoaXMuZXh0cmFjdERhdGEoKTtcbiAgICAgIHRoaXMuZXh0cmFjdE9uQWlyKCk7XG4gICAgICB0aGlzLmV4dHJhY3RUcmVuZGluZ1Nob3dzKCk7XG4gICAgICB0aGlzLmV4dHJhY3RVcENvbWluZygpO1xuICAgICAgdGhpcy5leHRyYWN0VHJlbmRpbmdNb3ZpZXMoKTtcbiAgICAgIC8vIHRoaXMuc2VsZWN0SXRlbXMoKTtcbiAgICB9XG4gIC8vICAgZXh0cmFjdERhdGEoKSB7XG4gIC8vICAgICB0aGlzLm15U2VydmljZS5nZXRBbGwoKVxuICAvLyAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAvLyAgICAgICAgICAgICB0aGlzLnN1Z2dlc3Rpb24ocmVzdWx0KTtcbiAgICAgICAgICAgICAgXG4gIC8vICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgLy8gICAgICAgICB9KTtcbiAgLy8gfVxuICBcbi8vICAgc2VsZWN0SXRlbXMoKSB7XG4vLyAgICAgdGhpcy5kaXNtaXNzS2V5Ym9hcmQoKTtcbiAgIFxuLy8gICAgIGlmICghdGhpcy5pc0hvbWVwYWdlKXtcbi8vICAgICAgIHRoaXMucmVzdWx0PVtdO1xuLy8gICAgICAgdGhpcy5teVNlcnZpY2UuZ2V0SW5mbygpXG4gICBcbi8vICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgIFxuLy8gICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIG9iamVjdFwiLHJlc3VsdClcbi8vICAgICAgICAgdGhpcy5vbkdldERhdGFTdWNjZXNzKHJlc3VsdClcbiAgICAgICAgICBcbiAgICAgICAgICBcbi8vICAgICAgIH0sIChlcnJvcikgPT4ge1xuLy8gICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vICAgICAgIH0pO1xuXG4vLyAgICAgfVxuLy8gICAgIGVsc2V7XG4vLyAgICAgICB0aGlzLmlzSG9tZXBhZ2UgPSAhdGhpcy5pc0hvbWVwYWdlO1xuLy8gICAgICAgdGhpcy5teVNlcnZpY2UuZ2V0SW5mbygpXG4gICBcbi8vICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgIFxuLy8gICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIG9iamVjdFwiLHJlc3VsdClcbi8vICAgICAgICAgdGhpcy5vbkdldERhdGFTdWNjZXNzKHJlc3VsdClcbiAgICAgICAgICBcbiAgICAgICAgICBcbi8vICAgICAgIH0sIChlcnJvcikgPT4ge1xuLy8gICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vICAgICAgIH0pO1xuLy8gICAgIH1cbiAgXG5cbi8vIH0gXG5cbm9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQgeyBcbiAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgY29uc29sZS5sb2coXCJkcmF3ZXIxXCIpXG4gIFxufVxuXG5wcml2YXRlIG9uR2V0RGF0YVN1Y2Nlc3MocmVzKSB7XG5cbmZvciAobGV0IGtleSBpbiByZXMucmVzcG9uc2UpIHtcbiAgdGhpcy5yZXN1bHQucHVzaCh7dmFsdWU6IHJlcy5yZXNwb25zZVtrZXldfSk7XG4gIGNvbnNvbGUubG9nKFwidGhpcyBhcnJheVwiLCB0aGlzLnJlc3VsdCk7XG59XG5cbiAgfVxuICBvblNjcm9sbChhcmdzOiBTY3JvbGxFdmVudERhdGEpIHtcbiAgICBjb25zdCBzY3JvbGxWaWV3ID0gYXJncy5vYmplY3QgYXMgU2Nyb2xsVmlldztcblxuICAgIC8vIGNvbnNvbGUubG9nKFwic2Nyb2xsWDogXCIgKyBhcmdzLnNjcm9sbFgpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwic2Nyb2xsWTogXCIgKyBhcmdzLnNjcm9sbFkpO1xufVxuXG5leHRyYWN0T25BaXIoKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgZXh0cmFjdFwiKVxuICAvLyB0aGlzLm15U2VydmljZS5nZXRPbkFpcigpXG4gIC8vICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgLy8gICAgICAgY29uc29sZS5sb2coXCJPTiBBSVIgT04gQUlSIE9OIEFJUlwiLCByZXN1bHQpXG4gICAgICAgIGNvbnN0IHJlc3VsdD0geyAgXCJ0dl9yZXN1bHRzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiWW93aXMgQmVuOiBUaGUgU2VyaWVzXCIsXG4gICAgICAgICAgICBcImltZGJfaWRcIjogXCJ0dDEzMDM5MDQyXCIsXG4gICAgICAgICAgICAgXCJ5ZWFyXCI6IFwiMjAyMFwiXG4gICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVG8ga2FmZSB0aXMgSGFyYXNcIixcbiAgICAgICAgICAgXCJpbWRiX2lkXCI6IFwidHQwMzg0NzQ1XCIsXG4gICAgICAgICAgICBcInllYXJcIjogXCIyMDAzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJCZXR0eXMgRGlhZ25vc2VcIixcbiAgICAgICAgICAgIFwiaW1kYl9pZFwiOiBcInR0NDMxMDQyNlwiLFxuICAgICAgICAgICAgXCJ5ZWFyXCI6IFwiMjAxNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICAge1xuICAgICAgICAgICAgIFwidGl0bGVcIjogXCJEcsOhZ2Egw7Zyw7Zrw7Zzw7ZrXCIsXG4gICAgICAgICAgIFwiaW1kYl9pZFwiOiBcInR0OTQ4MDQzMlwiLFxuICAgICAgICAgICBcInllYXJcIjogXCIyMDE5XCJcbiAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgIFwidGl0bGVcIjogXCJIYXV0ZSBEb2dcIixcbiAgICAgICAgICAgXCJpbWRiX2lkXCI6IFwidHQxMzA2NDIwNlwiLFxuICAgICAgICAgICBcInllYXJcIjogXCIyMDIwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAge1xuICAgICAgICAgIFwidGl0bGVcIjogXCJUaGUgQW1iZXIgUnVmZmluIFNob3dcIixcbiAgICAgICAgICAgIFwiaW1kYl9pZFwiOiBcInR0MTEwNTgwNzhcIixcbiAgICAgICAgICAgICBcInllYXJcIjogXCIyMDIwXCJcbiAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIk1hZ2ljIG9mIERpc25leSdzIEFuaW1hbCBLaW5nZG9tXCIsXG4gICAgICAgICAgIFwiaW1kYl9pZFwiOiBcInR0MTAxOTYzNzhcIixcbiAgICAgICAgICBcInllYXJcIjogXCIyMDIwXCJcbiAgICAgICAgIH0sXG4gICAgICAgICB7XG4gICAgICAgICAgIFwidGl0bGVcIjogXCJaZWh1IFplXCIsXG4gICAgICAgICAgIFwiaW1kYl9pZFwiOiBcInR0MDA3NzEwOFwiLFxuICAgICAgICAgICAgXCJ5ZWFyXCI6IFwiMTk3OFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFNjaG9vbCBOdXJzZSBGaWxlc1wiLFxuICAgICAgICAgICAgXCJpbWRiX2lkXCI6IFwidHQxMjg3OTUyMlwiLFxuICAgICAgICAgICAgXCJ5ZWFyXCI6IFwiMjAyMFwiXG4gICAgICAgICAgfV19XG4gICAgICAgICAgdGhpcy5vbkdldFN0YXRpY3MocmVzdWx0KTtcbiAgICAgICAgICBcbiAgICAgIC8vIH0sIChlcnJvcikgPT4ge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIC8vIH0pO1xufVxuXG5wcml2YXRlIG9uR2V0U3RhdGljcyhyZXMpIHtcbiAgXG4gXG5cbiAgZm9yIChsZXQga2V5IGluIHJlcy50dl9yZXN1bHRzKSB7XG4gICAgXG4gICAgdGhpcy5yZXN1bHQyLnB1c2goe3ZhbHVlOiByZXMudHZfcmVzdWx0c1trZXldfSk7XG4gIFxuICAgIC8vIGNvbnNvbGUubG9nKFwicmVzdWx0aW5nIGluIFwiLHRoaXMucmVzdWx0Mik7XG4gIFxuICBcbiAgfVxuICBcbiAgdGhpcy5yZXN1bHQyLmZvckVhY2gob2JqID0+IHtcbiAgICB0aGlzLmV4dHJhY3RJbWFnZShvYmoudmFsdWUuaW1kYl9pZCk7XG4gICB9KTtcbiAgXG4gIFxuICBcbiAgICB9XG4gICAgZXh0cmFjdEltYWdlKHZhbHVlKSB7XG5cbiAgICAgIHRoaXMubXlTZXJ2aWNlLmdldEltYWdlTmFtZSh2YWx1ZSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgaW1hZ2UgcmVzdWx0IFwiLCByZXN1bHQpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgdGhpcy5vbkdldEltYWdlKHJlc3VsdCk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICAgb25HZXRJbWFnZShyZXMpIHtcbiAgICAgIFxuICAgIFxuICAgICAgZm9yIChsZXQga2V5IGluIHJlcykge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5maWx0ZXJlZC5wdXNoKHtpbWFnZTogcmVzfSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSU1BR0UgUkVzdWx0IFwiLHRoaXMucmVzdWx0KTtcbiAgICBcbiAgICAgICAgdGhpcy5yZXN1bHQ9IHRoaXMuZmlsdGVyZWQucmVkdWNlKChhY2MsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgICBjb25zdCB4ID0gYWNjLmZpbmQoaXRlbSA9PiBpdGVtLmltYWdlID09PSBjdXJyZW50LmltYWdlKTtcbiAgICAgICAgICBpZiAoIXgpIHtcbiAgICAgICAgICAgIHJldHVybiBhY2MuY29uY2F0KFtjdXJyZW50XSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBbXSk7XG4gICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdmaWx0ZXJlZCcsIHRoaXMuZmlsdGVyZWQpO1xuICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgfVxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgICB9XG5cbmV4dHJhY3RUcmVuZGluZ01vdmllcygpIHtcbiAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBleHRyYWN0IFRyZW5kaW5nIE1vdmllc1wiKVxuICAvLyB0aGlzLm15U2VydmljZS5nZXRUcmVuZGluZ01vdmllcygpXG4gIC8vICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJUUkVORElOZyBUUkVORElOR1wiLCByZXN1bHQpXG4gICAgICAgIGNvbnN0IHJlc3VsdD0gIHtcbiAgICAgICAgICBcIm1vdmllX3Jlc3VsdHNcIjogW1xuICAgICAgICBcbiAgICAgICAgICAge1xuICAgICAgICAgICAgIFwidGl0bGVcIjogXCJEb24ndCBSZWFkIFRoaXMgT24gYSBQbGFuZVwiLFxuICAgICAgICAgIFwieWVhclwiOiBcIjBcIixcbiAgICAgICAgICAgIFwiaW1kYl9pZFwiOiBcInR0NzUyNTc5MlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkJydXR1cyBWcyBDw6lzYXJcIixcbiAgICAgICAgICAgIFwieWVhclwiOiBcIjIwMjBcIixcbiAgICAgICAgICAgIFwiaW1kYl9pZFwiOiBcInR0MTA1NTc1MjRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDA0MjM3MTNcIixcbiAgICAgICAgICAgIFwidGl0bGVcIjpcIlBsdXMgYmVsbGUgbGEgdmllXCIsXG4gICAgICAgICAgICBcInllYXJcIjpcIjIwMDRcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgICB0aGlzLm9uR2V0VHJlbmRpbmdNb3ZpZXMocmVzdWx0KTtcbiAgICAgICAgICBcbiAgICAgIC8vIH0sIChlcnJvcikgPT4ge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIC8vIH0pO1xufVxuXG5wcml2YXRlIG9uR2V0VHJlbmRpbmdNb3ZpZXMocmVzKSB7XG4gIFxuIFxuXG4gIGZvciAobGV0IGtleSBpbiByZXMubW92aWVfcmVzdWx0cykge1xuICAgIFxuICAgIHRoaXMucmVzdWx0My5wdXNoKHt2YWx1ZTogcmVzLm1vdmllX3Jlc3VsdHNba2V5XX0pO1xuICBcbiAgICAvLyBjb25zb2xlLmxvZyhcInJlc3VsdGluZyBpbiBcIix0aGlzLnJlc3VsdDIpO1xuICBcbiAgXG4gIH1cbiAgXG4gIHRoaXMucmVzdWx0My5mb3JFYWNoKG9iaiA9PiB7XG4gICAgdGhpcy5leHRyYWN0SW1hZ2UyKG9iai52YWx1ZS5pbWRiX2lkKTtcbiAgIH0pO1xuICBcbiAgXG4gIFxuICAgIH1cblxuICAgIGV4dHJhY3RJbWFnZTIodmFsdWUpIHtcblxuICAgICAgdGhpcy5teVNlcnZpY2UuZ2V0SW1hZ2VOYW1lMih2YWx1ZSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgaW1hZ2UgcmVzdWx0IFwiLCByZXN1bHQpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgdGhpcy5vbkdldEltYWdlMihyZXN1bHQpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgIG9uR2V0SW1hZ2UyKHJlcykge1xuICAgICAgXG4gICAgXG4gICAgICBmb3IgKGxldCBrZXkgaW4gcmVzKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmZpbHRlcmVkMi5wdXNoKHtpbWFnZTogcmVzfSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSU1BR0UgUkVzdWx0IFwiLHRoaXMucmVzdWx0KTtcbiAgICBcbiAgICAgICAgdGhpcy5yZXN1bHQ0PSB0aGlzLmZpbHRlcmVkMi5yZWR1Y2UoKGFjYywgY3VycmVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHggPSBhY2MuZmluZChpdGVtID0+IGl0ZW0uaW1hZ2UgPT09IGN1cnJlbnQuaW1hZ2UpO1xuICAgICAgICAgIGlmICgheCkge1xuICAgICAgICAgICAgcmV0dXJuIGFjYy5jb25jYXQoW2N1cnJlbnRdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9XG4gICAgICAgIH0sIFtdKTtcbiAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZpbHRlcmVkJywgdGhpcy5maWx0ZXJlZCk7XG4gICAgIFxuICAgICAgICBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgXG5cblxuXG5cblxuICAgICAgdGhpcy5yYW5kb209dGhpcy5yZXN1bHQ0W01hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkqMildLmltYWdlLnBvc3RlcjtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucmFuZG9tKVxuICAgICAgXG4gICAgICAgIH1cbiAgICAgXG4gICAgICAgIFxuZXh0cmFjdFVwQ29taW5nKCkge1xuICAvLyBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGV4dHJhY3RcIilcbiAgLy8gdGhpcy5teVNlcnZpY2UuZ2V0T25VcENvbWluZygpXG4gIC8vICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgLy8gICAgICAgY29uc29sZS5sb2coXCJPTiBBSVIgT04gQUlSIE9OIEFJUlwiLCByZXN1bHQpXG4gICAgICAgIGNvbnN0IHJlc3VsdD0geyAgXCJtb3ZpZV9yZXN1bHRzXCI6IFt7XG4gICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDEwNjEzNTE4XCIsXG5cInRpdGxlXCI6XCJMYSBwaWF6emEgZGVsbGEgbWlhIGNpdHTDoCAtIEJvbG9nbmEgZSBMbyBTdGF0byBTb2NpYWxlXCIsXG5cInllYXJcIjpcIjIwMjBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDEwNjg3NzQwXCIsXG4gICAgICAgICAgICBcInRpdGxlXCI6XCJQcmluY2V6bmEgemFrbGV0w6EgdiDEjWFzZVwiLFxuICAgICAgICAgICAgXCJ5ZWFyXCI6XCIyMDIwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICBcImltZGJfaWRcIjpcInR0MTE2MjIyNzJcIixcbiAgICAgICAgICBcInRpdGxlXCI6XCJTcHJpbmcgVWplIHNwcmluZ1wiLFxuICAgICAgICAgIFwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImltZGJfaWRcIjpcInR0MTExNDg3NDBcIixcbiAgICAgICAgICAgIFwidGl0bGVcIjpcIlRvd24gb2YgR2xvcnlcIixcbiAgICAgICAgICAgIFwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImltZGJfaWRcIjpcInR0NTE5NDI1MlwiLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOlwiVGhlIEJhZCBEYWRcIixcbiAgICAgICAgICAgIFwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImltZGJfaWRcIjpcInR0ODMzMzQxOFwiLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOlwiVGhlIExhc3QgTGF1Z2hcIixcbiAgICAgICAgICAgIFwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgfV19XG4gICAgICAgIFxuICAgICAgICAgIHRoaXMub25HZXRVcENvbWluZyhyZXN1bHQpO1xuICAgICAgICAgIFxuICAgICAgLy8gfSwgKGVycm9yKSA9PiB7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgLy8gfSk7XG59XG5cbnByaXZhdGUgb25HZXRVcENvbWluZyhyZXMpIHtcbiAgXG4gXG5cbiAgZm9yIChsZXQga2V5IGluIHJlcy5tb3ZpZV9yZXN1bHRzKSB7XG4gICAgXG4gICAgdGhpcy5yZXN1bHRVcENvbWluZy5wdXNoKHt2YWx1ZTogcmVzLm1vdmllX3Jlc3VsdHNba2V5XX0pO1xuICBcbiAgICAvLyBjb25zb2xlLmxvZyhcInJlc3VsdGluZyBpbiBcIix0aGlzLnJlc3VsdDIpO1xuICBcbiAgXG4gIH1cbiAgXG4gIHRoaXMucmVzdWx0VXBDb21pbmcuZm9yRWFjaChvYmogPT4ge1xuICAgIHRoaXMuZXh0cmFjdEltYWdlVXBDb21pbmcob2JqLnZhbHVlLmltZGJfaWQpO1xuICAgfSk7XG4gIFxuICBcbiAgXG4gICAgfVxuICAgIGV4dHJhY3RJbWFnZVVwQ29taW5nKHZhbHVlKSB7XG5cbiAgICAgIHRoaXMubXlTZXJ2aWNlLmdldEltYWdlTmFtZSh2YWx1ZSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgaW1hZ2UgcmVzdWx0IFwiLCByZXN1bHQpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgdGhpcy5vbkdldEltYWdlVXBDb21pbmcocmVzdWx0KTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgICBvbkdldEltYWdlVXBDb21pbmcocmVzKSB7XG4gICAgICBcbiAgICBcbiAgICAgIGZvciAobGV0IGtleSBpbiByZXMpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuVXBDb21pbmdJbWFnZS5wdXNoKHtpbWFnZTogcmVzfSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSU1BR0UgUkVzdWx0IFwiLHRoaXMucmVzdWx0KTtcbiAgICBcbiAgICAgICAgdGhpcy5maWx0ZXJlZFVwQ29taW5nPSB0aGlzLlVwQ29taW5nSW1hZ2UucmVkdWNlKChhY2MsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgICBjb25zdCB4ID0gYWNjLmZpbmQoaXRlbSA9PiBpdGVtLmltYWdlID09PSBjdXJyZW50LmltYWdlKTtcbiAgICAgICAgICBpZiAoIXgpIHtcbiAgICAgICAgICAgIHJldHVybiBhY2MuY29uY2F0KFtjdXJyZW50XSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBbXSk7XG4gICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdmaWx0ZXJlZCcsIHRoaXMuZmlsdGVyZWQpO1xuICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgfVxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGV4dHJhY3RUcmVuZGluZ1Nob3dzKCkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgZXh0cmFjdFwiKVxuICAgICAgICAgIC8vIHRoaXMubXlTZXJ2aWNlLmdldE9uVHJlbmRpbmdTaG93KClcbiAgICAgICAgICAvLyAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgLy8gICAgICAgY29uc29sZS5sb2coXCJPTiBBSVIgT04gQUlSIE9OIEFJUlwiLCByZXN1bHQpXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0PSB7ICBcInR2X3Jlc3VsdHNcIjogW3tcbiAgICAgICAgICAgICAgICAgIFwiaW1kYl9pZFwiOlwidHQxMjYyNDg0NFwiLFxuICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOlwiVGhlIEdyZWF0IEhlaXN0XCIsXG4gICAgICAgICAgICAgICAgICBcInllYXJcIjpcIjIwMjBcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDk4NDkyMTBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOlwiQmlvaGFja2Vyc1wiLFxuICAgICAgICAgICAgICAgICAgICBcInllYXJcIjpcIjIwMjBcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDEwNjIzNTUwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjpcIlRoZSBGdWdpdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInllYXJcIjpcIjIwMjBcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJpbWRiX2lkXCI6XCJ0dDY5MDU2ODZcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOlwiTG92ZWNyYWZ0IENvdW50cnlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ5ZWFyXCI6XCIyMDIwXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaW1kYl9pZFwiOlwidHQxMDU4NDYwOFwiLFxuICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6XCJUZWVuYWdlIEJvdW50eSBIdW50ZXJzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImltZGJfaWRcIjpcInR0MTA5ODY0MTBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOlwiVGVkIExhc3NvXCIsXG4gICAgICAgICAgICAgICAgICAgIFwieWVhclwiOlwiMjAyMFwiXG4gICAgICAgICAgICAgICAgICB9XX1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHRoaXMub25HZXRUcmVuZGluZ1Nob3dzKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBwcml2YXRlIG9uR2V0VHJlbmRpbmdTaG93cyhyZXMpIHtcbiAgICAgICAgICBcbiAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gcmVzLnR2X3Jlc3VsdHMpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5yZXN1bHRUcmVuZGluZ1Nob3dzLnB1c2goe3ZhbHVlOiByZXMudHZfcmVzdWx0c1trZXldfSk7XG4gICAgICAgICAgXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlc3VsdGluZyBpbiBcIix0aGlzLnJlc3VsdDIpO1xuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICB0aGlzLnJlc3VsdFRyZW5kaW5nU2hvd3MuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICAgICAgdGhpcy5leHRyYWN0SW1hZ2VUcmVuZGluZ1Nob3dzKG9iai52YWx1ZS5pbWRiX2lkKTtcbiAgICAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBleHRyYWN0SW1hZ2VUcmVuZGluZ1Nob3dzKHZhbHVlKSB7XG4gICAgICAgIFxuICAgICAgICAgICAgICB0aGlzLm15U2VydmljZS5nZXRJbWFnZU5hbWUodmFsdWUpXG4gICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBpbWFnZSByZXN1bHQgXCIsIHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkdldEltYWdlVHJlbmRpbmdTaG93cyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICBvbkdldEltYWdlVHJlbmRpbmdTaG93cyhyZXMpIHtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHJlcykge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuVHJlbmRpbmdTaG93c0ltYWdlLnB1c2goe2ltYWdlOiByZXN9KTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIklNQUdFIFJFc3VsdCBcIix0aGlzLnJlc3VsdCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcmVkVHJlbmRpbmdTaG93cz0gdGhpcy5UcmVuZGluZ1Nob3dzSW1hZ2UucmVkdWNlKChhY2MsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHggPSBhY2MuZmluZChpdGVtID0+IGl0ZW0uaW1hZ2UgPT09IGN1cnJlbnQuaW1hZ2UpO1xuICAgICAgICAgICAgICAgICAgaWYgKCF4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2MuY29uY2F0KFtjdXJyZW50XSk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdmaWx0ZXJlZCcsIHRoaXMuZmlsdGVyZWQpO1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgIFxuLy8gICAgIGdldEltYWdlTmFtZSh2YWx1ZSkge1xuLy8gICAgICAgdmFyIGxvd2VyPXZhbHVlLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XG4vLyAgICAgICBjb25zb2xlLmxvZyhsb3dlcik7XG4vLyAgICAgICByZXR1cm4gYH4vaW1hZ2VzLyR7bG93ZXJ9LnBuZ2A7XG4vLyAgIH1cblxuXG5cblxuICBcblxuICAgXG4vLyBhZGRJbnRlcmFjdGlvbihtZWRIZXJiU3VwOiBzdHJpbmcpIHtcbi8vICAgY29uc29sZS5sb2coXCJhZGQgbWVkSGVyYlN1cFwiLCBtZWRIZXJiU3VwKVxuLy8gICAgIGRpYWxvZ3MuYWN0aW9uKHtcbi8vICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmUgdGhhdCB5b3Ugd2FudCB0byBhZGQgdGhpcyBtZWRpY2luZSB0byB5b3VyIGxpc3Q/XCIsXG4vLyAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcbi8vICAgICAgIGFjdGlvbnM6IFtcIlllc1wiLCBcIk5vXCJdXG4vLyAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuLy8gICAgICAgaWYgKHJlc3VsdCA9PSBcIlllc1wiKSB7XG4vLyAgICAgICAgdGhpcy5tZWRIZXJiU3VwX25hbWUgPSBtZWRIZXJiU3VwO1xuLy8gICAgICAgIHRoaXMubWVkaWNpbmVfZm9ybSA9IFwiUGlsbFwiO1xuLy8gICAgICAgICB0aGlzLmRiLmV4ZWNTUUwoXCJJTlNFUlQgSU5UTyBtZWRpY2luZXMgKG1lZGljaW5lc19uYW1lLCBtZWRpY2luZV9kb3NhZ2UsIG1lZGljaW5lX2Zvcm0sIG1lZGljaW5lX2ZyZXF1ZW5jeSwgdXNlcl9pZCkgVkFMVUVTICg/LD8sPyw/LD8pXCIsIFt0aGlzLm1lZEhlcmJTdXBfbmFtZSwgdGhpcy5tZWRpY2luZV9kb3NhZ2UsIHRoaXMubWVkaWNpbmVfZm9ybSwgdGhpcy5tZWRpY2luZV9mcmVxdWVuY3ksIHRoaXMudXNlcl9pZF0pLnRoZW4oaWQgPT4ge1xuLy8gICAgICAgICAgICB0aGlzLm1lZGljaW5lTGlzdC51bnNoaWZ0KHtpZDogaWQsIG5hbWU6IHRoaXMubWVkSGVyYlN1cF9uYW1lLCBkb3NhZ2U6IHRoaXMubWVkaWNpbmVfZG9zYWdlLCBmb3JtOiB0aGlzLm1lZGljaW5lX2Zvcm0sIGZyZXF1ZW5jeTp0aGlzLm1lZGljaW5lX2ZyZXF1ZW5jeX0pO1xuLy8gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiBhZGRpbmcgd2FzIGEgc3VjZXNzXCIsIHRoaXMubWVkaWNpbmVMaXN0KTtcbi8vICAgICAgICAgICAgZGlhbG9ncy5hbGVydCgnTWVkaWNpbmUgc2F2ZWQgc3VjY2Vzc2Z1bGx5OicpO1xuICAgICAgICAgICBcbi8vICAgICAgICB9LCBlcnJvciA9PiB7XG4vLyAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBhZGRpbmcgYW4gaXRlbSB0byB5b3VyIGxpc3QuJywgZXJyb3IpO1xuLy8gICAgICAgICAgICB0aGlzLm1lZEhlcmJTdXBfbmFtZSA9IFwiXCI7XG4vLyAgICAgICAgICAgIHRoaXMubWVkaWNpbmVfZG9zYWdlID0gXCJcIjtcbi8vICAgICAgICAgICAgdGhpcy5tZWRpY2luZV9mb3JtID0gXCJcIjtcbi8vICAgICAgICAgICAgdGhpcy5tZWRpY2luZV9mcmVxdWVuY3kgPSBcIlwiO1xuLy8gICAgICAgIH0pO1xuXG4vLyAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PSBcIk5vXCIpIHtcbiAgICAgICBcbi8vICAgICAgIH1cbi8vICAgICB9KTtcbi8vICAgIH1cblxuc2VsZWN0ZWRTZWFyY2goYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgdGhpcy5yZXN1bHRTZWxlY3RlZCA9IFtdO1xuICB0aGlzLlNlbGVjdGVkRmlsdGVyZWQ9W107XG4gIHRoaXMubW92aWVfc2hvdz1cIlwiO1xubGV0IHNlbGVjdGVkPSA8YW55PmFyZ3Mub2JqZWN0LmJpbmRpbmdDb250ZXh0O1xudGhpcy5tb3ZpZV9zaG93PXNlbGVjdGVkLmltYWdlLmlkO1xuICB0aGlzLmlzSG9tZXBhZ2UgPSAhdGhpcy5pc0hvbWVwYWdlO1xuIGNvbnNvbGUubG9nKCcgZ290IE1PdmllU2hvdycsIHRoaXMubW92aWVfc2hvdyk7XG4gdGhpcy5leHRyYWN0U2VsZWN0TW92aWVTaG93KHRoaXMubW92aWVfc2hvdyk7XG5cbn1cblxuZXh0cmFjdFNlbGVjdE1vdmllU2hvdyh2YWx1ZSkge1xuICBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGV4dHJhY3QgU2VsZWN0ZWQgbW92aWVTaG93c1wiKVxuICB0aGlzLm15U2VydmljZS5nZXRTZWxlY3RlZE1vdmllU2hvdyh2YWx1ZSlcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIHJlc3VsdFwiLCByZXN1bHQpXG4gICAgICAgIFxuICAgICAgICAgIHRoaXMub25HZXRTZWxlY3RNb3ZpZVNob3cocmVzdWx0KTtcbiAgICAgICAgICBcbiAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xufVxuXG5wcml2YXRlIG9uR2V0U2VsZWN0TW92aWVTaG93KHJlcykge1xuICBcbiBcblxuICBmb3IgKGxldCBrZXkgaW4gcmVzKSB7XG4gICAgXG4gICAgXG4gICAgdGhpcy5TZWxlY3RlZEZpbHRlcmVkLnB1c2goe3ZhbHVlOiByZXN9KTtcbiAgXG4gICAgXG4gIFxuICBcbiAgfVxuICB0aGlzLnJlc3VsdFNlbGVjdGVkPSB0aGlzLlNlbGVjdGVkRmlsdGVyZWQucmVkdWNlKChhY2MsIGN1cnJlbnQpID0+IHtcbiAgICBjb25zdCB4ID0gYWNjLmZpbmQoaXRlbSA9PiBpdGVtLmltYWdlID09PSBjdXJyZW50LmltYWdlKTtcbiAgICBpZiAoIXgpIHtcbiAgICAgIHJldHVybiBhY2MuY29uY2F0KFtjdXJyZW50XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuICB9LCBbXSk7XG4gIFxuICBcbiAgY29uc29sZS5sb2coXCJyZXN1bHRpbmcgaW4gXCIsdGhpcy5yZXN1bHRTZWxlY3RlZCk7XG4gIFxuICBcbiAgICB9XG5cbiAgICAgXG4gICBcbiAgICBvbkhvbWVUYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSk7XG4gICAgICAgIGlmKCF0aGlzLmlzSG9tZXBhZ2Upe1xuICAgICAgICAgIHRoaXMuaXNIb21lcGFnZT0hdGhpcy5pc0hvbWVwYWdlO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uSGlzdG9yeVRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9oaXN0b3J5XCJdKTtcbiAgXG4gICAgfVxuXG5cbiAgICBcbiAgICAgXG4gICAgXG5cbiAgIFxuICAgICAgZGlzbWlzc0tleWJvYXJkKCkge1xuICAgICAgICBpZiAoaXNJT1MpIHtcbiAgICAgICAgICBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uLmtleVdpbmRvdy5lbmRFZGl0aW5nKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgICAgICB1dGlscy5hZC5kaXNtaXNzU29mdElucHV0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIFxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=