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

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _common_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/index */ "./src/common/index.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app-routing.module.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-charts */ "./node_modules/@progress/kendo-angular-charts/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_ripple__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-ripple */ "./node_modules/@progress/kendo-angular-ripple/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/dashboard/dashboard.component.ts");
/* harmony import */ var _componentes_grafico_percentual_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./componentes/grafico-percentual.component */ "./src/componentes/grafico-percentual.component.ts");
/* harmony import */ var _componentes_card_percentual_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./componentes/card-percentual.component */ "./src/componentes/card-percentual.component.ts");
/* harmony import */ var _componentes_card_percentual_texto_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./componentes/card-percentual-texto.component */ "./src/componentes/card-percentual-texto.component.ts");
/* harmony import */ var _componentes_card_numerico_basico_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./componentes/card-numerico-basico.component */ "./src/componentes/card-numerico-basico.component.ts");
/* harmony import */ var _componentes_card_percentual_3linhas_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./componentes/card-percentual-3linhas.component */ "./src/componentes/card-percentual-3linhas.component.ts");
/* harmony import */ var _componentes_grafico_area_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./componentes/grafico-area.component */ "./src/componentes/grafico-area.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../environments/environment */ "./environments/environment.ts");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @progress/kendo-angular-intl */ "./node_modules/@progress/kendo-angular-intl/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_intl_locales_pt_all__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @progress/kendo-angular-intl/locales/pt/all */ "./node_modules/@progress/kendo-angular-intl/locales/pt/all.js");
/* harmony import */ var _progress_kendo_angular_intl_locales_pt_all__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_progress_kendo_angular_intl_locales_pt_all__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/locales/pt */ "./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_26__);





// app


// Kendo UI







// Components







// environment








Object(_angular_common__WEBPACK_IMPORTED_MODULE_25__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_26___default.a);
_common_index__WEBPACK_IMPORTED_MODULE_5__["Config"].PLATFORM_TARGET = _common_index__WEBPACK_IMPORTED_MODULE_5__["Config"].PLATFORMS.WEB;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], useValue: 'pt' },
        ], imports: [[
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register("ngsw-worker.js", { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].production }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"],
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["GridModule"],
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["ExcelModule"],
                _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_9__["DialogModule"],
                _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_10__["InputsModule"],
                _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_11__["ButtonsModule"],
                _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_12__["LayoutModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _progress_kendo_angular_ripple__WEBPACK_IMPORTED_MODULE_13__["RippleModule"],
                _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_22__["DropDownsModule"],
                _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_23__["IntlModule"],
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
        _componentes_grafico_percentual_component__WEBPACK_IMPORTED_MODULE_15__["GraficoPercentualComponent"],
        _componentes_grafico_area_component__WEBPACK_IMPORTED_MODULE_20__["GraficoAreaComponent"],
        _componentes_card_percentual_component__WEBPACK_IMPORTED_MODULE_16__["CardPercentualComponent"],
        _componentes_card_percentual_texto_component__WEBPACK_IMPORTED_MODULE_17__["CardPercentualTextoComponent"],
        _componentes_card_numerico_basico_component__WEBPACK_IMPORTED_MODULE_18__["CardNumericoBasicoComponent"],
        _componentes_card_percentual_3linhas_component__WEBPACK_IMPORTED_MODULE_19__["CardPercentual3LinhasComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"],
        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["GridModule"],
        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["ExcelModule"],
        _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_9__["DialogModule"],
        _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_10__["InputsModule"],
        _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_11__["ButtonsModule"],
        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_12__["LayoutModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _progress_kendo_angular_ripple__WEBPACK_IMPORTED_MODULE_13__["RippleModule"],
        _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_22__["DropDownsModule"],
        _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_23__["IntlModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
                    _componentes_grafico_percentual_component__WEBPACK_IMPORTED_MODULE_15__["GraficoPercentualComponent"],
                    _componentes_grafico_area_component__WEBPACK_IMPORTED_MODULE_20__["GraficoAreaComponent"],
                    _componentes_card_percentual_component__WEBPACK_IMPORTED_MODULE_16__["CardPercentualComponent"],
                    _componentes_card_percentual_texto_component__WEBPACK_IMPORTED_MODULE_17__["CardPercentualTextoComponent"],
                    _componentes_card_numerico_basico_component__WEBPACK_IMPORTED_MODULE_18__["CardNumericoBasicoComponent"],
                    _componentes_card_percentual_3linhas_component__WEBPACK_IMPORTED_MODULE_19__["CardPercentual3LinhasComponent"]
                ],
                imports: [
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register("ngsw-worker.js", { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].production }),
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"],
                    _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["GridModule"],
                    _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["ExcelModule"],
                    _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_9__["DialogModule"],
                    _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_10__["InputsModule"],
                    _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_11__["ButtonsModule"],
                    _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_12__["LayoutModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _progress_kendo_angular_ripple__WEBPACK_IMPORTED_MODULE_13__["RippleModule"],
                    _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_22__["DropDownsModule"],
                    _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_23__["IntlModule"],
                ],
                exports: [],
                providers: [
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], useValue: 'pt' },
                ],
                bootstrap: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"]]
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

var AppRoutes = [
    { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
    { path: 'dashboard', component: _dashboard__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"] }
];


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

/***/ "./src/componentes/card-numerico-basico.component.ts":
/*!***********************************************************!*\
  !*** ./src/componentes/card-numerico-basico.component.ts ***!
  \***********************************************************/
/*! exports provided: CardNumericoBasicoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardNumericoBasicoComponent", function() { return CardNumericoBasicoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



var CardNumericoBasicoComponent = /** @class */ (function () {
    function CardNumericoBasicoComponent() {
    }
    CardNumericoBasicoComponent.ɵfac = function CardNumericoBasicoComponent_Factory(t) { return new (t || CardNumericoBasicoComponent)(); };
    CardNumericoBasicoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardNumericoBasicoComponent, selectors: [["app-card-numerico-basico"]], inputs: { valorPrincipal: "valorPrincipal", titulo: "titulo", subTitulo: "subTitulo", valor: "valor", unidadeMedida: "unidadeMedida", subTitulo2: "subTitulo2", valor2: "valor2", unidadeMedida2: "unidadeMedida2" }, decls: 12, vars: 13, consts: [[1, "comp-label"], [1, "issues-count", 2, "font-size", "80px"], [1, "issues-label", 2, "font-size", "18px"], [1, "m-0", "medium", "text-muted"], [3, "innerHtml"]], template: function CardNumericoBasicoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 8, ctx.valorPrincipal), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx.subTitulo, ": ", ctx.valor, " ", ctx.unidadeMedida, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.subTitulo2, ": ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 10, ctx.valor2, "1.0-0"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.unidadeMedida2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]], encapsulation: 2 });
    return CardNumericoBasicoComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardNumericoBasicoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-numerico-basico',
                template: "\n    <span class=\"comp-label\">\n    <div class=\"issues-count\" style=\"font-size: 80px;\">{{ valorPrincipal | number }}\n    </div>\n    <div class=\"issues-label\" style=\"font-size: 18px;\">{{titulo}}</div>\n</span>\n<p class=\"m-0 medium text-muted\">\n    {{subTitulo}}:\n    {{valor}}\n    {{unidadeMedida}}\n</p>\n<p class=\"m-0 medium text-muted\">\n    {{subTitulo2}}:\n    {{valor2 | number: '1.0-0'}}\n    <label [innerHtml]=\"unidadeMedida2\"></label>\n</p>"
            }]
    }], null, { valorPrincipal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], titulo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subTitulo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], unidadeMedida: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subTitulo2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valor2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], unidadeMedida2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/componentes/card-percentual-3linhas.component.ts":
