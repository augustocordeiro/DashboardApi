(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");
/* harmony import */ var _src_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/app.module */ "./src/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_src_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/app-routing.module.ts":
/*!***********************************!*\
  !*** ./src/app-routing.module.ts ***!
  \***********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routes */ "./src/app.routes.ts");
// angular


// app



var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_2__["AppRoutes"], { useHash: true })
            ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_2__["AppRoutes"], { useHash: true })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app.component.ts":
/*!******************************!*\
  !*** ./src/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/dashboard/dashboard.component.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-maestro-app"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-dashboard");
        } }, directives: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"]], encapsulation: 2 });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-maestro-app',
                templateUrl: './app.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _common_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/index */ "./src/common/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app-routing.module.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-charts */ "./node_modules/@progress/kendo-angular-charts/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_ripple__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-ripple */ "./node_modules/@progress/kendo-angular-ripple/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./signin/signin.component */ "./src/signin/signin.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/dashboard/dashboard.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./profile/profile.component */ "./src/profile/profile.component.ts");
/* harmony import */ var _issues_issues_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./issues/issues.component */ "./src/issues/issues.component.ts");
/* harmony import */ var _issues_label_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./issues/label.directive */ "./src/issues/label.directive.ts");
/* harmony import */ var _markdown_markdown_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./markdown/markdown.component */ "./src/markdown/markdown.component.ts");
/* harmony import */ var _charts_active_issues_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./charts/active-issues.component */ "./src/charts/active-issues.component.ts");
/* harmony import */ var _charts_types_distribution_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./charts/types-distribution.component */ "./src/charts/types-distribution.component.ts");
/* harmony import */ var _charts_issue_types_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./charts/issue-types.component */ "./src/charts/issue-types.component.ts");
/* harmony import */ var _charts_statistics_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./charts/statistics.component */ "./src/charts/statistics.component.ts");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/spinner.component */ "./src/shared/spinner.component.ts");
/* harmony import */ var _charts_grafico_percentual_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./charts/grafico-percentual.component */ "./src/charts/grafico-percentual.component.ts");
/* harmony import */ var _charts_grafico_area_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./charts/grafico-area.component */ "./src/charts/grafico-area.component.ts");
/* harmony import */ var _charts_pipe_teste__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./charts/pipe-teste */ "./src/charts/pipe-teste.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../environments/environment */ "./environments/environment.ts");





// vendor dependencies


// app



// Kendo UI







// Components














// environment




_common_index__WEBPACK_IMPORTED_MODULE_7__["Config"].PLATFORM_TARGET = _common_index__WEBPACK_IMPORTED_MODULE_7__["Config"].PLATFORMS.WEB;
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_31__["environment"].production }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_11__["ChartsModule"],
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_10__["GridModule"],
                _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_12__["DialogModule"],
                _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_13__["InputsModule"],
                _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_14__["ButtonsModule"],
                _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_15__["LayoutModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
                    }
                }),
                _progress_kendo_angular_ripple__WEBPACK_IMPORTED_MODULE_16__["RippleModule"],
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_issues_label_directive__WEBPACK_IMPORTED_MODULE_21__["LabelClass"],
        _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _signin_signin_component__WEBPACK_IMPORTED_MODULE_17__["SigninComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"],
        _issues_issues_component__WEBPACK_IMPORTED_MODULE_20__["IssuesComponent"],
        _markdown_markdown_component__WEBPACK_IMPORTED_MODULE_22__["MarkdownComponent"],
        _charts_active_issues_component__WEBPACK_IMPORTED_MODULE_23__["ActiveIssuesComponent"],
        _charts_types_distribution_component__WEBPACK_IMPORTED_MODULE_24__["TypesDistributionComponent"],
        _charts_issue_types_component__WEBPACK_IMPORTED_MODULE_25__["IssueTypesComponent"],
        _charts_statistics_component__WEBPACK_IMPORTED_MODULE_26__["StatisticsComponent"],
        _shared_spinner_component__WEBPACK_IMPORTED_MODULE_27__["LoadingComponent"],
        _charts_grafico_percentual_component__WEBPACK_IMPORTED_MODULE_28__["GraficoPercentualComponent"],
        _charts_grafico_area_component__WEBPACK_IMPORTED_MODULE_29__["GraficoAreaComponent"],
        _charts_pipe_teste__WEBPACK_IMPORTED_MODULE_30__["AmountConverterPipe"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_11__["ChartsModule"],
        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_10__["GridModule"],
        _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_12__["DialogModule"],
        _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_13__["InputsModule"],
        _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_14__["ButtonsModule"],
        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_15__["LayoutModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _progress_kendo_angular_ripple__WEBPACK_IMPORTED_MODULE_16__["RippleModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _issues_label_directive__WEBPACK_IMPORTED_MODULE_21__["LabelClass"],
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _signin_signin_component__WEBPACK_IMPORTED_MODULE_17__["SigninComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"],
                    _issues_issues_component__WEBPACK_IMPORTED_MODULE_20__["IssuesComponent"],
                    _markdown_markdown_component__WEBPACK_IMPORTED_MODULE_22__["MarkdownComponent"],
                    _charts_active_issues_component__WEBPACK_IMPORTED_MODULE_23__["ActiveIssuesComponent"],
                    _charts_types_distribution_component__WEBPACK_IMPORTED_MODULE_24__["TypesDistributionComponent"],
                    _charts_issue_types_component__WEBPACK_IMPORTED_MODULE_25__["IssueTypesComponent"],
                    _charts_statistics_component__WEBPACK_IMPORTED_MODULE_26__["StatisticsComponent"],
                    _shared_spinner_component__WEBPACK_IMPORTED_MODULE_27__["LoadingComponent"],
                    _charts_grafico_percentual_component__WEBPACK_IMPORTED_MODULE_28__["GraficoPercentualComponent"],
                    _charts_grafico_area_component__WEBPACK_IMPORTED_MODULE_29__["GraficoAreaComponent"],
                    _charts_pipe_teste__WEBPACK_IMPORTED_MODULE_30__["AmountConverterPipe"]
                ],
                imports: [
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_31__["environment"].production }),
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_11__["ChartsModule"],
                    _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_10__["GridModule"],
                    _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_12__["DialogModule"],
                    _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_13__["InputsModule"],
                    _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_14__["ButtonsModule"],
                    _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_15__["LayoutModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                            useFactory: (createTranslateLoader),
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
                        }
                    }),
                    _progress_kendo_angular_ripple__WEBPACK_IMPORTED_MODULE_16__["RippleModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app.routes.ts":
/*!***************************!*\
  !*** ./src/app.routes.ts ***!
  \***************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard */ "./src/dashboard/index.ts");
/* harmony import */ var _issues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./issues */ "./src/issues/index.ts");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile */ "./src/profile/index.ts");
/* harmony import */ var _signin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin */ "./src/signin/index.ts");




/**
 * Define app module routes here, e.g., to lazily load a module
 * (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
 */
