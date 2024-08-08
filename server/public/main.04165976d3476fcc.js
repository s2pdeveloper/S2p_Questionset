(self["webpackChunkng"] = self["webpackChunkng"] || []).push([["main"],{

/***/ 36953:
/*!*************************!*\
  !*** ./src/app/_nav.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navItems": () => (/* binding */ navItems)
/* harmony export */ });
const navItems = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
        badge: {
            variant: 'info',
            text: 'NEW',
        },
    },
    {
        name: 'User',
        title: true,
    },
    {
        name: 'Admins',
        url: '/users/users',
        icon: 'icon-user',
    },
    {
        name: 'Seminars',
        url: '/seminars/seminars',
        icon: 'icon-user',
    },
    {
        name: 'Question Set',
        url: '/questionSet/questionSet',
        icon: 'icon-user',
    },
];


/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers */ 52578);
/* harmony import */ var _views_error_404_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/error/404.component */ 26943);
/* harmony import */ var _views_error_500_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/error/500.component */ 98743);
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/login/login.component */ 93);
/* harmony import */ var _views_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/register/register.component */ 60193);
/* harmony import */ var _views_forgotpass_forgotpass_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/forgotpass/forgotpass.component */ 1537);
/* harmony import */ var _views_changepwd_changepwd_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/changepwd/changepwd.component */ 82347);



// Import Containers







const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: '404',
        component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_1__.P404Component,
        data: {
            title: 'Page 404',
        },
    },
    {
        path: '500',
        component: _views_error_500_component__WEBPACK_IMPORTED_MODULE_2__.P500Component,
        data: {
            title: 'Page 500',
        },
    },
    {
        path: 'login',
        component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
        data: {
            title: 'Login Page',
        },
    },
    {
        path: 'register',
        component: _views_register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent,
        data: {
            title: 'Register Page',
        },
    },
    {
        path: 'forgot-pwd',
        component: _views_forgotpass_forgotpass_component__WEBPACK_IMPORTED_MODULE_5__.ForgotpassComponent,
        data: {
            title: 'Forgot Password Page',
        },
    },
    {
        path: 'change-pwd',
        component: _views_changepwd_changepwd_component__WEBPACK_IMPORTED_MODULE_6__.ChangepwdComponent,
        data: {
            title: 'Change Password Page',
        },
    },
    {
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_0__.DefaultLayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap___ivy_ngcc___buttons_fesm2015_ngx-bootstrap-buttons_js"), __webpack_require__.e("src_app_views_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/dashboard/dashboard.module */ 54727)).then((m) => m.DashboardModule),
            },
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap___ivy_ngcc___buttons_fesm2015_ngx-bootstrap-buttons_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/profile/profile.module */ 38323)).then((m) => m.ProfileModule),
            },
            {
                path: 'users',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_layout_users_users_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./layout/users/users.module */ 87754)).then((m) => m.UsersModule),
            },
            {
                path: 'seminars',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_layout_seminars_seminars_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./layout/seminars/seminars.module */ 90023)).then((m) => m.SeminarsModule),
            },
            {
                path: 'questionSet',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_layout_questionSet_question-set_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./layout/questionSet/question-set.module */ 8502)).then((m) => m.QuestionSetModule),
            },
            {
                path: 'questions',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_questions_question_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layout/questions/question.module */ 83381)).then((m) => m.QuestionModule),
            },
        ],
    },
    { path: '**', component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_1__.P404Component },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons-angular */ 2424);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/icons */ 52915);





let AppComponent = class AppComponent {
    constructor(router, iconSet) {
        this.router = router;
        this.iconSet = iconSet;
        // iconSet singleton
        iconSet.icons = Object.assign({}, _coreui_icons__WEBPACK_IMPORTED_MODULE_0__.freeSet);
    }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router },
    { type: _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_2__.IconSetService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        // tslint:disable-next-line
        selector: 'body',
        template: '<router-outlet></router-outlet>',
        providers: [_coreui_icons_angular__WEBPACK_IMPORTED_MODULE_2__.IconSetService],
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angularx-qrcode */ 49876);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers */ 52578);
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/carousel */ 15215);
/* harmony import */ var _views_error_404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/error/404.component */ 26943);
/* harmony import */ var _views_error_500_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/error/500.component */ 98743);
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/login/login.component */ 93);
/* harmony import */ var _views_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/register/register.component */ 60193);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @coreui/angular */ 2855);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 15896);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 33445);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng2-charts */ 53808);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth/auth.service */ 51228);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/core.module */ 40294);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _views_forgotpass_forgotpass_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/forgotpass/forgotpass.component */ 1537);
/* harmony import */ var _views_changepwd_changepwd_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/changepwd/changepwd.component */ 82347);
/* harmony import */ var _modal_delete_alert_delete_alert_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modal/delete-alert/delete-alert.component */ 77286);









// import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
};

// Import containers






const APP_CONTAINERS = [_containers__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutComponent];

// Import routing module

// Import 3rd party components









let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.NgModule)({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__.AppRoutingModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_19__.AppAsideModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_19__.AppBreadcrumbModule.forRoot(),
            _coreui_angular__WEBPACK_IMPORTED_MODULE_19__.AppFooterModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_19__.AppHeaderModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_19__.AppSidebarModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_20__.PerfectScrollbarModule,
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__.BsDropdownModule.forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__.TabsModule.forRoot(),
            ng2_charts__WEBPACK_IMPORTED_MODULE_21__.ChartsModule,
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__.CarouselModule.forRoot(),
            _core_core_module__WEBPACK_IMPORTED_MODULE_11__.CoreModule.forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_24__.NgxSpinnerModule,
            angularx_qrcode__WEBPACK_IMPORTED_MODULE_25__.QRCodeModule,
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
            ...APP_CONTAINERS,
            _views_error_404_component__WEBPACK_IMPORTED_MODULE_3__.P404Component,
            _views_error_500_component__WEBPACK_IMPORTED_MODULE_4__.P500Component,
            _views_login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent,
            _views_register_register_component__WEBPACK_IMPORTED_MODULE_6__.RegisterComponent,
            _views_forgotpass_forgotpass_component__WEBPACK_IMPORTED_MODULE_12__.ForgotpassComponent,
            _views_changepwd_changepwd_component__WEBPACK_IMPORTED_MODULE_13__.ChangepwdComponent,
            _modal_delete_alert_delete_alert_component__WEBPACK_IMPORTED_MODULE_14__.DeleteAlertComponent,
        ],
        providers: [
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_26__.LocationStrategy,
                useClass: _angular_common__WEBPACK_IMPORTED_MODULE_26__.HashLocationStrategy,
            },
            // IconSetService,
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__.AuthService,
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 50830:
/*!***********************************************************************!*\
  !*** ./src/app/containers/default-layout/default-layout.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultLayoutComponent": () => (/* binding */ DefaultLayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _default_layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout.component.html?ngResource */ 8752);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth/auth.service */ 51228);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_nav */ 36953);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services */ 98138);







let DefaultLayoutComponent = class DefaultLayoutComponent {
    constructor(authService, router, storageService) {
        this.authService = authService;
        this.router = router;
        this.storageService = storageService;
        this.sidebarMinimized = false;
        this.navItems = _nav__WEBPACK_IMPORTED_MODULE_2__.navItems;
        this.userDetails = [];
    }
    toggleMinimize(e) {
        this.sidebarMinimized = e;
    }
    ngOnInit() {
        this.userDetails = this.storageService.get('user');
    }
    viewProfile() {
        this.router.navigate(['/profile']);
    }
    logout() {
        this.authService.logout();
    }
};
DefaultLayoutComponent.ctorParameters = () => [
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_core_services__WEBPACK_IMPORTED_MODULE_3__.StorageService }
];
DefaultLayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-dashboard',
        template: _default_layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
    })
], DefaultLayoutComponent);



/***/ }),

/***/ 14639:
/*!****************************************************!*\
  !*** ./src/app/containers/default-layout/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultLayoutComponent": () => (/* reexport safe */ _default_layout_component__WEBPACK_IMPORTED_MODULE_0__.DefaultLayoutComponent)
/* harmony export */ });
/* harmony import */ var _default_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout.component */ 50830);



/***/ }),

/***/ 52578:
/*!*************************************!*\
  !*** ./src/app/containers/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultLayoutComponent": () => (/* reexport safe */ _default_layout__WEBPACK_IMPORTED_MODULE_0__.DefaultLayoutComponent)
/* harmony export */ });
/* harmony import */ var _default_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout */ 14639);



/***/ }),

/***/ 40937:
/*!****************************************************************************!*\
  !*** ./src/app/core/components/alert-messages/alert-messages.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _alert_messages_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-messages.component.html?ngResource */ 15353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _alert_messages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-messages.service */ 30382);




let AlertComponent = class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
        // subscribe to alert messages
        this.subscription = this.alertService.getMessage().subscribe(message => {
            this.message = message;
        });
    }
    ngOnDestroy() {
        // unsubscribe on destroy to prevent memory leaks
        this.subscription.unsubscribe();
    }
};
AlertComponent.ctorParameters = () => [
    { type: _alert_messages_service__WEBPACK_IMPORTED_MODULE_1__.AlertService }
];
AlertComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: "app-alert",
        template: _alert_messages_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], AlertComponent);



/***/ }),

/***/ 30382:
/*!**************************************************************************!*\
  !*** ./src/app/core/components/alert-messages/alert-messages.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 92218);




let AlertService = class AlertService {
    constructor(router) {
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    this.subject.next();
                }
            }
        });
    }
    success(message, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: "success", text: message });
    }
    error(message, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: "error", text: message });
    }
    getMessage() {
        return this.subject.asObservable();
    }
};
AlertService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
AlertService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], AlertService);



/***/ }),

/***/ 53406:
/*!**********************************************************************************!*\
  !*** ./src/app/core/components/custom-pagination/custom-pagination.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomPaginationComponent": () => (/* binding */ CustomPaginationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _custom_pagination_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-pagination.component.html?ngResource */ 67806);
/* harmony import */ var _custom_pagination_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-pagination.component.scss?ngResource */ 47048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let CustomPaginationComponent = class CustomPaginationComponent {
    constructor() {
        this.page = 1;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.pageSize = 25;
        this.pageSizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.collection = 0;
        this.collectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.myOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.itemsPerPage = 25;
        this.currentPageLimit = 25;
        this.pageLimitOptions = [{ value: 5 }, { value: 10 }, { value: 25 }, { value: 50 }, { value: 100 }, { value: 150 }, { value: 200 }];
    }
    ngAfterViewInit() {
        // console.log("child", this.pageSize, this.page, this.collection);
    }
    ngOnInit() {
        // console.log("child", this.pageSize, this.page, this.collection);
    }
    onChangePage(pageNo) {
        this.pageChange.emit(this.page);
        this.pageSizeChange.emit(this.pageSize);
        this.collectionChange.emit(this.collection);
        this.myOutput.emit(pageNo);
    }
};
CustomPaginationComponent.ctorParameters = () => [];
CustomPaginationComponent.propDecorators = {
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    pageChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    pageSizeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    collection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    collectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    myOutput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
CustomPaginationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: "app-custom-pagination",
        template: _custom_pagination_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_custom_pagination_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomPaginationComponent);



/***/ }),

/***/ 1657:
/*!******************************************!*\
  !*** ./src/app/core/components/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* reexport safe */ _alert_messages_alert_messages_component__WEBPACK_IMPORTED_MODULE_1__.AlertComponent),
/* harmony export */   "AlertService": () => (/* reexport safe */ _alert_messages_alert_messages_service__WEBPACK_IMPORTED_MODULE_0__.AlertService),
/* harmony export */   "CustomPaginationComponent": () => (/* reexport safe */ _custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_2__.CustomPaginationComponent),
/* harmony export */   "ValidationMessagesComponent": () => (/* reexport safe */ _validation_messages_validation_messages_component__WEBPACK_IMPORTED_MODULE_3__.ValidationMessagesComponent),
/* harmony export */   "ValidationService": () => (/* reexport safe */ _validation_messages_validation_messages_service__WEBPACK_IMPORTED_MODULE_4__.ValidationService)
/* harmony export */ });
/* harmony import */ var _alert_messages_alert_messages_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-messages/alert-messages.service */ 30382);
/* harmony import */ var _alert_messages_alert_messages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-messages/alert-messages.component */ 40937);
/* harmony import */ var _custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-pagination/custom-pagination.component */ 53406);
/* harmony import */ var _validation_messages_validation_messages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation-messages/validation-messages.component */ 9175);
/* harmony import */ var _validation_messages_validation_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validation-messages/validation-messages.service */ 10208);