/*!**************************************************************!*\
  !*** ./src/componentes/card-percentual-3linhas.component.ts ***!
  \**************************************************************/
/*! exports provided: CardPercentual3LinhasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPercentual3LinhasComponent", function() { return CardPercentual3LinhasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



var CardPercentual3LinhasComponent = /** @class */ (function () {
    function CardPercentual3LinhasComponent() {
    }
    CardPercentual3LinhasComponent.ɵfac = function CardPercentual3LinhasComponent_Factory(t) { return new (t || CardPercentual3LinhasComponent)(); };
    CardPercentual3LinhasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardPercentual3LinhasComponent, selectors: [["app-card-percentual-3linhas"]], inputs: { valorPercentual: "valorPercentual", titulo: "titulo", subTitulo1: "subTitulo1", subTitulo2: "subTitulo2", subTitulo3: "subTitulo3", valor1: "valor1", valor2: "valor2", valor3: "valor3" }, decls: 17, vars: 17, consts: [[1, "comp-label"], [1, "issues-count", 2, "font-size", "80px"], [1, "issues-label", 2, "font-size", "18px"], [1, "m-0", "medium", "text-muted"]], template: function CardPercentual3LinhasComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "percent");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00A0\u00A0|\u00A0\u00A0 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 8, ctx.valorPercentual, "2.0-0"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.subTitulo1, ": ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 11, ctx.valor1), "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.subTitulo2, ": ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 13, ctx.valor2), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.subTitulo3, ": ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 15, ctx.valor3), "");
        } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]], encapsulation: 2 });
    return CardPercentual3LinhasComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardPercentual3LinhasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-percentual-3linhas',
                template: "\n    <span class=\"comp-label\">\n    <div class=\"issues-count\" style=\"font-size: 80px;\">{{ valorPercentual | percent:'2.0-0' }}</div>\n    <div class=\"issues-label\" style=\"font-size: 18px;\">{{titulo}}</div>\n</span>\n<p class=\"m-0 medium text-muted\">\n    {{subTitulo1}}:\n    {{valor1 | number}}\n</p>\n<p class=\"m-0 medium text-muted\">\n    <span>{{subTitulo2}}:\n    {{valor2 | number}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;\n    <span>{{subTitulo3}}:\n    {{valor3 | number}}</span>\n</p>"
            }]
    }], null, { valorPercentual: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], titulo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subTitulo1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subTitulo2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subTitulo3: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valor1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valor2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valor3: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/componentes/card-percentual-texto.component.ts":
/*!************************************************************!*\
  !*** ./src/componentes/card-percentual-texto.component.ts ***!
  \************************************************************/
