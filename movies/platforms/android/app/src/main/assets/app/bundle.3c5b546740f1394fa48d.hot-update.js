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
        for (let key in res) {
            this.result2.push({ image: res[key] });
            console.log("IMAGE REsult ", this.result2);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0Esa0ZBQXFGO0FBQ3JGLDhGQUErRDtBQUMvRCxrRUFBNEM7QUFFNUMsdUZBQXNEO0FBQ3RELDRGQUEyRTtBQUMzRSw4SEFBaUY7QUFDakYsK0hBQXlFO0FBQ3pFLGtHQUE2RDtBQUM3RCxJQUFJLGFBQWEsR0FBRyxtQkFBTyxDQUFDLG1EQUFhLENBQUMsQ0FBQztBQUUzQyxpR0FBb0Q7QUFDcEQsK0VBQXdEO0FBRXhELG9GQUEyRTtBQVczRSxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBb0Z0QixZQUFvQixJQUFnQixFQUFTLFNBQTRCLEVBQVUsZ0JBQWtDLEVBQVUsWUFBMEI7UUFBckksU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBckV6SixRQUFHLEdBQWUsRUFBRSxDQUFDO1FBQ3JCLFNBQUksR0FBZSxFQUFFLENBQUM7UUFDdEIsU0FBSSxHQUFlLEVBQUUsQ0FBQztRQUN0QixTQUFJLEdBQWUsRUFBRSxDQUFDO1FBQ3RCLFNBQUksR0FBZSxFQUFFLENBQUM7UUFDdEIsU0FBSSxHQUFlLEVBQUUsQ0FBQztRQUN0QixTQUFJLEdBQWUsRUFBRSxDQUFDO1FBQ3RCLFdBQU0sR0FBZSxFQUFFLENBQUM7UUFDeEIsV0FBTSxHQUFlLEVBQUUsQ0FBQztRQUN4QixZQUFPLEdBQWUsRUFBRSxDQUFDO1FBQ3pCLGdCQUFXLEdBQWUsRUFBRSxDQUFDO1FBQzdCLGFBQVEsR0FBZSxFQUFFLENBQUM7UUFNMUIsV0FBTSxHQUFDLEVBQUUsQ0FBQztRQUNWLGFBQVEsR0FBQyxFQUFFLENBQUM7UUFDWixZQUFPLEdBQUMsRUFBRSxDQUFDO1FBQ1gsWUFBTyxHQUFDLEVBQUUsQ0FBQztRQUNYLGdC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SyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztDQUtOOztZQXpONkIsaUJBQVU7WUFBb0IscUNBQWlCO1lBQTRCLHlCQUFnQjtZQUF3Qiw0QkFBWTs7QUF0Q3JIO0lBQWxDLGdCQUFTLENBQUMsTUFBTSxFQUFDLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDOzhCQUFPLGlCQUFVOzJDQUFDO0FBQ2hCO0lBQW5DLGdCQUFTLENBQUMsTUFBTSxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDOzhCQUFPLGlCQUFVOzJDQUFDO0FBQ2xCO0lBQWxDLGdCQUFTLENBQUMsTUFBTSxFQUFDLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDOzhCQUFPLGlCQUFVOzJDQUFDO0FBaEQ1QyxhQUFhO0lBUnpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTTtRQUVoQixvRkFBb0M7O0tBRXZDLENBQUM7SUFDRCxpQkFBVSxFQUFFO3FDQXNGaUIsaUJBQVUsRUFBb0IscUNBQWlCLEVBQTRCLHlCQUFnQixFQUF3Qiw0QkFBWTtHQXBGaEosYUFBYSxDQTZTekI7QUE3U1ksc0NBQWEiLCJmaWxlIjoiYnVuZGxlLjNjNWI1NDY3NDBmMTM5NGZhNDhkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidWkvc2VhcmNoLWJhclwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCJ+L2FwcC5jb21wb25lbnRcIlxuaW1wb3J0IHsgU2Nyb2xsVmlldywgU2Nyb2xsRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXdcIjtcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgeyBnZXRGcmFtZUJ5SWQsIEZyYW1lLCBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xuaW1wb3J0IHsgVG9rZW5Nb2RlbCwgQXV0b0NvbXBsZXRlRXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1hdXRvY29tcGxldGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgaXNJT1MsIGlzQW5kcm9pZCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xudmFyIHV0aWxpdHlNb2R1bGUgPSByZXF1aXJlKFwidXRpbHMvdXRpbHNcIik7XG5kZWNsYXJlIGNvbnN0IFVJQXBwbGljYXRpb247XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IE15SHR0cEdldFNlcnZpY2UyIH0gZnJvbSBcIi4vaHR0cC1nZXQuc2VydmljZXNcIjsgIFxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBDb3VudHJ5OiBbXTtcbiAgdXNlckFnZW50OiBzdHJpbmc7XG4gIG9yaWdpbjogc3RyaW5nO1xuICBjb250aW5lbnQ6c3RyaW5nO1xuICBjb3VudHJ5OnN0cmluZztcbiAgcG9wdWxhdGlvbjpzdHJpbmc7XG4gIGNhc2VzOm51bWJlcjtcbiAgcmVjb3ZlcmVkOm51bWJlcjtcbiAgYWN0aXZlOm51bWJlcjtcbiAgZGVhdGhzOm51bWJlcjtcbiAgdGVzdHM6bnVtYmVyO1xuICBkYXRlOnN0cmluZztcbiAgXG5cbiAgICBhbGw6IEFycmF5PGFueT4gPSBbXTsgXG4gICAgYWxsMjogQXJyYXk8YW55PiA9IFtdOyBcbiAgICBhbGwzOiBBcnJheTxhbnk+ID0gW107IFxuICAgIGFsbDQ6IEFycmF5PGFueT4gPSBbXTsgXG4gICAgYWxsNTogQXJyYXk8YW55PiA9IFtdOyBcbiAgICBhbGw2OiBBcnJheTxhbnk+ID0gW107IFxuICAgIGFsbDc6IEFycmF5PGFueT4gPSBbXTsgXG4gICAgZ2xvYmFsOiBBcnJheTxhbnk+ID0gW107IFxuICAgIHJlc3VsdDogQXJyYXk8YW55PiA9IFtdOyBcbiAgICByZXN1bHQyOiBBcnJheTxhbnk+ID0gW107IFxuICAgIHN1Z2dlc3Rpb25zOiBBcnJheTxhbnk+ID0gW107XG4gICAgZmlsdGVyZWQ6IEFycmF5PGFueT4gPSBbXTtcbiAgICBzdWdnZXN0OiBPYnNlcnZhYmxlQXJyYXk8VG9rZW5Nb2RlbD47XG4gIFx0ZGI6IGFueTtcbiAgICBtZWRfMTogc3RyaW5nO1xuICAgIG1lZF8yOiBzdHJpbmc7XG4gICAgbWVkXzM6U3RyaW5nO1xuICAgIGFkdmljZT1cIlwiO1xuICAgIGV2aWRlbmNlPVwiXCI7XG4gICAgY29tbWVudD1cIlwiO1xuICAgIGJlbmVmaXQ9XCJcIjtcbiAgICBtZWRfSGVyYlN1cD1cIlwiO1xuICAgIG1lZEhlcmJTdXBfbmFtZSA9IFwiXCI7XG4gICAgbWVkaWNpbmVfZG9zYWdlPSBcIlwiO1xuICAgIG1lZGljaW5lX2Zvcm09XCJcIjtcbiAgICBtZWRpY2luZV9mcmVxdWVuY3k9XCJcIjtcbiAgICBleGlzdHMgPSB0cnVlO1xuICAgIG1lZGljaW5lTGlzdDogQXJyYXk8T2JqZWN0PiA9IFtdO1xuICAgIHVzZXJfaWQ6IHN0cmluZztcbiAgICAgdXJsOiBzdHJpbmcgPSBcIjx1cmw+XCI7IFxuICAgIHZhbHVlOmJvb2xlYW4gPSB1dGlscy5pc0RhdGFVUkkodGhpcy51cmwpO1xuICAgICBAVmlld0NoaWxkKFwibWVkMVwiLHtzdGF0aWM6IGZhbHNlfSkgbWVkMTogRWxlbWVudFJlZjtcbiAgICAgQFZpZXdDaGlsZChcIm1lZDJcIiwge3N0YXRpYzogZmFsc2V9KSBtZWQyOiBFbGVtZW50UmVmO1xuICAgICBAVmlld0NoaWxkKFwibWVkM1wiLHtzdGF0aWM6IGZhbHNlfSkgbWVkMzogRWxlbWVudFJlZjtcbiAgICBzdW0gPSAwO1xuICAgIHN1bVRvdGFsID0gMDtcbiAgICBzdW1EZWF0aHMgPSAwO1xuICAgIHN1bXBvcD0wO1xuICAgIHN1bWFjdGl2ZT0wO1xuICAgIHN1bXJlY292ZXJlZD0wO1xuICAgIGlzTm90TG9nZ2VkSW49IHRydWU7XG4gICAgaXNIb21lcGFnZSA9IHRydWU7XG4gICAgcmVkPXRydWU7XG4gICAgZ3JlZW49dHJ1ZTtcbiAgICBvcmFuZ2U9dHJ1ZTtcbiAgICBjcmVhdGVBbmRVcGRhdGU6IGFueTtcbiAgICBtZWRIZXJiU3VwOiBBcnJheTxPYmplY3Q+ID0gW107XG4gICAgaXNOb3RTZWFyY2g9IHRydWU7XG4gICAgZnJhbWUgPSBGcmFtZS5nZXRGcmFtZUJ5SWQoXCJteUZyYW1lXCIpO1xuICAgIGlzU2Nhbj10cnVlO1xuXG4gICAgXG4gICAgdG9nZ2xlRGlzcGxheSgpIHtcbiAgICAgICAgdGhpcy5pc0hvbWVwYWdlID0gIXRoaXMuaXNIb21lcGFnZTtcbiAgICAgICB9XG4gICAgdGV4dEZpZWxkVmFsdWU6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBvbkJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJCdXR0b24gd2FzIHByZXNzZWRcIik7XG4gICAgfVxuXG4gICAgc2VhcmNoUGhyYXNlOiBzdHJpbmc7XG4gICAgb25TZWFyY2hTdWJtaXQoYXJncyk6IHZvaWQge1xuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcbiAgICAgICAgY29uc29sZS5sb2coXCJZb3UgYXJlIHNlYXJjaGluZyBmb3IgXCIgKyBzZWFyY2hCYXIudGV4dCk7XG4gICAgfVxuXG4gICBcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQscHJpdmF0ZSBteVNlcnZpY2U6IE15SHR0cEdldFNlcnZpY2UyLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgYXBwY29tcG9uZW50OiBBcHBDb21wb25lbnQpIHtcblxuXG4gICAgICBcbiAgICAgICBcbiAgICB9IFxuICAgIFxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICBcbiAgICAgIC8vIHRoaXMuZXh0cmFjdERhdGEoKTtcbiAgICAgIHRoaXMuZXh0cmFjdFN0YXRpY3MoKTtcbiAgICAgIC8vIHRoaXMuc2VsZWN0SXRlbXMoKTtcbiAgICB9XG4gIC8vICAgZXh0cmFjdERhdGEoKSB7XG4gIC8vICAgICB0aGlzLm15U2VydmljZS5nZXRBbGwoKVxuICAvLyAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAvLyAgICAgICAgICAgICB0aGlzLnN1Z2dlc3Rpb24ocmVzdWx0KTtcbiAgICAgICAgICAgICAgXG4gIC8vICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgLy8gICAgICAgICB9KTtcbiAgLy8gfVxuICBcbiAgc2VsZWN0SXRlbXMoKSB7XG4gICAgdGhpcy5kaXNtaXNzS2V5Ym9hcmQoKTtcbiAgIFxuICAgIGlmICghdGhpcy5pc0hvbWVwYWdlKXtcbiAgICAgIHRoaXMucmVzdWx0PVtdO1xuICAgICAgdGhpcy5teVNlcnZpY2UuZ2V0SW5mbygpXG4gICBcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIG9iamVjdFwiLHJlc3VsdClcbiAgICAgICAgdGhpcy5vbkdldERhdGFTdWNjZXNzKHJlc3VsdClcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICB0aGlzLmlzSG9tZXBhZ2UgPSAhdGhpcy5pc0hvbWVwYWdlO1xuICAgICAgdGhpcy5teVNlcnZpY2UuZ2V0SW5mbygpXG4gICBcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIG9iamVjdFwiLHJlc3VsdClcbiAgICAgICAgdGhpcy5vbkdldERhdGFTdWNjZXNzKHJlc3VsdClcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgXG5cbn0gXG5cbm9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQgeyBcbiAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgY29uc29sZS5sb2coXCJkcmF3ZXIxXCIpXG4gIFxufVxuXG5wcml2YXRlIG9uR2V0RGF0YVN1Y2Nlc3MocmVzKSB7XG5cbmZvciAobGV0IGtleSBpbiByZXMucmVzcG9uc2UpIHtcbiAgdGhpcy5yZXN1bHQucHVzaCh7dmFsdWU6IHJlcy5yZXNwb25zZVtrZXldfSk7XG4gIGNvbnNvbGUubG9nKFwidGhpcyBhcnJheVwiLCB0aGlzLnJlc3VsdCk7XG59XG5cbiAgfVxuICBvblNjcm9sbChhcmdzOiBTY3JvbGxFdmVudERhdGEpIHtcbiAgICBjb25zdCBzY3JvbGxWaWV3ID0gYXJncy5vYmplY3QgYXMgU2Nyb2xsVmlldztcblxuICAgIC8vIGNvbnNvbGUubG9nKFwic2Nyb2xsWDogXCIgKyBhcmdzLnNjcm9sbFgpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwic2Nyb2xsWTogXCIgKyBhcmdzLnNjcm9sbFkpO1xufVxuXG5leHRyYWN0U3RhdGljcygpIHtcbiAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBleHRyYWN0XCIpXG4gIHRoaXMubXlTZXJ2aWNlLmdldEFsbCgpXG4gICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSByZXN1bHRcIiwgcmVzdWx0KVxuICAgICAgICBcbiAgICAgICAgICB0aGlzLm9uR2V0U3RhdGljcyhyZXN1bHQpO1xuICAgICAgICAgIFxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG59XG5cblxucHJpdmF0ZSBvbkdldFN0YXRpY3MocmVzKSB7XG4gIFxuIFxuXG5mb3IgKGxldCBrZXkgaW4gcmVzLnR2X3Jlc3VsdHMpIHtcbiAgXG4gIHRoaXMucmVzdWx0Mi5wdXNoKHt2YWx1ZTogcmVzLnR2X3Jlc3VsdHNba2V5XX0pO1xuICAvLyBjb25zb2xlLmxvZyhcInJlc3VsdGluZyBpbiBcIix0aGlzLnJlc3VsdDIpO1xuICB0aGlzLmV4dHJhY3RJbWFnZShyZXMudHZfcmVzdWx0cy5pbWRiX2lkKTtcbiAgXG59XG5cblxuXG5cbnRoaXMuZ2xvYmFsLnB1c2goe25ldzogdGhpcy5zdW0sIHRvdGFsOiB0aGlzLnN1bVRvdGFsLG1wb3A6dGhpcy5zdW1wb3AsIGFjdGl2ZTogdGhpcy5zdW1hY3RpdmUsIHJlY292ZXJlZDp0aGlzLnN1bXJlY292ZXJlZCwgZGVhdGhzOiB0aGlzLnN1bURlYXRoc30pO1xuXG5cblxuICB9XG5cblxuIFxuICAgIG9uTWVkU2VsZWN0ZWQoJGV2ZW50OiBBdXRvQ29tcGxldGVFdmVudERhdGEpIHtcbiAgICAgIGNvbnN0IHRva2VuID0gPFRva2VuTW9kZWw+JGV2ZW50LnRva2VuO1xuICAgICAgdGhpcy5tZWRfMT0gdG9rZW4udGV4dDtcblxuICAgICAgY29uc29sZS5sb2codGhpcy5tZWRfMSlcbiAgfVxuICBvbk1lZFNlbGVjdGVkMigkZXZlbnQ6IEF1dG9Db21wbGV0ZUV2ZW50RGF0YSkge1xuICAgIGNvbnN0IHRva2VuID0gPFRva2VuTW9kZWw+JGV2ZW50LnRva2VuO1xuICAgIHRoaXMubWVkXzI9IHRva2VuLnRleHQ7XG4gICAgXG4gICAgY29uc29sZS5sb2codGhpcy5tZWRfMilcbn1cblxuICAgXG4vLyAgICAgZ2V0SW1hZ2VOYW1lKHZhbHVlKSB7XG4vLyAgICAgICB2YXIgbG93ZXI9dmFsdWUuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKGxvd2VyKTtcbi8vICAgICAgIHJldHVybiBgfi9pbWFnZXMvJHtsb3dlcn0ucG5nYDtcbi8vICAgfVxuXG5cbmV4dHJhY3RJbWFnZSh2YWx1ZSkge1xuXG4gIHRoaXMubXlTZXJ2aWNlLmdldEltYWdlTmFtZTIodmFsdWUpXG4gICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBpbWFnZSByZXN1bHQgXCIsIHJlc3VsdClcbiAgICAgICAgXG4gICAgICAgICAgdGhpcy5vbkdldEltYWdlKHJlc3VsdCk7XG4gICAgICAgICAgXG4gICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbn1cblxuIG9uR2V0SW1hZ2UocmVzKSB7XG4gIFxuIFxuXG4gIGZvciAobGV0IGtleSBpbiByZXMpIHtcbiAgICBcbiAgICB0aGlzLnJlc3VsdDIucHVzaCh7aW1hZ2U6IHJlc1trZXldfSk7XG4gICAgY29uc29sZS5sb2coXCJJTUFHRSBSRXN1bHQgXCIsdGhpcy5yZXN1bHQyKTtcbiAgICBcbiAgICBcbiAgfVxuICBcbiAgXG4gIFxuICAgIH1cblxuICBcblxuICAgIHN1Z2dlc3Rpb24ocmVzKSB7XG4gICAgICB0aGlzLkNvdW50cnkgPSByZXMucmVzcG9uc2U7XG4gICAgICB0aGlzLnN1Z2dlc3Q9IG5ldyBPYnNlcnZhYmxlQXJyYXk8VG9rZW5Nb2RlbD4oKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkNvdW50cnkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLnN1Z2dlc3QucHVzaChuZXcgVG9rZW5Nb2RlbCh0aGlzLkNvdW50cnlbaV0sIHVuZGVmaW5lZCkpO1xuICAgICAgfVxuICAgIFxuICB9XG5cbiAgICAgb25DaGF0Qm90VGFwKCl7XG4gICAgICB1dGlsaXR5TW9kdWxlLm9wZW5VcmwoXCJodHRwczovL3dlYmNoYXQuc25hdGNoYm90Lm1lLzUxYzcwMDM1Yzk3ODAyY2JjM2Q1NWIzMWJmNjE5NWEwNGU0ZjQ4MGE2NDRhNmM0NTVkMjgzMTkyOWMwZWM2ZWZcIik7XG4gICAgIFxuICAgfVxuICAgXG4gICAgb25Ib21lVGFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hvbWVcIl0pO1xuICAgICAgICBpZighdGhpcy5pc0hvbWVwYWdlKXtcbiAgICAgICAgICB0aGlzLmlzSG9tZXBhZ2U9IXRoaXMuaXNIb21lcGFnZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkhpc3RvcnlUYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaGlzdG9yeVwiXSk7XG4gIFxuICAgIH1cblxuXG4gICAgXG4gICAgIFxuICAgIFxuXG4gICBcbiAgICAgIGRpc21pc3NLZXlib2FyZCgpIHtcbiAgICAgICAgaWYgKGlzSU9TKSB7XG4gICAgICAgICAgVUlBcHBsaWNhdGlvbi5zaGFyZWRBcHBsaWNhdGlvbi5rZXlXaW5kb3cuZW5kRWRpdGluZyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICAgICAgdXRpbHMuYWQuZGlzbWlzc1NvZnRJbnB1dCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICBcblxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9