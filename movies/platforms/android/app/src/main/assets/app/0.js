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
const movies_component_1 = __webpack_require__("./Movies/movies.component.ts");
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
            movies_component_1.MoviesComponent,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLGtGQUF5QztBQUV6Qyw4RkFBdUU7QUFFdkUseUVBQWlEO0FBR2pELE1BQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBQztDQUN4QyxDQUFDO0FBTUYsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7Q0FBSTtBQUFyQixpQkFBaUI7SUFKN0IsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO0tBQ3RDLENBQUM7R0FDVyxpQkFBaUIsQ0FBSTtBQUFyQiw4Q0FBaUI7Ozs7Ozs7Ozs7O0FDZjlCLGtGQUEyRDtBQUMzRCx3RkFBdUU7QUFDdkUsc0hBQW9GO0FBQ3BGLGlIQUFnRjtBQUNoRixpSEFBZ0Y7QUFDaEYsMkdBQTBFO0FBQzFFLGlIQUFnRjtBQUNoRix5SEFBZ0c7QUFDaEcsNEdBQTBFO0FBQzFFLDRGQUFxRTtBQUdyRSxtRkFBMEQ7QUFDMUQseUVBQWlEO0FBQ2pELCtFQUE0RDtBQTZCNUQsSUFBYSxVQUFVLEdBQXZCLE1BQWEsVUFBVTtDQUFJO0FBQWQsVUFBVTtJQXpCdEIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wsd0NBQThCO1lBQzlCLHNDQUE0QjtZQUM1QixzQ0FBNEI7WUFDNUIsbUNBQXlCO1lBQ3pCLHNDQUE0QjtZQUM1QixrREFBd0M7WUFDeEMsbUNBQXlCO1lBQ3pCLGlDQUF3QjtZQUN4Qix1Q0FBaUI7WUFDakIsK0JBQXVCO1NBRTFCO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsOEJBQWE7U0FDaEI7UUFDRCxPQUFPLEVBQUU7WUFDTCx1QkFBZ0I7U0FDbkI7UUFDRCxTQUFTLEVBQUM7WUFDTixrQ0FBZTtTQUVsQjtLQUNKLENBQUM7R0FDVyxVQUFVLENBQUk7QUFBZCxnQ0FBVSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcblxuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lUm91dGluZ01vZHVsZSB7IH1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jYWxlbmRhci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1hdXRvY29tcGxldGUvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZ2F1Z2UvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuXG5pbXBvcnQgeyBIb21lUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2hvbWUtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTW92aWVzQ29tcG9uZW50IH0gZnJvbSBcIn4vTW92aWVzL21vdmllcy5jb21wb25lbnRcIjtcblxuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQXV0b0NvbXBsZXRlVGV4dFZpZXdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgSG9tZVJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgIFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEhvbWVDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOltcbiAgICAgICAgTW92aWVzQ29tcG9uZW50LFxuICAgICAgICBcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUgeyB9XG4iXSwic291cmNlUm9vdCI6IiJ9