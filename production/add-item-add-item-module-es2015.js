(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-item-add-item-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add-item/add-item.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add-item/add-item.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode='md' color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add item</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list lines=\"full\" class=\"form\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n      <ion-item>\n        <ion-label position=\"floating\">Name<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n      </ion-item>\n      <span class='error' *ngIf=\"name.errors?.required && (form.touched || form.dirty)\">\n        Enter name\n      </span>\n\n      <ion-item>\n        <ion-label position=\"floating\">Price<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input type=\"text\" formControlName=\"price\"></ion-input>\n      </ion-item>\n      <span class='error' *ngIf=\"price.errors?.required && (form.touched || form.dirty)\">\n        Enter price\n      </span>\n      <span class='error' *ngIf=\"price.errors?.pattern && (form.touched || form.dirty)\">\n        Price must be a number\n      </span>\n\n      <ion-item>\n        <ion-label position=\"floating\">Description<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-textarea formControlName=\"description\"></ion-textarea>\n      </ion-item>\n      <span class='error' *ngIf=\"description.errors?.required && (form.touched || form.dirty)\">\n        Enter description\n      </span>\n\n      <app-file-upload formControlName=\"image\"></app-file-upload>\n      <div *ngIf=\"image.errors && (form.touched || form.dirty)\">\n        <span class='error' *ngIf=\"image.errors?.required \">\n          Choose image\n        </span>\n        <span class='error' *ngIf=\"image.errors?.requiredFileType \">\n          Image format can be PNG JPG or WEBP\n        </span>\n      </div>\n\n      <ion-item lines='none'>\n        <ion-button class='submit-button' [color]=\"form.valid ? 'success' : 'dark'\" size=\"default\" ion-button\n          type=\"submit\" slot='end' [disabled]='!form.valid'>Add item\n        </ion-button>\n\n      </ion-item>\n\n\n\n\n\n    </form>\n  </ion-list>\n\n\n\n\n\n\n\n\n\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/file-upload/file-upload.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/file-upload/file-upload.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <label id='input-button'>\n    Add image\n    <input type=\"file\" class=\"file-input\" id='inp'>\n  </label>\n  <label for=\"inp\">\n    {{file ? file.name : 'choose file' }}\n  </label>\n</div>");

/***/ }),

/***/ "./src/app/admin/add-item/add-item-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/add-item/add-item-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AddItemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemPageRoutingModule", function() { return AddItemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-item.page */ "./src/app/admin/add-item/add-item.page.ts");




const routes = [
    {
        path: '',
        component: _add_item_page__WEBPACK_IMPORTED_MODULE_3__["AddItemPage"]
    }
];
let AddItemPageRoutingModule = class AddItemPageRoutingModule {
};
AddItemPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddItemPageRoutingModule);



/***/ }),

/***/ "./src/app/admin/add-item/add-item.module.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/add-item/add-item.module.ts ***!
  \***************************************************/
/*! exports provided: AddItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemPageModule", function() { return AddItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _add_item_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-item-routing.module */ "./src/app/admin/add-item/add-item-routing.module.ts");
/* harmony import */ var _add_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-item.page */ "./src/app/admin/add-item/add-item.page.ts");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../file-upload/file-upload.component */ "./src/app/admin/file-upload/file-upload.component.ts");








let AddItemPageModule = class AddItemPageModule {
};
AddItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_item_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddItemPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_add_item_page__WEBPACK_IMPORTED_MODULE_6__["AddItemPage"], _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_7__["FileUploadComponent"]]
    })
], AddItemPageModule);



/***/ }),

/***/ "./src/app/admin/add-item/add-item.page.scss":
/*!***************************************************!*\
  !*** ./src/app/admin/add-item/add-item.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form {\n  width: 95vw;\n  margin: auto;\n}\n\n.submit-button {\n  margin-top: 30px;\n}\n\n.error {\n  position: absolute;\n  margin-top: 5px;\n  color: #f44336;\n  font-size: 75%;\n  z-index: 2;\n}\n\nion-item:not(:first-of-type) {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRkLWl0ZW0vRTpcXGlvbmljXFxzaG9wcGluZy9zcmNcXGFwcFxcYWRtaW5cXGFkZC1pdGVtXFxhZGQtaXRlbS5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkZC1pdGVtL2FkZC1pdGVtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDR0o7O0FEREE7RUFDSSxnQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRkLWl0ZW0vYWRkLWl0ZW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xyXG4gICAgd2lkdGg6IDk1dnc7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLnN1Ym1pdC1idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uZXJyb3Ige1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgY29sb3I6I2Y0NDMzNjtcclxuICAgIGZvbnQtc2l6ZTogNzUlO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5pb24taXRlbTpub3QoOmZpcnN0LW9mLXR5cGUpIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn0iLCIuZm9ybSB7XG4gIHdpZHRoOiA5NXZ3O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmVycm9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGNvbG9yOiAjZjQ0MzM2O1xuICBmb250LXNpemU6IDc1JTtcbiAgei1pbmRleDogMjtcbn1cblxuaW9uLWl0ZW06bm90KDpmaXJzdC1vZi10eXBlKSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/admin/add-item/add-item.page.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/add-item/add-item.page.ts ***!
  \*************************************************/
