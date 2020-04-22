(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/card/card.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card/card.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item *ngFor='let item of array' >\n  <ion-thumbnail slot=\"start\">\n    <ion-img [src]=\"item.imgURL\" *ngIf='item.imgURL'></ion-img>\n  </ion-thumbnail>\n  <ion-label>\n    <ion-icon name=\"close-outline\" (click)='toggleCart(item)' *ngIf=\"tabCart\"></ion-icon>\n    <ion-icon name=\"close-outline\" (click)='toggleFavorites(item)' *ngIf=\"tabFav\"></ion-icon>\n    <h2 (click)='details(item)'>{{item.name}}\n    </h2>\n    <h3>{{item.price}} $</h3>\n    <div>\n      <ng-container *ngIf=\"!tabCart\">\n        <ion-icon name=\"cart\" (click)='toggleCart(item)' *ngIf='cartId[item[\"id\"]]' class='addToCart'></ion-icon>\n        <ion-icon name=\"cart-outline\" (click)='toggleCart(item)' *ngIf='!cartId[item[\"id\"]]' class='addToCart'>\n        </ion-icon>\n      </ng-container>\n      <ng-container *ngIf=\"tabCart\">\n        <ion-button>\n          By\n          <ion-icon slot=\"end\" name=\"cart-outline\"></ion-icon>\n        </ion-button>\n      </ng-container>\n      <ng-container *ngIf='favId && !tabFav'>\n        <ion-icon name=\"heart\" class='icon-favorite' *ngIf='favId[item[\"id\"]]' (click)='toggleFavorites(item)'>\n        </ion-icon>\n        <ion-icon name=\"heart-outline\" class='icon-favorite' *ngIf='!favId[item[\"id\"]]' (click)='toggleFavorites(item)'>\n        </ion-icon>\n      </ng-container>\n    </div>\n  </ion-label>\n</ion-item>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu side=\"start\" menuId=\"first\" contentId=\"main\" >\n  <ion-header>\n    <ion-toolbar mode='md' color=\"primary\">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n     \n      <ion-item (click)='navigate(\"tabs/sign\")'>\n      \n      <!-- <ion-item routerLink='tabs/sign'> -->\n        <ion-menu-toggle>\n          <ion-icon name=\"log-out-outline\" class='menu-icon'></ion-icon>\n          Sign in\n        </ion-menu-toggle>\n        \n      </ion-item>\n      <!-- <ion-item routerLink='admin'> -->\n      <ion-item (click)='navigate(\"tabs/admin\")'>\n        <ion-menu-toggle>\n          <ion-icon name=\"settings-outline\" class='menu-icon'></ion-icon>\n          Admin\n        </ion-menu-toggle>\n        \n      </ion-item>\n      <ion-item>\n        <ion-menu-toggle>\n          <ion-icon name=\"close-outline\" class='menu-icon'></ion-icon>\n          Close menu\n        </ion-menu-toggle>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n \n<ion-router-outlet id=\"main\"></ion-router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode='md' color=\"primary\">\n    <ion-title class='toolbar'> Price\n      <ion-icon name=\"arrow-up-outline\" class='price-arrow' (click)='byMinPrice()'></ion-icon>\n      <ion-icon name=\"arrow-down-outline\" class='price-arrow' (click)='byMaxPrice()'></ion-icon>\n    </ion-title>\n  </ion-toolbar>\n  <!-- <ion-toolbar class='filterToolbar' [ngClass]=\"down ? 'filterOut' : 'filter'\" mode='md'> -->\n  <ion-toolbar class='filterToolbar' [ngClass]=\"{filterOut: down}\" mode='md'>\n    <ion-item color=\"primary\">\n      <ion-label position=\"floating\">Search by name</ion-label>\n      <ion-input #inp (ionChange)='search(inp.value)' class='searchInput' (ionBlur)=\"hideFilter()\" inputmode='search'>\n      </ion-input>\n      <button class='clear-inp' *ngIf='inp.value' (click)='inp.value = \"\"'></button>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"card-content\" [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <app-card [array]='searchArr'></app-card>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode='md' color=\"primary\">\n  <ion-title></ion-title>\n</ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content class=\"card-content\" *ngIf='items'>\n  <app-card [array]='items'></app-card>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar mode='md' color=\"primary\">\n</ion-toolbar>\n<ion-content class=\"card-content\" *ngIf='items'>\n  <app-card [array]='items'></app-card>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar color='primary'>\n  <ion-buttons slot=\"start\" mode='md' class=\"buttons\">\n    <ion-menu-button auto-hide=\"false\" menu='first'></ion-menu-button>\n  </ion-buttons>\n</ion-toolbar>\n<ion-content>\n  <app-menu></app-menu>\n</ion-content>\n<ion-tabs (ionTabsDidChange)='[tab = $event.tab, emitTab($event.tab)]'>\n  <ion-tab-bar slot=\"bottom\" color='primary'>\n    <ion-tab-button tab=\"home\" #home>\n      <ion-icon name=\"home-outline\" *ngIf='!home.selected'></ion-icon>\n      <ion-icon name=\"home-sharp\" *ngIf='home.selected'></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"favorites\" #favorites>\n      <ion-icon name=\"star-outline\" *ngIf='!favorites.selected'></ion-icon>\n      <ion-icon name=\"star-sharp\" *ngIf='favorites.selected'></ion-icon>\n      <ion-label>Favorites</ion-label>\n      <ion-badge mode='ios' color=\"light\" class='badge' *ngIf='data?.favorites'>{{data?.favorites}}</ion-badge>\n    </ion-tab-button>\n    <ion-tab-button tab=\"cart\" #cart>\n      <ion-icon name=\"cart-outline\" *ngIf='!cart.selected'></ion-icon>\n      <ion-icon name=\"cart-sharp\" *ngIf='cart.selected'></ion-icon>\n      <ion-label>Cart</ion-label>\n      <ion-badge mode='ios' color=\"light\"  class='badge' *ngIf='data?.cart' mode='ios'>{{data?.cart}}</ion-badge>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>");