/***/ }),

/***/ 9175:
/*!**************************************************************************************!*\
  !*** ./src/app/core/components/validation-messages/validation-messages.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationMessagesComponent": () => (/* binding */ ValidationMessagesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _validation_messages_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation-messages.component.html?ngResource */ 25251);
/* harmony import */ var _validation_messages_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation-messages.component.scss?ngResource */ 6629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _validation_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation-messages.service */ 10208);





let ValidationMessagesComponent = class ValidationMessagesComponent {
    constructor(validationService) {
        this.validationService = validationService;
        this.errorName = null;
    }
    get errorMessage() {
        for (const propertyName in this.control.errors) {
            if (this.control.errors.hasOwnProperty(propertyName) && (this.control.dirty || this.control.touched)
                && this.control.invalid) {
                return this.validationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
            }
        }
        return null;
    }
};
ValidationMessagesComponent.ctorParameters = () => [
    { type: _validation_messages_service__WEBPACK_IMPORTED_MODULE_2__.ValidationService }
];
ValidationMessagesComponent.propDecorators = {
    control: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
ValidationMessagesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: "validation-messages",
        template: _validation_messages_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_validation_messages_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ValidationMessagesComponent);



/***/ }),

/***/ 10208:
/*!************************************************************************************!*\
  !*** ./src/app/core/components/validation-messages/validation-messages.service.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationService": () => (/* binding */ ValidationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let ValidationService = class ValidationService {
    constructor() { }
    getValidatorErrorMessage(validatorName, validatorValue) {
        const config = {
            required: "This field is required",
            invalidCreditCard: "Is invalid card number",
            invalidAadharCard: "invalid aadhar  number",
            email: "Invalid email address",
            invalidEmailAddress: "Invalid email address",
            invalidMobile: "Invalid Mobile no",
            numericAllowed: "Only numeric values are allowed",
            invalidPassword: "Invalid password. Password must be at least 6 characters long, and contain a number.",
            minlength: `Minimum length ${validatorValue.requiredLength}`,
            maxlength: `Max length ${validatorValue.requiredLength}`,
            mustMatch: "Passwords must match",
            invalidDob: "User must be minimum 16 Years old.",
            invalidUrl: "Invalid URL",
            alphaNumericAllowed: "Only apha numeric input is allowed",
            alphaAllowed: "Please enter letters.",
            fromToDate: `To Date Should be Greater than From Date`,
            LessThanToday: `Date shouldn't be greater than today's`,
            GreaterThanToday: `Date should be greater than today's`,
        };
        return config[validatorName];
    }
    static creditCardValidator(control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { invalidCreditCard: true };
        }
    }
    aadharCardValidator(control) {
        if (control.value && control.value.match(/^\d{12}$/)) {
            return null;
        }
        else {
            return { invalidAadharCard: true };
        }
    }
    emailValidator(control) {
        // RFC 2822 compliant regex
        // tslint:disable-next-line:max-line-length
        if (control.value &&
            control.value.match(/[a-z0-9!#$%&"*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&"*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { invalidEmailAddress: true };
        }
    }
    mobileValidator(control) {
        // RFC 2822 compliant regex
        if (control.value && control.value.match(/^\d{10}$/)) {
            return null;
        }
        else {
            return { invalidMobile: true };
        }
    }
    alphaValidator(control) {
        if (control.value == null || control.value.match(/^[a-zA-Z\s]*/)) {
            return null;
        }
        else {
            return { alphaAllowed: true };
        }
    }
    static numberValidator(control) {
        if (control.value.length == 0 || control.value.match(/^[0-9]*$/)) {
            return null;
        }
        else {
            return { numericAllowed: true };
        }
    }
    static alpaNumValidator(control) {
        if (control.value.match(/^[a-zA-Z0-9]*$/)) {
            return null;
        }
        else {
            return { alphaNumericAllowed: true };
        }
    }
    static urlValidator(control) {
        const URL_REGEXP = /^(http?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|in|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
        if (control.value.match(URL_REGEXP)) {
            return null;
        }
        else {
            return { invalidUrl: true };
        }
    }
    MustMatch(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
    fromToDate(fromDateField, toDateField, errorName = "fromToDate") {
        return (formGroup) => {
            const fromDate = formGroup.controls[fromDateField];
            const toDate = formGroup.controls[toDateField];
            let from = null;
            let to = null;
            if (fromDate.value && fromDate.value.year && fromDate.value.month && fromDate.value.day) {
                from = new Date(`${fromDate.value.year}-${fromDate.value.month}-${fromDate.value.day}`);
            }
            if (toDate.value && toDate.value.year && toDate.value.month && toDate.value.day) {
                to = new Date(`${toDate.value.year}-${toDate.value.month}-${toDate.value.day}`);
            }
            if (fromDate !== null && toDate !== null && from && to && to.getTime() < from.getTime()) {
                toDate.setErrors({ fromToDate: true });
            }
            return null;
        };
    }
    LessThanToday(control) {
        let today = new Date();
        if (new Date(control.value) > today)
            return { LessThanToday: true };
        return null;
    }
    GreaterThanToday(control) {
        let today = new Date();
        if (new Date(control.value) <= today)
            return { GreaterThanToday: true };
        return null;
    }
};
ValidationService.ctorParameters = () => [];
ValidationService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], ValidationService);



/***/ }),

/***/ 40294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../directives */ 32897);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/index */ 1657);
/* harmony import */ var _guards_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/index */ 61423);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/index */ 70426);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ 98138);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 42777);
var CoreModule_1;













let CoreModule = CoreModule_1 = class CoreModule {
    static forRoot() {
        return {
            ngModule: CoreModule_1,
            providers: [
                _guards_index__WEBPACK_IMPORTED_MODULE_2__.AuthGuard,
                _services__WEBPACK_IMPORTED_MODULE_4__.UserService,
                _components_index__WEBPACK_IMPORTED_MODULE_1__.AlertService,
                _components_index__WEBPACK_IMPORTED_MODULE_1__.ValidationService,
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService,
                _services__WEBPACK_IMPORTED_MODULE_4__.ApiService,
                _services__WEBPACK_IMPORTED_MODULE_4__.StorageService,
                _helpers_index__WEBPACK_IMPORTED_MODULE_3__.JwtInterceptorProvider,
                _helpers_index__WEBPACK_IMPORTED_MODULE_3__.ErrorInterceptorProvider,
                _helpers_index__WEBPACK_IMPORTED_MODULE_3__.ApiPrefixInterceptorProvider,
            ],
        };
    }
};
CoreModule = CoreModule_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrModule.forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        ],
        declarations: [
            _components_index__WEBPACK_IMPORTED_MODULE_1__.AlertComponent,
            _components_index__WEBPACK_IMPORTED_MODULE_1__.ValidationMessagesComponent,
            _components_index__WEBPACK_IMPORTED_MODULE_1__.CustomPaginationComponent,
            _directives__WEBPACK_IMPORTED_MODULE_0__.DragDropDirective,
        ],
        exports: [
            _components_index__WEBPACK_IMPORTED_MODULE_1__.AlertComponent,
            _components_index__WEBPACK_IMPORTED_MODULE_1__.ValidationMessagesComponent,
            _components_index__WEBPACK_IMPORTED_MODULE_1__.CustomPaginationComponent,
            _directives__WEBPACK_IMPORTED_MODULE_0__.DragDropDirective,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule,
        ],
    })
], CoreModule);



/***/ }),

/***/ 27574:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 52816);



let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        if (typeof window !== "undefined") {
            if (localStorage.getItem("user")) {
                // logged in so return true
                return true;
            }
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], AuthGuard);



/***/ }),

/***/ 61423:
/*!**************************************!*\
  !*** ./src/app/core/guards/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* reexport safe */ _auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard)
/* harmony export */ });
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ 27574);



/***/ }),

/***/ 65852:
/*!********************************************************!*\
  !*** ./src/app/core/helpers/api-prefix.interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiPrefixInterceptor": () => (/* binding */ ApiPrefixInterceptor),
/* harmony export */   "ApiPrefixInterceptorProvider": () => (/* binding */ ApiPrefixInterceptorProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 82808);








/**
 * Prefixes all requests with `environment.serverUrl`.
 */
let ApiPrefixInterceptor = class ApiPrefixInterceptor {
    constructor(router, toast) {
        this.router = router;
        this.toast = toast;
    }
    intercept(request, next) {
        if (!request.url.includes('/assets/i18n/en.json') &&
            !request.url.includes('assets/streams.json') &&
            !request.url.includes('/apk')) {
            request = request.clone({
                url: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + request.url,
            });
        }
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((errorResponse) => {
            if (errorResponse instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpErrorResponse) {
                if (errorResponse.status == 401) {
                    this.router.navigate(['/login']);
                    this.toast.error('Unauthorized request');
                }
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => errorResponse.error);
        }));
    }
};
ApiPrefixInterceptor.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService }
];
ApiPrefixInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)()
], ApiPrefixInterceptor);

const ApiPrefixInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS,
    useClass: ApiPrefixInterceptor,
    multi: true,
};


/***/ }),

/***/ 44681:
/*!***************************************************!*\
  !*** ./src/app/core/helpers/error.interceptor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor),
/* harmony export */   "ErrorInterceptorProvider": () => (/* binding */ ErrorInterceptorProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ 98138);










let ErrorInterceptor = class ErrorInterceptor {
    constructor(storageService, toastService, router, spinner) {
        this.storageService = storageService;
        this.toastService = toastService;
        this.router = router;
        this.spinner = spinner;
    }
    intercept(request, next) {
        // extract error message from http body if an error occurs
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((errorResponse) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            this.spinner.hide();
            if (errorResponse instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpErrorResponse) {
                if (!navigator.onLine) {
                    // No Internet connection
                    this.toastService.warning('No Internet Connection');
                }
                switch (errorResponse.status) {
                    case 401: // login
                        // redirect to login page with the return url
                        this.router.events
                            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd))
                            .subscribe((event) => {
                            this.currentRoute = event['url'];
                        });
                        this.userDetails = this.storageService.get('User');
                        // this.router.navigate(['/login'], {
                        //   queryParams: { returnUrl: this.currentRoute },
                        // });
                        break;
                    case 400: // forbidden
                        // // show server bad request message
                        if ((_b = (_a = errorResponse.error) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.errors) {
                            for (let i = errorResponse.error.error.errors.length - 1; i >= 0; i--) {
                                this.toastService.error(errorResponse.error.error.errors[i]);
                            }
                        }
                        if ((_d = (_c = errorResponse.error) === null || _c === void 0 ? void 0 : _c.error) === null || _d === void 0 ? void 0 : _d.error_params) {
                            for (let i = errorResponse.error.error.error_params.length - 1; i >= 0; i--) {
                                this.toastService.error(errorResponse.error.error.error_params[i].msg);
                            }
                        }
                        break;
                    case 500: // Internal Server Error
                        // console.log(errorResponse.error);
                        // console.log(errorResponse.error.error.errors);
                        // console.log(errorResponse.error.error.error_params);
                        // this.toastService.error(errorResponse.error?.message);
                        if ((_f = (_e = errorResponse.error) === null || _e === void 0 ? void 0 : _e.error) === null || _f === void 0 ? void 0 : _f.errors) {
                            for (let i = errorResponse.error.error.errors.length - 1; i >= 0; i--) {
                                this.toastService.error(errorResponse.error.error.errors[i]);
                            }
                        }
                        if ((_h = (_g = errorResponse.error) === null || _g === void 0 ? void 0 : _g.error) === null || _h === void 0 ? void 0 : _h.error_params) {
                            for (let i = errorResponse.error.error.error_params.length - 1; i >= 0; i--) {
                                this.toastService.error(errorResponse.error.error.error_params[i].msg);
                            }
                        }
                        break;
                }
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(errorResponse.error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_0__.StorageService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService }
];
ErrorInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)()
], ErrorInterceptor);

const ErrorInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};


/***/ }),

/***/ 70426:
/*!***************************************!*\
  !*** ./src/app/core/helpers/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiPrefixInterceptor": () => (/* reexport safe */ _api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_2__.ApiPrefixInterceptor),
