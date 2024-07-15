"use strict";
(self["webpackChunkng"] = self["webpackChunkng"] || []).push([["src_app_layout_seminars_seminars_module_ts"],{

/***/ 1644:
/*!************************************************************************!*\
  !*** ./src/app/layout/seminars/seminar-form/seminar-form.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeminarFormComponent": () => (/* binding */ SeminarFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _seminar_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seminar-form.component.html?ngResource */ 96631);
/* harmony import */ var _seminar_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seminar-form.component.scss?ngResource */ 94131);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_seminar_seminar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/seminar/seminar.service */ 32277);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 82808);










let SeminarFormComponent = class SeminarFormComponent {
    constructor(seminarService, router, formBuilder, actRoutes, location, toastService, spinner) {
        this.seminarService = seminarService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.actRoutes = actRoutes;
        this.location = location;
        this.toastService = toastService;
        this.spinner = spinner;
        this.submitted = false;
        this.action = '';
        this.seminarForm = this.formBuilder.group({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            college: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            dateOfSeminar: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            duration: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        });
    }
    ngOnInit() {
        this.actRoutes.queryParams.subscribe((params) => {
            this.action = params.action;
            if (params.id) {
                this.getById(params.id);
            }
        });
    }
    get form() {
        return this.seminarForm.controls;
    }
    getById(id) {
        this.seminarService.getSeminarById(id).subscribe((success) => {
            success.result[0].dateOfSeminar
                = success.result[0].dateOfSeminar
                    .split('T')[0];
            this.seminarForm.patchValue(success.result[0]);
        });
    }
    submit() {
        this.submitted = true;
        if (this.seminarForm.invalid) {
            this.toastService.warning('Please fill all required field!');
            return;
        }
        let formData = this.seminarForm.value;
        if (formData._id) {
            this.update(formData);
        }
        else {
            delete formData.id;
            this.create(formData);
        }
    }
    create(formData) {
        this.spinner.show();
        this.seminarService.addNewSeminar(formData).subscribe((success) => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(['seminars/seminars']);
        });
    }
    update(formData) {
        this.spinner.show();
        this.seminarService
            .updateSeminar(formData._id, formData)
            .subscribe((success) => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(['seminars/seminars']);
        });
    }
    goBack() {
        this.location.back();
    }
};
SeminarFormComponent.ctorParameters = () => [
    { type: _services_seminar_seminar_service__WEBPACK_IMPORTED_MODULE_2__.SeminarService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService }
];
SeminarFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-seminar-form',
        template: _seminar_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_seminar_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SeminarFormComponent);



/***/ }),

/***/ 39702:
/*!************************************************************************!*\
  !*** ./src/app/layout/seminars/seminar-list/seminar-list.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeminarListComponent": () => (/* binding */ SeminarListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _seminar_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seminar-list.component.html?ngResource */ 45539);
/* harmony import */ var _seminar_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seminar-list.component.scss?ngResource */ 81827);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_seminar_seminar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/seminar/seminar.service */ 32277);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);









let SeminarListComponent = class SeminarListComponent {
    constructor(router, seminarService, toastService, modalService, spinner) {
        this.router = router;
        this.seminarService = seminarService;
        this.toastService = toastService;
        this.modalService = modalService;
        this.spinner = spinner;
        this.selectedRow = {};
        this.seminarDetails = {};
        this.page = 1;
        this.pageSize = 5;
        this.search = '';
    }
    ngOnInit() {
        this.getAll();
    }
    getAll() {
        this.spinner.show();
        let params = {
            page: this.page,
            pageSize: this.pageSize,
            search: this.search,
        };
        this.seminarService.getAllSeminars(params).subscribe((success) => {
            var _a;
            console.log('Seminars', success);
            this.seminars = (_a = success === null || success === void 0 ? void 0 : success.result) === null || _a === void 0 ? void 0 : _a.data;
            // console.log(this.seminars);
            this.totalSeminars = success.result.totalCount;
            this.spinner.hide();
            // console.log(this.seminarDetails);
            // console.log(this.totalSeminars);
        }, (error) => {
            this.spinner.hide();
            this.toastService.error('Something Went Wrong!');
        });
    }
    onChangePage(pageNo) {
        if (pageNo > 0) {
            this.page = pageNo;
        }
        this.getAll();
    }
    navigateTo(path, id, action) {
        if (id) {
            this.router.navigate([path], { queryParams: { id, action } });
        }
        else {
            this.router.navigate([path], { queryParams: { action } });
        }
    }
    refreshList(title) {
        this.search = title == 'clear' ? '' : this.search;
        this.getAll();
    }
    open(s, content) {
        this.selectedRow = s;
        this.modalService.open(content, { centered: true });
    }
    deleteSeminarById(id) {
        this.seminarService.deleteSeminar(id).subscribe((success) => {
            console.log(success);
            this.getAll();
            this.selectedRow = {};
            this.modalService.dismissAll();
            this.toastService.success(success.result.message);
        }, (error) => {
            this.selectedRow = {};
            this.modalService.dismissAll();
            this.toastService.error('Something went Wrong!');
        });
    }
};
SeminarListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_seminar_seminar_service__WEBPACK_IMPORTED_MODULE_2__.SeminarService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerService }
];
SeminarListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-seminar-list',
        template: _seminar_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_seminar_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SeminarListComponent);



