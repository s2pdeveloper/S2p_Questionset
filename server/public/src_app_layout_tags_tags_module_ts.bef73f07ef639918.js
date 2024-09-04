"use strict";
(self["webpackChunkng"] = self["webpackChunkng"] || []).push([["src_app_layout_tags_tags_module_ts"],{

/***/ 3930:
/*!**************************************************************!*\
  !*** ./src/app/layout/tags/tags-form/tags-form.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsFormComponent": () => (/* binding */ TagsFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _tags_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags-form.component.html?ngResource */ 40784);
/* harmony import */ var _tags_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tags-form.component.scss?ngResource */ 34403);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var _services_tags_tags_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/tags/tags.service */ 53338);










let TagsFormComponent = class TagsFormComponent {
    constructor(spinner, router, formBuilder, location, tagService, actRoutes, toastService) {
        this.spinner = spinner;
        this.router = router;
        this.formBuilder = formBuilder;
        this.location = location;
        this.tagService = tagService;
        this.actRoutes = actRoutes;
        this.toastService = toastService;
        this.submitted = false;
        this.tagsForm = this.formBuilder.group({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
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
        return this.tagsForm.controls;
    }
    getById(id) {
        this.tagService.getTagById(id).subscribe((success) => {
            // console.log("Print" ,success);
            this.tagsForm.patchValue(success === null || success === void 0 ? void 0 : success.result[0]);
        });
    }
    submit() {
        this.submitted = true;
        if (this.tagsForm.invalid) {
            this.toastService.warning('Please fill the required field!');
            return;
        }
        let formData = this.tagsForm.value;
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
        this.tagService.createTag(formData).subscribe((success) => {
            this.spinner.hide();
            this.toastService.success('Tag Created Successfully');
            this.router.navigate(['tags/list']);
        }, (error) => {
            this.spinner.hide();
            this.toastService.error('Something Went Wrong!');
        });
    }
    update(formData) {
        this.spinner.show();
        this.tagService.updateTag(formData, formData._id).subscribe((success) => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success('Tag Updated Successfully');
            this.router.navigate(['tags/list']);
        }, (error) => {
            this.spinner.hide();
            this.toastService.error('Something Went Wrong!');
        });
    }
    goBack() {
        this.location.back();
    }
};
TagsFormComponent.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _services_tags_tags_service__WEBPACK_IMPORTED_MODULE_2__.TagsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService }
];
TagsFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-tags-form',
        template: _tags_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tags_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TagsFormComponent);



/***/ }),

/***/ 80951:
/*!**************************************************************!*\
  !*** ./src/app/layout/tags/tags-list/tags-list.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsListComponent": () => (/* binding */ TagsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _tags_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags-list.component.html?ngResource */ 77336);
/* harmony import */ var _tags_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tags-list.component.scss?ngResource */ 25257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_tags_tags_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/tags/tags.service */ 53338);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 82808);









let TagsListComponent = class TagsListComponent {
    constructor(router, modalService, tagService, toastService, spinner) {
        this.router = router;
        this.modalService = modalService;
        this.tagService = tagService;
        this.toastService = toastService;
        this.spinner = spinner;
        this.selectedRow = {};
        this.tags = [];
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
        this.tagService.getAllTags(params).subscribe((success) => {
            var _a, _b;
            console.log('Tags', success);
            this.tags = (_a = success === null || success === void 0 ? void 0 : success.result) === null || _a === void 0 ? void 0 : _a.data;
            this.totalTags = (_b = success === null || success === void 0 ? void 0 : success.result) === null || _b === void 0 ? void 0 : _b.totalCount;
            // console.log('All Tags', this.tags);
            this.spinner.hide();
        }, (error) => {
            this.spinner.hide();
            this.toastService.error('Something went Wrong!');
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
    open(tag, content) {
        this.selectedRow = tag;
        this.modalService.open(content, { centered: true });
    }
    delete(id) {
        this.spinner.show();
        this.tagService.deleteTag(id).subscribe((success) => {
            console.log('Tag Deleted', success);
            this.getAll();
            this.selectedRow = {};
            this.modalService.dismissAll();
            this.spinner.hide();
            this.toastService.success(success.result.message);
        }, (error) => {
            this.selectedRow = {};
            this.modalService.dismissAll();
            this.spinner.hide();
            this.toastService.error('Something Went Wrong!');
        });
    }
};
TagsListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal },
    { type: _services_tags_tags_service__WEBPACK_IMPORTED_MODULE_2__.TagsService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerService }
];
TagsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-tags-list',
        template: _tags_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tags_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TagsListComponent);



/***/ }),

