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
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/dashboard/dashboard.component.ts");
/* harmony import */ var _componentes_grafico_percentual_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./componentes/grafico-percentual.component */ "./src/componentes/grafico-percentual.component.ts");
/* harmony import */ var _componentes_card_percentual_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./componentes/card-percentual.component */ "./src/componentes/card-percentual.component.ts");
/* harmony import */ var _componentes_card_percentual_texto_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./componentes/card-percentual-texto.component */ "./src/componentes/card-percentual-texto.component.ts");
/* harmony import */ var _componentes_card_numerico_basico_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./componentes/card-numerico-basico.component */ "./src/componentes/card-numerico-basico.component.ts");
/* harmony import */ var _componentes_grafico_area_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./componentes/grafico-area.component */ "./src/componentes/grafico-area.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../environments/environment */ "./environments/environment.ts");





// vendor dependencies


// app



// Kendo UI







// Components






// environment




_common_index__WEBPACK_IMPORTED_MODULE_7__["Config"].PLATFORM_TARGET = _common_index__WEBPACK_IMPORTED_MODULE_7__["Config"].PLATFORMS.WEB;
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register("ngsw-worker.js", { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].production }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_11__["ChartsModule"],
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_10__["GridModule"],
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_10__["ExcelModule"],
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

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
        _componentes_grafico_percentual_component__WEBPACK_IMPORTED_MODULE_18__["GraficoPercentualComponent"],
        _componentes_grafico_area_component__WEBPACK_IMPORTED_MODULE_22__["GraficoAreaComponent"],
        _componentes_card_percentual_component__WEBPACK_IMPORTED_MODULE_19__["CardPercentualComponent"],
        _componentes_card_percentual_texto_component__WEBPACK_IMPORTED_MODULE_20__["CardPercentualTextoComponent"],
        _componentes_card_numerico_basico_component__WEBPACK_IMPORTED_MODULE_21__["CardNumericoBasicoComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_11__["ChartsModule"],
        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_10__["GridModule"],
        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_10__["ExcelModule"],
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
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
                    _componentes_grafico_percentual_component__WEBPACK_IMPORTED_MODULE_18__["GraficoPercentualComponent"],
                    _componentes_grafico_area_component__WEBPACK_IMPORTED_MODULE_22__["GraficoAreaComponent"],
                    _componentes_card_percentual_component__WEBPACK_IMPORTED_MODULE_19__["CardPercentualComponent"],
                    _componentes_card_percentual_texto_component__WEBPACK_IMPORTED_MODULE_20__["CardPercentualTextoComponent"],
                    _componentes_card_numerico_basico_component__WEBPACK_IMPORTED_MODULE_21__["CardNumericoBasicoComponent"]
                ],
                imports: [
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register("ngsw-worker.js", { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].production }),
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_11__["ChartsModule"],
                    _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_10__["GridModule"],
                    _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_10__["ExcelModule"],
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
    CardNumericoBasicoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardNumericoBasicoComponent, selectors: [["app-card-numerico-basico"]], inputs: { valorPrincipal: "valorPrincipal", titulo: "titulo", subTitulo: "subTitulo", valor: "valor", unidadeMedida: "unidadeMedida" }, decls: 8, vars: 7, consts: [[1, "comp-label"], [1, "issues-count", 2, "font-size", "80px"], [1, "issues-label", 2, "font-size", "18px"], [1, "m-0", "medium", "text-muted"]], template: function CardNumericoBasicoComponent_Template(rf, ctx) { if (rf & 1) {
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
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, ctx.valorPrincipal), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx.subTitulo, ": ", ctx.valor, " ", ctx.unidadeMedida, "\n");
        } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]], encapsulation: 2 });
    return CardNumericoBasicoComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardNumericoBasicoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-numerico-basico',
                template: "\n    <span class=\"comp-label\">\n    <div class=\"issues-count\" style=\"font-size: 80px;\">{{ valorPrincipal | number }}\n    </div>\n    <div class=\"issues-label\" style=\"font-size: 18px;\">{{titulo}}</div>\n</span>\n<p class=\"m-0 medium text-muted\">\n    {{subTitulo}}:\n    {{valor}}\n    {{unidadeMedida}}\n</p>"
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
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-ripple */ "./node_modules/@progress/kendo-angular-ripple/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _componentes_card_percentual_texto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componentes/card-percentual-texto.component */ "./src/componentes/card-percentual-texto.component.ts");
/* harmony import */ var _componentes_card_percentual_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../componentes/card-percentual.component */ "./src/componentes/card-percentual.component.ts");
/* harmony import */ var _componentes_card_numerico_basico_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../componentes/card-numerico-basico.component */ "./src/componentes/card-numerico-basico.component.ts");
/* harmony import */ var _componentes_grafico_percentual_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../componentes/grafico-percentual.component */ "./src/componentes/grafico-percentual.component.ts");
/* harmony import */ var _componentes_grafico_area_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../componentes/grafico-area.component */ "./src/componentes/grafico-area.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-charts */ "./node_modules/@progress/kendo-angular-charts/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_excel_export__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-excel-export */ "./node_modules/@progress/kendo-angular-excel-export/__ivy_ngcc__/dist/fesm2015/index.js");

