/***/ }),

/***/ 18810:
/*!************************************************************!*\
  !*** ./src/app/layout/seminars/seminars-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeminarsRoutingModule": () => (/* binding */ SeminarsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _seminar_list_seminar_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seminar-list/seminar-list.component */ 39702);
/* harmony import */ var _seminar_form_seminar_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seminar-form/seminar-form.component */ 1644);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);





const seminarRoutes = [
    {
        path: '',
        data: {
            title: 'Seminars',
        },
        children: [
            {
                path: '',
                redirectTo: 'seminars',
            },
            {
                path: 'seminars',
                component: _seminar_list_seminar_list_component__WEBPACK_IMPORTED_MODULE_0__.SeminarListComponent,
                data: {
                    title: 'Seminars List',
                },
            },
            {
                path: 'seminars-form',
                component: _seminar_form_seminar_form_component__WEBPACK_IMPORTED_MODULE_1__.SeminarFormComponent,
                data: {
                    title: 'Seminars Form',
                },
            },
        ],
    },
];
let SeminarsRoutingModule = class SeminarsRoutingModule {
};
SeminarsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(seminarRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], SeminarsRoutingModule);



/***/ }),

/***/ 90023:
/*!****************************************************!*\
  !*** ./src/app/layout/seminars/seminars.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeminarsModule": () => (/* binding */ SeminarsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _seminars_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seminars-routing.module */ 18810);
/* harmony import */ var _seminar_form_seminar_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seminar-form/seminar-form.component */ 1644);
/* harmony import */ var _seminar_list_seminar_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seminar-list/seminar-list.component */ 39702);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/core.module */ 40294);






let SeminarsModule = class SeminarsModule {
};
SeminarsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_seminar_form_seminar_form_component__WEBPACK_IMPORTED_MODULE_1__.SeminarFormComponent, _seminar_list_seminar_list_component__WEBPACK_IMPORTED_MODULE_2__.SeminarListComponent],
        imports: [_seminars_routing_module__WEBPACK_IMPORTED_MODULE_0__.SeminarsRoutingModule, _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule.forRoot()],
    })
], SeminarsModule);



/***/ }),

