"use strict";
(self["webpackChunkng"] = self["webpackChunkng"] || []).push([["src_app_layout_questionSet_question-set_module_ts"],{

/***/ 62769:
/*!*************************************************************************************!*\
  !*** ./src/app/layout/questionSet/question-set-form/question-set-form.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionSetFormComponent": () => (/* binding */ QuestionSetFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _question_set_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-set-form.component.html?ngResource */ 93768);
/* harmony import */ var _question_set_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-set-form.component.scss?ngResource */ 59079);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_questionSet_question_set_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/questionSet/question-set.service */ 36520);
/* harmony import */ var _services_seminar_seminar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/seminar/seminar.service */ 32277);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 82808);











let QuestionSetFormComponent = class QuestionSetFormComponent {
    constructor(router, questionSetService, seminarService, formBuilder, actRoutes, location, spinner, toastService) {
        this.router = router;
        this.questionSetService = questionSetService;
        this.seminarService = seminarService;
        this.formBuilder = formBuilder;
        this.actRoutes = actRoutes;
        this.location = location;
        this.spinner = spinner;
        this.toastService = toastService;
        this.action = '';
        this.totalSeminars = 0;
        this.submitted = false;
        this.questionSetForm = this.formBuilder.group({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            noOfQuestion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            duration: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            passingMarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            seminarId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
        });
    }
    ngOnInit() {
        this.getSeminarList();
        this.actRoutes.queryParams.subscribe((params) => {
            if (params.id) {
                this.getSetById(params.id);
            }
        });
    }
    get form() {
        return this.questionSetForm.controls;
    }
    getSeminarList() {
        this.seminarService.allSeminarList().subscribe((success) => {
            var _a;
            console.log(success);
            this.seminars = (_a = success === null || success === void 0 ? void 0 : success.result) === null || _a === void 0 ? void 0 : _a.data;
            // console.log('this.seminars', this.seminars);
            // this.totalSeminars = success?.result?.
        }, (error) => { });
    }
    getSetById(id) {
        this.questionSetService.getQuestionSetById(id).subscribe((success) => {
            // console.log("Print" ,success);
            this.questionSetForm.patchValue(success === null || success === void 0 ? void 0 : success.result[0]);
        });
    }
    submit() {
        this.submitted = true;
        if (this.questionSetForm.invalid) {
            this.toastService.warning('Please fill all required fields!');
            return;
        }
        let formData = this.questionSetForm.value;
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
        this.questionSetService
            .createQuestionSet(formData, formData.seminarId)
            .subscribe((success) => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(['questionSet/questionSet']);
        }, (error) => {
            this.spinner.hide();
            this.toastService.error(error.message);
        });
    }
    update(formData) {
        this.spinner.show();
        this.questionSetService.updateQuestionSet(formData, formData._id).subscribe((success) => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(['questionSet/questionSet']);
        }, (error) => {
            this.spinner.hide();
            this.toastService.error(error.message);
        });
    }
    goBack() {
        this.location.back();
    }
};
QuestionSetFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_questionSet_question_set_service__WEBPACK_IMPORTED_MODULE_2__.QuestionSetService },
    { type: _services_seminar_seminar_service__WEBPACK_IMPORTED_MODULE_3__.SeminarService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService }
];
QuestionSetFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-question-set-form',
        template: _question_set_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_question_set_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuestionSetFormComponent);



/***/ }),

/***/ 96178:
/*!*************************************************************************************!*\
  !*** ./src/app/layout/questionSet/question-set-list/question-set-list.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionSetListComponent": () => (/* binding */ QuestionSetListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _question_set_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-set-list.component.html?ngResource */ 18415);
/* harmony import */ var _question_set_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-set-list.component.scss?ngResource */ 79130);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _services_questionSet_question_set_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/questionSet/question-set.service */ 36520);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 82808);









