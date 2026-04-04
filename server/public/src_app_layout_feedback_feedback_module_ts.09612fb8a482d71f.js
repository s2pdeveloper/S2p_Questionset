"use strict";
(self["webpackChunkng"] = self["webpackChunkng"] || []).push([["src_app_layout_feedback_feedback_module_ts"],{

/***/ 25650:
/*!**************************************************************************!*\
  !*** ./src/app/layout/feedback/feedback-form/feedback-form.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedBackFormComponent": () => (/* binding */ FeedBackFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _feedback_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback-form.component.html?ngResource */ 71967);
/* harmony import */ var _feedback_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback-form.component.scss?ngResource */ 96696);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var _services_feedback_feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/feedback/feedback.service */ 15435);
/* harmony import */ var _services_seminar_seminar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/seminar/seminar.service */ 32277);











let FeedBackFormComponent = class FeedBackFormComponent {
    constructor(spinner, router, formBuilder, location, feedbackService, seminarService, actRoutes, toastService) {
        this.spinner = spinner;
        this.router = router;
        this.formBuilder = formBuilder;
        this.location = location;
        this.feedbackService = feedbackService;
        this.seminarService = seminarService;
        this.actRoutes = actRoutes;
        this.toastService = toastService;
        this.action = '';
        this.submitted = false;
        this.optionsList = [];
        this.splitArray = [{ option: '' }];
        this.feedbackForm = this.formBuilder.group({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            options: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl([]),
            queImageUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            seminarId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
        });
    }
    ngOnInit() {
        this.getSeminarList();
        this.actRoutes.queryParams.subscribe((params) => {
            this.action = params.action;
            if (params.id) {
                this.getById(params.id);
            }
        });
    }
    get form() {
        return this.feedbackForm.controls;
    }
    getById(id) {
        this.spinner.show();
        this.feedbackService.getFeedbackById(id).subscribe((success) => {
            var _a, _b;
            console.log('get by id', success);
            // this.splitArray = success?.result[0]?.options;
            this.splitArray = (_a = success === null || success === void 0 ? void 0 : success.result[0]) === null || _a === void 0 ? void 0 : _a.options.map((option) => {
                return { option: option };
            });
            // this.splitArray = success?.result[0]?.options;
            this.displayImage = (_b = success === null || success === void 0 ? void 0 : success.result[0]) === null || _b === void 0 ? void 0 : _b.queImageUrl;
            this.feedbackForm.patchValue(success === null || success === void 0 ? void 0 : success.result[0]);
        }, (error) => {
            this.spinner.hide();
            this.toastService.error('Something Went Wrong!');
        });
    }
    getSeminarList() {
        this.seminarService.allSeminarList().subscribe((success) => {
            var _a;
            console.log(success);
            this.seminars = (_a = success === null || success === void 0 ? void 0 : success.result) === null || _a === void 0 ? void 0 : _a.data;
            // console.log('this.seminars', this.seminars);
        }, (error) => {
            this.toastService.error('Something Went Wrong!');
        });
    }
    addOptionInput() {
        this.splitArray.push({ option: '' });
    }
    removeOptionInput(i) {
        this.splitArray.splice(i, 1);
    }
    submit() {
        this.submitted = true;
        let formData = this.feedbackForm.value;
        console.log('formData', formData);
        formData.options = this.splitArray.map((x) => {
            return x.option;
        });
        console.log(this.feedbackForm, formData.options);
        if (this.feedbackForm.invalid) {
            this.toastService.warning('Please fill all required fields!');
            return;
        }
        let fd = new FormData();
        fd.append('question', formData.question);
        fd.append('type', formData.type);
        fd.append('seminarId', formData.seminarId);
        fd.append('options', JSON.stringify(formData.options));
        if (this.images) {
            fd.append('queImageUrl', this.images, this.images.name);
        }
        if (formData._id) {
            this.update(fd, formData._id);
        }
        else {
            delete formData._id;
            this.create(fd);
        }
    }
    create(formData) {
        this.spinner.show();
        this.feedbackService.createFeedback(formData).subscribe((success) => {
            console.log('Created Feedback', success);
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(['feedback/list']);
        }, (error) => {
            this.spinner.hide();
            this.toastService.error(error.message);
        });
    }
    update(formData, id) {
        this.spinner.show();
        this.feedbackService.updateFeedback(formData, id).subscribe((success) => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(['feedback/list']);
        }, (error) => {
            this.spinner.hide();
            this.toastService.error(error.message);
        });
    }
    goBack() {
        this.location.back();
    }
    fileBrowseHandler(event) {
        if (event.target.value) {
            if (event.target.files[0].size > 2000000) {
                this.toastService.warning('Unable to upload image of size more than 2MB');
                return;
            }
            this.images = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(this.images);
            reader.onload = () => {
                this.displayImage = reader.result;
            };
            reader.onerror = (error) => { };
        }
    }
};
FeedBackFormComponent.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location },
    { type: _services_feedback_feedback_service__WEBPACK_IMPORTED_MODULE_2__.FeedbackService },
    { type: _services_seminar_seminar_service__WEBPACK_IMPORTED_MODULE_3__.SeminarService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService }
];
FeedBackFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-feedback-form',
        template: _feedback_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_feedback_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FeedBackFormComponent);