/* harmony export */   "ApiPrefixInterceptorProvider": () => (/* reexport safe */ _api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_2__.ApiPrefixInterceptorProvider),
/* harmony export */   "ErrorInterceptor": () => (/* reexport safe */ _error_interceptor__WEBPACK_IMPORTED_MODULE_0__.ErrorInterceptor),
/* harmony export */   "ErrorInterceptorProvider": () => (/* reexport safe */ _error_interceptor__WEBPACK_IMPORTED_MODULE_0__.ErrorInterceptorProvider),
/* harmony export */   "JwtInterceptor": () => (/* reexport safe */ _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__.JwtInterceptor),
/* harmony export */   "JwtInterceptorProvider": () => (/* reexport safe */ _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__.JwtInterceptorProvider)
/* harmony export */ });
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.interceptor */ 44681);
/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.interceptor */ 61943);
/* harmony import */ var _api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-prefix.interceptor */ 65852);





/***/ }),

/***/ 61943:
/*!*************************************************!*\
  !*** ./src/app/core/helpers/jwt.interceptor.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor),
/* harmony export */   "JwtInterceptorProvider": () => (/* binding */ JwtInterceptorProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



let JwtInterceptor = class JwtInterceptor {
    intercept(request, next) {
        // add authorization header with jwt token if available
        if (typeof window !== "undefined") {
            const user = JSON.parse(localStorage.getItem("user"));
            if (user && user.token) {
                request = request.clone({
                    setHeaders: {
                        authorization: `Bearer ${user.token}`,
                        'Access-Control-Allow-Origin': '*'
                    },
                });
            }
        }
        return next.handle(request);
    }
};
JwtInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], JwtInterceptor);

const JwtInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true,
};


/***/ }),

/***/ 81897:
/*!**************************************************!*\
  !*** ./src/app/core/services/httpApi.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 47418);





let ApiService = class ApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        // url:any=environment.apiEndpoint
        this.options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Content-Type', 'application/json'),
        };
    }
    getBaseUrl() {
        return `${location.protocol}//${location.hostname + (location.port ? ':' + location.port : '')}/`;
    }
    get(path, params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()) {
        return this.httpClient.get(path, { params }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleErrorObservable));
    }
    put(path, body = {}) {
        return this.httpClient.put(path, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleErrorObservable));
    }
    post(path, body = {}) {
        return this.httpClient.post(path, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleErrorObservable));
    }
    delete(path) {
        return this.httpClient.delete(path).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleErrorObservable));
    }
    getFile(path) {
        return this.httpClient.get(path, {
            responseType: 'blob',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().append('Content-Type', 'application/json'),
        });
    }
    handleErrorObservable(error) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root',
    })
], ApiService);



/***/ }),

/***/ 98138:
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* reexport safe */ _httpApi_service__WEBPACK_IMPORTED_MODULE_1__.ApiService),
/* harmony export */   "StorageService": () => (/* reexport safe */ _local_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService),
/* harmony export */   "UserService": () => (/* reexport safe */ _user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)
/* harmony export */ });
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.service */ 88386);
/* harmony import */ var _httpApi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./httpApi.service */ 81897);
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage.service */ 64617);

// export * from "./utility.service";




/***/ }),

/***/ 64617:
/*!********************************************************!*\
  !*** ./src/app/core/services/local-storage.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let StorageService = class StorageService {
    get(key) {
        return localStorage ? JSON.parse(localStorage.getItem(key)) : null;
    }
    set(key, value) {
        if (localStorage) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }
    remove(key) {
        localStorage ? localStorage.removeItem(key) : null;
    }
};
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], StorageService);



/***/ }),

/***/ 88386:
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);






let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + "/users").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((users) => {
            return users.data;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleErrorObservable));
    }
    getById(_id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + "/user/" + _id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((user) => {
            return user.data;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleErrorObservable));
    }
    getAllUsersByRoleCare(obj) {
        return this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + "/getAllUsersByRole/" + obj.page + "/" + obj.pageSize)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((user) => {
            return user;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleErrorObservable));
    }
    //  search user
    userSearch(searchString, role) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + "/userSearch/" + searchString + "/" + role).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => {
            return res;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleErrorObservable));
    }
    getOBUser() {
        if (localStorage.getItem("OBUser")) {
            const user = JSON.parse(localStorage.getItem("OBUser"));
            return user;
        }
    }
    create(user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + "/users", user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleErrorObservable));
    }
    update(user) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + "/user/" + user._id, user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((user) => {
            return user.data;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleErrorObservable));
    }
    changePassword(id, password, oldPassword) {
        return this.http
            .put(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + "/user/changepassword/" + id, { password: password, oldPassword: oldPassword })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleErrorObservable));
    }
    delete(_id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + "/user/" + _id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res.data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleErrorObservable));
    }
    resendMail(user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + "/resendMail", user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleErrorObservable));
    }
    verifyOtp(otp) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + "/verify/" + otp).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleErrorObservable));
    }
    handleErrorObservable(error) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()
], UserService);



/***/ }),

/***/ 95701:
/*!****************************************************!*\
  !*** ./src/app/directives/auto-focus.directive.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationAutoTabDirective": () => (/* binding */ VerificationAutoTabDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


let VerificationAutoTabDirective = class VerificationAutoTabDirective {
    constructor() { }
    onInput(input) {
        const length = input.value.length;
        const maxLength = input.attributes.maxlength.value;
        if (length >= maxLength && this.libAutoTab >= 0) {
            const field = document.getElementById(this.libAutoTab + 1);
            if (field) {
                field.focus();
            }
        }
        else {
            input.value = '';
        }
    }
};
VerificationAutoTabDirective.ctorParameters = () => [];
VerificationAutoTabDirective.propDecorators = {
    libAutoTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    onInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['input', ['$event.target'],] }]
};
VerificationAutoTabDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[libAutoTab]'
    })
], VerificationAutoTabDirective);



/***/ }),

/***/ 60118:
/*!***************************************************!*\
  !*** ./src/app/directives/drag-drop.directive.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragDropDirective": () => (/* binding */ DragDropDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


let DragDropDirective = class DragDropDirective {
    constructor() {
        this.onFileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.background = '#f5fcff';
        this.opacity = '1';
    }
    //Dragover listener
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#9ecbec';
        this.opacity = '0.8';
    }
    //Dragleave listener
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f5fcff';
        this.opacity = '1';
    }
    //Drop listener
    ondrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f5fcff';
        this.opacity = '1';
        let files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.onFileDropped.emit(files);
        }
    }
};
DragDropDirective.propDecorators = {
    onFileDropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    background: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['style.background-color',] }],
    opacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['style.opacity',] }],
    onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['dragover', ['$event'],] }],
    onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['dragleave', ['$event'],] }],
    ondrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['drop', ['$event'],] }]
};
DragDropDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[appDragDrop]'
    })
], DragDropDirective);



/***/ }),

/***/ 32897:
/*!*************************************!*\
  !*** ./src/app/directives/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragDropDirective": () => (/* reexport safe */ _drag_drop_directive__WEBPACK_IMPORTED_MODULE_0__.DragDropDirective),
/* harmony export */   "InputIntegerDirective": () => (/* reexport safe */ _inputInteger_directive__WEBPACK_IMPORTED_MODULE_2__.InputIntegerDirective),
/* harmony export */   "NgbdSortableHeader": () => (/* reexport safe */ _sortable_directive__WEBPACK_IMPORTED_MODULE_3__.NgbdSortableHeader),
/* harmony export */   "VerificationAutoTabDirective": () => (/* reexport safe */ _auto_focus_directive__WEBPACK_IMPORTED_MODULE_1__.VerificationAutoTabDirective)
/* harmony export */ });
/* harmony import */ var _drag_drop_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag-drop.directive */ 60118);
/* harmony import */ var _auto_focus_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auto-focus.directive */ 95701);
/* harmony import */ var _inputInteger_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inputInteger.directive */ 76996);
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sortable.directive */ 37576);






/***/ }),

/***/ 76996:
/*!******************************************************!*\
  !*** ./src/app/directives/inputInteger.directive.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputIntegerDirective": () => (/* binding */ InputIntegerDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


let InputIntegerDirective = class InputIntegerDirective {
    constructor() { }
    onInput(input) {
        if (input.value != parseInt(input.value, 10)) {
            input.value = input.value.replace(/[a-z,A-Z,&\/\\#,^!-@+()$~%.'":*?_<>{}-]*/g, '');
        }
    }
};
InputIntegerDirective.ctorParameters = () => [];
InputIntegerDirective.propDecorators = {
    onInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['input', ['$event.target'],] }]
};
InputIntegerDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[inputNumber]'
    })
], InputIntegerDirective);



/***/ }),

/***/ 37576:
/*!**************************************************!*\
  !*** ./src/app/directives/sortable.directive.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgbdSortableHeader": () => (/* binding */ NgbdSortableHeader)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


const rotate = {
    asc: 'desc',
    desc: '',
    '': 'asc',
};
let NgbdSortableHeader = class NgbdSortableHeader {
    constructor() {
        this.sortable = '';
        this.direction = '';
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    rotate() {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.sortable, direction: this.direction });
    }
};
NgbdSortableHeader.propDecorators = {
    sortable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
NgbdSortableHeader = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: 'th[sortable]',
        host: {
            '[class.asc]': 'direction === "asc"',
            '[class.desc]': 'direction === "desc"',
            '(click)': 'rotate()',
        },
    })
], NgbdSortableHeader);



/***/ }),

/***/ 77286:
/*!**************************************************************!*\
  !*** ./src/app/modal/delete-alert/delete-alert.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteAlertComponent": () => (/* binding */ DeleteAlertComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _delete_alert_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-alert.component.html?ngResource */ 6662);
/* harmony import */ var _delete_alert_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-alert.component.scss?ngResource */ 62585);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);





let DeleteAlertComponent = class DeleteAlertComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    ngOnInit() { }
};
DeleteAlertComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal }
];
DeleteAlertComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
DeleteAlertComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-delete-alert',
        template: _delete_alert_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_delete_alert_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DeleteAlertComponent);



/***/ }),

/***/ 51228:
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services */ 98138);





let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.routes = {
            sign_in: 'user/signUp',
            register: 'user/register',
            login: 'user/login',
            forget_password: 'user/forget-password',
            reset_password: 'user/reset-password',
            set_password: 'user/set-password',
        };
    }
    createUser(userPayload) {
        return this.http.post(this.routes.register, userPayload);
    }
    signInUser(userPayload) {
        return this.http.post(this.routes.sign_in, userPayload);
    }
    login(loginPayload) {
        return this.http
            .post(this.routes.login, loginPayload)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res));
    }
    get isLoggedIn() {
        const user = JSON.parse(localStorage.getItem('user'));
        return user !== null;
    }
    logout() {
        // remove user from local storage to log user out
        if (typeof window !== 'undefined') {
            localStorage.clear();
            this.router.navigateByUrl('login');
        }
    }
    forgetPassword(payload) {
        return this.http
            .post(this.routes.forget_password, payload)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res));
    }
    resetPass(payload) {
        return this.http
            .post(this.routes.reset_password, payload)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res));
    }
    setPass(payload) {
        return this.http
            .post(this.routes.set_password, payload)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res));
    }
};
AuthService.ctorParameters = () => [
    { type: src_app_core_services__WEBPACK_IMPORTED_MODULE_0__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ 82347:
/*!********************************************************!*\
  !*** ./src/app/views/changepwd/changepwd.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangepwdComponent": () => (/* binding */ ChangepwdComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _changepwd_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changepwd.component.html?ngResource */ 31271);
/* harmony import */ var _changepwd_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changepwd.component.scss?ngResource */ 72281);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/components */ 1657);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/auth.service */ 51228);










