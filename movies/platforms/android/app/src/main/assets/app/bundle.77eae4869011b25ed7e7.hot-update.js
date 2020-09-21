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
            console.log("resulting in ", this.result2);
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
            console.log("this is the image result ", result);
        }, (error) => {
            console.log(error);
        });
    }
    onGetImage(res) {
        for (let key in res) {
            this.result2.push({ image: res[key] });
            console.log("resulting in ", this.result2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0Esa0ZBQXFGO0FBQ3JGLDhGQUErRDtBQUMvRCxrRUFBNEM7QUFFNUMsdUZBQXNEO0FBQ3RELDRGQUEyRTtBQUMzRSw4SEFBaUY7QUFDakYsK0hBQXlFO0FBQ3pFLGtHQUE2RDtBQUM3RCxJQUFJLGFBQWEsR0FBRyxtQkFBTyxDQUFDLG1EQUFhLENBQUMsQ0FBQztBQUUzQyxpR0FBb0Q7QUFDcEQsK0VBQXdEO0FBRXhELG9GQUEyRTtBQVczRSxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBb0Z0QixZQUFvQixJQUFnQixFQUFTLFNBQTRCLEVBQVUsZ0JBQWtDLEVBQVUsWUFBMEI7UUFBckksU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBckV6SixRQUFHLEdBQWUsRUFBRSxDQUFDO1FBQ3JCLFNBQUksR0FBZSxFQUFFLENBQUM7UUFDdEIsU0FBSSxHQUFlLEVBQUUsQ0FBQztRQUN0QixTQUFJLEdBQWUsRUFBRSxDQUFDO1FBQ3RCLFNBQUksR0FBZSxFQUFFLENBQUM7UUFDdEIsU0FBSSxHQUFlLEVBQUUsQ0FBQztRQUN0QixTQUFJLEdBQWUsRUFBRSxDQUFDO1FBQ3RCLFdBQU0sR0FBZSxFQUFFLENBQUM7UUFDeEIsV0FBTSxHQUFlLEVBQUUsQ0FBQztRQUN4QixZQUFPLEdBQWUsRUFBRSxDQUFDO1FBQ3pCLGdCQUFXLEdBQWUsRUFBRSxDQUFDO1FBQzdCLGFBQVEsR0FBZSxFQUFFLENBQUM7UUFNMUIsV0FBTSxHQUFDLEVBQUUsQ0FBQztRQUNWLGFBQVEsR0FBQyxFQUFFLENBQUM7UUFDWixZQUFPLEdBQUMsRUFBRSxDQUFDO1FBQ1gsWUFBTyxHQUFDLEVBQUUsQ0FBQztRQUNYLGdC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QVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUQ7UUFDRCxJQUFJLG9CQUFTLEVBQUU7WUFDYixLQUFLLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDN0I7SUFDSCxDQUFDO0NBS047O1lBek42QixpQkFBVTtZQUFvQixxQ0FBaUI7WUFBNEIseUJBQWdCO1lBQXdCLDRCQUFZOztBQXRDckg7SUFBbEMsZ0JBQVMsQ0FBQyxNQUFNLEVBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7OEJBQU8saUJBQVU7MkNBQUM7QUFDaEI7SUFBbkMsZ0JBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7OEJBQU8saUJBQVU7MkNBQUM7QUFDbEI7SUFBbEMsZ0JBQVMsQ0FBQyxNQUFNLEVBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7OEJBQU8saUJBQVU7MkNBQUM7QUFoRDVDLGFBQWE7SUFSekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNO1FBRWhCLG9GQUFvQzs7S0FFdkMsQ0FBQztJQUNELGlCQUFVLEVBQUU7cUNBc0ZpQixpQkFBVSxFQUFvQixxQ0FBaUIsRUFBNEIseUJBQWdCLEVBQXdCLDRCQUFZO0dBcEZoSixhQUFhLENBNlN6QjtBQTdTWSxzQ0FBYSIsImZpbGUiOiJidW5kbGUuNzdlYWU0ODY5MDExYjI1ZWQ3ZTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCJ1aS9zZWFyY2gtYmFyXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIn4vYXBwLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBTY3JvbGxWaWV3LCBTY3JvbGxFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zY3JvbGwtdmlld1wiO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IGdldEZyYW1lQnlJZCwgRnJhbWUsIEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XG5pbXBvcnQgeyBUb2tlbk1vZGVsLCBBdXRvQ29tcGxldGVFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWF1dG9jb21wbGV0ZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBpc0lPUywgaXNBbmRyb2lkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XG52YXIgdXRpbGl0eU1vZHVsZSA9IHJlcXVpcmUoXCJ1dGlscy91dGlsc1wiKTtcbmRlY2xhcmUgY29uc3QgVUlBcHBsaWNhdGlvbjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgTXlIdHRwR2V0U2VydmljZTIgfSBmcm9tIFwiLi9odHRwLWdldC5zZXJ2aWNlc1wiOyAgXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXG59KVxuQEluamVjdGFibGUoKVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIENvdW50cnk6IFtdO1xuICB1c2VyQWdlbnQ6IHN0cmluZztcbiAgb3JpZ2luOiBzdHJpbmc7XG4gIGNvbnRpbmVudDpzdHJpbmc7XG4gIGNvdW50cnk6c3RyaW5nO1xuICBwb3B1bGF0aW9uOnN0cmluZztcbiAgY2FzZXM6bnVtYmVyO1xuICByZWNvdmVyZWQ6bnVtYmVyO1xuICBhY3RpdmU6bnVtYmVyO1xuICBkZWF0aHM6bnVtYmVyO1xuICB0ZXN0czpudW1iZXI7XG4gIGRhdGU6c3RyaW5nO1xuICBcblxuICAgIGFsbDogQXJyYXk8YW55PiA9IFtdOyBcbiAgICBhbGwyOiBBcnJheTxhbnk+ID0gW107IFxuICAgIGFsbDM6IEFycmF5PGFueT4gPSBbXTsgXG4gICAgYWxsNDogQXJyYXk8YW55PiA9IFtdOyBcbiAgICBhbGw1OiBBcnJheTxhbnk+ID0gW107IFxuICAgIGFsbDY6IEFycmF5PGFueT4gPSBbXTsgXG4gICAgYWxsNzogQXJyYXk8YW55PiA9IFtdOyBcbiAgICBnbG9iYWw6IEFycmF5PGFueT4gPSBbXTsgXG4gICAgcmVzdWx0OiBBcnJheTxhbnk+ID0gW107IFxuICAgIHJlc3VsdDI6IEFycmF5PGFueT4gPSBbXTsgXG4gICAgc3VnZ2VzdGlvbnM6IEFycmF5PGFueT4gPSBbXTtcbiAgICBmaWx0ZXJlZDogQXJyYXk8YW55PiA9IFtdO1xuICAgIHN1Z2dlc3Q6IE9ic2VydmFibGVBcnJheTxUb2tlbk1vZGVsPjtcbiAgXHRkYjogYW55O1xuICAgIG1lZF8xOiBzdHJpbmc7XG4gICAgbWVkXzI6IHN0cmluZztcbiAgICBtZWRfMzpTdHJpbmc7XG4gICAgYWR2aWNlPVwiXCI7XG4gICAgZXZpZGVuY2U9XCJcIjtcbiAgICBjb21tZW50PVwiXCI7XG4gICAgYmVuZWZpdD1cIlwiO1xuICAgIG1lZF9IZXJiU3VwPVwiXCI7XG4gICAgbWVkSGVyYlN1cF9uYW1lID0gXCJcIjtcbiAgICBtZWRpY2luZV9kb3NhZ2U9IFwiXCI7XG4gICAgbWVkaWNpbmVfZm9ybT1cIlwiO1xuICAgIG1lZGljaW5lX2ZyZXF1ZW5jeT1cIlwiO1xuICAgIGV4aXN0cyA9IHRydWU7XG4gICAgbWVkaWNpbmVMaXN0OiBBcnJheTxPYmplY3Q+ID0gW107XG4gICAgdXNlcl9pZDogc3RyaW5nO1xuICAgICB1cmw6IHN0cmluZyA9IFwiPHVybD5cIjsgXG4gICAgdmFsdWU6Ym9vbGVhbiA9IHV0aWxzLmlzRGF0YVVSSSh0aGlzLnVybCk7XG4gICAgIEBWaWV3Q2hpbGQoXCJtZWQxXCIse3N0YXRpYzogZmFsc2V9KSBtZWQxOiBFbGVtZW50UmVmO1xuICAgICBAVmlld0NoaWxkKFwibWVkMlwiLCB7c3RhdGljOiBmYWxzZX0pIG1lZDI6IEVsZW1lbnRSZWY7XG4gICAgIEBWaWV3Q2hpbGQoXCJtZWQzXCIse3N0YXRpYzogZmFsc2V9KSBtZWQzOiBFbGVtZW50UmVmO1xuICAgIHN1bSA9IDA7XG4gICAgc3VtVG90YWwgPSAwO1xuICAgIHN1bURlYXRocyA9IDA7XG4gICAgc3VtcG9wPTA7XG4gICAgc3VtYWN0aXZlPTA7XG4gICAgc3VtcmVjb3ZlcmVkPTA7XG4gICAgaXNOb3RMb2dnZWRJbj0gdHJ1ZTtcbiAgICBpc0hvbWVwYWdlID0gdHJ1ZTtcbiAgICByZWQ9dHJ1ZTtcbiAgICBncmVlbj10cnVlO1xuICAgIG9yYW5nZT10cnVlO1xuICAgIGNyZWF0ZUFuZFVwZGF0ZTogYW55O1xuICAgIG1lZEhlcmJTdXA6IEFycmF5PE9iamVjdD4gPSBbXTtcbiAgICBpc05vdFNlYXJjaD0gdHJ1ZTtcbiAgICBmcmFtZSA9IEZyYW1lLmdldEZyYW1lQnlJZChcIm15RnJhbWVcIik7XG4gICAgaXNTY2FuPXRydWU7XG5cbiAgICBcbiAgICB0b2dnbGVEaXNwbGF5KCkge1xuICAgICAgICB0aGlzLmlzSG9tZXBhZ2UgPSAhdGhpcy5pc0hvbWVwYWdlO1xuICAgICAgIH1cbiAgICB0ZXh0RmllbGRWYWx1ZTogc3RyaW5nID0gXCJcIjtcblxuICAgIG9uQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkJ1dHRvbiB3YXMgcHJlc3NlZFwiKTtcbiAgICB9XG5cbiAgICBzZWFyY2hQaHJhc2U6IHN0cmluZztcbiAgICBvblNlYXJjaFN1Ym1pdChhcmdzKTogdm9pZCB7XG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xuICAgICAgICBjb25zb2xlLmxvZyhcIllvdSBhcmUgc2VhcmNoaW5nIGZvciBcIiArIHNlYXJjaEJhci50ZXh0KTtcbiAgICB9XG5cbiAgIFxuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxwcml2YXRlIG15U2VydmljZTogTXlIdHRwR2V0U2VydmljZTIsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBhcHBjb21wb25lbnQ6IEFwcENvbXBvbmVudCkge1xuXG5cbiAgICAgIFxuICAgICAgIFxuICAgIH0gXG4gICAgXG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIFxuICAgICAgLy8gdGhpcy5leHRyYWN0RGF0YSgpO1xuICAgICAgdGhpcy5leHRyYWN0U3RhdGljcygpO1xuICAgICAgLy8gdGhpcy5zZWxlY3RJdGVtcygpO1xuICAgIH1cbiAgLy8gICBleHRyYWN0RGF0YSgpIHtcbiAgLy8gICAgIHRoaXMubXlTZXJ2aWNlLmdldEFsbCgpXG4gIC8vICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgXG4gIC8vICAgICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvbihyZXN1bHQpO1xuICAgICAgICAgICAgICBcbiAgLy8gICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAvLyAgICAgICAgIH0pO1xuICAvLyB9XG4gIFxuICBzZWxlY3RJdGVtcygpIHtcbiAgICB0aGlzLmRpc21pc3NLZXlib2FyZCgpO1xuICAgXG4gICAgaWYgKCF0aGlzLmlzSG9tZXBhZ2Upe1xuICAgICAgdGhpcy5yZXN1bHQ9W107XG4gICAgICB0aGlzLm15U2VydmljZS5nZXRJbmZvKClcbiAgIFxuICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgb2JqZWN0XCIscmVzdWx0KVxuICAgICAgICB0aGlzLm9uR2V0RGF0YVN1Y2Nlc3MocmVzdWx0KVxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHRoaXMuaXNIb21lcGFnZSA9ICF0aGlzLmlzSG9tZXBhZ2U7XG4gICAgICB0aGlzLm15U2VydmljZS5nZXRJbmZvKClcbiAgIFxuICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgb2JqZWN0XCIscmVzdWx0KVxuICAgICAgICB0aGlzLm9uR2V0RGF0YVN1Y2Nlc3MocmVzdWx0KVxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfVxuICBcblxufSBcblxub25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7IFxuICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICBjb25zb2xlLmxvZyhcImRyYXdlcjFcIilcbiAgXG59XG5cbnByaXZhdGUgb25HZXREYXRhU3VjY2VzcyhyZXMpIHtcblxuZm9yIChsZXQga2V5IGluIHJlcy5yZXNwb25zZSkge1xuICB0aGlzLnJlc3VsdC5wdXNoKHt2YWx1ZTogcmVzLnJlc3BvbnNlW2tleV19KTtcbiAgY29uc29sZS5sb2coXCJ0aGlzIGFycmF5XCIsIHRoaXMucmVzdWx0KTtcbn1cblxuICB9XG4gIG9uU2Nyb2xsKGFyZ3M6IFNjcm9sbEV2ZW50RGF0YSkge1xuICAgIGNvbnN0IHNjcm9sbFZpZXcgPSBhcmdzLm9iamVjdCBhcyBTY3JvbGxWaWV3O1xuXG4gICAgLy8gY29uc29sZS5sb2coXCJzY3JvbGxYOiBcIiArIGFyZ3Muc2Nyb2xsWCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJzY3JvbGxZOiBcIiArIGFyZ3Muc2Nyb2xsWSk7XG59XG5cbmV4dHJhY3RTdGF0aWNzKCkge1xuICBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGV4dHJhY3RcIilcbiAgdGhpcy5teVNlcnZpY2UuZ2V0QWxsKClcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIHJlc3VsdFwiLCByZXN1bHQpXG4gICAgICAgIFxuICAgICAgICAgIHRoaXMub25HZXRTdGF0aWNzKHJlc3VsdCk7XG4gICAgICAgICAgXG4gICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbn1cblxuXG5wcml2YXRlIG9uR2V0U3RhdGljcyhyZXMpIHtcbiAgXG4gXG5cbmZvciAobGV0IGtleSBpbiByZXMudHZfcmVzdWx0cykge1xuICBcbiAgdGhpcy5yZXN1bHQyLnB1c2goe3ZhbHVlOiByZXMudHZfcmVzdWx0c1trZXldfSk7XG4gIGNvbnNvbGUubG9nKFwicmVzdWx0aW5nIGluIFwiLHRoaXMucmVzdWx0Mik7XG4gIHRoaXMuZXh0cmFjdEltYWdlKHJlcy50dl9yZXN1bHRzLmltZGJfaWQpO1xuICBcbn1cblxuXG5cblxudGhpcy5nbG9iYWwucHVzaCh7bmV3OiB0aGlzLnN1bSwgdG90YWw6IHRoaXMuc3VtVG90YWwsbXBvcDp0aGlzLnN1bXBvcCwgYWN0aXZlOiB0aGlzLnN1bWFjdGl2ZSwgcmVjb3ZlcmVkOnRoaXMuc3VtcmVjb3ZlcmVkLCBkZWF0aHM6IHRoaXMuc3VtRGVhdGhzfSk7XG5cblxuXG4gIH1cblxuXG4gXG4gICAgb25NZWRTZWxlY3RlZCgkZXZlbnQ6IEF1dG9Db21wbGV0ZUV2ZW50RGF0YSkge1xuICAgICAgY29uc3QgdG9rZW4gPSA8VG9rZW5Nb2RlbD4kZXZlbnQudG9rZW47XG4gICAgICB0aGlzLm1lZF8xPSB0b2tlbi50ZXh0O1xuXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLm1lZF8xKVxuICB9XG4gIG9uTWVkU2VsZWN0ZWQyKCRldmVudDogQXV0b0NvbXBsZXRlRXZlbnREYXRhKSB7XG4gICAgY29uc3QgdG9rZW4gPSA8VG9rZW5Nb2RlbD4kZXZlbnQudG9rZW47XG4gICAgdGhpcy5tZWRfMj0gdG9rZW4udGV4dDtcbiAgICBcbiAgICBjb25zb2xlLmxvZyh0aGlzLm1lZF8yKVxufVxuXG4gICBcbi8vICAgICBnZXRJbWFnZU5hbWUodmFsdWUpIHtcbi8vICAgICAgIHZhciBsb3dlcj12YWx1ZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xuLy8gICAgICAgY29uc29sZS5sb2cobG93ZXIpO1xuLy8gICAgICAgcmV0dXJuIGB+L2ltYWdlcy8ke2xvd2VyfS5wbmdgO1xuLy8gICB9XG5cblxuZXh0cmFjdEltYWdlKHZhbHVlKSB7XG5cbiAgdGhpcy5teVNlcnZpY2UuZ2V0SW1hZ2VOYW1lMih2YWx1ZSlcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGltYWdlIHJlc3VsdCBcIiwgcmVzdWx0KVxuICAgICAgICBcbiAgICAgICAgICAvLyB0aGlzLm9uR2V0SW1hZ2UocmVzdWx0KTtcbiAgICAgICAgICBcbiAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xufVxuXG4gb25HZXRJbWFnZShyZXMpIHtcbiAgXG4gXG5cbiAgZm9yIChsZXQga2V5IGluIHJlcykge1xuICAgIFxuICAgIHRoaXMucmVzdWx0Mi5wdXNoKHtpbWFnZTogcmVzW2tleV19KTtcbiAgICBjb25zb2xlLmxvZyhcInJlc3VsdGluZyBpbiBcIix0aGlzLnJlc3VsdDIpO1xuICAgIFxuICAgIFxuICB9XG4gIFxuICBcbiAgXG4gICAgfVxuXG4gIFxuXG4gICAgc3VnZ2VzdGlvbihyZXMpIHtcbiAgICAgIHRoaXMuQ291bnRyeSA9IHJlcy5yZXNwb25zZTtcbiAgICAgIHRoaXMuc3VnZ2VzdD0gbmV3IE9ic2VydmFibGVBcnJheTxUb2tlbk1vZGVsPigpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuQ291bnRyeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuc3VnZ2VzdC5wdXNoKG5ldyBUb2tlbk1vZGVsKHRoaXMuQ291bnRyeVtpXSwgdW5kZWZpbmVkKSk7XG4gICAgICB9XG4gICAgXG4gIH1cblxuICAgICBvbkNoYXRCb3RUYXAoKXtcbiAgICAgIHV0aWxpdHlNb2R1bGUub3BlblVybChcImh0dHBzOi8vd2ViY2hhdC5zbmF0Y2hib3QubWUvNTFjNzAwMzVjOTc4MDJjYmMzZDU1YjMxYmY2MTk1YTA0ZTRmNDgwYTY0NGE2YzQ1NWQyODMxOTI5YzBlYzZlZlwiKTtcbiAgICAgXG4gICB9XG4gICBcbiAgICBvbkhvbWVUYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSk7XG4gICAgICAgIGlmKCF0aGlzLmlzSG9tZXBhZ2Upe1xuICAgICAgICAgIHRoaXMuaXNIb21lcGFnZT0hdGhpcy5pc0hvbWVwYWdlO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uSGlzdG9yeVRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9oaXN0b3J5XCJdKTtcbiAgXG4gICAgfVxuXG5cbiAgICBcbiAgICAgXG4gICAgXG5cbiAgIFxuICAgICAgZGlzbWlzc0tleWJvYXJkKCkge1xuICAgICAgICBpZiAoaXNJT1MpIHtcbiAgICAgICAgICBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uLmtleVdpbmRvdy5lbmRFZGl0aW5nKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgICAgICB1dGlscy5hZC5kaXNtaXNzU29mdElucHV0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIFxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=