let QuestionSetListComponent = class QuestionSetListComponent {
    constructor(router, questionSetService, modalService, toastService, spinner) {
        this.router = router;
        this.questionSetService = questionSetService;
        this.modalService = modalService;
        this.toastService = toastService;
        this.spinner = spinner;
        this.selectedRow = {};
        this.page = 1;
        this.pageSize = 5;
        this.search = '';
        this.visibility = {};
    }
    ngOnInit() {
        this.getAllSets();
    }
    getAllSets() {
        this.spinner.show();
        let params = {
            page: this.page,
            pageSize: this.pageSize,
            search: this.search,
        };
        this.questionSetService.getAllQuestionSet(params).subscribe((success) => {
            var _a, _b;
            console.log('Question Sets', success);
            this.sets = (_a = success === null || success === void 0 ? void 0 : success.result) === null || _a === void 0 ? void 0 : _a.data;
            this.totalSets = (_b = success === null || success === void 0 ? void 0 : success.result) === null || _b === void 0 ? void 0 : _b.totalCount;
            this.spinner.hide();
            this.sets.forEach((set) => {
                this.visibility[set._id] = set.isVisible;
            });
        }, (error) => {
            this.spinner.hide();
            this.toastService.error('Something went Wrong!');
        });
    }
    onChangePage(pageNo) {
        if (pageNo > 0) {
            this.page = pageNo;
        }
        this.getAllSets();
    }
    navigateTo(path, id) {
        if (id) {
            this.router.navigate([path], { queryParams: { id } });
        }
        else {
            this.router.navigate([path]);
        }
    }
    switchVisibility(row) {
        this.selectedRow = row;
        let seminarInfo = {
            seminarId: row.seminarId,
        };
        this.spinner.show();
        this.questionSetService.changeSetVisibility(row._id, seminarInfo).subscribe((success) => {
            // console.log('visibility', success);
            this.spinner.hide();
            this.toastService.success(success.result.message);
            this.sets.forEach((set) => {
                this.visibility[set._id] = set._id === row._id;
            });
        }, (error) => {
            this.spinner.hide();
            this.toastService.error('Something Went Wrong');
        });
    }
    refreshList(title) {
        this.search = title == 'clear' ? '' : this.search;
        this.getAllSets();
    }
    open(s, content) {
        this.selectedRow = s;
        this.modalService.open(content, { centered: true });
    }
    deleteQuestionSet(id) {
        this.questionSetService.deleteSetById(id).subscribe((success) => {
            this.getAllSets();
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
QuestionSetListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_questionSet_question_set_service__WEBPACK_IMPORTED_MODULE_2__.QuestionSetService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerService }
];
QuestionSetListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-question-set-list',
        template: _question_set_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_question_set_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuestionSetListComponent);



/***/ }),

/***/ 16477:
/*!*******************************************************************!*\
  !*** ./src/app/layout/questionSet/question-set-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionSetRoutingModule": () => (/* binding */ QuestionSetRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _question_set_form_question_set_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-set-form/question-set-form.component */ 62769);
/* harmony import */ var _question_set_list_question_set_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-set-list/question-set-list.component */ 96178);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);





const questionSetRoutes = [
    {
        path: '',
        data: {
            title: 'Question Set',
        },
        children: [
            {
                path: '',
                redirectTo: 'questionSet',
            },
            {
                path: 'questionSet',
                component: _question_set_list_question_set_list_component__WEBPACK_IMPORTED_MODULE_1__.QuestionSetListComponent,
                data: {
                    title: 'Question Set List',
                },
            },
            {
                path: 'questionSet-form',
                component: _question_set_form_question_set_form_component__WEBPACK_IMPORTED_MODULE_0__.QuestionSetFormComponent,
                data: {
                    title: 'Question Set Form',
                },
            },
        ],
    },
];
let QuestionSetRoutingModule = class QuestionSetRoutingModule {
};
QuestionSetRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(questionSetRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], QuestionSetRoutingModule);



/***/ }),

/***/ 8502:
/*!***********************************************************!*\
  !*** ./src/app/layout/questionSet/question-set.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionSetModule": () => (/* binding */ QuestionSetModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _question_set_list_question_set_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-set-list/question-set-list.component */ 96178);
/* harmony import */ var _question_set_form_question_set_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-set-form/question-set-form.component */ 62769);
/* harmony import */ var _question_set_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question-set-routing.module */ 16477);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/core.module */ 40294);