var AppRoutes = [
    { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
    { path: 'dashboard', component: _dashboard__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"] },
    { path: 'issues', component: _issues__WEBPACK_IMPORTED_MODULE_1__["IssuesComponent"] },
    { path: 'profile', component: _profile__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"] },
    { path: 'signin', component: _signin__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"] }
];


/***/ }),

/***/ "./src/charts/active-issues.component.ts":
/*!***********************************************!*\
  !*** ./src/charts/active-issues.component.ts ***!
  \***********************************************/
/*! exports provided: ActiveIssuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveIssuesComponent", function() { return ActiveIssuesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @progress/kendo-angular-charts */ "./node_modules/@progress/kendo-angular-charts/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




var _c0 = function () { return { style: "smooth" }; };
var _c1 = function () { return { visible: false }; };
var _c2 = function () { return { step: 4, skip: 2, font: "10px sans-serif" }; };
var _c3 = function (a0) { return { margin: a0 }; };
var _c4 = function () { return { color: "#FFF" }; };
var _c5 = function () { return { from: 0, to: 100, color: "#35C473" }; };
var _c6 = function (a0) { return [a0]; };
var _c7 = function () { return { color: "#35C473", opacity: 0.3 }; };
var _c8 = function () { return { color: "#CC3458", opacity: 0.3 }; };
var _c9 = function () { return { top: 8 }; };
var _c10 = function (a1) { return { rotation: "auto", margin: a1 }; };
var _c11 = function () { return { right: 4 }; };
var _c12 = function (a2) { return { step: 2, skip: 2, margin: a2 }; };
var _c13 = function () { return { step: 2, skip: 2, color: "#F0F2F2" }; };
var ActiveIssuesComponent = /** @class */ (function () {
    function ActiveIssuesComponent() {
    }
    Object.defineProperty(ActiveIssuesComponent.prototype, "months", {
        set: function (months) {
            months > 3 ? this.baseUnit = 'months' : this.baseUnit = 'weeks';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActiveIssuesComponent.prototype, "closeRate", {
        set: function (rate) {
            this.bulletData = [{ target: 70, current: Math.round(rate * 100) }];
        },
        enumerable: false,
        configurable: true
    });
    ActiveIssuesComponent.ɵfac = function ActiveIssuesComponent_Factory(t) { return new (t || ActiveIssuesComponent)(); };
    ActiveIssuesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActiveIssuesComponent, selectors: [["app-active-issues"]], inputs: { data: "data", active: "active", issues: "issues", months: "months", closeRate: "closeRate" }, decls: 83, vars: 128, consts: [[1, "k-card"], [1, "k-card-header", "m-0"], [1, "k-card-body"], [1, "row"], [1, "col-sm-12", "col-lg-6", "col-xl", "active-issues"], [1, "comp-label"], [1, "issues-count"], [1, "issues-label"], [2, "height", "80px"], ["format", "{0}%"], ["type", "column", 3, "stack", "gap", "overlay"], ["type", "area", "field", "count", "categoryField", "date", "aggregate", "count", 3, "line", "color", "data"], [3, "baseUnit", "majorTicks", "labels", "majorGridLines", "line"], [3, "visible", "majorGridLines"], [1, "col-12", "col-lg-6", "col-xl", "pb-4", "text-danger", "closed-issues"], ["format", "{0}"], [1, "col-12", "col-lg-6", "col-xl", "pb-4", "text-success", "open-issues"], [1, "col-12", "col-lg-6", "col-xl", "pb-4", "close-rate"], [1, "m-0", "small", "text-uppercase", "text-muted"], [2, "height", "20px", 3, "chartArea"], ["type", "bullet", "currentField", "current", "targetField", "target", "color", "#e91e63", 3, "data", "target"], [3, "plotBands", "visible", "majorGridLines"], [1, "col-12", "all-issues"], [3, "type", "stack", "gap", "overlay"], ["field", "count", "categoryField", "date", "aggregate", "count", 3, "line", "opacity", "border", "color", "data"], [3, "baseUnit", "majorTicks", "line", "majorGridLines", "labels"], [3, "line", "labels", "majorGridLines"]], template: function ActiveIssuesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Active Issues");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Active issues");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "kendo-chart", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "kendo-chart-tooltip", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "kendo-chart-series-defaults", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "kendo-chart-series");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "kendo-chart-series-item", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "kendo-chart-category-axis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "kendo-chart-category-axis-item", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "kendo-chart-value-axis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "kendo-chart-value-axis-item", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Closed issues");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "kendo-chart", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "kendo-chart-tooltip", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "kendo-chart-series-defaults", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "kendo-chart-series");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "kendo-chart-series-item", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "kendo-chart-category-axis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "kendo-chart-category-axis-item", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "kendo-chart-value-axis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "kendo-chart-value-axis-item", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Open issues");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "kendo-chart", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "kendo-chart-tooltip", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "kendo-chart-series-defaults", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "kendo-chart-series");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "kendo-chart-series-item", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "kendo-chart-category-axis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "kendo-chart-category-axis-item", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "kendo-chart-value-axis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "kendo-chart-value-axis-item", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "percent");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Close rate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "percent");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "percent");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "kendo-chart", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "kendo-chart-tooltip", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "kendo-chart-series");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "kendo-chart-series-item", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "kendo-chart-value-axis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "kendo-chart-value-axis-item", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "kendo-chart");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "kendo-chart-tooltip", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "kendo-chart-series-defaults", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "kendo-chart-series");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "kendo-chart-series-item", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "kendo-chart-series-item", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "kendo-chart-category-axis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "kendo-chart-category-axis-item", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "kendo-chart-value-axis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "kendo-chart-value-axis-item", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.issues.open + ctx.issues.closed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stack", true)("gap", 0.5)("overlay", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("line", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](88, _c0))("color", "#888")("data", ctx.active);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("baseUnit", ctx.baseUnit)("majorTicks", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](89, _c1))("labels", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](90, _c2))("majorGridLines", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](91, _c1))("line", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](92, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", false)("majorGridLines", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](93, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.issues.closed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stack", true)("gap", 0.5)("overlay", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("line", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](94, _c0))("color", "#e91e63")("data", ctx.data.closed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("baseUnit", ctx.baseUnit)("majorTicks", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](95, _c1))("labels", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](96, _c2))("majorGridLines", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](97, _c1))("line", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](98, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", false)("majorGridLines", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](99, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.issues.open);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stack", true)("gap", 0.5)("overlay", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("line", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](100, _c0))("color", "#27c46d")("data", ctx.data.open);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("baseUnit", ctx.baseUnit)("majorTicks", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](101, _c1))("labels", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](102, _c2))("majorGridLines", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](103, _c1))("line", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](104, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", false)("majorGridLines", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](105, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](54, 75, ctx.issues.closeRate.average, "2.0-0"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Highest: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](59, 78, ctx.issues.closeRate.highest.close_rate, "2.0-0"), " on ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 81, ctx.issues.closeRate.highest.created_at), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Lowest: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](63, 83, ctx.issues.closeRate.lowest.close_rate, "2.0-0"), " on ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 86, ctx.issues.closeRate.lowest.created_at), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartArea", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](106, _c3, 0 - 20));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.bulletData)("target", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](108, _c4));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("plotBands", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](110, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](109, _c5)))("visible", false)("majorGridLines", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](112, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "area")("stack", true)("gap", 0.06)("overlay", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("line", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](113, _c0))("opacity", 0.3)("border", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](114, _c7))("color", "#35C473")("data", ctx.data.open);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("line", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](115, _c0))("opacity", 0.3)("border", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](116, _c8))("color", "#CC3458")("data", ctx.data.closed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("baseUnit", ctx.baseUnit)("majorTicks", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](117, _c1))("line", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](118, _c1))("majorGridLines", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](119, _c1))("labels", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](121, _c10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](120, _c9)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("line", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](123, _c1))("labels", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](125, _c12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](124, _c11)))("majorGridLines", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](127, _c13));
        } }, directives: [_progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_1__["ChartComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_1__["TooltipComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_1__["SeriesDefaultsComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_1__["SeriesComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_1__["SeriesItemComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_1__["CategoryAxisComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_1__["CategoryAxisItemComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_1__["ValueAxisComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_1__["ValueAxisItemComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], encapsulation: 2 });
    return ActiveIssuesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActiveIssuesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-active-issues',
                template: "\n        <div class=\"k-card\">\n            <h2 class=\"k-card-header m-0\">Active Issues</h2>\n            <div class=\"k-card-body\">\n\n                <div class=\"row\">\n\n                    <div class=\"col-sm-12 col-lg-6 col-xl active-issues\">\n                        <div class=\"comp-label\">\n                            <div class=\"issues-count\">{{ issues.open + issues.closed }}</div>\n                            <div class=\"issues-label\">Active issues</div>\n                        </div>\n                        <kendo-chart style=\"height: 80px;\">\n                        <kendo-chart-tooltip format=\"{0}%\"></kendo-chart-tooltip>\n                            <kendo-chart-series-defaults type=\"column\"\n                            [stack]=\"true\"\n                            [gap]=\"0.5\"\n                            [overlay]=\"false\"></kendo-chart-series-defaults>\n                            <kendo-chart-series>\n                                <kendo-chart-series-item\n                                type=\"area\"\n                                [line]=\"{style:'smooth'}\"\n                                [color]=\"'#888'\"\n                                [data]=\"active\"\n                                field=\"count\"\n                                categoryField=\"date\"\n                                aggregate=\"count\"></kendo-chart-series-item>\n                            </kendo-chart-series>\n                            <kendo-chart-category-axis>\n                                <kendo-chart-category-axis-item\n                                    [baseUnit]=\"baseUnit\"\n                                    [majorTicks]=\"{visible: false}\"\n                                    [labels]=\"{step: 4, skip: 2, font: '10px sans-serif'}\"\n                                    [majorGridLines]=\"{visible: false}\"\n                                    [line]=\"{visible: false}\"\n                                ></kendo-chart-category-axis-item>\n                            </kendo-chart-category-axis>\n                            <kendo-chart-value-axis>\n                                <kendo-chart-value-axis-item [visible]=\"false\" [majorGridLines]=\"{visible: false}\">\n                                </kendo-chart-value-axis-item>\n                            </kendo-chart-value-axis>\n                        </kendo-chart>\n                    </div>\n\n                    <div class=\"col-12 col-lg-6 col-xl pb-4 text-danger closed-issues\">\n                        <span class=\"comp-label\">\n                            <div class=\"issues-count\">{{ issues.closed }}</div>\n                            <div class=\"issues-label\">Closed issues</div>\n                        </span>\n                        <kendo-chart style=\"height: 80px;\">\n                        <kendo-chart-tooltip format=\"{0}\"></kendo-chart-tooltip>\n                            <kendo-chart-series-defaults type=\"column\" [stack]=\"true\" [gap]=\"0.5\" [overlay]=\"false\">\n                            </kendo-chart-series-defaults>\n                            <kendo-chart-series>\n                                <kendo-chart-series-item\n                                type=\"area\"\n                                [line]=\"{style:'smooth'}\"\n                                [color]=\"'#e91e63'\"\n                                [data]=\"data.closed\"\n                                field=\"count\"\n                                categoryField=\"date\"\n                                aggregate=\"count\">\n                                </kendo-chart-series-item>\n                            </kendo-chart-series>\n                            <kendo-chart-category-axis>\n                                <kendo-chart-category-axis-item\n                                    [baseUnit]=\"baseUnit\"\n                                    [majorTicks]=\"{visible: false}\"\n                                    [labels]=\"{step: 4, skip: 2, font: '10px sans-serif'}\"\n                                    [majorGridLines]=\"{visible: false}\"\n                                    [line]=\"{visible: false}\"\n                                ></kendo-chart-category-axis-item>\n                            </kendo-chart-category-axis>\n                            <kendo-chart-value-axis>\n                                <kendo-chart-value-axis-item [visible]=\"false\" [majorGridLines]=\"{visible: false}\">\n                                </kendo-chart-value-axis-item>\n                            </kendo-chart-value-axis>\n                        </kendo-chart>\n                    </div>\n\n                    <div class=\"col-12 col-lg-6 col-xl pb-4 text-success open-issues\">\n                        <span class=\"comp-label\">\n                            <div class=\"issues-count\">{{ issues.open }}</div>\n                            <div class=\"issues-label\">Open issues</div>\n                        </span>\n                        <kendo-chart style=\"height: 80px;\">\n                        <kendo-chart-tooltip format=\"{0}\"></kendo-chart-tooltip>\n                            <kendo-chart-series-defaults type=\"column\" [stack]=\"true\" [gap]=\"0.5\" [overlay]=\"false\">\n                            </kendo-chart-series-defaults>\n                            <kendo-chart-series>\n                                <kendo-chart-series-item\n                                type=\"area\"\n                                [line]=\"{style:'smooth'}\"\n                                [color]=\"'#27c46d'\"\n                                [data]=\"data.open\"\n                                field=\"count\"\n                                categoryField=\"date\"\n                                aggregate=\"count\">\n                                </kendo-chart-series-item>\n                            </kendo-chart-series>\n                            <kendo-chart-category-axis>\n                                <kendo-chart-category-axis-item\n                                    [baseUnit]=\"baseUnit\"\n                                    [majorTicks]=\"{visible: false}\"\n                                    [labels]=\"{step: 4, skip: 2, font: '10px sans-serif'}\"\n                                    [majorGridLines]=\"{visible: false}\"\n                                    [line]=\"{visible: false}\"\n                                ></kendo-chart-category-axis-item>\n                            </kendo-chart-category-axis>\n                            <kendo-chart-value-axis>\n                                <kendo-chart-value-axis-item [visible]=\"false\" [majorGridLines]=\"{visible: false}\">\n                                </kendo-chart-value-axis-item>\n                            </kendo-chart-value-axis>\n                        </kendo-chart>\n                    </div>\n\n                    <div class=\"col-12 col-lg-6 col-xl pb-4 close-rate\">\n                        <span class=\"comp-label\">\n                            <div class=\"issues-count\">{{ issues.closeRate.average | percent:'2.0-0' }}</div>\n                            <div class=\"issues-label\">Close rate</div>\n                        </span>\n                        <p class=\"m-0 small text-uppercase text-muted\">\n                            Highest:\n                            {{issues.closeRate.highest.close_rate | percent: '2.0-0' }}\n                            on {{issues.closeRate.highest.created_at | date}}\n                        </p>\n                        <p class=\"m-0 small text-uppercase text-muted\">\n                            Lowest:\n                            {{issues.closeRate.lowest.close_rate | percent: '2.0-0' }}\n                            on {{issues.closeRate.lowest.created_at | date}}\n                        </p>\n                        <kendo-chart style=\"height: 20px;\" [chartArea]=\"{margin: -20}\">\n                        <kendo-chart-tooltip format=\"{0}\"></kendo-chart-tooltip>\n                            <kendo-chart-series>\n                                <kendo-chart-series-item type=\"bullet\"\n                                    [data]=\"bulletData\"\n                                    [target]=\"{color: '#FFF'}\"\n                                    currentField=\"current\"\n                                    targetField=\"target\"\n                                    color=\"#e91e63\"\n                                ></kendo-chart-series-item>\n                                </kendo-chart-series>\n\n                                <kendo-chart-value-axis>\n                                <kendo-chart-value-axis-item\n                                    [plotBands]=\"[{from:0, to:100, color: '#35C473'}]\"\n                                    [visible]=\"false\"\n                                    [majorGridLines]=\"{visible: false}\">\n                                </kendo-chart-value-axis-item>\n                            </kendo-chart-value-axis>\n                        </kendo-chart>\n                    </div>\n\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-12 all-issues\">\n                        <kendo-chart>\n                            <kendo-chart-tooltip format=\"{0}\"></kendo-chart-tooltip>\n                            <kendo-chart-series-defaults [type]=\"'area'\" [stack]=\"true\" [gap]=\"0.06\" [overlay]=\"false\">\n                            </kendo-chart-series-defaults>\n                            <kendo-chart-series>\n                                <kendo-chart-series-item\n                                [line]=\"{style:'smooth'}\"\n                                    [opacity]=\"0.3\"\n                                    [border]=\"{color: '#35C473', opacity: 0.3}\"\n                                    [color]=\"'#35C473'\"\n                                    [data]=\"data.open\" field=\"count\" categoryField=\"date\" aggregate=\"count\"></kendo-chart-series-item>\n                                <kendo-chart-series-item\n                                    [line]=\"{style:'smooth'}\"\n                                    [opacity]=\"0.3\"\n                                    [border]=\"{color: '#CC3458', opacity: 0.3}\"\n                                    [color]=\"'#CC3458'\" [data]=\"data.closed\"\n                                    field=\"count\" categoryField=\"date\"\n                                    aggregate=\"count\"></kendo-chart-series-item>\n                            </kendo-chart-series>\n                            <kendo-chart-category-axis>\n                                <kendo-chart-category-axis-item\n                                    [baseUnit]=\"baseUnit\"\n                                    [majorTicks]=\"{visible: false}\"\n                                    [line]=\"{visible: false}\"\n                                    [majorGridLines]=\"{visible: false}\"\n                                    [labels]=\"{rotation: 'auto', margin: { top: 8 }}\"\n                                ></kendo-chart-category-axis-item>\n                            </kendo-chart-category-axis>\n                            <kendo-chart-value-axis>\n                                <kendo-chart-value-axis-item\n                                    [line]=\"{visible: false}\"\n                                    [labels]=\"{step: 2, skip: 2, margin: { right: 4 }}\"\n                                    [majorGridLines]=\"{step: 2, skip: 2, color: '#F0F2F2'}\">\n                                </kendo-chart-value-axis-item>\n                            </kendo-chart-value-axis>\n                        </kendo-chart>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    "
            }]
    }], null, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], issues: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], months: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeRate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/charts/grafico-area.component.ts":
