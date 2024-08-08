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

module.exports = ".card-size {\n  width: 40em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJ1c2VyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1zaXple1xyXG4gICAgd2lkdGg6IDQwZW07XHJcbn0iXX0= */";

/***/ }),

/***/ 91226:
/*!****************************************************************************!*\
  !*** ./src/app/layout/users/user-list/user-list.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".table-sticky > thead > tr > th,\n.table-sticky > thead > tr > td {\n  top: -2px;\n  position: sticky;\n  z-index: 9;\n}\n\n.user-table::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n}\n\n.user-table::-webkit-scrollbar-track {\n  background: #fff;\n}\n\n.user-table::-webkit-scrollbar-thumb {\n  background-color: #344e5f;\n  border-radius: 20px;\n}\n\n.user-table {\n  height: 400px;\n  display: block;\n  overflow-y: scroll;\n  overflow-x: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7RUFFRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBRkY7O0FBS0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUZGIiwiZmlsZSI6InVzZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi50YWJsZS1zdGlja3k+dGhlYWQ+dHI+dGgsXHJcbi50YWJsZS1zdGlja3k+dGhlYWQ+dHI+dGQge1xyXG4gIHRvcDogLTJweDtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHotaW5kZXg6IDk7XHJcbn1cclxuXHJcbi51c2VyLXRhYmxlOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDVweDtcclxuICBoZWlnaHQ6IDVweDtcclxufVxyXG5cclxuLnVzZXItdGFibGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4udXNlci10YWJsZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDRlNWY7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLnVzZXItdGFibGUge1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcclxufVxyXG5cclxuIl19 */";

/***/ }),

