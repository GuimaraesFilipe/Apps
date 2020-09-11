(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./home/home-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__("@angular/core");
const router_1 = __webpack_require__("nativescript-angular/router");
const home_component_1 = __webpack_require__("./home/home.component.ts");
const auth_guard_service_1 = __webpack_require__("./backend/auth-guard.service.ts");
const routes = [
    { path: "", component: home_component_1.HomeComponent, canActivate: [auth_guard_service_1.AuthGuard] }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.NativeScriptRouterModule.forChild(routes)],
        exports: [router_1.NativeScriptRouterModule]
    })
], HomeRoutingModule);
exports.HomeRoutingModule = HomeRoutingModule;


/***/ }),

/***/ "./home/home.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__("@angular/core");
const common_1 = __webpack_require__("nativescript-angular/common");
const angular_1 = __webpack_require__("nativescript-ui-sidedrawer/angular");
const angular_2 = __webpack_require__("nativescript-ui-listview/angular");
const angular_3 = __webpack_require__("nativescript-ui-calendar/angular");
const angular_4 = __webpack_require__("nativescript-ui-chart/angular");
const angular_5 = __webpack_require__("nativescript-ui-dataform/angular");
const angular_6 = __webpack_require__("nativescript-ui-autocomplete/angular");
const angular_7 = __webpack_require__("nativescript-ui-gauge/angular");
const forms_1 = __webpack_require__("nativescript-angular/forms");
const home_routing_module_1 = __webpack_require__("./home/home-routing.module.ts");
const home_component_1 = __webpack_require__("./home/home.component.ts");
const user_model_1 = __webpack_require__("./shared/user.model.ts");
let HomeModule = class HomeModule {
};
HomeModule = __decorate([
    core_1.NgModule({
        imports: [
            angular_1.NativeScriptUISideDrawerModule,
            angular_2.NativeScriptUIListViewModule,
            angular_3.NativeScriptUICalendarModule,
            angular_4.NativeScriptUIChartModule,
            angular_5.NativeScriptUIDataFormModule,
            angular_6.NativeScriptUIAutoCompleteTextViewModule,
            angular_7.NativeScriptUIGaugeModule,
            common_1.NativeScriptCommonModule,
            home_routing_module_1.HomeRoutingModule,
            forms_1.NativeScriptFormsModule
        ],
        declarations: [
            home_component_1.HomeComponent
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ],
        providers: [
            user_model_1.User,
        ]
    })
], HomeModule);
exports.HomeModule = HomeModule;
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            // Currently the context is needed only for application style modules.
            const moduleContext = {};
            global.hmrRefresh(moduleContext);
        });
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLG9EQUF5QztBQUV6QyxvRUFBdUU7QUFFdkUseUVBQWlEO0FBQ2pELG9GQUF5RDtBQUV6RCxNQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUUsV0FBVyxFQUFFLENBQUMsOEJBQVMsQ0FBQyxFQUFFO0NBQ25FLENBQUM7QUFNRixJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtDQUFJO0FBQXJCLGlCQUFpQjtJQUo3QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7S0FDdEMsQ0FBQztHQUNXLGlCQUFpQixDQUFJO0FBQXJCLDhDQUFpQjs7Ozs7Ozs7Ozs7QUNmOUIsb0RBQTJEO0FBQzNELG9FQUF1RTtBQUN2RSw0RUFBb0Y7QUFDcEYsMEVBQWdGO0FBQ2hGLDBFQUFnRjtBQUNoRix1RUFBMEU7QUFDMUUsMEVBQWdGO0FBQ2hGLDhFQUFnRztBQUNoRyx1RUFBMEU7QUFDMUUsa0VBQXFFO0FBR3JFLG1GQUEwRDtBQUMxRCx5RUFBaUQ7QUFDakQsbUVBQTJDO0FBMkIzQyxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFVO0NBQUk7QUFBZCxVQUFVO0lBeEJ0QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCx3Q0FBOEI7WUFDOUIsc0NBQTRCO1lBQzVCLHNDQUE0QjtZQUM1QixtQ0FBeUI7WUFDekIsc0NBQTRCO1lBQzVCLGtEQUF3QztZQUN4QyxtQ0FBeUI7WUFDekIsaUNBQXdCO1lBQ3hCLHVDQUFpQjtZQUNqQiwrQkFBdUI7U0FDMUI7UUFDRCxZQUFZLEVBQUU7WUFDViw4QkFBYTtTQUNoQjtRQUNELE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtTQUNuQjtRQUNELFNBQVMsRUFBQztZQUNOLGlCQUFJO1NBRVA7S0FDSixDQUFDO0dBQ1csVUFBVSxDQUFJO0FBQWQsZ0NBQVUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tIFwifi9iYWNrZW5kL2F1dGgtZ3VhcmQuc2VydmljZVwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lUm91dGluZ01vZHVsZSB7IH1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jYWxlbmRhci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1hdXRvY29tcGxldGUvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZ2F1Z2UvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuXG5pbXBvcnQgeyBIb21lUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2hvbWUtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJ+L3NoYXJlZC91c2VyLm1vZGVsXCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlBdXRvQ29tcGxldGVUZXh0Vmlld01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBIb21lUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBIb21lQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdLFxuICAgIHByb3ZpZGVyczpbXG4gICAgICAgIFVzZXIsXG4gICAgICAgIFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZU1vZHVsZSB7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0=