/*!**********************************************!*\
  !*** ./src/charts/grafico-area.component.ts ***!
  \**********************************************/
/*! exports provided: GraficoAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraficoAreaComponent", function() { return GraficoAreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @progress/kendo-angular-charts */ "./node_modules/@progress/kendo-angular-charts/__ivy_ngcc__/dist/fesm2015/index.js");






function GraficoAreaComponent_kendo_chart_series_item_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "number");
} if (rf & 2) {
    var dataItem_r3 = ctx.dataItem;
    var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r1.nome, " | ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 2, dataItem_r3.valor, "", "es"), " ");
} }
function GraficoAreaComponent_kendo_chart_series_item_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-chart-series-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "kendo-chart-series-item-tooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GraficoAreaComponent_kendo_chart_series_item_6_ng_template_2_Template, 2, 6, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stack", true)("data", item_r1.dados)("name", item_r1.nome);
} }
var _c0 = function (a0) { return { text: a0 }; };
var GraficoAreaComponent = /** @class */ (function () {
    function GraficoAreaComponent() {
    }
    GraficoAreaComponent.prototype.ngOnInit = function () {
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_2___default.a);
    };
    GraficoAreaComponent.ɵfac = function GraficoAreaComponent_Factory(t) { return new (t || GraficoAreaComponent)(); };
    GraficoAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GraficoAreaComponent, selectors: [["app-grafico-area"]], inputs: { titulo: "titulo", categorias: "categorias", descricaoEixoX: "descricaoEixoX", serie: "serie" }, decls: 7, vars: 8, consts: [[3, "title"], ["format", "N0"], [3, "categories", "title"], ["field", "valor", "categoryField", "categoria", "type", "area", 3, "stack", "data", "name", 4, "ngFor", "ngForOf"], ["field", "valor", "categoryField", "categoria", "type", "area", 3, "stack", "data", "name"]], template: function GraficoAreaComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-chart", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "kendo-chart-axis-defaults");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "kendo-chart-axis-defaults-labels", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "kendo-chart-category-axis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "kendo-chart-category-axis-item", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "kendo-chart-series");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GraficoAreaComponent_kendo_chart_series_item_6_Template, 3, 3, "kendo-chart-series-item", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.titulo));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx.categorias)("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.descricaoEixoX));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.serie);
        } }, directives: [_progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_3__["AxisDefaultsComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_3__["AxisDefaultsLabelsComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxisComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxisItemComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_3__["SeriesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_3__["SeriesItemComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_3__["SeriesTooltipComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]], encapsulation: 2 });
    return GraficoAreaComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraficoAreaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grafico-area',
                template: "\n    <kendo-chart [title]=\"{text: titulo}\">\n    <kendo-chart-axis-defaults>\n        <kendo-chart-axis-defaults-labels format=\"N0\"></kendo-chart-axis-defaults-labels>\n    </kendo-chart-axis-defaults>\n    <kendo-chart-category-axis>\n        <kendo-chart-category-axis-item\n            [categories]=\"categorias\"\n            [title]=\"{ text: descricaoEixoX }\"></kendo-chart-category-axis-item>\n    </kendo-chart-category-axis>\n    <kendo-chart-series>\n        <kendo-chart-series-item\n            *ngFor=\"let item of serie\"\n            [stack]=\"true\"\n            [data]=\"item.dados\"\n            [name]=\"item.nome\"\n            field=\"valor\"\n            categoryField=\"categoria\"\n            type=\"area\">\n            <kendo-chart-series-item-tooltip>\n                <ng-template let-dataItem=\"dataItem\">\n                    {{item.nome}}\n                    |\n                    {{dataItem.valor | number:'':'es'}}\n                </ng-template>\n            </kendo-chart-series-item-tooltip>\n        </kendo-chart-series-item>\n    </kendo-chart-series>\n</kendo-chart>"
            }]
    }], null, { titulo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], categorias: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], descricaoEixoX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], serie: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/charts/grafico-percentual.component.ts":
/*!****************************************************!*\
  !*** ./src/charts/grafico-percentual.component.ts ***!
  \****************************************************/
/*! exports provided: GraficoPercentualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraficoPercentualComponent", function() { return GraficoPercentualComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @progress/kendo-angular-charts */ "./node_modules/@progress/kendo-angular-charts/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function GraficoPercentualComponent_kendo_chart_series_item_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "percent");
} if (rf & 2) {
    var dataItem_r3 = ctx.dataItem;
    var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r1.nome, " | ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, dataItem_r3.valor), " ");
} }
function GraficoPercentualComponent_kendo_chart_series_item_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-chart-series-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "kendo-chart-series-item-tooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GraficoPercentualComponent_kendo_chart_series_item_8_ng_template_2_Template, 2, 4, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r1.dados)("name", item_r1.nome)("color", item_r1.cor)("type", ctx_r0.tipo);
} }
var _c0 = function (a0) { return { text: a0 }; };
var GraficoPercentualComponent = /** @class */ (function () {
    function GraficoPercentualComponent() {
    }
    GraficoPercentualComponent.ɵfac = function GraficoPercentualComponent_Factory(t) { return new (t || GraficoPercentualComponent)(); };
    GraficoPercentualComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GraficoPercentualComponent, selectors: [["app-grafico-percentual"]], inputs: { titulo: "titulo", categorias: "categorias", descricaoEixoX: "descricaoEixoX", serie: "serie", tipo: "tipo" }, decls: 9, vars: 8, consts: [[3, "title"], ["format", "P0"], ["max", "1"], [3, "categories", "title"], ["field", "valor", "categoryField", "categoria", 3, "data", "name", "color", "type", 4, "ngFor", "ngForOf"], ["field", "valor", "categoryField", "categoria", 3, "data", "name", "color", "type"]], template: function GraficoPercentualComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-chart", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "kendo-chart-axis-defaults");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "kendo-chart-axis-defaults-labels", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "kendo-chart-value-axis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "kendo-chart-value-axis-item", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "kendo-chart-category-axis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "kendo-chart-category-axis-item", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "kendo-chart-series");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GraficoPercentualComponent_kendo_chart_series_item_8_Template, 3, 4, "kendo-chart-series-item", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.titulo));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx.categorias)("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.descricaoEixoX));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.serie);
        } }, directives: [_progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_1__["ChartComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_1__["AxisDefaultsComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_1__["AxisDefaultsLabelsComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_1__["ValueAxisComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_1__["ValueAxisItemComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_1__["CategoryAxisComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_1__["CategoryAxisItemComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_1__["SeriesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_1__["SeriesItemComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_1__["SeriesTooltipComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["PercentPipe"]], encapsulation: 2 });
    return GraficoPercentualComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraficoPercentualComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grafico-percentual',
                template: "\n\n    <kendo-chart [title]=\"{text: titulo}\">\n    <kendo-chart-axis-defaults>\n        <kendo-chart-axis-defaults-labels format=\"P0\"></kendo-chart-axis-defaults-labels>\n    </kendo-chart-axis-defaults>\n    <kendo-chart-value-axis>\n        <kendo-chart-value-axis-item max=\"1\"></kendo-chart-value-axis-item>\n    </kendo-chart-value-axis>\n    <kendo-chart-category-axis>\n        <kendo-chart-category-axis-item\n            [categories]=\"categorias\"\n            [title]=\"{ text: descricaoEixoX }\"></kendo-chart-category-axis-item>\n    </kendo-chart-category-axis>\n    <kendo-chart-series>\n        <kendo-chart-series-item\n            *ngFor=\"let item of serie\"\n            [data]=\"item.dados\"\n            [name]=\"item.nome\"\n            field=\"valor\"\n            categoryField=\"categoria\"\n            [color]=\"item.cor\"\n            [type]=\"tipo\">\n            <kendo-chart-series-item-tooltip>\n                <ng-template let-dataItem=\"dataItem\">\n                    {{item.nome}}\n                    |\n                    {{dataItem.valor | percent}}\n                </ng-template>\n            </kendo-chart-series-item-tooltip>\n        </kendo-chart-series-item>\n    </kendo-chart-series>\n</kendo-chart>"
            }]
    }], null, { titulo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], categorias: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], descricaoEixoX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], serie: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tipo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/charts/issue-types.component.ts":
/*!*********************************************!*\
  !*** ./src/charts/issue-types.component.ts ***!
  \*********************************************/
/*! exports provided: IssueTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueTypesComponent", function() { return IssueTypesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @progress/kendo-angular-charts */ "./node_modules/@progress/kendo-angular-charts/__ivy_ngcc__/dist/fesm2015/index.js");



var IssueTypesComponent = /** @class */ (function () {
    function IssueTypesComponent() {
        this.hoverColor = 'rgb(255, 99, 88)';
    }
    Object.defineProperty(IssueTypesComponent.prototype, "data", {
        set: function (data) {
            var _this = this;
            this.issues = data;
            data.forEach(function (series) {
                if (series.type === 'SEV: LOW') {
                    _this.setDonutLegend({
                        value: series.value,
                        category: series.type,
                        point: {
                            options: {
                                color: _this.hoverColor
                            }
                        }
                    });
                }
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IssueTypesComponent.prototype, "className", {
        get: function () {
            return 'k-card issue-types';
        },
        enumerable: false,
        configurable: true
    });
    IssueTypesComponent.prototype.onHover = function (event) {
        this.setDonutLegend(event);
    };
    IssueTypesComponent.prototype.setDonutLegend = function (series) {
        this.hoverColor = series.point.options.color;
        this.donutPercent = Math.round(series.value * 100 || 0) + '';
        this.donutLabel = series.category;
    };
    IssueTypesComponent.ɵfac = function IssueTypesComponent_Factory(t) { return new (t || IssueTypesComponent)(); };
    IssueTypesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IssueTypesComponent, selectors: [["app-issue-types"]], hostVars: 2, hostBindings: function IssueTypesComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.className);
        } }, inputs: { data: "data" }, decls: 14, vars: 7, consts: [[1, "k-card-header"], [1, "k-card-body", "height-1"], [3, "seriesHover"], ["type", "donut", "field", "value", "categoryField", "type", 3, "holeSize", "data", "overlay"], ["position", "bottom"], [1, "comp-label", "chart-label"], [1, "issues-count"], [1, "percentage"], [1, "issues-label"]], template: function IssueTypesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Issue Types");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "kendo-chart", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("seriesHover", function IssueTypesComponent_Template_kendo_chart_seriesHover_3_listener($event) { return ctx.onHover($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "kendo-chart-series");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "kendo-chart-series-item", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "kendo-chart-legend", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "%");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("holeSize", 100)("data", ctx.issues)("overlay", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.hoverColor);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.donutPercent, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.donutLabel);
        } }, directives: [_progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_1__["ChartComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_1__["SeriesComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_1__["SeriesItemComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_1__["LegendComponent"]], encapsulation: 2 });
    return IssueTypesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IssueTypesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-issue-types',
                template: "\n        <h2 class=\"k-card-header\">Issue Types</h2>\n        <div class=\"k-card-body height-1\">\n            <kendo-chart (seriesHover)=\"onHover($event)\">\n                <kendo-chart-series>\n                    <kendo-chart-series-item\n                        [holeSize]=\"100\"\n                        [data]=\"issues\"\n                        type=\"donut\"\n                        field=\"value\"\n                        categoryField=\"type\"\n                        [overlay]=\"false\"\n                    ></kendo-chart-series-item>\n                </kendo-chart-series>\n                <kendo-chart-legend position=\"bottom\">\n                </kendo-chart-legend>\n            </kendo-chart>\n            <div class=\"comp-label chart-label\" [style.color]=\"hoverColor\">\n                <div class=\"issues-count\">\n                  {{donutPercent}}\n                  <span class=\"percentage\">%</span>\n                </div>\n                <div class=\"issues-label\">{{donutLabel}}</div>\n            </div>\n        </div>\n    "
            }]
    }], null, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], className: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "./src/charts/pipe-teste.ts":
/*!**********************************!*\
  !*** ./src/charts/pipe-teste.ts ***!
  \**********************************/