function DashboardComponent_app_grafico_percentual_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-grafico-percentual", 30);
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("serie", ctx_r0.engajamentoPatologistasSeries)("titulo", ctx_r0.engajamentoPatologistasTitulo)("categorias", ctx_r0.engajamentoPatologistasCategorias)("descricaoEixoX", ctx_r0.engajamentoPatologistasDescricaoEixoX);
} }
function DashboardComponent_kendo_grid_44_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Exportar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_kendo_grid_44_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var dataItem_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, dataItem_r7.visualizadasPerc));
} }
function DashboardComponent_kendo_grid_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-grid", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_kendo_grid_44_ng_template_1_Template, 2, 0, "ng-template", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "kendo-grid-column", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "kendo-grid-column", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_kendo_grid_44_ng_template_4_Template, 3, 3, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "kendo-grid-excel", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "kendo-excelexport-column", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "kendo-excelexport-column", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "kendo-excelexport-column", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "kendo-excelexport-column", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "kendo-excelexport-column", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollable", true)("data", ctx_r1.ultilizacoes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 80);
} }
function DashboardComponent_button_46_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_button_46_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.alterarVisaoPatologistas("grafico"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Ver Gr\u00E1fico ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_button_47_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_button_47_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.alterarVisaoPatologistas("tabela"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Ver Tabela ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_kendo_chart_series_item_56_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "number");
} if (rf & 2) {
    var dataItem_r14 = ctx.dataItem;
    var item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r12.nome, " | ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, dataItem_r14.valor), " ");
} }
function DashboardComponent_kendo_chart_series_item_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-chart-series-item", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "kendo-chart-series-item-tooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_kendo_chart_series_item_56_ng_template_2_Template, 2, 4, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r12.dados)("name", item_r12.nome)("color", item_r12.cor);
} }
var _c0 = function (a0) { return { text: a0 }; };
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dashboardService) {
        var _this = this;
        this.dashboardService = dashboardService;
        this.isLoading = true;
        this.allData = function () {
            console.log(_this.ultilizacoes);
            return _this.ultilizacoes;
        };
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
        this.apresentacaoPatologistas = "grafico";
        this.carregarDados(1);
    };
    DashboardComponent.prototype.alterarVisaoPatologistas = function (apresentacao) {
        this.apresentacaoPatologistas = apresentacao;
    };
    DashboardComponent.prototype.carregarDados = function (tipoConsulta) {
        var _this = this;
        this.dashboardService
            .obterDados(tipoConsulta)
            .subscribe(function (dados) {
            _this.ultilizacoes = dados.utilizacoes.sort(function (a, b) { return a.visualizadasPerc > b.visualizadasPerc ? -1 : 1; });
            _this.titulo = dados.titulo;
            _this.subtitulo = dados.subtitulo;
            _this.processadoEm = dados.processadoEm;
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
            _this.producaoScannersDescricaoEixoX = dados.graficoProducaoScanners.descricaoEixoX;
            _this.performanceScannersTitulo = dados.graficoPerformanceScanners.titulo;
            _this.performanceScannersSeries = dados.graficoPerformanceScanners.series;
            _this.performanceScannersCategorias = dados.graficoPerformanceScanners.categorias;
            _this.performanceScannersDescricaoEixoX = dados.graficoPerformanceScanners.descricaoEixoX;
            _this.engajamentoPatologistasSeries = dados.graficoEngajamentoPatologistas.series;
            _this.engajamentoPatologistasCategorias = dados.graficoEngajamentoPatologistas.categorias;
            _this.engajamentoPatologistasTitulo = dados.graficoEngajamentoPatologistas.titulo;
            _this.engajamentoPatologistasDescricaoEixoX = dados.graficoEngajamentoPatologistas.descricaoEixoX;
            _this.indicadoresTempoDigitalizacaoValorMedio = dados.indicadoresTotais.tempoDigitalizacaoValorMedio;
            _this.indicadoresLaminasPorHoraValorMedio = dados.indicadoresTotais.laminasPorHoraValorMedio;
        }, function (err) { return _this.isLoading = false; });
    };
    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicos_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"])); };
    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], hostVars: 3, hostBindings: function DashboardComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.get_id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.get_class);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_servicos_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]])], decls: 57, vars: 41, consts: [["id", "header", 1, "row", "justify-content-md-center"], [1, "col-sm", "text-sm-left", "p-0", "p-sm-3"], [1, "h1", 2, "color", "seagreen", "font-size", "25px"], [1, "h4"], [1, "col-sm", "text-sm-right", "p-0", "p-sm-3"], [3, "selection"], ["kendoRippleContainer", "kendoRippleContainer", "kendoButton", "kendoButton", 3, "togglable", "selected", "click"], ["kendoRippleContainer", "kendoRippleContainer", "kendoButton", "kendoButton", 3, "togglable", "click"], [1, "col-sm", "text-sm-right", "p-0", "p-sm-2"], [1, "k-card-deck", 2, "display", "flex", "flex-wrap", "wrap", "justify-content", "space-evenly"], [1, "k-card", 2, "color", "orangered", "min-height", "200px", "width", "300px"], [1, "k-card-body"], ["titulo", "Espa\u00E7o Livre", "subTitulo1", "Espa\u00E7o Total", "subTitulo2", "Espa\u00E7o Livre", 3, "valorPercentual", "texto1", "texto2"], [1, "k-card", 2, "color", "darkgreen", "min-height", "200px", "width", "300px"], ["titulo", "Integra\u00E7\u00E3o", "subTitulo1", "Digitalizadas", "subTitulo2", "Integradas", 3, "valorPercentual", "valor1", "valor2"], [1, "k-card", 2, "color", "saddlebrown", "min-height", "200px", "width", "300px"], ["titulo", "Visualiza\u00E7\u00E3o", "subTitulo1", "Distribu\u00EDdas", "subTitulo2", "Visualizadas", 3, "valorPercentual", "valor1", "valor2"], [1, "k-card", 2, "color", "midnightblue", "min-height", "200px", "width", "300px"], ["titulo", "L\u00E2minas/hr", "subTitulo", "Tempo de digitaliza\u00E7\u00E3o", "unidadeMedida", "segundos", 3, "valorPrincipal", "valor"], [1, "k-card", 2, "width", "600px"], ["tipo", "column", 3, "serie", "titulo", "categorias", "descricaoEixoX"], [3, "serie", "titulo", "categorias", "descricaoEixoX"], ["tipo", "line", 3, "serie", "titulo", "categorias", "descricaoEixoX", 4, "ngIf"], ["style", "height: 400px;", 3, "scrollable", "data", 4, "ngIf"], ["orientation", "horizontal", "layout", "end"], ["class", "k-button k-primary k-flat", 3, "click", 4, "ngIf"], [3, "title"], ["format", "N0"], [3, "categories", "title"], ["field", "valor", "categoryField", "categoria", "type", "line", 3, "data", "name", "color", 4, "ngFor", "ngForOf"], ["tipo", "line", 3, "serie", "titulo", "categorias", "descricaoEixoX"], [2, "height", "400px", 3, "scrollable", "data"], ["kendoGridToolbarTemplate", ""], ["field", "nomPatologista", "title", "Patologista", 1, "price-col", 3, "width"], ["field", "visualizadasPerc", "title", "%", 1, "price-col", 3, "width"], ["kendoGridCellTemplate", ""], ["fileName", "dashboard-engajamento-patologistas.xlsx"], ["field", "codPatologista", "title", "C\u00F3digo"], ["field", "nomPatologista", "title", "Nome"], ["field", "distribuidasQtde", "title", "Distribuidas"], ["field", "visualizadasQtde", "title", "Visualizadas"], ["field", "visualizadasPerc", "title", "Visualizadas %"], ["type", "button", "kendoGridExcelCommand", "kendoGridExcelCommand", "icon", "file-excel"], [1, "k-button", "k-primary", "k-flat", 3, "click"], [1, "k-icon"], ["field", "valor", "categoryField", "categoria", "type", "line", 3, "data", "name", "color"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "kendo-buttongroup", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_8_listener() { return ctx.carregarDados(1); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Dia ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_10_listener() { return ctx.carregarDados(2); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Semana ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_12_listener() { return ctx.carregarDados(3); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " M\u00EAs ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_14_listener() { return ctx.carregarDados(4); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Ano ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_16_listener() { return ctx.carregarDados(5); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " 12 meses ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-card-percentual-texto", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-card-percentual", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-card-percentual", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-card-numerico-basico", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-grafico-percentual", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-grafico-area", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, DashboardComponent_app_grafico_percentual_43_Template, 1, 4, "app-grafico-percentual", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, DashboardComponent_kendo_grid_44_Template, 11, 4, "kendo-grid", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "kendo-card-actions", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, DashboardComponent_button_46_Template, 3, 0, "button", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, DashboardComponent_button_47_Template, 3, 0, "button", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "kendo-chart", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "kendo-chart-axis-defaults");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "kendo-chart-axis-defaults-labels", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "kendo-chart-category-axis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "kendo-chart-category-axis-item", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "kendo-chart-series");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, DashboardComponent_kendo_chart_series_item_56_Template, 3, 3, "kendo-chart-series-item", 29);
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Processado em: ", ctx.processadoEm, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("valorPercentual", ctx.espacoLivrePercentual)("texto1", ctx.espacoTotal)("texto2", ctx.espacoLivre);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("valorPercentual", ctx.percentualIntegracao)("valor1", ctx.quantidadeDigitalizas)("valor2", ctx.quantidadeIntegradas);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("valorPercentual", ctx.percentualVisualizacao)("valor1", ctx.quantidadeDistribuida)("valor2", ctx.quantidadeVisualizada);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("valorPrincipal", ctx.indicadoresLaminasPorHoraValorMedio)("valor", ctx.indicadoresTempoDigitalizacaoValorMedio);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("serie", ctx.espacoLivreSeries)("titulo", ctx.espacoLivreTitulo)("categorias", ctx.espacoLivreCategorias)("descricaoEixoX", ctx.espacoLivreDescricaoEixoX);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("serie", ctx.producaoScannersSeries)("titulo", ctx.producaoScannersTitulo)("categorias", ctx.producaoScannersCategorias)("descricaoEixoX", ctx.producaoScannersDescricaoEixoX);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.apresentacaoPatologistas == "grafico");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.apresentacaoPatologistas == "tabela");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.apresentacaoPatologistas === "tabela");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.apresentacaoPatologistas === "grafico");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c0, ctx.performanceScannersTitulo));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx.performanceScannersCategorias)("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](39, _c0, ctx.performanceScannersDescricaoEixoX));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.performanceScannersSeries);
        } }, directives: [_progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_3__["Button"], _progress_kendo_angular_ripple__WEBPACK_IMPORTED_MODULE_4__["RippleContainerDirective"], _componentes_card_percentual_texto_component__WEBPACK_IMPORTED_MODULE_5__["CardPercentualTextoComponent"], _componentes_card_percentual_component__WEBPACK_IMPORTED_MODULE_6__["CardPercentualComponent"], _componentes_card_numerico_basico_component__WEBPACK_IMPORTED_MODULE_7__["CardNumericoBasicoComponent"], _componentes_grafico_percentual_component__WEBPACK_IMPORTED_MODULE_8__["GraficoPercentualComponent"], _componentes_grafico_area_component__WEBPACK_IMPORTED_MODULE_9__["GraficoAreaComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_11__["CardActionsComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_12__["ChartComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_12__["AxisDefaultsComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_12__["AxisDefaultsLabelsComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_12__["CategoryAxisComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_12__["CategoryAxisItemComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_12__["SeriesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_13__["GridComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_13__["ToolbarTemplateDirective"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_13__["ColumnComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_13__["CellTemplateDirective"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_13__["ExcelComponent"], _progress_kendo_angular_excel_export__WEBPACK_IMPORTED_MODULE_14__["ColumnComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_13__["ExcelCommandDirective"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_12__["SeriesItemComponent"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_12__["SeriesTooltipComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DecimalPipe"]], encapsulation: 2 });
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




var baseUrl = 'http://dgkdiagsystem:5005/api/dashboard';
var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': "application/json" });
var DashboardService = /** @class */ (function () {
    function DashboardService(http) {
        this.http = http;
    }
    DashboardService.prototype.obterDados = function (tipoConsulta) {
        return this.http.get(baseUrl + "/?tipoConsulta=" + tipoConsulta, { headers: headers });
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

module.exports = __webpack_require__(/*! C:\Users\jacques.zetune\source\repos\DashboardApi\src\WebApp\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map