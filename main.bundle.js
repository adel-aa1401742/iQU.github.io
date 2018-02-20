webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return searchPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var searchPipe = (function () {
    function searchPipe() {
    }
    searchPipe.prototype.transform = function (arrayOfSections, key) {
        if (key == null)
            return arrayOfSections;
        else {
            arrayOfSections = arrayOfSections.filter(function (element) {
                if (element.section.toLocaleLowerCase().includes(key.toLocaleLowerCase()))
                    return element;
            });
            return arrayOfSections;
        }
    };
    searchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'search'
        })
    ], searchPipe);
    return searchPipe;
}());

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sections_sections_component__ = __webpack_require__("../../../../../src/app/sections/sections.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__attendance_attendance_component__ = __webpack_require__("../../../../../src/app/attendance/attendance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__quizzes_quizzes_component__ = __webpack_require__("../../../../../src/app/quizzes/quizzes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_qrcode__ = __webpack_require__("../../../../angular2-qrcode/lib/angular2-qrcode.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_filter_pipe__ = __webpack_require__("../../../../ng2-filter-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_filter_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ng2_filter_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__new_section_dialog_new_section_dialog_component__ = __webpack_require__("../../../../../src/app/new-section-dialog/new-section-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__features_features_component__ = __webpack_require__("../../../../../src/app/features/features.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__qr_code_dialog_qr_code_dialog_component__ = __webpack_require__("../../../../../src/app/qr-code-dialog/qr-code-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__uploads_upload_form_upload_form_component__ = __webpack_require__("../../../../../src/app/uploads/upload-form/upload-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__uploads_shared_upload_service__ = __webpack_require__("../../../../../src/app/uploads/shared/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__sections_sections_component__["a" /* SectionsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__attendance_attendance_component__["a" /* AttendanceComponent */],
                __WEBPACK_IMPORTED_MODULE_10__quizzes_quizzes_component__["a" /* QuizzesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_component__["b" /* searchPipe */],
                __WEBPACK_IMPORTED_MODULE_22__reset_password_reset_password_component__["a" /* ResetPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_23__new_section_dialog_new_section_dialog_component__["a" /* NewSectionDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_25__features_features_component__["a" /* FeaturesComponent */],
                __WEBPACK_IMPORTED_MODULE_26__qr_code_dialog_qr_code_dialog_component__["a" /* QrCodeDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_27__uploads_upload_form_upload_form_component__["a" /* UploadFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["k" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["i" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["i" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["k" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["n" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["o" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["A" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["C" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["D" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["E" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["F" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["B" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_21_ng2_filter_pipe__["Ng2FilterPipeModule"],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_17_angular2_qrcode__["a" /* QRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_13__angular_router__["c" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__sections_sections_component__["a" /* SectionsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__auth_guard__["a" /* AuthGuard */]] },
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */] },
                    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_12__register_register_component__["a" /* RegisterComponent */] },
                    { path: 'reset', component: __WEBPACK_IMPORTED_MODULE_22__reset_password_reset_password_component__["a" /* ResetPasswordComponent */] },
                    { path: 'sections', component: __WEBPACK_IMPORTED_MODULE_8__sections_sections_component__["a" /* SectionsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__auth_guard__["a" /* AuthGuard */]] },
                    { path: 'attendance/:section', component: __WEBPACK_IMPORTED_MODULE_9__attendance_attendance_component__["a" /* AttendanceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__auth_guard__["a" /* AuthGuard */]] },
                    { path: 'quizzes/:section', component: __WEBPACK_IMPORTED_MODULE_10__quizzes_quizzes_component__["a" /* QuizzesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__auth_guard__["a" /* AuthGuard */]] },
                    { path: 'upload', component: __WEBPACK_IMPORTED_MODULE_27__uploads_upload_form_upload_form_component__["a" /* UploadFormComponent */] },
                ])
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_23__new_section_dialog_new_section_dialog_component__["a" /* NewSectionDialogComponent */], __WEBPACK_IMPORTED_MODULE_25__features_features_component__["a" /* FeaturesComponent */], __WEBPACK_IMPORTED_MODULE_26__qr_code_dialog_qr_code_dialog_component__["a" /* QrCodeDialogComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_15__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_16__auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_6__app_component__["b" /* searchPipe */], __WEBPACK_IMPORTED_MODULE_28__uploads_shared_upload_service__["a" /* UploadService */], __WEBPACK_IMPORTED_MODULE_29_angularfire2_database__["a" /* AngularFireDatabase */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/attendance/attendance.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-xs-3{\r\n  float: left;\r\n}\r\n.right{\r\n  float: right;\r\n  margin-top: 20px;\r\n  margin-right: 15px;\r\n}\r\n.example-events {\r\n  width: 400px;\r\n  height: 200px;\r\n  border: 1px solid #555;\r\n  overflow: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/attendance/attendance.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  {{this.currentSection}}\n</p>\n\n<div class=\"container\">\n  <div class=\"form-group row\">\n    <div class=\"col-xs-3\">\n      <label>Search By Student ID:</label>\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"this.studentID\">\n      <div>\n        <button style=\"float: right\" type=\"button\" class=\"btn btn-primary\" (click)=\"searchByID()\">Search\n        </button>\n      </div>\n    </div>\n    <div  class=\"col-xs-3\">\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"picker1\" placeholder=\"Angular forms\" [formControl]=\"date\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n        <mat-datepicker #picker1></mat-datepicker>\n      </mat-form-field>\n\n      <label>Search By Date:</label>\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"this.date\">\n      <div>\n        <button style=\"float: right\" type=\"button\" class=\"btn btn-primary\" (click)=\"searchByDate()\">Search\n        </button>\n      </div>\n    </div>\n    <div class=\"right\">\n      <button style=\"float: right\" type=\"button\" class=\"btn btn-primary\" (click)=\"displayQRCode()\">Take Attendance\n      </button>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=studentsRecord class=\"container\">\n  <table class=\"table table-dark table-hover\">\n    <tr>\n      <th>Date</th>\n      <th>Status</th>\n      <th></th>\n    </tr>\n\n    <tr *ngFor=\"let record of studentsRecord | async\">\n      <td>{{record.date}}</td>\n      <td>{{record.status}}</td>\n    </tr>\n\n\n  </table>\n</div>\n\n\n<div *ngIf=studentsList class=\"container\">\n  <table class=\"table table-dark table-hover\">\n    <tr>\n      <th>Student ID</th>\n      <th>Status</th>\n      <th></th>\n    </tr>\n\n    <tr *ngFor=\"let student of studentsList | async\">\n      <td>{{student.studentID}}</td>\n      <td>{{student.status}}</td>\n    </tr>\n\n\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/attendance/attendance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__qr_code_dialog_qr_code_dialog_component__ = __webpack_require__("../../../../../src/app/qr-code-dialog/qr-code-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AttendanceComponent = (function () {
    function AttendanceComponent(route, dialog, afs) {
        this.route = route;
        this.dialog = dialog;
        this.afs = afs;
        this.serializedDate = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]((new Date()).toISOString());
    }
    AttendanceComponent.prototype.displayQRCode = function () {
        if (!this.dialog.openDialogs.length) {
            var qrCodeDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__qr_code_dialog_qr_code_dialog_component__["a" /* QrCodeDialogComponent */], {
                hasBackdrop: false,
            });
            qrCodeDialogRef.componentInstance.section = this.currentSection;
        }
    };
    AttendanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.currentSection = params.section;
        });
    };
    AttendanceComponent.prototype.searchByID = function () {
        var _this = this;
        this.studentsList = null;
        this.studentsRecordsCol = this.afs.collection("Attendance", function (ref) {
            return ref.where("section", "==", _this.currentSection).where("studentID", "==", _this.studentID + "");
        });
        this.studentsRecord = this.studentsRecordsCol.valueChanges();
    };
    AttendanceComponent.prototype.searchByDate = function () {
        var _this = this;
        this.studentsRecord = null;
        this.studentsCol = this.afs.collection("Attendance", function (ref) {
            return ref.where("section", "==", _this.currentSection).where("date", "==", _this.date + "");
        });
        this.studentsList = this.studentsCol.valueChanges();
    };
    AttendanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-attendance',
            template: __webpack_require__("../../../../../src/app/attendance/attendance.component.html"),
            styles: [__webpack_require__("../../../../../src/app/attendance/attendance.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], AttendanceComponent);
    return AttendanceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].from(this.auth.authState)
            .take(1)
            .map(function (state) { return !!state; })
            .do(function (authenticated) {
            if (!authenticated)
                _this.router.navigate(['/login']);
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/features/features.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-dialog-content{\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/features.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title style=\"text-align: center\">{{this.section}}</h1>\n<div mat-dialog-actions id=\"dialog\">\n  <div >\n    <div style=\"float: left ; text-align: center\">\n      <button tabindex=\"-1\" [mat-dialog-close]=\"\"\n              style=\" background-color: transparent; margin:15px ; width: 250px; height: 250px\" [routerLink]=\"['quizzes', this.section]\">\n        <img src=\"https://cdn3.iconfinder.com/data/icons/brain-games/1042/Quiz-Games.png\"\n             style=\"width: 200px; height: 200px\">\n      </button>\n      <p style=\"font-size: 25px\">Quizzes</p>\n\n    </div>\n    <div style=\"float: right; text-align: center\">\n      <button tabindex=\"-1\" [mat-dialog-close]=\"\"\n              style=\" background-color: transparent; margin:15px ; width: 250px; height: 250px\" [routerLink]=\"['attendance', this.section]\">\n        <img src=\"https://cdn3.iconfinder.com/data/icons/humano2/128x128/apps/preferences-system-time.png\"\n             style=\"width: 200px; height: 200px\">\n      </button>\n      <p style=\"font-size: 25px\">Attendance</p>\n    </div>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/features/features.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeaturesComponent = (function () {
    function FeaturesComponent(router) {
        this.router = router;
    }
    FeaturesComponent.prototype.ngOnInit = function () {
    };
    FeaturesComponent.prototype.openQuizzes = function () {
        this.router.navigate(['/quizzes']);
    };
    FeaturesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-features',
            template: __webpack_require__("../../../../../src/app/features/features.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/features.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], FeaturesComponent);
    return FeaturesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:400,900,700,500,300,100);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway:400,500);", ""]);
exports.push([module.i, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css);", ""]);

// module
exports.push([module.i, "/* ==========================================================================\r\n   Author's custom styles\r\n   ========================================================================== */\r\n\r\nhtml, body {\r\n  margin-top: 150px;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: 'Raleway',sans-serif;\r\n  position: relative;\r\n  /*background: rgba(0, 0, 0, 0) url(\"../img/ptn.png\") repeat scroll 0 0;*/\r\n}\r\n\r\n.in-page {\r\n  min-height: 520px;\r\n}\r\n\r\n.main {\r\n  position: relative;\r\n}\r\n\r\na {\r\n  color: #1b5a7c;\r\n}\r\n\r\na:hover, a:focus {\r\n  color: #1b5a7c;\r\n}\r\n\r\n.btn-cyan {\r\n  background-color: #1b5a7c;\r\n  color: #fff;\r\n}\r\n\r\n.btn-cyan:hover {\r\n  color: #fff;\r\n  opacity: 0.9;\r\n}\r\n\r\n.form-control:focus {\r\n  border-color: #1b5a7c;\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(24, 204, 162, 0.6);\r\n  outline: 0 none;\r\n}\r\n\r\n.min-height {\r\n  min-height: 380px;\r\n}\r\n\r\n.login-screen {\r\n  background-image: url(https://www.squiz.net/__public/Systems/Perspective/FileCache/1-32000/465/prop/header-bg-image.jpg?t=1472431690);\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  -moz-background-size: cover;\r\n  -webkit-background-size: cover;\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n}\r\n\r\n.login-screen:before {\r\n  content: \"\";\r\n  background: rgba(0,0,0, 0.5);\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.login-center {\r\n  text-align: left;\r\n}\r\n\r\n.login {\r\n  width: 320px;\r\n  color: #fff;\r\n}\r\n\r\n.login .login-form {\r\n  text-align: left;\r\n}\r\n\r\n.login label {\r\n  color: #fff;\r\n}\r\n\r\n.login-form .input-group .form-control {\r\n  background: none;\r\n  height: 44px;\r\n  color: #ddd;\r\n}\r\n\r\n.login-form .input-group .input-group-addon {\r\n  background: none;\r\n}\r\n\r\n.login-form .input-group .input-group-addon .glyphicon {\r\n  color: #1b5a7c;\r\n}\r\n\r\n.login-form .input-group .form-control::-moz-placeholder {\r\n  color: #fff;\r\n  opacity: 0.3;\r\n}\r\n\r\n.login .sign-btn input.btn {\r\n  background: #1b5a7c;\r\n  border-color: #1b5a7c;\r\n  color: #fff;\r\n  width: 320px;\r\n}\r\n\r\n.login .sign-btn a {\r\n  text-decoration: none;\r\n}\r\n\r\n.login .checkbox {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.login .forgot {\r\n  display: inline-block;\r\n  text-align: center;\r\n  margin-left: 65px;\r\n  margin-top: 20px;\r\n\r\n}\r\n.login .options {\r\n  display: inline-block;\r\n  text-align: center;\r\n  margin-left: 65px;\r\n  margin-top: 20px;\r\n\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"main\">\n\n<div class=\"login-screen\"></div>\n<div class=\"login-center\">\n  <div class=\"container min-height\" style=\"margin-top: 20px;\">\n    <div class=\"row\">\n      <div class=\"col-xs-4 col-md-offset-4\">\n        <div class=\"login\" id=\"card\">\n          <div class=\"front signin_form\">\n            <p>Login To iQU System</p>\n            <form #LoginForm=\"ngForm\" class=\"login-form\">\n              <div class=\"form-group\">\n                <div class=\"input-group\">\n                  <input name=\"userEmail\" type=\"email\" class=\"form-control\" placeholder=\"Type your email\" ngModel>\n                  <span class=\"input-group-addon\">\n                                          <i class=\"glyphicon glyphicon-user\"></i>\n                                      </span>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"input-group\">\n                  <input name=\"userPassword\" type=\"password\" class=\"form-control\" placeholder=\"Type your password\" ngModel>\n                  <span class=\"input-group-addon\">\n                    <i class=\"glyphicon glyphicon-lock\"></i>\n                  </span>\n                </div>\n              </div>\n\n              <div class=\"form-group sign-btn\">\n                <input  class=\"btn\" value=\"Log in\" (click)=\"login(LoginForm)\">\n                <p class=\"options\" >\n                  <strong>Can't access your account?</strong>\n                  <br>\n                  <a routerLink=\"/reset\" id=\"\" class=\"signup signup_link\">\n                    Reset password</a></p>\n                <p class=\"options\" >\n                  <strong>New to iQU?</strong>\n                  <br>\n                    <a routerLink=\"/register\" href=\"#\" id=\"flip-btn\" class=\"signup signup_link\">\n                      Sign up for a new account</a></p>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jQuery-Flip/1.0.18/jquery.flip.js\"></script>\n\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(auth, firestore, router, userService) {
        this.isLoginPage = true;
        this.auth = auth;
        this.firestore = firestore;
        this.router = router;
        this.userService = userService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (loginForm) {
        var _this = this;
        var email = loginForm.value.userEmail;
        var password = loginForm.value.userPassword;
        this.auth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) {
            var uid = _this.auth.auth.currentUser.uid;
            _this.firestore.doc('instructors/' + uid).valueChanges().subscribe(function (data) {
                console.log(data);
                _this.userService.setUserLoggedIn();
                _this.router.navigate(['/sections'], { queryParams: { returnUrl: '' } });
            });
        }).catch(function (error) {
            console.log(error);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-brand {\r\n  position: relative;\r\n  z-index: 2;\r\n\r\n}\r\n\r\n.navbar-nav.navbar-right .btn {\r\n  position: relative;\r\n  z-index: 2;\r\n  padding: 4px 20px;\r\n  margin: 10px auto;\r\n}\r\n\r\n.navbar .navbar-collapse {\r\n  position: relative;\r\n}\r\n\r\n.navbar .navbar-collapse .navbar-right > li:last-child {\r\n  padding-left: 22px;\r\n}\r\n\r\n.navbar .nav-collapse {\r\n  position: absolute;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  margin: 0;\r\n  padding-right: 120px;\r\n  padding-left: 80px;\r\n  width: 100%;\r\n}\r\n\r\n.navbar.navbar-default .nav-collapse {\r\n  background-color: #f8f8f8;\r\n}\r\n\r\n.navbar.navbar-inverse .nav-collapse {\r\n  background-color: #222;\r\n}\r\n\r\n.navbar .nav-collapse .navbar-form {\r\n  border-width: 0;\r\n  box-shadow: none;\r\n}\r\n\r\n.nav-collapse > li {\r\n  float: right;\r\n}\r\n\r\n.btn.btn-circle {\r\n  border-radius: 50px;\r\n}\r\n\r\n.btn.btn-outline {\r\n  background-color: transparent;\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n  .navbar .navbar-collapse .navbar-right > li:last-child {\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n  }\r\n\r\n  .navbar .nav-collapse {\r\n    margin: 7.5px auto;\r\n    padding: 0;\r\n  }\r\n\r\n  .navbar .nav-collapse .navbar-form {\r\n    margin: 0;\r\n  }\r\n\r\n  .nav-collapse > li {\r\n    float: none;\r\n  }\r\n}\r\n\r\n* {\r\n  font-family: Lato;\r\n  size: 24px;\r\n  font-weight: bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n\n<nav *ngIf=(auth.auth.currentUser) class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" style=\"background-color:#8190A5;\" >iQU</a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"navbar-collapse-1\">\n      <ul  class=\"nav navbar-nav navbar-left\">\n        <li><a routerLinkActive=\"class current\" routerLink=\"/sections\">Sections</a></li>\n        <li><a routerLinkActive=\"class current\" routerLink=\"/attendance\">Attendance</a></li>\n        <li><a routerLinkActive=\"class current\" routerLink=\"/quizzes\">Quizzes</a></li>\n\n\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n          <a *ngIf=(auth.auth.currentUser) class=\"nav navbar-nav navbar-right\" (click)=\"logout()\" >Logout</a>\n        </li>\n      </ul>\n    </div>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        this.auth.auth.signOut();
        this.router.navigate(['/login']);
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/new-section-dialog/new-section-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-dialog-content{\r\n  text-align: center;\r\n}\r\n.mat-dialog-actions{\r\n  text-align: center;\r\n}\r\n.mat-button{\r\n  margin: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-section-dialog/new-section-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Please fill the requirement information?</h1>\n<div mat-dialog-content>\n  <mat-form-field>\n    <label>Course Code</label> <input matTooltip=\"Example: CMPS311\" matInput [(ngModel)]=\"courseCode\">\n  </mat-form-field>\n</div>\n<div mat-dialog-content>\n\n  <mat-form-field>\n    <label>Section Number</label> <input matTooltip=\"Example: L02\" matInput [(ngModel)]=\"sectionNumber\">\n  </mat-form-field>\n</div>\n<div mat-dialog-content>\n  <mat-form-field>\n    <mat-select placeholder=\"Semester\" [(ngModel)]=\"semester\">\n      <mat-option value=\"Summer\">Summer</mat-option>\n      <mat-option value=\"Winter\">Winter</mat-option>\n      <mat-option value=\"Spring\">Spring</mat-option>\n      <mat-option value=\"Fall\">Fall</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n<div mat-dialog-content>\n  <mat-form-field>\n    <label>Year</label> <input type=\"number\" matTooltip=\"YYYY\"matInput [(ngModel)]=\"year\">\n  </mat-form-field>\n\n</div>\n<div mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"\" cdkFocusInitial (click)=\"addSection()\">Add Section</button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/new-section-dialog/new-section-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewSectionDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewSectionDialogComponent = (function () {
    function NewSectionDialogComponent(af, db) {
        this.af = af;
        this.db = db;
    }
    NewSectionDialogComponent.prototype.ngOnInit = function () {
    };
    NewSectionDialogComponent.prototype.addSection = function () {
        var newSection = this.semester + "_" + this.year + "_" + this.courseCode + "_" + this.sectionNumber;
        console.log("Add " + newSection.toUpperCase() + " to user with ID :" + this.af.auth.currentUser.uid);
        this.db.collection("sections").add({ userId: this.af.auth.currentUser.uid, section: newSection.toUpperCase() });
    };
    NewSectionDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-section-dialog',
            template: __webpack_require__("../../../../../src/app/new-section-dialog/new-section-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new-section-dialog/new-section-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], NewSectionDialogComponent);
    return NewSectionDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/qr-code-dialog/qr-code-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-dialog-content{\r\n  text-align: center;\r\n}\r\n.mat-dialog-actions{\r\n  text-align: center;\r\n}\r\n.mat-button{\r\n  margin: auto;\r\n}\r\n.mat-dialog-title{\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/qr-code-dialog/qr-code-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title >QR CODE TO SCAN</h1>\n<div mat-dialog-content >\n  <div>\n    <qr-code [value]=this.qrCode [size]=\"400\" ></qr-code>\n  </div>\n</div>\n<div mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"\" cdkFocusInitial (click)=\"stopGenerating()\">Close</button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/qr-code-dialog/qr-code-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrCodeDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QrCodeDialogComponent = (function () {
    function QrCodeDialogComponent(afs) {
        this.afs = afs;
        this.generating = false;
        this.stop = false;
        this.i = 0;
    }
    QrCodeDialogComponent.prototype.ngOnInit = function () {
        this.generateQRCode();
    };
    QrCodeDialogComponent.prototype.stopGenerating = function () {
        this.stop = true;
        this.generating = false;
        //to remove the last qrCode
        this.afs.collection("qrCodes").doc(this.qrCode).delete();
    };
    QrCodeDialogComponent.prototype.generateQRCode = function () {
        var _this = this;
        this.generating = true;
        this.afs.collection("qrCodes").add({ section: this.section }).then(function (data) {
            _this.qrCode = data.id;
            console.log(_this.i + " :" + _this.qrCode);
            _this.i++;
        });
        setInterval(function () {
            if (_this.stop != true) {
                _this.afs.collection("qrCodes").doc(_this.qrCode).delete();
                _this.afs.collection("qrCodes").add({ section: _this.section }).then(function (data) {
                    _this.qrCode = data.id;
                    console.log(_this.i + " :" + _this.qrCode);
                    _this.i++;
                });
            }
            else
                return;
        }, 10000);
    };
    QrCodeDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-qr-code-dialog',
            template: __webpack_require__("../../../../../src/app/qr-code-dialog/qr-code-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/qr-code-dialog/qr-code-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], QrCodeDialogComponent);
    return QrCodeDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/quizzes/quizzes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quizzes/quizzes.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  {{this.currentSection}}\n</p>\n\n<div class=\"container\">\n  <div class=\"form-group row\">\n\n    <div class=\"right\">\n      <button style=\"float: right\" type=\"button\" class=\"btn btn-primary\" (click)=\"openAddQuizDialog()\">Add Quiz\n      </button>\n    </div>\n\n  </div>\n\n  <mat-grid-list cols=\"3\" rowHeight=\"2:0.5\">\n    <mat-grid-tile class=\"btn\"\n                   *ngFor=\"let quiz of quizzesList | async\"\n                   style=\"font-family:Lato;\n                        font-size:20px;\n                        text-align: center;\n                         background-color: #E5E9F2;\n                        \">{{quiz.title}}\n\n    </mat-grid-tile>\n  </mat-grid-list>\n\n\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/quizzes/quizzes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizzesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuizzesComponent = (function () {
    function QuizzesComponent(route) {
        this.route = route;
    }
    QuizzesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.currentSection = params.section;
        });
    };
    QuizzesComponent.prototype.openAddQuizDialog = function () {
    };
    QuizzesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quizzes',
            template: __webpack_require__("../../../../../src/app/quizzes/quizzes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quizzes/quizzes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], QuizzesComponent);
    return QuizzesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:400,900,700,500,300,100);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway:400,500);", ""]);
exports.push([module.i, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css);", ""]);

// module
exports.push([module.i, "/* ==========================================================================\r\n   Author's custom styles\r\n   ========================================================================== */\r\n\r\nhtml, body {\r\n  margin-top: 150px;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: 'Raleway',sans-serif;\r\n  position: relative;\r\n  /*background: rgba(0, 0, 0, 0) url(\"../img/ptn.png\") repeat scroll 0 0;*/\r\n}\r\n\r\n.in-page {\r\n  min-height: 520px;\r\n}\r\n\r\n.main {\r\n  position: relative;\r\n}\r\n\r\na {\r\n  color: #1b5a7c;\r\n}\r\n\r\na:hover, a:focus {\r\n  color: #1b5a7c;\r\n}\r\n\r\n.btn-cyan {\r\n  background-color: #1b5a7c;\r\n  color: #fff;\r\n}\r\n\r\n.btn-cyan:hover {\r\n  color: #fff;\r\n  opacity: 0.9;\r\n}\r\n\r\n.form-control:focus {\r\n  border-color: #1b5a7c;\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(24, 204, 162, 0.6);\r\n  outline: 0 none;\r\n}\r\n\r\n.min-height {\r\n  min-height: 380px;\r\n}\r\n\r\n.register-screen {\r\n  background-image: url(https://www.squiz.net/__public/Systems/Perspective/FileCache/1-32000/465/prop/header-bg-image.jpg?t=1472431690);\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  -moz-background-size: cover;\r\n  -webkit-background-size: cover;\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n}\r\n\r\n.register-screen:before {\r\n  content: \"\";\r\n  background: rgba(0,0,0, 0.5);\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.register-center {\r\n  text-align: left;\r\n}\r\n\r\n.register {\r\n  width: 320px;\r\n  color: #fff;\r\n}\r\n\r\n.register .register-form {\r\n  text-align: left;\r\n}\r\n\r\n.register label {\r\n  color: #fff;\r\n}\r\n\r\n.register-form .input-group .form-control {\r\n  background: none;\r\n  height: 44px;\r\n  color: #ddd;\r\n}\r\n\r\n.register-form .input-group .input-group-addon {\r\n  background: none;\r\n}\r\n\r\n.register-form .input-group .input-group-addon .glyphicon {\r\n  color: #1b5a7c;\r\n}\r\n\r\n.register-form .input-group .form-control::-moz-placeholder {\r\n  color: #fff;\r\n  opacity: 0.3;\r\n}\r\n\r\n.register .sign-btn input.btn {\r\n  background: #1b5a7c;\r\n  border-color: #1b5a7c;\r\n  color: #fff;\r\n  width: 320px;\r\n}\r\n\r\n.register .sign-btn a {\r\n  text-decoration: none;\r\n}\r\n\r\n.register .checkbox {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.register .forgot {\r\n  display: inline-block;\r\n  text-align: center;\r\n  margin-left: 65px;\r\n  margin-top: 20px;\r\n\r\n}\r\n.register .newToIqu {\r\n  display: inline-block;\r\n  text-align: center;\r\n  margin-left: 65px;\r\n  margin-top: 20px;\r\n\r\n}\r\n\r\n\r\n\r\n.login .options {\r\n  display: inline-block;\r\n  text-align: center;\r\n  margin-left: 65px;\r\n  margin-top: 20px;\r\n\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"main\">\n\n<div class=\"register-screen\"></div>\n<div class=\"register-center\">\n  <div class=\"container min-height\" style=\"margin-top: 20px;\">\n    <div class=\"row\">\n      <div class=\"col-xs-4 col-md-offset-4\">\n        <div class=\"register\" id=\"card\">\n          <div class=\"back signup_form\" >\n            <p>Sign Up for Your New Account</p>\n            <form #registerForm=\"ngForm\" class=\"register-form\">\n              <div class=\"form-group\">\n                <div class=\"input-group\">\n                  <input name=\"userEmail\" type=\"email\" class=\"form-control\" placeholder=\"Email\" ngModel>\n                  <span class=\"input-group-addon\">\n                    <i class=\"glyphicon glyphicon-envelope\"></i>\n                  </span>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <div class=\"input-group\">\n                  <input name=\"userPassword1\" type=\"password\" class=\"form-control\" placeholder=\"Password\" ngModel>\n                  <span class=\"input-group-addon\">\n                    <i class=\"glyphicon glyphicon-lock\"></i>\n                  </span>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <div class=\"input-group\">\n                  <input name=\"userPassword2\" type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" ngModel >\n                  <span class=\"input-group-addon\">\n                    <i class=\"glyphicon glyphicon-lock\"></i>\n                  </span>\n                </div>\n              </div>\n\n\n              <div class=\"form-group sign-btn\">\n                <input  class=\"btn\" value=\"Sign up\" (click)=\"registerUser(registerForm)\">\n                <br><br>\n\n                <p>Already have an account?\n                  <a routerLink=\"/login\" id=\"unflip-btn\" class=\"signup\">Log in</a></p>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jQuery-Flip/1.0.18/jquery.flip.js\"></script>\n\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(auth, firestore) {
        this.auth = auth;
        this.firestore = firestore;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerUser = function (registerForm) {
        var _this = this;
        var email = registerForm.value.userEmail;
        var password1 = registerForm.value.userPassword1;
        var password2 = registerForm.value.userPassword2;
        /* if(!email.includes("@qu.edu.qa")){
           alert("NOT A QU EMAIL !")
         }else {*/
        if (password1 != password2) {
            alert("Please check your passwords again !");
            registerForm.resetForm({
                password1: '',
                password2: ''
            });
        }
        else {
            this.auth.auth.createUserWithEmailAndPassword(email, password1)
                .then(function (s) {
                _this.auth.auth.currentUser.sendEmailVerification()
                    .then(function (isSuccess) {
                    var uid = _this.auth.auth.currentUser.uid;
                    var email = _this.auth.auth.currentUser.email;
                    _this.firestore.collection('instructors').doc(uid).set({
                        userId: uid,
                        email: email
                    });
                    alert("Please check your email to verify your account !");
                })
                    .catch(function (error) {
                    console.log(error);
                });
            })
                .catch(function (error) {
                console.log(error);
            });
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reset-password/reset-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:400,900,700,500,300,100);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway:400,500);", ""]);
exports.push([module.i, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css);", ""]);

// module
exports.push([module.i, "/* ==========================================================================\r\n   Author's custom styles\r\n   ========================================================================== */\r\n\r\nhtml, body {\r\n  margin-top: 150px;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: 'Raleway',sans-serif;\r\n  position: relative;\r\n  /*background: rgba(0, 0, 0, 0) url(\"../img/ptn.png\") repeat scroll 0 0;*/\r\n}\r\n\r\n.in-page {\r\n  min-height: 520px;\r\n}\r\n\r\n.main {\r\n  position: relative;\r\n}\r\n\r\na {\r\n  color: #1b5a7c;\r\n}\r\n\r\na:hover, a:focus {\r\n  color: #1b5a7c;\r\n}\r\n\r\n.btn-cyan {\r\n  background-color: #1b5a7c;\r\n  color: #fff;\r\n}\r\n\r\n.btn-cyan:hover {\r\n  color: #fff;\r\n  opacity: 0.9;\r\n}\r\n\r\n.form-control:focus {\r\n  border-color: #1b5a7c;\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(24, 204, 162, 0.6);\r\n  outline: 0 none;\r\n}\r\n\r\n.min-height {\r\n  min-height: 380px;\r\n}\r\n\r\n.reset-screen {\r\n  background-image: url(https://www.squiz.net/__public/Systems/Perspective/FileCache/1-32000/465/prop/header-bg-image.jpg?t=1472431690);\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  -moz-background-size: cover;\r\n  -webkit-background-size: cover;\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n}\r\n\r\n.reset-screen:before {\r\n  content: \"\";\r\n  background: rgba(0,0,0, 0.5);\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.reset-center {\r\n  text-align: left;\r\n}\r\n\r\n.reset {\r\n  width: 320px;\r\n  color: #fff;\r\n}\r\n\r\n.reset .reset-form {\r\n  text-align: left;\r\n}\r\n\r\n.reset label {\r\n  color: #fff;\r\n}\r\n\r\n.reset-form .input-group .form-control {\r\n  background: none;\r\n  height: 44px;\r\n  color: #ddd;\r\n}\r\n\r\n.reset-form .input-group .input-group-addon {\r\n  background: none;\r\n}\r\n\r\n.reset-form .input-group .input-group-addon .glyphicon {\r\n  color: #1b5a7c;\r\n}\r\n\r\n.reset-form .input-group .form-control::-moz-placeholder {\r\n  color: #fff;\r\n  opacity: 0.3;\r\n}\r\n\r\n.reset .sign-btn input.btn {\r\n  background: #1b5a7c;\r\n  border-color: #1b5a7c;\r\n  color: #fff;\r\n  width: 320px;\r\n}\r\n\r\n.reset .sign-btn a {\r\n  text-decoration: none;\r\n}\r\n\r\n.reset .checkbox {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.reset .forgot {\r\n  display: inline-block;\r\n  text-align: center;\r\n  margin-left: 65px;\r\n  margin-top: 20px;\r\n\r\n}\r\n.reset .options {\r\n  display: inline-block;\r\n  text-align: center;\r\n  margin-left: 65px;\r\n  margin-top: 20px;\r\n\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reset-password/reset-password.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"main\">\n<br><br><br><br>\n<div class=\"reset-screen\"></div>\n<div class=\"reset-center\">\n  <div class=\"container min-height\" style=\"margin-top: 20px;\">\n    <div class=\"row\">\n      <div class=\"col-xs-4 col-md-offset-4\">\n        <div class=\"reset\" id=\"card\">\n          <div class=\"front signin_form\">\n            <p>Reset Password</p>\n            <form #resetForm=\"ngForm\" class=\"reset-form\">\n              <div class=\"form-group\">\n                <div class=\"input-group\">\n                  <input name=\"userEmail\" type=\"email\" class=\"form-control\" placeholder=\"Type your email\" ngModel>\n                  <span class=\"input-group-addon\">\n                                          <i class=\"glyphicon glyphicon-user\"></i>\n                                      </span>\n                </div>\n              </div>\n\n              <div class=\"form-group sign-btn\">\n                <input  class=\"btn\" value=\"Reset Password\" (click)=\"resetPassword(resetForm)\" >\n\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jQuery-Flip/1.0.18/jquery.flip.js\"></script>\n\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(af, router) {
        this.af = af;
        this.router = router;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordComponent.prototype.resetPassword = function (resetForm) {
        var _this = this;
        var email = resetForm.value.userEmail;
        this.af.auth.sendPasswordResetEmail(email)
            .then(function (success) {
            _this.router.navigate(['/login']);
        })
            .catch(function (err) {
            alert(err);
        });
    };
    ResetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__("../../../../../src/app/reset-password/reset-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sections/sections.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-xs-3{\r\n  float: left;\r\n}\r\n.right{\r\n  float: right;\r\n  margin-top: 20px;\r\n  margin-right: 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sections/sections.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"form-group row\">\n    <div class=\"col-xs-3\">\n      <label>Search Section:</label>\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"userFilter\">\n    </div>\n    <div class=\"right\">\n      <button style=\"float: right\" type=\"button\" class=\"btn btn-primary\" (click)=\"openAddSectionDialog()\">Add Section\n      </button>\n    </div>\n\n  </div>\n\n  <mat-grid-list cols=\"3\" rowHeight=\"2:0.5\">\n    <mat-grid-tile class=\"btn\" (click)=\"openFeaturesDialog(sec.section)\"\n                   *ngFor=\"let sec of sectionsList | async| search: userFilter \"\n                   style=\"font-family:Lato;\n                        font-size:20px;\n                        text-align: center;\n                         background-color: #E5E9F2;\n                        \">{{sec.section}}\n\n    </mat-grid-tile>\n  </mat-grid-list>\n\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/sections/sections.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_section_dialog_new_section_dialog_component__ = __webpack_require__("../../../../../src/app/new-section-dialog/new-section-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__features_features_component__ = __webpack_require__("../../../../../src/app/features/features.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SectionsComponent = (function () {
    function SectionsComponent(dialog, afs, afa) {
        this.dialog = dialog;
        this.afs = afs;
        this.afa = afa;
    }
    SectionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sectionsCol = this.afs.collection("sections", function (ref) {
            return ref.where("userId", "==", _this.afa.auth.currentUser.uid);
        });
        this.sectionsList = this.sectionsCol.valueChanges();
    };
    SectionsComponent.prototype.openAddSectionDialog = function () {
        this.newSectionDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__new_section_dialog_new_section_dialog_component__["a" /* NewSectionDialogComponent */], {
            hasBackdrop: true
        });
    };
    SectionsComponent.prototype.openFeaturesDialog = function (section) {
        var selectFeatureDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__features_features_component__["a" /* FeaturesComponent */], {
            hasBackdrop: true,
        });
        selectFeatureDialogRef.componentInstance.section = section;
    };
    SectionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sections',
            template: __webpack_require__("../../../../../src/app/sections/sections.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sections/sections.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], SectionsComponent);
    return SectionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/uploads/shared/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadService = (function () {
    function UploadService(db) {
        this.db = db;
        this.basePath = '/uploads';
    }
    UploadService.prototype.pushUpload = function (upload) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var uploadTask = storageRef.child(this.basePath + "/" + upload.file.name).put(upload.file);
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_2_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            // upload in progress
            upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
        }, function (error) {
            // upload failed
            console.log(error);
        }, function () {
            // upload success
            upload.url = uploadTask.snapshot.downloadURL;
            upload.name = upload.file.name;
            _this.saveFileData(upload);
        });
    };
    // Writes the file details to the realtime db
    UploadService.prototype.saveFileData = function (upload) {
        this.db.list(this.basePath + "/").push(upload);
    };
    UploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "../../../../../src/app/uploads/shared/upload.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Upload; });
var Upload = (function () {
    function Upload(file) {
        this.createdAt = new Date();
        this.file = file;
    }
    return Upload;
}());



/***/ }),

/***/ "../../../../../src/app/uploads/upload-form/upload-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/uploads/upload-form/upload-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"currentUpload\">\n  <div class=\"progress\">\n    <div class=\"progress-bar progress-bar-animated\" [ngStyle]=\"{ 'width': currentUpload?.progress + '%' }\"></div>\n  </div>\n  Progress: {{currentUpload?.name}} | {{currentUpload?.progress}}% Complete\n</div>\n<label>\n  <input type=\"file\" (change)=\"detectFiles($event)\">\n</label>\n<button\n  [disabled]=\"!selectedFiles\"\n  (click)=\"uploadSingle()\">\n  Upload Single\n</button>\n"

/***/ }),

/***/ "../../../../../src/app/uploads/upload-form/upload-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_upload_service__ = __webpack_require__("../../../../../src/app/uploads/shared/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_upload__ = __webpack_require__("../../../../../src/app/uploads/shared/upload.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadFormComponent = (function () {
    function UploadFormComponent(upSvc) {
        this.upSvc = upSvc;
    }
    UploadFormComponent.prototype.detectFiles = function (event) {
        this.selectedFiles = event.target.files;
    };
    UploadFormComponent.prototype.uploadSingle = function () {
        var file = this.selectedFiles.item(0);
        this.currentUpload = new __WEBPACK_IMPORTED_MODULE_2__shared_upload__["a" /* Upload */](file);
        this.upSvc.pushUpload(this.currentUpload);
    };
    UploadFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-upload-form',
            template: __webpack_require__("../../../../../src/app/uploads/upload-form/upload-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/uploads/upload-form/upload-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_upload_service__["a" /* UploadService */]])
    ], UploadFormComponent);
    return UploadFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = (function () {
    function UserService() {
        this.isUserLoggedIn = false;
    }
    UserService.prototype.setUserLoggedIn = function () {
        this.isUserLoggedIn = true;
    };
    UserService.prototype.getUserState = function () {
        return this.isUserLoggedIn;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyC7su25ParP6J7-GcYCBwJnduynO3DoFo0",
        authDomain: "iqu-system.firebaseapp.com",
        databaseURL: "https://iqu-system.firebaseio.com",
        projectId: "iqu-system",
        storageBucket: "iqu-system.appspot.com",
        messagingSenderId: "500834448912"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map