/*! exports provided: AmountConverterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmountConverterPipe", function() { return AmountConverterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var AmountConverterPipe = /** @class */ (function () {
    function AmountConverterPipe() {
    }
    AmountConverterPipe.prototype.transform = function (value, locale) {
        return new Intl.NumberFormat(locale, {
            minimumFractionDigits: 2
        }).format(Number(value));
    };
    AmountConverterPipe.ɵfac = function AmountConverterPipe_Factory(t) { return new (t || AmountConverterPipe)(); };
    AmountConverterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "amountConverter", type: AmountConverterPipe, pure: true });
    return AmountConverterPipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AmountConverterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'amountConverter'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/charts/statistics.component.ts":
/*!********************************************!*\
  !*** ./src/charts/statistics.component.ts ***!
  \********************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/spinner.component */ "./src/shared/spinner.component.ts");
/* harmony import */ var _active_issues_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./active-issues.component */ "./src/charts/active-issues.component.ts");
/* harmony import */ var _issue_types_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./issue-types.component */ "./src/charts/issue-types.component.ts");
/* harmony import */ var _types_distribution_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types-distribution.component */ "./src/charts/types-distribution.component.ts");







function StatisticsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StatisticsComponent_app_active_issues_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-active-issues", 7);
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r1.issues.groupedIssues)("months", ctx_r1.months)("issues", ctx_r1.issues)("closeRate", ctx_r1.issues.closeRate.average)("active", ctx_r1.issues.active);
} }
function StatisticsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-issue-types", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r2.issues.issueTypes);
} }
function StatisticsComponent_div_5_app_types_distribution_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-types-distribution", 12);
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r4.issues.typesDistribution)("months", ctx_r4.months);
} }
function StatisticsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StatisticsComponent_div_5_app_types_distribution_1_Template, 1, 2, "app-types-distribution", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.issues.active.length);
} }
var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent() {
    }
    StatisticsComponent.ɵfac = function StatisticsComponent_Factory(t) { return new (t || StatisticsComponent)(); };
    StatisticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatisticsComponent, selectors: [["app-statistics"]], inputs: { issues: "issues", months: "months", loading: "loading" }, decls: 6, vars: 4, consts: [[1, "row"], [1, "col-12"], ["class", "k-card", "style", "height: 400px", 4, "ngIf"], [3, "data", "months", "issues", "closeRate", "active", 4, "ngIf"], ["class", "col-xl-4", 4, "ngIf"], ["class", "col-xl-8", 4, "ngIf"], [1, "k-card", 2, "height", "400px"], [3, "data", "months", "issues", "closeRate", "active"], [1, "col-xl-4"], [3, "data"], [1, "col-xl-8"], [3, "data", "months", 4, "ngIf"], [3, "data", "months"]], template: function StatisticsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StatisticsComponent_div_2_Template, 2, 0, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StatisticsComponent_app_active_issues_3_Template, 1, 5, "app-active-issues", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StatisticsComponent_div_4_Template, 2, 1, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StatisticsComponent_div_5_Template, 2, 1, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.issues.active.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.issues.active.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.issues.active.length);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"], _active_issues_component__WEBPACK_IMPORTED_MODULE_3__["ActiveIssuesComponent"], _issue_types_component__WEBPACK_IMPORTED_MODULE_4__["IssueTypesComponent"], _types_distribution_component__WEBPACK_IMPORTED_MODULE_5__["TypesDistributionComponent"]], encapsulation: 2 });
    return StatisticsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatisticsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-statistics',
                template: "\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div *ngIf=\"loading\" class=\"k-card\" style=\"height: 400px\">\n                    <app-loading-spinner>\n                    </app-loading-spinner>\n                </div>\n                <app-active-issues\n                    *ngIf=\"!loading && issues.active.length\"\n                    [data]=\"issues.groupedIssues\"\n                    [months]=\"months\"\n                    [issues]=\"issues\"\n                    [closeRate]=\"issues.closeRate.average\"\n                    [active]=\"issues.active\"></app-active-issues>\n            </div>\n            <div *ngIf=\"!loading && issues.active.length\" class=\"col-xl-4\">\n                <app-issue-types [data]=\"issues.issueTypes\"></app-issue-types>\n            </div>\n            <div *ngIf=\"!loading && issues.active.length\" class=\"col-xl-8\">\n                <app-types-distribution [data]=\"issues.typesDistribution\" [months]=\"months\" *ngIf=\"issues.active.length\">\n                </app-types-distribution>\n            </div>\n        </div>\n\n    "
            }]
    }], null, { issues: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], months: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/charts/types-distribution.component.ts":
/*!****************************************************!*\
  !*** ./src/charts/types-distribution.component.ts ***!
  \****************************************************/
/*! exports provided: TypesDistributionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypesDistributionComponent", function() { return TypesDistributionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/kendo-angular-charts */ "./node_modules/@progress/kendo-angular-charts/__ivy_ngcc__/dist/fesm2015/index.js");




function TypesDistributionComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypesDistributionComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var button_r2 = ctx.$implicit; var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.addSeries(button_r2, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var button_r2 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", button_r2.active ? button_r2.value : ctx_r0.initialGrey);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data[button_r2.label].length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](button_r2.label);
} }
function TypesDistributionComponent_kendo_chart_series_item_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "kendo-chart-series-item", 15);
} if (rf & 2) {
    var series_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", series_r5.data)("markers", series_r5.markers)("color", series_r5.color);
} }
var _c0 = function () { return { visible: false }; };
var _c1 = function () { return { step: 4, skip: 2 }; };
var _c2 = function () { return { step: 2, skip: 2 }; };
var _c3 = function () { return { step: 2, skip: 2, color: "#F0F2F2" }; };
var TypesDistributionComponent = /** @class */ (function () {
    function TypesDistributionComponent() {
        this.initialGrey = '#A2ACAC';
        this.series = [];
        this.visibleSeries = [];
        this.seriesColors = [
            { label: 'SEV: Low', value: '#FF9966', active: false },
            { label: 'SEV: Medium', value: '#BB6ACB', active: false },
            { label: 'SEV: High', value: '#52C3D3', active: false },
            { label: 'Enhancement', value: '#22C85D', active: false },
            { label: 'Feature', value: '#FF6358', active: false },
            { label: 'Others', value: '#2BA7DA', active: false }
        ];
    }
    Object.defineProperty(TypesDistributionComponent.prototype, "months", {
        set: function (months) {
            months > 3 ? this.baseUnit = 'months' : this.baseUnit = 'weeks';
        },
        enumerable: false,
        configurable: true
    });
    TypesDistributionComponent.prototype.addSeries = function (button, toggleLabels) {
        if (toggleLabels) {
            this.seriesColors.forEach(function (s) {
                if (s.value === button.value) {
                    s.active = !s.active;
                }
            });
        }
        var newSeries = {
            color: this.seriesColors.filter(function (color) { return color.label === button.label; })[0].value,
            markers: { visible: false },
            data: this.data[button.label]
        };
        var present = this.visibleSeries.some(function (series) { return series.color === newSeries.color; });
        if (present) {
            var removeIndex = this.visibleSeries.map(function (item) { return item.color; }).indexOf(newSeries.color);
            // tslint:disable: no-unused-expression
            // tslint:disable: no-bitwise
            ~removeIndex && this.visibleSeries.splice(removeIndex, 1);
        }
        else {
            this.visibleSeries.push(newSeries);
        }
        this.series = this.visibleSeries;
    };
    TypesDistributionComponent.prototype.ngOnInit = function () {
        this.addSeries({ label: 'SEV: Low', value: '#FF9966', active: false }, true);
        this.addSeries({ label: 'Enhancement', value: '#22C85D', active: false }, true);
        this.addSeries({ label: 'Others', value: '#2BA7DA', active: false }, true);
    };
    TypesDistributionComponent.prototype.ngOnChanges = function (changes) {
        if (changes.data.previousValue && changes.data.previousValue.hasOwnProperty('Others')) {
            this.visibleSeries = [];
            this.addSeries({ label: 'SEV: Low', value: '#FF9966', active: false }, false);
            this.addSeries({ label: 'Enhancement', value: '#22C85D', active: false }, false);
            this.addSeries({ label: 'Others', value: '#2BA7DA', active: false }, false);
        }
    };
    TypesDistributionComponent.ɵfac = function TypesDistributionComponent_Factory(t) { return new (t || TypesDistributionComponent)(); };
    TypesDistributionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TypesDistributionComponent, selectors: [["app-types-distribution"]], inputs: { data: "data", months: "months" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 17, vars: 20, consts: [[1, "k-card"], [1, "k-card-header"], [1, "k-card-body"], [1, "row"], ["class", "col-6 col-sm-4 col-xl-2 comp-label label-clickable", 3, "color", "click", 4, "ngFor", "ngForOf"], [1, "col-12", "types-distribution"], [2, "height", "300px", 3, "pannable", "zoomable", "transitions"], ["format", "{0}"], ["type", "line", 3, "overlay"], ["baseUnit", "months", 3, "majorTicks", "labels", "majorGridLines", "line"], ["style", "smooth", "aggregate", "count", "categoryField", "date", 3, "data", "markers", "color", 4, "ngFor", "ngForOf"], [3, "line", "labels", "majorGridLines"], [1, "col-6", "col-sm-4", "col-xl-2", "comp-label", "label-clickable", 3, "click"], [1, "issues-count"], [1, "issues-label"], ["aggregate", "count", "categoryField", "date", 3, "data", "markers", "color"]], template: function TypesDistributionComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Types Distribution");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TypesDistributionComponent_div_5_Template, 5, 4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "kendo-chart", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "kendo-chart-tooltip", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "kendo-chart-series-defaults", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "kendo-chart-category-axis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "kendo-chart-category-axis-item", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "kendo-chart-series");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TypesDistributionComponent_kendo_chart_series_item_14_Template, 1, 3, "kendo-chart-series-item", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "kendo-chart-value-axis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "kendo-chart-value-axis-item", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.seriesColors);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pannable", true)("zoomable", true)("transitions", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("overlay", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("majorTicks", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0))("labels", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c1))("majorGridLines", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0))("line", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.visibleSeries);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("line", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0))("labels", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c2))("majorGridLines", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c3));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_2__["TooltipComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_2__["SeriesDefaultsComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_2__["CategoryAxisComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_2__["CategoryAxisItemComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_2__["SeriesComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxisComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxisItemComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_2__["SeriesItemComponent"]], encapsulation: 2 });
    return TypesDistributionComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypesDistributionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-types-distribution',
                template: "\n        <div class=\"k-card\">\n            <h2 class=\"k-card-header\">Types Distribution</h2>\n            <div class=\"k-card-body\">\n                <div class=\"row\">\n                  <div *ngFor=\"let button of seriesColors\" (click)=\"addSeries(button, true)\"\n                      [style.color]=\"button.active ? button.value : initialGrey\"\n                      class=\"col-6 col-sm-4 col-xl-2 comp-label label-clickable\">\n                      <div class=\"issues-count\">{{data[button.label].length}}</div>\n                      <div class=\"issues-label\">{{button.label}}</div>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col-12 types-distribution\">\n                      <kendo-chart [pannable]=\"true\" [zoomable]=\"true\" style=\"height: 300px;\" [transitions]=\"false\">\n                      <kendo-chart-tooltip format=\"{0}\"></kendo-chart-tooltip>\n                          <kendo-chart-series-defaults type=\"line\" [overlay]=\"false\"></kendo-chart-series-defaults>\n                          <kendo-chart-category-axis>\n                              <kendo-chart-category-axis-item\n                                  baseUnit=\"months\"\n                                  [majorTicks]=\"{visible: false}\"\n                                  [labels]=\"{step: 4, skip: 2}\"\n                                  [majorGridLines]=\"{visible: false}\"\n                                  [line]=\"{visible: false}\"\n                              ></kendo-chart-category-axis-item>\n                          </kendo-chart-category-axis>\n                          <kendo-chart-series>\n                              <kendo-chart-series-item *ngFor=\"let series of visibleSeries\"\n                                  [data]=\"series.data\"\n                                  [markers]=\"series.markers\"\n                                  [color]=\"series.color\"\n                                  style=\"smooth\"\n                                  aggregate=\"count\"\n                                  categoryField=\"date\"\n                              ></kendo-chart-series-item>\n                          </kendo-chart-series>\n                          <kendo-chart-value-axis>\n                              <kendo-chart-value-axis-item\n                                  [line]=\"{visible: false}\" [labels]=\"{step: 2, skip: 2}\"\n                                  [majorGridLines]=\"{step: 2, skip: 2, color: '#F0F2F2'}\">\n                              </kendo-chart-value-axis-item>\n                          </kendo-chart-value-axis>\n                      </kendo-chart>\n                  </div>\n                </div>\n            </div>\n        </div>\n    "
            }]
    }], null, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], months: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/common/index.ts":