let ChangepwdComponent = class ChangepwdComponent {
    constructor(activatedRoute, validationService, formBuilder, authService, toastr, router, spinner) {
        this.activatedRoute = activatedRoute;
        this.validationService = validationService;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.toastr = toastr;
        this.router = router;
        this.spinner = spinner;
        this.message = "Please enter valid Password";
        this.Show = "password";
        this.show = "password";
        this.visible = "password";
        this.submitted = false;
        this.changePassword = false;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            if (params.sub && params.pin && params.role) {
                this.changePassword = true;
                this.user = params;
            }
        });
        this.changePwdForm();
        this.setPwdForm();
    }
    get f() {
        return this.changePasswordForm.controls;
    }
    get fs() {
        return this.setPasswordForm.controls;
    }
    toggleFieldTextType() {
        this.fieldTextType = !this.fieldTextType;
    }
    changePwdForm() {
        this.changePasswordForm = this.formBuilder.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                // Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,25})$"),
            ]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                // Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,25})$"),
            ]),
        }, {
            validator: this.validationService.MustMatch("newPassword", "confirmPassword"),
        });
    }
    setPwdForm() {
        this.setPasswordForm = this.formBuilder.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            resetPin: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                // Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,25})$"),
            ]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
        }, {
            validator: this.validationService.MustMatch("password", "confirmPassword"),
        });
    }
    password_show() {
        this.Show = "text";
    }
    password_hide() {
        this.Show = "password";
    }
    password_display() {
        this.show = "text";
    }
    password_hiden() {
        this.show = "password";
    }
    password_visible() {
        this.visible = "text";
    }
    password_disable() {
        this.visible = "password";
    }
    changePass() {
        this.changePasswordForm.controls.id.setValue(this.user.id);
        this.changePasswordForm.controls.email.setValue(this.user.email);
        this.submitted = true;
        if (this.changePasswordForm.invalid) {
            this.toastr.info("Please enter all required field !");
            return;
        }
        this.spinner.show();
        this.authService.resetPass(this.changePasswordForm.value).subscribe((success) => {
            this.toastr.success("User password-change successfully");
            this.submitted = false;
            this.spinner.hide();
            this.router.navigate(["./auth/home"]);
        });
    }
    setPass() {
        this.setPasswordForm.controls.id.setValue(this.user.sub);
        this.setPasswordForm.controls.resetPin.setValue(parseInt(this.user.pin));
        this.submitted = true;
        if (this.setPasswordForm.invalid) {
            this.toastr.info("Please enter all required field !");
            return;
        }
        this.spinner.show();
        this.authService.setPass(this.setPasswordForm.value).subscribe((success) => {
            this.toastr.success(success.result.message);
            this.submitted = false;
            this.spinner.hide();
            if (this.user.role == "SUPER_ADMIN" || "ADMIN") {
                this.router.navigate(["/login"]);
            }
            if (this.user.role == "collegeDetails") {
                this.router.navigate(["/college-login"]);
            }
            if (this.user.role == "company") {
                this.router.navigate(["/company-login"]);
            }
        });
    }
};
ChangepwdComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _core_components__WEBPACK_IMPORTED_MODULE_2__.ValidationService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService }
];
ChangepwdComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: "app-changepwd",
        template: _changepwd_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_changepwd_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChangepwdComponent);



/***/ }),

/***/ 26943:
/*!**********************************************!*\
  !*** ./src/app/views/error/404.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P404Component": () => (/* binding */ P404Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _404_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./404.component.html?ngResource */ 57162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



let P404Component = class P404Component {
    constructor() { }
};
P404Component.ctorParameters = () => [];
P404Component = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        template: _404_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], P404Component);



/***/ }),

/***/ 98743:
/*!**********************************************!*\
  !*** ./src/app/views/error/500.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P500Component": () => (/* binding */ P500Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _500_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./500.component.html?ngResource */ 71682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



let P500Component = class P500Component {
    constructor() { }
};
P500Component.ctorParameters = () => [];
P500Component = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        template: _500_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], P500Component);



/***/ }),

/***/ 1537:
/*!**********************************************************!*\
  !*** ./src/app/views/forgotpass/forgotpass.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpassComponent": () => (/* binding */ ForgotpassComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _forgotpass_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotpass.component.html?ngResource */ 99715);
/* harmony import */ var _forgotpass_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotpass.component.scss?ngResource */ 82204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ 51228);








let ForgotpassComponent = class ForgotpassComponent {
    constructor(router, toastService, auth) {
        this.router = router;
        this.toastService = toastService;
        this.auth = auth;
        this.forgetPasswordFrom = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            EMAIL: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email])
        });
    }
    ngOnInit() {
    }
    sendMail() {
        let obj = {
            email: this.forgetPasswordFrom.value.EMAIL,
        };
        console.log("obj------>", obj);
        this.auth.forgetPassword(obj).subscribe(success => {
            this.router.navigate(["/login"]);
            this.toastService.success("Please check your email to reset password");
        });
    }
};
ForgotpassComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
ForgotpassComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-forgotpass',
        template: _forgotpass_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forgotpass_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgotpassComponent);



/***/ }),

/***/ 93:
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.html?ngResource */ 50514);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss?ngResource */ 34176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ 51228);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/components */ 1657);










let LoginComponent = class LoginComponent {
    constructor(formBuilder, route, router, spinner, toastService, validationService, authService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.spinner = spinner;
        this.toastService = toastService;
        this.validationService = validationService;
        this.authService = authService;
        this.loading = false;
        this.myInterval = 6000;
        this.slides = [];
        this.activeSlideIndex = 0;
        this.noWrapSlides = false;
        this.imageArr = [];
    }
    ngOnInit() {
        this.createForm();
        localStorage.removeItem('user');
        // get return url from route parameters or default to "/"
        this.returnUrl =
            this.route.snapshot.queryParams[`returnUrl`] || '/dashboard';
    }
    toggleFieldTextType() {
        this.fieldTextType = !this.fieldTextType;
    }
    createForm() {
        this.loginForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
    }
    login() {
        this.spinner.show();
        this.authService.login(this.loginForm.value).subscribe((success) => {
            console.log('success 12', success);
            if (typeof window !== 'undefined') {
                localStorage.setItem('user', JSON.stringify(success.result));
            }
            this.toastService.success('Login done Successfully!');
            this.router.navigate(['./dashboard']);
            this.spinner.hide();
        }, (error) => {
            // console.log(error);
            this.spinner.hide();
            this.toastService.error();
        });
    }
    ngOnDestroy() {
        this.myInterval = 0;
        this.noWrapSlides = true;
        this.myInterval = 0;
    }
    addSlide() {
        setTimeout(() => {
            const seed = Math.random().toString(36).slice(-6);
            this.slides.push({
                image: `https://picsum.photos/seed/${seed}/900/500`,
            });
        }, 500);
    }
    removeSlide(index) {
        const toRemove = index ? index : this.activeSlideIndex;
        this.slides.splice(toRemove, 1);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService },
    { type: _core_components__WEBPACK_IMPORTED_MODULE_3__.ValidationService },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-dashboard',
        template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginComponent);



/***/ }),

/***/ 60193:
/*!******************************************************!*\
  !*** ./src/app/views/register/register.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component.html?ngResource */ 13956);
/* harmony import */ var _register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.scss?ngResource */ 78401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/components */ 1657);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/auth.service */ 51228);










let RegisterComponent = class RegisterComponent {
    constructor(router, spinner, authService, formBuilder, validationService, toastService) {
        this.router = router;
        this.spinner = spinner;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.validationService = validationService;
        this.toastService = toastService;
        this.submitted = false;
        this.registerForm = this.formBuilder.group({
            // userName: new FormControl("userName", [Validators.required]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("firstName", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("lastName", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("test@gmail.com", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, this.validationService.emailValidator]),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("9090909090", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, this.validationService.mobileValidator]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("customer@123", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("customer@123", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("CUSTOMER", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
        }, {
            validator: this.validationService.MustMatch("password", "confirmPassword"),
        });
    }
    navigateTo(page) {
        this.router.navigate([`${page}`]);
    }
    register() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        else {
            this.spinner.show();
            this.authService.createUser(this.registerForm.value).subscribe(success => {
                this.toastService.success("Registration done Successfully");
                this.router.navigate(["/login"]);
                this.spinner.hide();
            });
        }
    }
    signIn() {
        this.submitted = true;
        console.log('sign in begain---------->');
        console.log('registerForm Start------->', this.registerForm.value);
        if (this.registerForm.invalid) {
            console.log("error----------->");
            console.log('registerForm------->', this.registerForm.value);
            return;
        }
        else {
            console.log("else start---->");
            this.spinner.show();
            console.log("spinner---->");
            this.authService.signInUser(this.registerForm.value).subscribe(success => {
                this.toastService.success("Registration done Successfully");
                this.router.navigate(["/login"]);
                this.spinner.hide();
            });
        }
        console.log('success------->', this.registerForm.value);
    }
    get form() {
        return this.registerForm.controls;
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerService },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _core_components__WEBPACK_IMPORTED_MODULE_2__.ValidationService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService }
];
RegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: "app-dashboard",
        template: _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterComponent);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: true,
    apiEndpoint: 'http://109.106.255.69:1988/api/v1/admin/',
    QrCodeUrl: "http://109.106.255.69:1989/#/",
    // apiEndpoint: './api/v1/admin/',
    //  QrCodeUrl:" http://localhost:2024"
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 68150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, {
    useJit: true,
    preserveWhitespaces: true
})
    .catch(err => console.log(err));


