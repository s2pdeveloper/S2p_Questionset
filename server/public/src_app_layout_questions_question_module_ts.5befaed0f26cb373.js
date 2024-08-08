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
        this.splitArray = [{ option: '' }];
        this.act = '';
        this.questionForm = this.formBuilder.group({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null),
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            hint: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            options: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl([]),
            correctOption: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            questionType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('TEXT'),
            queImageUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
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
    addOptionInput() {
        this.splitArray.push({ option: '' });
    }
    removeOptionInput(i) {
        this.splitArray.splice(i, 1);
    }
    getById(id) {
        this.questionService.getQuestionById(id).subscribe((success) => {
            var _a, _b;
            console.log('get by id', success);
            // this.splitArray = success?.result[0]?.options;
            this.splitArray = (_a = success === null || success === void 0 ? void 0 : success.result[0]) === null || _a === void 0 ? void 0 : _a.options.map(option => {
                return { option: option };
            });
            // this.splitArray = success?.result[0]?.options;
            this.displayImage = (_b = success === null || success === void 0 ? void 0 : success.result[0]) === null || _b === void 0 ? void 0 : _b.queImageUrl;
            this.questionForm.patchValue(success === null || success === void 0 ? void 0 : success.result[0]);
        });
    }
    submit() {
        this.submitted = true;
        let formData = this.questionForm.value;
        formData.options = this.splitArray.map((x) => { return x.option; });
        console.log(this.questionForm, formData.options);
        if (this.questionForm.invalid) {
            this.toastService.warning('Please fill all required fields!');
            return;
        }
        let fd = new FormData();
        fd.append('question', formData.question);
        fd.append('type', formData.type);
        fd.append('hint', formData.hint);
        fd.append('options', JSON.stringify(formData.options));
        fd.append('correctOption', formData.correctOption);
        // fd.append('questionType', formData.questionType);
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
    update(formData, id) {
        this.spinner.show();
        this.questionService.updateQuestion(formData, id).subscribe((success) => {
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
    // toggleQueType(e: any) {
    //   this.form.question.setValue('');
    //   this.form.queImageUrl.setValue('');
    //   this.form.questionType.setValue(e.target.value);
    // }
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

module.exports = ".img-shadow {\n  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1RkFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJxdWVzdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1zaGFkb3d7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDIpIDBweCAxcHggM3B4IDBweCwgcmdiYSgyNywgMzEsIDM1LCAwLjE1KSAwcHggMHB4IDBweCAxcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn0iXX0= */";

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

module.exports = "<div class=\"container-fluid animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row justify-content-between align-items-center\">\r\n        <div class=\"col-auto\">\r\n          <h3 class=\"mb-0\">Question Form</h3>\r\n        </div>\r\n        <div class=\"col-auto\">\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"goBack()\">\r\n            <i class=\"fa fa-arrow-left me-1\" aria-hidden=\"true\"></i>\r\n            Back\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <form [formGroup]=\"questionForm\" class=\"form-horizontal\">\r\n        <div class=\"row justify-content-start\">\r\n          <!-- <div class=\"col-md-6\">\r\n            <div class=\"mb-3\">\r\n              <label class=\"form-label\">\r\n                Type of Question\r\n                <span class=\"text-danger\">*</span>\r\n              </label>\r\n              <select\r\n                formControlName=\"questionType\"\r\n                class=\"form-select\"\r\n                placeholder=\"Select Type of Question\"\r\n                [ngClass]=\"{\r\n                  'is-invalid':\r\n                    form.questionType.invalid &&\r\n                    submitted &&\r\n                    (form.questionType.touched || form.questionType.dirty)\r\n                }\"\r\n                (change)=\"toggleQueType($event)\"\r\n              >\r\n                <option disabled selected value=\"\">\r\n                  Select Question Type\r\n                </option>\r\n                <option value=\"TEXT\">Text</option>\r\n                <option value=\"IMAGE\">Image</option>\r\n              </select>\r\n              <validation-messages [control]=\"form['type']\">\r\n              </validation-messages>\r\n            </div>\r\n          </div> -->\r\n\r\n          <div class=\"col-md-6\">\r\n            <div class=\"mb-3\">\r\n              <label class=\"form-label\">\r\n                Question\r\n                <span class=\"text-danger\">*</span>\r\n              </label>\r\n              <input\r\n                formControlName=\"question\"\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                placeholder=\"Enter Question Statement\"\r\n                [ngClass]=\"{\r\n                  'is-invalid':\r\n                    form.question.invalid &&\r\n                    submitted &&\r\n                    (form.question.touched || form.question.dirty)\r\n                }\"\r\n              />\r\n              <validation-messages [control]=\"form['question']\">\r\n              </validation-messages>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-6\">\r\n            <div class=\"mb-3\">\r\n              <label class=\"form-label\">\r\n                Type of Answer\r\n                <span class=\"text-danger\">*</span>\r\n              </label>\r\n              <select\r\n                formControlName=\"type\"\r\n                class=\"form-select\"\r\n                placeholder=\"Select Type of Question\"\r\n                [ngClass]=\"{\r\n                  'is-invalid':\r\n                    form.type.invalid &&\r\n                    submitted &&\r\n                    (form.type.touched || form.type.dirty)\r\n                }\"\r\n              >\r\n                <option disabled value=\"\">Select Type</option>\r\n                <option value=\"MCQ\">MCQ</option>\r\n                <option value=\"TEXT\">Text</option>\r\n                <option value=\"NUMBER\">Number</option>\r\n              </select>\r\n              <validation-messages [control]=\"form['type']\">\r\n              </validation-messages>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- <div class=\"col-md-6\">\r\n            <div class=\"mb-3\">\r\n              <label class=\"form-label\">\r\n                Question\r\n                <span class=\"text-danger\">*</span>\r\n              </label>\r\n              <input\r\n                formControlName=\"question\"\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                placeholder=\"Enter Question Statement\"\r\n                [ngClass]=\"{\r\n                  'is-invalid':\r\n                    form.question.invalid &&\r\n                    submitted &&\r\n                    (form.question.touched || form.question.dirty)\r\n                }\"\r\n              />\r\n              <validation-messages [control]=\"form['question']\">\r\n              </validation-messages>\r\n            </div>\r\n          </div> -->\r\n          <div class=\"col-md-6\">\r\n            <div class=\"mb-3\">\r\n              <label class=\"form-label\"> Hint </label>\r\n              <input\r\n                formControlName=\"hint\"\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                placeholder=\"Give Hint\"\r\n              />\r\n            </div>\r\n          </div>\r\n\r\n          <!-- <h3>{{option.value}}</h3> -->\r\n\r\n          <!-- <div class=\"col-md-6\">\r\n            <div class=\"mb-3\">\r\n              <label class=\"form-label\">\r\n                Options\r\n                <span class=\"text-danger\">*</span>\r\n              </label>\r\n              <input\r\n                (input)=\"onTextChange($event)\"\r\n                formControlName=\"options\"\r\n                type=\"text\"\r\n                placeholder=\"Enter Options\"\r\n                class=\"form-control\"\r\n                [ngClass]=\"{\r\n                  'is-invalid':\r\n                    form.options.invalid &&\r\n                    submitted &&\r\n                    (form.options.touched || form.options.dirty)\r\n                }\"\r\n              />\r\n              <validation-messages\r\n                [control]=\"form['options']\"\r\n              ></validation-messages>\r\n            </div>\r\n          </div> -->\r\n          <div class=\"col-md-6\">\r\n            <div class=\"mb-3\">\r\n              <label class=\"form-label\">\r\n                Correct Option\r\n                <span class=\"text-danger\">*</span>\r\n              </label>\r\n              <select\r\n                formControlName=\"correctOption\"\r\n                class=\"form-select\"\r\n                placeholder=\"Select Correct  Option\"\r\n                [ngClass]=\"{\r\n                  'is-invalid':\r\n                    form.correctOption.invalid &&\r\n                    submitted &&\r\n                    (form.correctOption.touched || form.correctOption.dirty)\r\n                }\"\r\n              >\r\n                <option disabled value=\"\">Select Option</option>\r\n                <option *ngFor=\"let opt of splitArray\" [value]=\"opt.option\">\r\n                  {{ opt.option }}\r\n                </option>\r\n              </select>\r\n              <validation-messages\r\n                [control]=\"form['correctOption']\"\r\n              ></validation-messages>\r\n            </div>\r\n          </div>\r\n          <div\r\n            class=\"col-md-6 d-flex justify-content-between align-items-center\"\r\n          >\r\n            <div class=\"mb-3\">\r\n              <label class=\"form-label\"> Question Image</label>\r\n              <input\r\n                type=\"file\"\r\n                class=\"form-control\"\r\n                (change)=\"fileBrowseHandler($event)\"\r\n\r\n              />\r\n            </div>\r\n            <div class=\"card mb-0 img-shadow\">\r\n              <img [src]=\"displayImage\" width=\"150\" height=\"70\" alt=\"\" />\r\n            </div>\r\n            <!-- <img [src]=\"displayImage\" width=\"100\" height=\"60\" alt=\"\" /> -->\r\n          </div>\r\n\r\n          <div class=\"col-12 mb-3\">\r\n            <div class=\"mb-3\">\r\n              <label class=\"form-label\">\r\n                Options\r\n                <span class=\"text-danger\">*</span>\r\n              </label>\r\n             <button class=\"btn btn-success  btn-sm\" (click)=\"addOptionInput()\" >\r\n              <i class=\"fa fa-plus-square text-light\" aria-hidden=\"true\"></i>\r\n             </button>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div *ngFor=\"let o of splitArray;let i = index\" class=\"col-3 mb-3\">\r\n                <!-- <input\r\n                \r\n                  type=\"text\"\r\n                  placeholder=\"Enter Options\"\r\n                  class=\"form-control\"\r\n                  [(ngModel)]=\"i.option\"\r\n                   [ngModelOptions]=\"{standalone: true}\"\r\n                  \r\n                /> -->\r\n\r\n                <div class=\"input-group mb-3\">\r\n                  <input  type=\"text\"\r\n                  placeholder=\"Enter Options\"\r\n                  class=\"form-control\"\r\n                  [(ngModel)]=\"o.option\"\r\n                   [ngModelOptions]=\"{standalone: true}\"\r\n                   >\r\n                  <div  (click)=\"removeOptionInput(i)\"  class=\"input-group-append\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-minus-square text-secondary\" aria-hidden=\"true\"></i></span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            \r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div class=\"text-center\">\r\n        <button\r\n          [disabled]=\"act === 'view'\"\r\n          (click)=\"submit()\"\r\n          type=\"submit\"\r\n          class=\"btn btn-success text-white\"\r\n        >\r\n          {{ form._id.value ? \"Update\" : \"Save\" }}\r\n        </button>\r\n        <button (click)=\"goBack()\" class=\"btn btn-danger\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 32354:
/*!****************************************************************************************!*\
  !*** ./src/app/layout/questions/question-list/question-list.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container-fluid animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row justify-content-between align-items-center\">\r\n        <div class=\"col-auto\">\r\n          <h3 class=\"mb-0\">Questions</h3>\r\n        </div>\r\n        <div class=\"col-auto\">\r\n          <button\r\n            type=\"button\"\r\n            (click)=\"\r\n              navigateTo('questions/questions-form', setId, null, 'create')\r\n            \"\r\n            class=\"btn btn-outline-primary\"\r\n          >\r\n            <i class=\"fa fa-plus-circle me-1\"></i>\r\n            Add Question\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n      <div class=\"row mb-2\">\r\n        <div class=\"col-md-5\">\r\n          <form class=\"d-flex\">\r\n            <input\r\n              class=\"form-control\"\r\n              type=\"search\"\r\n              placeholder=\"Search\"\r\n              aria-label=\"Search\"\r\n              [(ngModel)]=\"search\"\r\n              [ngModelOptions]=\"{ standalone: true }\"\r\n              (keyup)=\"refreshList('search')\"\r\n            />\r\n            <button\r\n              class=\"btn btn-outline-danger\"\r\n              type=\"submit\"\r\n              (click)=\"refreshList('clear')\"\r\n              ngbTooltip=\"Clear Filter\"\r\n            >\r\n              <i class=\"fa fa-remove\"></i>\r\n            </button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-responsive text-nowrap\">\r\n        <table\r\n          class=\"table table-striped table-hover table-bordered table-sticky\"\r\n        >\r\n          <thead class=\"table-primary\">\r\n            <tr>\r\n              <th>Sr.No</th>\r\n              <th>Question</th>\r\n              <th>Type</th>\r\n              <th>Correct Option</th>\r\n              <th>Actions</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let que of questions; let i = index\">\r\n              <td>{{ pageSize * (page - 1) + (i + 1) }}</td>\r\n              <td *ngIf=\"que?.question\">\r\n                {{ que?.question }}\r\n              </td>\r\n              <td *ngIf=\"!que?.question\">\r\n                <img [src]=\"que.queImageUrl\" width=\"100\" height=\"40\" alt=\"\" />\r\n              </td>\r\n              <td>{{ que?.type }}</td>\r\n              <td>{{ que?.correctOption }}</td>\r\n              <td>\r\n                <button\r\n                  (click)=\"\r\n                    navigateTo(\r\n                      'questions/questions-form',\r\n                      setId,\r\n                      que._id,\r\n                      'edit'\r\n                    )\r\n                  \"\r\n                  class=\"btn btn-sm btn-outline-success mx-2\"\r\n                  ngbTooltip=\"Edit Question\"\r\n                >\r\n                  <i class=\"fa fa-pencil mx-1\"></i>\r\n                </button>\r\n                <button\r\n                  class=\"btn btn-sm btn-outline-danger mx-2\"\r\n                  data-toggle=\"modal\"\r\n                  (click)=\"open(que, alertMsg)\"\r\n                  ngbTooltip=\"Delete Quesion\"\r\n                >\r\n                  <i class=\"fa fa-trash mx-1\"></i>\r\n                </button>\r\n                <button\r\n                  (click)=\"\r\n                    navigateTo(\r\n                      'questions/questions-form',\r\n                      setId,\r\n                      que._id,\r\n                      'view'\r\n                    )\r\n                  \"\r\n                  class=\"btn btn-sm btn-outline-success mx-2\"\r\n                  ngbTooltip=\"View Quesion\"\r\n                >\r\n                  <i class=\"fa fa-eye mx-1\"></i>\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <app-custom-pagination\r\n        [(page)]=\"page\"\r\n        [(pageSize)]=\"pageSize\"\r\n        [(collection)]=\"totalQuestion\"\r\n        (myOutput)=\"onChangePage(page)\"\r\n      ></app-custom-pagination>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #alertMsg let-modal>\r\n  <div class=\"row mt-3 me-3\">\r\n    <div class=\"col-md-10 col-sm-10\"></div>\r\n    <div class=\"col-md-2 col-sm-2 text-right\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"close\"\r\n        data-dismiss=\"modal\"\r\n        aria-label=\"Close\"\r\n        (click)=\"modal.dismiss('Cross click')\"\r\n      >\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-body text-center px-0\">\r\n    <img\r\n      src=\"../../../../assets/img/warning.png\"\r\n      class=\"mb-3\"\r\n      width=\"100\"\r\n      alt=\"\"\r\n    />\r\n    <h4 class=\"text-warning\">Are you sure you want to Delete?</h4>\r\n    <div class=\"clearfix modal-text\">\r\n      <label *ngIf=\"selectedRow.question\">\r\n        <h3>{{ selectedRow.question }}</h3>\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div class=\"model-footer border-0 text-center px-0 pb-4\">\r\n    <div class=\"clearfix py-2\">\r\n      <button\r\n        class=\"btn btn-danger me-2\"\r\n        (click)=\"deleteQuestion(this.selectedRow._id)\"\r\n      >\r\n        OK\r\n      </button>\r\n      <button class=\"btn btn-success\" (click)=\"modal.dismiss('Cross click')\">\r\n        Cancel\r\n      </button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_layout_questions_question_module_ts.5befaed0f26cb373.js.map