/***/ }),

/***/ "./src/app/card/card.component.scss":
/*!******************************************!*\
  !*** ./src/app/card/card.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  white-space: inherit !important;\n}\n\nion-item {\n  margin-bottom: 15px;\n}\n\nion-icon {\n  float: right;\n  font-size: 24px;\n  height: 35px;\n  vertical-align: bottom;\n}\n\n.addToCart {\n  margin-left: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9FOlxcaW9uaWNcXHNob3BwaW5nL3NyY1xcYXBwXFxjYXJkXFxjYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwrQkFBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDQUo7O0FERUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1sYWJlbCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogaW5oZXJpdCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbn1cclxuLmFkZFRvQ2FydCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG4iLCJpb24tbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbmlvbi1pY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGhlaWdodDogMzVweDtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cblxuLmFkZFRvQ2FydCB7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_favorites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/favorites.service */ "./src/app/services/favorites.service.ts");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user-data.service */ "./src/app/services/user-data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let CardComponent = class CardComponent {
    constructor(userData, firestore, favoritesService, cartService, router) {
        this.userData = userData;
        this.firestore = firestore;
        this.favoritesService = favoritesService;
        this.cartService = cartService;
        this.router = router;
        this.favId = {};
        this.cartId = {};
    }
    ngOnInit() {
        let favorites;
        let cart;
        this.userData.subject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(e => !!e), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(e => !!e['email']), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(e => e['email'] != 'guest'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(e => {
            this.email = e['email'];
            this.tabCart = e.tab == 'cart' ? true : false;
            this.tabFav = e.tab == 'favorites' ? true : false;
            this.favId = {};
            if (e['favorites']) {
                favorites = this.firestore.collection('usersData')
                    .doc(this.email)
                    .collection('favorites')
                    .valueChanges();
            }
            this.cartId = {};
            if (e['cart']) {
                cart = this.firestore.collection('usersData')
                    .doc(this.email)
                    .collection('cart')
                    .valueChanges();
            }
        }))
            .subscribe(e => {
            if (favorites) {
                favorites.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(e => !!e.length))
                    .subscribe(e => {
                    e.forEach(e => {
                        this.favId[e['id']] = true;
                    });
                });
            }
            if (cart) {
                cart.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(e => !!e.length))
                    .subscribe(e => {
                    e.forEach(e => {
                        this.cartId[e['id']] = true;
                    });
                });
            }
        });
        this.userData.subject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(e => !!e), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(e => !!e['email']), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(e => e['email'] == 'guest'))
            .subscribe(_ => {
            this.email = 'guest';
            this.favId = {};
            this.cartId = {};
            let favorites = JSON.parse(localStorage.getItem('favorites')) || {};
            for (const key in favorites) {
                if (favorites.hasOwnProperty(key)) {
                    this.favId[key] = true;
                }
            }
            let cart = JSON.parse(localStorage.getItem('cart')) || {};
            for (const key in cart) {
                if (cart.hasOwnProperty(key)) {
                    this.cartId[key] = true;
                }
            }
        });
    }
    details(item) {
        this.userData.detailsData(item);
        return this.router.navigateByUrl('details');
    }
    toggleCart(data) {
        if (this.email == 'guest') {
            let cartObj = JSON.parse(localStorage.getItem('cart')) || {};
            this.cartId[data.id] ? delete cartObj[+data.id] : cartObj[+data.id] = true;
            localStorage.setItem('cart', JSON.stringify(cartObj));
            this.userData.userCartSize(Object.keys(cartObj).length);
            return;
        }
        let favorites = {
            id: data.id,
            name: data.name
        };
        this.cartId[data.id] ? this.cartService.deleteFromCart(this.email, `${data.id}`) : this.cartService.addToCart(this.email, `${data.id}`, favorites);
    }
    toggleFavorites(data) {
        if (this.email == 'guest') {
            let favoritObj = JSON.parse(localStorage.getItem('favorites')) || {};
            this.favId[data.id] ? delete favoritObj[+data.id] : favoritObj[+data.id] = true;
            localStorage.setItem('favorites', JSON.stringify(favoritObj));
            this.userData.userFavoritSize(Object.keys(favoritObj).length);
            return;
        }
        let favorites = {
            id: data.id,
            name: data.name
        };
        this.favId[data.id] ? this.favoritesService.deleteFromFavorites(this.email, `${data.id}`) : this.favoritesService.addToFavorites(this.email, `${data.id}`, favorites);
    }
};
CardComponent.ctorParameters = () => [
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_3__["UserDataService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _services_favorites_service__WEBPACK_IMPORTED_MODULE_2__["FavoritesService"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], CardComponent.prototype, "array", void 0);
CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/card/card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card.component.scss */ "./src/app/card/card.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_data_service__WEBPACK_IMPORTED_MODULE_3__["UserDataService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
        _services_favorites_service__WEBPACK_IMPORTED_MODULE_2__["FavoritesService"],
        _services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], CardComponent);



