"use strict";
(self["webpackChunkng"] = self["webpackChunkng"] || []).push([["src_app_layout_users_users_module_ts"],{

/***/ 54028:
/*!***************************************************************!*\
  !*** ./src/app/layout/users/user-form/user-form.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserFormComponent": () => (/* binding */ UserFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _user_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-form.component.html?ngResource */ 64985);
/* harmony import */ var _user_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-form.component.scss?ngResource */ 59310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/components */ 1657);
/* harmony import */ var _services_users_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/users/user.service */ 21554);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ 42777);











let UserFormComponent = class UserFormComponent {
    constructor(spinner, userService, router, formBuilder, location, validationService, actRoutes, toastService) {
        this.spinner = spinner;
        this.userService = userService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.location = location;
        this.validationService = validationService;
        this.actRoutes = actRoutes;
        this.toastService = toastService;
        this.submitted = false;
        this.userForm = this.formBuilder.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            // email: new FormControl('', [
            //   Validators.required,
            //   this.validationService.emailValidator,
            // ]),
            mobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl({ value: 'ADMIN', disabled: true }, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
            ]),
        });
    }
    ngOnInit() {
        this.actRoutes.queryParams.subscribe((params) => {
            if (params.id) {
                this.getById(params.id);
            }
        });
    }
    get form() {
        return this.userForm.controls;
    }
    submit() {
        this.submitted = true;
        this.userForm.controls.role.enable();
        if (this.userForm.invalid) {
            this.toastService.warning('Please fill all required field !');
            return;
        }
        let formData = this.userForm.value;
        if (formData.id) {
            this.update(formData);
        }
        else {
            delete formData.id;
            this.create(formData);
        }
    }
    create(formData) {
        this.spinner.show();
        this.userService.createUser(formData).subscribe((success) => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(['users/users']);
        });
    }
    update(formData) {
        this.spinner.show();
        this.userService.updateUser(formData.id, formData).subscribe((success) => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(['users/users']);
        });
    }
    getById(id) {
        this.userService.profile(id).subscribe((success) => {
            success.confirmPassword = success.password;
            this.userForm.patchValue(success);
            this.userForm.controls.role.disable();
        });
    }
    goBack() {
        this.location.back();
    }
};
UserFormComponent.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerService },
    { type: _services_users_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location },
    { type: _core_components__WEBPACK_IMPORTED_MODULE_2__.ValidationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService }
];
UserFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-user-form',
        template: _user_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserFormComponent);



/***/ }),

/***/ 67884:
/*!***************************************************************!*\
  !*** ./src/app/layout/users/user-list/user-list.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListComponent": () => (/* binding */ UserListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _user_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list.component.html?ngResource */ 10289);
/* harmony import */ var _user_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-list.component.scss?ngResource */ 91226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services */ 98138);
/* harmony import */ var _services_users_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/users/user.service */ 21554);










let UserListComponent = class UserListComponent {
    constructor(userService, router, storageService, modalService, toastService, spinner) {
        this.userService = userService;
        this.router = router;
        this.storageService = storageService;
        this.modalService = modalService;
        this.toastService = toastService;
        this.spinner = spinner;
        this.selectedRow = {};
        this.users = [];
        this.search = '';
        this.page = 1;
        this.pageSize = 10;
        this.collection = 0;
        // pages: number = 1;
        this.userDetails = {};
    }
    ngOnInit() {
        this.userDetails = this.storageService.get('user');
        this.getAll();
    }
    getAll() {
        this.spinner.show();
        let params = {
            page: this.page,
            pageSize: this.pageSize,
            search: this.search,
        };
        this.userService.getAllUsers(params).subscribe((success) => {
            this.users = success.data;
            this.collection = success.count;
            this.spinner.hide();
        }, (error) => {
            this.spinner.hide();
            this.toastService.error('Something Went Wrong!');
        });
    }
    navigateTo(path, id) {
        if (id) {
            this.router.navigate([path], { queryParams: { id } });
        }
        else {
            this.router.navigate([path]);
        }
    }
    refreshList(title) {
        this.search = title == 'clear' ? '' : this.search;
        this.getAll();
    }
    onChangePage(pageNo) {
        if (pageNo > 0) {
            this.page = pageNo;
        }
        this.getAll();
    }
    open(u, content) {
        this.selectedRow = u;
        this.modalService.open(content, { centered: true });
    }
    deleteUser(id) {
        this.userService.deleteUser(id).subscribe((success) => {
            this.getAll();
            this.selectedRow = {};
            this.modalService.dismissAll();
            this.toastService.success(success.message);
        }, (error) => {
            this.selectedRow = {};
            this.modalService.dismissAll();
        });
    }
};
UserListComponent.ctorParameters = () => [
    { type: _services_users_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_core_services__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService }
];
UserListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-user-list',
        template: _user_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserListComponent);