/***/ }),

/***/ 39779:
/*!**************************************************************************!*\
  !*** ./src/app/layout/feedback/feedback-list/feedback-list.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedBackListComponent": () => (/* binding */ FeedBackListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _feedback_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback-list.component.html?ngResource */ 53528);
/* harmony import */ var _feedback_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback-list.component.scss?ngResource */ 2615);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_feedback_feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/feedback/feedback.service */ 15435);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 82808);









let FeedBackListComponent = class FeedBackListComponent {
    constructor(router, feedbackService, modalService, toastService, spinner) {
        this.router = router;
        this.feedbackService = feedbackService;
        this.modalService = modalService;
        this.toastService = toastService;
        this.spinner = spinner;
        this.selectedRow = {};
        this.feedbacks = [];
        this.search = '';
        this.page = 1;
        this.pageSize = 10;
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
        this.feedbackService.getAllFeedback(params).subscribe((success) => {
            var _a, _b;
            console.log('Feedbacks', success);
            this.feedbacks = (_a = success === null || success === void 0 ? void 0 : success.result) === null || _a === void 0 ? void 0 : _a.data;
            this.totalFeedbacks = (_b = success === null || success === void 0 ? void 0 : success.result) === null || _b === void 0 ? void 0 : _b.totalCount;
            // console.log('All feedback', this.feedbacks);
            this.spinner.hide();
        }, (error) => {
            this.spinner.hide();
            this.toastService.error('Something went Wrong!');
        });
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
    onChangePage(pageNo) {
        if (pageNo > 0) {
            this.page = pageNo;
        }
        this.getAll();
    }
    open(f, content) {
        this.selectedRow = f;
        this.modalService.open(content, { centered: true });
    }
    delete(id) {
        this.spinner.show();
        this.feedbackService.deleteFeedback(id).subscribe((success) => {
            this.getAll();
            this.selectedRow = {};
            this.modalService.dismissAll();
            this.spinner.hide();
            this.toastService.success(success.result.message);
        }, (error) => {
            this.selectedRow = {};
            this.modalService.dismissAll();
            this.spinner.hide();
            this.toastService.error('Something went Wrong!');
        });
    }
};
FeedBackListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_feedback_feedback_service__WEBPACK_IMPORTED_MODULE_2__.FeedbackService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerService }
];
FeedBackListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-feedback-list',
        template: _feedback_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_feedback_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FeedBackListComponent);



/***/ }),

/***/ 39369:
/*!************************************************************!*\
  !*** ./src/app/layout/feedback/feedback-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedBackRoutingModule": () => (/* binding */ FeedBackRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _feedback_list_feedback_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback-list/feedback-list.component */ 39779);
/* harmony import */ var _feedback_form_feedback_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback-form/feedback-form.component */ 25650);





const userRoutes = [
    {
        path: '',
        data: {
            title: 'Feedback',
        },
        children: [
            {
                path: '',
                redirectTo: 'list',
            },
            {
                path: 'list',
                component: _feedback_list_feedback_list_component__WEBPACK_IMPORTED_MODULE_0__.FeedBackListComponent,
                data: {
                    title: 'Feedback List',
                },
            },
            {
                path: 'form',
                component: _feedback_form_feedback_form_component__WEBPACK_IMPORTED_MODULE_1__.FeedBackFormComponent,
                data: {
                    title: 'Feedback Form',
                },
            },
        ],
    },
];
let FeedBackRoutingModule = class FeedBackRoutingModule {
};
FeedBackRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(userRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], FeedBackRoutingModule);



/***/ }),