/***/ 57054:
/*!****************************************************!*\
  !*** ./src/app/layout/tags/tags-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsRoutingModule": () => (/* binding */ TagsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _tags_list_tags_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags-list/tags-list.component */ 80951);
/* harmony import */ var _tags_form_tags_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tags-form/tags-form.component */ 3930);





const userRoutes = [
    {
        path: '',
        data: {
            title: 'Tags',
        },
        children: [
            {
                path: '',
                redirectTo: 'list',
            },
            {
                path: 'list',
                component: _tags_list_tags_list_component__WEBPACK_IMPORTED_MODULE_0__.TagsListComponent,
                data: {
                    title: 'Tags List',
                },
            },
            {
                path: 'form',
                component: _tags_form_tags_form_component__WEBPACK_IMPORTED_MODULE_1__.TagsFormComponent,
                data: {
                    title: 'Tags Form',
                },
            },
        ],
    },
];
let TagsRoutingModule = class TagsRoutingModule {
};
TagsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(userRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], TagsRoutingModule);



/***/ }),

/***/ 90964:
/*!********************************************!*\
  !*** ./src/app/layout/tags/tags.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsModule": () => (/* binding */ TagsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _tags_list_tags_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags-list/tags-list.component */ 80951);
/* harmony import */ var _tags_form_tags_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tags-form/tags-form.component */ 3930);
/* harmony import */ var _tags_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tags-routing.module */ 57054);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/core.module */ 40294);






let TagsModule = class TagsModule {
};
TagsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_tags_list_tags_list_component__WEBPACK_IMPORTED_MODULE_0__.TagsListComponent, _tags_form_tags_form_component__WEBPACK_IMPORTED_MODULE_1__.TagsFormComponent],
        imports: [_tags_routing_module__WEBPACK_IMPORTED_MODULE_2__.TagsRoutingModule, _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule.forRoot()],
    })
], TagsModule);



/***/ }),

/***/ 34403:
/*!***************************************************************************!*\
  !*** ./src/app/layout/tags/tags-form/tags-form.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWdzLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 25257:
/*!***************************************************************************!*\
  !*** ./src/app/layout/tags/tags-list/tags-list.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = ".table-sticky > thead > tr > th,\n.table-sticky > thead > tr > td {\n  top: -2px;\n  position: sticky;\n  z-index: 9;\n}\n\n.user-table::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n}\n\n.user-table::-webkit-scrollbar-track {\n  background: #fff;\n}\n\n.user-table::-webkit-scrollbar-thumb {\n  background-color: #344e5f;\n  border-radius: 20px;\n}\n\n.user-table {\n  height: 400px;\n  display: block;\n  overflow-y: scroll;\n  overflow-x: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhZ3MtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7RUFFRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBRkY7O0FBS0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUZGIiwiZmlsZSI6InRhZ3MtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi50YWJsZS1zdGlja3k+dGhlYWQ+dHI+dGgsXHJcbi50YWJsZS1zdGlja3k+dGhlYWQ+dHI+dGQge1xyXG4gIHRvcDogLTJweDtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHotaW5kZXg6IDk7XHJcbn1cclxuXHJcbi51c2VyLXRhYmxlOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDVweDtcclxuICBoZWlnaHQ6IDVweDtcclxufVxyXG5cclxuLnVzZXItdGFibGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4udXNlci10YWJsZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDRlNWY7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLnVzZXItdGFibGUge1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcclxufVxyXG5cclxuIl19 */";

/***/ }),