/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 58685,
	"./af.js": 58685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 32614,
	"./ar-kw.js": 32614,
	"./ar-ly": 18630,
	"./ar-ly.js": 18630,
	"./ar-ma": 28674,
	"./ar-ma.js": 28674,
	"./ar-ps": 46235,
	"./ar-ps.js": 46235,
	"./ar-sa": 49032,
	"./ar-sa.js": 49032,
	"./ar-tn": 24730,
	"./ar-tn.js": 24730,
	"./ar.js": 254,
	"./az": 53052,
	"./az.js": 53052,
	"./be": 60150,
	"./be.js": 60150,
	"./bg": 63069,
	"./bg.js": 63069,
	"./bm": 13466,
	"./bm.js": 13466,
	"./bn": 18516,
	"./bn-bd": 90557,
	"./bn-bd.js": 90557,
	"./bn.js": 18516,
	"./bo": 26273,
	"./bo.js": 26273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 19815,
	"./bs.js": 19815,
	"./ca": 83331,
	"./ca.js": 83331,
	"./cs": 21320,
	"./cs.js": 21320,
	"./cv": 72219,
	"./cv.js": 72219,
	"./cy": 68266,
	"./cy.js": 68266,
	"./da": 66427,
	"./da.js": 66427,
	"./de": 67435,
	"./de-at": 52871,
	"./de-at.js": 52871,
	"./de-ch": 12994,
	"./de-ch.js": 12994,
	"./de.js": 67435,
	"./dv": 82357,
	"./dv.js": 82357,
	"./el": 95649,
	"./el.js": 95649,
	"./en-au": 59961,
	"./en-au.js": 59961,
	"./en-ca": 19878,
	"./en-ca.js": 19878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 70864,
	"./en-ie.js": 70864,
	"./en-il": 91579,
	"./en-il.js": 91579,
	"./en-in": 30940,
	"./en-in.js": 30940,
	"./en-nz": 16181,
	"./en-nz.js": 16181,
	"./en-sg": 44301,
	"./en-sg.js": 44301,
	"./eo": 85291,
	"./eo.js": 85291,
	"./es": 54529,
	"./es-do": 53764,
	"./es-do.js": 53764,
	"./es-mx": 12584,
	"./es-mx.js": 12584,
	"./es-us": 63425,
	"./es-us.js": 63425,
	"./es.js": 54529,
	"./et": 35203,
	"./et.js": 35203,
	"./eu": 70678,
	"./eu.js": 70678,
	"./fa": 83483,
	"./fa.js": 83483,
	"./fi": 96262,
	"./fi.js": 96262,
	"./fil": 52521,
	"./fil.js": 52521,
	"./fo": 34555,
	"./fo.js": 34555,
	"./fr": 63131,
	"./fr-ca": 88239,
	"./fr-ca.js": 88239,
	"./fr-ch": 21702,
	"./fr-ch.js": 21702,
	"./fr.js": 63131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 23821,
	"./ga.js": 23821,
	"./gd": 71753,
	"./gd.js": 71753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 92762,
	"./gom-deva.js": 92762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 82809,
	"./gu.js": 82809,
	"./he": 45402,
	"./he.js": 45402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 10410,
	"./hr.js": 10410,
	"./hu": 38288,
	"./hu.js": 38288,
	"./hy-am": 67928,
	"./hy-am.js": 67928,
	"./id": 71334,
	"./id.js": 71334,
	"./is": 86959,
	"./is.js": 86959,
	"./it": 34864,
	"./it-ch": 51124,
	"./it-ch.js": 51124,
	"./it.js": 34864,
	"./ja": 36141,
	"./ja.js": 36141,
	"./jv": 29187,
	"./jv.js": 29187,
	"./ka": 42136,
	"./ka.js": 42136,
	"./kk": 94332,
	"./kk.js": 94332,
	"./km": 18607,
	"./km.js": 18607,
	"./kn": 84305,
	"./kn.js": 84305,
	"./ko": 70234,
	"./ko.js": 70234,
	"./ku": 16003,
	"./ku-kmr": 19619,
	"./ku-kmr.js": 19619,
	"./ku.js": 16003,
	"./ky": 75061,
	"./ky.js": 75061,
	"./lb": 32786,
	"./lb.js": 32786,
	"./lo": 66183,
	"./lo.js": 66183,
	"./lt": 50029,
	"./lt.js": 50029,
	"./lv": 24169,
	"./lv.js": 24169,
	"./me": 68577,
	"./me.js": 68577,
	"./mi": 68177,
	"./mi.js": 68177,
	"./mk": 50337,
	"./mk.js": 50337,
	"./ml": 65260,
	"./ml.js": 65260,
	"./mn": 52325,
	"./mn.js": 52325,
	"./mr": 14695,
	"./mr.js": 14695,
	"./ms": 75334,
	"./ms-my": 37151,
	"./ms-my.js": 37151,
	"./ms.js": 75334,
	"./mt": 63570,
	"./mt.js": 63570,
	"./my": 97963,
	"./my.js": 97963,
	"./nb": 88028,
	"./nb.js": 88028,
	"./ne": 86638,
	"./ne.js": 86638,
	"./nl": 50302,
	"./nl-be": 66782,
	"./nl-be.js": 66782,
	"./nl.js": 50302,
	"./nn": 33501,
	"./nn.js": 33501,
	"./oc-lnc": 50563,
	"./oc-lnc.js": 50563,
	"./pa-in": 50869,
	"./pa-in.js": 50869,
	"./pl": 65302,
	"./pl.js": 65302,
	"./pt": 49687,
	"./pt-br": 74884,
	"./pt-br.js": 74884,
	"./pt.js": 49687,
	"./ro": 79107,
	"./ro.js": 79107,
	"./ru": 33627,
	"./ru.js": 33627,
	"./sd": 30355,
	"./sd.js": 30355,
	"./se": 83427,
	"./se.js": 83427,
	"./si": 11848,
	"./si.js": 11848,
	"./sk": 54590,
	"./sk.js": 54590,
	"./sl": 20184,
	"./sl.js": 20184,
	"./sq": 56361,
	"./sq.js": 56361,
	"./sr": 78965,
	"./sr-cyrl": 81287,
	"./sr-cyrl.js": 81287,
	"./sr.js": 78965,
	"./ss": 25456,
	"./ss.js": 25456,
	"./sv": 70451,
	"./sv.js": 70451,
	"./sw": 77558,
	"./sw.js": 77558,
	"./ta": 51356,
	"./ta.js": 51356,
	"./te": 73693,
	"./te.js": 73693,
	"./tet": 21243,
	"./tet.js": 21243,
	"./tg": 82469,
	"./tg.js": 82469,
	"./th": 55768,
	"./th.js": 55768,
	"./tk": 77761,
	"./tk.js": 77761,
	"./tl-ph": 35780,
	"./tl-ph.js": 35780,
	"./tlh": 29590,
	"./tlh.js": 29590,
	"./tr": 33807,
	"./tr.js": 33807,
	"./tzl": 93857,
	"./tzl.js": 93857,
	"./tzm": 60654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 60654,
	"./ug-cn": 30845,
	"./ug-cn.js": 30845,
	"./uk": 19232,
	"./uk.js": 19232,
	"./ur": 47052,
	"./ur.js": 47052,
	"./uz": 77967,
	"./uz-latn": 32233,
	"./uz-latn.js": 32233,
	"./uz.js": 77967,
	"./vi": 98615,
	"./vi.js": 98615,
	"./x-pseudo": 12320,
	"./x-pseudo.js": 12320,
	"./yo": 31313,
	"./yo.js": 31313,
	"./zh-cn": 64490,
	"./zh-cn.js": 64490,
	"./zh-hk": 55910,
	"./zh-hk.js": 55910,
	"./zh-mo": 98262,
	"./zh-mo.js": 98262,
	"./zh-tw": 44223,
	"./zh-tw.js": 44223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 47048:
/*!***********************************************************************************************!*\
  !*** ./src/app/core/components/custom-pagination/custom-pagination.component.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b20tcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 6629:
/*!***************************************************************************************************!*\
  !*** ./src/app/core/components/validation-messages/validation-messages.component.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".alert-danger {\n  color: red;\n  background-color: transparent;\n  border-color: transparent;\n}\n\ninput.ng-invalid.ng-touched {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRpb24tbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUNBO0VBQ0UscUJBQUE7QUFFRiIsImZpbGUiOiJ2YWxpZGF0aW9uLW1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0LWRhbmdlciB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 62585:
/*!***************************************************************************!*\
  !*** ./src/app/modal/delete-alert/delete-alert.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtYWxlcnQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 72281:
/*!*********************************************************************!*\
  !*** ./src/app/views/changepwd/changepwd.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".posi {\n  position: absolute;\n  max-width: 100%;\n  padding: 0 15px;\n}\n\n.mt-custom {\n  margin-top: 7.5rem;\n}\n\n.slider-cusotm img {\n  height: 100vh;\n}\n\n.border-lgin {\n  border-right: 2px solid #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZXB3ZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFWSjs7QUFZQTtFQUNJLGtCQUFBO0FBVEo7O0FBV0E7RUFDSSxhQUFBO0FBUko7O0FBVUE7RUFDSSw0QkFBQTtBQVBKIiwiZmlsZSI6ImNoYW5nZXB3ZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5tLXRvcC1jdXN0b217XHJcbi8vICAgICBtYXJnaW4tdG9wOiA2cmVtO1xyXG4vLyB9XHJcbi8vIC5tLWJvdHRvbS1jdXN0b217XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4vLyB9XHJcbi8vIC5oLTEwMC1jdXN0b20tMntcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IzE0MTc0NiA7XHJcbi8vICAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuLy8gfVxyXG5cclxuLnBvc2l7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbn1cclxuLm10LWN1c3RvbXtcclxuICAgIG1hcmdpbi10b3A6IDcuNXJlbTtcclxufVxyXG4uc2xpZGVyLWN1c290bSBpbWd7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5ib3JkZXItbGdpbntcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNkZGQ7XHJcbn0iXX0= */";

/***/ }),

/***/ 82204:
/*!***********************************************************************!*\
  !*** ./src/app/views/forgotpass/forgotpass.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".m-top-custom {\n  margin-top: 3rem;\n}\n\n.fieldError {\n  color: red;\n}\n\n.mt-custom {\n  margin-top: 7rem;\n}\n\n.border-lgin {\n  border-right: 2px solid #ddd;\n}\n\ninput[type=email],\nselect.form-control {\n  background: transparent;\n  border: none;\n  border-bottom: 1px solid #3b9ef3;\n  box-shadow: none;\n  border-radius: 0;\n}\n\ninput[type=email]:focus,\nselect.form-control:focus {\n  box-shadow: none;\n}\n\n.bg {\n  height: 100vh !important;\n  background-image: url('bg1.52c6a068e900af4e.jpg');\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdHBhc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksVUFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7QUFHSjs7QUFEQTtFQUNJLDRCQUFBO0FBSUo7O0FBREE7O0VBRUUsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBREE7O0VBR0UsZ0JBQUE7QUFJRjs7QUFEQTtFQUNJLHdCQUFBO0VBQ0EsaURBQUE7RUFDQSxzQkFBQTtBQUlKIiwiZmlsZSI6ImZvcmdvdHBhc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubS10b3AtY3VzdG9te1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxufVxyXG4uZmllbGRFcnJvcntcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuLm10LWN1c3RvbXtcclxuICAgIG1hcmdpbi10b3A6IDdyZW07XHJcbn1cclxuLmJvcmRlci1sZ2lue1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2RkZDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG5zZWxlY3QuZm9ybS1jb250cm9sIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzYjllZjM7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxyXG5zZWxlY3QuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmJne1xyXG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcxLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxufVxyXG5cclxuIl19 */";

/***/ }),

/***/ 34176:
/*!*************************************************************!*\
  !*** ./src/app/views/login/login.component.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".meta {\n  height: 100vh !important;\n  background-image: url('bg1.52c6a068e900af4e.jpg');\n  background-size: cover;\n}\n\n.custom {\n  margin-top: 8rem;\n}\n\n.login {\n  border: 0;\n}\n\n.line {\n  line-height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSxpREFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXRhIHtcclxuICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2JnMS5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmN1c3RvbSB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cmVtO1xyXG59XHJcblxyXG4ubG9naW4ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4ubGluZSB7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxufSJdfQ== */";

/***/ }),

/***/ 78401:
/*!*******************************************************************!*\
  !*** ./src/app/views/register/register.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".mt-custom {\n  margin-top: 9rem;\n  background: rgba(255, 255, 255, 0.9);\n}\n\n.sign-in {\n  position: absolute;\n  right: 15px;\n  z-index: 9;\n  top: 75px;\n}\n\n.border-lgin {\n  border-right: 2px solid #ddd;\n}\n\n.error-left {\n  position: relative;\n  left: 42px;\n}\n\n.bg-color {\n  background-image: url('8.52c6a068e900af4e.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CQTtFQUNJLGdCQUFBO0VBQ0Esb0NBQUE7QUFsQko7O0FBcUJBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFsQko7O0FBcUJBO0VBQ0ksNEJBQUE7QUFsQko7O0FBcUJBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBbEJKOztBQXFCQTtFQUdDLCtDQUFBO0VBQ0QsNEJBQUE7RUFDQSxzQkFBQTtBQXBCQSIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5jYXJkLXRleHQge1xyXG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuLy8gICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbi8vICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4vLyAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xyXG4vLyAgICAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcclxuLy8gICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuLy8gICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbi8vIH1cclxuXHJcbi5tdC1jdXN0b20ge1xyXG4gICAgbWFyZ2luLXRvcDogOXJlbTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MClcclxufVxyXG5cclxuLnNpZ24taW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgdG9wOiA3NXB4O1xyXG59XHJcblxyXG4uYm9yZGVyLWxnaW4ge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2RkZDtcclxufVxyXG5cclxuLmVycm9yLWxlZnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNDJweDtcclxufVxyXG5cclxuLmJnLWNvbG9yIHtcclxuXHJcblxyXG4gYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nLzguanBnJyk7ICAgXHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG59XHJcblxyXG4vLyAub3B7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiByZ2IoNyw3LDExMSk7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNyw3LDExMSwxKSAwJSwgcmdiYSgyMDgsMjA1LDIyOCwxKSAxMDAlLCByZ2JhKDM5LDI0Nyw5OCwxKSAxMDAlLCByZ2JhKDE1OCwxOCwyNDYsMSkgMTAwJSwgcmdiYSg3LDEyMSwxNDQsMSkgMTAwJSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gLmJnLWNvbG9yXHJcblxyXG4vLyB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiByZ2IoNzcsNzgsMTU5KTtcclxuLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDc3LDc4LDE1OSwxKSAwJSwgcmdiYSgyNDAsNzQsMjQ5LDEpIDAlLCByZ2JhKDExMCw3NywxNzcsMSkgNzAlKTtcclxuLy8gfVxyXG4vLyAuYmctY29sb3Ixe1xyXG4vLyAgICAgYmFja2dyb3VuZDogcmdiKDIzOCwxMjksMjUxKTtcclxuLy8gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyMzgsMTI5LDI1MSwxKSAyMiUsIHJnYmEoMjM5LDE2OSwyNDcsMSkgNzMlLCByZ2JhKDI0NiwyMTYsMjQ2LDEpIDEwMCUpO1xyXG4vLyB9XHJcblxyXG4vLyAuYmctY29sb3J7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE1OEQwO1xyXG4vLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCNkZjU3YWQgMCUsIzg0NGRjYyAxMDAlKTtcclxuXHJcbi8vIH1cclxuIl19 */";

/***/ }),

