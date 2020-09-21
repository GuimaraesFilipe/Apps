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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0Esa0ZBQXFGO0FBQ3JGLDhGQUErRDtBQUMvRCxrRUFBNEM7QUFFNUMsdUZBQXNEO0FBQ3RELDRGQUEyRTtBQUMzRSw4SEFBaUY7QUFDakYsK0hBQXlFO0FBQ3pFLGtHQUE2RDtBQUM3RCxJQUFJLGFBQWEsR0FBRyxtQkFBTyxDQUFDLG1EQUFhLENBQUMsQ0FBQztBQUUzQyxpR0FBb0Q7QUFDcEQsK0VBQXdEO0FBWXhELElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFvRnRCLFlBQW9CLFNBQTRCLEVBQVUsZ0JBQWtDLEVBQVUsWUFBMEI7UUFBNUcsY0FBUyxHQUFULFNBQVMsQ0FBbUI7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFyRWhJLFFBQUcsR0FBZSxFQUFFLENBQUM7UUFDckIsU0FBSSxHQUFlLEVBQUUsQ0FBQztRQUN0QixTQUFJLEdBQWUsRUFBRSxDQUFDO1FBQ3RCLFNBQUksR0FBZSxFQUFFLENBQUM7UUFDdEIsU0FBSSxHQUFlLEVBQUUsQ0FBQztRQUN0QixTQUFJLEdBQWUsRUFBRSxDQUFDO1FBQ3RCLFNBQUksR0FBZSxFQUFFLENBQUM7UUFDdEIsV0FBTSxHQUFlLEVBQUUsQ0FBQztRQUN4QixXQUFNLEdBQWUsRUFBRSxDQUFDO1FBQ3hCLFlBQU8sR0FBZSxFQUFFLENBQUM7UUFDekIsZ0JBQVcsR0FBZSxFQUFFLENBQUM7UUFDN0IsYUFBUSxHQUFlLEVBQUUsQ0FBQztRQU0xQixXQUFNLEdBQUMsRUFBRSxDQUFDO1FBQ1YsYUFBUSxHQUFDLEVBQUUsQ0FBQztRQUNaLFlBQU8sR0FBQyxFQUFFLENBQUM7UUFDWCxZQUFPLEdBQUMsRUFBRSxDQUFDO1FBQ1gsZ0JBQVcsR0FBQyxFQUFFLENBQUM7UUFDZixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNy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LjNmNTBlNWRjMTg4YzE0NzAwMzkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidWkvc2VhcmNoLWJhclwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCJ+L2FwcC5jb21wb25lbnRcIlxuaW1wb3J0IHsgU2Nyb2xsVmlldywgU2Nyb2xsRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXdcIjtcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgeyBnZXRGcmFtZUJ5SWQsIEZyYW1lLCBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xuaW1wb3J0IHsgVG9rZW5Nb2RlbCwgQXV0b0NvbXBsZXRlRXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1hdXRvY29tcGxldGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgaXNJT1MsIGlzQW5kcm9pZCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xudmFyIHV0aWxpdHlNb2R1bGUgPSByZXF1aXJlKFwidXRpbHMvdXRpbHNcIik7XG5kZWNsYXJlIGNvbnN0IFVJQXBwbGljYXRpb247XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IE15SHR0cEdldFNlcnZpY2UyIH0gZnJvbSBcIi4vaHR0cC1nZXQuc2VydmljZXNcIjsgIFxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXG59KVxuQEluamVjdGFibGUoKVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIENvdW50cnk6IFtdO1xuICB1c2VyQWdlbnQ6IHN0cmluZztcbiAgb3JpZ2luOiBzdHJpbmc7XG4gIGNvbnRpbmVudDpzdHJpbmc7XG4gIGNvdW50cnk6c3RyaW5nO1xuICBwb3B1bGF0aW9uOnN0cmluZztcbiAgY2FzZXM6bnVtYmVyO1xuICByZWNvdmVyZWQ6bnVtYmVyO1xuICBhY3RpdmU6bnVtYmVyO1xuICBkZWF0aHM6bnVtYmVyO1xuICB0ZXN0czpudW1iZXI7XG4gIGRhdGU6c3RyaW5nO1xuICBcblxuICAgIGFsbDogQXJyYXk8YW55PiA9IFtdOyBcbiAgICBhbGwyOiBBcnJheTxhbnk+ID0gW107IFxuICAgIGFsbDM6IEFycmF5PGFueT4gPSBbXTsgXG4gICAgYWxsNDogQXJyYXk8YW55PiA9IFtdOyBcbiAgICBhbGw1OiBBcnJheTxhbnk+ID0gW107IFxuICAgIGFsbDY6IEFycmF5PGFueT4gPSBbXTsgXG4gICAgYWxsNzogQXJyYXk8YW55PiA9IFtdOyBcbiAgICBnbG9iYWw6IEFycmF5PGFueT4gPSBbXTsgXG4gICAgcmVzdWx0OiBBcnJheTxhbnk+ID0gW107IFxuICAgIHJlc3VsdDI6IEFycmF5PGFueT4gPSBbXTsgXG4gICAgc3VnZ2VzdGlvbnM6IEFycmF5PGFueT4gPSBbXTtcbiAgICBmaWx0ZXJlZDogQXJyYXk8YW55PiA9IFtdO1xuICAgIHN1Z2dlc3Q6IE9ic2VydmFibGVBcnJheTxUb2tlbk1vZGVsPjtcbiAgXHRkYjogYW55O1xuICAgIG1lZF8xOiBzdHJpbmc7XG4gICAgbWVkXzI6IHN0cmluZztcbiAgICBtZWRfMzpTdHJpbmc7XG4gICAgYWR2aWNlPVwiXCI7XG4gICAgZXZpZGVuY2U9XCJcIjtcbiAgICBjb21tZW50PVwiXCI7XG4gICAgYmVuZWZpdD1cIlwiO1xuICAgIG1lZF9IZXJiU3VwPVwiXCI7XG4gICAgbWVkSGVyYlN1cF9uYW1lID0gXCJcIjtcbiAgICBtZWRpY2luZV9kb3NhZ2U9IFwiXCI7XG4gICAgbWVkaWNpbmVfZm9ybT1cIlwiO1xuICAgIG1lZGljaW5lX2ZyZXF1ZW5jeT1cIlwiO1xuICAgIGV4aXN0cyA9IHRydWU7XG4gICAgbWVkaWNpbmVMaXN0OiBBcnJheTxPYmplY3Q+ID0gW107XG4gICAgdXNlcl9pZDogc3RyaW5nO1xuICAgICB1cmw6IHN0cmluZyA9IFwiPHVybD5cIjsgXG4gICAgdmFsdWU6Ym9vbGVhbiA9IHV0aWxzLmlzRGF0YVVSSSh0aGlzLnVybCk7XG4gICAgIEBWaWV3Q2hpbGQoXCJtZWQxXCIse3N0YXRpYzogZmFsc2V9KSBtZWQxOiBFbGVtZW50UmVmO1xuICAgICBAVmlld0NoaWxkKFwibWVkMlwiLCB7c3RhdGljOiBmYWxzZX0pIG1lZDI6IEVsZW1lbnRSZWY7XG4gICAgIEBWaWV3Q2hpbGQoXCJtZWQzXCIse3N0YXRpYzogZmFsc2V9KSBtZWQzOiBFbGVtZW50UmVmO1xuICAgIHN1bSA9IDA7XG4gICAgc3VtVG90YWwgPSAwO1xuICAgIHN1bURlYXRocyA9IDA7XG4gICAgc3VtcG9wPTA7XG4gICAgc3VtYWN0aXZlPTA7XG4gICAgc3VtcmVjb3ZlcmVkPTA7XG4gICAgaXNOb3RMb2dnZWRJbj0gdHJ1ZTtcbiAgICBpc0hvbWVwYWdlID0gdHJ1ZTtcbiAgICByZWQ9dHJ1ZTtcbiAgICBncmVlbj10cnVlO1xuICAgIG9yYW5nZT10cnVlO1xuICAgIGNyZWF0ZUFuZFVwZGF0ZTogYW55O1xuICAgIG1lZEhlcmJTdXA6IEFycmF5PE9iamVjdD4gPSBbXTtcbiAgICBpc05vdFNlYXJjaD0gdHJ1ZTtcbiAgICBmcmFtZSA9IEZyYW1lLmdldEZyYW1lQnlJZChcIm15RnJhbWVcIik7XG4gICAgaXNTY2FuPXRydWU7XG5cbiAgICBcbiAgICB0b2dnbGVEaXNwbGF5KCkge1xuICAgICAgICB0aGlzLmlzSG9tZXBhZ2UgPSAhdGhpcy5pc0hvbWVwYWdlO1xuICAgICAgIH1cbiAgICB0ZXh0RmllbGRWYWx1ZTogc3RyaW5nID0gXCJcIjtcblxuICAgIG9uQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkJ1dHRvbiB3YXMgcHJlc3NlZFwiKTtcbiAgICB9XG5cbiAgICBzZWFyY2hQaHJhc2U6IHN0cmluZztcbiAgICBvblNlYXJjaFN1Ym1pdChhcmdzKTogdm9pZCB7XG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xuICAgICAgICBjb25zb2xlLmxvZyhcIllvdSBhcmUgc2VhcmNoaW5nIGZvciBcIiArIHNlYXJjaEJhci50ZXh0KTtcbiAgICB9XG5cbiAgIFxuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbXlTZXJ2aWNlOiBNeUh0dHBHZXRTZXJ2aWNlMiwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGFwcGNvbXBvbmVudDogQXBwQ29tcG9uZW50KSB7XG5cblxuICAgICAgXG4gICAgICAgXG4gICAgfSBcbiAgICBcblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgXG4gICAgICAvLyB0aGlzLmV4dHJhY3REYXRhKCk7XG4gICAgICB0aGlzLmV4dHJhY3RTdGF0aWNzKCk7XG4gICAgICAvLyB0aGlzLnNlbGVjdEl0ZW1zKCk7XG4gICAgfVxuICAvLyAgIGV4dHJhY3REYXRhKCkge1xuICAvLyAgICAgdGhpcy5teVNlcnZpY2UuZ2V0QWxsKClcbiAgLy8gICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgLy8gICAgICAgICAgICAgdGhpcy5zdWdnZXN0aW9uKHJlc3VsdCk7XG4gICAgICAgICAgICAgIFxuICAvLyAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIC8vICAgICAgICAgfSk7XG4gIC8vIH1cbiAgXG4gIHNlbGVjdEl0ZW1zKCkge1xuICAgIHRoaXMuZGlzbWlzc0tleWJvYXJkKCk7XG4gICBcbiAgICBpZiAoIXRoaXMuaXNIb21lcGFnZSl7XG4gICAgICB0aGlzLnJlc3VsdD1bXTtcbiAgICAgIHRoaXMubXlTZXJ2aWNlLmdldEluZm8oKVxuICAgXG4gICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICBcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBvYmplY3RcIixyZXN1bHQpXG4gICAgICAgIHRoaXMub25HZXREYXRhU3VjY2VzcyhyZXN1bHQpXG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcblxuICAgIH1cbiAgICBlbHNle1xuICAgICAgdGhpcy5pc0hvbWVwYWdlID0gIXRoaXMuaXNIb21lcGFnZTtcbiAgICAgIHRoaXMubXlTZXJ2aWNlLmdldEluZm8oKVxuICAgXG4gICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICBcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBvYmplY3RcIixyZXN1bHQpXG4gICAgICAgIHRoaXMub25HZXREYXRhU3VjY2VzcyhyZXN1bHQpXG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgICB9XG4gIFxuXG59IFxuXG5vbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHsgXG4gIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gIGNvbnNvbGUubG9nKFwiZHJhd2VyMVwiKVxuICBcbn1cblxucHJpdmF0ZSBvbkdldERhdGFTdWNjZXNzKHJlcykge1xuXG5mb3IgKGxldCBrZXkgaW4gcmVzLnJlc3BvbnNlKSB7XG4gIHRoaXMucmVzdWx0LnB1c2goe3ZhbHVlOiByZXMucmVzcG9uc2Vba2V5XX0pO1xuICBjb25zb2xlLmxvZyhcInRoaXMgYXJyYXlcIiwgdGhpcy5yZXN1bHQpO1xufVxuXG4gIH1cbiAgb25TY3JvbGwoYXJnczogU2Nyb2xsRXZlbnREYXRhKSB7XG4gICAgY29uc3Qgc2Nyb2xsVmlldyA9IGFyZ3Mub2JqZWN0IGFzIFNjcm9sbFZpZXc7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcInNjcm9sbFg6IFwiICsgYXJncy5zY3JvbGxYKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcInNjcm9sbFk6IFwiICsgYXJncy5zY3JvbGxZKTtcbn1cblxuZXh0cmFjdFN0YXRpY3MoKSB7XG4gIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgZXh0cmFjdFwiKVxuICB0aGlzLm15U2VydmljZS5nZXRBbGwoKVxuICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgcmVzdWx0XCIsIHJlc3VsdClcbiAgICAgICAgXG4gICAgICAgICAgdGhpcy5vbkdldFN0YXRpY3MocmVzdWx0KTtcbiAgICAgICAgICBcbiAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xufVxucHJpdmF0ZSBvbkdldFN0YXRpY3MocmVzKSB7XG4gIFxuIFxuXG5mb3IgKGxldCBrZXkgaW4gcmVzLnR2X3Jlc3VsdHMpIHtcbiAgXG4gIHRoaXMucmVzdWx0Mi5wdXNoKHt2YWx1ZTogcmVzLnR2X3Jlc3VsdHNba2V5XX0pO1xuICBjb25zb2xlLmxvZyhcInJlc3VsdGluZyBpbiBcIix0aGlzLnJlc3VsdDIpO1xuICBcbn0gXG5cblxudGhpcy5nbG9iYWwucHVzaCh7bmV3OiB0aGlzLnN1bSwgdG90YWw6IHRoaXMuc3VtVG90YWwsbXBvcDp0aGlzLnN1bXBvcCwgYWN0aXZlOiB0aGlzLnN1bWFjdGl2ZSwgcmVjb3ZlcmVkOnRoaXMuc3VtcmVjb3ZlcmVkLCBkZWF0aHM6IHRoaXMuc3VtRGVhdGhzfSk7XG5cblxuXG4gIH1cblxuXG4gXG4gICAgb25NZWRTZWxlY3RlZCgkZXZlbnQ6IEF1dG9Db21wbGV0ZUV2ZW50RGF0YSkge1xuICAgICAgY29uc3QgdG9rZW4gPSA8VG9rZW5Nb2RlbD4kZXZlbnQudG9rZW47XG4gICAgICB0aGlzLm1lZF8xPSB0b2tlbi50ZXh0O1xuXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLm1lZF8xKVxuICB9XG4gIG9uTWVkU2VsZWN0ZWQyKCRldmVudDogQXV0b0NvbXBsZXRlRXZlbnREYXRhKSB7XG4gICAgY29uc3QgdG9rZW4gPSA8VG9rZW5Nb2RlbD4kZXZlbnQudG9rZW47XG4gICAgdGhpcy5tZWRfMj0gdG9rZW4udGV4dDtcbiAgICBcbiAgICBjb25zb2xlLmxvZyh0aGlzLm1lZF8yKVxufVxuXG4gICBcbi8vICAgICBnZXRJbWFnZU5hbWUodmFsdWUpIHtcbi8vICAgICAgIHZhciBsb3dlcj12YWx1ZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xuLy8gICAgICAgY29uc29sZS5sb2cobG93ZXIpO1xuLy8gICAgICAgcmV0dXJuIGB+L2ltYWdlcy8ke2xvd2VyfS5wbmdgO1xuLy8gICB9XG5cbi8vICAgZ2V0SW1hZ2VOYW1lMih2YWx1ZSkge1xuLy8gICAgIHZhciBsb3dlcj12YWx1ZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xuLy8gICAgIGNvbnNvbGUubG9nKGxvd2VyKTtcbi8vICAgICByZXR1cm4gYH4vaW1hZ2VzL2ZsYWdzLyR7bG93ZXJ9LWZsYWctY291bnRyeS1uYXRpb24tdW5pb24tZW1waXJlLnBuZ2A7XG4vLyB9XG4gIFxuXG4gICAgc3VnZ2VzdGlvbihyZXMpIHtcbiAgICAgIHRoaXMuQ291bnRyeSA9IHJlcy5yZXNwb25zZTtcbiAgICAgIHRoaXMuc3VnZ2VzdD0gbmV3IE9ic2VydmFibGVBcnJheTxUb2tlbk1vZGVsPigpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuQ291bnRyeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuc3VnZ2VzdC5wdXNoKG5ldyBUb2tlbk1vZGVsKHRoaXMuQ291bnRyeVtpXSwgdW5kZWZpbmVkKSk7XG4gICAgICB9XG4gICAgXG4gIH1cblxuICAgICBvbkNoYXRCb3RUYXAoKXtcbiAgICAgIHV0aWxpdHlNb2R1bGUub3BlblVybChcImh0dHBzOi8vd2ViY2hhdC5zbmF0Y2hib3QubWUvNTFjNzAwMzVjOTc4MDJjYmMzZDU1YjMxYmY2MTk1YTA0ZTRmNDgwYTY0NGE2YzQ1NWQyODMxOTI5YzBlYzZlZlwiKTtcbiAgICAgXG4gICB9XG4gICBcbiAgICBvbkhvbWVUYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSk7XG4gICAgICAgIGlmKCF0aGlzLmlzSG9tZXBhZ2Upe1xuICAgICAgICAgIHRoaXMuaXNIb21lcGFnZT0hdGhpcy5pc0hvbWVwYWdlO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uSGlzdG9yeVRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9oaXN0b3J5XCJdKTtcbiAgXG4gICAgfVxuXG5cbiAgICBcbiAgICAgXG4gICAgXG5cbiAgIFxuICAgICAgZGlzbWlzc0tleWJvYXJkKCkge1xuICAgICAgICBpZiAoaXNJT1MpIHtcbiAgICAgICAgICBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uLmtleVdpbmRvdy5lbmRFZGl0aW5nKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgICAgICB1dGlscy5hZC5kaXNtaXNzU29mdElucHV0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIFxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=