/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu-icon {\n  height: 24px;\n  vertical-align: middle;\n  padding-right: 20px;\n}\n\nion-menu-toggle {\n  width: 100%;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9FOlxcaW9uaWNcXHNob3BwaW5nL3NyY1xcYXBwXFxtZW51XFxtZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Qsc0JBQUE7RUFDQSxtQkFBQTtBQ0NIOztBRENBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWljb24ge1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbmlvbi1tZW51LXRvZ2dsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxufSIsIi5tZW51LWljb24ge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbmlvbi1tZW51LXRvZ2dsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MenuComponent = class MenuComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    navigate(url) {
        this.route.navigateByUrl(url);
    }
};
MenuComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], MenuComponent);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n\nimg {\n  padding: 10px;\n}\n\n.toolbar {\n  float: right;\n}\n\n.clear-inp {\n  background: url('clear.svg'), #3880ff;\n  display: inline-block;\n  position: absolute;\n  right: 15px;\n  bottom: 10px;\n  width: 18px;\n  height: 18px;\n  z-index: 100;\n}\n\n.price-arrow:first-of-type {\n  margin: 0 18px;\n}\n\n.card-content {\n  --padding-top: 55px;\n}\n\n.filterToolbar {\n  border-top: 1px solid #c7c7c7;\n  height: 56px;\n  transition: all 0.2s;\n  position: absolute;\n}\n\n.filterOut {\n  height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9FOlxcaW9uaWNcXHNob3BwaW5nL3NyY1xcYXBwXFx0YWIxXFx0YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0FDR0Y7O0FEQUE7RUFDRSxxQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0dGOztBREFBO0VBQ0UsY0FBQTtBQ0dGOztBRERBO0VBQ0UsbUJBQUE7QUNJRjs7QURGQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNLRjs7QURGQTtFQUNFLFNBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5pbWcge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnRvb2xiYXIge1xuICBmbG9hdDogcmlnaHQ7XG59XG4gXG4uY2xlYXItaW5wIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2NsZWFyLnN2Z1wiKSwgIzM4ODBmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICBib3R0b206IDEwcHg7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLnByaWNlLWFycm93OmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW46IDAgMThweDtcbn1cbi5jYXJkLWNvbnRlbnQge1xuICAtLXBhZGRpbmctdG9wOiA1NXB4O1xufVxuLmZpbHRlclRvb2xiYXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDE5OSwgMTk5LCAxOTkpO1xuICBoZWlnaHQ6IDU2cHg7XG4gIHRyYW5zaXRpb246IGFsbCAuMnM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmZpbHRlck91dCB7XG4gIGhlaWdodDogMDtcbn1cblxuIiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG5pbWcge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4udG9vbGJhciB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmNsZWFyLWlucCB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9jbGVhci5zdmdcIiksICMzODgwZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5wcmljZS1hcnJvdzpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luOiAwIDE4cHg7XG59XG5cbi5jYXJkLWNvbnRlbnQge1xuICAtLXBhZGRpbmctdG9wOiA1NXB4O1xufVxuXG4uZmlsdGVyVG9vbGJhciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYzdjN2M3O1xuICBoZWlnaHQ6IDU2cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5maWx0ZXJPdXQge1xuICBoZWlnaHQ6IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");





let Tab1Page = class Tab1Page {
    constructor(firestore, afStorage) {
        this.afStorage = afStorage;
        this.itemsList = [];
        this.searchArr = [];
        this.lastScrollTop = 0;
        this.items = firestore.collection('products').valueChanges();
    }
    ngOnInit() {
        this.items.subscribe(e => {
            this.itemsList = e;
            this.searchArr = e;
            this.itemsList.forEach(object => {
                this.getImg(object)
                    .then(e => {
                    object['imgURL'] = e;
                });
            });
        });
    }
    logScrolling(e) {
        let st = e.detail.scrollTop;
        if (st > this.lastScrollTop) {
            this.down = true;
        }
        else {
            this.down = false;
        }
        this.lastScrollTop = st <= 0 ? 0 : st;
    }
    hideFilter() {
        this.searchArr.length ? this.down = true : false;
    }
    search(value) {
        let searchArr = [];
        if (value) {
            for (let i = 0; i < this.itemsList.length; i++) {
                if (~this.itemsList[i].name.trim().toLowerCase().indexOf(value.trim().toLowerCase())) {
                    searchArr.push(this.itemsList[i]);
                }
            }
            this.searchArr = searchArr;
        }
        else {
            this.searchArr = this.itemsList;
        }
    }
    byMinPrice() {
        this.searchArr.sort(function (a, b) {
            return b.price - a.price;
        });
    }
    byMaxPrice() {
        this.searchArr.sort(function (a, b) {
            return a.price - b.price;
        });
    }
    getImg(e) {
        return this.afStorage.ref(`/images/${e['img']}`).getDownloadURL().toPromise();
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]])
], Tab1Page);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9FOlxcaW9uaWNcXHNob3BwaW5nL3NyY1xcYXBwXFx0YWIyXFx0YWIyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuIiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user-data.service */ "./src/app/services/user-data.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");