/***/ 19813:
/*!****************************************************!*\
  !*** ./src/app/layout/feedback/feedback.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedBackModule": () => (/* binding */ FeedBackModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _feedback_list_feedback_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback-list/feedback-list.component */ 39779);
/* harmony import */ var _feedback_form_feedback_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback-form/feedback-form.component */ 25650);
/* harmony import */ var _feedback_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedback-routing.module */ 39369);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/core.module */ 40294);






let FeedBackModule = class FeedBackModule {
};
FeedBackModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_feedback_list_feedback_list_component__WEBPACK_IMPORTED_MODULE_0__.FeedBackListComponent, _feedback_form_feedback_form_component__WEBPACK_IMPORTED_MODULE_1__.FeedBackFormComponent],
        imports: [_feedback_routing_module__WEBPACK_IMPORTED_MODULE_2__.FeedBackRoutingModule, _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule.forRoot()],
    })
], FeedBackModule);



/***/ }),

/***/ 15435:
/*!*******************************************************!*\
  !*** ./src/app/services/feedback/feedback.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackService": () => (/* binding */ FeedbackService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services */ 98138);



let FeedbackService = class FeedbackService {
    constructor(http) {
        this.http = http;
        this.routes = {
            createPath: `/feedback/create`,
            getAllPath: (params) => `/feedback/getAll?page=${params.page}&pageSize=${params.pageSize}&search=${params.search}`,
            getByIdPath: (id) => `/feedback/getById/${id}`,
            updatePath: (id) => `/feedback/update/${id}`,
            deletePath: (id) => `/feedback/delete/${id}`,
        };
    }
    getAllFeedback(params) {
        return this.http.get(this.routes.getAllPath(params));
    }
    getFeedbackById(id) {
        return this.http.get(this.routes.getByIdPath(id));
    }
    createFeedback(data) {
        return this.http.post(this.routes.createPath, data);
    }
    updateFeedback(data, id) {
        return this.http.put(this.routes.updatePath(id), data);
    }
    deleteFeedback(id) {
        return this.http.delete(this.routes.deletePath(id));
    }
};
FeedbackService.ctorParameters = () => [
    { type: src_app_core_services__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
FeedbackService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], FeedbackService);



/***/ }),

/***/ 96696:
/*!***************************************************************************************!*\
  !*** ./src/app/layout/feedback/feedback-form/feedback-form.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWVkYmFjay1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 2615:
/*!***************************************************************************************!*\
  !*** ./src/app/layout/feedback/feedback-list/feedback-list.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = ".table-sticky > thead > tr > th,\n.table-sticky > thead > tr > td {\n  top: -2px;\n  position: sticky;\n  z-index: 9;\n}\n\n.user-table::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n}\n\n.user-table::-webkit-scrollbar-track {\n  background: #fff;\n}\n\n.user-table::-webkit-scrollbar-thumb {\n  background-color: #344e5f;\n  border-radius: 20px;\n}\n\n.user-table {\n  height: 400px;\n  display: block;\n  overflow-y: scroll;\n  overflow-x: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlZWRiYWNrLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7O0VBRUUsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQUZGOztBQUtBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFGRiIsImZpbGUiOiJmZWVkYmFjay1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuLnRhYmxlLXN0aWNreT50aGVhZD50cj50aCxcbi50YWJsZS1zdGlja3k+dGhlYWQ+dHI+dGQge1xuICB0b3A6IC0ycHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHotaW5kZXg6IDk7XG59XG5cbi51c2VyLXRhYmxlOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogNXB4O1xufVxuXG4udXNlci10YWJsZTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4udXNlci10YWJsZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0ZTVmO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4udXNlci10YWJsZSB7XG4gIGhlaWdodDogNDAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cblxuIl19 */";

/***/ }),