/***/ 8752:
/*!************************************************************************************!*\
  !*** ./src/app/containers/default-layout/default-layout.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header\r\n  [navbarBrandRouterLink]=\"['/dashboard']\"\r\n  [fixed]=\"true\"\r\n  [navbarBrandFull]=\"{\r\n    src: '../../../assets/pdfImg/logo.jpeg',\r\n    width: 30,\r\n    height: 30,\r\n    class: 'nav-logo mr-2',\r\n    alt: 'User Logo'\r\n  }\"\r\n  [navbarBrandMinimized]=\"{\r\n    src: '../../../assets/pdfImg/logo.jpeg',\r\n    width: 10,\r\n    height: 10,\r\n    alt: 'User Logo'\r\n  }\"\r\n  [asideMenuToggler]=\"false\"\r\n  sidebarToggler=\"lg\"\r\n  [mobileAsideMenuToggler]=\"false\"\r\n>\r\n  <!-- src: '../../../assets/hlogo.png', -->\r\n  <ul class=\"nav navbar-nav d-md-down-none\">\r\n    <li class=\"nav-item px-3\">\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n    </li>\r\n  </ul>\r\n\r\n  <ul class=\"nav navbar-nav ms-auto\">\r\n    <span\r\n      class=\"text-muted mt-3\"\r\n      *ngIf=\"userDetails.role == 'SUPER_ADMIN' || userDetails.role == 'ADMIN'\"\r\n      >{{ userDetails.userName | titlecase }}\r\n      <p style=\"font-size: 10px; color: #ebb105\">( {{ userDetails.role }} )</p>\r\n    </span>\r\n    <span class=\"text-muted mt-3\" *ngIf=\"userDetails.role == 'COMPANY'\"\r\n      >{{ userDetails.name | titlecase }}\r\n      <p style=\"font-size: 10px; color: #ebb105\">( {{ userDetails.role }} )</p>\r\n    </span>\r\n    <span class=\"text-muted mt-3\" *ngIf=\"userDetails.role === 'COLLEGE'\"\r\n      >{{ userDetails.collegeName | titlecase }}\r\n      <p style=\"font-size: 10px; color: #ebb105\">( {{ userDetails.role }} )</p>\r\n    </span>\r\n    <li class=\"nav-item dropdown\" dropdown placement=\"bottom right\">\r\n      <a\r\n        class=\"nav-link\"\r\n        data-toggle=\"dropdown\"\r\n        href=\"#\"\r\n        role=\"button\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"false\"\r\n        dropdownToggle\r\n        (click)=\"(false)\"\r\n      >\r\n        <img\r\n          src=\"assets/img/user.png\"\r\n          style=\"width: 35px; height: 35px\"\r\n          class=\"img-avatar mb-1\"\r\n          alt=\"admin@bootstrapmaster.com\"\r\n        />\r\n      </a>\r\n      <div\r\n        class=\"dropdown-menu dropdown-menu-right\"\r\n        *dropdownMenu\r\n        aria-labelledby=\"simple-dropdown\"\r\n      >\r\n        <div class=\"dropdown-header text-center\">\r\n          <strong>Info</strong>\r\n        </div>\r\n        <a class=\"dropdown-item\" (click)=\"viewProfile()\">\r\n          <i class=\"fa fa-user\"></i> Profile\r\n        </a>\r\n        <a\r\n          class=\"dropdown-item\"\r\n          (click)=\"logout()\"\r\n          *ngIf=\"\r\n            userDetails.role == 'ADMIN' ||\r\n            userDetails.role == 'SUPER_ADMIN' ||\r\n            userDetails.role == 'CUSTOMER'\r\n          \"\r\n        >\r\n          <i class=\"fa fa-lock\"></i> Logout\r\n        </a>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</app-header>\r\n<div class=\"app-body\">\r\n  <app-sidebar\r\n    #appSidebar\r\n    [fixed]=\"true\"\r\n    [display]=\"'lg'\"\r\n    [minimized]=\"sidebarMinimized\"\r\n    (minimizedChange)=\"toggleMinimize($event)\"\r\n  >\r\n    <app-sidebar-nav\r\n      [navItems]=\"navItems\"\r\n      [perfectScrollbar]\r\n      [disabled]=\"appSidebar.minimized\"\r\n    >\r\n    </app-sidebar-nav>\r\n    <app-sidebar-minimizer></app-sidebar-minimizer>\r\n  </app-sidebar>\r\n  <main class=\"main p-4\">\r\n    <cui-breadcrumb> </cui-breadcrumb>\r\n    <div class=\"container-fluid px-0\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </main>\r\n</div>\r\n<app-footer>\r\n  <span><a href=\"https://s2pedutech.com/\">User</a> &copy; 2022</span>\r\n</app-footer>\r\n\r\n<!-- <ngx-spinner\r\n  bdColor=\"rgba(0, 0, 0, 0.8)\"\r\n  size=\"large\"\r\n  color=\"var(--primary)\"\r\n  type=\"timer\"\r\n  [fullScreen]=\"true\"\r\n>\r\n  <p style=\"color: var(--primary)\">Loading...</p>\r\n</ngx-spinner> -->\r\n\r\n<ngx-spinner\r\n  bdColor=\"rgba(0, 0, 0, 0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  type=\"square-jelly-box\"\r\n  [fullScreen]=\"true\"\r\n>\r\n  <p style=\"color: white\">Loading...</p>\r\n</ngx-spinner>\r\n";

/***/ }),

/***/ 15353:
/*!*****************************************************************************************!*\
  !*** ./src/app/core/components/alert-messages/alert-messages.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div\r\n  *ngIf=\"message\"\r\n  [ngClass]=\"{\r\n    alert: message,\r\n    'alert-success': message.type === 'success',\r\n    'alert-danger': message.type === 'error'\r\n  }\"\r\n>\r\n  {{ message.text }}\r\n</div>\r\n";

/***/ }),

/***/ 67806:
/*!***********************************************************************************************!*\
  !*** ./src/app/core/components/custom-pagination/custom-pagination.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div\r\n  class=\"row justify-content-between align-items-center pt-2 pagination-sm m-0\"\r\n>\r\n  <div class=\"col-md-auto\">\r\n    <ngb-pagination\r\n      [collectionSize]=\"collection\"\r\n      [(page)]=\"page\"\r\n      [pageSize]=\"pageSize\"\r\n      [maxSize]=\"5\"\r\n      [rotate]=\"true\"\r\n      [boundaryLinks]=\"true\"\r\n      (pageChange)=\"onChangePage(page)\"\r\n    >\r\n      <ng-template ngbPaginationFirst> << </ng-template>\r\n      <ng-template ngbPaginationLast> >> </ng-template>\r\n      <ng-template ngbPaginationPrevious> < </ng-template>\r\n      <ng-template ngbPaginationNext> > </ng-template>\r\n      <ng-template ngbPaginationEllipsis> ... </ng-template>\r\n      <ng-template ngbPaginationNumber class=\"custompage\" let-page>\r\n        {{ page }}\r\n      </ng-template>\r\n    </ngb-pagination>\r\n  </div>\r\n  <div class=\"col-md-auto\">\r\n    <select\r\n      class=\"custom-select\"\r\n      [(ngModel)]=\"pageSize\"\r\n      (change)=\"onChangePage($event)\"\r\n    >\r\n      <option\r\n        *ngFor=\"let options of pageLimitOptions\"\r\n        [value]=\"options.value\"\r\n        [selected]=\"options.value == currentPageLimit\"\r\n      >\r\n        {{ options.value }} item per page\r\n      </option>\r\n    </select>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 25251:
/*!***************************************************************************************************!*\
  !*** ./src/app/core/components/validation-messages/validation-messages.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"text-danger alert-danger mt-1 ms-1\" *ngIf=\"errorMessage !== null\">\r\n  {{ errorMessage }}\r\n</div>\r\n";

/***/ }),

/***/ 6662:
/*!***************************************************************************!*\
  !*** ./src/app/modal/delete-alert/delete-alert.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\r\n  <div class=\"row mt-3 me-3\">\r\n    <div class=\"col-md-10 col-sm-10\"></div>\r\n    <div class=\"col-md-2 col-sm-2 text-right\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"close\"\r\n        data-dismiss=\"modal\"\r\n        aria-label=\"Close\"\r\n        (click)=\"activeModal.close('Cross click')\"\r\n      >\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-body text-center px-0\">\r\n    <img\r\n      src=\"../../../../assets/img/warning.png\"\r\n      class=\"mb-3\"\r\n      width=\"100\"\r\n      alt=\"\"\r\n    />\r\n    <h4 class=\"text-warning\">Are you sure you want to Delete ?</h4>\r\n    <div class=\"clearfix modal-text\">\r\n      <label *ngIf=\"title\">\r\n        <h3>{{ title }}</h3>\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div class=\"model-footer border-0 text-center px-0 pb-4\">\r\n    <div class=\"clearfix py-2\">\r\n      <button\r\n        class=\"btn btn-danger me-2\"\r\n        (click)=\"activeModal.dismiss('Ok click')\"\r\n      >\r\n        OK\r\n      </button>\r\n      <button class=\"btn btn-success\" (click)=\"activeModal.close('Cancel click')\">\r\n        Cancel\r\n      </button>\r\n    </div>\r\n  </div>";

/***/ }),