let Tab2Page = class Tab2Page {
    constructor(userData, firestore, afStorage) {
        this.userData = userData;
        this.firestore = firestore;
        this.afStorage = afStorage;
        this.items = [];
    }
    ngOnInit() {
        let token = '';
        this.userData.subject
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(e => !!e), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(e => !!e['favorites']), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(e => !!e['email']), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(e => e['email'] != 'guest'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinct"])(e => {
            token = localStorage.getItem('token');
            return e.favorites;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(e => {
            return this.firestore.collection('usersData')
                .doc(e['email'])
                .collection('favorites')
                .valueChanges();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeAll"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])((p, c) => {
            this.items = [];
            return p.length === c.length;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(e)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeAll"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(e => this.searchById(e['id'])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeAll"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(e => e.payload.doc.data()))
            .subscribe(e => {
            e['imgURL'] = this.url(e['img'], token);
            this.items.push(e);
        });
        this.userData.subject
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(e => !!e), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(e => e['email'] == 'guest'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(e => e['tab'] == 'favorites'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(e => {
            let favorites = JSON.parse(localStorage.getItem('favorites')) || {};
            this.items = [];
            return Object.entries(favorites);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(e)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeAll"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(e)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeAll"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(e => e[0]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(e => this.searchById(+e)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeAll"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(e => e.payload.doc.data()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(e => {
            this.downloadImage(e['img']).toPromise().then(img => e['imgURL'] = img);
            return e;
        }))
            .subscribe(e => this.items.push(e));
    }
    downloadImage(id) {
        return this.afStorage.ref(`/images/${id}`).getDownloadURL();
    }
    url(img, token) {
        return `https://firebasestorage.googleapis.com/v0/b/shopping-backend-firebas-8d9fe.appspot.com/o/images%2F${img}?alt=media&token=${token}`;
    }
    searchById(id) {
        return this.firestore.collection('products', ref => ref.where('id', '==', id)
            .limit(1))
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(clients => clients));
    }
};
Tab2Page.ctorParameters = () => [
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] }
];
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"]])
], Tab2Page);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9FOlxcaW9uaWNcXHNob3BwaW5nL3NyY1xcYXBwXFx0YWIzXFx0YWIzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufSIsImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user-data.service */ "./src/app/services/user-data.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");







