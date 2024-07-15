"use strict";
(self["webpackChunkng"] = self["webpackChunkng"] || []).push([["src_app_layout_questions_question_module_ts"],{

/***/ 99604:
/*!***************************************************************************!*\
  !*** ./src/app/layout/questions/question-form/question-form.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionFormComponent": () => (/* binding */ QuestionFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _question_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-form.component.html?ngResource */ 41231);
/* harmony import */ var _question_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-form.component.scss?ngResource */ 49587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_questions_questions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/questions/questions.service */ 37210);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 82808);










let QuestionFormComponent = class QuestionFormComponent {
    constructor(router, questionService, formBuilder, actRoutes, location, spinner, toastService) {
        this.router = router;
        this.questionService = questionService;
        this.formBuilder = formBuilder;
        this.actRoutes = actRoutes;
        this.location = location;
        this.spinner = spinner;
        this.toastService = toastService;
        this.submitted = false;
        this.optionsList = [];
        this.setId = null;
        this.splitArray = [];
        this.act = '';
        this.questionForm = this.formBuilder.group({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null),
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            hint: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            options: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            correctOption: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        });
    }
    ngOnInit() {
        this.actRoutes.queryParams.subscribe((params) => {
            this.setId = params.s_id;
            this.act = params.action;
            console.log('set id in form', this.setId);
            if (params.q_id) {
                this.getById(params.q_id);
            }
        });
    }
    get form() {
        return this.questionForm.controls;
    }
    onTextChange(ev) {
        // console.log(ev.target.value);
        this.splitArray = ev.target.value.split(',');
        // this.questionForm.get('options')?.setValue(splitArray);
        // console.log(this.splitArray);
    }
    getById(id) {
        this.questionService.getQuestionById(id).subscribe((success) => {
            var _a;
            console.log("get by id", success);
            // this.splitArray = success?.result[0]?.options[0]?.split(',');
            this.splitArray = (_a = success === null || success === void 0 ? void 0 : success.result[0]) === null || _a === void 0 ? void 0 : _a.options;
            this.questionForm.patchValue(success === null || success === void 0 ? void 0 : success.result[0]);
        });
    }
    submit() {
        this.submitted = true;
        if (this.questionForm.invalid) {
            this.toastService.warning('Please fill all required fields!');
            return;
        }
        let formData = this.questionForm.value;
        formData.options = this.splitArray;
        console.log(formData);
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
        this.questionService.createQuestion(formData, this.setId).subscribe((success) => {
            console.log('Created Question', success);
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(['questions/questions-list'], {
                queryParams: { id: this.setId },
            });
        }, (error) => {
            this.spinner.hide();
            this.toastService.error(error.message);
        });
    }
    update(formData) {
        this.spinner.show();
        this.questionService.updateQuestion(formData, formData._id).subscribe((success) => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(['questions/questions-list'], {
                queryParams: { id: this.setId },
            });
        }, (error) => {
            this.spinner.hide();
            this.toastService.error(error.message);
        });
    }
    goBack() {
        this.location.back();
    }
};
QuestionFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_questions_questions_service__WEBPACK_IMPORTED_MODULE_2__.QuestionsService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService }
];
QuestionFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-question-form',
        template: _question_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_question_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuestionFormComponent);



/***/ }),

/***/ 8557:
/*!***************************************************************************!*\
  !*** ./src/app/layout/questions/question-list/question-list.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionListComponent": () => (/* binding */ QuestionListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _question_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-list.component.html?ngResource */ 32354);
/* harmony import */ var _question_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-list.component.scss?ngResource */ 12680);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _services_questions_questions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/questions/questions.service */ 37210);