/*! exports provided: CardPercentualTextoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPercentualTextoComponent", function() { return CardPercentualTextoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



var CardPercentualTextoComponent = /** @class */ (function () {
    function CardPercentualTextoComponent() {
    }
    CardPercentualTextoComponent.ɵfac = function CardPercentualTextoComponent_Factory(t) { return new (t || CardPercentualTextoComponent)(); };
    CardPercentualTextoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardPercentualTextoComponent, selectors: [["app-card-percentual-texto"]], inputs: { valorPercentual: "valorPercentual", titulo: "titulo", subTitulo1: "subTitulo1", subTitulo2: "subTitulo2", texto1: "texto1", texto2: "texto2" }, decls: 10, vars: 9, consts: [[1, "comp-label"], [1, "issues-count", 2, "font-size", "80px"], [1, "issues-label", 2, "font-size", "18px"], [1, "m-0", "medium", "text-muted"]], template: function CardPercentualTextoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "percent");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 6, ctx.valorPercentual, "2.0-0"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.subTitulo1, ": ", ctx.texto1, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.subTitulo2, ": ", ctx.texto2, "\n");
        } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"]], encapsulation: 2 });
    return CardPercentualTextoComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardPercentualTextoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-percentual-texto',
                template: "\n    <span class=\"comp-label\">\n    <div class=\"issues-count\" style=\"font-size: 80px;\">{{ valorPercentual | percent:'2.0-0' }}</div>\n    <div class=\"issues-label\" style=\"font-size: 18px;\">{{titulo}}</div>\n</span>\n<p class=\"m-0 medium text-muted\">\n    {{subTitulo1}}:\n    {{texto1}}\n</p>\n<p class=\"m-0 medium text-muted\">\n    {{subTitulo2}}:\n    {{texto2}}\n</p>"
            }]
    }], null, { valorPercentual: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], titulo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subTitulo1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subTitulo2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], texto1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], texto2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/componentes/card-percentual.component.ts":
/*!******************************************************!*\
  !*** ./src/componentes/card-percentual.component.ts ***!
  \******************************************************/
/*! exports provided: CardPercentualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPercentualComponent", function() { return CardPercentualComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



var CardPercentualComponent = /** @class */ (function () {
    function CardPercentualComponent() {
    }
    CardPercentualComponent.ɵfac = function CardPercentualComponent_Factory(t) { return new (t || CardPercentualComponent)(); };
    CardPercentualComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardPercentualComponent, selectors: [["app-card-percentual"]], inputs: { valorPercentual: "valorPercentual", titulo: "titulo", subTitulo1: "subTitulo1", subTitulo2: "subTitulo2", valor1: "valor1", valor2: "valor2" }, decls: 12, vars: 13, consts: [[1, "comp-label"], [1, "issues-count", 2, "font-size", "80px"], [1, "issues-label", 2, "font-size", "18px"], [1, "m-0", "medium", "text-muted"]], template: function CardPercentualComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "percent");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 6, ctx.valorPercentual, "2.0-0"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.subTitulo1, ": ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 9, ctx.valor1), "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.subTitulo2, ": ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 11, ctx.valor2), "\n");
        } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]], encapsulation: 2 });
    return CardPercentualComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardPercentualComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-percentual',
                template: "\n    <span class=\"comp-label\">\n    <div class=\"issues-count\" style=\"font-size: 80px;\">{{ valorPercentual | percent:'2.0-0' }}</div>\n    <div class=\"issues-label\" style=\"font-size: 18px;\">{{titulo}}</div>\n</span>\n<p class=\"m-0 medium text-muted\">\n    {{subTitulo1}}:\n    {{valor1 | number}}\n</p>\n<p class=\"m-0 medium text-muted\">\n    {{subTitulo2}}:\n    {{valor2 | number}}\n</p>"
            }]
    }], null, { valorPercentual: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], titulo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subTitulo1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subTitulo2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valor1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valor2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/componentes/grafico-area.component.ts":
/*!***************************************************!*\
  !*** ./src/componentes/grafico-area.component.ts ***!
  \***************************************************/
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






function GraficoAreaComponent_kendo_chart_series_item_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "number");
} if (rf & 2) {
    var dataItem_r3 = ctx.dataItem;
    var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r1.nome, " | ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 2, dataItem_r3.valor, "", "es"), " ");
} }
function GraficoAreaComponent_kendo_chart_series_item_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-chart-series-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "kendo-chart-series-item-tooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GraficoAreaComponent_kendo_chart_series_item_8_ng_template_2_Template, 2, 6, "ng-template");
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
    GraficoAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GraficoAreaComponent, selectors: [["app-grafico-area"]], inputs: { titulo: "titulo", categorias: "categorias", descricaoEixoX: "descricaoEixoX", descricaoEixoY: "descricaoEixoY", serie: "serie" }, decls: 9, vars: 11, consts: [[3, "title"], ["format", "N0"], [3, "categories", "title"], ["field", "valor", "categoryField", "categoria", "type", "area", 3, "stack", "data", "name", 4, "ngFor", "ngForOf"], ["field", "valor", "categoryField", "categoria", "type", "area", 3, "stack", "data", "name"]], template: function GraficoAreaComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-chart", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "kendo-chart-axis-defaults");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "kendo-chart-axis-defaults-labels", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "kendo-chart-value-axis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "kendo-chart-value-axis-item", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "kendo-chart-category-axis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "kendo-chart-category-axis-item", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "kendo-chart-series");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GraficoAreaComponent_kendo_chart_series_item_8_Template, 3, 3, "kendo-chart-series-item", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.titulo));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.descricaoEixoY));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx.categorias)("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.descricaoEixoX));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.serie);
        } }, directives: [_progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_3__["AxisDefaultsComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_3__["AxisDefaultsLabelsComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxisComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxisItemComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxisComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxisItemComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_3__["SeriesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_3__["SeriesItemComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_3__["SeriesTooltipComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]], encapsulation: 2 });
    return GraficoAreaComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraficoAreaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grafico-area',
                template: "\n    <kendo-chart [title]=\"{text: titulo}\">\n    <kendo-chart-axis-defaults>\n        <kendo-chart-axis-defaults-labels format=\"N0\"></kendo-chart-axis-defaults-labels>\n    </kendo-chart-axis-defaults>   \n    <kendo-chart-value-axis>\n        <kendo-chart-value-axis-item [title]=\"{text: descricaoEixoY }\">\n        </kendo-chart-value-axis-item>\n    </kendo-chart-value-axis>\n    <kendo-chart-category-axis>\n        <kendo-chart-category-axis-item\n            [categories]=\"categorias\"\n            [title]=\"{ text: descricaoEixoX }\"></kendo-chart-category-axis-item>\n    </kendo-chart-category-axis>\n    <kendo-chart-series>\n        <kendo-chart-series-item\n            *ngFor=\"let item of serie\"\n            [stack]=\"true\"\n            [data]=\"item.dados\"\n            [name]=\"item.nome\"\n            field=\"valor\"\n            categoryField=\"categoria\"\n            type=\"area\">\n            <kendo-chart-series-item-tooltip>\n                <ng-template let-dataItem=\"dataItem\">\n                    {{item.nome}}\n                    |\n                    {{dataItem.valor | number:'':'es'}}\n                </ng-template>\n            </kendo-chart-series-item-tooltip>\n        </kendo-chart-series-item>\n    </kendo-chart-series>\n</kendo-chart>"
            }]
    }], null, { titulo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], categorias: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], descricaoEixoX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], descricaoEixoY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], serie: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/componentes/grafico-percentual.component.ts":