let Tab3Page = class Tab3Page {
    constructor(userData, firestore, afStorage) {
        this.userData = userData;
        this.firestore = firestore;
        this.afStorage = afStorage;
        this.items = [];
    }
    ngOnInit() {
        let token = '';
        this.userData.subject
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(e => !!e), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(e => !!e['cart']), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(e => !!e['email']), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(e => e['email'] != 'guest'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinct"])(e => {
            token = localStorage.getItem('token');
            return e.cart;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(e => {
            return this.firestore.collection('usersData')
                .doc(e['email'])
                .collection('cart')
                .valueChanges();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeAll"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])((p, c) => {
            this.items = [];
            return p.length === c.length;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(e)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeAll"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(e => this.searchById(e['id'])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeAll"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(e => e.payload.doc.data()))
            .subscribe(e => {
            e['imgURL'] = this.url(e['img'], token);
            this.items.push(e);
        });
        this.userData.subject
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(e => !!e), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(e => e['email'] == 'guest'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(e => e['tab'] == 'cart'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(e => {
            let cart = JSON.parse(localStorage.getItem('cart')) || {};
            this.items = [];
            return Object.entries(cart);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(e)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeAll"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(e)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeAll"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(e => e[0]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(e => this.searchById(+e)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeAll"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(e => e.payload.doc.data()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(e => {
            this.downloadImage(e['img']).toPromise().then(img => e['imgURL'] = img);
            return e;
        }))
            .subscribe(e => this.items.push(e));
    }
    downloadImage(id) {
        return this.afStorage.ref(`/images/${id}`).getDownloadURL();
    }
    url(img, token) {
        return `https://firebasestorage.googleapis.com/v0/b/shopping-backend-firebas-8d9fe.appspot.com/o/images%2F${img}?alt=media&token=${token}`;
    }
    searchById(id) {
        return this.firestore.collection('products', ref => ref.where('id', '==', id)
            .limit(1))
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(clients => clients));
    }
};
Tab3Page.ctorParameters = () => [
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] }
];
Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"]])
], Tab3Page);