/***/ 31271:
/*!*********************************************************************!*\
  !*** ./src/app/views/changepwd/changepwd.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"\" *ngIf=\"!changePassword\">\r\n  <div class=\"h-100-custom-2\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-9 mx-auto\">\r\n          <form [formGroup]=\"changePasswordForm\">\r\n            <div class=\"card shadow-sm mt-custom\">\r\n              <div class=\"card-body py-5\" style=\"background: rgba(241,241,241,0.99)\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6 border-lgin\">\r\n                    <img src=\"../../../assets/img/changepass.png\" class=\"img-fluid\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"text-center\">\r\n                      <img src=\"../../../assets/img/s2plogo.png\" width=\"200\" alt=\"\">\r\n                      <h4 class=\"text-center my-4\" style=\"color: #ff0707;\">Change Your Password?</h4>\r\n                    </div>\r\n                    <div class=\"mb-3\">\r\n                      <div class=\"input-group\">\r\n                        <input formControlName=\"oldPassword\" class=\"input form-control input-inner-shadow\"\r\n                          placeholder=\"Old Password\" type=\"password\" [type]=\"show\" [ngClass]=\"{\r\n                            'is-invalid': f['oldPassword'].invalid && submitted\r\n                          }\" />\r\n                          <div class=\"input-group-append\">\r\n                            <span\r\n                              class=\"input-group-text\"\r\n                              (click)=\"password_display()\"\r\n                              *ngIf=\"show == 'password'\"\r\n                            >\r\n                              <i class=\"fa fa-eye-slash\"></i>\r\n                            </span>\r\n                            <span\r\n                              class=\"input-group-text\"\r\n                              (click)=\"password_hiden()\"\r\n                              *ngIf=\"show == 'text'\"\r\n                            >\r\n                              <i class=\"fa fa-eye\"></i>\r\n                            </span>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"mt-1 ms-2\">\r\n                        <validation-messages [message]=\"message\" [control]=\"f['oldPassword']\">\r\n                        </validation-messages>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"mb-3\">\r\n                      <div class=\"input-group\">\r\n                        <input formControlName=\"newPassword\" class=\"input form-control input-inner-shadow\"\r\n                          placeholder=\"New Password\" [type]=\"visible\" [ngClass]=\"{\r\n                            'is-invalid': f['newPassword'].invalid && submitted\r\n                          }\" />\r\n                          <div class=\"input-group-append\">\r\n                            <span\r\n                              class=\"input-group-text\"\r\n                              (click)=\"password_visible()\"\r\n                              *ngIf=\"visible == 'password'\"\r\n                            > \r\n                              <i class=\"fa fa-eye-slash\"></i>\r\n                            </span>\r\n                            <span\r\n                              class=\"input-group-text\"\r\n                              (click)=\"password_disable()\"\r\n                              *ngIf=\"visible == 'text'\"\r\n                            >\r\n                              <i class=\"fa fa-eye\"></i>\r\n                            </span>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"mt-1 ms-2\">\r\n                        <validation-messages [message]=\"message\" [control]=\"f['newPassword']\">\r\n                        </validation-messages>\r\n  \r\n                      </div>\r\n                    </div>\r\n    \r\n                    <div class=\"mb-3\">\r\n                      <div class=\"input-group\">\r\n                        <input formControlName=\"confirmPassword\" [type]=\"fieldTextType ? 'text' : 'password'\"\r\n                          class=\"input form-control input-inner-shadow\" placeholder=\"Confirm Password\"\r\n                          [ngClass]=\"{\r\n                            'is-invalid': f['confirmPassword'].invalid && submitted\r\n                          }\" />\r\n                          <span class=\"input-group-text\">\r\n                            <i class=\"fa\" [ngClass]=\"{\r\n                     'fa-eye-slash': !fieldTextType,\r\n                     'fa-eye': fieldTextType}\" (click)=\"toggleFieldTextType()\"></i>\r\n                          </span>\r\n                      </div>\r\n                      <div class=\"mt-1 ms-2\">\r\n                        <validation-messages [control]=\"f['confirmPassword']\">\r\n                        </validation-messages>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"text-center\">\r\n                      <button type=\"button\" (click)=\"setPass()\" class=\"btn btn-primary\">\r\n                        Submit\r\n                      </button>\r\n                    </div>\r\n                    <div class=\"text-center mt-3\">\r\n                      Back To <a [routerLink]=\"['/login']\" [routerLinkActive]=\"['router-link-active']\">Login.</a>\r\n                     </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"\" *ngIf=\"changePassword\">\r\n  <div class=\"container posi\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\"></div>\r\n      <div class=\"col-md-4\">\r\n        <form novalidate [formGroup]=\"setPasswordForm\">\r\n          <div class=\"card mt-custom shadow-sm\">\r\n            <div class=\"card-header\">\r\n              <h2 class=\"text-center m-0\">Reset Password</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <p class=\"text-muted text-center\">Set New Password</p>\r\n              <div class=\"mb-3\">\r\n                <div class=\"input-group\">\r\n                  <input type=\"password\"\r\n                  class=\"form-control\" placeholder=\"New Password\" [type]=\"show\"\r\n\r\n                    formControlName=\"password\" autocomplete=\"current-password\" required>\r\n\r\n                    <div class=\"input-group-append\">\r\n                      <span\r\n                        class=\"input-group-text\"\r\n                        (click)=\"password_display()\"\r\n                        *ngIf=\"show == 'password'\"\r\n                      >\r\n                        <i class=\"fa fa-eye-slash\"></i>\r\n                      </span>\r\n                      <span\r\n                        class=\"input-group-text\"\r\n                        (click)=\"password_hiden()\"\r\n                        *ngIf=\"show == 'text'\"\r\n                      >\r\n                        <i class=\"fa fa-eye\"></i>\r\n                      </span>\r\n                    </div>\r\n                    <div class=\"mt-2\">\r\n                      <validation-messages style=\"text-align: left\" [control]=\"setPasswordForm.controls['password']\">\r\n                      </validation-messages>\r\n      \r\n                    </div>\r\n    \r\n                </div>\r\n              </div>\r\n              <div class=\"mb-3\">\r\n                <div class=\"input-group\">\r\n                  <input type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Confirm Password\" formControlName=\"confirmPassword\" [type]=\"visible\"\r\n                    autocomplete=\"current-password\"\r\n                    required>\r\n\r\n                    <div class=\"input-group-append\">\r\n                      <span\r\n                        class=\"input-group-text\"\r\n                        (click)=\"password_visible()\"\r\n                        *ngIf=\"visible == 'password'\"\r\n                      >\r\n                        <i class=\"fa fa-eye-slash\"></i>\r\n                      </span>\r\n                      <span\r\n                        class=\"input-group-text\"\r\n                        (click)=\"password_disable()\"\r\n                        *ngIf=\"visible == 'text'\"\r\n                      >\r\n                        <i class=\"fa fa-eye\"></i>\r\n                      </span>\r\n                    </div>\r\n                </div>\r\n                <validation-messages [control]=\"fs['confirmPassword']\">\r\n                </validation-messages>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-7 col-7\">\r\n                  <button type=\"submit\" class=\"btn btn-primary shadow-sm\" (click)=\"setPass()\"\r\n                    [disabled]=\"setPasswordForm.invalid\">Submit</button>\r\n                  <!-- <button type=\"button\" class=\"btn btn-primary active\" [routerLink]=\"['/forgot-pwd']\"\r\n                    [routerLinkActive]=\"['router-link-active']\">Register Now!</button> -->\r\n                </div>\r\n                <div class=\"col-md-5 text-right pt-2\">\r\n                  Back To <a [routerLink]=\"['/login']\" [routerLinkActive]=\"['router-link-active']\">Login.</a>\r\n                 </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"col-md-4\"></div>\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"h-100-custom-2\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\"></div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card shadow-sm m-top-custom\" style=\"background: #f6f6f6\">\r\n            <div class=\"card-body py-3\">\r\n\r\n              <div class=\"my-4 text-center\">\r\n                <img\r\n                  src=\"./assets/images/border.png\"\r\n                  width=\"300\"\r\n                  alt=\"Card image cap\"\r\n                  class=\"img-fluid\"\r\n                />\r\n              </div>\r\n              <form [formGroup]=\"setPasswordForm\">\r\n                <div class=\"mb-3\">\r\n                  <h4>Set new password</h4>\r\n                </div>\r\n                <div class=\"mb-3\">\r\n                  <div class=\"input-group\">\r\n                    <input\r\n                      formControlName=\"newPassword\"\r\n                      type=\"text\"\r\n                      class=\"input form-control input-inner-shadow\"\r\n                      placeholder=\"New Password\"\r\n                      [type]=\"visible\"\r\n                      [ngClass]=\"{\r\n                        'is-invalid': fs['newPassword'].invalid && submitted\r\n                      }\"\r\n                    />\r\n                    <div class=\"input-group-append\">\r\n                      <span\r\n                        class=\"input-group-text\"\r\n                        (click)=\"password_visible()\"\r\n                        *ngIf=\"visible == 'password'\"\r\n                      >\r\n                        <i class=\"bi bi-eye-slash-fill\"></i>\r\n                      </span>\r\n                      <span\r\n                        class=\"input-group-text\"\r\n                        (click)=\"password_disable()\"\r\n                        *ngIf=\"visible == 'text'\"\r\n                      >\r\n                        <i class=\"bi bi-eye\"></i>\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <validation-messages\r\n                    [message]=\"message\"\r\n                    [control]=\"fs['newPassword']\"\r\n                  >\r\n                  </validation-messages>\r\n                </div>\r\n\r\n                <div class=\"mb-3\">\r\n                  <div class=\"input-group\">\r\n                    <input\r\n                      formControlName=\"confirmPassword\"\r\n                      type=\"password\"\r\n                      class=\"input form-control input-inner-shadow\"\r\n                      placeholder=\"Confirm Password\"\r\n                      [type]=\"Show\"\r\n                      [ngClass]=\"{\r\n                        'is-invalid':\r\n                          fs['confirmPassword'].invalid && submitted\r\n                      }\"\r\n                    />\r\n                    <div class=\"input-group-append\">\r\n                      <span\r\n                        class=\"input-group-text\"\r\n                        (click)=\"password_show()\"\r\n                        *ngIf=\"Show == 'password'\"\r\n                      >\r\n                        <i class=\"bi bi-eye-slash-fill\"></i>\r\n                      </span>\r\n                      <span\r\n                        class=\"input-group-text\"\r\n                        (click)=\"password_hide()\"\r\n                        *ngIf=\"Show == 'text'\"\r\n                      >\r\n                        <i class=\"bi bi-eye\"></i>\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <validation-messages [control]=\"fs['confirmPassword']\">\r\n                  </validation-messages>\r\n                </div>\r\n                <div class=\"text-center mt-4\">\r\n                  <button\r\n                    type=\"button\"\r\n                    (click)=\"setPass()\"\r\n                    class=\"ic-blue-btn-next\"\r\n                  >\r\n                    Submit\r\n                  </button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\"></div>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n</div>\r\n";

/***/ }),

/***/ 57162:
/*!***********************************************************!*\
  !*** ./src/app/views/error/404.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-left display-3 me-4\">404</h1>\r\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\r\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\r\n        </div>\r\n        <div class=\"input-prepend input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n          </div>\r\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\r\n          <span class=\"input-group-append\">\r\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 71682:
/*!***********************************************************!*\
  !*** ./src/app/views/error/500.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-left display-3 me-4\">500</h1>\r\n          <h4 class=\"pt-3\">Houston, we have a problem!</h4>\r\n          <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\r\n        </div>\r\n        <div class=\"input-prepend input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n          </div>\r\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\r\n          <span class=\"input-group-append\">\r\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 99715:
/*!***********************************************************************!*\
  !*** ./src/app/views/forgotpass/forgotpass.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"bg overflow-auto\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n  \r\n      <div class=\"col-md-11 mx-auto\">\r\n        <form [formGroup]=\"forgetPasswordFrom\">\r\n          <div class=\"card mt-custom\">\r\n            <div class=\"card-body py-5 shadow-sm\" style=\"background: #ffff\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 border-lgin\">\r\n                  <img src=\"../../../assets/img/forgot-pw.jpg\" class=\"img-fluid\" alt=\"\">\r\n                </div>\r\n                <div class=\"col-md-4 align-self-center mx-5\">\r\n                  <div class=\"text-center\">\r\n                    <img src=\"../../../assets/img/s2p-logo.jfif\" width=\"200\" alt=\"\">\r\n                    <div class=\"mt-4\">\r\n                      <h1 class=\"text-left mt-4\" style=\"color: black;\"><b>Forgot</b></h1>\r\n                    <h1 class=\"text-left\" style=\"color: black;\"><b>Your Password ?</b></h1>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-floating mb-3\">\r\n                    <input formControlName=\"EMAIL\" type=\"email\" class=\"form-control\" id=\"floatingInput\" placeholder=\"name@example.com\">\r\n                    <label for=\"floatingInput\" class=\"control-label\">Email address</label>\r\n  \r\n                    <validation-messages [control]=\"forgetPasswordFrom.controls['EMAIL']\">\r\n                    </validation-messages>\r\n                  </div>\r\n                  <div class=\"text-center mt-2\">\r\n                    <button type=\"button\" class=\"btn btn-primary shadow-sm text-white col-md-12\" (click)=\"sendMail()\"\r\n                      [disabled]=\"forgetPasswordFrom.invalid\"><strong>Submit</strong></button>\r\n                  </div>\r\n                  <div class=\"text-center mt-2\">\r\n                    Back To <a [routerLink]=\"['/login']\" [routerLinkActive]=\"['router-link-active']\">Login.</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n  \r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- <div class=\"container\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-9 mx-auto\">\r\n      <form [formGroup]=\"forgetPasswordFrom\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row text-left\">\r\n              <img src=\"\" alt=\"\">\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 border-lgin\">\r\n                <img src=\"../../../assets/img/Forgotpass.png\" class=\"img-fluid\" alt=\"\">\r\n              </div>\r\n              <div class=\"col-md-6 align-self-center\">\r\n                <div class=\"text-center\">\r\n                  <img src=\"../../../assets/img/s2plogo.png\" width=\"200\" alt=\"\">\r\n                  <h4 class=\"text-center my-4\" style=\"color: #ff0707;\">Forgot Password?</h4>\r\n                </div>\r\n                <div class=\"mb-3\">\r\n                  <input formControlName=\"EMAIL\" type=\"text\" class=\"form-control shadow-sm\"\r\n                    placeholder=\"Enter Your Email\">\r\n                  <validation-messages [control]=\"forgetPasswordFrom.controls['EMAIL']\">\r\n                  </validation-messages>\r\n                </div>\r\n                <div class=\"text-center mt-4\">\r\n                  <button type=\"button\" class=\"btn btn-primary shadow-sm text-white\" (click)=\"sendMail()\"\r\n                    [disabled]=\"forgetPasswordFrom.invalid\"><strong>Submit</strong></button>\r\n                </div>\r\n                <div class=\"text-center mt-3\">\r\n                 Back To <a [routerLink]=\"['/login']\" [routerLinkActive]=\"['router-link-active']\">Login.</a>\r\n                </div>\r\n              </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div> -->";

/***/ }),