/***/ 94131:
/*!*************************************************************************************!*\
  !*** ./src/app/layout/seminars/seminar-form/seminar-form.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZW1pbmFyLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 81827:
/*!*************************************************************************************!*\
  !*** ./src/app/layout/seminars/seminar-list/seminar-list.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZW1pbmFyLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 96631:
/*!*************************************************************************************!*\
  !*** ./src/app/layout/seminars/seminar-form/seminar-form.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container-fluid animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <div class=\"row justify-content-between align-items-center\">\n        <div class=\"col-auto\">\n          <h3 class=\"mb-0\">Seminar Form</h3>\n        </div>\n        <div class=\"col-auto\">\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"goBack()\">\n            <i class=\"fa fa-arrow-left me-1\" aria-hidden=\"true\"></i>\n            Back\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <form [formGroup]=\"seminarForm\" class=\"form-horizontal\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"mb-3\">\n              <label class=\"form-label\">\n                Seminar Name\n                <span class=\"text-danger\">*</span>\n              </label>\n              <input\n                formControlName=\"name\"\n                type=\"text\"\n                class=\"form-control\"\n                placeholder=\"Enter Seminar Name\"\n                [ngClass]=\"{\n                  'is-invalid':\n                    form.name.invalid &&\n                    submitted &&\n                    (form.name.touched || form.name.dirty)\n                }\"\n              />\n              <validation-messages [control]=\"form['name']\">\n              </validation-messages>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"mb-3\">\n              <label class=\"form-label\">\n                Seminar Type\n                <span class=\"text-danger\">*</span>\n              </label>\n              <select\n                formControlName=\"type\"\n                placeholder=\"Select Type\"\n                class=\"form-select\"\n                [ngClass]=\"{\n                  'is-invalid':\n                    form.type.invalid &&\n                    submitted &&\n                    (form.type.touched || form.type.dirty)\n                }\"\n              >\n                <option disabled value=\"\">Select Type</option>\n                <option value=\"SEMINAR\">Seminar</option>\n                <option value=\"CLASS\">Class</option>\n                <option value=\"LECTURE\">Lecture</option>\n              </select>\n              <validation-messages [control]=\"form['type']\">\n              </validation-messages>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"mb-3\">\n              <label class=\"form-label\">\n                College Name\n                <span class=\"text-danger\">*</span>\n              </label>\n              <input\n                formControlName=\"college\"\n                type=\"text\"\n                class=\"form-control\"\n                placeholder=\"Enter College Name\"\n                [ngClass]=\"{\n                  'is-invalid':\n                    form.college.invalid &&\n                    submitted &&\n                    (form.college.touched || form.college.dirty)\n                }\"\n              />\n              <validation-messages [control]=\"form['college']\">\n              </validation-messages>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"mb-3\">\n              <label class=\"form-label\">\n                Date of Seminar\n                <span class=\"text-danger\">*</span>\n              </label>\n              <input\n                formControlName=\"dateOfSeminar\"\n                type=\"date\"\n                placeholder=\"Select Date\"\n                class=\"form-control\"\n                [ngClass]=\"{\n                  'is-invalid':\n                    form.dateOfSeminar.invalid &&\n                    submitted &&\n                    (form.dateOfSeminar.touched || form.dateOfSeminar.dirty)\n                }\"\n              />\n              <validation-messages\n                [control]=\"form['dateOfSeminar']\"\n              ></validation-messages>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"mb-3\">\n              <label class=\"form-label\">\n                Duration (in hours)\n                <span class=\"text-danger\">*</span>\n              </label>\n              <input\n                formControlName=\"duration\"\n                type=\"number\"\n                class=\"form-control\"\n                placeholder=\"Enter Duration\"\n                [ngClass]=\"{\n                  'is-invalid':\n                    form.duration.invalid &&\n                    submitted &&\n                    (form.duration.touched || form.duration.dirty)\n                }\"\n              />\n              <validation-messages\n                [control]=\"form['duration']\"\n              ></validation-messages>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"mb-3\">\n              <label class=\"form-label\">\n                Seminar Description\n                <span class=\"text-danger\">*</span>\n              </label>\n              <input\n                formControlName=\"description\"\n                type=\"text\"\n                placeholder=\"Give Description\"\n                class=\"form-control\"\n                [ngClass]=\"{\n                  'is-invalid':\n                    form.description.invalid &&\n                    submitted &&\n                    (form.description.touched || form.description.dirty)\n                }\"\n              />\n              <validation-messages\n                [control]=\"form['description']\"\n              ></validation-messages>\n            </div>\n          </div>\n        </div>\n      </form>\n      <div class=\"text-center\">\n        <button\n          [disabled]=\"action === 'view'\"\n          (click)=\"submit()\"\n          type=\"submit\"\n          class=\"btn btn-success text-white\"\n        >\n          {{ form._id.value ? \"Update\" : \"Save\" }}\n        </button>\n        <button (click)=\"goBack()\" class=\"btn btn-danger\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 45539:
/*!*************************************************************************************!*\
  !*** ./src/app/layout/seminars/seminar-list/seminar-list.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container-fluid animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <div class=\"row justify-content-between align-items-center\">\n        <div class=\"col-auto\">\n          <h3 class=\"mb-0\">Seminars</h3>\n        </div>\n        <div class=\"col-auto\">\n          <button\n            type=\"button\"\n            (click)=\"navigateTo('seminars/seminars-form', null, 'create')\"\n            class=\"btn btn-outline-primary\"\n          >\n            <i class=\"fa fa-plus-circle me-1\"></i>\n            Seminar\n          </button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card-body\">\n      <div class=\"row mb-2\">\n        <div class=\"col-md-5\">\n          <form class=\"d-flex\">\n            <input\n              class=\"form-control\"\n              type=\"search\"\n              placeholder=\"Search\"\n              aria-label=\"Search\"\n              [(ngModel)]=\"search\"\n              [ngModelOptions]=\"{ standalone: true }\"\n              (keyup)=\"refreshList('search')\"\n            />\n            <button\n              class=\"btn btn-outline-danger\"\n              type=\"submit\"\n              (click)=\"refreshList('clear')\"\n              ngbTooltip=\"Clear Filter\"\n            >\n              <i class=\"fa fa-remove\"></i>\n            </button>\n          </form>\n        </div>\n      </div>\n      <div class=\"table-responsive text-nowrap\">\n        <table\n          class=\"table table-striped table-hover table-bordered table-sticky\"\n        >\n          <thead class=\"table-primary\">\n            <tr>\n              <th>Sr.No</th>\n              <th>Name</th>\n              <th>Type</th>\n              <th>College</th>\n              <th>Seminar Date</th>\n              <th>Description</th>\n              <th>Duration</th>\n              <th>Created At</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let s of seminars; let i = index\">\n              <td>{{ pageSize * (page - 1) + (i + 1) }}</td>\n              <td>{{ s.name }}</td>\n              <td>{{ s.type }}</td>\n              <td>{{ s.college }}</td>\n              <td>{{ s.dateOfSeminar | date }}</td>\n              <td>{{ s.description }}</td>\n              <td>{{ s.duration }}</td>\n              <td>{{ s.createdAt | date }}</td>\n              <td>\n                <button\n                  (click)=\"navigateTo('/seminars/seminars-form', s._id, 'edit')\"\n                  class=\"btn btn-sm btn-outline-success mx-1\"\n                  ngbTooltip=\"Edit Seminar\"\n                >\n                  <i class=\"fa fa-pencil mx-1\"></i>\n                </button>\n                <button\n                  class=\"btn btn-sm btn-outline-danger mx-1\"\n                  data-toggle=\"modal\"\n                  (click)=\"open(s, alertMsg)\"\n                  ngbTooltip=\"Delete Seminar\"\n                >\n                  <i class=\"fa fa-trash mx-1\"></i>\n                </button>\n                <button\n                  (click)=\"navigateTo('/seminars/seminars-form', s._id, 'view')\"\n                  class=\"btn btn-sm btn-outline-success mx-1\"\n                  ngbTooltip=\"View Seminar\"\n                >\n                  <i class=\"fa fa-eye mx-1\"></i>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <app-custom-pagination\n        [(page)]=\"page\"\n        [(pageSize)]=\"pageSize\"\n        [(collection)]=\"totalSeminars\"\n        (myOutput)=\"onChangePage(page)\"\n      ></app-custom-pagination>\n    </div>\n  </div>\n</div>\n<ng-template #alertMsg let-modal>\n  <div class=\"row mt-3 me-3\">\n    <div class=\"col-md-10 col-sm-10\"></div>\n    <div class=\"col-md-2 col-sm-2 text-right\">\n      <button\n        type=\"button\"\n        class=\"close\"\n        data-dismiss=\"modal\"\n        aria-label=\"Close\"\n        (click)=\"modal.dismiss('Cross click')\"\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n  </div>\n  <div class=\"modal-body text-center px-0\">\n    <img\n      src=\"../../../../assets/img/warning.png\"\n      class=\"mb-3\"\n      width=\"100\"\n      alt=\"\"\n    />\n    <h4 class=\"text-warning\">Are you sure you want to Delete ?</h4>\n    <div class=\"clearfix modal-text\">\n      <label *ngIf=\"selectedRow.name\">\n        <h3>{{ selectedRow.name }}</h3>\n      </label>\n    </div>\n  </div>\n  <div class=\"model-footer border-0 text-center px-0 pb-4\">\n    <div class=\"clearfix py-2\">\n      <button\n        class=\"btn btn-danger me-2\"\n        (click)=\"deleteSeminarById(this.selectedRow._id)\"\n      >\n        OK\n      </button>\n      <button class=\"btn btn-success\" (click)=\"modal.dismiss('Cross click')\">\n        Cancel\n      </button>\n    </div>\n  </div>\n</ng-template>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_layout_seminars_seminars_module_ts.e6a63d0fea696119.js.map