/*!*****************************!*\
  !*** ./src/common/index.ts ***!
  \*****************************/
/*! exports provided: Config, RouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/index */ "./src/common/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return _utils_index__WEBPACK_IMPORTED_MODULE_0__["Config"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterModule", function() { return _utils_index__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]; });




/***/ }),

/***/ "./src/common/utils/Config.ts":
/*!************************************!*\
  !*** ./src/common/utils/Config.ts ***!
  \************************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
var Config = /** @class */ (function () {
    function Config() {
    }
    Object.defineProperty(Config, "IS_WEB", {
        get: function () {
            return Config.PLATFORM_TARGET === Config.PLATFORMS.WEB;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Config, "IS_MOBILE_NATIVE", {
        get: function () {
            return Config.PLATFORM_TARGET === Config.PLATFORMS.MOBILE_NATIVE;
        },
        enumerable: false,
        configurable: true
    });
    // supported platforms
    Config.PLATFORMS = {
        WEB: 'web',
        MOBILE_NATIVE: 'mobile_native'
    };
    // current target (defaults to web)
    Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;
    return Config;
}());



/***/ }),

/***/ "./src/common/utils/index.ts":
/*!***********************************!*\
  !*** ./src/common/utils/index.ts ***!
  \***********************************/
/*! exports provided: Config, RouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ "./src/common/utils/Config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return _Config__WEBPACK_IMPORTED_MODULE_0__["Config"]; });

/* harmony import */ var _router_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router-module */ "./src/common/utils/router-module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterModule", function() { return _router_module__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]; });





/***/ }),

/***/ "./src/common/utils/router-module.ts":
/*!*******************************************!*\
  !*** ./src/common/utils/router-module.ts ***!
  \*******************************************/
/*! exports provided: RouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterModule", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]; });




/***/ }),

/***/ "./src/dashboard/dashboard.component.ts":
/*!**********************************************!*\
  !*** ./src/dashboard/dashboard.component.ts ***!
  \**********************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_github_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/github.service */ "./src/shared/github.service.ts");
/* harmony import */ var _shared_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/dashboard.service */ "./src/shared/dashboard.service.ts");
/* harmony import */ var _shared_issues_processor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/issues-processor.service */ "./src/shared/issues-processor.service.ts");
/* harmony import */ var _shared_issues_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/issues.model */ "./src/shared/issues.model.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-ripple */ "./node_modules/@progress/kendo-angular-ripple/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _charts_grafico_percentual_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../charts/grafico-percentual.component */ "./src/charts/grafico-percentual.component.ts");
/* harmony import */ var _charts_grafico_area_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../charts/grafico-area.component */ "./src/charts/grafico-area.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

















var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(githubService, issuesProcessor, dashboardService) {
        var _this = this;
        this.githubService = githubService;
        this.issuesProcessor = issuesProcessor;
        this.dashboardService = dashboardService;
        this.isLoading = true;
        this.today = new Date();
        this.months = 3;
        this.selectedIndex = 0;
        this.rangeStart = this.issuesProcessor.getMonthsRange(this.months);
        this.subscription =
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(githubService
                .getGithubIssues({ pages: 5 })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) {
                _this.data = data;
                _this.isLoading = false;
                return _this.issuesProcessor.process(data, _this.months);
            }, function (err) { return _this.isLoading = false; })), Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _shared_issues_model__WEBPACK_IMPORTED_MODULE_4__["IssuesModel"]()))
                .subscribe(function (data) {
                _this.issues = data;
            });
    }
    Object.defineProperty(DashboardComponent.prototype, "get_id", {
        get: function () { return 'dashboard'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DashboardComponent.prototype, "get_class", {
        get: function () { return 'container-fluid'; },
        enumerable: false,
        configurable: true
    });
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService
            .obterDados()
            .subscribe(function (dados) {
            _this.dashboard = dados;
            _this.espacoTotal = dados.recursosTotais.espacoTotal;
            _this.espacoLivre = dados.recursosTotais.espacoLivre;
            _this.espacoLivrePercentual = dados.recursosTotais.espacoLivrePerc;
            _this.quantidadeDigitalizas = dados.producaoTotais.digitalizadasQtde;
            _this.quantidadeIntegradas = dados.producaoTotais.integradasQtde;
            _this.percentualIntegracao = dados.producaoTotais.integradasPerc;
            _this.quantidadeDistribuida = dados.utilizacaoTotais.distribuidasQtde;
            _this.quantidadeVisualizada = dados.utilizacaoTotais.visualizadasQtde;
            _this.percentualVisualizacao = dados.utilizacaoTotais.visualizadasPerc;
            _this.espacoLivreTitulo = dados.graficoEspacoLivre.titulo;
            _this.espacoLivreSeries = dados.graficoEspacoLivre.series;
            _this.espacoLivreCategorias = dados.graficoEspacoLivre.categorias;
            _this.espacoLivreDescricaoEixoX = dados.graficoEspacoLivre.descricaoEixoX;
            _this.producaoScannersTitulo = dados.graficoProducaoScanners.titulo;
            _this.producaoScannersSeries = dados.graficoProducaoScanners.series;
            _this.producaoScannersCategorias = dados.graficoProducaoScanners.categorias;
            _this.producaoScannersDescricaoEixoX = "";
            _this.engajamentoPatologistasSeries = dados.graficoEngajamentoPatologistas.series;
            _this.engajamentoPatologistasCategorias = dados.graficoEngajamentoPatologistas.categorias;
            _this.engajamentoPatologistasTitulo = dados.graficoEngajamentoPatologistas.titulo;
            _this.engajamentoPatologistasDescricaoEixoX = dados.graficoEngajamentoPatologistas.descricaoEixoX;
            _this.indicadoresTempoDigitalizacaoValorMedio = dados.indicadoresTotais.tempoDigitalizacaoValorMedio;
            _this.indicadoresLaminasPorHoraValorMedio = dados.indicadoresTotais.laminasPorHoraValorMedio;
        }, function (err) { return _this.isLoading = false; });
    };
    DashboardComponent.prototype.onFilterClick = function (months) {
        if (this.months !== months) {
            this.months = months;
            this.rangeStart = this.issuesProcessor.getMonthsRange(months);
            this.issues = this.issuesProcessor.process(this.data, months);
            this.filterIssues(this.selectedIndex);
        }
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DashboardComponent.prototype.onTabSelect = function (event) {
        this.filterIssues(event.index);
    };
    DashboardComponent.prototype.filterIssues = function (index) {
        switch (index) {
            case 0:
                this.issues = this.issuesProcessor.process(this.data, this.months);
                this.selectedIndex = 0;
                break;
            case 1:
                var assigned = this.issuesProcessor.flatten(this.data)
                    .filter(function (item) { return item.assignee ? item.assignee.login === 'ggkrustev' : false; });
                this.issues = this.issuesProcessor.process(assigned, this.months);
                this.selectedIndex = 1;
                break;
            case 2:
                var created = this.issuesProcessor.flatten(this.data).filter(function (item) { return item.user.login === 'ggkrustev'; });
                this.issues = this.issuesProcessor.process(created, this.months);
                this.selectedIndex = 2;
                break;
            default: this.issues = this.issuesProcessor.process(this.data, this.months);
        }
    };
    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_github_service__WEBPACK_IMPORTED_MODULE_1__["GithubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_issues_processor_service__WEBPACK_IMPORTED_MODULE_3__["IssuesProcessor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"])); };
    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], hostVars: 3, hostBindings: function DashboardComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.get_id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.get_class);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"], _shared_github_service__WEBPACK_IMPORTED_MODULE_1__["GithubService"], _shared_issues_processor_service__WEBPACK_IMPORTED_MODULE_3__["IssuesProcessor"]])], decls: 77, vars: 49, consts: [["id", "header", 1, "row"], [1, "col-sm", "text-sm-left", "p-0", "p-sm-3"], [1, "h2"], [1, "col-sm", "text-sm-right", "p-0", "p-sm-3"], [3, "selection"], ["kendoRippleContainer", "kendoRippleContainer", "kendoButton", "kendoButton", 3, "togglable", "selected", "click"], ["kendoRippleContainer", "kendoRippleContainer", "kendoButton", "kendoButton", 3, "togglable", "click"], [1, "k-card-deck", 2, "display", "flex", "flex-wrap", "wrap", "justify-content", "space-around"], [1, "k-card", 2, "min-height", "200px", "width", "300px"], [1, "k-card-body"], [1, "comp-label"], [1, "issues-count"], [1, "issues-label"], [1, "m-0", "small", "text-uppercase", "text-muted"], [1, "k-card-deck", 2, "display", "flex", "flex-wrap", "wrap", "justify-content", "space-evenly"], [1, "k-card", 2, "width", "600px"], ["tipo", "column", 3, "serie", "titulo", "categorias", "descricaoEixoX"], [3, "serie", "titulo", "categorias", "descricaoEixoX"], ["tipo", "line", 3, "serie", "titulo", "categorias", "descricaoEixoX"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dashboard Telepatologia - Diagn\u00F3stika - Hermes Pardini");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "kendo-buttongroup", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_6_listener() { return ctx.onFilterClick(3); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Dia ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_8_listener() { return ctx.onFilterClick(6); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Semana");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_10_listener() { return ctx.onFilterClick(12); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Mes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_12_listener() { return ctx.onFilterClick(12); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "12 meses");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_14_listener() { return ctx.onFilterClick(12); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Ano");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "percent");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Espa\u00E7o Livre");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "percent");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Integra\u00E7\u00E3o");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "percent");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Visualiza\u00E7\u00E3o");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "L\u00E2minas/hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "app-grafico-percentual", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "app-grafico-area", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "app-grafico-percentual", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selection", "single");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("togglable", true)("selected", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("togglable", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("togglable", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("togglable", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("togglable", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 30, ctx.espacoLivrePercentual, "2.0-0"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Espa\u00E7o Total: ", ctx.espacoTotal, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Espa\u00E7o Livre: ", ctx.espacoLivre, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](34, 33, ctx.percentualIntegracao, "2.0-0"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Digitalizadas: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 36, ctx.quantidadeDigitalizas), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Integradas: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 38, ctx.quantidadeIntegradas), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](48, 40, ctx.percentualVisualizacao, "2.0-0"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Visualizadas: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 43, ctx.quantidadeVisualizada), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Distribu\u00EDdas: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](56, 45, ctx.quantidadeDistribuida), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](62, 47, ctx.indicadoresLaminasPorHoraValorMedio));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Tempo de digitaliza\u00E7\u00E3o: ", ctx.indicadoresTempoDigitalizacaoValorMedio, " s ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("serie", ctx.espacoLivreSeries)("titulo", ctx.espacoLivreTitulo)("categorias", ctx.espacoLivreCategorias)("descricaoEixoX", ctx.espacoLivreDescricaoEixoX);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("serie", ctx.producaoScannersSeries)("titulo", ctx.producaoScannersTitulo)("categorias", ctx.producaoScannersCategorias)("descricaoEixoX", ctx.producaoScannersDescricaoEixoX);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("serie", ctx.engajamentoPatologistasSeries)("titulo", ctx.engajamentoPatologistasTitulo)("categorias", ctx.engajamentoPatologistasCategorias)("descricaoEixoX", ctx.engajamentoPatologistasDescricaoEixoX);
        } }, directives: [_progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_8__["ButtonGroup"], _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_8__["Button"], _progress_kendo_angular_ripple__WEBPACK_IMPORTED_MODULE_9__["RippleContainerDirective"], _charts_grafico_percentual_component__WEBPACK_IMPORTED_MODULE_10__["GraficoPercentualComponent"], _charts_grafico_area_component__WEBPACK_IMPORTED_MODULE_11__["GraficoAreaComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DecimalPipe"]], encapsulation: 2 });
    return DashboardComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                providers: [_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"], _shared_github_service__WEBPACK_IMPORTED_MODULE_1__["GithubService"], _shared_issues_processor_service__WEBPACK_IMPORTED_MODULE_3__["IssuesProcessor"]],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                templateUrl: './dashboard.template.html'
            }]
    }], function () { return [{ type: _shared_github_service__WEBPACK_IMPORTED_MODULE_1__["GithubService"] }, { type: _shared_issues_processor_service__WEBPACK_IMPORTED_MODULE_3__["IssuesProcessor"] }, { type: _shared_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] }]; }, { get_id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.id']
        }], get_class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "./src/dashboard/index.ts":