let QuestionSetModule = class QuestionSetModule {
};
QuestionSetModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_question_set_form_question_set_form_component__WEBPACK_IMPORTED_MODULE_1__.QuestionSetFormComponent, _question_set_list_question_set_list_component__WEBPACK_IMPORTED_MODULE_0__.QuestionSetListComponent],
        imports: [_question_set_routing_module__WEBPACK_IMPORTED_MODULE_2__.QuestionSetRoutingModule, _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule.forRoot()],
    })
], QuestionSetModule);



/***/ }),

/***/ 36520:
/*!**************************************************************!*\
  !*** ./src/app/services/questionSet/question-set.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionSetService": () => (/* binding */ QuestionSetService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services */ 98138);



let QuestionSetService = class QuestionSetService {
    constructor(http) {
        this.http = http;
        this.routes = {
            createPath: (id) => `questionSet/${id}`,
            getPath: (params) => `questionSet/getAll?page=${params.page}&pageSize=${params.pageSize}&search=${params.search}`,
            getByIdPath: (id) => `questionSet/${id}`,
            updatePath: (id) => `questionSet/${id}`,
            deletePath: (id) => `questionSet/${id}`,
            visibilityPath: (id) => `questionSet/changeVisibility/${id}`
        };
    }
    getAllQuestionSet(params) {
        return this.http.get(this.routes.getPath(params));
    }
    createQuestionSet(data, id) {
        return this.http.post(this.routes.createPath(id), data);
    }
    updateQuestionSet(data, id) {
        return this.http.put(this.routes.updatePath(id), data);
    }
    getQuestionSetById(id) {
        return this.http.get(this.routes.getByIdPath(id));
    }
    deleteSetById(id) {
        return this.http.delete(this.routes.deletePath(id));
    }
    changeSetVisibility(id, info) {
        return this.http.put(this.routes.visibilityPath(id), info);
    }
};
QuestionSetService.ctorParameters = () => [
    { type: _core_services__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
QuestionSetService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], QuestionSetService);



/***/ }),