/***/ 64985:
/*!****************************************************************************!*\
  !*** ./src/app/layout/users/user-form/user-form.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container-fluid animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row justify-content-between align-items-center\">\r\n        <div class=\"col-auto\">\r\n          <h3 class=\"mb-0\">Admin Form</h3>\r\n        </div>\r\n        <div class=\"col-auto\">\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"goBack()\">\r\n            <i class=\"fa fa-arrow-left me-1\" aria-hidden=\"true\"></i>\r\n            Back\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <form [formGroup]=\"userForm\" class=\"form-horizontal\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"mb-3\">\r\n              <label class=\"form-label\">\r\n                First Name\r\n                <span class=\"text-danger\">*</span>\r\n              </label>\r\n              <input\r\n                formControlName=\"firstName\"\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                [ngClass]=\"{\r\n                  'is-invalid':\r\n                    form.firstName.invalid &&\r\n                    submitted &&\r\n                    (form.firstName.touched || form.firstName.dirty)\r\n                }\"\r\n                placeholder=\"Enter First Name\"\r\n              />\r\n              <validation-messages [control]=\"form['firstName']\">\r\n              </validation-messages>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"mb-3\">\r\n              <label class=\"form-label\">\r\n                Last Name\r\n                <span class=\"text-danger\">*</span>\r\n              </label>\r\n              <input\r\n                formControlName=\"lastName\"\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                [ngClass]=\"{\r\n                  'is-invalid':\r\n                    form.lastName.invalid &&\r\n                    submitted &&\r\n                    form.lastName.touched &&\r\n                    form.lastName.dirty\r\n                }\"\r\n                placeholder=\"Enter Last Name\"\r\n              />\r\n              <validation-messages [control]=\"form['lastName']\">\r\n              </validation-messages>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"mb-3\">\r\n              <label class=\"form-label\">\r\n                Mobile Number\r\n                <span class=\"text-danger\">*</span>\r\n              </label>\r\n              <input\r\n                formControlName=\"mobileNo\"\r\n                type=\"number\"\r\n                \r\n                class=\"form-control\"\r\n                minlength=\"10\"\r\n                maxlength=\"10\"\r\n                [ngClass]=\"{\r\n                  'is-invalid':\r\n                    form.mobileNo.invalid &&\r\n                    submitted &&\r\n                    (form.mobileNo.touched || form.mobileNo.dirty)\r\n                }\"\r\n                placeholder=\"Enter Mobile Number\"\r\n              />\r\n              <validation-messages [control]=\"form['mobileNo']\">\r\n              </validation-messages>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"mb-3\">\r\n              <label class=\"form-label\">\r\n                Password\r\n                <span class=\"text-danger\">*</span>\r\n              </label>\r\n              <input\r\n                formControlName=\"password\"\r\n                type=\"password\"\r\n                class=\"form-control\"\r\n                [ngClass]=\"{\r\n                  'is-invalid':\r\n                    form.password.invalid &&\r\n                    submitted &&\r\n                    (form.password.touched || form.password.dirty)\r\n                }\"\r\n                placeholder=\"Enter Password\"\r\n              />\r\n              <validation-messages [control]=\"form['password']\">\r\n              </validation-messages>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"mb-3\">\r\n              <label class=\"form-label\"\r\n                >Role<span class=\"text-danger\">*</span></label\r\n              >\r\n              <select\r\n                formControlName=\"role\"\r\n                placeholder=\"Select Role\"\r\n                class=\"form-select\"\r\n                [ngClass]=\"{\r\n                  'is-invalid':\r\n                    form.role.invalid &&\r\n                    submitted &&\r\n                    (form.role.touched || form.role.dirty)\r\n                }\"\r\n              >\r\n                <option selected disabled [value]=\"null\">Select Role</option>\r\n                <option value=\"ADMIN\">ADMIN</option>\r\n                <option value=\"SUPER_ADMIN\">SUPER_ADMIN</option>\r\n              </select>\r\n              <validation-messages [control]=\"form['role']\">\r\n              </validation-messages>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div class=\"text-center\">\r\n        <button\r\n          (click)=\"submit()\"\r\n          type=\"submit\"\r\n          class=\"btn btn-success text-white\"\r\n        >\r\n          {{ form.id.value ? \"Update\" : \"Save\" }}\r\n        </button>\r\n        <button (click)=\"goBack()\" class=\"btn btn-danger\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 10289:
/*!****************************************************************************!*\
  !*** ./src/app/layout/users/user-list/user-list.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container-fluid animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row justify-content-between align-items-center\">\r\n        <div class=\"col-auto\">\r\n          <h3 class=\"mb-0\">Admins</h3>\r\n        </div>\r\n        <div\r\n          class=\"col-auto\"\r\n          *ngIf=\"\r\n            userDetails.role == 'SUPER_ADMIN' ||\r\n            userDetails.role == 'ADMIN' ||\r\n            userDetails.role == 'CUSTOMER'\r\n          \"\r\n        >\r\n          <button\r\n            type=\"button\"\r\n            (click)=\"navigateTo('users/users-form', null)\"\r\n            class=\"btn btn-outline-primary\"\r\n          >\r\n            <i class=\"fa fa-plus-circle me-1\"></i>\r\n            Admin\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n      <div class=\"row mb-2\">\r\n        <div class=\"col-md-5\">\r\n          <form class=\"d-flex\">\r\n            <input\r\n              class=\"form-control\"\r\n              type=\"search\"\r\n              placeholder=\"Search\"\r\n              aria-label=\"Search\"\r\n              [(ngModel)]=\"search\"\r\n              [ngModelOptions]=\"{ standalone: true }\"\r\n              (keyup)=\"refreshList('search')\"\r\n            />\r\n            <button\r\n              class=\"btn btn-outline-danger\"\r\n              type=\"submit\"\r\n              (click)=\"refreshList('clear')\"\r\n              ngbTooltip=\"Clear Filter\"\r\n            >\r\n              <i class=\"fa fa-remove\"></i>\r\n            </button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-responsive text-nowrap\">\r\n        <table\r\n          class=\"table table-striped table-hover table-bordered table-sticky\"\r\n        >\r\n          <thead class=\"table-primary\">\r\n            <tr>\r\n              <th>Sr.No</th>\r\n              <th>Name</th>\r\n              <!-- <th>Email</th> -->\r\n              <th>Mobile No.</th>\r\n              <th>Role</th>\r\n              <th>Created At</th>\r\n              <th\r\n                *ngIf=\"\r\n                  userDetails.role == 'SUPER_ADMIN' ||\r\n                  userDetails.role == 'ADMIN' ||\r\n                  userDetails.role == 'CUSTOMER'\r\n                \"\r\n              >\r\n                Action\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let u of users; let i = index\">\r\n              <td>{{ pageSize * (page - 1) + (i + 1) }}</td>\r\n              <td>{{ u.firstName }}</td>\r\n              <td>{{ u.mobileNo }}</td>\r\n              <td>{{ u.role }}</td>\r\n              <td>{{ u.createdAt }}</td>\r\n              <!-- <td\r\n                *ngIf=\"\r\n                  userDetails.role == 'SUPER_ADMIN' ||\r\n                  userDetails.role == 'ADMIN' ||\r\n                  userDetails.role == 'CUSTOMER'\r\n                \"\r\n              >\r\n                <div *ngIf=\"userDetails._id == u._id\" class=\"mt-3 ms-1\">\r\n                  <p style=\"color: rgb(20, 201, 20); font-weight: 700\">\r\n                    Current User\r\n                  </p>\r\n                </div>\r\n                <div *ngIf=\"userDetails._id != u._id\">\r\n                  <button\r\n                    (click)=\"navigateTo('/users/users-form', u._id)\"\r\n                    class=\"btn btn-sm btn-outline-warning me-1\"\r\n                    ngbTooltip=\"Edit User\"\r\n                  >\r\n                    <i class=\"fa fa-pencil me-1\"></i> view customes\r\n                  </button>\r\n                  \r\n                  <button\r\n                    class=\"btn btn-sm btn-outline-danger\"\r\n                    data-toggle=\"modal\"\r\n                    [disabled]=\"u.role == 'SUPER_ADMIN'\"\r\n                    (click)=\"open(u, alertMsg)\"\r\n                    ngbTooltip=\"Delete User\"\r\n                  >\r\n                    <i class=\"fa fa-trash me-1\"></i> delete\r\n                  </button>\r\n                </div>\r\n              </td> -->\r\n              <td>\r\n                <button\r\n                  (click)=\"navigateTo('/users/users-form', u.id)\"\r\n                  class=\"btn btn-sm btn-outline-success me-1\"\r\n                  ngbTooltip=\"Edit User\"\r\n                >\r\n                  <i class=\"fa fa-pencil me-1\"></i>\r\n                </button>\r\n                <button\r\n                  class=\"btn btn-sm btn-outline-danger\"\r\n                  data-toggle=\"modal\"\r\n                  [disabled]=\"u.role == 'SUPER_ADMIN'\"\r\n                  (click)=\"open(u, alertMsg)\"\r\n                  ngbTooltip=\"Delete User\"\r\n                >\r\n                  <i class=\"fa fa-trash me-1\"></i>\r\n                </button>\r\n                <button\r\n                (click)=\"navigateTo('/users/users-form', u.id)\"\r\n                class=\"btn btn-sm btn-outline-success me-1\"\r\n                ngbTooltip=\"View User\"\r\n              >\r\n                <i class=\"fa fa-eye me-1\"></i>\r\n              </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <app-custom-pagination\r\n        [(page)]=\"page\"\r\n        [(pageSize)]=\"pageSize\"\r\n        [(collection)]=\"collection\"\r\n        (myOutput)=\"onChangePage(page)\"\r\n      ></app-custom-pagination>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #alertMsg let-modal>\r\n  <div class=\"row mt-3 me-3\">\r\n    <div class=\"col-md-10 col-sm-10\"></div>\r\n    <div class=\"col-md-2 col-sm-2 text-right\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"close\"\r\n        data-dismiss=\"modal\"\r\n        aria-label=\"Close\"\r\n        (click)=\"modal.dismiss('Cross click')\"\r\n      >\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-body text-center px-0\">\r\n    <img\r\n      src=\"../../../../assets/img/warning.png\"\r\n      class=\"mb-3\"\r\n      width=\"100\"\r\n      alt=\"\"\r\n    />\r\n    <h4 class=\"text-warning\">Are you sure you want to Delete ?</h4>\r\n    <div class=\"clearfix modal-text\">\r\n      <label *ngIf=\"selectedRow.userName\">\r\n        <h3>{{ selectedRow.userName }}</h3>\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div class=\"model-footer border-0 text-center px-0 pb-4\">\r\n    <div class=\"clearfix py-2\">\r\n      <button\r\n        class=\"btn btn-danger me-2\"\r\n        (click)=\"deleteUser(this.selectedRow.id)\"\r\n      >\r\n        OK\r\n      </button>\r\n      <button class=\"btn btn-success\" (click)=\"modal.dismiss('Cross click')\">\r\n        Cancel\r\n      </button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_layout_users_users_module_ts.a333149ee1684aa5.js.map