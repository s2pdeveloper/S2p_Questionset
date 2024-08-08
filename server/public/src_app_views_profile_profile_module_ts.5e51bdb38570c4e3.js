"use strict";
(self["webpackChunkng"] = self["webpackChunkng"] || []).push([["src_app_views_profile_profile_module_ts"],{

/***/ 85887:
/*!*********************************************************!*\
  !*** ./src/app/views/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileRoutingModule": () => (/* binding */ ProfileRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component */ 59939);




const routes = [
    {
        path: '',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent,
        data: {
            title: 'Profile'
        }
    }
];
let ProfileRoutingModule = class ProfileRoutingModule {
};
ProfileRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ProfileRoutingModule);



/***/ }),

/***/ 59939:
/*!****************************************************!*\
  !*** ./src/app/views/profile/profile.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component.html?ngResource */ 28028);
/* harmony import */ var _profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component.scss?ngResource */ 45892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_users_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users/user.service */ 21554);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services */ 98138);









let ProfileComponent = class ProfileComponent {
    constructor(storageService, location, router, route, userService) {
        this.storageService = storageService;
        this.location = location;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.userDetails = [];
    }
    ngOnInit() {
        this.userDetails = this.storageService.get('user');
    }
    edit() {
        this.route.navigate(['companies/company-form'], {
            queryParams: {
                id: this.userDetails.id,
            },
        });
    }
    goBack() {
        this.location.back();
    }
};
ProfileComponent.ctorParameters = () => [
    { type: src_app_core_services__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_users_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
ProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-profile',
        template: _profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfileComponent);



/***/ }),

/***/ 38323:
/*!*************************************************!*\
  !*** ./src/app/views/profile/profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileModule": () => (/* binding */ ProfileModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ 53808);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 15896);
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/buttons */ 36615);
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component */ 59939);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-routing.module */ 85887);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);









let ProfileModule = class ProfileModule {
};
ProfileModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__.ProfileRoutingModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_8__.ChartsModule,
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__.BsDropdownModule,
            ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_1__.ButtonsModule.forRoot()
        ],
        declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent]
    })
], ProfileModule);



/***/ }),