/*!*********************************************************!*\
  !*** ./src/componentes/grafico-percentual.component.ts ***!
  \*********************************************************/
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
/* harmony import */ var _servicos_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicos/dashboard.service */ "./src/servicos/dashboard.service.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-angular-ripple */ "./node_modules/@progress/kendo-angular-ripple/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _componentes_card_percentual_texto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../componentes/card-percentual-texto.component */ "./src/componentes/card-percentual-texto.component.ts");
/* harmony import */ var _componentes_card_percentual_3linhas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../componentes/card-percentual-3linhas.component */ "./src/componentes/card-percentual-3linhas.component.ts");
/* harmony import */ var _componentes_card_percentual_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../componentes/card-percentual.component */ "./src/componentes/card-percentual.component.ts");
/* harmony import */ var _componentes_card_numerico_basico_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../componentes/card-numerico-basico.component */ "./src/componentes/card-numerico-basico.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _componentes_grafico_area_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../componentes/grafico-area.component */ "./src/componentes/grafico-area.component.ts");
/* harmony import */ var _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-charts */ "./node_modules/@progress/kendo-angular-charts/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _componentes_grafico_percentual_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../componentes/grafico-percentual.component */ "./src/componentes/grafico-percentual.component.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_excel_export__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-excel-export */ "./node_modules/@progress/kendo-angular-excel-export/__ivy_ngcc__/dist/fesm2015/index.js");




