let QuestionListComponent = class QuestionListComponent {
    constructor(router, actRoutes, questionService, modalService, toastService, spinner) {
        this.router = router;
        this.actRoutes = actRoutes;
        this.questionService = questionService;
        this.modalService = modalService;
        this.toastService = toastService;
        this.spinner = spinner;
        this.page = 1;
        this.pageSize = 5;
        this.search = '';
        this.selectedRow = {};
        this.setId = null;
        // console.log("in question list");
    }
    ngOnInit() {
        this.actRoutes.queryParams.subscribe((params) => {
            this.setId = params.id;
            // console.log('set id in list', this.setId, params.id);
            if (this.setId) {
                this.getQuestionsOfSet(this.setId);
            }
        });
    }
    getQuestionsOfSet(id) {
        this.spinner.show();
        let params = {
            page: this.page,
            pageSize: this.pageSize,
            search: this.search,
        };
        this.questionService.getSetQuestions(id, params).subscribe((success) => {
            var _a, _b;
            this.spinner.hide();
            console.log('Questions', success);
            this.questions = (_a = success === null || success === void 0 ? void 0 : success.result) === null || _a === void 0 ? void 0 : _a.data;
            this.totalQuestion = (_b = success === null || success === void 0 ? void 0 : success.result) === null || _b === void 0 ? void 0 : _b.totalCount;
        }, (error) => {
            this.spinner.hide();
            this.toastService.error('Something Went Wrong');
        });
    }
    navigateTo(path, s_id, q_id, action) {
        if (q_id) {
            this.router.navigate([path], { queryParams: { s_id, q_id, action } });
        }
        else {
            this.router.navigate([path], { queryParams: { s_id, action } });
        }
    }
    onChangePage(pageNo) {
        if (pageNo > 0) {
            this.page = pageNo;
        }
        this.getQuestionsOfSet(this.setId);
    }
    open(s, content) {
        this.selectedRow = s;
        this.modalService.open(content, { centered: true });
    }
    deleteQuestion(id) {
        this.questionService.deleteQuestionById(id).subscribe((success) => {
            console.log(success);
            this.getQuestionsOfSet(this.setId);
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
QuestionListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _services_questions_questions_service__WEBPACK_IMPORTED_MODULE_2__.QuestionsService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerService }
];
QuestionListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-question-list',
        template: _question_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_question_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuestionListComponent);



/***/ }),

/***/ 97109:
/*!*************************************************************!*\
  !*** ./src/app/layout/questions/question-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionRoutingModule": () => (/* binding */ QuestionRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _question_list_question_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-list/question-list.component */ 8557);
/* harmony import */ var _question_form_question_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-form/question-form.component */ 99604);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);





const questionRoutes = [
    {
        path: '',
        data: {
            title: 'Questions',
        },
        children: [
            {
                path: '',
                redirectTo: 'questions',
            },
            {
                path: 'questions-list',
                component: _question_list_question_list_component__WEBPACK_IMPORTED_MODULE_0__.QuestionListComponent,
                data: {
                    title: 'Questions',
                },
            },
            {
                path: 'questions-form',
                component: _question_form_question_form_component__WEBPACK_IMPORTED_MODULE_1__.QuestionFormComponent,
                data: {
                    title: 'Questions Form',
                },
            },
        ],
    },
];
let QuestionRoutingModule = class QuestionRoutingModule {
};
QuestionRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(questionRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], QuestionRoutingModule);



/***/ }),

/***/ 83381:
/*!*****************************************************!*\
  !*** ./src/app/layout/questions/question.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionModule": () => (/* binding */ QuestionModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _question_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-routing.module */ 97109);
/* harmony import */ var _question_list_question_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-list/question-list.component */ 8557);
/* harmony import */ var _question_form_question_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question-form/question-form.component */ 99604);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/core.module */ 40294);






let QuestionModule = class QuestionModule {
};
QuestionModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_1__.QuestionListComponent, _question_form_question_form_component__WEBPACK_IMPORTED_MODULE_2__.QuestionFormComponent],
        imports: [_question_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuestionRoutingModule, _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule.forRoot()],
    })
], QuestionModule);



/***/ }),

/***/ 37210:
/*!*********************************************************!*\
  !*** ./src/app/services/questions/questions.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsService": () => (/* binding */ QuestionsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services */ 98138);



let QuestionsService = class QuestionsService {
    constructor(http) {
        this.http = http;
        this.routes = {
            getPath: (id, params) => `question/questionSetQuestions/${id}?page=${params.page}&pageSize=${params.pageSize}&search=${params.search}`,
            createPath: (id) => `question/${id}`,
            getByIdPath: (id) => `question/${id}`,
            updatePath: (id) => `question/${id}`,
            deletePath: (id) => `question/${id}`,
        };
    }
    getSetQuestions(id, params) {
        return this.http.get(this.routes.getPath(id, params));
    }
    createQuestion(data, id) {
        return this.http.post(this.routes.createPath(id), data);
    }
    updateQuestion(data, id) {
        return this.http.put(this.routes.updatePath(id), data);
    }
    getQuestionById(id) {
        return this.http.get(this.routes.getByIdPath(id));
    }
    deleteQuestionById(id) {
        return this.http.delete(this.routes.deletePath(id));
    }
};
QuestionsService.ctorParameters = () => [
    { type: _core_services__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
QuestionsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], QuestionsService);