/*! exports provided: AddItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemPage", function() { return AddItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../file-upload/file-upload.component */ "./src/app/admin/file-upload/file-upload.component.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");







let AddItemPage = class AddItemPage {
    constructor(fb, firestore, afStorage, toastController) {
        this.fb = fb;
        this.firestore = firestore;
        this.afStorage = afStorage;
        this.toastController = toastController;
        this.form = this.fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            image: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_3__["requiredFileType"])({ png: true, jpg: true, webp: true })]]
        });
    }
    get name() {
        return this.form.get('name');
    }
    get price() {
        return this.form.get('price');
    }
    get description() {
        return this.form.get('description');
    }
    get image() {
        return this.form.get('image');
    }
    submit() {
        let id = Math.random().toString(36).substring(2);
        let data = {
            name: this.name.value,
            id: id,
            description: this.description.value,
            price: +this.price.value,
            img: id,
        };
        this.uniqueName(this.name.value).then(e => {
            if (e.exists) {
                alert('Name is exist');
            }
            else {
                this.firestore.collection('products').doc(this.name.value)
                    .set(data).then(e => {
                    this.afStorage.upload(`/images/${id}`, this.image.value).catch(e => alert('error load image' + e));
                    this.presentToast(`${data.name} added`);
                    this.form.reset();
                }).catch(e => alert('error ' + e));
            }
        });
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
    uniqueName(name) {
        return this.firestore.collection('products').ref.doc(name).get();
    }
};
AddItemPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
];
AddItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-item.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add-item/add-item.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-item.page.scss */ "./src/app/admin/add-item/add-item.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])
], AddItemPage);



/***/ }),

/***/ "./src/app/admin/file-upload/file-upload.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/admin/file-upload/file-upload.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".file-input {\n  display: none;\n}\n\n#input-button {\n  color: #3880ff;\n  border: 1px solid #3880ff;\n  border-radius: 6px;\n  height: 2.1em;\n  font-size: 13px;\n  display: inline-block;\n  text-align: center;\n  line-height: 2.1em;\n  width: 84px;\n}\n\ndiv {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZmlsZS11cGxvYWQvRTpcXGlvbmljXFxzaG9wcGluZy9zcmNcXGFwcFxcYWRtaW5cXGZpbGUtdXBsb2FkXFxmaWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGUtaW5wdXQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI2lucHV0LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogIzM4ODBmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODgwZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDIuMWVtO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuMWVtO1xyXG4gICAgd2lkdGg6IDg0cHg7XHJcbn1cclxuZGl2IHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn0iLCIuZmlsZS1pbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNpbnB1dC1idXR0b24ge1xuICBjb2xvcjogIzM4ODBmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM4ODBmZjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBoZWlnaHQ6IDIuMWVtO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMi4xZW07XG4gIHdpZHRoOiA4NHB4O1xufVxuXG5kaXYge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/admin/file-upload/file-upload.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/file-upload/file-upload.component.ts ***!
  \************************************************************/
/*! exports provided: FileUploadComponent, requiredFileType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredFileType", function() { return requiredFileType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

var FileUploadComponent_1;


let FileUploadComponent = FileUploadComponent_1 = class FileUploadComponent {
    constructor(host) {
        this.host = host;
        this.file = null;
    }
    emitFiles(event) {
        const file = event && event.item(0);
        this.onChange(file);
        this.file = file;
    }
    writeValue(value) {
        // clear file input
        this.host.nativeElement.value = '';
        this.file = null;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
    }
};
FileUploadComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('change', ['$event.target.files']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [FileList]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], FileUploadComponent.prototype, "emitFiles", null);
FileUploadComponent = FileUploadComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-file-upload',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./file-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/file-upload/file-upload.component.html")).default,
        providers: [{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: FileUploadComponent_1,
                multi: true
            }],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./file-upload.component.scss */ "./src/app/admin/file-upload/file-upload.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], FileUploadComponent);

function requiredFileType(type) {
    return function (control) {
        const file = control.value;
        if (file) {
            const extension = file.name.split('.')[1].toLowerCase();
            if (!type[extension]) {
                return {
                    requiredFileType: true
                };
            }
            return null;
        }
        return null;
    };
}


/***/ })

}]);
//# sourceMappingURL=add-item-add-item-module-es2015.js.map