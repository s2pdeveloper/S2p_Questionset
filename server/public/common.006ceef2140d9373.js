"use strict";
(self["webpackChunkng"] = self["webpackChunkng"] || []).push([["common"],{

/***/ 32277:
/*!*****************************************************!*\
  !*** ./src/app/services/seminar/seminar.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeminarService": () => (/* binding */ SeminarService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services */ 98138);



let SeminarService = class SeminarService {
    constructor(http) {
        this.http = http;
        this.routes = {
            createPath: `seminar`,
            getByIdPath: (id) => `seminar/${id}`,
            updatePath: (id) => `seminar/${id}`,
            deletePath: (id) => `seminar/${id}`,
            getSeminarOverViewPath: (id) => `seminar/seminarOverView/${id}`,
            getSeminars: (params) => `seminar?page=${params.page}&pageSize=${params.pageSize}&search=${params.search}`,
            getSeminarList: `seminar/list`,
        };
    }
    getAllSeminars(params) {
        return this.http.get(this.routes.getSeminars(params));
    }
    addNewSeminar(payload) {
        return this.http.post(this.routes.createPath, payload);
    }
    updateSeminar(id, payload) {
        return this.http.put(this.routes.updatePath(id), payload);
    }
    getSeminarById(id) {
        return this.http.get(this.routes.getByIdPath(id));
    }
    getSeminarOverView(id) {
        return this.http.get(this.routes.getSeminarOverViewPath(id));
    }
    deleteSeminar(id) {
        return this.http.delete(this.routes.deletePath(id));
    }
    allSeminarList() {
        return this.http.get(this.routes.getSeminarList);
    }
};
SeminarService.ctorParameters = () => [
    { type: src_app_core_services__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
SeminarService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], SeminarService);



/***/ }),

/***/ 21554:
/*!************************************************!*\
  !*** ./src/app/services/users/user.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services */ 98138);




let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.routes = {
            createPath: `user/register`,
            getByIdPath: (id) => `user/${id}`,
            getAllPath: (params) => `user/getAll?pageNo=${params.page}&pageSize=${params.pageSize}&search=${params.search}`,
            updatePath: (id) => `user/${id}`,
            deletePath: (id) => `user/${id}`,
            getAttenderPath: (params) => `user/attenders?pageNo=${params.page}&pageSize=${params.pageSize}&search=${params.search}`,
        };
    }
    createUser(payload) {
        return this.http
            .post(this.routes.createPath, payload)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res));
    }
    getAllUsers(params) {
        return this.http
            .get(this.routes.getAllPath(params))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res));
    }
    updateUser(id, payload) {
        return this.http
            .put(this.routes.updatePath(id), payload)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res));
    }
    profile(id) {
        return this.http
            .get(this.routes.getByIdPath(id))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res));
    }
    deleteUser(id) {
        return this.http
            .delete(this.routes.deletePath(id))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res));
    }
    getAllAttenderUsers(params) {
        return this.http
            .get(this.routes.getAttenderPath(params))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res));
    }
};
UserService.ctorParameters = () => [
    { type: src_app_core_services__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], UserService);



/***/ })

}]);
//# sourceMappingURL=common.006ceef2140d9373.js.map