/***/ }),

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _tab1_tab1_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tab1/tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _tab3_tab3_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tab3/tab3.page */ "./src/app/tab3/tab3.page.ts");
/* harmony import */ var _tab2_tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tab2/tab2.page */ "./src/app/tab2/tab2.page.ts");







const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        component: _tab1_tab1_page__WEBPACK_IMPORTED_MODULE_4__["Tab1Page"]
                    }
                ]
            },
            {
                path: 'favorites',
                children: [
                    {
                        path: '',
                        component: _tab2_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]
                    }
                ]
            },
            {
                path: 'cart',
                children: [
                    {
                        path: '',
                        component: _tab3_tab3_page__WEBPACK_IMPORTED_MODULE_5__["Tab3Page"]
                    }
                ]
            },
            {
                path: 'sign',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | sign-sign-module */ "sign-sign-module").then(__webpack_require__.bind(null, /*! ../sign/sign.module */ "./src/app/sign/sign.module.ts")).then(m => m.SignModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _tab1_tab1_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tab1/tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _tab3_tab3_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tab3/tab3.page */ "./src/app/tab3/tab3.page.ts");
/* harmony import */ var _tab2_tab2_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../tab2/tab2.page */ "./src/app/tab2/tab2.page.ts");












let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"],
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"], _tab1_tab1_page__WEBPACK_IMPORTED_MODULE_9__["Tab1Page"], _tab2_tab2_page__WEBPACK_IMPORTED_MODULE_11__["Tab2Page"], _tab3_tab3_page__WEBPACK_IMPORTED_MODULE_10__["Tab3Page"]],
        exports: []
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu-icon {\n  font-size: 24px;\n  cursor: pointer;\n}\n\nion-content {\n  position: absolute;\n  top: 0;\n}\n\n.curentPage {\n  margin-left: 15px;\n}\n\n.menu-icon, .curentPage {\n  height: 20px;\n  vertical-align: middle;\n}\n\n.badge {\n  margin-left: 10px;\n}\n\nion-toolbar {\n  width: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9FOlxcaW9uaWNcXHNob3BwaW5nL3NyY1xcYXBwXFx0YWJzXFx0YWJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLGVBQUE7RUFDQSxlQUFBO0FDQ0g7O0FEQ0E7RUFDRyxrQkFBQTtFQUNBLE1BQUE7QUNFSDs7QURBQTtFQUNFLGlCQUFBO0FDR0Y7O0FEREE7RUFDRyxZQUFBO0VBQ0Esc0JBQUE7QUNJSDs7QURGQTtFQUNHLGlCQUFBO0FDS0g7O0FESEE7RUFDRyxXQUFBO0FDTUgiLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtaWNvbiB7XHJcbiAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICB0b3A6IDA7XHJcbn1cclxuLmN1cmVudFBhZ2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbi5tZW51LWljb24sIC5jdXJlbnRQYWdlIHtcclxuICAgaGVpZ2h0OiAyMHB4O1xyXG4gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5iYWRnZSB7XHJcbiAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICAgd2lkdGg6IDYwcHg7XHJcbn1cclxuIiwiLm1lbnUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuXG4uY3VyZW50UGFnZSB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4ubWVudS1pY29uLCAuY3VyZW50UGFnZSB7XG4gIGhlaWdodDogMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmJhZGdlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgd2lkdGg6IDYwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user-data.service */ "./src/app/services/user-data.service.ts");



let TabsPage = class TabsPage {
    constructor(userData) {
        this.userData = userData;
        this.data = {
            email: null,
            cart: null,
            favorites: null
        };
        this.curentPage = {
            home: 'Home',
            favorites: 'Favorites',
            cart: 'Cart',
        };
    }
    ngOnInit() {
        this.userData.subject.subscribe(e => {
            this.data = e;
        });
    }
    emitTab(tab) {
        this.userData.emitTab(tab);
    }
};
TabsPage.ctorParameters = () => [
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"] }
];
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"]])
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map