/***/ }),

/***/ 49587:
/*!****************************************************************************************!*\
  !*** ./src/app/layout/questions/question-form/question-form.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVzdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 12680:
/*!****************************************************************************************!*\
  !*** ./src/app/layout/questions/question-list/question-list.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVzdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 41231:
/*!****************************************************************************************!*\
  !*** ./src/app/layout/questions/question-form/question-form.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container-fluid animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <div class=\"row justify-content-between align-items-center\">\n        <div class=\"col-auto\">\n          <h3 class=\"mb-0\">Question Form</h3>\n        </div>\n        <div class=\"col-auto\">\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"goBack()\">\n            <i class=\"fa fa-arrow-left me-1\" aria-hidden=\"true\"></i>\n            Back\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <form [formGroup]=\"questionForm\" class=\"form-horizontal\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"mb-3\">\n              <label class=\"form-label\">\n                Question\n                <span class=\"text-danger\">*</span>\n              </label>\n              <input\n                formControlName=\"question\"\n                type=\"text\"\n                class=\"form-control\"\n                placeholder=\"Enter Question Statement\"\n                [ngClass]=\"{\n                  'is-invalid':\n                    form.question.invalid &&\n                    submitted &&\n                    (form.question.touched || form.question.dirty)\n                }\"\n              />\n              <validation-messages [control]=\"form['question']\">\n              </validation-messages>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"mb-3\">\n              <label class=\"form-label\">\n                Type of Question\n                <span class=\"text-danger\">*</span>\n              </label>\n              <select\n                formControlName=\"type\"\n                class=\"form-select\"\n                placeholder=\"Select Type of Question\"\n                [ngClass]=\"{\n                  'is-invalid':\n                    form.type.invalid &&\n                    submitted &&\n                    (form.type.touched || form.type.dirty)\n                }\"\n              >\n                <option disabled value=\"\">Select Type</option>\n                <option value=\"MCQ\">MCQ</option>\n                <option value=\"TEXT\">Text</option>\n                <option value=\"NUMBER\">Number</option>\n              </select>\n              <validation-messages [control]=\"form['type']\">\n              </validation-messages>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"mb-3\">\n              <label class=\"form-label\"> Hint </label>\n              <input\n                formControlName=\"hint\"\n                type=\"text\"\n                class=\"form-control\"\n                placeholder=\"Give Hint\"\n              />\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"mb-3\">\n              <label class=\"form-label\">\n                Options\n                <span class=\"text-danger\">*</span>\n              </label>\n              <input\n                (input)=\"onTextChange($event)\"\n                formControlName=\"options\"\n                type=\"text\"\n                placeholder=\"Enter Options\"\n                class=\"form-control\"\n                [ngClass]=\"{\n                  'is-invalid':\n                    form.options.invalid &&\n                    submitted &&\n                    (form.options.touched || form.options.dirty)\n                }\"\n              />\n              <validation-messages\n                [control]=\"form['options']\"\n              ></validation-messages>\n            </div>\n          </div>\n        </div>\n        <!-- <h3>{{option.value}}</h3> -->\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"mb-3\">\n              <label class=\"form-label\">\n                Correct Option\n                <span class=\"text-danger\">*</span>\n              </label>\n              <select\n                formControlName=\"correctOption\"\n                class=\"form-select\"\n                placeholder=\"Select Correct  Option\"\n                [ngClass]=\"{\n                  'is-invalid':\n                    form.correctOption.invalid &&\n                    submitted &&\n                    (form.correctOption.touched || form.correctOption.dirty)\n                }\"\n              > \n                <option disabled value=\"\">Select Option</option>\n                <option *ngFor=\"let opt of splitArray\" [value]=\"opt\">\n                  {{ opt }}\n                </option>\n              </select>\n              <validation-messages\n                [control]=\"form['correctOption']\"\n              ></validation-messages>\n            </div>\n          </div>\n        </div>\n      </form>\n      <div class=\"text-center\">\n        <button\n          [disabled] =\"act==='view'\"\n          (click)=\"submit()\"\n          type=\"submit\"\n          class=\"btn btn-success text-white\"\n        >\n          {{ form._id.value ? \"Update\" : \"Save\" }}\n        </button>\n        <button (click)=\"goBack()\" class=\"btn btn-danger\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 32354:
/*!****************************************************************************************!*\
  !*** ./src/app/layout/questions/question-list/question-list.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container-fluid animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <div class=\"row justify-content-between align-items-center\">\n        <div class=\"col-auto\">\n          <h3 class=\"mb-0\">Questions</h3>\n        </div>\n        <div class=\"col-auto\">\n          <button\n            type=\"button\"\n            (click)=\"navigateTo('questions/questions-form', setId, null, 'create')\"\n            class=\"btn btn-outline-primary\"\n          >\n            <i class=\"fa fa-plus-circle me-1\"></i>\n            Add Question\n          </button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card-body\">\n      <div class=\"row mb-2\">\n        <div class=\"col-md-5\">\n          <form class=\"d-flex\">\n            <input\n              class=\"form-control\"\n              type=\"search\"\n              placeholder=\"Search\"\n              aria-label=\"Search\"\n              [(ngModel)]=\"search\"\n              [ngModelOptions]=\"{ standalone: true }\"\n              (keyup)=\"refreshList('search')\"\n            />\n            <button\n              class=\"btn btn-outline-danger\"\n              type=\"submit\"\n              (click)=\"refreshList('clear')\"\n              ngbTooltip=\"Clear Filter\"\n            >\n              <i class=\"fa fa-remove\"></i>\n            </button>\n          </form>\n        </div>\n      </div>\n      <div class=\"table-responsive text-nowrap\">\n        <table\n          class=\"table table-striped table-hover table-bordered table-sticky\"\n        >\n          <thead class=\"table-primary\">\n            <tr>\n              <th>Sr.No</th>\n              <th>Question</th>\n              <th>Type</th>\n              <th>Correct Option</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let que of questions; let i = index\">\n              <td>{{ pageSize * (page - 1) + (i + 1) }}</td>\n              <td>{{ que.question }}</td>\n              <td>{{ que.type }}</td>\n              <td>{{ que.correctOption }}</td>\n              <td>\n                <button\n                  (click)=\"navigateTo('questions/questions-form', setId, que._id, 'edit')\"\n                  class=\"btn btn-sm btn-outline-success mx-2\"\n                  ngbTooltip=\"Edit Question\"\n                >\n                  <i class=\"fa fa-pencil mx-1\"></i>\n                </button>\n                <button\n                  class=\"btn btn-sm btn-outline-danger mx-2\"\n                  data-toggle=\"modal\"\n                  (click)=\"open(que, alertMsg)\"\n                  ngbTooltip=\"Delete Quesion\"\n                >\n                  <i class=\"fa fa-trash mx-1\"></i>\n                </button>\n                <button\n                  (click)=\"navigateTo('questions/questions-form', setId, que._id, 'view')\"\n                  class=\"btn btn-sm btn-outline-success mx-2\"\n                  ngbTooltip=\"View Quesion\"\n                >\n                  <i class=\"fa fa-eye mx-1\"></i>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <app-custom-pagination\n        [(page)]=\"page\"\n        [(pageSize)]=\"pageSize\"\n        [(collection)]=\"totalQuestion\"\n        (myOutput)=\"onChangePage(page)\"\n      ></app-custom-pagination>\n    </div>\n  </div>\n</div>\n<ng-template #alertMsg let-modal>\n  <div class=\"row mt-3 me-3\">\n    <div class=\"col-md-10 col-sm-10\"></div>\n    <div class=\"col-md-2 col-sm-2 text-right\">\n      <button\n        type=\"button\"\n        class=\"close\"\n        data-dismiss=\"modal\"\n        aria-label=\"Close\"\n        (click)=\"modal.dismiss('Cross click')\"\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n  </div>\n  <div class=\"modal-body text-center px-0\">\n    <img\n      src=\"../../../../assets/img/warning.png\"\n      class=\"mb-3\"\n      width=\"100\"\n      alt=\"\"\n    />\n    <h4 class=\"text-warning\">Are you sure you want to Delete?</h4>\n    <div class=\"clearfix modal-text\">\n      <label *ngIf=\"selectedRow.question\">\n        <h3>{{ selectedRow.question }}</h3>\n      </label>\n    </div>\n  </div>\n  <div class=\"model-footer border-0 text-center px-0 pb-4\">\n    <div class=\"clearfix py-2\">\n      <button\n        class=\"btn btn-danger me-2\"\n        (click)=\"deleteQuestion(this.selectedRow._id)\"\n      >\n        OK\n      </button>\n      <button class=\"btn btn-success\" (click)=\"modal.dismiss('Cross click')\">\n        Cancel\n      </button>\n    </div>\n  </div>\n</ng-template>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_layout_questions_question_module_ts.aa329b6abc731cbd.js.map