/***/ 45892:
/*!*****************************************************************!*\
  !*** ./src/app/views/profile/profile.component.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = ".icon-mr i {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbi1tciBpe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 28028:
/*!*****************************************************************!*\
  !*** ./src/app/views/profile/profile.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container-fluid animated fadeIn\" style=\"padding: 20px; padding-top: 0px\">\r\n    <div class=\"card\" *ngIf=\"userDetails.role === 'SUPER_ADMIN' || userDetails.role === 'ADMIN'\">\r\n        <div class=\"card-header\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 align-self-center\">\r\n                    <h4 class=\"mb-0\">User Details</h4>\r\n                </div>\r\n                <div class=\"col-md-6 text-right\">\r\n                    <div class=\"text-right\">\r\n                            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"goBack()\">\r\n                                <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> Back\r\n                            </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-5 mx-auto\">\r\n                    <div class=\"card mb-0 shadow-sm\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"text-center\">\r\n                                <img src=\"assets/img/placeholder.jpg\"  width=\"100\" class=\"rounded-circle img-thumbnail\" alt=\"profile-image\">\r\n                            </div>\r\n                            <div class=\"text-center my-3\">\r\n                                <h5>\r\n                                    <span>Role :</span>\r\n                                    <span class=\"font-weight-bold\"> {{ userDetails.role }}</span>\r\n                                </h5>\r\n                            </div>\r\n                            <hr>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <h6 class=\"font-weight-bold\">First Name</h6>\r\n                                    <h6>{{ userDetails.firstName }}</h6>                                    \r\n                                </div>\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <h6 class=\"font-weight-bold\">Last Name</h6>\r\n                                    <h6>{{ userDetails.lastName }}</h6>\r\n                                </div>\r\n                            </div>\r\n                            <hr>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <h6 class=\"font-weight-bold\">User Name</h6>\r\n                                    <h6>{{ userDetails.userName }}</h6>                                    \r\n                                </div>\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <h6 class=\"font-weight-bold\">Location</h6>\r\n                                    <h6>{{ userDetails.location }}</h6>\r\n                                </div>\r\n                            </div>\r\n                            <hr>\r\n                            <h6 class=\"font-weight-bold\">Email Id</h6>\r\n                            <h6>{{ userDetails.email }}</h6>\r\n                            <hr>\r\n                            <h6 class=\"font-weight-bold\">Mobile Number</h6>\r\n                            <h6>{{ userDetails.mobile }}</h6>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" *ngIf=\"userDetails.role === 'COMPANY'\">\r\n        <div class=\"card-header\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-9 align-self-center\">\r\n                    <h4 class=\"mb-0\">User Details</h4>\r\n                </div>\r\n                <div class=\"col-md-3 text-right\">\r\n                    <div class=\"text-right\">\r\n                        <div role=\"group\" aria-label=\"Basic example\">\r\n                            <button type=\"button\" class=\"btn btn-warning\" (click)=\"edit()\">\r\n                                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit\r\n                            </button>\r\n                            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"goBack()\">\r\n                                <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> Back\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-5 mx-auto\">\r\n                    <div class=\"card mb-0 shadow-sm\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"text-center\">\r\n                                <img src=\"assets/img/placeholder.jpg\"  width=\"100\" class=\"rounded-circle img-thumbnail\" alt=\"profile-image\">\r\n                            </div>\r\n                            <div class=\"text-center my-3\">\r\n                                <h5>\r\n                                    <span>Role :</span>\r\n                                    <span class=\"font-weight-bold\"> {{ userDetails.role }}</span>\r\n                                </h5>\r\n                            </div>\r\n                            <hr>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <h6 class=\"font-weight-bold\">Company Name</h6>\r\n                                    <h6>{{ userDetails.name }}</h6>                                    \r\n                                </div>\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <h6 class=\"font-weight-bold\">Contact Person Name</h6>\r\n                                    <h6>{{ userDetails.contactPersonName }}</h6>\r\n                                </div>\r\n                            </div>\r\n                            <hr>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <h6 class=\"font-weight-bold\">Email Id</h6>\r\n                                    <h6>{{ userDetails.emailId }}</h6>                                    \r\n                                </div>\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <h6 class=\"font-weight-bold\">Mobile Number</h6>\r\n                                    <h6>{{ userDetails.mobileNo }}</h6>\r\n                                </div>\r\n                            </div>\r\n                            <hr>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <h6 class=\"font-weight-bold\">Company Type</h6>\r\n                                    <h6>{{ userDetails.companyType }}</h6>                                    \r\n                                </div>\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <h6 class=\"font-weight-bold\">Total Number of Employees</h6>\r\n                                    <h6>{{ userDetails.totalNoOfEmployees }}</h6>\r\n                                </div>\r\n                            </div>\r\n                            <hr>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <h6 class=\"font-weight-bold\">Address</h6>\r\n                                    <h6>{{ userDetails.address }}</h6>                                    \r\n                                </div>\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <h6 class=\"font-weight-bold\">Status</h6>\r\n                                    <h6>{{ userDetails.status }}</h6>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" *ngIf=\"userDetails.role === 'COLLEGE'\">\r\n        <div class=\"card-header\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-9 align-self-center\">\r\n                    <h4 class=\"mb-0\">User Details</h4>\r\n                </div>\r\n                <div class=\"col-md-3 text-right\">\r\n                    <div class=\"text-right\">\r\n                        <div role=\"group\" aria-label=\"Basic example\">\r\n                            <button type=\"button\" class=\"btn btn-warning\" (click)=\"edit()\">\r\n                                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit\r\n                            </button>\r\n                            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"goBack()\">\r\n                                <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> Back\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-5 mx-auto\">\r\n                    <div class=\"card mb-0 shadow-sm\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"text-center\">\r\n                                <img src=\"assets/img/placeholder.jpg\"  width=\"100\" class=\"rounded-circle img-thumbnail\" alt=\"profile-image\">\r\n                            </div>\r\n                            <div class=\"text-center my-3\">\r\n                                <h5>\r\n                                    <span>Role :</span>\r\n                                    <span class=\"font-weight-bold\"> {{ userDetails.role }}</span>\r\n                                </h5>\r\n                            </div>\r\n                            <hr>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <h6 class=\"font-weight-bold\">College Name</h6>\r\n                                    <h6>{{ userDetails.collegeName }}</h6>                                    \r\n                                </div>\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <h6 class=\"font-weight-bold\">Contact Person Name</h6>\r\n                                    <h6>{{ userDetails.contactPerson }}</h6>\r\n                                </div>\r\n                            </div>\r\n                            <hr>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <h6 class=\"font-weight-bold\">Email Id</h6>\r\n                                    <h6>{{ userDetails.email }}</h6>                                    \r\n                                </div>\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <h6 class=\"font-weight-bold\">Mobile Number</h6>\r\n                                    <h6>{{ userDetails.mobile }}</h6>\r\n                                </div>\r\n                            </div>\r\n                            <hr>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <h6 class=\"font-weight-bold\">Education Type</h6>\r\n                                    <h6>{{ userDetails.educationType }}</h6>                                    \r\n                                </div>\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <h6 class=\"font-weight-bold\">Type</h6>\r\n                                    <h6>{{ userDetails.type }}</h6>\r\n                                </div>\r\n                            </div>\r\n                            <hr>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <h6 class=\"font-weight-bold\">Address</h6>\r\n                                    <h6>{{ userDetails.stateId }}, {{ userDetails.districtId }}.</h6>                                    \r\n                                </div>\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <h6 class=\"font-weight-bold\">Status</h6>\r\n                                    <h6>{{ userDetails.status }}</h6>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_views_profile_profile_module_ts.5e51bdb38570c4e3.js.map