/*!********************************!*\
  !*** ./src/dashboard/index.ts ***!
  \********************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ "./src/dashboard/dashboard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return _dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]; });




/***/ }),

/***/ "./src/issues/index.ts":
/*!*****************************!*\
  !*** ./src/issues/index.ts ***!
  \*****************************/
/*! exports provided: IssuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _issues_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./issues.component */ "./src/issues/issues.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IssuesComponent", function() { return _issues_component__WEBPACK_IMPORTED_MODULE_0__["IssuesComponent"]; });




/***/ }),

/***/ "./src/issues/issues.component.ts":
/*!****************************************!*\
  !*** ./src/issues/issues.component.ts ***!
  \****************************************/
/*! exports provided: IssuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesComponent", function() { return IssuesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_github_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/github.service */ "./src/shared/github.service.ts");
/* harmony import */ var _shared_issues_processor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/issues-processor.service */ "./src/shared/issues-processor.service.ts");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-ripple */ "./node_modules/@progress/kendo-angular-ripple/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/spinner.component */ "./src/shared/spinner.component.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _label_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./label.directive */ "./src/issues/label.directive.ts");
/* harmony import */ var _markdown_markdown_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../markdown/markdown.component */ "./src/markdown/markdown.component.ts");
















function IssuesComponent_app_loading_spinner_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-loading-spinner");
} }
function IssuesComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function IssuesComponent_kendo_grid_18_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var dataItem_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("#", dataItem_r9.number, "");
} }
var _c0 = function (a1, a2) { return { "issue-status": true, "issue-open": a1, "issue-closed": a2 }; };
function IssuesComponent_kendo_grid_18_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
} if (rf & 2) {
    var dataItem_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c0, dataItem_r10.state === "open", dataItem_r10.state !== "open"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", dataItem_r10.title, " ");
} }
function IssuesComponent_kendo_grid_18_ng_template_6_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var label_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("labelClass", label_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", label_r13.name, " ");
} }
function IssuesComponent_kendo_grid_18_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, IssuesComponent_kendo_grid_18_ng_template_6_span_0_Template, 2, 2, "span", 19);
} if (rf & 2) {
    var dataItem_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", dataItem_r11.labels);
} }
function IssuesComponent_kendo_grid_18_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
} if (rf & 2) {
    var dataItem_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", dataItem_r14.milestone ? dataItem_r14.milestone.title : "", " ");
} }
var _c1 = function () { return { "width": "30px", "height": "30px" }; };
function IssuesComponent_kendo_grid_18_ng_template_10_img_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 22);
} if (rf & 2) {
    var dataItem_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", dataItem_r15.assignee ? dataItem_r15.assignee.avatar_url : undefined, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c1));
} }
function IssuesComponent_kendo_grid_18_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, IssuesComponent_kendo_grid_18_ng_template_10_img_0_Template, 1, 3, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
} if (rf & 2) {
    var dataItem_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", dataItem_r15.assignee);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", dataItem_r15.assignee ? dataItem_r15.assignee.login : "", " ");
} }
function IssuesComponent_kendo_grid_18_ng_template_11_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Closed on");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var dataItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 1, dataItem_r18.closed_at), " ");
} }
function IssuesComponent_kendo_grid_18_ng_template_11_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Assignee");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var dataItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", dataItem_r18.assignee ? dataItem_r18.assignee.avatar_url : undefined, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", dataItem_r18.assignee ? dataItem_r18.assignee.login : "", " ");
} }
function IssuesComponent_kendo_grid_18_ng_template_11_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var label_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("labelClass", label_r25.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", label_r25.name, " ");
} }
var _c2 = function (a0, a1) { return { "badge-success": a0, "badge-danger": a1 }; };
function IssuesComponent_kendo_grid_18_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Created on");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, IssuesComponent_kendo_grid_18_ng_template_11_div_14_Template, 5, 3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Milestone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Author");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, IssuesComponent_kendo_grid_18_ng_template_11_div_23_Template, 5, 4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "h4", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Labels");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, IssuesComponent_kendo_grid_18_ng_template_11_span_28_Template, 2, 2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "h4", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "app-markdown", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var dataItem_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](13, _c2, dataItem_r18.state === "open", dataItem_r18.state === "closed"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](dataItem_r18.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", dataItem_r18.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("#", dataItem_r18.number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 11, dataItem_r18.created_at), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", dataItem_r18.closed_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", dataItem_r18.milestone ? dataItem_r18.milestone.title : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", dataItem_r18.user.login, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", dataItem_r18.assignee);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", dataItem_r18.labels);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", dataItem_r18.body);
} }
function IssuesComponent_kendo_grid_18_Template(rf, ctx) { if (rf & 1) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "kendo-grid", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageChange", function IssuesComponent_kendo_grid_18_Template_kendo_grid_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r26.onPageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "kendo-grid-column", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, IssuesComponent_kendo_grid_18_ng_template_2_Template, 2, 1, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "kendo-grid-column", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, IssuesComponent_kendo_grid_18_ng_template_4_Template, 2, 5, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "kendo-grid-column", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, IssuesComponent_kendo_grid_18_ng_template_6_Template, 1, 1, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "kendo-grid-column", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, IssuesComponent_kendo_grid_18_ng_template_8_Template, 1, 1, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "kendo-grid-column", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, IssuesComponent_kendo_grid_18_ng_template_10_Template, 2, 2, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, IssuesComponent_kendo_grid_18_ng_template_11_Template, 33, 16, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r2.view)("pageSize", ctx_r2.pageSize)("pageable", true)("skip", ctx_r2.skip)("scrollable", "none");
} }
var IssuesComponent = /** @class */ (function () {
    function IssuesComponent(http, githubService, issuesProcessor) {
        var _this = this;
        this.http = http;
        this.githubService = githubService;
        this.issuesProcessor = issuesProcessor;
        this.isLoading = true;
        this.selectedPeriod = 3;
        this.total = 5;
        this.pageSize = 10;
        this.skip = 0;
        this.today = new Date();
        this.months = 3;
        this.range = this.dateRange();
        githubService.getGithubIssues({ pages: 5 }).subscribe(function (data) {
            data = data.reduce(function (agg, curr) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(agg, curr); }, []).filter(function (issue) { return issue.pull_request ? false : true; });
            _this.allIssues = data;
            _this.applyPaging(_this.issuesProcessor.filterByMonth(_this.allIssues, _this.months));
            _this.isLoading = false;
        }, function () { return _this.isLoading = false; });
    }
    Object.defineProperty(IssuesComponent.prototype, "get_id", {
        get: function () { return 'issues'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IssuesComponent.prototype, "get_class", {
        get: function () { return 'container-fluid'; },
        enumerable: false,
        configurable: true
    });
    IssuesComponent.prototype.onFilterClick = function (e) {
        this.selectedPeriod = e;
        this.skip = 0;
        this.months = e;
        this.range = this.dateRange();
        this.applyPaging(this.issuesProcessor.filterByMonth(this.allIssues, e));
    };
    IssuesComponent.prototype.onPageChange = function (e) {
        this.skip = e.skip;
        this.view = this.getView(e.skip, e.take);
    };
    IssuesComponent.prototype.applyPaging = function (data) {
        this.issues = data;
        this.view = this.getView(this.skip, this.pageSize);
    };
    IssuesComponent.prototype.getView = function (skip, take) {
        return {
            data: this.issues.slice(skip, skip + take),
            total: this.issues.length
        };
    };
    IssuesComponent.prototype.dateRange = function () {
        return {
            to: new Date(),
            from: this.issuesProcessor.getMonthsRange(this.months)
        };
    };
    IssuesComponent.ɵfac = function IssuesComponent_Factory(t) { return new (t || IssuesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_github_service__WEBPACK_IMPORTED_MODULE_3__["GithubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_issues_processor_service__WEBPACK_IMPORTED_MODULE_4__["IssuesProcessor"])); };
    IssuesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: IssuesComponent, selectors: [["app-issues"]], hostVars: 3, hostBindings: function IssuesComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.get_id);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.get_class);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
                _shared_github_service__WEBPACK_IMPORTED_MODULE_3__["GithubService"],
                _shared_issues_processor_service__WEBPACK_IMPORTED_MODULE_4__["IssuesProcessor"]
            ])], decls: 19, vars: 17, consts: [["id", "header", 1, "row"], [1, "col-sm"], [1, "h2"], [1, "col-sm", "text-sm-right", "p-0", "p-sm-3"], [3, "disabled", "selection"], ["kendoRippleContainer", "", "kendoButton", "", 3, "disabled", "selected", "click"], [4, "ngIf"], [3, "data", "pageSize", "pageable", "skip", "scrollable", "pageChange", 4, "ngIf"], ["src", "../../assets/noConnection.png"], [3, "data", "pageSize", "pageable", "skip", "scrollable", "pageChange"], ["field", "number", "title", "ID", "width", "80"], ["kendoGridCellTemplate", ""], ["field", "title", "title", "Title"], ["field", "labels", "title", "Labels", "media", "sm"], ["field", "milestone", "title", "Milestone", "width", "200", "media", "xl"], ["field", "assignee", "title", "Assignee", "width", "200", "media", "xl"], ["kendoGridDetailTemplate", ""], ["href", "dataItem.html_url"], [3, "ngClass"], ["class", "badge", 3, "labelClass", 4, "ngFor", "ngForOf"], [1, "badge", 3, "labelClass"], ["class", "img-circle", 3, "src", "ngStyle", 4, "ngIf"], [1, "img-circle", 3, "src", "ngStyle"], [1, "row", "my-4"], [1, "col-sm-12"], [1, "badge", 3, "ngClass"], [1, "h1"], [1, "text-muted"], [1, "col-sm-2"], [1, "small", "d-block", "text-muted"], ["class", "col-sm-2", 4, "ngIf"], [1, "small", "text-muted"], [1, "col-sm-8"], [3, "data"]], template: function IssuesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Issues");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "kendo-buttongroup", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IssuesComponent_Template_button_click_10_listener() { return ctx.onFilterClick(3); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "3 Months");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IssuesComponent_Template_button_click_12_listener() { return ctx.onFilterClick(6); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "6 Months");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IssuesComponent_Template_button_click_14_listener() { return ctx.onFilterClick(12); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "1 Year");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, IssuesComponent_app_loading_spinner_16_Template, 1, 0, "app-loading-spinner", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, IssuesComponent_div_17_Template, 2, 0, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, IssuesComponent_kendo_grid_18_Template, 12, 5, "kendo-grid", 7);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 13, ctx.range.from), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 15, ctx.range.to), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isLoading)("selection", "single");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isLoading)("selected", ctx.selectedPeriod === 3 ? true : false);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isLoading)("selected", ctx.selectedPeriod === 6 ? true : false);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isLoading)("selected", ctx.selectedPeriod === 12 ? true : false);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.view);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.view);
        } }, directives: [_progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonGroup"], _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_5__["Button"], _progress_kendo_angular_ripple__WEBPACK_IMPORTED_MODULE_6__["RippleContainerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__["GridComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__["ColumnComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__["CellTemplateDirective"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__["DetailTemplateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _label_directive__WEBPACK_IMPORTED_MODULE_10__["LabelClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _markdown_markdown_component__WEBPACK_IMPORTED_MODULE_11__["MarkdownComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], encapsulation: 2 });
    return IssuesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](IssuesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-issues',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                providers: [
                    _shared_github_service__WEBPACK_IMPORTED_MODULE_3__["GithubService"],
                    _shared_issues_processor_service__WEBPACK_IMPORTED_MODULE_4__["IssuesProcessor"]
                ],
                templateUrl: './issues.template.html'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _shared_github_service__WEBPACK_IMPORTED_MODULE_3__["GithubService"] }, { type: _shared_issues_processor_service__WEBPACK_IMPORTED_MODULE_4__["IssuesProcessor"] }]; }, { get_id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
            args: ['attr.id']
        }], get_class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "./src/issues/label.directive.ts":