/***/ 40784:
/*!***************************************************************************!*\
  !*** ./src/app/layout/tags/tags-form/tags-form.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container-fluid animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row justify-content-between align-items-center\">\r\n        <div class=\"col-auto\">\r\n          <h3 class=\"mb-0\">Tags Form</h3>\r\n        </div>\r\n        <div class=\"col-auto\">\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"goBack()\">\r\n            <i class=\"fa fa-arrow-left me-1\" aria-hidden=\"true\"></i>\r\n            Back\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <form [formGroup]=\"tagsForm\" class=\"form-horizontal\">\r\n        <div class=\"row justify-content-start\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"mb-3\">\r\n              <label class=\"form-label\">\r\n                Tag Name\r\n                <span class=\"text-danger\">*</span>\r\n              </label>\r\n              <input\r\n                formControlName=\"name\"\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                placeholder=\"Enter Tag Name\"\r\n                [ngClass]=\"{\r\n                  'is-invalid':\r\n                    form.name.invalid &&\r\n                    submitted &&\r\n                    (form.name.touched || form.name.dirty)\r\n                }\"\r\n              />\r\n              <validation-messages [control]=\"form['name']\">\r\n              </validation-messages>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div class=\"text-center\">\r\n        <button\r\n          (click)=\"submit()\"\r\n          type=\"submit\"\r\n          class=\"btn btn-success text-white\"\r\n        >\r\n          {{ form._id.value ? \"Update\" : \"Save\" }}\r\n        </button>\r\n        <button (click)=\"goBack()\" class=\"btn btn-danger\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 77336:
/*!***************************************************************************!*\
  !*** ./src/app/layout/tags/tags-list/tags-list.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container-fluid animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row justify-content-between align-items-center\">\r\n        <div class=\"col-auto\">\r\n          <h3 class=\"mb-0\">Tags</h3>\r\n        </div>\r\n        <div class=\"col-auto\">\r\n          <button\r\n            type=\"button\"\r\n            (click)=\"navigateTo('tags/form', null)\"\r\n            class=\"btn btn-outline-primary\"\r\n          >\r\n            <i class=\"fa fa-plus-circle me-1\"></i>\r\n            Add Tag\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n      <div class=\"row mb-2\">\r\n        <div class=\"col-md-5\">\r\n          <form class=\"d-flex\">\r\n            <input\r\n              class=\"form-control\"\r\n              type=\"search\"\r\n              placeholder=\"Search\"\r\n              aria-label=\"Search\"\r\n              [(ngModel)]=\"search\"\r\n              [ngModelOptions]=\"{ standalone: true }\"\r\n              (keyup)=\"refreshList('search')\"\r\n            />\r\n            <button\r\n              class=\"btn btn-outline-danger\"\r\n              type=\"submit\"\r\n              (click)=\"refreshList('clear')\"\r\n              ngbTooltip=\"Clear Filter\"\r\n            >\r\n              <i class=\"fa fa-remove\"></i>\r\n            </button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-responsive text-nowrap\">\r\n        <table\r\n          class=\"table table-striped table-hover table-bordered table-sticky\"\r\n        >\r\n          <thead class=\"table-primary\">\r\n            <tr>\r\n              <th>Sr.No</th>\r\n              <th>Question</th>\r\n              <th>Actions</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let tag of tags; let i = index\">\r\n              <td>{{ pageSize * (page - 1) + (i + 1) }}</td>\r\n              <td>\r\n                {{ tag?.name }}\r\n              </td>\r\n              <td>\r\n                <button\r\n                  (click)=\"navigateTo('tags/form', tag?._id)\"\r\n                  class=\"btn btn-sm btn-outline-success mx-2\"\r\n                  ngbTooltip=\"Edit Question\"\r\n                >\r\n                  <i class=\"fa fa-pencil mx-1\"></i>\r\n                </button>\r\n                <button\r\n                  class=\"btn btn-sm btn-outline-danger mx-2\"\r\n                  data-toggle=\"modal\"\r\n                  (click)=\"open(tag, alertMsg)\"\r\n                  ngbTooltip=\"Delete Quesion\"\r\n                >\r\n                  <i class=\"fa fa-trash mx-1\"></i>\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <app-custom-pagination\r\n        [(page)]=\"page\"\r\n        [(pageSize)]=\"pageSize\"\r\n        [(collection)]=\"totalTags\"\r\n        (myOutput)=\"onChangePage(page)\"\r\n      ></app-custom-pagination>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #alertMsg let-modal>\r\n  <div class=\"row mt-3 me-3\">\r\n    <div class=\"col-md-10 col-sm-10\"></div>\r\n    <div class=\"col-md-2 col-sm-2 text-right\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"close\"\r\n        data-dismiss=\"modal\"\r\n        aria-label=\"Close\"\r\n        (click)=\"modal.dismiss('Cross click')\"\r\n      >\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-body text-center px-0\">\r\n    <img\r\n      src=\"../../../../assets/img/warning.png\"\r\n      class=\"mb-3\"\r\n      width=\"100\"\r\n      alt=\"\"\r\n    />\r\n    <h4 class=\"text-warning\">Are you sure you want to Delete?</h4>\r\n    <div class=\"clearfix modal-text\">\r\n      <label *ngIf=\"selectedRow?.name\">\r\n        <h3>{{ selectedRow?.name }}</h3>\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div class=\"model-footer border-0 text-center px-0 pb-4\">\r\n    <div class=\"clearfix py-2\">\r\n      <button\r\n        class=\"btn btn-danger me-2\"\r\n        (click)=\"delete(selectedRow._id)\"\r\n      >\r\n        OK\r\n      </button>\r\n      <button class=\"btn btn-success\" (click)=\"modal.dismiss('Cross click')\">\r\n        Cancel\r\n      </button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_layout_tags_tags_module_ts.bef73f07ef639918.js.map