/***/ 71967:
/*!***************************************************************************************!*\
  !*** ./src/app/layout/feedback/feedback-form/feedback-form.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container-fluid animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <div class=\"row justify-content-between align-items-center\">\n        <div class=\"col-auto\">\n          <h3 class=\"mb-0\">Feedback Form</h3>\n        </div>\n        <div class=\"col-auto\">\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"goBack()\">\n            <i class=\"fa fa-arrow-left me-1\" aria-hidden=\"true\"></i>\n            Back\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <form [formGroup]=\"feedbackForm\" class=\"form-horizontal\">\n        <div class=\"row justify-content-start\">\n          <div class=\"col-md-6\">\n            <div class=\"mb-3\">\n              <label class=\"form-label\">\n                Question\n                <span class=\"text-danger\">*</span>\n              </label>\n              <input\n                formControlName=\"question\"\n                type=\"text\"\n                class=\"form-control\"\n                placeholder=\"Enter Question Statement\"\n                [ngClass]=\"{\n                  'is-invalid':\n                    form.question.invalid &&\n                    submitted &&\n                    (form.question.touched || form.question.dirty)\n                }\"\n              />\n              <validation-messages [control]=\"form['question']\">\n              </validation-messages>\n            </div>\n          </div>\n\n          <div class=\"col-md-6\">\n            <div class=\"mb-3\">\n              <label class=\"form-label\">\n                Type of Answer\n                <span class=\"text-danger\">*</span>\n              </label>\n              <select\n                formControlName=\"type\"\n                class=\"form-select\"\n                placeholder=\"Select Type of Question\"\n                [ngClass]=\"{\n                  'is-invalid':\n                    form.type.invalid &&\n                    submitted &&\n                    (form.type.touched || form.type.dirty)\n                }\"\n              >\n                <option disabled value=\"\">Select Type</option>\n                <option value=\"MCQ\">MCQ</option>\n                <option value=\"TEXT\">Text</option>\n                <option value=\"NUMBER\">Number</option>\n              </select>\n              <validation-messages [control]=\"form['type']\">\n              </validation-messages>\n            </div>\n          </div>\n\n          <div\n            class=\"col-md-6 d-flex justify-content-between align-items-center\"\n          >\n            <div class=\"mb-3\">\n              <label class=\"form-label\">Question Image</label>\n              <input\n                type=\"file\"\n                class=\"form-control\"\n                (change)=\"fileBrowseHandler($event)\"\n              />\n            </div>\n            <div class=\"card mb-0 img-shadow\">\n              <img [src]=\"displayImage\" width=\"150\" height=\"70\" alt=\"\" />\n            </div>\n            <!-- <img [src]=\"displayImage\" width=\"100\" height=\"60\" alt=\"\" /> -->\n          </div>\n\n          <div class=\"col-md-6\">\n            <div class=\"mb-3\">\n              <label class=\"form-label\">\n                Select Seminar\n                <span class=\"text-danger\">*</span>\n              </label>\n              <select\n                formControlName=\"seminarId\"\n                class=\"form-select\"\n                placeholder=\"Select Seminar\"\n                [ngClass]=\"{\n                  'is-invalid':\n                    form.seminarId.invalid &&\n                    submitted &&\n                    (form.seminarId.touched || form.seminarId.dirty)\n                }\"\n              >\n                <option *ngFor=\"let s of seminars\" [value]=\"s?._id\">\n                  {{ s?.name }}\n                </option>\n              </select>\n              <validation-messages\n                [control]=\"form['seminarId']\"\n              ></validation-messages>\n            </div>\n          </div>\n\n          <div class=\"col-12\">\n            <div class=\"mb-3\">\n              <label class=\"form-label\">\n                Options\n                <span class=\"text-danger\">* </span>\n              </label>\n              <button class=\"btn btn-success btn-sm\" (click)=\"addOptionInput()\">\n                <i class=\"fa fa-plus-square text-light\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n            <div class=\"row\">\n              <div\n                *ngFor=\"let o of splitArray; let i = index\"\n                class=\"col-3 mb-3\"\n              >\n                <div class=\"input-group mb-3\">\n                  <input\n                    type=\"text\"\n                    placeholder=\"Enter Options\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"o.option\"\n                    [ngModelOptions]=\"{ standalone: true }\"\n                  />\n                  <div\n                    (click)=\"removeOptionInput(i)\"\n                    class=\"input-group-append\"\n                  >\n                    <span class=\"input-group-text\"\n                      ><i\n                        class=\"fa fa-minus-square text-secondary\"\n                        aria-hidden=\"true\"\n                      ></i\n                    ></span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n      <div class=\"text-center\">\n        <button\n          [disabled]=\"action === 'view'\"\n          (click)=\"submit()\"\n          type=\"submit\"\n          class=\"btn btn-success text-white\"\n        >\n          {{ form._id.value ? \"Update\" : \"Save\" }}\n        </button>\n        <button (click)=\"goBack()\" class=\"btn btn-danger\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 53528:
/*!***************************************************************************************!*\
  !*** ./src/app/layout/feedback/feedback-list/feedback-list.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container-fluid animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <div class=\"row justify-content-between align-items-center\">\n        <div class=\"col-auto\">\n          <h3 class=\"mb-0\">Feedback</h3>\n        </div>\n        <div class=\"col-auto\">\n          <button\n            type=\"button\"\n            (click)=\"navigateTo('feedback/form', null, 'create')\"\n            class=\"btn btn-outline-primary\"\n          >\n            <i class=\"fa fa-plus-circle me-1\"></i>\n            Add Question\n          </button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card-body\">\n      <div class=\"row mb-2\">\n        <div class=\"col-md-5\">\n          <form class=\"d-flex\">\n            <input\n              class=\"form-control\"\n              type=\"search\"\n              placeholder=\"Search\"\n              aria-label=\"Search\"\n              [(ngModel)]=\"search\"\n              [ngModelOptions]=\"{ standalone: true }\"\n              (keyup)=\"refreshList('search')\"\n            />\n            <button\n              class=\"btn btn-outline-danger\"\n              type=\"submit\"\n              (click)=\"refreshList('clear')\"\n              ngbTooltip=\"Clear Filter\"\n            >\n              <i class=\"fa fa-remove\"></i>\n            </button>\n          </form>\n        </div>\n      </div>\n      <div class=\"table-responsive text-nowrap\">\n        <table\n          class=\"table table-striped table-hover table-bordered table-sticky\"\n        >\n          <thead class=\"table-primary\">\n            <tr>\n              <th>Sr.No</th>\n              <th>Question</th>\n              <th>Seminar</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let f of feedbacks; let i = index\">\n              <td>{{ pageSize * (page - 1) + (i + 1) }}</td>\n              <td>\n                {{ f?.question }}\n              </td>\n              <td>{{ f?.seminarName }}</td>\n              <td>\n                <button\n                  (click)=\"navigateTo('feedback/form', f?._id, 'edit')\"\n                  class=\"btn btn-sm btn-outline-success mx-2\"\n                  ngbTooltip=\"Edit Question\"\n                >\n                  <i class=\"fa fa-pencil mx-1\"></i>\n                </button>\n                <button\n                  class=\"btn btn-sm btn-outline-danger mx-2\"\n                  data-toggle=\"modal\"\n                  (click)=\"open(f, alertMsg)\"\n                  ngbTooltip=\"Delete Quesion\"\n                >\n                  <i class=\"fa fa-trash mx-1\"></i>\n                </button>\n                <button\n                  (click)=\"navigateTo('feedback/form', f?._id, 'view')\"\n                  class=\"btn btn-sm btn-outline-success mx-2\"\n                  ngbTooltip=\"View Quesion\"\n                >\n                  <i class=\"fa fa-eye mx-1\"></i>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <app-custom-pagination\n        [(page)]=\"page\"\n        [(pageSize)]=\"pageSize\"\n        [(collection)]=\"totalFeedbacks\"\n        (myOutput)=\"onChangePage(page)\"\n      ></app-custom-pagination>\n    </div>\n  </div>\n</div>\n<ng-template #alertMsg let-modal>\n  <div class=\"row mt-3 me-3\">\n    <div class=\"col-md-10 col-sm-10\"></div>\n    <div class=\"col-md-2 col-sm-2 text-right\">\n      <button\n        type=\"button\"\n        class=\"close\"\n        data-dismiss=\"modal\"\n        aria-label=\"Close\"\n        (click)=\"modal.dismiss('Cross click')\"\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n  </div>\n  <div class=\"modal-body text-center px-0\">\n    <img\n      src=\"../../../../assets/img/warning.png\"\n      class=\"mb-3\"\n      width=\"100\"\n      alt=\"\"\n    />\n    <h4 class=\"text-warning\">Are you sure you want to Delete?</h4>\n    <div class=\"clearfix modal-text\">\n      <label *ngIf=\"selectedRow?.question\">\n        <h3>{{ selectedRow?.question }}</h3>\n      </label>\n    </div>\n  </div>\n  <div class=\"model-footer border-0 text-center px-0 pb-4\">\n    <div class=\"clearfix py-2\">\n      <button\n        class=\"btn btn-danger me-2\"\n        (click)=\"delete(this.selectedRow._id)\"\n      >\n        OK\n      </button>\n      <button class=\"btn btn-success\" (click)=\"modal.dismiss('Cross click')\">\n        Cancel\n      </button>\n    </div>\n  </div>\n</ng-template>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_layout_feedback_feedback_module_ts.09612fb8a482d71f.js.map