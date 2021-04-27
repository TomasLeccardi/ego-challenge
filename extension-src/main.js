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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _main_car_models_car_models_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/car-models/car-models.component */ "./src/app/main/car-models/car-models.component.ts");
/* harmony import */ var _main_details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/details/details.component */ "./src/app/main/details/details.component.ts");






const routes = [
    { path: '', pathMatch: 'full', component: _main_car_models_car_models_component__WEBPACK_IMPORTED_MODULE_2__["CarModelsComponent"] },
    { path: 'details/:modelId', pathMatch: 'full', component: _main_details_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"] },
    { path: '**', redirectTo: '' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/nav-bar/nav-bar.component */ "./src/app/shared/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/side-bar/side-bar.component */ "./src/app/shared/side-bar/side-bar.component.ts");






function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-side-bar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("desactive", function AppComponent_div_1_Template_app_side_bar_desactive_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.closeSideBar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor() {
        this.title = 'ego';
    }
    openSideBar() {
        this.isActive = true;
    }
    closeSideBar() {
        this.isActive = false;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [[3, "open"], [4, "ngIf"], [1, "footer"], [3, "desactive"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-nav-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("open", function AppComponent_Template_app_nav_bar_open_0_listener() { return ctx.openSideBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isActive);
    } }, directives: [_shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_4__["SideBarComponent"]], styles: [".footer[_ngcontent-%COMP%] {\n  height: 50px;\n  margin-top: auto;\n  background-color: #000000;\n  margin-top: 4%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzovVXNlcnMvdG9tYXMvT25lRHJpdmUvRG9jdW1lbnRvcy9Qcm95ZWN0b3MvZWdvL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLXRvcDogNCU7XG59XG4iLCIuZm9vdGVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW4tdG9wOiA0JTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MaterialModule, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/nav-bar/nav-bar.component */ "./src/app/shared/nav-bar/nav-bar.component.ts");
/* harmony import */ var _main_car_models_car_models_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/car-models/car-models.component */ "./src/app/main/car-models/car-models.component.ts");
/* harmony import */ var _main_details_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/details/details.component */ "./src/app/main/details/details.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/side-bar/side-bar.component */ "./src/app/shared/side-bar/side-bar.component.ts");
















class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                exports: [
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"]
                ],
                declarations: [],
            }]
    }], null, null); })();