/***/ }),

/***/ 97290:
/*!******************************************************!*\
  !*** ./src/app/layout/users/users-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersRoutingModule": () => (/* binding */ UsersRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list/user-list.component */ 67884);
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-form/user-form.component */ 54028);





const userRoutes = [
    {
        path: '',
        data: {
            title: 'Users',
        },
        children: [
            {
                path: '',
                redirectTo: 'users',
            },
            {
                path: 'users',
                component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_0__.UserListComponent,
                data: {
                    title: 'Users List',
                },
            },
            {
                path: 'users-form',
                component: _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_1__.UserFormComponent,
                data: {
                    title: 'Users Form',
                },
            },
        ],
    },
];
let UsersRoutingModule = class UsersRoutingModule {
};
UsersRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(userRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], UsersRoutingModule);



/***/ }),

/***/ 87754:
/*!**********************************************!*\
  !*** ./src/app/layout/users/users.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersModule": () => (/* binding */ UsersModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list/user-list.component */ 67884);
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-form/user-form.component */ 54028);
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users-routing.module */ 97290);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/core.module */ 40294);
/* harmony import */ var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/truncate.pipe */ 45911);







let UsersModule = class UsersModule {
};
UsersModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_0__.UserListComponent, _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_1__.UserFormComponent, _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_4__.TruncatePipe],
        imports: [_users_routing_module__WEBPACK_IMPORTED_MODULE_2__.UsersRoutingModule, _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule.forRoot()],
    })
], UsersModule);



/***/ }),

/***/ 45911:
/*!****************************************!*\
  !*** ./src/app/pipes/truncate.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TruncatePipe": () => (/* binding */ TruncatePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let TruncatePipe = class TruncatePipe {
    transform(value, maxLength) {
        if (value.length <= maxLength) {
            return value;
        }
        else {
            return value.slice(0, maxLength) + '...';
        }
    }
};
TruncatePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'truncate'
    })
], TruncatePipe);



/***/ }),

/***/ 59310:
/*!****************************************************************************!*\
  !*** ./src/app/layout/users/user-form/user-form.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".card-size {\n  width: 40em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJ1c2VyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1zaXple1xuICAgIHdpZHRoOiA0MGVtO1xufSJdfQ== */";

/***/ }),

/***/ 91226:
/*!****************************************************************************!*\
  !*** ./src/app/layout/users/user-list/user-list.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".table-sticky > thead > tr > th,\n.table-sticky > thead > tr > td {\n  top: -2px;\n  position: sticky;\n  z-index: 9;\n}\n\n.user-table::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n}\n\n.user-table::-webkit-scrollbar-track {\n  background: #fff;\n}\n\n.user-table::-webkit-scrollbar-thumb {\n  background-color: #344e5f;\n  border-radius: 20px;\n}\n\n.user-table {\n  height: 400px;\n  display: block;\n  overflow-y: scroll;\n  overflow-x: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7RUFFRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBRkY7O0FBS0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUZGIiwiZmlsZSI6InVzZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbi50YWJsZS1zdGlja3k+dGhlYWQ+dHI+dGgsXG4udGFibGUtc3RpY2t5PnRoZWFkPnRyPnRkIHtcbiAgdG9wOiAtMnB4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB6LWluZGV4OiA5O1xufVxuXG4udXNlci10YWJsZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDVweDtcbn1cblxuLnVzZXItdGFibGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLnVzZXItdGFibGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0NGU1ZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLnVzZXItdGFibGUge1xuICBoZWlnaHQ6IDQwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG59XG5cbiJdfQ== */";

/***/ }),

