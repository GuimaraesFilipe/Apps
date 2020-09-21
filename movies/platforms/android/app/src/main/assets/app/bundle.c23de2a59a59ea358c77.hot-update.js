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
const nativescript_ui_autocomplete_1 = __webpack_require__("../node_modules/nativescript-ui-autocomplete/ui-autocomplete.js");
const observable_array_1 = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
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
        this.all = [];
        this.all2 = [];
        this.all3 = [];
        this.all4 = [];
        this.all5 = [];
        this.all6 = [];
        this.all7 = [];
        this.global = [];
        this.result = [];
        this.result2 = [];
        this.suggestions = [];
        this.filtered = [];
        this.advice = "";
        this.evidence = "";
        this.comment = "";
        this.benefit = "";
        this.med_HerbSup = "";
        this.medHerbSup_name = "";
        this.medicine_dosage = "";
        this.medicine_form = "";
        this.medicine_frequency = "";
        this.exists = true;
        this.medicineList = [];
        this.url = "<url>";
        this.value = utils.isDataURI(this.url);
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
        this.textFieldValue = "";
    }
    toggleDisplay() {
        this.isHomepage = !this.isHomepage;
    }
    onButtonTap() {
        console.log("Button was pressed");
    }
    onSearchSubmit(args) {
        let searchBar = args.object;
        console.log("You are searching for " + searchBar.text);
    }
    ngOnInit() {
        this.extractStatics();
    }
    selectItems() {
        this.dismissKeyboard();
        if (!this.isHomepage) {
            this.result = [];
            this.myService.getInfo()
                .subscribe((result) => {
                console.log("this is the object", result);
                this.onGetDataSuccess(result);
            }, (error) => {
                console.log(error);
            });
        }
        else {
            this.isHomepage = !this.isHomepage;
            this.myService.getInfo()
                .subscribe((result) => {
                console.log("this is the object", result);
                this.onGetDataSuccess(result);
            }, (error) => {
                console.log(error);
            });
        }
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
    extractStatics() {
        console.log("this is the extract");
        this.myService.getAll()
            .subscribe((result) => {
            this.onGetStatics(result);
        }, (error) => {
            console.log(error);
        });
    }
    onGetStatics(res) {
        for (let key in res.tv_results) {
            this.result2.push({ value: res.tv_results[key] });
            this.extractImage(res.tv_results.imdb_id);
        }
        this.global.push({ new: this.sum, total: this.sumTotal, mpop: this.sumpop, active: this.sumactive, recovered: this.sumrecovered, deaths: this.sumDeaths });
    }
    onMedSelected($event) {
        const token = $event.token;
        this.med_1 = token.text;
        console.log(this.med_1);
    }
    onMedSelected2($event) {
        const token = $event.token;
        this.med_2 = token.text;
        console.log(this.med_2);
    }
    extractImage(value) {
        this.myService.getImageName2(value)
            .subscribe((result) => {
            this.onGetImage(result);
        }, (error) => {
            console.log(error);
        });
    }
    onGetImage(res) {
        this.result.push({ image: res });
        console.log("IMAGE REsult ", this.result);
    }
    suggestion(res) {
        this.Country = res.response;
        this.suggest = new observable_array_1.ObservableArray();
        for (let i = 0; i < this.Country.length; i++) {
            this.suggest.push(new nativescript_ui_autocomplete_1.TokenModel(this.Country[i], undefined));
        }
    }
    onChatBotTap() {
        utilityModule.openUrl("https://webchat.snatchbot.me/51c70035c97802cbc3d55b31bf6195a04e4f480a644a6c455d2831929c0ec6ef");
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
    core_1.ViewChild("med1", { static: false }),
    __metadata("design:type", core_1.ElementRef)
], HomeComponent.prototype, "med1", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0Esa0ZBQXFGO0FBQ3JGLDhGQUErRDtBQUMvRCxrRUFBNEM7QUFFNUMsdUZBQXNEO0FBQ3RELDRGQUEyRTtBQUMzRSw4SEFBaUY7QUFDakYsK0hBQXlFO0FBQ3pFLGtHQUE2RDtBQUM3RCxJQUFJLGFBQWEsR0FBRyxtQkFBTyxDQUFDLG1EQUFhLENBQUMsQ0FBQztBQUUzQyxpR0FBb0Q7QUFDcEQsK0VBQXdEO0FBRXhELG9GQUEyRTtBQVczRSxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBb0Z0QixZQUFvQixJQUFnQixFQUFTLFNBQTRCLEVBQVUsZ0JBQWtDLEVBQVUsWUFBMEI7UUFBckksU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBckV6SixRQUFHLEdBQWUsRUFBRSxDQUFDO1FBQ3JCLFNBQUksR0FBZSxFQUFFLENBQUM7UUFDdEIsU0FBSSxHQUFlLEVBQUUsQ0FBQztRQUN0QixTQUFJLEdBQWUsRUFBRSxDQUFDO1FBQ3RCLFNBQUksR0FBZSxFQUFFLENBQUM7UUFDdEIsU0FBSSxHQUFlLEVBQUUsQ0FBQztRQUN0QixTQUFJLEdBQWUsRUFBRSxDQUFDO1FBQ3RCLFdBQU0sR0FBZSxFQUFFLENBQUM7UUFDeEIsV0FBTSxHQUFlLEVBQUUsQ0FBQztRQUN4QixZQUFPLEdBQWUsRUFBRSxDQUFDO1FBQ3pCLGdCQUFXLEdBQWUsRUFBRSxDQUFDO1FBQzdCLGFBQVEsR0FBZSxFQUFFLENBQUM7UUFNMUIsV0FBTSxHQUFDLEVBQUUsQ0FBQztRQUNWLGFBQVEsR0FBQyxFQUFFLENBQUM7UUFDWixZQUFPLEdBQUMsRUFBRSxDQUFDO1FBQ1gsWUFBTyxHQUFDLEVBQUUsQ0FBQztRQUNYLGdC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WUF6TjZCLGlCQUFVO1lBQW9CLHFDQUFpQjtZQUE0Qix5QkFBZ0I7WUFBd0IsNEJBQVk7O0FBdENySDtJQUFsQyxnQkFBUyxDQUFDLE1BQU0sRUFBQyxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQzs4QkFBTyxpQkFBVTsyQ0FBQztBQUNoQjtJQUFuQyxnQkFBUyxDQUFDLE1BQU0sRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQzs4QkFBTyxpQkFBVTsyQ0FBQztBQUNsQjtJQUFsQyxnQkFBUyxDQUFDLE1BQU0sRUFBQyxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQzs4QkFBTyxpQkFBVTsyQ0FBQztBQWhENUMsYUFBYTtJQVJ6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU07UUFFaEIsb0ZBQW9DOztLQUV2QyxDQUFDO0lBQ0QsaUJBQVUsRUFBRTtxQ0FzRmlCLGlCQUFVLEVBQW9CLHFDQUFpQixFQUE0Qix5QkFBZ0IsRUFBd0IsNEJBQVk7R0FwRmhKLGFBQWEsQ0E2U3pCO0FBN1NZLHNDQUFhIiwiZmlsZSI6ImJ1bmRsZS5jMjNkZTJhNTlhNTllYTM1OGM3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwifi9hcHAuY29tcG9uZW50XCJcbmltcG9ydCB7IFNjcm9sbFZpZXcsIFNjcm9sbEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3Njcm9sbC12aWV3XCI7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiO1xuaW1wb3J0IHsgZ2V0RnJhbWVCeUlkLCBGcmFtZSwgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIjtcbmltcG9ydCB7IFRva2VuTW9kZWwsIEF1dG9Db21wbGV0ZUV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktYXV0b2NvbXBsZXRlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IGlzSU9TLCBpc0FuZHJvaWQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcbnZhciB1dGlsaXR5TW9kdWxlID0gcmVxdWlyZShcInV0aWxzL3V0aWxzXCIpO1xuZGVjbGFyZSBjb25zdCBVSUFwcGxpY2F0aW9uO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlMiB9IGZyb20gXCIuL2h0dHAtZ2V0LnNlcnZpY2VzXCI7ICBcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQ291bnRyeTogW107XG4gIHVzZXJBZ2VudDogc3RyaW5nO1xuICBvcmlnaW46IHN0cmluZztcbiAgY29udGluZW50OnN0cmluZztcbiAgY291bnRyeTpzdHJpbmc7XG4gIHBvcHVsYXRpb246c3RyaW5nO1xuICBjYXNlczpudW1iZXI7XG4gIHJlY292ZXJlZDpudW1iZXI7XG4gIGFjdGl2ZTpudW1iZXI7XG4gIGRlYXRoczpudW1iZXI7XG4gIHRlc3RzOm51bWJlcjtcbiAgZGF0ZTpzdHJpbmc7XG4gIFxuXG4gICAgYWxsOiBBcnJheTxhbnk+ID0gW107IFxuICAgIGFsbDI6IEFycmF5PGFueT4gPSBbXTsgXG4gICAgYWxsMzogQXJyYXk8YW55PiA9IFtdOyBcbiAgICBhbGw0OiBBcnJheTxhbnk+ID0gW107IFxuICAgIGFsbDU6IEFycmF5PGFueT4gPSBbXTsgXG4gICAgYWxsNjogQXJyYXk8YW55PiA9IFtdOyBcbiAgICBhbGw3OiBBcnJheTxhbnk+ID0gW107IFxuICAgIGdsb2JhbDogQXJyYXk8YW55PiA9IFtdOyBcbiAgICByZXN1bHQ6IEFycmF5PGFueT4gPSBbXTsgXG4gICAgcmVzdWx0MjogQXJyYXk8YW55PiA9IFtdOyBcbiAgICBzdWdnZXN0aW9uczogQXJyYXk8YW55PiA9IFtdO1xuICAgIGZpbHRlcmVkOiBBcnJheTxhbnk+ID0gW107XG4gICAgc3VnZ2VzdDogT2JzZXJ2YWJsZUFycmF5PFRva2VuTW9kZWw+O1xuICBcdGRiOiBhbnk7XG4gICAgbWVkXzE6IHN0cmluZztcbiAgICBtZWRfMjogc3RyaW5nO1xuICAgIG1lZF8zOlN0cmluZztcbiAgICBhZHZpY2U9XCJcIjtcbiAgICBldmlkZW5jZT1cIlwiO1xuICAgIGNvbW1lbnQ9XCJcIjtcbiAgICBiZW5lZml0PVwiXCI7XG4gICAgbWVkX0hlcmJTdXA9XCJcIjtcbiAgICBtZWRIZXJiU3VwX25hbWUgPSBcIlwiO1xuICAgIG1lZGljaW5lX2Rvc2FnZT0gXCJcIjtcbiAgICBtZWRpY2luZV9mb3JtPVwiXCI7XG4gICAgbWVkaWNpbmVfZnJlcXVlbmN5PVwiXCI7XG4gICAgZXhpc3RzID0gdHJ1ZTtcbiAgICBtZWRpY2luZUxpc3Q6IEFycmF5PE9iamVjdD4gPSBbXTtcbiAgICB1c2VyX2lkOiBzdHJpbmc7XG4gICAgIHVybDogc3RyaW5nID0gXCI8dXJsPlwiOyBcbiAgICB2YWx1ZTpib29sZWFuID0gdXRpbHMuaXNEYXRhVVJJKHRoaXMudXJsKTtcbiAgICAgQFZpZXdDaGlsZChcIm1lZDFcIix7c3RhdGljOiBmYWxzZX0pIG1lZDE6IEVsZW1lbnRSZWY7XG4gICAgIEBWaWV3Q2hpbGQoXCJtZWQyXCIsIHtzdGF0aWM6IGZhbHNlfSkgbWVkMjogRWxlbWVudFJlZjtcbiAgICAgQFZpZXdDaGlsZChcIm1lZDNcIix7c3RhdGljOiBmYWxzZX0pIG1lZDM6IEVsZW1lbnRSZWY7XG4gICAgc3VtID0gMDtcbiAgICBzdW1Ub3RhbCA9IDA7XG4gICAgc3VtRGVhdGhzID0gMDtcbiAgICBzdW1wb3A9MDtcbiAgICBzdW1hY3RpdmU9MDtcbiAgICBzdW1yZWNvdmVyZWQ9MDtcbiAgICBpc05vdExvZ2dlZEluPSB0cnVlO1xuICAgIGlzSG9tZXBhZ2UgPSB0cnVlO1xuICAgIHJlZD10cnVlO1xuICAgIGdyZWVuPXRydWU7XG4gICAgb3JhbmdlPXRydWU7XG4gICAgY3JlYXRlQW5kVXBkYXRlOiBhbnk7XG4gICAgbWVkSGVyYlN1cDogQXJyYXk8T2JqZWN0PiA9IFtdO1xuICAgIGlzTm90U2VhcmNoPSB0cnVlO1xuICAgIGZyYW1lID0gRnJhbWUuZ2V0RnJhbWVCeUlkKFwibXlGcmFtZVwiKTtcbiAgICBpc1NjYW49dHJ1ZTtcblxuICAgIFxuICAgIHRvZ2dsZURpc3BsYXkoKSB7XG4gICAgICAgIHRoaXMuaXNIb21lcGFnZSA9ICF0aGlzLmlzSG9tZXBhZ2U7XG4gICAgICAgfVxuICAgIHRleHRGaWVsZFZhbHVlOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgb25CdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQnV0dG9uIHdhcyBwcmVzc2VkXCIpO1xuICAgIH1cblxuICAgIHNlYXJjaFBocmFzZTogc3RyaW5nO1xuICAgIG9uU2VhcmNoU3VibWl0KGFyZ3MpOiB2b2lkIHtcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiWW91IGFyZSBzZWFyY2hpbmcgZm9yIFwiICsgc2VhcmNoQmFyLnRleHQpO1xuICAgIH1cblxuICAgXG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LHByaXZhdGUgbXlTZXJ2aWNlOiBNeUh0dHBHZXRTZXJ2aWNlMiwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGFwcGNvbXBvbmVudDogQXBwQ29tcG9uZW50KSB7XG5cblxuICAgICAgXG4gICAgICAgXG4gICAgfSBcbiAgICBcblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgXG4gICAgICAvLyB0aGlzLmV4dHJhY3REYXRhKCk7XG4gICAgICB0aGlzLmV4dHJhY3RTdGF0aWNzKCk7XG4gICAgICAvLyB0aGlzLnNlbGVjdEl0ZW1zKCk7XG4gICAgfVxuICAvLyAgIGV4dHJhY3REYXRhKCkge1xuICAvLyAgICAgdGhpcy5teVNlcnZpY2UuZ2V0QWxsKClcbiAgLy8gICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgLy8gICAgICAgICAgICAgdGhpcy5zdWdnZXN0aW9uKHJlc3VsdCk7XG4gICAgICAgICAgICAgIFxuICAvLyAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIC8vICAgICAgICAgfSk7XG4gIC8vIH1cbiAgXG4gIHNlbGVjdEl0ZW1zKCkge1xuICAgIHRoaXMuZGlzbWlzc0tleWJvYXJkKCk7XG4gICBcbiAgICBpZiAoIXRoaXMuaXNIb21lcGFnZSl7XG4gICAgICB0aGlzLnJlc3VsdD1bXTtcbiAgICAgIHRoaXMubXlTZXJ2aWNlLmdldEluZm8oKVxuICAgXG4gICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICBcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBvYmplY3RcIixyZXN1bHQpXG4gICAgICAgIHRoaXMub25HZXREYXRhU3VjY2VzcyhyZXN1bHQpXG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcblxuICAgIH1cbiAgICBlbHNle1xuICAgICAgdGhpcy5pc0hvbWVwYWdlID0gIXRoaXMuaXNIb21lcGFnZTtcbiAgICAgIHRoaXMubXlTZXJ2aWNlLmdldEluZm8oKVxuICAgXG4gICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICBcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBvYmplY3RcIixyZXN1bHQpXG4gICAgICAgIHRoaXMub25HZXREYXRhU3VjY2VzcyhyZXN1bHQpXG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgICB9XG4gIFxuXG59IFxuXG5vbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHsgXG4gIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gIGNvbnNvbGUubG9nKFwiZHJhd2VyMVwiKVxuICBcbn1cblxucHJpdmF0ZSBvbkdldERhdGFTdWNjZXNzKHJlcykge1xuXG5mb3IgKGxldCBrZXkgaW4gcmVzLnJlc3BvbnNlKSB7XG4gIHRoaXMucmVzdWx0LnB1c2goe3ZhbHVlOiByZXMucmVzcG9uc2Vba2V5XX0pO1xuICBjb25zb2xlLmxvZyhcInRoaXMgYXJyYXlcIiwgdGhpcy5yZXN1bHQpO1xufVxuXG4gIH1cbiAgb25TY3JvbGwoYXJnczogU2Nyb2xsRXZlbnREYXRhKSB7XG4gICAgY29uc3Qgc2Nyb2xsVmlldyA9IGFyZ3Mub2JqZWN0IGFzIFNjcm9sbFZpZXc7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcInNjcm9sbFg6IFwiICsgYXJncy5zY3JvbGxYKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcInNjcm9sbFk6IFwiICsgYXJncy5zY3JvbGxZKTtcbn1cblxuZXh0cmFjdFN0YXRpY3MoKSB7XG4gIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgZXh0cmFjdFwiKVxuICB0aGlzLm15U2VydmljZS5nZXRBbGwoKVxuICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgcmVzdWx0XCIsIHJlc3VsdClcbiAgICAgICAgXG4gICAgICAgICAgdGhpcy5vbkdldFN0YXRpY3MocmVzdWx0KTtcbiAgICAgICAgICBcbiAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xufVxuXG5cbnByaXZhdGUgb25HZXRTdGF0aWNzKHJlcykge1xuICBcbiBcblxuZm9yIChsZXQga2V5IGluIHJlcy50dl9yZXN1bHRzKSB7XG4gIFxuICB0aGlzLnJlc3VsdDIucHVzaCh7dmFsdWU6IHJlcy50dl9yZXN1bHRzW2tleV19KTtcbiAgLy8gY29uc29sZS5sb2coXCJyZXN1bHRpbmcgaW4gXCIsdGhpcy5yZXN1bHQyKTtcbiAgdGhpcy5leHRyYWN0SW1hZ2UocmVzLnR2X3Jlc3VsdHMuaW1kYl9pZCk7XG4gIFxufVxuXG5cblxuXG50aGlzLmdsb2JhbC5wdXNoKHtuZXc6IHRoaXMuc3VtLCB0b3RhbDogdGhpcy5zdW1Ub3RhbCxtcG9wOnRoaXMuc3VtcG9wLCBhY3RpdmU6IHRoaXMuc3VtYWN0aXZlLCByZWNvdmVyZWQ6dGhpcy5zdW1yZWNvdmVyZWQsIGRlYXRoczogdGhpcy5zdW1EZWF0aHN9KTtcblxuXG5cbiAgfVxuXG5cbiBcbiAgICBvbk1lZFNlbGVjdGVkKCRldmVudDogQXV0b0NvbXBsZXRlRXZlbnREYXRhKSB7XG4gICAgICBjb25zdCB0b2tlbiA9IDxUb2tlbk1vZGVsPiRldmVudC50b2tlbjtcbiAgICAgIHRoaXMubWVkXzE9IHRva2VuLnRleHQ7XG5cbiAgICAgIGNvbnNvbGUubG9nKHRoaXMubWVkXzEpXG4gIH1cbiAgb25NZWRTZWxlY3RlZDIoJGV2ZW50OiBBdXRvQ29tcGxldGVFdmVudERhdGEpIHtcbiAgICBjb25zdCB0b2tlbiA9IDxUb2tlbk1vZGVsPiRldmVudC50b2tlbjtcbiAgICB0aGlzLm1lZF8yPSB0b2tlbi50ZXh0O1xuICAgIFxuICAgIGNvbnNvbGUubG9nKHRoaXMubWVkXzIpXG59XG5cbiAgIFxuLy8gICAgIGdldEltYWdlTmFtZSh2YWx1ZSkge1xuLy8gICAgICAgdmFyIGxvd2VyPXZhbHVlLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XG4vLyAgICAgICBjb25zb2xlLmxvZyhsb3dlcik7XG4vLyAgICAgICByZXR1cm4gYH4vaW1hZ2VzLyR7bG93ZXJ9LnBuZ2A7XG4vLyAgIH1cblxuXG5leHRyYWN0SW1hZ2UodmFsdWUpIHtcblxuICB0aGlzLm15U2VydmljZS5nZXRJbWFnZU5hbWUyKHZhbHVlKVxuICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgaW1hZ2UgcmVzdWx0IFwiLCByZXN1bHQpXG4gICAgICAgIFxuICAgICAgICAgIHRoaXMub25HZXRJbWFnZShyZXN1bHQpO1xuICAgICAgICAgIFxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG59XG5cbiBvbkdldEltYWdlKHJlcykge1xuICBcbiBcblxuIFxuICAgIFxuICAgIHRoaXMucmVzdWx0LnB1c2goe2ltYWdlOiByZXN9KTtcbiAgICBjb25zb2xlLmxvZyhcIklNQUdFIFJFc3VsdCBcIix0aGlzLnJlc3VsdCk7XG4gICAgXG4gICAgXG4gIFxuICBcbiAgXG4gIFxuICAgIH1cblxuICBcblxuICAgIHN1Z2dlc3Rpb24ocmVzKSB7XG4gICAgICB0aGlzLkNvdW50cnkgPSByZXMucmVzcG9uc2U7XG4gICAgICB0aGlzLnN1Z2dlc3Q9IG5ldyBPYnNlcnZhYmxlQXJyYXk8VG9rZW5Nb2RlbD4oKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkNvdW50cnkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLnN1Z2dlc3QucHVzaChuZXcgVG9rZW5Nb2RlbCh0aGlzLkNvdW50cnlbaV0sIHVuZGVmaW5lZCkpO1xuICAgICAgfVxuICAgIFxuICB9XG5cbiAgICAgb25DaGF0Qm90VGFwKCl7XG4gICAgICB1dGlsaXR5TW9kdWxlLm9wZW5VcmwoXCJodHRwczovL3dlYmNoYXQuc25hdGNoYm90Lm1lLzUxYzcwMDM1Yzk3ODAyY2JjM2Q1NWIzMWJmNjE5NWEwNGU0ZjQ4MGE2NDRhNmM0NTVkMjgzMTkyOWMwZWM2ZWZcIik7XG4gICAgIFxuICAgfVxuICAgXG4gICAgb25Ib21lVGFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hvbWVcIl0pO1xuICAgICAgICBpZighdGhpcy5pc0hvbWVwYWdlKXtcbiAgICAgICAgICB0aGlzLmlzSG9tZXBhZ2U9IXRoaXMuaXNIb21lcGFnZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkhpc3RvcnlUYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaGlzdG9yeVwiXSk7XG4gIFxuICAgIH1cblxuXG4gICAgXG4gICAgIFxuICAgIFxuXG4gICBcbiAgICAgIGRpc21pc3NLZXlib2FyZCgpIHtcbiAgICAgICAgaWYgKGlzSU9TKSB7XG4gICAgICAgICAgVUlBcHBsaWNhdGlvbi5zaGFyZWRBcHBsaWNhdGlvbi5rZXlXaW5kb3cuZW5kRWRpdGluZyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICAgICAgdXRpbHMuYWQuZGlzbWlzc1NvZnRJbnB1dCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICBcblxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9