;
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            MaterialModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _main_details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"],
        _main_car_models_car_models_component__WEBPACK_IMPORTED_MODULE_5__["CarModelsComponent"],
        _shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"],
        _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_14__["SideBarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _main_details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"],
                    _main_car_models_car_models_component__WEBPACK_IMPORTED_MODULE_5__["CarModelsComponent"],
                    _shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"],
                    _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_14__["SideBarComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    MaterialModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/main/car-models/car-models.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/car-models/car-models.component.ts ***!
  \*********************************************************/
/*! exports provided: CarModelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarModelsComponent", function() { return CarModelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_car_models_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/car-models.service */ "./src/app/services/car-models.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function CarModelsComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarModelsComponent_div_64_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const car_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.navigate("details/" + car_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ver Modelo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const car_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](car_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", car_r1.year, " | ", car_r1.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r0.domain, "", car_r1.photo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class CarModelsComponent {
    constructor(_carModelsService, router) {
        this._carModelsService = _carModelsService;
        this.router = router;
        this.allCars = [];
        this.loadedCars = [];
        this.filter = [];
        this.activeFilter = "Todos";
        this.domain = "http://challenge.agenciaego.tech";
    }
    ngOnInit() {
        this._carModelsService
            .getAll()
            .then((cars) => {
            this.allCars = cars;
            this.loadedCars = cars;
        })
            .catch((error) => { });
    }
    orderBy(event) {
        let sort = event.value;
        switch (sort) {
            case 'lowestPrice':
                return this.allCars.sort((a, b) => a.price - b.price);
            case 'higherPrice':
                return this.allCars.sort((a, b) => b.price - a.price);
            case 'newest':
                return this.allCars.sort((a, b) => b.year - a.year);
            case 'oldest':
                return this.allCars.sort((a, b) => a.year - b.year);
            default:
                return this.allCars;
        }
    }
    filterBy(event, comesFromSelect) {
        this.allCars = this.loadedCars;
        if (comesFromSelect)
            this.activeFilter = event.value;
        else
            this.activeFilter = event.target.value;
        if (this.activeFilter != 'Todos')
            this.allCars = this.allCars.filter((c) => c.segment == this.activeFilter);
        else
            return this.allCars;
    }
    navigate(pRuta) {
        this.router.navigate([pRuta]);
    }
}
CarModelsComponent.ɵfac = function CarModelsComponent_Factory(t) { return new (t || CarModelsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_car_models_service__WEBPACK_IMPORTED_MODULE_1__["CarModelsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CarModelsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarModelsComponent, selectors: [["app-car-models"]], decls: 65, vars: 9, consts: [["href", "https://fonts.googleapis.com/css?family=Montserrat:400,500,700,900|Ubuntu:400,500,700", "rel", "stylesheet"], [1, "container"], [1, "title-container"], [1, "title"], [1, "filters"], [1, "filter-buttons"], [1, "filterBy"], ["value", "Todos", 3, "click"], ["value", "Autos", 3, "click"], ["value", "Pickups y Comerciales", 3, "click"], ["value", "SUVs y Crossovers", 3, "click"], [1, "filter-combo", 2, "margin-right", "auto"], ["appearance", "fill", "floatLabel", "always"], ["panelClass", "panel-class-filters", 2, "position", "absolute", 3, "selectionChange"], ["value", "Todos", 2, "border-bottom", "1px solid #d8d8d8", "border-top-right-radius", "0", "font-family", "Montserrat"], ["value", "Autos", 2, "border-bottom", "1px solid #d8d8d8", "font-family", "Montserrat"], ["value", "Pickups y Comerciales", 2, "border-bottom", "1px solid #d8d8d8", "font-family", "Montserrat"], ["value", "SUVs y Crossovers", 2, "font-family", "Montserrat"], [2, "margin-left", "auto"], ["panelClass", "panel-class", "panelClass", "panel-class", 2, "position", "absolute", 3, "selectionChange"], ["value", "nothing", 2, "border-bottom", "1px solid #d8d8d8", "font-family", "Montserrat"], ["value", "lowestPrice", 2, "border-bottom", "1px solid #d8d8d8", "font-family", "Montserrat"], ["value", "higherPrice", 2, "border-bottom", "1px solid #d8d8d8", "font-family", "Montserrat"], ["value", "newest", 2, "border-bottom", "1px solid #d8d8d8", "font-family", "Montserrat"], ["value", "oldest", 2, "font-family", "Montserrat"], [1, "card-container"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card-title"], [1, "card-img-container"], [3, "src"], [1, "button-container"], [3, "click"]], template: function CarModelsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Descubr\u00ED todos los modelos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Filtrar por");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarModelsComponent_Template_button_click_9_listener($event) { return ctx.filterBy($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarModelsComponent_Template_button_click_11_listener($event) { return ctx.filterBy($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Autos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarModelsComponent_Template_button_click_13_listener($event) { return ctx.filterBy($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Pickups y Comerciales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarModelsComponent_Template_button_click_15_listener($event) { return ctx.filterBy($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "SUVs y Crossovers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Filtrar por");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function CarModelsComponent_Template_mat_select_selectionChange_21_listener($event) { return ctx.filterBy($event, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Todos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Autos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Pickups y Comerciales ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " SUVs y Crossovers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Ordenar por");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function CarModelsComponent_Template_mat_select_selectionChange_34_listener($event) { return ctx.orderBy($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Nada ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " De ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "menor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "mayor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " precio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " De ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "mayor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "menor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " precio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " M\u00E1s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "nuevos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " primero ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " M\u00E1s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "viejos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " primero ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, CarModelsComponent_div_64_Template, 10, 5, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.activeFilter == "Todos" ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.activeFilter == "Autos" ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.activeFilter == "Pickups y Comerciales" ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.activeFilter == "SUVs y Crossovers" ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allCars);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".panel-class {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  font-family: \"Montserrat\";\n  font-size: 10px;\n  line-height: 3.5;\n  letter-spacing: -0.1px;\n  position: absolute;\n  top: 20px;\n  left: -90px;\n  margin-right: 40.13%;\n}\n@media (max-width: 768px) {\n    .panel-class {\n    width: 158px;\n    left: -55px;\n  }\n}\n  .filter-combo.panel-class {\n  width: 500px;\n}\n  .panel-class-filters {\n  left: 230px;\n  top: 3000px;\n}\n  .mat-option.mat-focus-indicator.mat-selected.mat-active {\n  color: #373737;\n}\n.container[_ngcontent-%COMP%] {\n  padding-top: 70px;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    display: block;\n    padding: auto;\n    margin: 0 4%;\n  }\n}\n.container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  margin-left: 10.49%;\n  padding-top: 85px;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n    margin-left: 0;\n    padding-top: 43px;\n  }\n}\n.container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  width: 100%;\n  font-family: \"Montserrat\";\n  font-weight: 600;\n  color: #373737;\n  font-size: 50px;\n  line-height: 1.14;\n  letter-spacing: -1px;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 35px;\n    margin-top: 40px;\n  }\n}\n.container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%] {\n  display: flex;\n  width: 78.4%;\n  justify-content: space-between;\n  margin: 80px 11.38% 75px 10.2%;\n  border-bottom: solid 1px #d8d8d8;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 41px 0 64px 0;\n  }\n}\n.container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .filter-combo[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .filter-combo[_ngcontent-%COMP%] {\n    visibility: visible;\n  }\n}\n.container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]     .mat-select-panel.mat-primary.panel-class {\n  position: initial;\n  border-radius: 10px;\n  width: 170px;\n  position: absolute;\n  left: 52px;\n  font-size: 10px;\n  top: 20px !important;\n}\n.container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]     .mat-option.mat-focus-indicator {\n  font-family: 'Montserrat';\n  font-size: 10px;\n  line-height: 3.5;\n  letter-spacing: -0.1px;\n}\n.container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]     .mat-form-field {\n  font-family: \"Montserrat\";\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1;\n  letter-spacing: 0.08px;\n  background: none;\n  position: relative;\n  top: 13px;\n  width: 100px;\n  margin-right: -8px;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]     .mat-form-field {\n    font-size: 10px;\n  }\n}\n.container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]     .mat-form-field-label {\n  font-weight: 600;\n  color: #373737;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]     .mat-form-field-label {\n    font-size: 14px;\n  }\n}\n.container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]     .mat-focused .mat-form-field-label {\n  color: #373737;\n  font-weight: 600;\n}\n.container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]     .mat-select-panel.mat-optgroup-label.mat-select-panel.mat-option {\n  font-family: 'Montserrat';\n  font-size: 10px;\n  line-height: 3.5;\n  letter-spacing: -0.1px;\n}\n.container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]     .mat-option {\n  font-family: 'Montserrat';\n}\n.container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]     .mat-option.mat-focus-indicator.mat-active {\n  font-family: 'Montserrat';\n}\n.container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]     .mat-focused {\n  color: #373737 !important;\n}\n.container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]     .mat-focused   .mat-select-arrow {\n  transform: rotate(-360deg);\n}\n.container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]     .mat-form-field-underline {\n  display: none;\n}\n.container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]     .mat-form-field-flex {\n  background: none;\n}\n.container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]     .mat-select-arrow {\n  width: 6px;\n  height: 4.2px;\n  border-left: 0px solid transparent;\n  border-right: 0px solid transparent;\n  border-top: 0px solid;\n  position: absolute;\n  bottom: 14.5px;\n  left: 69px;\n  margin: 0 4px;\n  background-image: url('fill-1.svg');\n  transform: rotate(-180deg);\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]     .mat-select-arrow {\n    bottom: 7px;\n  }\n}\n.container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .filter-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  width: 45.76%;\n  justify-content: space-between;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .filter-buttons[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .filter-buttons[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .filter-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-family: \"Montserrat\";\n  font-weight: 400;\n  font-size: 14px;\n  color: #373737;\n  letter-spacing: 0.08px;\n  padding-right: 4%;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .filter-buttons[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .filter-buttons[_ngcontent-%COMP%]   p.filterBy[_ngcontent-%COMP%] {\n  margin: auto 0;\n  font-weight: 600;\n  cursor: default;\n}\n.container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  width: 79.16%;\n  margin: 0 10.41%;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n    display: block;\n    width: 66.6%;\n    margin: auto;\n  }\n}\n.container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  width: 18.61%;\n  height: 14.64%;\n  text-align: center;\n  margin-bottom: 5.8%;\n  margin-right: 1.84%;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    margin: 0%;\n    margin-bottom: 44px;\n  }\n}\n.container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h1.card-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin: auto;\n  line-height: 1.07;\n  letter-spacing: -0.65px;\n  text-align: center;\n  margin-bottom: 8px;\n  transition: 0.5s;\n}\n.container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-img-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-family: \"Montserrat\";\n  font-size: 14px;\n  letter-spacing: -0.28px;\n  text-align: center;\n  color: #191919;\n}\n.container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   h1.card-title[_ngcontent-%COMP%] {\n  color: #eb0a1e;\n}\n.container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  width: 56%;\n  margin: auto;\n}\n.container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #191919;\n  height: 34px;\n  color: white;\n  border-radius: 50px;\n  border: 0;\n  opacity: 0;\n  transition: 0.5s;\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 1.77;\n  letter-spacing: 0.07px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jYXItbW9kZWxzL0M6L1VzZXJzL3RvbWFzL09uZURyaXZlL0RvY3VtZW50b3MvUHJveWVjdG9zL2Vnby9zcmMvYXBwL21haW4vY2FyLW1vZGVscy9jYXItbW9kZWxzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9tYWluL2Nhci1tb2RlbHMvY2FyLW1vZGVscy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FDREY7QURJRTtFQUFBO0lBQ0UsWUFBQTtJQUNBLFdBQUE7RUNERjtBQUNGO0FESUE7RUFDRSxZQUFBO0FDRkY7QURJQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDRkY7QURLQTtFQUNFLGNBQUE7QUNIRjtBRE1BO0VBRUUsaUJBQUE7QUNMRjtBRE1FO0VBQUE7SUFDRSxjQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7RUNIRjtBQUNGO0FESkE7RUFVSSxtQkFBQTtFQUNBLGlCQUFBO0FDSEo7QURLSTtFQUFBO0lBQ0UsY0FBQTtJQUNBLGlCQUFBO0VDRko7QUFDRjtBRGRBO0VBbUJNLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDRk47QURJTTtFQUFBO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VDRE47QUFDRjtBRDdCQTtFQW1DSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtBQ0hKO0FES0k7RUFBQTtJQUNFLFdBQUE7SUFDQSxxQkFBQTtFQ0ZKO0FBQ0Y7QUQxQ0E7RUErQ00sa0JBQUE7QUNGTjtBREdNO0VBQUE7SUFDRSxtQkFBQTtFQ0FOO0FBQ0Y7QURsREE7RUF5REksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNKSjtBRDNEQTtFQW1FTSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDTE47QURqRUE7RUEwRU0seUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ05OO0FEUU07RUFBQTtJQUNFLGVBQUE7RUNMTjtBQUNGO0FEbEZBO0VBNEZNLGdCQUFBO0VBQ0EsY0FBQTtBQ1BOO0FEU007RUFBQTtJQUNFLGVBQUE7RUNOTjtBQUNGO0FEM0ZBO0VBcUdNLGNBQUE7RUFDQSxnQkFBQTtBQ1BOO0FEL0ZBO0VBMEdNLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNSTjtBRHJHQTtFQWlITSx5QkFBQTtBQ1ROO0FEeEdBO0VBcUhNLHlCQUFBO0FDVk47QUQzR0E7RUF5SFUseUJBQUE7QUNYVjtBRDlHQTtFQTRIUSwwQkFBQTtBQ1hSO0FEakhBO0VBaUlNLGFBQUE7QUNiTjtBRHBIQTtFQXFJTSxnQkFBQTtBQ2ROO0FEdkhBO0VBeUlNLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLDBCQUFBO0FDZk47QURpQk07RUFBQTtJQUNFLFdBQUE7RUNkTjtBQUNGO0FEeklBO0VBMkpNLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNmTjtBRGlCTTtFQUFBO0lBQ0UsYUFBQTtFQ2ROO0FBQ0Y7QURuSkE7O0VBcUtRLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxlQUFBO0FDZlI7QUQvSkE7RUFvTFEsZ0JBQUE7QUNsQlI7QURsS0E7RUF3TFEsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ25CUjtBRHZLQTtFQWdNSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDdEJKO0FEd0JJO0VBQUE7SUFDRSxjQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUNyQko7QUFDRjtBRHJMQTtFQTZNTSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ3JCTjtBRHVCTTtFQUFBO0lBQ0UsY0FBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0lBQ0EsbUJBQUE7RUNwQk47QUFDRjtBRHBNQTtFQTZOUSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUN0QlI7QUQ3TUE7RUF1T1EsV0FBQTtBQ3ZCUjtBRGhOQTtFQXlPVSxXQUFBO0VBQ0EsWUFBQTtBQ3RCVjtBRHBOQTtFQStPUSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ3hCUjtBRDJCTTtFQUVJLFVBQUE7QUMxQlY7QUR3Qk07RUFPSSxjQUFBO0FDNUJWO0FEbk9BO0VBb1FNLFVBQUE7RUFDQSxZQUFBO0FDOUJOO0FEdk9BO0VBd1FRLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBR0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDaENSIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jYXItbW9kZWxzL2Nhci1tb2RlbHMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAcC1jb2xvcjogIzM3MzczNztcblxuOjpuZy1kZWVwIC5wYW5lbC1jbGFzcyB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDMuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IC05MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDQwLjEzJTtcblxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHdpZHRoOiAxNThweDtcbiAgICBsZWZ0OiAtNTVweDtcbiAgfVxufVxuXG46Om5nLWRlZXAgLmZpbHRlci1jb21iby5wYW5lbC1jbGFzc3tcbiAgd2lkdGg6IDUwMHB4O1xufVxuOjpuZy1kZWVwIC5wYW5lbC1jbGFzcy1maWx0ZXJze1xuICBsZWZ0OiAyMzBweDtcbiAgdG9wOiAzMDAwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LW9wdGlvbi5tYXQtZm9jdXMtaW5kaWNhdG9yLm1hdC1zZWxlY3RlZC5tYXQtYWN0aXZle1xuICBjb2xvcjogIzM3MzczNztcbn1cblxuLmNvbnRhaW5lciB7XG5cbiAgcGFkZGluZy10b3A6IDcwcHg7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IGF1dG87XG4gICAgbWFyZ2luOiAwIDQlO1xuICB9XG5cbiAgLnRpdGxlLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwLjQ5JTtcbiAgICBwYWRkaW5nLXRvcDo4NXB4O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIHBhZGRpbmctdG9wOjQzcHg7XG5cbiAgICB9XG4gICAgaDEge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IEBwLWNvbG9yO1xuICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMTQ7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5maWx0ZXJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA3OC40JTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiA4MHB4IDExLjM4JSA3NXB4IDEwLjIlO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZDhkOGQ4O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiA0MXB4IDAgNjRweCAwO1xuICAgIH1cblxuICAgIC5maWx0ZXItY29tYm97XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vU0VMRUNUXG5cblxuICA6Om5nLWRlZXAgLm1hdC1zZWxlY3QtcGFuZWwubWF0LXByaW1hcnkucGFuZWwtY2xhc3N7XG4gICAgcG9zaXRpb246IGluaXRpYWw7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogMTcwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUycHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHRvcDogMjBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgICA6Om5nLWRlZXAgLm1hdC1vcHRpb24ubWF0LWZvY3VzLWluZGljYXRvcntcbiAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMy41O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjFweDtcbiAgICB9XG5cbiAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAxM3B4O1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzM3MzczNztcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICA6Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCAgeyAvL1wiUExBQ0VIT0xERVJcIlxuICAgICAgY29sb3I6ICMzNzM3Mzc7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIDo6bmctZGVlcCAubWF0LXNlbGVjdC1wYW5lbC5tYXQtb3B0Z3JvdXAtbGFiZWwubWF0LXNlbGVjdC1wYW5lbC5tYXQtb3B0aW9ue1xuICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzLjU7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuMXB4O1xuICAgIH1cblxuICAgIDo6bmctZGVlcCAubWF0LW9wdGlvbntcbiAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG4gICAgfVxuXG4gICAgOjpuZy1kZWVwIC5tYXQtb3B0aW9uLm1hdC1mb2N1cy1pbmRpY2F0b3IubWF0LWFjdGl2ZXtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG4gICAgfVxuXG4gICAgOjpuZy1kZWVwIC5tYXQtZm9jdXNlZHsgLy9GT0NVU0VEXG4gICAgICAgICAgY29sb3I6ICMzNzM3MzcgIWltcG9ydGFudDtcblxuICAgICAgOjpuZy1kZWVwIC5tYXQtc2VsZWN0LWFycm93IHsgLy9BUlJPVyBST1RBVEVcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUgeyAvLyBVTkRFUkxJTkVcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgfVxuXG4gICAgOjpuZy1kZWVwIC5tYXQtc2VsZWN0LWFycm93IHsgLy8gQVJST1cgUE9TSVRJT04gQU5EIEJBQ0tHUk9VTkRcbiAgICAgIHdpZHRoOiA2cHg7XG4gICAgICBoZWlnaHQ6IDQuMnB4O1xuICAgICAgYm9yZGVyLWxlZnQ6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1yaWdodDogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAxNC41cHg7XG4gICAgICBsZWZ0OiA2OXB4O1xuICAgICAgbWFyZ2luOiAwIDRweDtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvZmlsbC0xLnN2Z1wiKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgYm90dG9tOiA3cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmZpbHRlci1idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB3aWR0aDogNDUuNzYlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgcCxcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiBAcC1jb2xvcjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDhweDtcbiAgICAgICAgLy90ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDQlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cblxuICAgICAgfVxuXG4gICAgICBidXR0b24uYWN0aXZle1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuXG4gICAgICBwLmZpbHRlckJ5IHtcbiAgICAgICAgbWFyZ2luOiBhdXRvIDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2FyZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB3aWR0aDogNzkuMTYlO1xuICAgIG1hcmdpbjogMCAxMC40MSU7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDY2LjYlO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cblxuICAgIC5jYXJkIHtcbiAgICAgIHdpZHRoOiAxOC42MSU7XG4gICAgICBoZWlnaHQ6IDE0LjY0JTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDUuOCU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEuODQlO1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0NHB4OztcbiAgICAgIH1cblxuXG5cbiAgICAgIGgxLmNhcmQtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMDc7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42NXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcblxuICAgICAgfVxuICAgICAgLmNhcmQtaW1nLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjMTkxOTE5O1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVye1xuICAgICAgICAuYnV0dG9uLWNvbnRhaW5lciBidXR0b257XG4gICAgICAgICAgb3BhY2l0eToxO1xuXG4gICAgICAgIH1cblxuICAgICAgICAgaDEuY2FyZC10aXRsZSB7XG4gICAgICAgICAgY29sb3I6I2ViMGExZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogNTYlO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcbiAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcblxuXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzc7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA3cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG5cblxuICB9XG59XG4iLCI6Om5nLWRlZXAgLnBhbmVsLWNsYXNzIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMy41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogLTkwcHg7XG4gIG1hcmdpbi1yaWdodDogNDAuMTMlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDo6bmctZGVlcCAucGFuZWwtY2xhc3Mge1xuICAgIHdpZHRoOiAxNThweDtcbiAgICBsZWZ0OiAtNTVweDtcbiAgfVxufVxuOjpuZy1kZWVwIC5maWx0ZXItY29tYm8ucGFuZWwtY2xhc3Mge1xuICB3aWR0aDogNTAwcHg7XG59XG46Om5nLWRlZXAgLnBhbmVsLWNsYXNzLWZpbHRlcnMge1xuICBsZWZ0OiAyMzBweDtcbiAgdG9wOiAzMDAwcHg7XG59XG46Om5nLWRlZXAgLm1hdC1vcHRpb24ubWF0LWZvY3VzLWluZGljYXRvci5tYXQtc2VsZWN0ZWQubWF0LWFjdGl2ZSB7XG4gIGNvbG9yOiAjMzczNzM3O1xufVxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA3MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IGF1dG87XG4gICAgbWFyZ2luOiAwIDQlO1xuICB9XG59XG4uY29udGFpbmVyIC50aXRsZS1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogMTAuNDklO1xuICBwYWRkaW5nLXRvcDogODVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGFpbmVyIC50aXRsZS1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHBhZGRpbmctdG9wOiA0M3B4O1xuICB9XG59XG4uY29udGFpbmVyIC50aXRsZS1jb250YWluZXIgaDEge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzM3MzczNztcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogMS4xNDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lciAudGl0bGUtY29udGFpbmVyIGgxIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgfVxufVxuLmNvbnRhaW5lciAuZmlsdGVycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA3OC40JTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDgwcHggMTEuMzglIDc1cHggMTAuMiU7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZDhkOGQ4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXIgLmZpbHRlcnMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogNDFweCAwIDY0cHggMDtcbiAgfVxufVxuLmNvbnRhaW5lciAuZmlsdGVycyAuZmlsdGVyLWNvbWJvIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXIgLmZpbHRlcnMgLmZpbHRlci1jb21ibyB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxufVxuLmNvbnRhaW5lciAuZmlsdGVycyA6Om5nLWRlZXAgLm1hdC1zZWxlY3QtcGFuZWwubWF0LXByaW1hcnkucGFuZWwtY2xhc3Mge1xuICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDE3MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUycHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG4uY29udGFpbmVyIC5maWx0ZXJzIDo6bmctZGVlcCAubWF0LW9wdGlvbi5tYXQtZm9jdXMtaW5kaWNhdG9yIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMy41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMXB4O1xufVxuLmNvbnRhaW5lciAuZmlsdGVycyA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTNweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC04cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lciAuZmlsdGVycyA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbn1cbi5jb250YWluZXIgLmZpbHRlcnMgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzczNzM3O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXIgLmZpbHRlcnMgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4uY29udGFpbmVyIC5maWx0ZXJzIDo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6ICMzNzM3Mzc7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY29udGFpbmVyIC5maWx0ZXJzIDo6bmctZGVlcCAubWF0LXNlbGVjdC1wYW5lbC5tYXQtb3B0Z3JvdXAtbGFiZWwubWF0LXNlbGVjdC1wYW5lbC5tYXQtb3B0aW9uIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMy41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMXB4O1xufVxuLmNvbnRhaW5lciAuZmlsdGVycyA6Om5nLWRlZXAgLm1hdC1vcHRpb24ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xufVxuLmNvbnRhaW5lciAuZmlsdGVycyA6Om5nLWRlZXAgLm1hdC1vcHRpb24ubWF0LWZvY3VzLWluZGljYXRvci5tYXQtYWN0aXZlIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jztcbn1cbi5jb250YWluZXIgLmZpbHRlcnMgOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCB7XG4gIGNvbG9yOiAjMzczNzM3ICFpbXBvcnRhbnQ7XG59XG4uY29udGFpbmVyIC5maWx0ZXJzIDo6bmctZGVlcCAubWF0LWZvY3VzZWQgOjpuZy1kZWVwIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG59XG4uY29udGFpbmVyIC5maWx0ZXJzIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jb250YWluZXIgLmZpbHRlcnMgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5jb250YWluZXIgLmZpbHRlcnMgOjpuZy1kZWVwIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiA0LjJweDtcbiAgYm9yZGVyLWxlZnQ6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDBweCBzb2xpZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE0LjVweDtcbiAgbGVmdDogNjlweDtcbiAgbWFyZ2luOiAwIDRweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9maWxsLTEuc3ZnXCIpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGFpbmVyIC5maWx0ZXJzIDo6bmctZGVlcCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgYm90dG9tOiA3cHg7XG4gIH1cbn1cbi5jb250YWluZXIgLmZpbHRlcnMgLmZpbHRlci1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDQ1Ljc2JTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXIgLmZpbHRlcnMgLmZpbHRlci1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uY29udGFpbmVyIC5maWx0ZXJzIC5maWx0ZXItYnV0dG9ucyBwLFxuLmNvbnRhaW5lciAuZmlsdGVycyAuZmlsdGVyLWJ1dHRvbnMgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzNzM3Mzc7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyIC5maWx0ZXJzIC5maWx0ZXItYnV0dG9ucyBidXR0b24uYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5jb250YWluZXIgLmZpbHRlcnMgLmZpbHRlci1idXR0b25zIHAuZmlsdGVyQnkge1xuICBtYXJnaW46IGF1dG8gMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLmNvbnRhaW5lciAuY2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDc5LjE2JTtcbiAgbWFyZ2luOiAwIDEwLjQxJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGFpbmVyIC5jYXJkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDY2LjYlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuLmNvbnRhaW5lciAuY2FyZC1jb250YWluZXIgLmNhcmQge1xuICB3aWR0aDogMTguNjElO1xuICBoZWlnaHQ6IDE0LjY0JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1LjglO1xuICBtYXJnaW4tcmlnaHQ6IDEuODQlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXIgLmNhcmQtY29udGFpbmVyIC5jYXJkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDQ0cHg7XG4gIH1cbn1cbi5jb250YWluZXIgLmNhcmQtY29udGFpbmVyIC5jYXJkIGgxLmNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDI4cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDEuMDc7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cbi5jb250YWluZXIgLmNhcmQtY29udGFpbmVyIC5jYXJkIC5jYXJkLWltZy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLmNhcmQtY29udGFpbmVyIC5jYXJkIC5jYXJkLWltZy1jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbi5jb250YWluZXIgLmNhcmQtY29udGFpbmVyIC5jYXJkIHAge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMxOTE5MTk7XG59XG4uY29udGFpbmVyIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpob3ZlciAuYnV0dG9uLWNvbnRhaW5lciBidXR0b24ge1xuICBvcGFjaXR5OiAxO1xufVxuLmNvbnRhaW5lciAuY2FyZC1jb250YWluZXIgLmNhcmQ6aG92ZXIgaDEuY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjZWIwYTFlO1xufVxuLmNvbnRhaW5lciAuY2FyZC1jb250YWluZXIgLmJ1dHRvbi1jb250YWluZXIge1xuICB3aWR0aDogNTYlO1xuICBtYXJnaW46IGF1dG87XG59XG4uY29udGFpbmVyIC5jYXJkLWNvbnRhaW5lciAuYnV0dG9uLWNvbnRhaW5lciBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcbiAgaGVpZ2h0OiAzNHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogMDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS43NztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarModelsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-car-models',
                templateUrl: './car-models.component.html',
                styleUrls: ['./car-models.component.less'],
            }]
    }], function () { return [{ type: _services_car_models_service__WEBPACK_IMPORTED_MODULE_1__["CarModelsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/details/details.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/details/details.component.ts ***!
  \***************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/details.service */ "./src/app/services/details.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = ["widgetParentDiv"];
function DetailsComponent_div_0_div_14_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsComponent_div_0_div_14_div_2_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r9.leftChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetailsComponent_div_0_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DetailsComponent_div_0_div_14_div_2_div_3_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r6.domain, "", ctx_r6.carDetail.model_features[ctx_r6.carouselIndex - 1].photo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.carDetail.model_features[ctx_r6.carouselIndex - 1] != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.carDetail.model_features[ctx_r6.carouselIndex].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.carDetail.model_features[ctx_r6.carouselIndex].description);
} }
function DetailsComponent_div_0_div_14_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsComponent_div_0_div_14_div_35_div_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r12.rightChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r11.domain, "", ctx_r11.carDetail.model_features[ctx_r11.carouselIndex + 4].photo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.carDetail.model_features[ctx_r11.carouselIndex + 4].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.carDetail.model_features[ctx_r11.carouselIndex + 4].description);
} }
function DetailsComponent_div_0_div_14_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailsComponent_div_0_div_14_div_35_div_1_Template, 11, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.carDetail.model_features[ctx_r7.carouselIndex + 4]);
} }
function DetailsComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetailsComponent_div_0_div_14_div_2_Template, 9, 5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, DetailsComponent_div_0_div_14_div_35_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.carDetail.model_features[ctx_r2.carouselIndex - 1] != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r2.domain, "", ctx_r2.carDetail.model_features[ctx_r2.carouselIndex].photo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.carDetail.model_features[ctx_r2.carouselIndex].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.carDetail.model_features[ctx_r2.carouselIndex].description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r2.domain, "", ctx_r2.carDetail.model_features[ctx_r2.carouselIndex + 1].photo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.carDetail.model_features[ctx_r2.carouselIndex + 1].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.carDetail.model_features[ctx_r2.carouselIndex + 1].description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r2.domain, "", ctx_r2.carDetail.model_features[ctx_r2.carouselIndex + 2].photo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.carDetail.model_features[ctx_r2.carouselIndex + 2].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.carDetail.model_features[ctx_r2.carouselIndex + 2].description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r2.domain, "", ctx_r2.carDetail.model_features[ctx_r2.carouselIndex + 3].photo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.carDetail.model_features[ctx_r2.carouselIndex + 3].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.carDetail.model_features[ctx_r2.carouselIndex + 3].description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.carDetail.model_features[ctx_r2.carouselIndex + 4]);
} }
function DetailsComponent_div_0_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsComponent_div_0_div_15_div_2_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.leftChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r14.domain, "", ctx_r14.carDetail.model_features[ctx_r14.carouselIndex].photo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.carDetail.model_features[ctx_r14.carouselIndex].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.carDetail.model_features[ctx_r14.carouselIndex].description);
} }
function DetailsComponent_div_0_div_15_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsComponent_div_0_div_15_div_4_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r18.rightChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r15.domain, "", ctx_r15.carDetail.model_features[ctx_r15.carouselIndex].photo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DetailsComponent_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetailsComponent_div_0_div_15_div_2_Template, 8, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DetailsComponent_div_0_div_15_div_4_Template, 3, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.carDetail.model_features[ctx_r3.carouselIndex]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.carDetail.model_features[ctx_r3.carouselIndex + 1]);
} }
function DetailsComponent_div_0_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.carDetail.model_highlights[0].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.carDetail.model_highlights[0].content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.domain + ctx_r4.carDetail.model_highlights[0].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DetailsComponent_div_0_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r5.domain + ctx_r5.carDetail.model_highlights[0].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.carDetail.model_highlights[0].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.carDetail.model_highlights[0].content);
} }
function DetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function DetailsComponent_div_0_Template_div_resize_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DetailsComponent_div_0_div_14_Template, 36, 18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DetailsComponent_div_0_div_15_Template, 5, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DetailsComponent_div_0_div_16_Template, 8, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DetailsComponent_div_0_div_17_Template, 8, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.domain + ctx_r0.carDetail.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.carDetail.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.carDetail.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.carDetail.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.divWidth > 768);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.divWidth <= 768);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.divWidth >= 768);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.divWidth < 768);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.domain + ctx_r0.carDetail.model_highlights[1].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.carDetail.model_highlights[1].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.carDetail.model_highlights[1].content);
} }
class DetailsComponent {
    constructor(_activatedRoute, _detailsService) {
        this._activatedRoute = _activatedRoute;
        this._detailsService = _detailsService;
        this.divWidth = 1440;
        this.carouselIndex = 0;
        this.domain = 'http://challenge.agenciaego.tech';
    }
    onResize() {
        if (this.parentDiv) {
            this.divWidth = this.parentDiv.nativeElement.clientWidth;
        }
    }
    onInit() {
        if (this.parentDiv) {
            this.divWidth = this.parentDiv.nativeElement.clientWidth;
        }
    }
    ngOnInit() {
        this.divWidth = window.innerWidth;
        this._activatedRoute.params.subscribe((param) => {
            this._detailsService
                .getAll(param.modelId)
                .then((cd) => {
                this.carDetail = cd;
            })
                .catch((error) => { });
        });
    }
    ngAfterViewInit() {
        this.onResize();
    }
    rightChange() {
        this.carouselIndex++;
    }
    leftChange() {
        if (this.carouselIndex > 0)
            this.carouselIndex--;
    }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_details_service__WEBPACK_IMPORTED_MODULE_2__["DetailsService"])); };
DetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["app-details"]], viewQuery: function DetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.parentDiv = _t.first);
    } }, hostBindings: function DetailsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function DetailsComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("", function () { return ctx.onInit(); });
    } }, decls: 1, vars: 1, consts: [["class", "main-container", 3, "resize", 4, "ngIf"], [1, "main-container", 3, "resize"], ["widgetParentDiv", ""], [1, "car-container"], [1, "image"], [3, "src"], [1, "description"], [1, "sub-title"], [1, "title"], [1, "text"], [1, ""], [1, "carousel"], ["class", "cards", 4, "ngIf"], ["class", "phone-carousel", 4, "ngIf"], ["class", "engine", 4, "ngIf"], [1, "wheels"], [1, "img-container"], [1, "text-container"], [1, "cards"], [1, "card-container", "first"], [4, "ngIf"], [1, "card-container", "medium"], [1, "description-container"], ["class", "card-container last", 4, "ngIf"], ["class", "first-arrow-container", 4, "ngIf"], [1, "first-arrow-container"], [3, "click"], ["src", "../../../assets/img/right-arrow.svg"], [1, "card-container", "last"], [1, "arrow-container"], [1, "phone-carousel"], [1, "card-container"], [1, "card-container", 2, "margin-left", "21px", "margin-right", "-290px"], [3, "src", "click"], [1, "engine"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DetailsComponent_div_0_Template, 26, 11, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.carDetail != undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".main-container[_ngcontent-%COMP%] {\n  padding-top: 70px;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  .main-container[_ngcontent-%COMP%] {\n    display: block;\n    padding: auto;\n  }\n}\n.main-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: left;\n  color: #373737;\n  font-family: \"Montserrat\";\n}\n.main-container[_ngcontent-%COMP%]   .car-container[_ngcontent-%COMP%] {\n  padding: 3.82% 9.58% 0 10.41%;\n  height: 17.46%;\n  display: flex;\n}\n@media (max-width: 768px) {\n  .main-container[_ngcontent-%COMP%]   .car-container[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0 4%;\n    margin-bottom: 4.39%;\n    padding: 0;\n  }\n}\n.main-container[_ngcontent-%COMP%]   .car-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 48.52%;\n  height: 100%;\n  align-self: center;\n  text-align: left;\n}\n@media (max-width: 768px) {\n  .main-container[_ngcontent-%COMP%]   .car-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.main-container[_ngcontent-%COMP%]   .car-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.main-container[_ngcontent-%COMP%]   .car-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  width: 41.23%;\n  height: 100%;\n  margin-left: auto;\n  text-align: left;\n}\n.main-container[_ngcontent-%COMP%]   .car-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%] {\n  margin-top: 3.43%;\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 1.35;\n  color: #373737;\n}\n@media (max-width: 768px) {\n  .main-container[_ngcontent-%COMP%]   .car-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%] {\n    line-height: 1.35;\n  }\n}\n.main-container[_ngcontent-%COMP%]   .car-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p.title[_ngcontent-%COMP%] {\n  margin-top: 2.5%;\n  font-size: 50px;\n  font-weight: 600;\n  line-height: 1.14;\n  letter-spacing: -1px;\n}\n@media (max-width: 768px) {\n  .main-container[_ngcontent-%COMP%]   .car-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p.title[_ngcontent-%COMP%] {\n    font-size: 35px;\n    line-height: 1.26;\n    letter-spacing: -0.7px;\n    color: #191919;\n  }\n}\n.main-container[_ngcontent-%COMP%]   .car-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  margin-top: 11.56%;\n  margin-bottom: 2.18%;\n  width: 81.06%;\n}\n.main-container[_ngcontent-%COMP%]   .car-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]   margin[_ngcontent-%COMP%]   .p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.69;\n  letter-spacing: -0.1px;\n}\n@media (max-width: 768px) {\n  .main-container[_ngcontent-%COMP%]   .car-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 100%;\n  }\n}\n.main-container[_ngcontent-%COMP%]   .phone-carousel[_ngcontent-%COMP%] {\n  margin: 88px auto 100px 15px;\n  width: 100%;\n  display: flex;\n  overflow: hidden;\n}\n.main-container[_ngcontent-%COMP%]   .phone-carousel[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .main-container[_ngcontent-%COMP%]   .phone-carousel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: 'Montserrat';\n  color: #373737;\n}\n.main-container[_ngcontent-%COMP%]   .phone-carousel[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 1.35;\n  letter-spacing: -0.4px;\n  margin-top: 22px;\n}\n.main-container[_ngcontent-%COMP%]   .phone-carousel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 16px;\n  line-height: 1.69;\n  letter-spacing: -0.1px;\n}\n.main-container[_ngcontent-%COMP%]   .phone-carousel[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.main-container[_ngcontent-%COMP%]   .phone-carousel[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 110%;\n}\n.main-container[_ngcontent-%COMP%]   .phone-carousel[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 93%;\n}\n.main-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.main-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%] {\n  height: 410px;\n  width: 100%;\n  display: -webkit-box;\n  margin-top: 3.36%;\n  align-items: center;\n  position: relative;\n  left: -120px;\n  margin-bottom: -20px;\n}\n.main-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n  width: 18.75%;\n  height: 265px;\n  margin-right: 1.38%;\n}\n.main-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .main-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\";\n  text-align: left;\n}\n.main-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 1.35;\n  letter-spacing: -0.4px;\n  color: #373737;\n}\n.main-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  font-size: 16px;\n  line-height: 1.69;\n  letter-spacing: -0.1px;\n  color: #373737;\n}\n.main-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 146px;\n}\n.main-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   .arrow-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 64px 18px 61px 15px;\n  background-color: rgba(255, 255, 255, 0.56);\n  z-index: 2;\n  position: relative;\n  top: -152px;\n  right: -70px;\n  height: 148px;\n  width: 45px;\n  border: none;\n  cursor: pointer;\n}\n.main-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   .arrow-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotate(-360deg);\n  width: 12px;\n  height: 21px;\n  position: relative;\n  top: 0;\n  left: 0;\n}\n.main-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   .first-arrow-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 64px 18px 61px 15px;\n  background-color: rgba(255, 255, 255, 0.56);\n  z-index: 2;\n  position: relative;\n  top: -152px;\n  left: 116px;\n  height: 148px;\n  width: 45px;\n  border: none;\n  cursor: pointer;\n}\n.main-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   .first-arrow-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotate(-190deg);\n  width: 12px;\n  height: 21px;\n  position: relative;\n  top: 0;\n  left: 0;\n}\n.main-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: auto;\n}\n.main-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card-container.last[_ngcontent-%COMP%] {\n  overflow: hidden;\n  overflow-x: hidden;\n  opacity: 0.3;\n}\n.main-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card-container.first[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n.main-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.main-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 8px;\n  width: 8px;\n  border-radius: 4px;\n  border: none;\n  background-color: #c5c5c5;\n  margin-right: 1.38%;\n}\n.main-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  width: 2.7%;\n  border-radius: 4px;\n  background-color: #4a4a4a;\n}\n.main-container[_ngcontent-%COMP%]   .engine[_ngcontent-%COMP%] {\n  margin: 3.27% 10.48% 0 17.08%;\n  height: 16.1%;\n  display: flex;\n}\n@media (max-width: 768px) {\n  .main-container[_ngcontent-%COMP%]   .engine[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0 4%;\n    margin-top: 5%;\n    margin-bottom: 39px;\n  }\n}\n.main-container[_ngcontent-%COMP%]   .engine[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  width: 53.59%;\n  height: 100%;\n  text-align: right;\n  align-self: center;\n}\n@media (max-width: 768px) {\n  .main-container[_ngcontent-%COMP%]   .engine[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: left;\n    margin-bottom: 19px;\n  }\n}\n.main-container[_ngcontent-%COMP%]   .engine[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.main-container[_ngcontent-%COMP%]   .engine[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%] {\n  width: 46.4%;\n  margin: auto;\n}\n@media (max-width: 768px) {\n  .main-container[_ngcontent-%COMP%]   .engine[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 20px;\n  }\n}\n.main-container[_ngcontent-%COMP%]   .engine[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   p.title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 1.35;\n  letter-spacing: -0.4px;\n}\n.main-container[_ngcontent-%COMP%]   .engine[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.69;\n  letter-spacing: -0.1px;\n  margin-right: 7%;\n}\n.main-container[_ngcontent-%COMP%]   .wheels[_ngcontent-%COMP%] {\n  margin: 3.02% 15.38% 5.38% 10.41%;\n  height: 16.1%;\n  display: flex;\n}\n@media (max-width: 768px) {\n  .main-container[_ngcontent-%COMP%]   .wheels[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0;\n    margin: 0 4%;\n    margin-top: 5%;\n    margin-bottom: 79px;\n  }\n}\n.main-container[_ngcontent-%COMP%]   .wheels[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  width: 52.63%;\n  height: 100%;\n  text-align: left;\n  align-self: center;\n}\n@media (max-width: 768px) {\n  .main-container[_ngcontent-%COMP%]   .wheels[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 20px;\n  }\n}\n.main-container[_ngcontent-%COMP%]   .wheels[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.main-container[_ngcontent-%COMP%]   .wheels[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%] {\n  width: 36.25%;\n  text-align: left;\n  margin: auto;\n}\n@media (max-width: 768px) {\n  .main-container[_ngcontent-%COMP%]   .wheels[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 1%;\n  }\n}\n.main-container[_ngcontent-%COMP%]   .wheels[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   p.title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 1.35;\n  letter-spacing: -0.4px;\n}\n@media (max-width: 768px) {\n  .main-container[_ngcontent-%COMP%]   .wheels[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   p.title[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n.main-container[_ngcontent-%COMP%]   .wheels[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   p.text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.69;\n  letter-spacing: -0.1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9kZXRhaWxzL0M6L1VzZXJzL3RvbWFzL09uZURyaXZlL0RvY3VtZW50b3MvUHJveWVjdG9zL2Vnby9zcmMvYXBwL21haW4vZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9tYWluL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNGRjtBRElFO0VBQUE7SUFDRSxjQUFBO0lBQ0EsYUFBQTtFQ0RGO0FBQ0Y7QUROQTtFQVVJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDREo7QURYQTtFQWVJLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNESjtBREdJO0VBQUE7SUFDRSxjQUFBO0lBQ0EsWUFBQTtJQUNBLG9CQUFBO0lBQ0EsVUFBQTtFQ0FKO0FBQ0Y7QUR4QkE7RUEyQk0sYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQU47QURFTTtFQUFBO0lBQ0UsV0FBQTtFQ0NOO0FBQ0Y7QURuQ0E7RUFxQ1EsV0FBQTtBQ0NSO0FEdENBO0VBMENNLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0ROO0FENUNBO0VBZ0RRLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDRFI7QURHUTtFQUFBO0lBQ0UsaUJBQUE7RUNBUjtBQUNGO0FEeERBO0VBNERRLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0RSO0FER1E7RUFBQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0lBQ0EsY0FBQTtFQ0FSO0FBQ0Y7QUR2RUE7RUEyRVEsa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7QUNEUjtBRDVFQTtFQStFVSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ0FWO0FESU07RUFBQTtJQUNFLFlBQUE7SUFDQSxXQUFBO0VDRE47QUFDRjtBRHZGQTtFQThGSSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNKSjtBRDdGQTs7RUFvR00seUJBQUE7RUFDQSxjQUFBO0FDSE47QURsR0E7RUF5R00sZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDSk47QUR6R0E7RUFpSE0sZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ0xOO0FEL0dBO0VBd0hNLFdBQUE7QUNOTjtBRGxIQTtFQTJIUSxhQUFBO0VBQ0EsV0FBQTtBQ05SO0FEdEhBO0VBK0hVLFVBQUE7QUNOVjtBRHpIQTtFQXNJSSxnQkFBQTtBQ1ZKO0FENUhBO0VBeUlNLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNWTjtBRHRJQTtFQW1KUSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDVlI7QUQzSUE7O0VBeUpVLHlCQUFBO0VBQ0EsZ0JBQUE7QUNWVjtBRGhKQTtFQThKVSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDWFY7QUR4SkE7RUF1S1UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNaVjtBRC9KQTtFQStLVSxXQUFBO0VBQ0EsYUFBQTtBQ2JWO0FEbktBO0VBb0xjLDRCQUFBO0VBQ0EsMkNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNkZDtBRC9LQTtFQWdNZ0IsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNkaEI7QUR2TEE7RUE0TWMsNEJBQUE7RUFDQSwyQ0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ2xCZDtBRG5NQTtFQXdOZ0IsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNsQmhCO0FEM01BO0VBbU9ZLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ3JCWjtBRGhOQTtFQTJPUSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ3hCUjtBRHJOQTtFQWlQUSxZQUFBO0FDekJSO0FEeE5BO0VBcVBRLGtCQUFBO0FDMUJSO0FEM05BO0VBdVBVLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ3pCVjtBRG5PQTtFQWdRVSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQzFCVjtBRHhPQTtFQTJRSSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDaENKO0FEa0NJO0VBQUE7SUFDRSxjQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtFQy9CSjtBQUNGO0FEclBBO0VBdVJNLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQy9CTjtBRGlDTTtFQUFBO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUM5Qk47QUFDRjtBRGxRQTtFQW1TUSxXQUFBO0FDOUJSO0FEclFBO0VBd1NNLFlBQUE7RUFDQSxZQUFBO0FDaENOO0FEa0NNO0VBQUE7SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7RUMvQk47QUFDRjtBRC9RQTtFQWdUUSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FDOUJSO0FEclJBO0VBdVRRLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUMvQlI7QUQzUkE7RUFnVUksaUNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ2xDSjtBRG9DSTtFQUFBO0lBQ0UsY0FBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0VDakNKO0FBQ0Y7QUR6U0E7RUE2VU0sYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDakNOO0FEbUNNO0VBQUE7SUFDRSxXQUFBO0lBQ0EsbUJBQUE7RUNoQ047QUFDRjtBRHJUQTtFQXdWUSxXQUFBO0FDaENSO0FEeFRBO0VBNlZNLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNsQ047QURvQ007RUFBQTtJQUNFLFdBQUE7SUFDQSxjQUFBO0VDakNOO0FBQ0Y7QURuVUE7RUF1V1EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ2pDUjtBRG1DUTtFQUFBO0lBQ0UsbUJBQUE7RUNoQ1I7QUFDRjtBRDlVQTtFQWtYUSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ2pDUiIsImZpbGUiOiJzcmMvYXBwL21haW4vZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQ6IFwiTW9udHNlcnJhdFwiO1xuQGZvbnQtY29sb3I6ICMzNzM3Mzc7XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA3MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IGF1dG87XG4gIH1cblxuICBwIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiBAZm9udC1jb2xvcjtcbiAgICBmb250LWZhbWlseTogQGZvbnQ7XG4gIH1cbiAgLmNhci1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDMuODIlIDkuNTglIDAgMTAuNDElO1xuICAgIGhlaWdodDogMTcuNDYlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luOiAwIDQlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNC4zOSU7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuICAgIC5pbWFnZSB7XG4gICAgICB3aWR0aDogNDguNTIlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgd2lkdGg6IDQxLjIzJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgcC5zdWItdGl0bGUge1xuICAgICAgICBtYXJnaW4tdG9wOiAzLjQzJTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4zNTtcbiAgICAgICAgY29sb3I6IEBmb250LWNvbG9yO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHAudGl0bGUge1xuICAgICAgICBtYXJnaW4tdG9wOiAyLjUlO1xuICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE0O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjY7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjdweDtcbiAgICAgICAgICBjb2xvcjogIzE5MTkxOTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0ZXh0IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTEuNTYlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyLjE4JTtcbiAgICAgICAgd2lkdGg6IDgxLjA2JTtcbiAgICAgICAgbWFyZ2luIC5wIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjk7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjFweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvL1BIT05FIENBUk9VU0VMXG4gIC5waG9uZS1jYXJvdXNlbCB7XG4gICAgbWFyZ2luOiA4OHB4IGF1dG8gMTAwcHggMTVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBoMSwgcHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG4gICAgICBjb2xvcjogIzM3MzczNztcbiAgICB9XG5cbiAgICBoMXtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBsaW5lLWhlaWdodDogMS4zNTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgIH1cblxuICAgIHB7XG4gICAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBsaW5lLWhlaWdodDogMS42OTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4xcHg7XG4gICAgfVxuXG4gICAgLmNhcmQtY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAuaW1nLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMTAlO1xuXG4gICAgICAgIGltZ3tcbiAgICAgICAgICB3aWR0aDogOTMlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNhcm91c2VsIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLmNhcmRzIHtcbiAgICAgIGhlaWdodDogNDEwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgbWFyZ2luLXRvcDogMy4zNiU7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbGVmdDogLTEyMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XG5cbiAgICAgIC5jYXJkLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxOC43NSU7XG4gICAgICAgIGhlaWdodDogMjY1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMS4zOCU7XG5cbiAgICAgICAgaDEsXG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzU7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgICBjb2xvcjogIzM3MzczNztcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY5O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4xcHg7XG4gICAgICAgICAgY29sb3I6ICMzNzM3Mzc7XG4gICAgICAgIH1cblxuICAgICAgICAuaW1nLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxNDZweDtcblxuICAgICAgICAgIC5hcnJvdy1jb250YWluZXIge1xuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogNjRweCAxOHB4IDYxcHggMTVweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU2KTtcbiAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB0b3A6IC0xNTJweDtcbiAgICAgICAgICAgICAgcmlnaHQ6IC03MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDE0OHB4O1xuICAgICAgICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIxcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZpcnN0LWFycm93LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiA2NHB4IDE4cHggNjFweCAxNXB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTYpO1xuICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHRvcDogLTE1MnB4O1xuICAgICAgICAgICAgICBsZWZ0OiAxMTZweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNDhweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE5MGRlZyk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMXB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNhcmQtY29udGFpbmVyLmxhc3Qge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgIH1cblxuICAgICAgLmNhcmQtY29udGFpbmVyLmZpcnN0IHtcbiAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgfVxuXG4gICAgICAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M1YzVjNTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuMzglO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uLmFjdGl2ZSB7XG4gICAgICAgICAgd2lkdGg6IDIuNyU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvL0NBUk9VU0VMXG5cbiAgLmVuZ2luZSB7XG4gICAgbWFyZ2luOiAzLjI3JSAxMC40OCUgMCAxNy4wOCU7XG4gICAgaGVpZ2h0OiAxNi4xJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogMCA0JTtcbiAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzlweDtcbiAgICB9XG5cbiAgICAuaW1nLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogNTMuNTklO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTlweDtcbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRleHQtY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiA0Ni40JTtcbiAgICAgIG1hcmdpbjogYXV0bztcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgfVxuICAgICAgcC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY5O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDclO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC53aGVlbHMge1xuICAgIG1hcmdpbjogMy4wMiUgMTUuMzglIDUuMzglIDEwLjQxJTtcbiAgICBoZWlnaHQ6IDE2LjElO1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgbWFyZ2luOiAwIDQlO1xuICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgICBtYXJnaW4tYm90dG9tOiA3OXB4O1xuICAgIH1cblxuICAgIC5pbWctY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiA1Mi42MyU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50ZXh0LWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMzYuMjUlO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIG1hcmdpbjogYXV0bztcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxJTtcbiAgICAgIH1cblxuICAgICAgcC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwLnRleHQge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY5O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLm1haW4tY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiBhdXRvO1xuICB9XG59XG4ubWFpbi1jb250YWluZXIgcCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMzczNzM3O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG59XG4ubWFpbi1jb250YWluZXIgLmNhci1jb250YWluZXIge1xuICBwYWRkaW5nOiAzLjgyJSA5LjU4JSAwIDEwLjQxJTtcbiAgaGVpZ2h0OiAxNy40NiU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1haW4tY29udGFpbmVyIC5jYXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgNCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNC4zOSU7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuLm1haW4tY29udGFpbmVyIC5jYXItY29udGFpbmVyIC5pbWFnZSB7XG4gIHdpZHRoOiA0OC41MiU7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tYWluLWNvbnRhaW5lciAuY2FyLWNvbnRhaW5lciAuaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4ubWFpbi1jb250YWluZXIgLmNhci1jb250YWluZXIgLmltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW4tY29udGFpbmVyIC5jYXItY29udGFpbmVyIC5kZXNjcmlwdGlvbiB7XG4gIHdpZHRoOiA0MS4yMyU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubWFpbi1jb250YWluZXIgLmNhci1jb250YWluZXIgLmRlc2NyaXB0aW9uIHAuc3ViLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMy40MyU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMzU7XG4gIGNvbG9yOiAjMzczNzM3O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tYWluLWNvbnRhaW5lciAuY2FyLWNvbnRhaW5lciAuZGVzY3JpcHRpb24gcC5zdWItdGl0bGUge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xuICB9XG59XG4ubWFpbi1jb250YWluZXIgLmNhci1jb250YWluZXIgLmRlc2NyaXB0aW9uIHAudGl0bGUge1xuICBtYXJnaW4tdG9wOiAyLjUlO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjE0O1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubWFpbi1jb250YWluZXIgLmNhci1jb250YWluZXIgLmRlc2NyaXB0aW9uIHAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNjtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuN3B4O1xuICAgIGNvbG9yOiAjMTkxOTE5O1xuICB9XG59XG4ubWFpbi1jb250YWluZXIgLmNhci1jb250YWluZXIgLmRlc2NyaXB0aW9uIHRleHQge1xuICBtYXJnaW4tdG9wOiAxMS41NiU7XG4gIG1hcmdpbi1ib3R0b206IDIuMTglO1xuICB3aWR0aDogODEuMDYlO1xufVxuLm1haW4tY29udGFpbmVyIC5jYXItY29udGFpbmVyIC5kZXNjcmlwdGlvbiB0ZXh0IG1hcmdpbiAucCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNjk7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1haW4tY29udGFpbmVyIC5jYXItY29udGFpbmVyIC5kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4ubWFpbi1jb250YWluZXIgLnBob25lLWNhcm91c2VsIHtcbiAgbWFyZ2luOiA4OHB4IGF1dG8gMTAwcHggMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWFpbi1jb250YWluZXIgLnBob25lLWNhcm91c2VsIGgxLFxuLm1haW4tY29udGFpbmVyIC5waG9uZS1jYXJvdXNlbCBwIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcbiAgY29sb3I6ICMzNzM3Mzc7XG59XG4ubWFpbi1jb250YWluZXIgLnBob25lLWNhcm91c2VsIGgxIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS4zNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbWFyZ2luLXRvcDogMjJweDtcbn1cbi5tYWluLWNvbnRhaW5lciAucGhvbmUtY2Fyb3VzZWwgcCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNjk7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xcHg7XG59XG4ubWFpbi1jb250YWluZXIgLnBob25lLWNhcm91c2VsIC5jYXJkLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW4tY29udGFpbmVyIC5waG9uZS1jYXJvdXNlbCAuY2FyZC1jb250YWluZXIgLmltZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTEwJTtcbn1cbi5tYWluLWNvbnRhaW5lciAucGhvbmUtY2Fyb3VzZWwgLmNhcmQtY29udGFpbmVyIC5pbWctY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiA5MyU7XG59XG4ubWFpbi1jb250YWluZXIgLmNhcm91c2VsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tYWluLWNvbnRhaW5lciAuY2Fyb3VzZWwgLmNhcmRzIHtcbiAgaGVpZ2h0OiA0MTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBtYXJnaW4tdG9wOiAzLjM2JTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMTIwcHg7XG4gIG1hcmdpbi1ib3R0b206IC0yMHB4O1xufVxuLm1haW4tY29udGFpbmVyIC5jYXJvdXNlbCAuY2FyZHMgLmNhcmQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDE4Ljc1JTtcbiAgaGVpZ2h0OiAyNjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxLjM4JTtcbn1cbi5tYWluLWNvbnRhaW5lciAuY2Fyb3VzZWwgLmNhcmRzIC5jYXJkLWNvbnRhaW5lciBoMSxcbi5tYWluLWNvbnRhaW5lciAuY2Fyb3VzZWwgLmNhcmRzIC5jYXJkLWNvbnRhaW5lciBwIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1haW4tY29udGFpbmVyIC5jYXJvdXNlbCAuY2FyZHMgLmNhcmQtY29udGFpbmVyIGgxIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS4zNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICMzNzM3Mzc7XG59XG4ubWFpbi1jb250YWluZXIgLmNhcm91c2VsIC5jYXJkcyAuY2FyZC1jb250YWluZXIgcCB7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNjk7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xcHg7XG4gIGNvbG9yOiAjMzczNzM3O1xufVxuLm1haW4tY29udGFpbmVyIC5jYXJvdXNlbCAuY2FyZHMgLmNhcmQtY29udGFpbmVyIC5pbWctY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTQ2cHg7XG59XG4ubWFpbi1jb250YWluZXIgLmNhcm91c2VsIC5jYXJkcyAuY2FyZC1jb250YWluZXIgLmltZy1jb250YWluZXIgLmFycm93LWNvbnRhaW5lciBidXR0b24ge1xuICBwYWRkaW5nOiA2NHB4IDE4cHggNjFweCAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTYpO1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTE1MnB4O1xuICByaWdodDogLTcwcHg7XG4gIGhlaWdodDogMTQ4cHg7XG4gIHdpZHRoOiA0NXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tYWluLWNvbnRhaW5lciAuY2Fyb3VzZWwgLmNhcmRzIC5jYXJkLWNvbnRhaW5lciAuaW1nLWNvbnRhaW5lciAuYXJyb3ctY29udGFpbmVyIGJ1dHRvbiBpbWcge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMjFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG4ubWFpbi1jb250YWluZXIgLmNhcm91c2VsIC5jYXJkcyAuY2FyZC1jb250YWluZXIgLmltZy1jb250YWluZXIgLmZpcnN0LWFycm93LWNvbnRhaW5lciBidXR0b24ge1xuICBwYWRkaW5nOiA2NHB4IDE4cHggNjFweCAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTYpO1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTE1MnB4O1xuICBsZWZ0OiAxMTZweDtcbiAgaGVpZ2h0OiAxNDhweDtcbiAgd2lkdGg6IDQ1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1haW4tY29udGFpbmVyIC5jYXJvdXNlbCAuY2FyZHMgLmNhcmQtY29udGFpbmVyIC5pbWctY29udGFpbmVyIC5maXJzdC1hcnJvdy1jb250YWluZXIgYnV0dG9uIGltZyB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xOTBkZWcpO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAyMXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbi5tYWluLWNvbnRhaW5lciAuY2Fyb3VzZWwgLmNhcmRzIC5jYXJkLWNvbnRhaW5lciAuaW1nLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG59XG4ubWFpbi1jb250YWluZXIgLmNhcm91c2VsIC5jYXJkcyAuY2FyZC1jb250YWluZXIubGFzdCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3BhY2l0eTogMC4zO1xufVxuLm1haW4tY29udGFpbmVyIC5jYXJvdXNlbCAuY2FyZHMgLmNhcmQtY29udGFpbmVyLmZpcnN0IHtcbiAgb3BhY2l0eTogMC4zO1xufVxuLm1haW4tY29udGFpbmVyIC5jYXJvdXNlbCAuY2FyZHMgLmJ1dHRvbi1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbi1jb250YWluZXIgLmNhcm91c2VsIC5jYXJkcyAuYnV0dG9uLWNvbnRhaW5lciBidXR0b24ge1xuICBoZWlnaHQ6IDhweDtcbiAgd2lkdGg6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNWM1YzU7XG4gIG1hcmdpbi1yaWdodDogMS4zOCU7XG59XG4ubWFpbi1jb250YWluZXIgLmNhcm91c2VsIC5jYXJkcyAuYnV0dG9uLWNvbnRhaW5lciBidXR0b24uYWN0aXZlIHtcbiAgd2lkdGg6IDIuNyU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YTtcbn1cbi5tYWluLWNvbnRhaW5lciAuZW5naW5lIHtcbiAgbWFyZ2luOiAzLjI3JSAxMC40OCUgMCAxNy4wOCU7XG4gIGhlaWdodDogMTYuMSU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1haW4tY29udGFpbmVyIC5lbmdpbmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCA0JTtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBtYXJnaW4tYm90dG9tOiAzOXB4O1xuICB9XG59XG4ubWFpbi1jb250YWluZXIgLmVuZ2luZSAuaW1nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA1My41OSU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubWFpbi1jb250YWluZXIgLmVuZ2luZSAuaW1nLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tYm90dG9tOiAxOXB4O1xuICB9XG59XG4ubWFpbi1jb250YWluZXIgLmVuZ2luZSAuaW1nLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluLWNvbnRhaW5lciAuZW5naW5lIC50ZXh0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0Ni40JTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tYWluLWNvbnRhaW5lciAuZW5naW5lIC50ZXh0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxufVxuLm1haW4tY29udGFpbmVyIC5lbmdpbmUgLnRleHQtY29udGFpbmVyIHAudGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuLm1haW4tY29udGFpbmVyIC5lbmdpbmUgLnRleHQtY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY5O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMXB4O1xuICBtYXJnaW4tcmlnaHQ6IDclO1xufVxuLm1haW4tY29udGFpbmVyIC53aGVlbHMge1xuICBtYXJnaW46IDMuMDIlIDE1LjM4JSA1LjM4JSAxMC40MSU7XG4gIGhlaWdodDogMTYuMSU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1haW4tY29udGFpbmVyIC53aGVlbHMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW46IDAgNCU7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogNzlweDtcbiAgfVxufVxuLm1haW4tY29udGFpbmVyIC53aGVlbHMgLmltZy1jb250YWluZXIge1xuICB3aWR0aDogNTIuNjMlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubWFpbi1jb250YWluZXIgLndoZWVscyAuaW1nLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufVxuLm1haW4tY29udGFpbmVyIC53aGVlbHMgLmltZy1jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbi1jb250YWluZXIgLndoZWVscyAudGV4dC1jb250YWluZXIge1xuICB3aWR0aDogMzYuMjUlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IGF1dG87XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1haW4tY29udGFpbmVyIC53aGVlbHMgLnRleHQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxJTtcbiAgfVxufVxuLm1haW4tY29udGFpbmVyIC53aGVlbHMgLnRleHQtY29udGFpbmVyIHAudGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tYWluLWNvbnRhaW5lciAud2hlZWxzIC50ZXh0LWNvbnRhaW5lciBwLnRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG4ubWFpbi1jb250YWluZXIgLndoZWVscyAudGV4dC1jb250YWluZXIgcC50ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS42OTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjFweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-details',
                templateUrl: './details.component.html',
                styleUrls: ['./details.component.less'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_details_service__WEBPACK_IMPORTED_MODULE_2__["DetailsService"] }]; }, { parentDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['widgetParentDiv']
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize']
        }], onInit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['']
        }] }); })();