/*!***************************************!*\
  !*** ./src/issues/label.directive.ts ***!
  \***************************************/
/*! exports provided: LabelClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelClass", function() { return LabelClass; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


// tslint:disable-next-line: directive-selector
var LabelClass = /** @class */ (function () {
    function LabelClass(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        // tslint:disable-next-line:member-ordering
        this.colors = {
            'SEV: LOW': '#ff9800',
            'SEV: MEDIUM': '#ff5d2a',
            'SEV: HIGH': '#d50000',
            ENHANCEMENT: '#00c853',
            FEATURE: '#2e7d32',
            OTHER: '#1ca8dd',
            'PASSED QA': '#57b45b',
            BUG: '#cf3257',
            'NEEDS QA': '#bc007c',
            DOCUMENTATION: '#455a64',
            DEMO: '#673ab7',
            DELETED: '#f44336',
            'IN PROGRESS': '#ffd600'
        };
    }
    Object.defineProperty(LabelClass.prototype, "labelClass", {
        set: function (text) {
            var color = this.matchColor(text);
            this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', color);
        },
        enumerable: false,
        configurable: true
    });
    LabelClass.prototype.matchColor = function (text) {
        var color = this.colors[text.toUpperCase()];
        return color ? color : this.colors.OTHER;
    };
    LabelClass.ɵfac = function LabelClass_Factory(t) { return new (t || LabelClass)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
    LabelClass.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LabelClass, selectors: [["", "labelClass", ""]], inputs: { labelClass: "labelClass" } });
    return LabelClass;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LabelClass, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[labelClass]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { labelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/markdown/markdown.component.ts":
/*!********************************************!*\
  !*** ./src/markdown/markdown.component.ts ***!
  \********************************************/
/*! exports provided: MarkdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownComponent", function() { return MarkdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_1__);



var MarkdownComponent = /** @class */ (function () {
    function MarkdownComponent() {
    }
    MarkdownComponent.prototype.ngOnChanges = function () {
        var md = marked__WEBPACK_IMPORTED_MODULE_1__["setOptions"]({});
        this.convertedData = md.parse(this.data);
    };
    MarkdownComponent.ɵfac = function MarkdownComponent_Factory(t) { return new (t || MarkdownComponent)(); };
    MarkdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MarkdownComponent, selectors: [["app-markdown"]], inputs: { data: "data" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[3, "innerHTML"]], template: function MarkdownComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.convertedData, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        } }, encapsulation: 2 });
    return MarkdownComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarkdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-markdown',
                template: '<div [innerHTML]="convertedData"></div>'
            }]
    }], null, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['data']
        }] }); })();


/***/ }),

/***/ "./src/profile/index.ts":
/*!******************************!*\
  !*** ./src/profile/index.ts ***!
  \******************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component */ "./src/profile/profile.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return _profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"]; });




/***/ }),

/***/ "./src/profile/profile.component.ts":
/*!******************************************!*\
  !*** ./src/profile/profile.component.ts ***!
  \******************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_github_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/github.service */ "./src/shared/github.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/spinner.component */ "./src/shared/spinner.component.ts");
/* harmony import */ var _progress_kendo_angular_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-angular-ripple */ "./node_modules/@progress/kendo-angular-ripple/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/__ivy_ngcc__/dist/fesm2015/index.js");