/***/ 64985:
/*!****************************************************************************!*\
  !*** ./src/app/layout/users/user-form/user-form.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container-fluid animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <div class=\"row justify-content-between align-items-center\">\n        <div class=\"col-auto\">\n          <h3 class=\"mb-0\">Admin Form</h3>\n        </div>\n        <div class=\"col-auto\">\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"goBack()\">\n            <i class=\"fa fa-arrow-left me-1\" aria-hidden=\"true\"></i>\n            Back\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <form [formGroup]=\"userForm\" class=\"form-horizontal\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"mb-3\">\n              <label class=\"form-label\">\n                First Name\n                <span class=\"text-danger\">*</span>\n              </label>\n              <input\n                formControlName=\"firstName\"\n                type=\"text\"\n                class=\"form-control\"\n                [ngClass]=\"{\n                  'is-invalid':\n                    form.firstName.invalid &&\n                    submitted &&\n                    (form.firstName.touched || form.firstName.dirty)\n                }\"\n                placeholder=\"Enter First Name\"\n              />\n              <validation-messages [control]=\"form['firstName']\">\n              </validation-messages>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"mb-3\">\n              <label class=\"form-label\">\n                Last Name\n                <span class=\"text-danger\">*</span>\n              </label>\n              <input\n                formControlName=\"lastName\"\n                type=\"text\"\n                class=\"form-control\"\n                [ngClass]=\"{\n                  'is-invalid':\n                    form.lastName.invalid &&\n                    submitted &&\n                    form.lastName.touched &&\n                    form.lastName.dirty\n                }\"\n                placeholder=\"Enter Last Name\"\n              />\n              <validation-messages [control]=\"form['lastName']\">\n              </validation-messages>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"mb-3\">\n              <label class=\"form-label\">\n                Mobile Number\n                <span class=\"text-danger\">*</span>\n              </label>\n              <input\n                formControlName=\"mobileNo\"\n                type=\"number\"\n                \n                class=\"form-control\"\n                minlength=\"10\"\n                maxlength=\"10\"\n                [ngClass]=\"{\n                  'is-invalid':\n                    form.mobileNo.invalid &&\n                    submitted &&\n                    (form.mobileNo.touched || form.mobileNo.dirty)\n                }\"\n                placeholder=\"Enter Mobile Number\"\n              />\n              <validation-messages [control]=\"form['mobileNo']\">\n              </validation-messages>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"mb-3\">\n              <label class=\"form-label\">\n                Password\n                <span class=\"text-danger\">*</span>\n              </label>\n              <input\n                formControlName=\"password\"\n                type=\"password\"\n                class=\"form-control\"\n                [ngClass]=\"{\n                  'is-invalid':\n                    form.password.invalid &&\n                    submitted &&\n                    (form.password.touched || form.password.dirty)\n                }\"\n                placeholder=\"Enter Password\"\n              />\n              <validation-messages [control]=\"form['password']\">\n              </validation-messages>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"mb-3\">\n              <label class=\"form-label\"\n                >Role<span class=\"text-danger\">*</span></label\n              >\n              <select\n                formControlName=\"role\"\n                placeholder=\"Select Role\"\n                class=\"form-select\"\n                [ngClass]=\"{\n                  'is-invalid':\n                    form.role.invalid &&\n                    submitted &&\n                    (form.role.touched || form.role.dirty)\n                }\"\n              >\n                <option selected disabled [value]=\"null\">Select Role</option>\n                <option value=\"ADMIN\">ADMIN</option>\n                <option value=\"SUPER_ADMIN\">SUPER_ADMIN</option>\n              </select>\n              <validation-messages [control]=\"form['role']\">\n              </validation-messages>\n            </div>\n          </div>\n        </div>\n      </form>\n      <div class=\"text-center\">\n        <button\n          (click)=\"submit()\"\n          type=\"submit\"\n          class=\"btn btn-success text-white\"\n        >\n          {{ form.id.value ? \"Update\" : \"Save\" }}\n        </button>\n        <button (click)=\"goBack()\" class=\"btn btn-danger\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 10289:
/*!****************************************************************************!*\
  !*** ./src/app/layout/users/user-list/user-list.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container-fluid animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <div class=\"row justify-content-between align-items-center\">\n        <div class=\"col-auto\">\n          <h3 class=\"mb-0\">Admins</h3>\n        </div>\n        <div\n          class=\"col-auto\"\n          *ngIf=\"\n            userDetails.role == 'SUPER_ADMIN' ||\n            userDetails.role == 'ADMIN' ||\n            userDetails.role == 'CUSTOMER'\n          \"\n        >\n          <button\n            type=\"button\"\n            (click)=\"navigateTo('users/users-form', null)\"\n            class=\"btn btn-outline-primary\"\n          >\n            <i class=\"fa fa-plus-circle me-1\"></i>\n            Admin\n          </button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card-body\">\n      <div class=\"row mb-2\">\n        <div class=\"col-md-5\">\n          <form class=\"d-flex\">\n            <input\n              class=\"form-control\"\n              type=\"search\"\n              placeholder=\"Search\"\n              aria-label=\"Search\"\n              [(ngModel)]=\"search\"\n              [ngModelOptions]=\"{ standalone: true }\"\n              (keyup)=\"refreshList('search')\"\n            />\n            <button\n              class=\"btn btn-outline-danger\"\n              type=\"submit\"\n              (click)=\"refreshList('clear')\"\n              ngbTooltip=\"Clear Filter\"\n            >\n              <i class=\"fa fa-remove\"></i>\n            </button>\n          </form>\n        </div>\n      </div>\n      <div class=\"table-responsive text-nowrap\">\n        <table\n          class=\"table table-striped table-hover table-bordered table-sticky\"\n        >\n          <thead class=\"table-primary\">\n            <tr>\n              <th>Sr.No</th>\n              <th>Name</th>\n              <!-- <th>Email</th> -->\n              <th>Mobile No.</th>\n              <th>Role</th>\n              <th>Created At</th>\n              <th\n                *ngIf=\"\n                  userDetails.role == 'SUPER_ADMIN' ||\n                  userDetails.role == 'ADMIN' ||\n                  userDetails.role == 'CUSTOMER'\n                \"\n              >\n                Action\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let u of users; let i = index\">\n              <td>{{ pageSize * (page - 1) + (i + 1) }}</td>\n              <td>{{ u.firstName }}</td>\n              <td>{{ u.mobileNo }}</td>\n              <td>{{ u.role }}</td>\n              <td>{{ u.createdAt }}</td>\n              <!-- <td\n                *ngIf=\"\n                  userDetails.role == 'SUPER_ADMIN' ||\n                  userDetails.role == 'ADMIN' ||\n                  userDetails.role == 'CUSTOMER'\n                \"\n              >\n                <div *ngIf=\"userDetails._id == u._id\" class=\"mt-3 ms-1\">\n                  <p style=\"color: rgb(20, 201, 20); font-weight: 700\">\n                    Current User\n                  </p>\n                </div>\n                <div *ngIf=\"userDetails._id != u._id\">\n                  <button\n                    (click)=\"navigateTo('/users/users-form', u._id)\"\n                    class=\"btn btn-sm btn-outline-warning me-1\"\n                    ngbTooltip=\"Edit User\"\n                  >\n                    <i class=\"fa fa-pencil me-1\"></i> view customes\n                  </button>\n                  \n                  <button\n                    class=\"btn btn-sm btn-outline-danger\"\n                    data-toggle=\"modal\"\n                    [disabled]=\"u.role == 'SUPER_ADMIN'\"\n                    (click)=\"open(u, alertMsg)\"\n                    ngbTooltip=\"Delete User\"\n                  >\n                    <i class=\"fa fa-trash me-1\"></i> delete\n                  </button>\n                </div>\n              </td> -->\n              <td>\n                <button\n                  (click)=\"navigateTo('/users/users-form', u.id)\"\n                  class=\"btn btn-sm btn-outline-success me-1\"\n                  ngbTooltip=\"Edit User\"\n                >\n                  <i class=\"fa fa-pencil me-1\"></i>\n                </button>\n                <button\n                  class=\"btn btn-sm btn-outline-danger\"\n                  data-toggle=\"modal\"\n                  [disabled]=\"u.role == 'SUPER_ADMIN'\"\n                  (click)=\"open(u, alertMsg)\"\n                  ngbTooltip=\"Delete User\"\n                >\n                  <i class=\"fa fa-trash me-1\"></i>\n                </button>\n                <button\n                (click)=\"navigateTo('/users/users-form', u.id)\"\n                class=\"btn btn-sm btn-outline-success me-1\"\n                ngbTooltip=\"View User\"\n              >\n                <i class=\"fa fa-eye me-1\"></i>\n              </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <app-custom-pagination\n        [(page)]=\"page\"\n        [(pageSize)]=\"pageSize\"\n        [(collection)]=\"collection\"\n        (myOutput)=\"onChangePage(page)\"\n      ></app-custom-pagination>\n    </div>\n  </div>\n</div>\n<ng-template #alertMsg let-modal>\n  <div class=\"row mt-3 me-3\">\n    <div class=\"col-md-10 col-sm-10\"></div>\n    <div class=\"col-md-2 col-sm-2 text-right\">\n      <button\n        type=\"button\"\n        class=\"close\"\n        data-dismiss=\"modal\"\n        aria-label=\"Close\"\n        (click)=\"modal.dismiss('Cross click')\"\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n  </div>\n  <div class=\"modal-body text-center px-0\">\n    <img\n      src=\"../../../../assets/img/warning.png\"\n      class=\"mb-3\"\n      width=\"100\"\n      alt=\"\"\n    />\n    <h4 class=\"text-warning\">Are you sure you want to Delete ?</h4>\n    <div class=\"clearfix modal-text\">\n      <label *ngIf=\"selectedRow.userName\">\n        <h3>{{ selectedRow.userName }}</h3>\n      </label>\n    </div>\n  </div>\n  <div class=\"model-footer border-0 text-center px-0 pb-4\">\n    <div class=\"clearfix py-2\">\n      <button\n        class=\"btn btn-danger me-2\"\n        (click)=\"deleteUser(this.selectedRow.id)\"\n      >\n        OK\n      </button>\n      <button class=\"btn btn-success\" (click)=\"modal.dismiss('Cross click')\">\n        Cancel\n      </button>\n    </div>\n  </div>\n</ng-template>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_layout_users_users_module_ts.4b184a6c04c67689.js.map