/***/ 50514:
/*!*************************************************************!*\
  !*** ./src/app/views/login/login.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"meta overflow-auto\">\r\n  <div class=\"container\">\r\n    <div class=\"bg\">\r\n      <div class=\"row justify-content-center align-items-center\">\r\n        <div class=\"col-md-10\">\r\n          <form (submit)=\"login()\" [formGroup]=\"loginForm\">\r\n            <div class=\"card custom\">\r\n              <div\r\n                class=\"card-body\"\r\n                style=\"background-color: rgba(248, 247, 247, 0.8)\"\r\n              >\r\n                <div class=\"row justify-content-center align-items-center\">\r\n                  <div class=\"col-md-6 my-3\">\r\n                    <div class=\"\">\r\n                      <img\r\n                        src=\"../../../assets/img/undraw_co-working_re_w93t (2).svg\"\r\n                        class=\"img-fluid\"\r\n                        alt=\"\"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"card rounded-4 shadow-sm login my-1\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"text-center\">\r\n                          <!-- <img\r\n                            src=\"../../../assets/hlogo.png\"\r\n                            width=\"30%\"\r\n                            alt=\"\"\r\n                          /> -->\r\n                          <h4>User</h4>\r\n                        </div>\r\n                        <div class=\"text-left\">\r\n                          <h3 class=\"my-1\"><b>Sign In</b></h3>\r\n                          <p class=\"text-muted\">Sign In to your account</p>\r\n                        </div>\r\n                        <div class=\"mb-3\">\r\n                          <div class=\"input-group-lg\">\r\n                            <div class=\"input-group-prepend\">\r\n                              <span class=\"input-group-text\"\r\n                                ><i class=\"icon-user\"></i\r\n                              ></span>\r\n                              <input\r\n                                aria-label=\"Sizing example input\"\r\n                                aria-describedby=\"inputGroup-sizing-lg\"\r\n                                formControlName=\"email\"\r\n                                type=\"text\"\r\n                                class=\"form-control\"\r\n                                placeholder=\"Email\"\r\n                                required\r\n                              />\r\n                              <!-- <input\r\n                             \r\n                              formControlName=\"mobile\"\r\n                              type=\"number\"\r\n                              class=\"form-control\"\r\n                              placeholder=\"Mobile Number\"\r\n                              required\r\n                            />   -->\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"\">\r\n                            <validation-messages\r\n                              class=\"error-left\"\r\n                              [control]=\"loginForm.controls['mobileNo']\"\r\n                            >\r\n                            </validation-messages>\r\n                            <!-- <validation-messages\r\n                              class=\"error-left\"\r\n                              [control]=\"loginForm.controls['mobile']\"\r\n                            >\r\n                            </validation-messages>  -->\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"mb-3\">\r\n                          <div class=\"input-group input-group-lg\">\r\n                            <div class=\"input-group-prepend\">\r\n                              <span class=\"input-group-text\"\r\n                                ><i class=\"icon-lock\"></i\r\n                              ></span>\r\n                            </div>\r\n                            <input\r\n                              aria-label=\"Sizing example input\"\r\n                              aria-describedby=\"inputGroup-sizing-lg\"\r\n                              [type]=\"fieldTextType ? 'text' : 'password'\"\r\n                              class=\"form-control\"\r\n                              placeholder=\"Password\"\r\n                              formControlName=\"password\"\r\n                              autocomplete=\"current-password\"\r\n                              required\r\n                            />\r\n                            <div class=\"input-group-append\">\r\n                              <span class=\"input-group-text\">\r\n                                <i\r\n                                  class=\"fa\"\r\n                                  [ngClass]=\"{\r\n                                    'fa-eye-slash': !fieldTextType,\r\n                                    'fa-eye': fieldTextType\r\n                                  }\"\r\n                                  (click)=\"toggleFieldTextType()\"\r\n                                ></i>\r\n                              </span>\r\n                            </div>\r\n                          </div>\r\n                          <validation-messages\r\n                            class=\"error-left\"\r\n                            [control]=\"loginForm.controls['password']\"\r\n                          >\r\n                          </validation-messages>\r\n                        </div>\r\n                        <div\r\n                          class=\"text-center my-3 d-grid gap-2 col-6 mx-auto\"\r\n                        >\r\n                          <button\r\n                            type=\"submit\"\r\n                            class=\"btn btn-lg shadow-sm btn-primary\"\r\n                            [disabled]=\"loginForm.invalid\"\r\n                            (click)=\"login()\"\r\n                          >\r\n                            Login\r\n                          </button>\r\n                        </div>\r\n                        <div class=\"row justify-content-end\">\r\n                          <!-- <div class=\"col-md-7 text-left\">\r\n                            New User? Sign up\r\n                            <a\r\n                              [routerLink]=\"['/register']\"\r\n                              [routerLinkActive]=\"['router-link-active']\"\r\n                              style=\"font-size: 14px; color: #2d52f7\"\r\n                            >\r\n                              here.</a\r\n                            >\r\n                          </div> -->\r\n\r\n                          <!-- <div class=\"col-md-7 text-left\">\r\n                            New User? Register\r\n                            <a\r\n                              [routerLink]=\"['/register']\"\r\n                              [routerLinkActive]=\"['router-link-active']\"\r\n                              style=\"font-size: 14px; color: #2d52f7\"\r\n                            >\r\n                              here.</a\r\n                            >\r\n                          </div>\r\n\r\n                          <div class=\"col-md-5 text-right\">\r\n                            <button\r\n                              style=\"color: #2d52f7\"\r\n                              type=\"button\"\r\n                              class=\"btn btn-link p-0\"\r\n                              [routerLink]=\"['/forgot-pwd']\"\r\n                              [routerLinkActive]=\"['router-link-active']\"\r\n                            >\r\n                              Forgot password?\r\n                            </button>\r\n                          </div> -->\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 13956:
/*!*******************************************************************!*\
  !*** ./src/app/views/register/register.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- <div class=\"app-body bg-color\">\r\n  <main class=\"main d-flex align-items-center\">\r\n    <div class=\"container p-5\" style=\" background-color: rgba(0, 0, 0, 0);\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 mx-auto\">\r\n          <form [formGroup]=\"registerForm\" (submit)=\"register()\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body py-5 shadow-sm op\" >\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6 border-lgin\">\r\n                    <img src=\"../../../assets/img/Register.png\" class=\"img-fluid\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"text-center\">\r\n                      <img src=\"../../../assets/img/s2plogo.png\" width=\"200\" alt=\"\">\r\n                      <h4 class=\"text-center my-3\" style=\"color: #0e0d0d;\">Register</h4>\r\n                      <h6 class=\"text-muted text-center mb-3\">Create your account</h6>\r\n                    </div>\r\n                    <div>\r\n                      <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\r\n                        </div>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Username\" formControlName=\"userName\"\r\n                          autocomplete=\"username\" required>\r\n                      </div>\r\n                      <validation-messages class=\"error-left\" [control]=\"registerForm.controls['userName']\">\r\n                      </validation-messages>\r\n                    </div>\r\n                    <div class=\"mt-3\">\r\n                      <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\">@</span>\r\n                        </div>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\"\r\n                          autocomplete=\"email\" required>\r\n                      </div>\r\n                      <validation-messages class=\"error-left\" [control]=\"registerForm.controls['email']\">\r\n                      </validation-messages>\r\n                    </div>\r\n                    <div class=\"mt-3\">\r\n                      <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                        </div>\r\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\"\r\n                          autocomplete=\"new-password\" required>\r\n                      </div>\r\n                      <validation-messages class=\"error-left\" [control]=\"registerForm.controls['password']\">\r\n                      </validation-messages>\r\n                    </div>\r\n                    <div class=\"mt-3\">\r\n                      <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                        </div>\r\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\"\r\n                          autocomplete=\"new-password\" formControlName=\"confirmPassword\" required>\r\n                      </div>\r\n                      <validation-messages class=\"error-left\" [control]=\"registerForm.controls['confirmPassword']\">\r\n                      </validation-messages>\r\n                    </div>\r\n                    <div class=\"row mt-3\">\r\n                      <div class=\"col-md-6 col-6\">\r\n                        <button type=\"submit\" [disabled]=\"registerForm.invalid\" class=\"btn btn-primary shadow-sm\">Sign\r\n                          Up\r\n                        </button>\r\n                      </div>\r\n                      <div class=\"col-md-6 col-6 text-right\">\r\n                        <a [routerLink]=\"['/login']\" class=\"btn btn-outline-primary sign-inii\">Sign in</a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </main>\r\n</div>\r\n<ngx-spinner bdColor=\"rgba(0, 0, 0, 0.8)\" size=\"large\" color=\"var(--primary)\" type=\"timer\" [fullScreen]=\"true\">\r\n  <p style=\"color: var(--primary)\">Loading... </p>\r\n</ngx-spinner> -->\r\n\r\n\r\n\r\n<section class=\"vh-100 bg-color\">\r\n  <div class=\"container h-100  \">\r\n    <div class=\"row d-flex justify-content-center align-items-center h-100\">\r\n      <div class=\"col-lg-12 col-xl-11\">\r\n        <div class=\"card text-black\" style=\"border-radius: 25px;\">\r\n          <div class=\"card-body p-md-5\">\r\n            <div class=\"row justify-content-center\">\r\n              <div class=\"col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1\">\r\n\r\n                <!-- <p class=\"text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4\">Sign up</p> -->\r\n                <p class=\"text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4\">Register</p>\r\n\r\n\r\n                <!-- <form  [formGroup]=\"registerForm\" (submit)=\"register()\" class=\"mx-1 mx-md-4\"> -->\r\n                  <form  [formGroup]=\"registerForm\" (submit)=\"signIn()\" class=\"mx-1 mx-md-4\">\r\n\r\n                  <!-- <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" formControlName=\"userName\"\r\n                      autocomplete=\"username\" required>\r\n                  </div> -->\r\n                  <div class=\"input-group \">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"First Name\" formControlName=\"firstName\"\r\n                      autocomplete=\"firstName\" required>\r\n                  </div>\r\n                  <div class=\"input-group mt-3\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" formControlName=\"lastName\"\r\n                      autocomplete=\"lastName\" required>\r\n                  </div>\r\n\r\n\r\n                   <div class=\"mt-3\">\r\n                    <div class=\"input-group\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\">@</span>\r\n                      </div>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\"\r\n                        autocomplete=\"email\" required>\r\n                    </div>\r\n                    <validation-messages class=\"error-left\" [control]=\"registerForm.controls['email']\">\r\n                    </validation-messages>\r\n                  </div> \r\n                  <div class=\"mt-3\">\r\n                    <div class=\"input-group\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\">+91</span>\r\n                      </div>\r\n                      <input type=\"number\" class=\"form-control\" placeholder=\"Mobile Number\" formControlName=\"mobile\"\r\n                        autocomplete=\"mobile\" required>\r\n                    </div>\r\n                    <validation-messages class=\"error-left\" [control]=\"registerForm.controls['mobile']\">\r\n                    </validation-messages>\r\n                  </div>\r\n\r\n                  <div class=\"mt-3\">\r\n                    <div class=\"input-group\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                      </div>\r\n                      <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\"\r\n                        autocomplete=\"new-password\" required>\r\n                    </div>\r\n                    <validation-messages class=\"error-left\" [control]=\"registerForm.controls['password']\">\r\n                    </validation-messages>\r\n                  </div>\r\n\r\n                 <div class=\"mt-3\">\r\n                      <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                        </div>\r\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\"\r\n                          autocomplete=\"new-password\" formControlName=\"confirmPassword\" required>\r\n                      </div>\r\n                      <validation-messages class=\"error-left\"\r\n                        [control]=\"registerForm.controls['confirmPassword']\">\r\n                      </validation-messages>\r\n                    </div>\r\n\r\n                  <div class=\"form-check d-flex justify-content-left mt-3 mb-5\">\r\n                    <input class=\"form-check-input me-2\" type=\"checkbox\" value=\"\" id=\"form2Example3c\"  />\r\n                    <label class=\"form-check-label\" for=\"form2Example3\">\r\n                      <a href=\"#!\"> I agree all statements in Terms of service</a>\r\n                      \r\n                      \r\n                    </label>\r\n                  </div>\r\n\r\n                  <div class=\"d-flex justify-content-center mx-4 mb-3 mb-lg-4\">\r\n                    <button type=\"submit\" class=\"btn btn-outline-primary btn-lg\">Register</button>\r\n                  </div>\r\n\r\n                 \r\n\r\n                </form>\r\n\r\n              </div>\r\n              <div class=\"col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2\">\r\n\r\n                <img src=\"../../../assets/img/9.jpeg\"\r\n                  class=\"img-fluid\" alt=\"Sample image\">\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.04165976d3476fcc.js.map