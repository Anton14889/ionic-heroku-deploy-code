function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["card-details-card-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/card-details/card-details.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card-details/card-details.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCardDetailsCardDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode='md' color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngIf='item'>\n    <img [src]=\"item.imgURL\" *ngIf='item.imgURL'>\n    <ion-card-header>\n      <ion-card-subtitle>{{item.name}}</ion-card-subtitle>\n      <ion-card-title>{{item.price}} $</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      {{item.description}}\n    </ion-card-content>\n\n    <ion-header mode='md' class='footer'>\n      <ion-button class='favorite' color=\"light\" (click)='addToFavorites()'>\n        <ion-icon name=\"heart-outline\" class='icon-favorite'></ion-icon>\n      </ion-button>\n      <ion-button (click)='addToCart()'>\n        To cart\n        <ion-icon slot=\"end\" name=\"cart-outline\"></ion-icon>\n      </ion-button>\n    </ion-header>\n  </ion-card>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/card-details/card-details-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/card-details/card-details-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: CardDetailsPageRoutingModule */

  /***/
  function srcAppCardDetailsCardDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardDetailsPageRoutingModule", function () {
      return CardDetailsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _card_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./card-details.page */
    "./src/app/card-details/card-details.page.ts");

    var routes = [{
      path: '',
      component: _card_details_page__WEBPACK_IMPORTED_MODULE_3__["CardDetailsPage"]
    }];

    var CardDetailsPageRoutingModule = function CardDetailsPageRoutingModule() {
      _classCallCheck(this, CardDetailsPageRoutingModule);
    };

    CardDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CardDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/card-details/card-details.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/card-details/card-details.module.ts ***!
    \*****************************************************/

  /*! exports provided: CardDetailsPageModule */

  /***/
  function srcAppCardDetailsCardDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardDetailsPageModule", function () {
      return CardDetailsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _card_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./card-details-routing.module */
    "./src/app/card-details/card-details-routing.module.ts");
    /* harmony import */


    var _card_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./card-details.page */
    "./src/app/card-details/card-details.page.ts");

    var CardDetailsPageModule = function CardDetailsPageModule() {
      _classCallCheck(this, CardDetailsPageModule);
    };

    CardDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _card_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CardDetailsPageRoutingModule"]],
      declarations: [_card_details_page__WEBPACK_IMPORTED_MODULE_6__["CardDetailsPage"]]
    })], CardDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/card-details/card-details.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/card-details/card-details.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCardDetailsCardDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer {\n  padding: 5px;\n  text-align: right;\n}\n\n.footer ion-button:last-of-type {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC1kZXRhaWxzL0U6XFxpb25pY1xcc2hvcHBpbmcvc3JjXFxhcHBcXGNhcmQtZGV0YWlsc1xcY2FyZC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2FyZC1kZXRhaWxzL2NhcmQtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLGlCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jYXJkLWRldGFpbHMvY2FyZC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmZvb3RlciBpb24tYnV0dG9uOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufSIsIi5mb290ZXIge1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZm9vdGVyIGlvbi1idXR0b246bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/card-details/card-details.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/card-details/card-details.page.ts ***!
    \***************************************************/

  /*! exports provided: CardDetailsPage */

  /***/
  function srcAppCardDetailsCardDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardDetailsPage", function () {
      return CardDetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/user-data.service */
    "./src/app/services/user-data.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_favorites_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/favorites.service */
    "./src/app/services/favorites.service.ts");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var CardDetailsPage = /*#__PURE__*/function () {
      function CardDetailsPage(userData, favoritesService, cartService, toastController) {
        var _this = this;

        _classCallCheck(this, CardDetailsPage);

        this.userData = userData;
        this.favoritesService = favoritesService;
        this.cartService = cartService;
        this.toastController = toastController;
        userData.subject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (e) {
          return !!e;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (e) {
          return e['details'] != null;
        })).subscribe(function (e) {
          _this.item = e.details;
          _this.email = e.email;
        });
      }

      _createClass(CardDetailsPage, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.userData.detailsData(null);
        }
      }, {
        key: "addToFavorites",
        value: function addToFavorites() {
          var favorites = {
            id: this.item.id,
            name: this.item.name
          };
          this.favoritesService.addToFavorites(this.email, "".concat(this.item.id), favorites);
          this.presentToast("".concat(this.item.name, " added to favorites"));
        }
      }, {
        key: "addToCart",
        value: function addToCart() {
          var favorites = {
            id: this.item.id,
            name: this.item.name
          };
          this.cartService.addToCart(this.email, "".concat(this.item.id), favorites);
          this.presentToast("".concat(this.item.name, " added to cart"));
        }
      }, {
        key: "presentToast",
        value: function presentToast(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      message: message,
                      position: 'top',
                      duration: 2000,
                      color: 'dark'
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return CardDetailsPage;
    }();

    CardDetailsPage.ctorParameters = function () {
      return [{
        type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"]
      }, {
        type: _services_favorites_service__WEBPACK_IMPORTED_MODULE_4__["FavoritesService"]
      }, {
        type: _services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
      }];
    };

    CardDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/card-details/card-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card-details.page.scss */
      "./src/app/card-details/card-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"], _services_favorites_service__WEBPACK_IMPORTED_MODULE_4__["FavoritesService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])], CardDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=card-details-card-details-module-es5.js.map