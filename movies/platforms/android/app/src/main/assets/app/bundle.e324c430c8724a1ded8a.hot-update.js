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
let HomeComponent = class HomeComponent {
    constructor(myService, routerExtensions, appcomponent) {
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
            console.log("resulting in ", this.result2);
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
    getImageName(value) {
        var lower = value.charAt(0).toLowerCase() + value.slice(1);
        console.log(lower);
        return `~/images/${lower}.png`;
    }
    getImageName2(value) {
        var lower = value.charAt(0).toLowerCase() + value.slice(1);
        console.log(lower);
        return `~/images/flags/${lower}-flag-country-nation-union-empire.png`;
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
    __metadata("design:paramtypes", [http_get_services_1.MyHttpGetService2, router_1.RouterExtensions, app_component_1.AppComponent])
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0Esa0ZBQXFGO0FBQ3JGLDhGQUErRDtBQUMvRCxrRUFBNEM7QUFFNUMsdUZBQXNEO0FBQ3RELDRGQUEyRTtBQUMzRSw4SEFBaUY7QUFDakYsK0hBQXlFO0FBQ3pFLGtHQUE2RDtBQUM3RCxJQUFJLGFBQWEsR0FBRyxtQkFBTyxDQUFDLG1EQUFhLENBQUMsQ0FBQztBQUUzQyxpR0FBb0Q7QUFDcEQsK0VBQXdEO0FBWXhELElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFvRnRCLFlBQW9CLFNBQTRCLEVBQVUsZ0JBQWtDLEVBQVUsWUFBMEI7UUFBNUcsY0FBUyxHQUFULFNBQVMsQ0FBbUI7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFyRWhJLFFBQUcsR0FBZSxFQUFFLENBQUM7UUFDckIsU0FBSSxHQUFlLEVBQUUsQ0FBQztRQUN0QixTQUFJLEdBQWUsRUFBRSxDQUFDO1FBQ3RCLFNBQUksR0FBZSxFQUFFLENBQUM7UUFDdEIsU0FBSSxHQUFlLEVBQUUsQ0FBQztRQUN0QixTQUFJLEdBQWUsRUFBRSxDQUFDO1FBQ3RCLFNBQUksR0FBZSxFQUFFLENBQUM7UUFDdEIsV0FBTSxHQUFlLEVBQUUsQ0FBQztRQUN4QixXQUFNLEdBQWUsRUFBRSxDQUFDO1FBQ3hCLFlBQU8sR0FBZSxFQUFFLENBQUM7UUFDekIsZ0JBQVcsR0FBZSxFQUFFLENBQUM7UUFDN0IsYUFBUSxHQUFlLEVBQUUsQ0FBQztRQU0xQixXQUFNLEdBQUMsRUFBRSxDQUFDO1FBQ1YsYUFBUSxHQUFDLEVBQUUsQ0FBQztRQUNaLFlBQU8sR0FBQyxFQUFFLENBQUM7UUFDWCxZQUFPLEdBQUMsRUFBRSxDQUFDO1FBQ1gsZ0JBQVcsR0FBQyxFQUFFLENBQUM7UUFDZixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNy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O0FBdEM1RjtJQUFsQyxnQkFBUyxDQUFDLE1BQU0sRUFBQyxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQzs4QkFBTyxpQkFBVTsyQ0FBQztBQUNoQjtJQUFuQyxnQkFBUyxDQUFDLE1BQU0sRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQzs4QkFBTyxpQkFBVTsyQ0FBQztBQUNsQjtJQUFsQyxnQkFBUyxDQUFDLE1BQU0sRUFBQyxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQzs4QkFBTyxpQkFBVTsyQ0FBQztBQWhENUMsYUFBYTtJQVJ6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU07UUFFaEIsb0ZBQW9DOztLQUV2QyxDQUFDO0lBQ0QsaUJBQVUsRUFBRTtxQ0FzRnNCLHFDQUFpQixFQUE0Qix5QkFBZ0IsRUFBd0IsNEJBQVk7R0FwRnZILGFBQWEsQ0ErUXpCO0FBL1FZLHNDQUFhIiwiZmlsZSI6ImJ1bmRsZS5lMzI0YzQzMGM4NzI0YTFkZWQ4YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwifi9hcHAuY29tcG9uZW50XCJcbmltcG9ydCB7IFNjcm9sbFZpZXcsIFNjcm9sbEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3Njcm9sbC12aWV3XCI7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiO1xuaW1wb3J0IHsgZ2V0RnJhbWVCeUlkLCBGcmFtZSwgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIjtcbmltcG9ydCB7IFRva2VuTW9kZWwsIEF1dG9Db21wbGV0ZUV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktYXV0b2NvbXBsZXRlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IGlzSU9TLCBpc0FuZHJvaWQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcbnZhciB1dGlsaXR5TW9kdWxlID0gcmVxdWlyZShcInV0aWxzL3V0aWxzXCIpO1xuZGVjbGFyZSBjb25zdCBVSUFwcGxpY2F0aW9uO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlMiB9IGZyb20gXCIuL2h0dHAtZ2V0LnNlcnZpY2VzXCI7ICBcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBDb3VudHJ5OiBbXTtcbiAgdXNlckFnZW50OiBzdHJpbmc7XG4gIG9yaWdpbjogc3RyaW5nO1xuICBjb250aW5lbnQ6c3RyaW5nO1xuICBjb3VudHJ5OnN0cmluZztcbiAgcG9wdWxhdGlvbjpzdHJpbmc7XG4gIGNhc2VzOm51bWJlcjtcbiAgcmVjb3ZlcmVkOm51bWJlcjtcbiAgYWN0aXZlOm51bWJlcjtcbiAgZGVhdGhzOm51bWJlcjtcbiAgdGVzdHM6bnVtYmVyO1xuICBkYXRlOnN0cmluZztcbiAgXG5cbiAgICBhbGw6IEFycmF5PGFueT4gPSBbXTsgXG4gICAgYWxsMjogQXJyYXk8YW55PiA9IFtdOyBcbiAgICBhbGwzOiBBcnJheTxhbnk+ID0gW107IFxuICAgIGFsbDQ6IEFycmF5PGFueT4gPSBbXTsgXG4gICAgYWxsNTogQXJyYXk8YW55PiA9IFtdOyBcbiAgICBhbGw2OiBBcnJheTxhbnk+ID0gW107IFxuICAgIGFsbDc6IEFycmF5PGFueT4gPSBbXTsgXG4gICAgZ2xvYmFsOiBBcnJheTxhbnk+ID0gW107IFxuICAgIHJlc3VsdDogQXJyYXk8YW55PiA9IFtdOyBcbiAgICByZXN1bHQyOiBBcnJheTxhbnk+ID0gW107IFxuICAgIHN1Z2dlc3Rpb25zOiBBcnJheTxhbnk+ID0gW107XG4gICAgZmlsdGVyZWQ6IEFycmF5PGFueT4gPSBbXTtcbiAgICBzdWdnZXN0OiBPYnNlcnZhYmxlQXJyYXk8VG9rZW5Nb2RlbD47XG4gIFx0ZGI6IGFueTtcbiAgICBtZWRfMTogc3RyaW5nO1xuICAgIG1lZF8yOiBzdHJpbmc7XG4gICAgbWVkXzM6U3RyaW5nO1xuICAgIGFkdmljZT1cIlwiO1xuICAgIGV2aWRlbmNlPVwiXCI7XG4gICAgY29tbWVudD1cIlwiO1xuICAgIGJlbmVmaXQ9XCJcIjtcbiAgICBtZWRfSGVyYlN1cD1cIlwiO1xuICAgIG1lZEhlcmJTdXBfbmFtZSA9IFwiXCI7XG4gICAgbWVkaWNpbmVfZG9zYWdlPSBcIlwiO1xuICAgIG1lZGljaW5lX2Zvcm09XCJcIjtcbiAgICBtZWRpY2luZV9mcmVxdWVuY3k9XCJcIjtcbiAgICBleGlzdHMgPSB0cnVlO1xuICAgIG1lZGljaW5lTGlzdDogQXJyYXk8T2JqZWN0PiA9IFtdO1xuICAgIHVzZXJfaWQ6IHN0cmluZztcbiAgICAgdXJsOiBzdHJpbmcgPSBcIjx1cmw+XCI7IFxuICAgIHZhbHVlOmJvb2xlYW4gPSB1dGlscy5pc0RhdGFVUkkodGhpcy51cmwpO1xuICAgICBAVmlld0NoaWxkKFwibWVkMVwiLHtzdGF0aWM6IGZhbHNlfSkgbWVkMTogRWxlbWVudFJlZjtcbiAgICAgQFZpZXdDaGlsZChcIm1lZDJcIiwge3N0YXRpYzogZmFsc2V9KSBtZWQyOiBFbGVtZW50UmVmO1xuICAgICBAVmlld0NoaWxkKFwibWVkM1wiLHtzdGF0aWM6IGZhbHNlfSkgbWVkMzogRWxlbWVudFJlZjtcbiAgICBzdW0gPSAwO1xuICAgIHN1bVRvdGFsID0gMDtcbiAgICBzdW1EZWF0aHMgPSAwO1xuICAgIHN1bXBvcD0wO1xuICAgIHN1bWFjdGl2ZT0wO1xuICAgIHN1bXJlY292ZXJlZD0wO1xuICAgIGlzTm90TG9nZ2VkSW49IHRydWU7XG4gICAgaXNIb21lcGFnZSA9IHRydWU7XG4gICAgcmVkPXRydWU7XG4gICAgZ3JlZW49dHJ1ZTtcbiAgICBvcmFuZ2U9dHJ1ZTtcbiAgICBjcmVhdGVBbmRVcGRhdGU6IGFueTtcbiAgICBtZWRIZXJiU3VwOiBBcnJheTxPYmplY3Q+ID0gW107XG4gICAgaXNOb3RTZWFyY2g9IHRydWU7XG4gICAgZnJhbWUgPSBGcmFtZS5nZXRGcmFtZUJ5SWQoXCJteUZyYW1lXCIpO1xuICAgIGlzU2Nhbj10cnVlO1xuXG4gICAgXG4gICAgdG9nZ2xlRGlzcGxheSgpIHtcbiAgICAgICAgdGhpcy5pc0hvbWVwYWdlID0gIXRoaXMuaXNIb21lcGFnZTtcbiAgICAgICB9XG4gICAgdGV4dEZpZWxkVmFsdWU6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBvbkJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJCdXR0b24gd2FzIHByZXNzZWRcIik7XG4gICAgfVxuXG4gICAgc2VhcmNoUGhyYXNlOiBzdHJpbmc7XG4gICAgb25TZWFyY2hTdWJtaXQoYXJncyk6IHZvaWQge1xuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcbiAgICAgICAgY29uc29sZS5sb2coXCJZb3UgYXJlIHNlYXJjaGluZyBmb3IgXCIgKyBzZWFyY2hCYXIudGV4dCk7XG4gICAgfVxuXG4gICBcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG15U2VydmljZTogTXlIdHRwR2V0U2VydmljZTIsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBhcHBjb21wb25lbnQ6IEFwcENvbXBvbmVudCkge1xuXG5cbiAgICAgIFxuICAgICAgIFxuICAgIH0gXG4gICAgXG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIFxuICAgICAgLy8gdGhpcy5leHRyYWN0RGF0YSgpO1xuICAgICAgdGhpcy5leHRyYWN0U3RhdGljcygpO1xuICAgICAgLy8gdGhpcy5zZWxlY3RJdGVtcygpO1xuICAgIH1cbiAgLy8gICBleHRyYWN0RGF0YSgpIHtcbiAgLy8gICAgIHRoaXMubXlTZXJ2aWNlLmdldEFsbCgpXG4gIC8vICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgXG4gIC8vICAgICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvbihyZXN1bHQpO1xuICAgICAgICAgICAgICBcbiAgLy8gICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAvLyAgICAgICAgIH0pO1xuICAvLyB9XG4gIFxuICBzZWxlY3RJdGVtcygpIHtcbiAgICB0aGlzLmRpc21pc3NLZXlib2FyZCgpO1xuICAgXG4gICAgaWYgKCF0aGlzLmlzSG9tZXBhZ2Upe1xuICAgICAgdGhpcy5yZXN1bHQ9W107XG4gICAgICB0aGlzLm15U2VydmljZS5nZXRJbmZvKClcbiAgIFxuICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgb2JqZWN0XCIscmVzdWx0KVxuICAgICAgICB0aGlzLm9uR2V0RGF0YVN1Y2Nlc3MocmVzdWx0KVxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHRoaXMuaXNIb21lcGFnZSA9ICF0aGlzLmlzSG9tZXBhZ2U7XG4gICAgICB0aGlzLm15U2VydmljZS5nZXRJbmZvKClcbiAgIFxuICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgb2JqZWN0XCIscmVzdWx0KVxuICAgICAgICB0aGlzLm9uR2V0RGF0YVN1Y2Nlc3MocmVzdWx0KVxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfVxuICBcblxufSBcblxub25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7IFxuICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICBjb25zb2xlLmxvZyhcImRyYXdlcjFcIilcbiAgXG59XG5cbnByaXZhdGUgb25HZXREYXRhU3VjY2VzcyhyZXMpIHtcblxuZm9yIChsZXQga2V5IGluIHJlcy5yZXNwb25zZSkge1xuICB0aGlzLnJlc3VsdC5wdXNoKHt2YWx1ZTogcmVzLnJlc3BvbnNlW2tleV19KTtcbiAgY29uc29sZS5sb2coXCJ0aGlzIGFycmF5XCIsIHRoaXMucmVzdWx0KTtcbn1cblxuICB9XG4gIG9uU2Nyb2xsKGFyZ3M6IFNjcm9sbEV2ZW50RGF0YSkge1xuICAgIGNvbnN0IHNjcm9sbFZpZXcgPSBhcmdzLm9iamVjdCBhcyBTY3JvbGxWaWV3O1xuXG4gICAgLy8gY29uc29sZS5sb2coXCJzY3JvbGxYOiBcIiArIGFyZ3Muc2Nyb2xsWCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJzY3JvbGxZOiBcIiArIGFyZ3Muc2Nyb2xsWSk7XG59XG5cbmV4dHJhY3RTdGF0aWNzKCkge1xuICBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGV4dHJhY3RcIilcbiAgdGhpcy5teVNlcnZpY2UuZ2V0QWxsKClcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIHJlc3VsdFwiLCByZXN1bHQpXG4gICAgICAgIFxuICAgICAgICAgIHRoaXMub25HZXRTdGF0aWNzKHJlc3VsdCk7XG4gICAgICAgICAgXG4gICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbn1cbnByaXZhdGUgb25HZXRTdGF0aWNzKHJlcykge1xuICBcbiBcblxuZm9yIChsZXQga2V5IGluIHJlcy50dl9yZXN1bHRzKSB7XG4gIFxuICB0aGlzLnJlc3VsdDIucHVzaCh7dmFsdWU6IHJlcy50dl9yZXN1bHRzW2tleV19KTtcbiAgY29uc29sZS5sb2coXCJyZXN1bHRpbmcgaW4gXCIsdGhpcy5yZXN1bHQyKTtcbiAgXG59IFxuXG5cbnRoaXMuZ2xvYmFsLnB1c2goe25ldzogdGhpcy5zdW0sIHRvdGFsOiB0aGlzLnN1bVRvdGFsLG1wb3A6dGhpcy5zdW1wb3AsIGFjdGl2ZTogdGhpcy5zdW1hY3RpdmUsIHJlY292ZXJlZDp0aGlzLnN1bXJlY292ZXJlZCwgZGVhdGhzOiB0aGlzLnN1bURlYXRoc30pO1xuXG5cblxuICB9XG5cblxuIFxuICAgIG9uTWVkU2VsZWN0ZWQoJGV2ZW50OiBBdXRvQ29tcGxldGVFdmVudERhdGEpIHtcbiAgICAgIGNvbnN0IHRva2VuID0gPFRva2VuTW9kZWw+JGV2ZW50LnRva2VuO1xuICAgICAgdGhpcy5tZWRfMT0gdG9rZW4udGV4dDtcblxuICAgICAgY29uc29sZS5sb2codGhpcy5tZWRfMSlcbiAgfVxuICBvbk1lZFNlbGVjdGVkMigkZXZlbnQ6IEF1dG9Db21wbGV0ZUV2ZW50RGF0YSkge1xuICAgIGNvbnN0IHRva2VuID0gPFRva2VuTW9kZWw+JGV2ZW50LnRva2VuO1xuICAgIHRoaXMubWVkXzI9IHRva2VuLnRleHQ7XG4gICAgXG4gICAgY29uc29sZS5sb2codGhpcy5tZWRfMilcbn1cblxuICAgXG4gICAgZ2V0SW1hZ2VOYW1lKHZhbHVlKSB7XG4gICAgICB2YXIgbG93ZXI9dmFsdWUuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKTtcbiAgICAgIGNvbnNvbGUubG9nKGxvd2VyKTtcbiAgICAgIHJldHVybiBgfi9pbWFnZXMvJHtsb3dlcn0ucG5nYDtcbiAgfVxuXG4gIGdldEltYWdlTmFtZTIodmFsdWUpIHtcbiAgICB2YXIgbG93ZXI9dmFsdWUuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKTtcbiAgICBjb25zb2xlLmxvZyhsb3dlcik7XG4gICAgcmV0dXJuIGB+L2ltYWdlcy9mbGFncy8ke2xvd2VyfS1mbGFnLWNvdW50cnktbmF0aW9uLXVuaW9uLWVtcGlyZS5wbmdgO1xufVxuICBcblxuICAgIHN1Z2dlc3Rpb24ocmVzKSB7XG4gICAgICB0aGlzLkNvdW50cnkgPSByZXMucmVzcG9uc2U7XG4gICAgICB0aGlzLnN1Z2dlc3Q9IG5ldyBPYnNlcnZhYmxlQXJyYXk8VG9rZW5Nb2RlbD4oKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkNvdW50cnkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLnN1Z2dlc3QucHVzaChuZXcgVG9rZW5Nb2RlbCh0aGlzLkNvdW50cnlbaV0sIHVuZGVmaW5lZCkpO1xuICAgICAgfVxuICAgIFxuICB9XG5cbiAgICAgb25DaGF0Qm90VGFwKCl7XG4gICAgICB1dGlsaXR5TW9kdWxlLm9wZW5VcmwoXCJodHRwczovL3dlYmNoYXQuc25hdGNoYm90Lm1lLzUxYzcwMDM1Yzk3ODAyY2JjM2Q1NWIzMWJmNjE5NWEwNGU0ZjQ4MGE2NDRhNmM0NTVkMjgzMTkyOWMwZWM2ZWZcIik7XG4gICAgIFxuICAgfVxuICAgXG4gICAgb25Ib21lVGFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hvbWVcIl0pO1xuICAgICAgICBpZighdGhpcy5pc0hvbWVwYWdlKXtcbiAgICAgICAgICB0aGlzLmlzSG9tZXBhZ2U9IXRoaXMuaXNIb21lcGFnZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkhpc3RvcnlUYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaGlzdG9yeVwiXSk7XG4gIFxuICAgIH1cblxuXG4gICAgXG4gICAgIFxuICAgIFxuXG4gICBcbiAgICAgIGRpc21pc3NLZXlib2FyZCgpIHtcbiAgICAgICAgaWYgKGlzSU9TKSB7XG4gICAgICAgICAgVUlBcHBsaWNhdGlvbi5zaGFyZWRBcHBsaWNhdGlvbi5rZXlXaW5kb3cuZW5kRWRpdGluZyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICAgICAgdXRpbHMuYWQuZGlzbWlzc1NvZnRJbnB1dCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICBcblxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9