function ProfileComponent_app_loading_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading-spinner");
} }
function ProfileComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_2_kendo_dialog_87_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-dialog", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function ProfileComponent_div_2_kendo_dialog_87_Template_kendo_dialog_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.onProfileDialogClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your profile has been successfully updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "kendo-dialog-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_2_kendo_dialog_87_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onProfileDialogClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_2_kendo_dialog_88_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-dialog", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function ProfileComponent_div_2_kendo_dialog_88_Template_kendo_dialog_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.onDeleteDialogClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Account deletetion cannot be undone!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "kendo-dialog-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_2_kendo_dialog_88_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.onDeleteDialogClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_2_kendo_dialog_88_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.onDeleteDialogClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Delete Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("primary", true);
} }
var _c0 = function () { return { "max-width": "100%" }; };
function ProfileComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_2_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onSignOutClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sign out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Public Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "kendo-textbox-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "kendo-textbox-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "kendo-textbox-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Keep my email address private");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "kendo-textbox-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "kendo-textbox-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_2_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onUpdateClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Update profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Delete Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "You will immediately lose access to your repositories and all other information associated with your account. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "This cannot be undone!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_2_Template_button_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onDeleteClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Delete Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h4", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Automatically watch repositories?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "When you are given push access to a repository, automatically receive notifications for it.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "kendo-switch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Receive updates to any conversations via email?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "kendo-switch", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h4", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Receive updates to any repositories via email?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "kendo-switch", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Update password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "kendo-textbox-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "kendo-textbox-container", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "kendo-textbox-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Change password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, ProfileComponent_div_2_kendo_dialog_87_Template, 6, 0, "kendo-dialog", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, ProfileComponent_div_2_kendo_dialog_88_Template, 8, 1, "kendo-dialog", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r2.user.login, " - ", ctx_r2.user.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.user.avatar_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.user.login);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.user.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.user.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.profileDialogVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.deleteDialogVisible);
} }
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(githubService, router) {
        var _this = this;
        this.githubService = githubService;
        this.router = router;
        this.isLoading = true;
        this.user = {};
        this.profileDialogVisible = false;
        this.deleteDialogVisible = false;
        githubService.getGithubUser('mbechev').subscribe(function (data) {
            _this.user = data;
            _this.isLoading = false;
        }, function (err) {
            _this.isLoading = false;
        });
    }
    Object.defineProperty(ProfileComponent.prototype, "get_id", {
        get: function () { return 'profile'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "get_class", {
        get: function () { return 'container-fluid'; },
        enumerable: false,
        configurable: true
    });
    ProfileComponent.prototype.onProfileDialogClose = function () {
        this.profileDialogVisible = false;
    };
    ProfileComponent.prototype.onSignOutClick = function () {
        this.router.navigate(['/signin']);
    };
    ProfileComponent.prototype.onUpdateClick = function () {
        this.profileDialogVisible = true;
    };
    ProfileComponent.prototype.onDeleteClick = function () {
        this.deleteDialogVisible = true;
    };
    ProfileComponent.prototype.onDeleteDialogClose = function () {
        this.deleteDialogVisible = false;
    };
    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_github_service__WEBPACK_IMPORTED_MODULE_1__["GithubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], hostVars: 3, hostBindings: function ProfileComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.get_id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.get_class);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_github_service__WEBPACK_IMPORTED_MODULE_1__["GithubService"]])], decls: 3, vars: 3, consts: [[4, "ngIf"], ["src", "../../assets/noConnection.png", 1, "center"], [1, "row"], [1, "col-sm"], [1, "h2"], [1, "col-sm", "text-sm-right"], ["kendoRippleContainer", "", 1, "k-button", 3, "click"], [1, "col-md-7"], ["id", "profile", 1, "k-card"], [1, "k-card-header"], [1, "k-card-body"], [1, "col-md-3", "text-xs-center"], [1, "img-circle", "mx-auto", "mb-3", 3, "src", "ngStyle"], [1, "col-md-9"], [1, "form-group"], ["floatingLabel", "Username", 1, "custom-width"], ["kendoTextBox", "", "type", "text", "id", "username", 3, "value"], ["floatingLabel", "Name", 1, "custom-width"], ["kendoTextBox", "", "type", "text", "id", "name", 3, "value"], ["floatingLabel", "Email", 1, "custom-width"], ["kendoTextBox", "", "type", "email", "id", "email", 3, "value"], ["kendoRippleContainer", "", 1, "form-group"], ["type", "checkbox", "id", "chkboxonly", "checked", "", 1, "k-checkbox"], ["for", "chkboxonly", 1, "k-checkbox-label"], ["floatingLabel", "Company", 1, "custom-width"], ["kendoTextBox", "", "type", "text", "id", "company", 3, "value"], ["floatingLabel", "Location", 1, "custom-width"], ["kendoTextBox", "", "type", "text", "id", "location", 3, "value"], ["kendoRippleContainer", "", 1, "k-button", "k-primary", 3, "click"], ["id", "delete-account", 1, "k-card"], ["kendoRippleContainer", "", 1, "k-button", "k-primary", 2, "background-color", "red", 3, "click"], [1, "col-md-5"], ["id", "notifications", 1, "k-card"], [1, "h6"], [1, "text-muted"], [3, "checked"], ["id", "password", 1, "k-card"], ["floatingLabel", "Old password", 1, "custom-width"], ["kendoTextBox", "", "type", "password"], ["floatingLabel", "New password", 1, "custom-width"], ["floatingLabel", "Confirm password", 1, "custom-width"], ["kendoRippleContainer", "", 1, "k-button", "k-primary"], ["title", "Thank you", 3, "close", 4, "ngIf"], ["title", "Are you sure you want to do this?", 3, "close", 4, "ngIf"], ["title", "Thank you", 3, "close"], ["title", "Are you sure you want to do this?", 3, "close"], ["kendoRippleContainer", "", "kendoButton", "", 3, "click"], ["kendoRippleContainer", "", "kendoButton", "", 3, "primary", "click"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileComponent_app_loading_spinner_0_Template, 1, 0, "app-loading-spinner", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_1_Template, 2, 0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_div_2_Template, 89, 14, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.user.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.id && !ctx.isLoading);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"], _progress_kendo_angular_ripple__WEBPACK_IMPORTED_MODULE_5__["RippleContainerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_6__["TextBoxContainerComponent"], _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_6__["TextBoxDirective"], _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_6__["SwitchComponent"], _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_7__["DialogActionsComponent"], _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_8__["Button"]], encapsulation: 2 });
    return ProfileComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                providers: [_shared_github_service__WEBPACK_IMPORTED_MODULE_1__["GithubService"]],
                templateUrl: './profile.template.html'
            }]
    }], function () { return [{ type: _shared_github_service__WEBPACK_IMPORTED_MODULE_1__["GithubService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { get_id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.id']
        }], get_class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "./src/shared/dashboard.service.ts":
/*!*****************************************!*\
  !*** ./src/shared/dashboard.service.ts ***!
  \*****************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




//const baseUrl = 'https://localhost:5001/api/dashboard';
//const baseUrl = 'https://demo0466118.mockable.io/api/dashboard';
var baseUrl = 'https://demo5010569.mockable.io/api/dashboard';
var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
    'Content-Type': "application/json"
});
var DashboardService = /** @class */ (function () {
    function DashboardService(http) {
        this.http = http;
    }
    DashboardService.prototype.obterDados = function () {
        return this.http.get(baseUrl, { headers: headers });
    };
    DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
    DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac });
    return DashboardService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/shared/github.service.ts":
/*!**************************************!*\
  !*** ./src/shared/github.service.ts ***!
  \**************************************/
/*! exports provided: GithubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubService", function() { return GithubService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





var baseUrl = 'https://api.github.com/repos/telerik/kendo-ui-core/issues';
var token = 'b95116792cba5a8169a1ec10640d8c16535c6419';
var epoch = '2018-01-01T00:00:00';
var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
    // Generate your own token through
    // https://github.com/settings/tokens
    Authorization: "token " + token
});
var GithubService = /** @class */ (function () {
    function GithubService(http) {
        this.http = http;
    }
    GithubService.prototype.getGithubIssues = function (pages) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(this.getIssuesUrls(pages));
    };
    GithubService.prototype.getTotalIssuesCount = function () {
        return this.http.get(baseUrl + "?since='" + epoch + "'", { headers: headers });
    };
    GithubService.prototype.getIssuesUrls = function (_a) {
        var pages = _a.pages;
        var result = [];
        for (var index = 1; index < pages; index++) {
            result.push(this.http.get(baseUrl + "?state=all&page=" + index + "&per_page=100", { headers: headers }));
        }
        return result;
    };
    GithubService.prototype.getIssuesPerPage = function (skip, take) {
        var page = (take + skip) / take;
        return this.http.get(baseUrl + "?state=all&page=" + page + "&per_page=" + take, { headers: headers });
    };
    GithubService.prototype.getGithubUser = function (username) {
        return this.http.get("https://api.github.com/users/" + username, { headers: headers });
    };
    GithubService.prototype.getGithubIssue = function (id) {
        return this.http.get(baseUrl + "/" + id, { headers: headers });
    };
    GithubService.ɵfac = function GithubService_Factory(t) { return new (t || GithubService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
    GithubService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GithubService, factory: GithubService.ɵfac });
    return GithubService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GithubService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/shared/issues-processor.service.ts":
/*!************************************************!*\
  !*** ./src/shared/issues-processor.service.ts ***!
  \************************************************/
/*! exports provided: IssuesProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesProcessor", function() { return IssuesProcessor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _issues_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./issues.model */ "./src/shared/issues.model.ts");




var colors = {
    'SEV: LOW': '#ff9800',
    'SEV: MEDIUM': '#ff5d2a',
    'SEV: HIGH': '#d50000',
    ENHANCEMENT: '#00c853',
    FEATURE: '#2e7d32',
    OTHER: '#1ca8dd',
    'PASSED QA': '#57b45b',
    BUG: '#cf3257',
    'NEEDS QA': '#bc007c',
    DOCUMENTATION: '#455a64',
    DEMO: '#673ab7',
    DELETED: '#f44336',
    'IN PROGRESS': '#ffd600'
};
var IssuesProcessor = /** @class */ (function () {
    function IssuesProcessor() {
    }
    IssuesProcessor.mapIssues = function (data) {
        return data
            .reduce(function (agg, curr) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(agg, curr); }, [])
            .filter(function (issue) { return !issue.pull_request; })
            .map(IssuesProcessor.mapIssue);
    };
    IssuesProcessor.mapIssue = function (issue) {
        return {
            id: issue.number,
            title: issue.title,
            body: issue.body,
            author: IssuesProcessor.mapUser(issue.user),
            assignees: (issue.assignees ? issue.assignees.map(IssuesProcessor.mapUser) : []),
            state: issue.state,
            date: new Date(issue.created_at),
            dateClosed: (issue.closed_at ? new Date(issue.closed_at) : undefined),
            count: 1,
            labels: issue.labels.map(IssuesProcessor.mapLabels),
            milestone: issue.milestone,
            created_at: issue.created_at,
            assignee: issue.assignee ? issue.assignee.login : 'none'
        };
    };
    IssuesProcessor.mapLabels = function (label) {
        var name = label.name.toUpperCase();
        if (name in colors) {
            label.color = colors[name];
        }
        else {
            label.color = colors.OTHER;
        }
        return label;
    };
    IssuesProcessor.mapUser = function (user) {
        return {
            id: user.id,
            name: user.login,
            avatarUrl: user.avatar_url,
            avatarUrlThumb: user.avatar_url + '&size=60'
        };
    };
    IssuesProcessor.prototype.process = function (data, months) {
        var mappedIssues = this.filterByMonth(IssuesProcessor.mapIssues(data), months);
        var groupedIssues = this.groupIssues(mappedIssues);
        return new _issues_model__WEBPACK_IMPORTED_MODULE_2__["IssuesModel"](mappedIssues, groupedIssues.open.length, groupedIssues.closed.length, groupedIssues, this.groupLabels(mappedIssues), this.distribution(mappedIssues), this.closeRate(groupedIssues));
    };
    IssuesProcessor.prototype.flatten = function (data) {
        return data.reduce(function (agg, curr) { return agg.concat(curr); });
    };
    IssuesProcessor.prototype.aggregate = function (data, field) {
        return data.reduce(function (agg, curr) {
            agg[curr[field]] = (agg[curr[field]] || 0) + 1;
            return agg;
        }, {});
    };
    IssuesProcessor.prototype.closeRate = function (data) {
        var closed = this.aggregate(data.closed.map(function (item) { return ({
            created_at: new Date(item.created_at).setHours(0, 0, 0, 0)
        }); }), 'created_at');
        var open = this.aggregate(data.open.map(function (item) { return ({
            created_at: new Date(item.created_at).setHours(0, 0, 0, 0)
        }); }), 'created_at');
        var rate = Object.keys(closed).map(function (key) {
            var closedKey = closed[key] || 0;
            var openKey = open[key] || 0;
            var closeRate = closedKey / (closedKey + openKey);
            return {
                created_at: key,
                close_rate: closeRate
            };
        });
        return {
            lowest: rate.reduce(function (agg, curr) { return agg.close_rate < curr.close_rate ? agg : curr; }),
            highest: rate.reduce(function (agg, curr) { return agg.close_rate > curr.close_rate ? agg : curr; }),
            average: data.closed.length / (data.open.length + data.closed.length)
        };
    };
    IssuesProcessor.prototype.groupIssues = function (data) {
        return data.reduce(function (agg, curr) {
            agg[curr.state].push(curr);
            return agg;
        }, { open: [], closed: [] });
    };
    IssuesProcessor.prototype.groupLabels = function (data) {
        var labels = this.aggregate(this.flatten(data.map(function (item) { return item.labels; })), 'name');
        var low = (labels['SEV: Low'] / data.length);
        var medium = labels['SEV: Medium'] / data.length;
        var high = labels['SEV: High'] / data.length;
        var enhancement = labels.Enhancement / data.length;
        var feature = labels.Feature / data.length;
        var other = 1 - low - medium - high - enhancement - feature;
        return [
            { type: 'SEV: LOW', value: parseFloat(low.toFixed(2)) },
            { type: 'SEV: MEDIUM', value: parseFloat(medium.toFixed(2)) },
            { type: 'SEV: HIGH', value: parseFloat(high.toFixed(2)) },
            { type: 'ENHANCEMENT', value: parseFloat(enhancement.toFixed(2)) },
            { type: 'FEATURE', value: parseFloat(feature.toFixed(2)) },
            { type: 'OTHER', value: parseFloat(other.toFixed(2)) }
        ];
    };
    IssuesProcessor.prototype.distribution = function (data) {
        var _this = this;
        return data.map(function (item) { return ({
            created_at: new Date(item.created_at).setHours(0, 0, 0, 0),
            label: _this.cleanupLabels(item.labels)
        }); })
            .reduce(function (agg, curr) {
            agg[curr.label].push({
                date: new Date(curr.created_at),
                value: 1
            });
            return agg;
        }, { Others: [], Enhancement: [], 'SEV: Low': [], 'SEV: Medium': [], 'SEV: High': [], Feature: [] });
    };
    IssuesProcessor.prototype.cleanupLabels = function (labels) {
        var filtered = labels.filter(function (label) {
            return label.name === 'SEV: Low' ||
                label.name === 'SEV: High' ||
                label.name === 'Feature' ||
                label.name === 'Enhancement' ||
                label.name === 'SEV: Medium';
        })
            .map(function (label) { return label.name; });
        return filtered.length === 0 ? 'Others' : filtered[0];
    };
    IssuesProcessor.prototype.filterByMonth = function (data, months) {
        var _this = this;
        return data.filter(function (value) {
            return new Date(value.created_at).getTime() > _this.getMonthsRange(months).getTime();
        });
    };
    IssuesProcessor.prototype.filterByUsername = function (data, username) {
        return this.process(data, 12).active.filter(function (value) {
            return value.assignee === username;
        });
    };
    IssuesProcessor.prototype.getMonthsRange = function (months) {
        var since = new Date();
        since.setMonth(since.getMonth() - months);
        return since;
    };
    IssuesProcessor.ɵfac = function IssuesProcessor_Factory(t) { return new (t || IssuesProcessor)(); };
    IssuesProcessor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: IssuesProcessor, factory: IssuesProcessor.ɵfac });
    return IssuesProcessor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IssuesProcessor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/shared/issues.model.ts":
/*!************************************!*\
  !*** ./src/shared/issues.model.ts ***!
  \************************************/
/*! exports provided: IssuesModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesModel", function() { return IssuesModel; });
var IssuesModel = /** @class */ (function () {
    function IssuesModel(active, open, closed, groupedIssues, issueTypes, typesDistribution, closeRate) {
        if (active === void 0) { active = []; }
        if (open === void 0) { open = 0; }
        if (closed === void 0) { closed = 0; }
        if (groupedIssues === void 0) { groupedIssues = {
            open: [],
            closed: []
        }; }
        if (issueTypes === void 0) { issueTypes = []; }
        if (typesDistribution === void 0) { typesDistribution = {
            Enhancement: [],
            Others: [],
            'SEV: Low': [],
            'SEV: Medium': [],
            'SEV: High': [],
            Feature: []
        }; }
        if (closeRate === void 0) { closeRate = {
            lowest: {
                close_rate: 0,
                created_at: new Date().toISOString()
            },
            highest: {
                close_rate: 0,
                created_at: new Date().toISOString()
            },
            average: 0
        }; }
        this.active = active;
        this.open = open;
        this.closed = closed;
        this.groupedIssues = groupedIssues;
        this.issueTypes = issueTypes;
        this.typesDistribution = typesDistribution;
        this.closeRate = closeRate;
    }
    return IssuesModel;
}());



/***/ }),

/***/ "./src/shared/spinner.component.ts":
/*!*****************************************!*\
  !*** ./src/shared/spinner.component.ts ***!
  \*****************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
    LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading-spinner"]], decls: 1, vars: 0, consts: [[1, "k-i-loading"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        } }, styles: [".k-i-loading[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        font-size: 100px;\n        color: #252830;\n      }"] });
    return LoadingComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading-spinner',
                template: "\n        <div class=\"k-i-loading\">\n        </div>\n    ",
                styles: ["\n      .k-i-loading {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        font-size: 100px;\n        color: #252830;\n      }\n    "]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/signin/index.ts":
/*!*****************************!*\
  !*** ./src/signin/index.ts ***!
  \*****************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _signin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin.component */ "./src/signin/signin.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return _signin_component__WEBPACK_IMPORTED_MODULE_0__["SigninComponent"]; });




/***/ }),

/***/ "./src/signin/signin.component.ts":
/*!****************************************!*\
  !*** ./src/signin/signin.component.ts ***!
  \****************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @progress/kendo-angular-ripple */ "./node_modules/@progress/kendo-angular-ripple/__ivy_ngcc__/dist/fesm2015/index.js");






var SigninComponent = /** @class */ (function () {
    function SigninComponent(router) {
        this.router = router;
    }
    Object.defineProperty(SigninComponent.prototype, "id", {
        get: function () {
            return 'login';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SigninComponent.prototype, "appClass", {
        get: function () {
            return 'justify-content-center';
        },
        enumerable: false,
        configurable: true
    });
    SigninComponent.prototype.onLoginClick = function () {
        this.router.navigate(['/dashboard']);
    };
    SigninComponent.ɵfac = function SigninComponent_Factory(t) { return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SigninComponent, selectors: [["app-signin"]], hostVars: 3, hostBindings: function SigninComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.appClass);
        } }, decls: 21, vars: 0, consts: [[1, "signin-form", "col-xl-3"], [1, "k-card"], [1, "k-card-block"], [1, "k-form"], ["id", "app-title", 1, "mb-0"], ["id", "app-subtitle", 1, "h4", "mb-4"], [1, "k-hr"], [1, "form-group", "mt-4"], ["floatingLabel", "Email or Username", 1, "custom-width"], ["kendoTextBox", "", "type", "text"], [1, "form-group"], ["floatingLabel", "Password", 1, "custom-width"], ["kendoTextBox", "", "type", "password"], [1, "text-xs-right", "small"], ["href", "#"], [1, "form-group", "mb-0", "text-right"], ["kendoRippleContainer", "", 1, "k-button", "k-primary", 3, "click"]], template: function SigninComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Issues");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sample Dashboard");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "kendo-textbox-container", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "kendo-textbox-container", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Forgot it?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SigninComponent_Template_button_click_19_listener() { return ctx.onLoginClick(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Log in");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_2__["TextBoxContainerComponent"], _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_2__["TextBoxDirective"], _progress_kendo_angular_ripple__WEBPACK_IMPORTED_MODULE_3__["RippleContainerDirective"]], encapsulation: 2 });
    return SigninComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signin',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                templateUrl: './signin.template.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.id']
        }], appClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jacques.zetune\source\repos\DashboardApi\src\WebApp\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map