/***/ }),

/***/ "./src/app/services/car-models.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/car-models.service.ts ***!
  \************************************************/
/*! exports provided: CarModelsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarModelsService", function() { return CarModelsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class CarModelsService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://challenge.agenciaego.tech/models';
    }
    getAll() {
        return this.http.get(this.baseUrl).toPromise();
    }
}
CarModelsService.ɵfac = function CarModelsService_Factory(t) { return new (t || CarModelsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CarModelsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CarModelsService, factory: CarModelsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarModelsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/details.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/details.service.ts ***!
  \*********************************************/
/*! exports provided: DetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsService", function() { return DetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class DetailsService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://challenge.agenciaego.tech/models/';
    }
    getAll(carId) {
        return this.http.get(this.baseUrl + carId).toPromise();
    }
}
DetailsService.ɵfac = function DetailsService_Factory(t) { return new (t || DetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DetailsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DetailsService, factory: DetailsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/nav-bar/nav-bar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/nav-bar/nav-bar.component.ts ***!
  \*****************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NavBarComponent {
    constructor(router) {
        this.router = router;
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        router.events.subscribe((val) => {
            this.checkCurrentURL();
        });
    }
    checkCurrentURL() {
        if (window.location.pathname.includes('details'))
            this.location = true;
        else
            this.location = false;
    }
    openSideBar() {
        this.open.emit(null);
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], outputs: { open: "open" }, decls: 24, vars: 4, consts: [["href", "https://fonts.googleapis.com/css?family=Montserrat:400,500,700,900|Ubuntu:400,500,700", "rel", "stylesheet"], ["onresize", "", 1, "nav"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "38", "height", "39", "viewBox", "0 0 38 39", 1, "ego"], ["id", "prefix__a", "d", "M0 0.708L37.541 0.708 37.541 38.25 0 38.25z"], ["fill", "none", "fill-rule", "evenodd"], ["transform", "translate(0 .142)"], ["id", "prefix__b", "fill", "#fff"], [0, "xlink", "href", "#prefix__a"], ["fill", "#12110F", "d", "M32.174 24.413c0 2.346-1.83 3.97-4.149 3.97-2.345 0-4.174-1.624-4.174-3.97v-9.895c0-2.345 1.83-3.943 4.174-3.943 2.32 0 4.15 1.598 4.15 3.943v9.895zm-9.658 3.633h-1.908l-.334-1.158c-.465.953-1.444 1.494-2.422 1.494-2.243 0-3.66-1.623-3.66-3.866V14.415c0-2.035 1.701-3.84 4.148-3.84 2.448 0 4.046 1.805 4.046 3.84v2.835H19.27v-2.886c0-.49-.31-.8-.877-.8-.54 0-.85.31-.85.8v10.28c0 .491.335.85.876.85.567 0 .902-.359.902-.85v-2.807h-.877v-2.32h4.073v8.53zm-9.435-14.25H9.537v4.098h2.422v2.68H9.537v4.458h3.544v3.014H6.238V10.885h6.843v2.912zM18.771.709C8.402.708 0 9.113 0 19.479c0 10.367 8.403 18.77 18.77 18.77 10.368 0 18.771-8.403 18.771-18.77 0-10.366-8.403-18.771-18.77-18.771z", "mask", "url(#prefix__b)"], ["fill", "#12110F", "d", "M28.025 13.707c-.438 0-.798.283-.798.747v10.307c0 .464.36.747.798.747.439 0 .774-.283.774-.747V14.454c0-.464-.335-.747-.774-.747"], [1, "menu"], [3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "26", "height", "18", "viewBox", "0 0 26 18", 1, "burguer"], ["fill", "#191919", "transform", "translate(.928)"], ["width", "25.017", "height", "2", "y", "16", "rx", "1"], ["width", "25.017", "height", "2", "y", "8", "rx", "1"], ["width", "25.017", "height", "2", "rx", "1"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mask", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "use", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Modelos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ficha de modelo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_button_click_16_listener() { return ctx.openSideBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Men\u00FA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "g", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "rect", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "rect", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "rect", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](!ctx.location ? "models active" : "models");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.location ? "files active" : "files");
    } }, styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  font-family: \"Muli\";\n}\n.nav[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 70px;\n  margin: 0 0 85px;\n  background-color: white;\n  display: flex;\n}\n@media (max-width: 768px) {\n  .nav[_ngcontent-%COMP%] {\n    margin: 0 2%;\n  }\n}\n.nav[_ngcontent-%COMP%]   svg.ego[_ngcontent-%COMP%] {\n  margin-left: 2.43%;\n  margin-top: 16px;\n  margin-bottom: 14px;\n  width: 2.77%;\n}\n@media (max-width: 768px) {\n  .nav[_ngcontent-%COMP%]   svg.ego[_ngcontent-%COMP%] {\n    width: 10%;\n    margin-left: 0;\n  }\n}\n.nav[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\";\n}\n.nav[_ngcontent-%COMP%]   p.models[_ngcontent-%COMP%] {\n  margin: 27px 0 25px 5.34%;\n  font-weight: 600;\n  font-size: 14px;\n}\n@media (max-width: 768px) {\n  .nav[_ngcontent-%COMP%]   p.models[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.nav[_ngcontent-%COMP%]   p.models.active[_ngcontent-%COMP%] {\n  padding: 0 2.18% 27px 2.18%;\n  padding-bottom: 27px;\n  border-bottom: 4px solid #d0021b;\n  color: #d0021b;\n  transition: 0.5s;\n}\n.nav[_ngcontent-%COMP%]   p.files[_ngcontent-%COMP%] {\n  margin: 27px 0 25px 4.02%;\n  font-weight: 600;\n  font-size: 14px;\n}\n@media (max-width: 768px) {\n  .nav[_ngcontent-%COMP%]   p.files[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.nav[_ngcontent-%COMP%]   p.files.active[_ngcontent-%COMP%] {\n  padding: 0 2.18% 27px 2.18%;\n  padding-bottom: 27px;\n  border-bottom: 4px solid #d0021b;\n  color: #d0021b;\n  transition: 0.5s;\n}\n.nav[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  margin: 27px 25px 25px auto;\n  background-color: none;\n}\n@media (max-width: 768px) {\n  .nav[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: 38.5px;\n  }\n}\n.nav[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  display: flex;\n  background-color: transparent;\n  cursor: pointer;\n}\n.nav[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-right: 12px;\n}\n@media (max-width: 768px) {\n  .nav[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdi1iYXIvQzovVXNlcnMvdG9tYXMvT25lRHJpdmUvRG9jdW1lbnRvcy9Qcm95ZWN0b3MvZWdvL3NyYy9hcHAvc2hhcmVkL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc2hhcmVkL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7RUFFRSxtQkFBQTtBQ0ZGO0FES0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FDSEY7QURLRTtFQUFBO0lBQ0UsWUFBQTtFQ0ZGO0FBQ0Y7QURWQTtFQWVJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNGSjtBRElJO0VBQUE7SUFDRSxVQUFBO0lBQ0EsY0FBQTtFQ0RKO0FBQ0Y7QUR0QkE7RUE2QkkseUJBQUE7QUNKSjtBRHpCQTtFQWlDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0xKO0FET0k7RUFBQTtJQUNFLGFBQUE7RUNKSjtBQUNGO0FEbkNBO0VBMkNJLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0xKO0FEMUNBO0VBbURJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDTko7QURRSTtFQUFBO0lBQ0UsYUFBQTtFQ0xKO0FBQ0Y7QURwREE7RUE2REksMkJBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDTko7QUQzREE7RUFxRUksMkJBQUE7RUFDQSxzQkFBQTtBQ1BKO0FEU0k7RUFBQTtJQUNFLGlCQUFBO0lBQ0Esb0JBQUE7RUNOSjtBQUNGO0FEckVBO0VBOEVNLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDTk47QUQzRUE7RUFxRk0sZUFBQTtFQUNBLGtCQUFBO0FDUE47QURRTTtFQUFBO0lBQ0UsYUFBQTtFQ0xOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQHAtY29sb3I6ICMxOTE5MTk7XG5AcC1zaXplOiAxNHB4O1xuXG5odG1sLFxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGlcIjtcbn1cblxuLm5hdiB7XG4gIHotaW5kZXg6IDEwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzBweDtcbiAgbWFyZ2luOiAwIDAgODVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgbWFyZ2luOiAwIDIlO1xuICB9XG5cbiAgc3ZnLmVnbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDIuNDMlO1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICB3aWR0aDogMi43NyU7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIHdpZHRoOiAxMCU7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG4gIH1cblxuXG5cbiAgcCB7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICB9XG5cbiAgcC5tb2RlbHMge1xuICAgIG1hcmdpbjogMjdweCAwIDI1cHggNS4zNCU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IEBwLXNpemU7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgcC5tb2RlbHMuYWN0aXZlIHtcbiAgICBwYWRkaW5nOiAwIDIuMTglIDI3cHggMi4xOCU7XG4gICAgcGFkZGluZy1ib3R0b206IDI3cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNkMDAyMWI7XG4gICAgY29sb3I6ICNkMDAyMWI7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuXG4gIHAuZmlsZXMge1xuICAgIG1hcmdpbjogMjdweCAwIDI1cHggNC4wMiU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IEBwLXNpemU7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgcC5maWxlcy5hY3RpdmUge1xuICAgIHBhZGRpbmc6IDAgMi4xOCUgMjdweCAyLjE4JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjdweDtcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2QwMDIxYjtcbiAgICBjb2xvcjogI2QwMDIxYjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG5cbiAgLm1lbnV7XG4gICAgbWFyZ2luOiAyN3B4IDI1cHggMjVweCBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAzOC41cHg7XG4gICAgfVxuXG4gICAgYnV0dG9ue1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIHB7XG4gICAgICBmb250LXNpemU6IEBwLXNpemU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImh0bWwsXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaVwiO1xufVxuLm5hdiB7XG4gIHotaW5kZXg6IDEwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzBweDtcbiAgbWFyZ2luOiAwIDAgODVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdiB7XG4gICAgbWFyZ2luOiAwIDIlO1xuICB9XG59XG4ubmF2IHN2Zy5lZ28ge1xuICBtYXJnaW4tbGVmdDogMi40MyU7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIHdpZHRoOiAyLjc3JTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubmF2IHN2Zy5lZ28ge1xuICAgIHdpZHRoOiAxMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn1cbi5uYXYgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbn1cbi5uYXYgcC5tb2RlbHMge1xuICBtYXJnaW46IDI3cHggMCAyNXB4IDUuMzQlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdiBwLm1vZGVscyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLm5hdiBwLm1vZGVscy5hY3RpdmUge1xuICBwYWRkaW5nOiAwIDIuMTglIDI3cHggMi4xOCU7XG4gIHBhZGRpbmctYm90dG9tOiAyN3B4O1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2QwMDIxYjtcbiAgY29sb3I6ICNkMDAyMWI7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4ubmF2IHAuZmlsZXMge1xuICBtYXJnaW46IDI3cHggMCAyNXB4IDQuMDIlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdiBwLmZpbGVzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4ubmF2IHAuZmlsZXMuYWN0aXZlIHtcbiAgcGFkZGluZzogMCAyLjE4JSAyN3B4IDIuMTglO1xuICBwYWRkaW5nLWJvdHRvbTogMjdweDtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNkMDAyMWI7XG4gIGNvbG9yOiAjZDAwMjFiO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuLm5hdiAubWVudSB7XG4gIG1hcmdpbjogMjdweCAyNXB4IDI1cHggYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubmF2IC5tZW51IHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDM4LjVweDtcbiAgfVxufVxuLm5hdiAubWVudSBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmF2IC5tZW51IHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubmF2IC5tZW51IHAge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.less']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/side-bar/side-bar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/side-bar/side-bar.component.ts ***!
  \*******************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SideBarComponent {
    constructor() {
        this.desactive = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    desactiveSideBar() {
        this.desactive.emit(null);
    }
}
SideBarComponent.ɵfac = function SideBarComponent_Factory(t) { return new (t || SideBarComponent)(); };
SideBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideBarComponent, selectors: [["app-side-bar"]], inputs: { isActive: "isActive" }, outputs: { desactive: "desactive" }, decls: 57, vars: 2, consts: [["href", "https://fonts.googleapis.com/css?family=Montserrat:400,500,700,900|Ubuntu:400,500,700", "rel", "stylesheet"], [1, "nav-container"], [3, "click"], ["src", "../../../assets/img/cross.svg"], [1, "side-nav-content"], [1, "main"], [1, "services"], [1, "concessionaire"], [1, "activity"]], template: function SideBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideBarComponent_Template_button_click_3_listener() { return ctx.desactiveSideBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Modelos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Servicios y Acessorios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Finanaciaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Reviews y Comunidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Toyota Mobility Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Toyota Gazoo Racing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Toyota H\u00EDbridos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Concesionarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Test Drive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Actividades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Servicios al Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Ventas Especiales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Innovaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Prensa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Acerca de...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isActive ? "side-nav active" : "side-nav");
    } }, styles: [".side-nav[_ngcontent-%COMP%] {\n  overflow: hidden;\n  opacity: 1;\n  z-index: 20;\n}\n@media (max-width: 768px) {\n  .side-nav[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 70px;\n    height: 100%;\n  }\n}\n.side-nav[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%] {\n  float: right;\n  position: fixed;\n  right: 0;\n  z-index: 21;\n}\n.side-nav[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .side-nav[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  z-index: 21;\n}\n.side-nav[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  display: flex;\n  border: none;\n  background-color: white;\n}\n@media (max-width: 768px) {\n  .side-nav[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-top: 4px;\n  }\n}\n.side-nav[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 27px;\n  margin-top: 9px;\n}\n.side-nav[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  margin-right: 11px;\n  font-family: \"Montserrat\";\n  font-size: 14px;\n  color: #000000;\n}\n.side-nav[_ngcontent-%COMP%]   .side-nav-content[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  transition: 0.5s;\n  padding-top: 80px;\n  position: fixed;\n  margin-left: auto;\n  background: white;\n  height: 756px;\n  width: 25%;\n  text-align: right;\n  top: 0px;\n  right: 0;\n  z-index: 20;\n}\n@media (max-width: 768px) {\n  .side-nav[_ngcontent-%COMP%]   .side-nav-content[_ngcontent-%COMP%] {\n    padding-top: 60px;\n    width: 100%;\n    height: 100%;\n    top: 70px;\n  }\n}\n.side-nav[_ngcontent-%COMP%]   .side-nav-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 62px;\n  margin-left: 32px;\n  padding-right: 53px;\n}\n.side-nav[_ngcontent-%COMP%]   .side-nav-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-family: \"Montserrat\";\n  font-size: 20px;\n  letter-spacing: -0.1px;\n  color: #000000;\n  margin-bottom: 13px;\n}\n.side-nav[_ngcontent-%COMP%]   .side-nav-content[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #d1d1d1;\n  padding-bottom: 31px;\n  margin-bottom: 29px;\n}\n.side-nav[_ngcontent-%COMP%]   .side-nav-content[_ngcontent-%COMP%]   .concessionaire[_ngcontent-%COMP%] {\n  margin-bottom: 29px;\n}\n.side-nav[_ngcontent-%COMP%]   .side-nav-content[_ngcontent-%COMP%]   .activity[_ngcontent-%COMP%] {\n  background-color: #efeeef;\n  border-top: 1px solid #d1d1d1;\n  padding-top: 31px;\n  margin-bottom: 0;\n  margin-left: 0;\n  height: 32%;\n  border-right: 72px #d1d1d1;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #888;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n.side-nav.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NpZGUtYmFyL0M6L1VzZXJzL3RvbWFzL09uZURyaXZlL0RvY3VtZW50b3MvUHJveWVjdG9zL2Vnby9zcmMvYXBwL3NoYXJlZC9zaWRlLWJhci9zaWRlLWJhci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc2hhcmVkL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBTUUsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ05GO0FEREU7RUFBQTtJQUNFLGVBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtFQ0lGO0FBQ0Y7QURUQTtFQVVJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNFSjtBRGZBOztFQWlCTSxXQUFBO0FDRU47QURuQkE7RUFxQk0sZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDQ047QURDTTtFQUFBO0lBQ0UsZUFBQTtFQ0VOO0FBQ0Y7QUQ5QkE7RUErQlEsa0JBQUE7RUFDQSxlQUFBO0FDRVI7QURsQ0E7RUFvQ1EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NSO0FEekNBO0VBOENJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ0ZKO0FESUk7RUFBQTtJQUNFLGlCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxTQUFBO0VDREo7QUFDRjtBRC9EQTtFQW1FTSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNETjtBRHBFQTtFQXlFTSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDRk47QUQ1RUE7RUFrRk0sZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDSE47QURqRkE7RUF3Rk0sbUJBQUE7QUNKTjtBRHBGQTtFQTRGTSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUNMTjtBRFlBO0VBQ0UsV0FBQTtBQ1ZGO0FEYUE7RUFDRSxtQkFBQTtBQ1hGO0FEY0E7RUFDRSxnQkFBQTtBQ1pGO0FEZUE7RUFDRSxnQkFBQTtBQ2JGO0FEZ0JBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUNkRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaWRlLWJhci9zaWRlLWJhci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vU0lERUJBUlxuXG4uc2lkZS1uYXYge1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA3MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAyMDtcbiAgLm5hdi1jb250YWluZXIge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogMjE7XG5cbiAgICBwLFxuICAgIGltZyB7XG4gICAgICB6LWluZGV4OiAyMTtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgbWFyZ2luLXRvcDogMThweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyN3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiA5cHg7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTFweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zaWRlLW5hdi1jb250ZW50IHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgaGVpZ2h0OiA3NTZweDtcbiAgICB3aWR0aDogMjUlO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IDIwO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgdG9wOiA3MHB4O1xuICAgIH1cblxuICAgIGRpdiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA2MnB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1M3B4O1xuICAgIH1cblxuICAgIGEge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjFweDtcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTNweDtcbiAgICB9XG5cbiAgICAuc2VydmljZXMge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMWQxZDE7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMzFweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI5cHg7XG4gICAgfVxuXG4gICAgLmNvbmNlc3Npb25haXJlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI5cHg7XG4gICAgfVxuXG4gICAgLmFjdGl2aXR5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVlZWY7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2QxZDFkMTtcbiAgICAgIHBhZGRpbmctdG9wOiAzMXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgaGVpZ2h0OiAzMiU7XG4gICAgICBib3JkZXItcmlnaHQ6IDcycHggI2QxZDFkMTtcbiAgICB9XG4gIH1cblxufVxuLy9TQ1JPTExcblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxMHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNTU1O1xufVxuXG4uc2lkZS1uYXYuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogMC41O1xufVxuIiwiLnNpZGUtbmF2IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMjA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNpZGUtbmF2IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA3MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuLnNpZGUtbmF2IC5uYXYtY29udGFpbmVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAyMTtcbn1cbi5zaWRlLW5hdiAubmF2LWNvbnRhaW5lciBwLFxuLnNpZGUtbmF2IC5uYXYtY29udGFpbmVyIGltZyB7XG4gIHotaW5kZXg6IDIxO1xufVxuLnNpZGUtbmF2IC5uYXYtY29udGFpbmVyIGJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNpZGUtbmF2IC5uYXYtY29udGFpbmVyIGJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICB9XG59XG4uc2lkZS1uYXYgLm5hdi1jb250YWluZXIgYnV0dG9uIGltZyB7XG4gIG1hcmdpbi1yaWdodDogMjdweDtcbiAgbWFyZ2luLXRvcDogOXB4O1xufVxuLnNpZGUtbmF2IC5uYXYtY29udGFpbmVyIGJ1dHRvbiBwIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDExcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5zaWRlLW5hdiAuc2lkZS1uYXYtY29udGVudCB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgcGFkZGluZy10b3A6IDgwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDc1NnB4O1xuICB3aWR0aDogMjUlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAyMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc2lkZS1uYXYgLnNpZGUtbmF2LWNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6IDcwcHg7XG4gIH1cbn1cbi5zaWRlLW5hdiAuc2lkZS1uYXYtY29udGVudCBkaXYge1xuICBtYXJnaW4tYm90dG9tOiA2MnB4O1xuICBtYXJnaW4tbGVmdDogMzJweDtcbiAgcGFkZGluZy1yaWdodDogNTNweDtcbn1cbi5zaWRlLW5hdiAuc2lkZS1uYXYtY29udGVudCBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjFweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XG59XG4uc2lkZS1uYXYgLnNpZGUtbmF2LWNvbnRlbnQgLnNlcnZpY2VzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMWQxZDE7XG4gIHBhZGRpbmctYm90dG9tOiAzMXB4O1xuICBtYXJnaW4tYm90dG9tOiAyOXB4O1xufVxuLnNpZGUtbmF2IC5zaWRlLW5hdi1jb250ZW50IC5jb25jZXNzaW9uYWlyZSB7XG4gIG1hcmdpbi1ib3R0b206IDI5cHg7XG59XG4uc2lkZS1uYXYgLnNpZGUtbmF2LWNvbnRlbnQgLmFjdGl2aXR5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWVlZjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkMWQxZDE7XG4gIHBhZGRpbmctdG9wOiAzMXB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgaGVpZ2h0OiAzMiU7XG4gIGJvcmRlci1yaWdodDogNzJweCAjZDFkMWQxO1xufVxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxMHB4O1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzg4ODtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNTU1O1xufVxuLnNpZGUtbmF2LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IDAuNTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-bar',
                templateUrl: './side-bar.component.html',
                styleUrls: ['./side-bar.component.less']
            }]
    }], function () { return []; }, { isActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['isActive']
        }], desactive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tomas\OneDrive\Documentos\Proyectos\ego\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map