function DashboardComponent_app_grafico_percentual_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-grafico-percentual", 38);
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("serie", ctx_r0.espacoLivreSeries)("titulo", ctx_r0.espacoLivreTitulo)("categorias", ctx_r0.espacoLivreCategorias)("descricaoEixoX", ctx_r0.espacoLivreDescricaoEixoX);
} }
function DashboardComponent_kendo_chart_76_kendo_chart_series_item_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "number");
} if (rf & 2) {
    var dataItem_r13 = ctx.dataItem;
    var item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r11.nome, " | ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, dataItem_r13.valor), " ");
} }
function DashboardComponent_kendo_chart_76_kendo_chart_series_item_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-chart-series-item", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "kendo-chart-series-item-tooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_kendo_chart_76_kendo_chart_series_item_8_ng_template_2_Template, 2, 4, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r11.dados)("name", item_r11.nome)("color", item_r11.cor);
} }
var _c0 = function (a0) { return { text: a0 }; };
function DashboardComponent_kendo_chart_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-chart", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "kendo-chart-axis-defaults");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "kendo-chart-axis-defaults-labels", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "kendo-chart-value-axis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "kendo-chart-value-axis-item", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "kendo-chart-category-axis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "kendo-chart-category-axis-item", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "kendo-chart-series");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DashboardComponent_kendo_chart_76_kendo_chart_series_item_8_Template, 3, 3, "kendo-chart-series-item", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r1.previsaoRecursosTitulo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx_r1.previsaoRecursosCategorias)("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r1.previsaoRecursosDescricaoEixoX));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.previsaoRecursosSeries);
} }
function DashboardComponent_button_78_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_button_78_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.alterarVisaoRecursos("historico"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Hist\u00F3rico ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_button_79_Template(rf, ctx) { if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_button_79_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.alterarVisaoRecursos("previsao"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Previs\u00E3o ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_app_grafico_percentual_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-grafico-percentual", 44);
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("serie", ctx_r4.engajamentoPatologistasSeries)("titulo", ctx_r4.engajamentoPatologistasTitulo)("categorias", ctx_r4.engajamentoPatologistasCategorias)("descricaoEixoX", ctx_r4.engajamentoPatologistasDescricaoEixoX);
} }
function DashboardComponent_kendo_grid_86_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Exportar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_kendo_grid_86_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var dataItem_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, dataItem_r21.visualizadasPerc));
} }
function DashboardComponent_kendo_grid_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-grid", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_kendo_grid_86_ng_template_1_Template, 2, 0, "ng-template", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "kendo-grid-column", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "kendo-grid-column", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_kendo_grid_86_ng_template_4_Template, 3, 3, "ng-template", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "kendo-grid-excel", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "kendo-excelexport-column", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "kendo-excelexport-column", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "kendo-excelexport-column", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "kendo-excelexport-column", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "kendo-excelexport-column", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollable", true)("data", ctx_r5.ultilizacoes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 80);
} }
function DashboardComponent_button_88_Template(rf, ctx) { if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_button_88_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.alterarVisaoPatologistas("grafico"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Ver Gr\u00E1fico ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_button_89_Template(rf, ctx) { if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_button_89_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.alterarVisaoPatologistas("tabela"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Ver Tabela ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_kendo_chart_series_item_100_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "number");
} if (rf & 2) {
    var dataItem_r28 = ctx.dataItem;
    var item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r26.nome, " | ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, dataItem_r28.valor), " ");
} }
function DashboardComponent_kendo_chart_series_item_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-chart-series-item", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "kendo-chart-series-item-tooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_kendo_chart_series_item_100_ng_template_2_Template, 2, 4, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r26.dados)("name", item_r26.nome)("color", item_r26.cor);
} }
function DashboardComponent_kendo_chart_series_item_111_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "number");
} if (rf & 2) {
    var dataItem_r32 = ctx.dataItem;
    var item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r30.nome, " | ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, dataItem_r32.valor), " ");
} }
function DashboardComponent_kendo_chart_series_item_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-chart-series-item", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "kendo-chart-series-item-tooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_kendo_chart_series_item_111_ng_template_2_Template, 2, 4, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r30.dados)("name", item_r30.nome)("color", item_r30.cor);
} }
var _c1 = function () { return { width: 80 }; };
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dashboardService) {
        this.dashboardService = dashboardService;
        this.tipoConsulta = 1;
        this.apresentacaoPatologistas = "grafico";
        this.localConsulta = "geral";
        this.apresentacaoRecursos = 'historico';
        this.periodoSelecionado = false;
        this.valorPeriodoSelecionado = 'Selecione';
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
        this.carregarDados(this.tipoConsulta, this.localConsulta);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(30000).subscribe(function () {
            _this.carregarDados(_this.tipoConsulta, _this.localConsulta);
        });
    };
    DashboardComponent.prototype.alterarVisaoPatologistas = function (apresentacao) {
        this.apresentacaoPatologistas = apresentacao;
    };
    DashboardComponent.prototype.alterarVisaoRecursos = function (apresentacao) {
        this.apresentacaoRecursos = apresentacao;
    };
    DashboardComponent.prototype.carregarDados = function (tipoConsulta, local) {
        var _this = this;
        if (local != '') {
            this.localConsulta = local;
        }
        if (tipoConsulta == 0) {
            this.periodoSelecionado = false;
            var consulta = null;
            if (this.localConsulta === 'geral') {
                consulta = this.dadosLocal.geral;
            }
            else {
                consulta = this.dadosLocal.locais.filter(function (local) { return local.local === _this.localConsulta; })[0];
            }
            this.carregarDashboard(consulta);
        }
        else if (tipoConsulta == 6) {
            this.periodoSelecionado = true;
            this.tipoConsulta = tipoConsulta;
            this.dashboardService
                .obterDados(tipoConsulta, this.valorPeriodoSelecionado)
                .subscribe(function (dados) {
                var consulta = null;
                if (_this.localConsulta === 'geral') {
                    consulta = dados.geral;
                }
                else {
                    consulta = dados.locais.filter(function (local) { return local.local === _this.localConsulta; })[0];
                }
                _this.dadosLocal = dados;
                _this.meses = dados.meses;
                _this.carregarDashboard(consulta);
            });
        }
        else {
            this.valorPeriodoSelecionado = 'Selecione';
            this.periodoSelecionado = false;
            this.tipoConsulta = tipoConsulta;
            this.dashboardService
                .obterDados(tipoConsulta, '')
                .subscribe(function (dados) {
                var consulta = null;
                if (_this.localConsulta === 'geral') {
                    consulta = dados.geral;
                }
                else {
                    consulta = dados.locais.filter(function (local) { return local.local === _this.localConsulta; })[0];
                }
                _this.dadosLocal = dados;
                _this.meses = dados.meses;
                _this.carregarDashboard(consulta);
            });
        }
    };
    DashboardComponent.prototype.periodoAlterado = function (periodo) {
        console.log(periodo);
        console.log(this.periodoSelecionado);
        this.valorPeriodoSelecionado = periodo;
        this.carregarDados(6, '');
    };
    DashboardComponent.prototype.carregarPorPeriodo = function () {
        this.periodoSelecionado = true;
    };
    DashboardComponent.prototype.carregarDashboard = function (dados) {
        var _a, _b, _c, _d;
        this.ultilizacoes = dados.utilizacoes.sort(function (a, b) { return a.visualizadasPerc > b.visualizadasPerc ? -1 : 1; });
        this.titulo = dados.titulo;
        this.subtitulo = dados.subtitulo;
        this.processadoEm = dados.processadoEm;
        this.espacoTotal = dados.recursosTotais.espacoTotal;
        this.espacoLivre = dados.recursosTotais.espacoLivre;
        this.espacoLivrePercentual = dados.recursosTotais.espacoLivrePerc;
        this.quantidadeDigitalizas = dados.producaoTotais.digitalizadasQtde;
        this.quantidadeIntegradas = dados.producaoTotais.integradasQtde;
        this.quantidadeErros = dados.producaoTotais.erroCodigoBarrasQtde + dados.producaoTotais.erroQualidadeImagemQtde;
        this.percentualIntegracao = dados.producaoTotais.integradasPerc;
        this.quantidadeDistribuida = dados.utilizacaoTotais.distribuidasQtde;
        this.quantidadeVisualizada = dados.utilizacaoTotais.visualizadasQtde;
        this.percentualVisualizacao = dados.utilizacaoTotais.visualizadasPerc;
        this.espacoLivreTitulo = dados.graficoEspacoLivre.titulo;
        this.espacoLivreSeries = dados.graficoEspacoLivre.series;
        this.espacoLivreCategorias = dados.graficoEspacoLivre.categorias;
        this.espacoLivreDescricaoEixoX = dados.graficoEspacoLivre.descricaoEixoX;
        this.previsaoRecursosTitulo = (_a = dados.graficoPrevisaoRecursos) === null || _a === void 0 ? void 0 : _a.titulo;
        this.previsaoRecursosSeries = (_b = dados.graficoPrevisaoRecursos) === null || _b === void 0 ? void 0 : _b.series;
        this.previsaoRecursosCategorias = (_c = dados.graficoPrevisaoRecursos) === null || _c === void 0 ? void 0 : _c.categorias;
        this.previsaoRecursosDescricaoEixoX = (_d = dados.graficoPrevisaoRecursos) === null || _d === void 0 ? void 0 : _d.descricaoEixoX;
        this.producaoScannersTitulo = dados.graficoProducaoScanners.titulo;
        this.producaoScannersSeries = dados.graficoProducaoScanners.series;
        this.producaoScannersCategorias = dados.graficoProducaoScanners.categorias;
        this.producaoScannersDescricaoEixoX = dados.graficoProducaoScanners.descricaoEixoX;
        this.producaoScannersDescricaoEixoY = dados.graficoProducaoScanners.descricaoEixoY;
        this.performanceScannersTitulo = dados.graficoPerformanceScanners.titulo;
        this.performanceScannersSeries = dados.graficoPerformanceScanners.series;
        this.performanceScannersCategorias = dados.graficoPerformanceScanners.categorias;
        this.performanceScannersDescricaoEixoX = dados.graficoPerformanceScanners.descricaoEixoX;
        this.performanceScannersDescricaoEixoY = dados.graficoPerformanceScanners.descricaoEixoY;
        this.graficoAreaDigitalizacaoTitulo = dados.graficoAreaDigitalizacao.titulo;
        this.graficoAreaDigitalizacaoSeries = dados.graficoAreaDigitalizacao.series;
        this.graficoAreaDigitalizacaoCategorias = dados.graficoAreaDigitalizacao.categorias;
        this.graficoAreaDigitalizacaoDescricaoEixoX = dados.graficoAreaDigitalizacao.descricaoEixoX;
        this.graficoAreaDigitalizacaoDescricaoEixoY = "MM2";
        this.engajamentoPatologistasSeries = dados.graficoEngajamentoPatologistas.series;
        this.engajamentoPatologistasCategorias = dados.graficoEngajamentoPatologistas.categorias;
        this.engajamentoPatologistasTitulo = dados.graficoEngajamentoPatologistas.titulo;
        this.engajamentoPatologistasDescricaoEixoX = dados.graficoEngajamentoPatologistas.descricaoEixoX;
        this.indicadoresTempoDigitalizacaoValorMedio = dados.indicadoresTotais.tempoDigitalizacaoValorMedio;
        this.indicadoresLaminasPorHoraValorMedio = dados.indicadoresTotais.laminasPorHoraValorMedio;
        this.indicadoresAreaDigitalizacaoValorMedio = dados.indicadoresTotais.areaDigitalizacaoValorMedio;
        this.indicadoresLaminasPorHoraValorMedioAjustado = dados.indicadoresTotais.laminasPorHoraValorMedioAjustado;
        this.areaDigitalizacaoValorMedio = dados.exameAreasTotais.areaDigitalizacaoValorMedio;
        this.areaDigitalizacaoValorMaximo = dados.exameAreasTotais.areaDigitalizacaoValorMaximo;
        this.areaDigitalizacaoValorMinimo = dados.exameAreasTotais.areaDigitalizacaoValorMinimo;
    };
    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicos_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"])); };
    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], hostVars: 3, hostBindings: function DashboardComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.get_id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.get_class);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_servicos_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]])], decls: 112, vars: 72, consts: [["id", "header", 1, "row", "justify-content-md-center"], [1, "col-sm", "text-sm-left", "p-0", "p-sm-3"], [1, "h1", 2, "color", "seagreen", "font-size", "25px"], [1, "h4"], [1, "col-sm", "text-sm-right", "p-0", "p-sm-3"], [1, "col-sm", "text-sm-right", "p-0", "p-sm-2"], [3, "selection"], ["kendoRippleContainer", "kendoRippleContainer", "kendoButton", "kendoButton", 3, "togglable", "click"], ["kendoRippleContainer", "kendoRippleContainer", "kendoButton", "kendoButton", 3, "togglable", "selected", "click"], [2, "width", "120px", 3, "popupSettings", "disabled", "data", "value", "valueChange"], [1, "k-card-deck", 2, "display", "flex", "flex-wrap", "wrap", "justify-content", "space-evenly"], [1, "k-card", 2, "color", "orangered", "min-height", "200px", "width", "300px"], [1, "k-card-body"], ["titulo", "Espa\u00E7o Livre", "subTitulo1", "Espa\u00E7o Total", "subTitulo2", "Espa\u00E7o Livre", 3, "valorPercentual", "texto1", "texto2"], [1, "k-card", 2, "color", "darkgreen", "min-height", "200px", "width", "300px"], ["titulo", "Integra\u00E7\u00E3o", "subTitulo1", "Digitalizadas", "subTitulo2", "Integradas", "subTitulo3", "Erros", 3, "valorPercentual", "valor1", "valor2", "valor3"], [1, "k-card", 2, "color", "saddlebrown", "min-height", "200px", "width", "300px"], ["titulo", "Visualiza\u00E7\u00E3o", "subTitulo1", "Distribu\u00EDdas", "subTitulo2", "Visualizadas", 3, "valorPercentual", "valor1", "valor2"], [1, "k-card", 2, "color", "midnightblue", "min-height", "200px", "width", "300px"], ["titulo", "L\u00E2minas/hora", "subTitulo", "Tempo de digitaliza\u00E7\u00E3o", "unidadeMedida", "segundos", "subTitulo2", "\u00C1rea de digitaliza\u00E7\u00E3o", "unidadeMedida2", "mm&sup2;", 3, "valorPrincipal", "valor", "valor2"], [1, "k-card", 2, "color", "gray", "min-height", "200px", "width", "300px"], [1, "comp-label"], [1, "issues-count", 2, "font-size", "80px"], [2, "font-size", "30px"], [1, "issues-label", 2, "font-size", "18px"], [1, "m-0", "medium", "text-muted"], [1, "k-card", 2, "width", "600px"], ["tipo", "column", 3, "serie", "titulo", "categorias", "descricaoEixoX", 4, "ngIf"], [3, "title", 4, "ngIf"], ["orientation", "horizontal", "layout", "end"], ["class", "k-button k-primary k-flat", 3, "click", 4, "ngIf"], [3, "serie", "titulo", "descricaoEixoY", "categorias", "descricaoEixoX"], ["tipo", "line", 3, "serie", "titulo", "categorias", "descricaoEixoX", 4, "ngIf"], ["style", "height: 400px;", 3, "scrollable", "data", 4, "ngIf"], [3, "title"], ["format", "N0"], [3, "categories", "title"], ["field", "valor", "categoryField", "categoria", "type", "line", 3, "data", "name", "color", 4, "ngFor", "ngForOf"], ["tipo", "column", 3, "serie", "titulo", "categorias", "descricaoEixoX"], ["format", "P0"], ["min", "0", "max", "1"], ["field", "valor", "categoryField", "categoria", "type", "line", 3, "data", "name", "color"], [1, "k-button", "k-primary", "k-flat", 3, "click"], [1, "k-icon"], ["tipo", "line", 3, "serie", "titulo", "categorias", "descricaoEixoX"], [2, "height", "400px", 3, "scrollable", "data"], ["kendoGridToolbarTemplate", "kendoGridToolbarTemplate"], ["field", "nomPatologista", "title", "Patologista", 1, "price-col", 3, "width"], ["field", "visualizadasPerc", "title", "%", 1, "price-col", 3, "width"], ["kendoGridCellTemplate", ""], ["fileName", "dashboard-engajamento-patologistas.xlsx"], ["field", "codPatologista", "title", "C\u00F3digo"], ["field", "nomPatologista", "title", "Nome"], ["field", "distribuidasQtde", "title", "Distribuidas"], ["field", "visualizadasQtde", "title", "Visualizadas"], ["field", "visualizadasPerc", "title", "Visualizadas %"], ["type", "button", "kendoGridExcelCommand", "kendoGridExcelCommand", "icon", "file-excel"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "kendo-buttongroup", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_11_listener() { return ctx.carregarDados(0, "MG"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " MG ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_13_listener() { return ctx.carregarDados(0, "SP"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " SP ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_15_listener() { return ctx.carregarDados(0, "geral"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Geral ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "kendo-buttongroup", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_20_listener() { return ctx.carregarDados(1, ""); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Dia ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_22_listener() { return ctx.carregarDados(2, ""); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Semana ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_24_listener() { return ctx.carregarDados(3, ""); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " M\u00EAs ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_26_listener() { return ctx.carregarDados(4, ""); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Ano ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_28_listener() { return ctx.carregarDados(5, ""); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " 12 meses ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_30_listener() { return ctx.carregarPorPeriodo(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Per\u00EDodo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "kendo-dropdownlist", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DashboardComponent_Template_kendo_dropdownlist_valueChange_34_listener($event) { return ctx.periodoAlterado($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-card-percentual-texto", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-card-percentual-3linhas", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-card-percentual", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "app-card-numerico-basico", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "mm");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "sup");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\u00C1rea de digitaliza\u00E7\u00E3o");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "mm");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "sup");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "mm");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "sup");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, DashboardComponent_app_grafico_percentual_75_Template, 1, 4, "app-grafico-percentual", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, DashboardComponent_kendo_chart_76_Template, 9, 8, "kendo-chart", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "kendo-card-actions", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, DashboardComponent_button_78_Template, 3, 0, "button", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, DashboardComponent_button_79_Template, 3, 0, "button", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "app-grafico-area", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, DashboardComponent_app_grafico_percentual_85_Template, 1, 4, "app-grafico-percentual", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, DashboardComponent_kendo_grid_86_Template, 11, 4, "kendo-grid", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "kendo-card-actions", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, DashboardComponent_button_88_Template, 3, 0, "button", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, DashboardComponent_button_89_Template, 3, 0, "button", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "kendo-chart", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "kendo-chart-axis-defaults");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "kendo-chart-axis-defaults-labels", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "kendo-chart-value-axis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "kendo-chart-value-axis-item", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "kendo-chart-category-axis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "kendo-chart-category-axis-item", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "kendo-chart-series");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, DashboardComponent_kendo_chart_series_item_100_Template, 3, 3, "kendo-chart-series-item", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "kendo-chart", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "kendo-chart-axis-defaults");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "kendo-chart-axis-defaults-labels", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "kendo-chart-value-axis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "kendo-chart-value-axis-item", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "kendo-chart-category-axis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "kendo-chart-category-axis-item", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "kendo-chart-series");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, DashboardComponent_kendo_chart_series_item_111_Template, 3, 3, "kendo-chart-series-item", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subtitulo);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Processado em: ", ctx.processadoEm, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selection", "single");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("togglable", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("togglable", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("togglable", true)("selected", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("togglable", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popupSettings", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](59, _c1))("disabled", ctx.periodoSelecionado == false)("data", ctx.meses)("value", ctx.valorPeriodoSelecionado);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("valorPercentual", ctx.espacoLivrePercentual)("texto1", ctx.espacoTotal)("texto2", ctx.espacoLivre);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("valorPercentual", ctx.percentualIntegracao)("valor1", ctx.quantidadeDigitalizas)("valor2", ctx.quantidadeIntegradas)("valor3", ctx.quantidadeErros);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("valorPercentual", ctx.percentualVisualizacao)("valor1", ctx.quantidadeDistribuida)("valor2", ctx.quantidadeVisualizada);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("valorPrincipal", ctx.indicadoresLaminasPorHoraValorMedio)("valor", ctx.indicadoresTempoDigitalizacaoValorMedio)("valor2", ctx.indicadoresAreaDigitalizacaoValorMedio);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.areaDigitalizacaoValorMedio);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Valor m\u00E1ximo: ", ctx.areaDigitalizacaoValorMaximo, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Valor m\u00EDnimo: ", ctx.areaDigitalizacaoValorMinimo, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.apresentacaoRecursos == "historico");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.apresentacaoRecursos == "previsao");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.apresentacaoRecursos === "previsao");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.apresentacaoRecursos === "historico");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("serie", ctx.producaoScannersSeries)("titulo", ctx.producaoScannersTitulo)("descricaoEixoY", ctx.producaoScannersDescricaoEixoY)("categorias", ctx.producaoScannersCategorias)("descricaoEixoX", ctx.producaoScannersDescricaoEixoX);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.apresentacaoPatologistas == "grafico");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.apresentacaoPatologistas == "tabela");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.apresentacaoPatologistas === "tabela");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.apresentacaoPatologistas === "grafico");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](60, _c0, ctx.performanceScannersTitulo));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](62, _c0, ctx.performanceScannersDescricaoEixoY));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx.performanceScannersCategorias)("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](64, _c0, ctx.performanceScannersDescricaoEixoX));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.performanceScannersSeries);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](66, _c0, ctx.graficoAreaDigitalizacaoTitulo));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](68, _c0, ctx.graficoAreaDigitalizacaoDescricaoEixoY));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx.graficoAreaDigitalizacaoCategorias)("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](70, _c0, ctx.graficoAreaDigitalizacaoDescricaoEixoX));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.graficoAreaDigitalizacaoSeries);
        } }, directives: [_progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"], _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_4__["Button"], _progress_kendo_angular_ripple__WEBPACK_IMPORTED_MODULE_5__["RippleContainerDirective"], _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_6__["DropDownListComponent"], _componentes_card_percentual_texto_component__WEBPACK_IMPORTED_MODULE_7__["CardPercentualTextoComponent"], _componentes_card_percentual_3linhas_component__WEBPACK_IMPORTED_MODULE_8__["CardPercentual3LinhasComponent"], _componentes_card_percentual_component__WEBPACK_IMPORTED_MODULE_9__["CardPercentualComponent"], _componentes_card_numerico_basico_component__WEBPACK_IMPORTED_MODULE_10__["CardNumericoBasicoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_12__["CardActionsComponent"], _componentes_grafico_area_component__WEBPACK_IMPORTED_MODULE_13__["GraficoAreaComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_14__["ChartComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_14__["AxisDefaultsComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_14__["AxisDefaultsLabelsComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_14__["ValueAxisComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_14__["ValueAxisItemComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_14__["CategoryAxisComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_14__["CategoryAxisItemComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_14__["SeriesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _componentes_grafico_percentual_component__WEBPACK_IMPORTED_MODULE_15__["GraficoPercentualComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_14__["SeriesItemComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_14__["SeriesTooltipComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__["GridComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__["ToolbarTemplateDirective"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__["ColumnComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__["CellTemplateDirective"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__["ExcelComponent"], _progress_kendo_angular_excel_export__WEBPACK_IMPORTED_MODULE_17__["ColumnComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__["ExcelCommandDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["PercentPipe"]], encapsulation: 2 });
    return DashboardComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                providers: [_servicos_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                templateUrl: './dashboard.template.html'
            }]
    }], function () { return [{ type: _servicos_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"] }]; }, { get_id: [{
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

/***/ "./src/servicos/dashboard.service.ts":
/*!*******************************************!*\
  !*** ./src/servicos/dashboard.service.ts ***!
  \*******************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




// const baseUrl = 'http://dgkdiagsystem:5005/api/dashboard';
//const baseUrl = 'http://localhost:5000/api/dashboard'; 
var baseUrl = 'https://demo5010569.mockable.io/api/dashboard';
var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': "application/json" });
var DashboardService = /** @class */ (function () {
    function DashboardService(http) {
        this.http = http;
    }
    DashboardService.prototype.obterDados = function (tipoConsulta, periodoReferencia) {
        // if (periodoReferencia != '') {
        //     return this.http.get<DashboardRaiz>(`${baseUrl}/?tipoConsulta=${tipoConsulta}&periodoReferencia=${periodoReferencia}`, { headers });
        // } else {
        //     return this.http.get<DashboardRaiz>(`${baseUrl}/?tipoConsulta=${tipoConsulta}`, { headers });            
        // }
        return this.http.get("" + baseUrl, { headers: headers });
    };
    DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
    DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac });
    return DashboardService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\augus\source\repos\DashboardApi\src\WebApp\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map