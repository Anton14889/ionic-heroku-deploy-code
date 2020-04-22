(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-sign-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign/sign.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign/sign.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode='md' color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content *ngIf='userEmail == \"guest\"'>\n  <div class=\"container\">\n    <ion-text *ngIf='createAcc'>Create account</ion-text>\n    <form [formGroup]='signForm'>\n      <ion-item>\n        <ion-label position=\"floating\" color=\"secondary\">Email</ion-label>\n        <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\" color=\"secondary\">Password</ion-label>\n        <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n      </ion-item>\n      <ion-item lines='none'>\n        <ion-button class='sign-button' (click)='onSubmit()' size='default' slot='end' [disabled]='!signForm.valid'>Sign\n          in</ion-button>\n      </ion-item>\n    </form>\n\n\n    <ion-item lines='none' class='create-account'>\n\n      <div>\n        <ng-container *ngIf='!createAcc'>\n          <span>\n            New to shopping ?\n          </span>\n          <ion-button color='success' (click)='createAcc = true'>Create account</ion-button>\n        </ng-container>\n        <ng-container *ngIf='createAcc'>\n          <span>\n            Have account ?\n          </span>\n          <ion-button color='success' (click)='createAcc = false'>Sign in</ion-button>\n        </ng-container>\n      </div>\n    </ion-item>\n\n  </div>\n</ion-content>\n<ion-content *ngIf='userEmail != \"guest\"'>\n  <div class=\"container\">\n    <span>\n      You are logged in as {{userEmail}}\n    </span>\n    <ion-item lines='none'>\n      <ion-button class='sign-button' (click)='signOut()' size='default' slot='end'>Sign out</ion-button>\n    </ion-item>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/services/auth-parol.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-parol.service.ts ***!
  \************************************************/
/*! exports provided: AuthWhithParolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthWhithParolService", function() { return AuthWhithParolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);





let AuthWhithParolService = class AuthWhithParolService {
    constructor(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    //регистрация
    SignUp(email, password) {
        return new Promise((resolve, reject) => {
            firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().createUserWithEmailAndPassword(email, password)
                .then(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    //вход
    SignIn(email, password) {
        return new Promise((resolve, reject) => {
            this.afAuth.auth.signInWithEmailAndPassword(email, password)
                .then(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    signOut() {
        this.afAuth.auth.signOut().then(function () {
            console.log('signOut');
        }).catch(function (error) {
            console.log(error);
        });
        // return this.router.navigate(['/']);
    }
};
AuthWhithParolService.ctorParameters = () => [
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthWhithParolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthWhithParolService);



/***/ }),

/***/ "./src/app/sign/sign.component.scss":
/*!******************************************!*\
  !*** ./src/app/sign/sign.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  max-width: 90%;\n  margin: auto;\n}\n\n.sign-button {\n  margin-top: 30px;\n}\n\nion-content {\n  --padding-top: 30px ;\n}\n\n.create-account {\n  margin-top: 50px;\n  font-size: 14px;\n}\n\n.create-account div {\n  width: 100%;\n  text-align: center;\n  line-height: 27px;\n}\n\n.create-account span {\n  vertical-align: sub;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi9FOlxcaW9uaWNcXHNob3BwaW5nL3NyY1xcYXBwXFxzaWduXFxzaWduLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaWduL3NpZ24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7QUNFSjs7QURBQTtFQUNJLG9CQUFBO0FDR0o7O0FEQUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDSUo7O0FERkE7RUFDSSxtQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvc2lnbi9zaWduLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4uc2lnbi1idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIC0tcGFkZGluZy10b3A6IDMwcHhcclxufVxyXG5cclxuLmNyZWF0ZS1hY2NvdW50IHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmNyZWF0ZS1hY2NvdW50IGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG59XHJcbi5jcmVhdGUtYWNjb3VudCBzcGFuIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBzdWI7XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnNpZ24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctdG9wOiAzMHB4IDtcbn1cblxuLmNyZWF0ZS1hY2NvdW50IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY3JlYXRlLWFjY291bnQgZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG59XG5cbi5jcmVhdGUtYWNjb3VudCBzcGFuIHtcbiAgdmVydGljYWwtYWxpZ246IHN1Yjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/sign/sign.component.ts":
/*!****************************************!*\
  !*** ./src/app/sign/sign.component.ts ***!
  \****************************************/
/*! exports provided: SignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignComponent", function() { return SignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_parol_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth-parol.service */ "./src/app/services/auth-parol.service.ts");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user-data.service */ "./src/app/services/user-data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");







let SignComponent = class SignComponent {
    constructor(fb, authService, userData, toastController) {
        this.fb = fb;
        this.authService = authService;
        this.userData = userData;
        this.toastController = toastController;
        this.userEmail = 'guest';
        this.createAcc = false;
        this.signForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    ngOnInit() {
        this.userData.subject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(e => e != null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(e => e['email'] != null)).subscribe(e => this.userEmail = e.email);
    }
    onSubmit() {
        this.createAcc ? this.createAccount() : this.signIn();
    }
    signIn() {
        this.authService.SignIn(this.email.value, this.password.value)
            .then(res => {
        }, err => alert(err.message));
    }
    createAccount() {
        this.authService.SignUp(this.email.value, this.password.value)
            .then(res => {
            this.presentToast(`You registered as ${this.email.value}`);
        }, err => alert(err.message));
    }
    signOut() {
        this.authService.signOut();
        this.userData.signOut();
        this.userEmail = 'guest';
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                position: 'top',
                duration: 2000,
                color: 'dark'
            });
            toast.present();
        });
    }
    get email() { return this.signForm.get('email'); }
    get password() { return this.signForm.get('password'); }
};
SignComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_auth_parol_service__WEBPACK_IMPORTED_MODULE_3__["AuthWhithParolService"] },
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
];
SignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign/sign.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign.component.scss */ "./src/app/sign/sign.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_auth_parol_service__WEBPACK_IMPORTED_MODULE_3__["AuthWhithParolService"],
        _services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])
], SignComponent);



/***/ }),

/***/ "./src/app/sign/sign.module.ts":
/*!*************************************!*\
  !*** ./src/app/sign/sign.module.ts ***!
  \*************************************/
/*! exports provided: SignModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignModule", function() { return SignModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _sign_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign.component */ "./src/app/sign/sign.component.ts");







let SignModule = class SignModule {
};
SignModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _sign_component__WEBPACK_IMPORTED_MODULE_6__["SignComponent"] }])
        ],
        declarations: [_sign_component__WEBPACK_IMPORTED_MODULE_6__["SignComponent"]]
    })
], SignModule);



/***/ })

}]);
//# sourceMappingURL=sign-sign-module-es2015.js.map