/***/ 59079:
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/questionSet/question-set-form/question-set-form.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVzdGlvbi1zZXQtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 79130:
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/questionSet/question-set-list/question-set-list.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVzdGlvbi1zZXQtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 93768:
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/questionSet/question-set-form/question-set-form.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container-fluid animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row justify-content-between align-items-center\">\r\n        <div class=\"col-auto\">\r\n          <h3 class=\"mb-0\">Question Set Form</h3>\r\n        </div>\r\n        <div class=\"col-auto\">\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"goBack()\">\r\n            <i class=\"fa fa-arrow-left me-1\" aria-hidden=\"true\"></i>\r\n            Back\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <form [formGroup]=\"questionSetForm\" class=\"form-horizontal\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"mb-3\">\r\n              <label class=\"form-label\">\r\n                Question Set Name\r\n                <span class=\"text-danger\">*</span>\r\n              </label>\r\n              <input\r\n                formControlName=\"name\"\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                placeholder=\"Enter Question Set Name\"\r\n                [ngClass]=\"{\r\n                  'is-invalid':\r\n                    form.name.invalid &&\r\n                    submitted &&\r\n                    (form.name.touched || form.name.dirty)\r\n                }\"\r\n              />\r\n              <validation-messages [control]=\"form['name']\">\r\n              </validation-messages>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"mb-3\">\r\n              <label class=\"form-label\">\r\n                Number of Questions\r\n                <span class=\"text-danger\">*</span>\r\n              </label>\r\n              <input\r\n                formControlName=\"noOfQuestion\"\r\n                type=\"number\"\r\n                placeholder=\"Select Number of Questions\"\r\n                class=\"form-control\"\r\n                [ngClass]=\"{\r\n                  'is-invalid':\r\n                    form.noOfQuestion.invalid &&\r\n                    submitted &&\r\n                    (form.noOfQuestion.touched || form.noOfQuestion.dirty)\r\n                }\"\r\n              />\r\n              <validation-messages [control]=\"form['noOfQuestion']\">\r\n              </validation-messages>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"mb-3\">\r\n              <label class=\"form-label\">\r\n                Duration (in minutes)\r\n                <span class=\"text-danger\">*</span>\r\n              </label>\r\n              <input\r\n                formControlName=\"duration\"\r\n                type=\"number\"\r\n                class=\"form-control\"\r\n                placeholder=\"Enter Duration\"\r\n                [ngClass]=\"{\r\n                  'is-invalid':\r\n                    form.duration.invalid &&\r\n                    submitted &&\r\n                    (form.duration.touched || form.duration.dirty)\r\n                }\"\r\n              />\r\n              <validation-messages\r\n                [control]=\"form['duration']\"\r\n              ></validation-messages>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"mb-3\">\r\n              <label class=\"form-label\">\r\n                Passing Marks\r\n                <span class=\"text-danger\">*</span>\r\n              </label>\r\n              <input\r\n                formControlName=\"passingMarks\"\r\n                type=\"text\"\r\n                placeholder=\"Enter Passing Marks\"\r\n                class=\"form-control\"\r\n                [ngClass]=\"{\r\n                  'is-invalid':\r\n                    form.passingMarks.invalid &&\r\n                    submitted &&\r\n                    (form.passingMarks.touched || form.passingMarks.dirty)\r\n                }\"\r\n              />\r\n              <validation-messages\r\n                [control]=\"form['passingMarks']\"\r\n              ></validation-messages>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"mb-3\">\r\n              <label class=\"form-label\">\r\n                Select Seminar\r\n                <span class=\"text-danger\">*</span>\r\n              </label>\r\n              <select\r\n                formControlName=\"seminarId\"\r\n                class=\"form-select\"\r\n                placeholder=\"Select Seminar\"\r\n                [ngClass]=\"{\r\n                  'is-invalid':\r\n                    form.seminarId.invalid &&\r\n                    submitted &&\r\n                    (form.seminarId.touched || form.seminarId.dirty)\r\n                }\"\r\n              >\r\n                <option *ngFor=\"let s of seminars\" [value]=\"s?._id\">\r\n                  {{ s?.name }}\r\n                </option>\r\n              </select>\r\n              <validation-messages\r\n                [control]=\"form['seminarId']\"\r\n              ></validation-messages>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div class=\"text-center\">\r\n        <button\r\n          (click)=\"submit()\"\r\n          type=\"submit\"\r\n          class=\"btn btn-success text-white\"\r\n        >\r\n          {{ form._id.value ? \"Update\" : \"Save\" }}\r\n        </button>\r\n        <button (click)=\"goBack()\" class=\"btn btn-danger\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 18415:
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/questionSet/question-set-list/question-set-list.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container-fluid animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row justify-content-between align-items-center\">\r\n        <div class=\"col-auto\">\r\n          <h3 class=\"mb-0\">Question Sets</h3>\r\n        </div>\r\n        <div class=\"col-auto\">\r\n          <button\r\n            type=\"button\"\r\n            (click)=\"navigateTo('questionSet/questionSet-form', null)\"\r\n            class=\"btn btn-outline-primary\"\r\n          >\r\n            <i class=\"fa fa-plus-circle me-1\"></i>\r\n            Question Set\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n      <div class=\"row mb-2\">\r\n        <div class=\"col-md-5\">\r\n          <form class=\"d-flex\">\r\n            <input\r\n              class=\"form-control\"\r\n              type=\"search\"\r\n              placeholder=\"Search\"\r\n              aria-label=\"Search\"\r\n              [(ngModel)]=\"search\"\r\n              [ngModelOptions]=\"{ standalone: true }\"\r\n              (keyup)=\"refreshList('search')\"\r\n            />\r\n            <button\r\n              class=\"btn btn-outline-danger\"\r\n              type=\"submit\"\r\n              (click)=\"refreshList('clear')\"\r\n              ngbTooltip=\"Clear Filter\"\r\n            >\r\n              <i class=\"fa fa-remove\"></i>\r\n            </button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-responsive text-nowrap\">\r\n        <table\r\n          class=\"table table-striped table-hover table-bordered table-sticky\"\r\n        >\r\n          <thead class=\"table-primary\">\r\n            <tr>\r\n              <th>Sr.No</th>\r\n              <th>Set Name</th>\r\n              <th>Serial Number</th>\r\n              <th>Seminar Name</th>\r\n              <th>No of Questions</th>\r\n              <th>Duration</th>\r\n              <th>Passing Marks</th>\r\n              <th>Visibility</th>\r\n              <th>Actions</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let s of sets; let i = index\">\r\n              <td>{{ pageSize * (page - 1) + (i + 1) }}</td>\r\n              <td>{{ s.name }}</td>\r\n              <td>{{ s.serialNumber }}</td>\r\n              <td>{{ s.seminarName }}</td>\r\n              <td>{{ s.noOfQuestion }}</td>\r\n              <td>{{ s.duration }}</td>\r\n              <td>{{ s.passingMarks }}</td>\r\n              <td>{{ visibility[s._id] ? \"Visible\" : \"Not Visible\" }}</td>\r\n              <td>\r\n                <button\r\n                  (click)=\"navigateTo('/questionSet/questionSet-form', s._id)\"\r\n                  class=\"btn btn-sm btn-outline-success mx-1\"\r\n                  ngbTooltip=\"Edit Set\"\r\n                >\r\n                  <i class=\"fa fa-pencil mx-1\"></i>\r\n                </button>\r\n                <button\r\n                  class=\"btn btn-sm btn-outline-danger mx-1\"\r\n                  data-toggle=\"modal\"\r\n                  (click)=\"open(s, alertMsg)\"\r\n                  ngbTooltip=\"Delete Set\"\r\n                >\r\n                  <i class=\"fa fa-trash mx-1\"></i>\r\n                </button>\r\n                <button\r\n                  (click)=\"switchVisibility(s)\"\r\n                  class=\"btn btn-sm btn-outline-success mx-1\"\r\n                  ngbTooltip=\"Change Visibility\"\r\n                >\r\n                  <i class=\"fa fa-eye mx-1\"></i>\r\n                </button>\r\n                <button\r\n                  (click)=\"navigateTo('/questions/questions-list', s._id)\"\r\n                  class=\"btn btn-sm btn-outline-success mx-1\"\r\n                  ngbTooltip=\"Add Questions\"\r\n                >\r\n                  <i class=\"fa fa-plus mx-1\"></i>\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <app-custom-pagination\r\n        [(page)]=\"page\"\r\n        [(pageSize)]=\"pageSize\"\r\n        [(collection)]=\"totalSets\"\r\n        (myOutput)=\"onChangePage(page)\"\r\n      ></app-custom-pagination>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #alertMsg let-modal>\r\n  <div class=\"row mt-3 me-3\">\r\n    <div class=\"col-md-10 col-sm-10\"></div>\r\n    <div class=\"col-md-2 col-sm-2 text-right\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"close\"\r\n        data-dismiss=\"modal\"\r\n        aria-label=\"Close\"\r\n        (click)=\"modal.dismiss('Cross click')\"\r\n      >\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-body text-center px-0\">\r\n    <img\r\n      src=\"../../../../assets/img/warning.png\"\r\n      class=\"mb-3\"\r\n      width=\"100\"\r\n      alt=\"\"\r\n    />\r\n    <h4 class=\"text-warning\">Are you sure you want to Delete?</h4>\r\n    <div class=\"clearfix modal-text\">\r\n      <label *ngIf=\"selectedRow.name\">\r\n        <h3>{{ selectedRow.name }}</h3>\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div class=\"model-footer border-0 text-center px-0 pb-4\">\r\n    <div class=\"clearfix py-2\">\r\n      <button\r\n        class=\"btn btn-danger me-2\"\r\n        (click)=\"deleteQuestionSet(this.selectedRow._id)\"\r\n      >\r\n        OK\r\n      </button>\r\n      <button class=\"btn btn-success\" (click)=\"modal.dismiss('Cross click')\">\r\n        Cancel\r\n      </button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_layout_questionSet_question-set_module_ts.0034c487e457ac8b.js.map