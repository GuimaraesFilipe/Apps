(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./home/home-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
const router_1 = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
const home_component_1 = __webpack_require__("./home/home.component.ts");
const routes = [
    { path: "", component: home_component_1.HomeComponent }
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
const core_1 = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
const common_1 = __webpack_require__("../node_modules/@nativescript/angular/common.js");
const angular_1 = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/angular/side-drawer-directives.js");
const angular_2 = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
const angular_3 = __webpack_require__("../node_modules/nativescript-ui-calendar/angular/calendar-directives.js");
const angular_4 = __webpack_require__("../node_modules/nativescript-ui-chart/angular/chart-directives.js");
const angular_5 = __webpack_require__("../node_modules/nativescript-ui-dataform/angular/dataform-directives.js");
const angular_6 = __webpack_require__("../node_modules/nativescript-ui-autocomplete/angular/autocomplete-directives.js");
const angular_7 = __webpack_require__("../node_modules/nativescript-ui-gauge/angular/gauges-directives.js");
const forms_1 = __webpack_require__("../node_modules/@nativescript/angular/forms/index.js");
const home_routing_module_1 = __webpack_require__("./home/home-routing.module.ts");
const home_component_1 = __webpack_require__("./home/home.component.ts");
const history_component_1 = __webpack_require__("./history/history.component.ts");
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
            forms_1.NativeScriptFormsModule,
        ],
        declarations: [
            home_component_1.HomeComponent
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ],
        providers: [
            history_component_1.HistoryComponent
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLGtGQUF5QztBQUV6Qyw4RkFBdUU7QUFFdkUseUVBQWlEO0FBR2pELE1BQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBQztDQUN4QyxDQUFDO0FBTUYsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7Q0FBSTtBQUFyQixpQkFBaUI7SUFKN0IsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO0tBQ3RDLENBQUM7R0FDVyxpQkFBaUIsQ0FBSTtBQUFyQiw4Q0FBaUI7Ozs7Ozs7Ozs7O0FDZjlCLGtGQUEyRDtBQUMzRCx3RkFBdUU7QUFDdkUsc0hBQW9GO0FBQ3BGLGlIQUFnRjtBQUNoRixpSEFBZ0Y7QUFDaEYsMkdBQTBFO0FBQzFFLGlIQUFnRjtBQUNoRix5SEFBZ0c7QUFDaEcsNEdBQTBFO0FBQzFFLDRGQUFxRTtBQUdyRSxtRkFBMEQ7QUFDMUQseUVBQWlEO0FBQ2pELGtGQUErRDtBQTZCL0QsSUFBYSxVQUFVLEdBQXZCLE1BQWEsVUFBVTtDQUFJO0FBQWQsVUFBVTtJQXpCdEIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wsd0NBQThCO1lBQzlCLHNDQUE0QjtZQUM1QixzQ0FBNEI7WUFDNUIsbUNBQXlCO1lBQ3pCLHNDQUE0QjtZQUM1QixrREFBd0M7WUFDeEMsbUNBQXlCO1lBQ3pCLGlDQUF3QjtZQUN4Qix1Q0FBaUI7WUFDakIsK0JBQXVCO1NBRTFCO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsOEJBQWE7U0FDaEI7UUFDRCxPQUFPLEVBQUU7WUFDTCx1QkFBZ0I7U0FDbkI7UUFDRCxTQUFTLEVBQUM7WUFDTixvQ0FBZ0I7U0FFbkI7S0FDSixDQUFDO0dBQ1csVUFBVSxDQUFJO0FBQWQsZ0NBQVUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnR9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZVJvdXRpbmdNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2FsZW5kYXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlBdXRvQ29tcGxldGVUZXh0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktYXV0b2NvbXBsZXRlL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWdhdWdlL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cblxuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ob21lLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhpc3RvcnlDb21wb25lbnQgfSBmcm9tIFwifi9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50XCI7XG5cblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIEhvbWVSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICBcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBIb21lQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdLFxuICAgIHByb3ZpZGVyczpbXG4gICAgICAgIEhpc3RvcnlDb21wb25lbnRcbiAgICAgICAgXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHsgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==