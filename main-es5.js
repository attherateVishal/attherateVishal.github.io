function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n\r\n<!-- <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\r\n<div class=\"jumbotron text-center\">\r\n  <h1>WOWJS</h1>\r\n  <p>Angular 8</p> \r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row text-center\" style=\"display: block;\">\r\n       <img class=\"wow fadeInDown\" data-wow-delay=\"0.5s\" src=\"https://wowjs.uk/img/wow-logo.jpg\">    \r\n  </div>\r\n</div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forget-password/forget-password.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forget-password/forget-password.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthForgetPasswordForgetPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"myContainer\" style=\"text-align: -webkit-center;\">\n    <div class=\"wrapper\">\n    <mat-card class=\"card-pos-dim\">\n    <!-- <mat-card-title style=\"padding-bottom: 35px;\">Sing UP</mat-card-title> -->\n    <div class=\"example-container\" >\n        <section>\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n            <mat-label>User Name</mat-label>\n            <input matInput placeholder=\"\">\n\n          </mat-form-field>\n        </section>\n          <section>\n        <!-- <mat-form-field appearance=\"outline\" class=\"full-width\">\n          <mat-label>Enter your password</mat-label>\n          <input matInput [type]=\"hide ? 'password' : 'text'\">\n          <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n          <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n          </button>\n        </mat-form-field> -->\n    </section>\n        <section>\n        <button mat-raised-button color=\"primary\" routerLink=\"/dashboard\">Submit</button>\n    </section>\n      </div>\n      \n</mat-card>\n</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"myContainer\" style=\"text-align: -webkit-center;\">\n    <div class=\"wrapper\">\n    <mat-card class=\"card-pos-dim\">\n    <mat-card-title style=\"padding-bottom: 8px;\"><img src=\"./assets/img/imageonline-co-transparentimage.png\" style=\"height:6vh;\">\n      <p style=\"margin-bottom:0px;\">ArWOS</p>\n    <p style=\"font-size: initial;font-weight: 300;\">Sign in to continue</p>\n    </mat-card-title>\n    <div class=\"example-container\" >\n        <section>\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n            <mat-label>User Name</mat-label>\n            <input matInput placeholder=\"\">\n            <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n            <!-- <mat-hint>Hint</mat-hint> -->\n          </mat-form-field>\n        </section>\n          <section>\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n          <mat-label>Enter your password</mat-label>\n          <input matInput [type]=\"hide ? 'password' : 'text'\">\n          <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n          <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n          </button>\n        </mat-form-field>\n    </section>\n        <section>\n        <button mat-raised-button color=\"primary\" routerLink=\"/dashboard\" style=\"background-color: #FFDE71 !important; color:#993300!important;\">Submit</button>\n    </section>\n    <section class=\"mg-top-20\">\n        <a routerLink=\"/forget-password\" style=\"    margin-right: 20px;\">Forget Password ??</a>\n        <a routerLink=\"/signup\">Sign Up</a>\n    </section>\n      </div>\n      \n</mat-card>\n</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"myContainer\" style=\"text-align: -webkit-center;\">\n    <div class=\"wrapper\">\n    <mat-card class=\"card-pos-dim\">\n      <mat-card-title style=\"padding-bottom: 8px;\"><img src=\"./assets/img/imageonline-co-transparentimage.png\" style=\"height:6vh;\">\n        <p style=\"margin-bottom:0px;\">ArWOS</p>\n      <p style=\"font-size: initial;font-weight: 300;\">Sign up to continue</p>\n      </mat-card-title>\n    <div class=\"example-container\" >\n        <section>\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n            <mat-label>User Name</mat-label>\n            <input matInput placeholder=\"\">\n            <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n            <!-- <mat-hint>Hint</mat-hint> -->\n          </mat-form-field>\n        </section>\n          <section>\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n          <mat-label>Enter your password</mat-label>\n          <input matInput [type]=\"hide ? 'password' : 'text'\">\n          <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n          <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n          </button>\n        </mat-form-field>\n    </section>\n        <section>\n        <button mat-raised-button color=\"primary\" routerLink=\"/dashboard\" style=\"background-color: #FFDE71 !important; color:#993300!important;\">Submit</button>\n    </section>\n    <section class=\"mg-top-20\">\n        <a routerLink=\"/login\">Login</a>\n    </section>\n      </div>\n      \n</mat-card>\n</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/add-user.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/add-user.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardAddUserHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div mat-dialog-content class=\"card-style-d\">\r\n  <section>\r\n    <span class=\"btn-card\">\r\n      <button mat-fab color=\"warn\" class=\"margin-20-both-side\" aria-label=\"Example icon button with a delete icon\">\r\n        <mat-icon>delete</mat-icon>\r\n      </button>\r\n      <button mat-fab color=\"primary\" aria-label=\"Example icon button with a delete icon\">\r\n        <span class=\"material-icons\" color=\"primary\">\r\n          edit\r\n          </span>\r\n      </button>\r\n      \r\n    </span>\r\n  </section>\r\n  <form>\r\n    <!-- <h4>mat-select</h4> -->\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n    <mat-form-field>\r\n      <mat-label>User Type</mat-label>\r\n      <mat-select [(ngModel)]=\"selectedValue\" name=\"food\">\r\n        <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\r\n          {{food.viewValue}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n    <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n      <mat-label>First Name</mat-label>\r\n      <input matInput placeholder=\"\">\r\n      <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\r\n      <!-- <mat-hint>Hint</mat-hint> -->\r\n    </mat-form-field>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n    <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n      <mat-label>Last Name</mat-label>\r\n      <input matInput placeholder=\"\">\r\n      <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\r\n      <!-- <mat-hint>Hint</mat-hint> -->\r\n    </mat-form-field>\r\n    </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n    <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n      <mat-label>Email</mat-label>\r\n      <input matInput placeholder=\"\">\r\n      <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\r\n      <!-- <mat-hint>Hint</mat-hint> -->\r\n    </mat-form-field>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n    <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n      <mat-label>Mobile No</mat-label>\r\n      <input matInput placeholder=\"\">\r\n      <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\r\n      <!-- <mat-hint>Hint</mat-hint> -->\r\n    </mat-form-field>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n    <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n      <mat-label>Pan No</mat-label>\r\n      <input matInput placeholder=\"\">\r\n      <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\r\n      <!-- <mat-hint>Hint</mat-hint> -->\r\n    </mat-form-field>\r\n  </div>  \r\n  </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n    <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n      <mat-label>Aadhar No</mat-label>\r\n      <input matInput placeholder=\"\">\r\n      <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\r\n      <!-- <mat-hint>Hint</mat-hint> -->\r\n    </mat-form-field>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n    <mat-form-field>\r\n      <mat-label>Qualification</mat-label>\r\n      <mat-select [(ngModel)]=\"selectedValue\" name=\"food\">\r\n        <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\r\n          {{food.viewValue}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n    <mat-form-field>\r\n      <mat-label>Experience</mat-label>\r\n      <mat-select [(ngModel)]=\"selectedValue\" name=\"food\">\r\n        <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\r\n          {{food.viewValue}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n  </div>\r\n    <section class=\"section-align-center\">\r\n      <button mat-raised-button color=\"primary\"  class=\"margin-20-both-side\">Save </button>\r\n      <!-- <button [mat-dialog-close] mat-raised-button color=\"warn\" (click)=\"openDialog()\" class=\"margin-20-both-side\">Cancel</button> -->\r\n      <button mat-raised-button color=\"warn\" (click)=\"closeDialog()\" class=\"margin-20-both-side\">Cancel</button>\r\n    </section>\r\n    <!-- <p> Selected food: {{selectedValue}} </p> -->\r\n  </form>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"example-container\">\n    <mat-toolbar class=\"header-css\" > \n      <span><img src=\"../../assets/img/imageonline-co-transparentimage.png\" class=\"logo-style\"></span>\n      ArWOS\n        <span class=\"material-icons\" style=\"margin: 0 0 0 auto;cursor: pointer;\" routerLink=\"/\">\n            power_settings_new\n            </span>\n    </mat-toolbar>\n\n<mat-drawer-container class=\"example-container\">\n    <mat-drawer mode=\"side\" opened class=\"side-menu-style\">\n        <mat-list role=\"list\">\n            <mat-list-item role=\"listitem\"  class=\"list-color\">Item 1</mat-list-item>\n            <mat-list-item role=\"listitem\"  class=\"list-color\">Item 2</mat-list-item>\n            <mat-list-item role=\"listitem\"  class=\"list-color\">Item 3</mat-list-item>\n          </mat-list>\n        <mat-accordion >\n            <mat-expansion-panel>\n              <mat-expansion-panel-header class=\"list-color\">\n                <mat-panel-title class=\"side-menu-text\">\n                  Personal data\n                </mat-panel-title>\n                <!-- <mat-panel-description>\n                  Type your name and age\n                </mat-panel-description> -->\n              </mat-expansion-panel-header>\n              <mat-list role=\"list\"  >\n                <mat-list-item role=\"listitem\">Item 1</mat-list-item>\n                <mat-list-item role=\"listitem\">Item 2</mat-list-item>\n                <mat-list-item role=\"listitem\">Item 3</mat-list-item>\n              </mat-list>\n              <!-- <mat-form-field>\n                <mat-label>First name</mat-label>\n                <input matInput>\n              </mat-form-field>\n          \n              <mat-form-field>\n                <mat-label>Age</mat-label>\n                <input matInput type=\"number\" min=\"1\">\n              </mat-form-field> -->\n            </mat-expansion-panel>\n            <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                 (closed)=\"panelOpenState = false\" >\n              <mat-expansion-panel-header class=\"list-color\">\n                <mat-panel-title class=\"side-menu-text\">\n                  Self aware panel\n                </mat-panel-title>\n                <!-- <mat-panel-description>\n                  Currently I am {{panelOpenState ? 'open' : 'closed'}}\n                </mat-panel-description> -->\n              </mat-expansion-panel-header>\n              <!-- <p>I'm visible because I am open</p> -->\n              <mat-list role=\"list\">\n                <mat-list-item role=\"listitem\">Item 1</mat-list-item>\n                <mat-list-item role=\"listitem\">Item 2</mat-list-item>\n                <mat-list-item role=\"listitem\">Item 3</mat-list-item>\n              </mat-list>\n            </mat-expansion-panel>\n          </mat-accordion>\n    </mat-drawer>\n    <mat-drawer-content>\n      <mat-card class=\"card-style\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n          <span>\n          <form> \n          <!-- <h4>mat-select</h4> -->\n          <mat-form-field>\n            <mat-label>User Type</mat-label>\n            <mat-select [(ngModel)]=\"selectedValue\" name=\"food\">\n              <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n                {{food.viewValue}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <!-- <p> Selected food: {{selectedValue}} </p> -->\n        </form>\n        </span>\n      </div>\n        <div class=\"col-md-6 margin-auto\">\n        <span class=\"btn-card\">\n         <button mat-raised-button color=\"primary\"  (click)=\"openDialog()\">Add </button>\n        </span>  \n        </div>\n      </div>\n      </mat-card>\n\n      <div class=\"mat-elevation-z8\" style=\"margin:10px;\">\n        <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\" style=\"height: 56vh;\">\n      \n          <!-- Position Column -->\n          <ng-container matColumnDef=\"position\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n          </ng-container>\n      \n          <!-- Name Column -->\n          <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n          </ng-container>\n      \n          <!-- Weight Column -->\n          <ng-container matColumnDef=\"weight\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n          </ng-container>\n      \n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"symbol\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n          </ng-container>\n      \n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n      \n        <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n      </div>\n      \n\n    </mat-drawer-content>\n  </mat-drawer-container>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLandingLandingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\n<html class=\"full-height\" lang=\"en-US\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n   \n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\n    <link href=\"../../assets/css/bootstrap.min.css\" rel=\"stylesheet\">\n    <link href=\"../../assets/css/mdb.min.css\" rel=\"stylesheet\">\n    <link href=\"../../assets/styles/main.css\" rel=\"stylesheet\">\n  </head>\n  <body id=\"top\">\n    <header>\n       \n      <!-- Navbar-->\n      <!-- <mat-toolbar class=\"header-css\" > \n        <span><img src=\"./assets/img/imageonline-co-transparentimage.png\" class=\"logo-style\"></span>\n        ArWOS\n          <span class=\"material-icons\" style=\"margin: 0 0 0 auto;cursor: pointer;\" routerLink=\"/\">\n              power_settings_new\n              </span>\n      </mat-toolbar> -->\n      <nav class=\"navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar\" [class.top-nav-collapse]=\"topNav===true\" id=\"navbar\" (scroll)=\"onScroll($event)\">\n        \n        <div class=\"container\">\n          <span><img src=\"./assets/img/imageonline-co-transparentimage.png\" class=\"logo-style\">\n            <strong>ArWOS</strong>\n          </span><a class=\"navbar-brand\" href=\"#\">\n          </a>\n          <button class=\"navbar-toggler\" type=\"button\" (click)=\"displayBlock = !displayBlock\" data-toggle=\"collapse\" data-target=\"#navbarContent\" aria-controls=\"navbarContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon text-brown\"></span></button>\n          <div class=\"collapse navbar-collapse\" id=\"navbarContent\"\n          [class.my-class]=\"displayBlock === false\" [class.my-class2]=\"displayBlock === true\">\n            <ul class=\"navbar-nav ml-auto\">\n              <li class=\"nav-item\"><a class=\"nav-link active\" style=\"color:#993300;\" href=\"#about\">About</a></li>\n              <li class=\"nav-item\"><a class=\"nav-link\" style=\"color:#993300;\" href=\"#projects\">Projects</a></li>\n              <li class=\"nav-item\"><a class=\"nav-link\" style=\"color:#993300;\" href=\"#pricing\">Pricing</a></li>\n              <li class=\"nav-item\"><a class=\"nav-link\" style=\"color:#993300;\" href=\"#team\">Team</a></li>\n              <li class=\"nav-item\"><a class=\"nav-link\" style=\"color:#993300;\" href=\"#contact\">Contact</a></li>\n            </ul><a class=\"btn btn-primary btn-rounded my-0\" routerLink=\"/login\" style=\"background-color: #FFDE71 !important; color:#993300!important;\">Login</a>\n          </div>\n        </div> \n      </nav>\n      <!-- Intro Section-->\n      <section class=\"view hm-gradient\" id=\"intro\">\n        <!-- <video autoplay muted loop id=\"myVideo\">\n          <source src=\"../../assets/jpg-MyVideo-imagetovideo-com.mp4\" type=\"video/mp4\">\n        </video> -->\n        <div class=\"full-bg-img d-flex align-items-center\">\n          <div class=\"container\">\n            <div class=\"row no-gutters\">\n              <div class=\"col-md-10 col-lg-6 text-center text-md-left margins\">\n                <div class=\"white-text\">\n                  <div class=\"wow fadeInLeft\" data-wow-delay=\"0.3s\">\n                    <h1 class=\"h1-responsive font-bold mt-sm-5\" style=\"color:#993300;\">Your Success is Our Mission.</h1>\n                    <div class=\"h6\">\n                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt\n                      dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae\n                      iste.\n                    </div>\n                  </div><br>\n                  <div class=\"wow fadeInLeft\" data-wow-delay=\"0.3s\"><a class=\"btn btn-white dark-grey-text font-bold ml-0\" href=\"https://www.youtube.com/watch?v=60ItHLz5WEA\" target=\"_blank\"><i class=\"fa fa-play mr-1\"></i> View Demo</a><a class=\"btn btn-outline-white\" href=\"#\">Learn more</a></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n    </header>\n    <div id=\"content\">\n<section class=\"row no-gutters\" id=\"features\">\n  <div class=\"col-lg-3 col-md-6 col-sm-12 deep-purple lighten-1 text-white\">\n    <div class=\"p-5 text-center wow zoomIn\" data-wow-delay=\".1s\"><i class=\"fa fa-line-chart fa-2x\"></i>\n      <div class=\"h5 mt-3\">Agile Frameworks</div>\n      <p class=\"mt-5\">Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>\n    </div>\n  </div>\n  <div class=\"col-lg-3 col-md-6 purple lighten-1 text-white\">\n    <div class=\"p-5 text-center wow zoomIn\" data-wow-delay=\".3s\"><i class=\"fa fa-industry fa-2x\"></i>\n      <div class=\"h5 mt-3\">Corporate Strategy</div>\n      <p class=\"mt-5\">Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition</p>\n    </div>\n  </div>\n  <div class=\"col-lg-3 col-md-6 teal lighten-1 text-white\">\n    <div class=\"p-5 text-center wow zoomIn\" data-wow-delay=\".5s\"><i class=\"fa fa-users fa-2x\"></i>\n      <div class=\"h5 mt-3\"> Workplace Diversity</div>\n      <p class=\"mt-5\">Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>\n    </div>\n  </div>\n  <div class=\"col-lg-3 col-md-6 light-blue lighten-1 text-white\">\n    <div class=\"p-5 text-center wow zoomIn\" data-wow-delay=\".7s\"><i class=\"fa fa-bullhorn fa-2x\"></i>\n      <div class=\"h5 mt-3\"> Survival Strategies</div>\n      <p class=\"mt-5\">Bring to the table win-win survival strategies to ensure proactive domination.</p>\n    </div>\n  </div>\n</section>\n<section class=\"text-center py-5 grey lighten-4\" id=\"about\">\n  <div class=\"container\">\n    <div class=\"wow fadeIn\">\n      <h2 class=\"h1 pt-5 pb-3\">Why work with us?</h2>\n      <p class=\"px-5 mb-5 pb-3 lead blue-grey-text\">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n        aliqua. Ut enim ad minim veniam.\n      </p>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4 mb-r wow fadeInUp\" data-wow-delay=\".3s\"><i class=\"fa fa-dashboard fa-3x orange-text\"></i>\n        <h3 class=\"h4 mt-3\">Design</h3>\n        <p class=\"mt-3 blue-grey-text\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti\n          hic.\n        </p>\n      </div>\n      <div class=\"col-md-4 mb-r wow fadeInUp\" data-wow-delay=\".4s\"><i class=\"fa fa-comments-o fa-3x cyan-text\"></i>\n        <h3 class=\"h4 mt-3\">Feedback</h3>\n        <p class=\"mt-3 blue-grey-text\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti\n          hic.\n        </p>\n      </div>\n      <div class=\"col-md-4 mb-r wow fadeInUp\" data-wow-delay=\".5s\"><i class=\"fa fa-cubes fa-3x red-text\"></i>\n        <h3 class=\"h4 mt-3\">Execution</h3>\n        <p class=\"mt-3 blue-grey-text\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti\n          hic.\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"py-5\" id=\"projects\">\n  <div class=\"container\">\n    <div class=\"wow fadeIn\">\n      <h2 class=\"text-center h1 my-4\">Our best projects</h2>\n      <p class=\"px-5 mb-5 pb-3 lead blue-grey-text text-center\">\n        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n      </p>\n    </div>\n    <div class=\"row wow fadeInLeft\" data-wow-delay=\".3s\">\n      <div class=\"col-lg-6 col-xl-5 pr-lg-5 pb-5\"><img class=\"img-fluid rounded z-depth-2\" src=\"../../assets/img/0002.jpg\" alt=\"project image\"/></div>\n      <div class=\"col-lg-6 col-xl-7 pl-lg-5 pb-4\">\n        <div class=\"row mb-3\">\n          <div class=\"col-1 mr-1\"><i class=\"fa fa-book fa-2x cyan-text\"></i></div>\n          <div class=\"col-10\">\n            <h5 class=\"font-bold\">Education</h5>\n            <p class=\"grey-text\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda\n              voluptate velit.\n            </p>\n          </div>\n        </div>\n        <div class=\"row mb-3\">\n          <div class=\"col-1 mr-1\"><i class=\"fa fa-code fa-2x red-text\"></i></div>\n          <div class=\"col-10\">\n            <h5 class=\"font-bold\">Technology</h5>\n            <p class=\"grey-text\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda\n              voluptate velit.\n            </p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-1 mr-1\"><i class=\"fa fa-money fa-2x deep-purple-text\"></i></div>\n          <div class=\"col-10\">\n            <h5 class=\"font-bold\">Finance</h5>\n            <p class=\"grey-text\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda\n              voluptate velit.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <hr/>\n    <div class=\"row pt-5 wow fadeInRight\" data-wow-delay=\".3s\">\n      <div class=\"col-lg-6 col-xl-7 mb-3\">\n        <div class=\"row mb-3\">\n          <div class=\"col-1 mr-1\"><i class=\"fa fa-bar-chart fa-2x indigo-text\"></i></div>\n          <div class=\"col-10\">\n            <h5 class=\"font-bold\">Marketing</h5>\n            <p class=\"grey-text\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda\n              voluptate velit.\n            </p>\n          </div>\n        </div>\n        <div class=\"row mb-3\">\n          <div class=\"col-1 mr-1\"><i class=\"fa fa-music fa-2x pink-text\"></i></div>\n          <div class=\"col-10\">\n            <h5 class=\"font-bold\">Entertainment</h5>\n            <p class=\"grey-text\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda\n              voluptate velit.\n            </p>\n          </div>\n        </div>\n        <div class=\"row mb-3\">\n          <div class=\"col-1 mr-1\"><i class=\"fa fa-smile-o fa-2x blue-text\"></i></div>\n          <div class=\"col-10\">\n            <h5 class=\"font-bold\">Communication</h5>\n            <p class=\"grey-text\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda\n              voluptate velit.\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-6 col-xl-5 mb-3\"><img class=\"img-fluid rounded z-depth-2\" src=\"../../assets/img/007.jpg\" alt=\"project image\"/></div>\n    </div>\n  </div>\n</section>\n<section class=\"text-center py-5 yellow cutome-1 text-brown\" id=\"pricing\">\n  <div class=\"container\">\n    <div class=\"wow fadeIn\">\n      <h2 class=\"h1 pt-5 pb-3\">Our pricing plans</h2>\n      <p class=\"px-5 mb-5 pb-3 lead\">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi,\n        veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.\n      </p>\n    </div>\n    <div class=\"row wow zoomIn\">\n      <div class=\"col-lg-4 col-md-12 mb-r\">\n        <div class=\"card card-image\">\n          <div class=\"text-white text-center pricing-card d-flex align-items-center rgba-stylish-strong py-3 px-3 rounded\">\n            <div class=\"card-body\">\n              <div class=\"h5\">Individual</div>\n              <div class=\"py-5\"><sup class=\"display-4\">$</sup><span class=\"display-1\">9</span><span class=\"display-4\">/m</span></div>\n              <ul class=\"list-unstyled\">\n                <li>\n                  <p><strong>1</strong> person</p>\n                </li>\n                <li>\n                  <p><strong>10</strong> projects</p>\n                </li>\n                <li>\n                  <p><strong>100</strong> features</p>\n                </li>\n                <li>\n                  <p><strong>20GB</strong> storage</p>\n                </li>\n              </ul><a class=\"btn btn-outline-white mt-5\"> Buy now</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-12 mb-r\">\n        <div class=\"card card-image\">\n          <div class=\"text-white text-center pricing-card d-flex align-items-center rgba-teal-strong py-3 px-3 rounded\">\n            <div class=\"card-body\">\n              <div class=\"h5\">Startup</div>\n              <div class=\"py-5\"><sup class=\"display-4\">$</sup><span class=\"display-1\">29</span><span class=\"display-4\">/m</span></div>\n              <ul class=\"list-unstyled\">\n                <li>\n                  <p><strong>10</strong> person</p>\n                </li>\n                <li>\n                  <p><strong>100</strong> projects</p>\n                </li>\n                <li>\n                  <p><strong>200</strong> features</p>\n                </li>\n                <li>\n                  <p><strong>100GB</strong> storage</p>\n                </li>\n              </ul><a class=\"btn btn-outline-white mt-5\"> Buy now</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-12 mb-r\">\n        <div class=\"card card-image\">\n          <div class=\"text-white text-center pricing-card d-flex align-items-center rgba-red-strong py-3 px-3 rounded\">\n            <div class=\"card-body\">\n              <div class=\"h5\">Enterprise</div>\n              <div class=\"py-5\"><sup class=\"display-4\">$</sup><span class=\"display-1\">99</span><span class=\"display-4\">/m</span></div>\n              <ul class=\"list-unstyled\">\n                <li>\n                  <p><strong>10+</strong> person</p>\n                </li>\n                <li>\n                  <p><strong>Unlimited</strong> projects</p>\n                </li>\n                <li>\n                  <p><strong>Unlimited</strong> features</p>\n                </li>\n                <li>\n                  <p><strong>1TB</strong> storage</p>\n                </li>\n              </ul><a class=\"btn btn-outline-white mt-5\"> Buy now</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"py-5\" id=\"team\">\n  <div class=\"container\">\n    <div class=\"wow fadeIn\">\n      <h2 class=\"h1 pt-5 pb-3 text-center\">Our team members</h2>\n      <p class=\"px-5 mb-5 pb-3 lead text-center blue-grey-text\">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate\n        esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.\n      </p>\n    </div>\n    <div class=\"row mb-lg-4 center-on-small-only\">\n      <div class=\"col-lg-6 col-md-12 mb-r wow fadeInLeft\" data-wow-delay=\".3s\">\n        <div class=\"col-md-6 float-left\"><img class=\"img-fluid rounded z-depth-1 mb-3\" src=\"../../assets/img/woman-1.jpg\" alt=\"team member\"/></div>\n        <div class=\"col-md-6 float-right\">\n          <div class=\"h4\">Nicole West</div>\n          <h6 class=\"font-bold blue-grey-text mb-4\">Lead Designer</h6>\n          <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.</p><a href=\"https://twitter.com\" target=\"_blank\"><i class=\"fa fa-twitter\"></i><span class=\"ml-1\">@nicolewest</span></a>\n        </div>\n      </div>\n      <div class=\"col-lg-6 col-md-12 mb-r wow fadeInRight\" data-wow-delay=\".3s\">\n        <div class=\"col-md-6 float-left\"><img class=\"img-fluid rounded z-depth-1 mb-3\" src=\"../../assets/img/woman-2.jpg\" alt=\"team member\"/></div>\n        <div class=\"col-md-6 float-right\">\n          <div class=\"h4\">Hannah Cruz</div>\n          <h6 class=\"font-bold blue-grey-text mb-4\">Photographer</h6>\n          <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.</p><a href=\"https://twitter.com\" target=\"_blank\"><i class=\"fa fa-twitter\"></i><span class=\"ml-1\">@hannahcruz</span></a>\n        </div>\n      </div>\n    </div>\n    <div class=\"row center-on-small-only\">\n      <div class=\"col-lg-6 col-md-12 mb-r wow fadeInLeft\" data-wow-delay=\".3s\">\n        <div class=\"col-md-6 float-left\"><img class=\"img-fluid rounded z-depth-1 mb-3\" src=\"../../assets/img/man-1.jpg\" alt=\"team member\"/></div>\n        <div class=\"col-md-6 float-right\">\n          <div class=\"h4\">Mark Hall</div>\n          <h6 class=\"font-bold blue-grey-text mb-4\">Web Developer</h6>\n          <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.</p><a href=\"https://twitter.com\" target=\"_blank\"><i class=\"fa fa-twitter\"></i><span class=\"ml-1\">@markhall</span></a>\n        </div>\n      </div>\n      <div class=\"col-lg-6 col-md-12 mb-r wow fadeInRight\" data-wow-delay=\".3s\">\n        <div class=\"col-md-6 float-left\"><img class=\"img-fluid rounded z-depth-1 mb-3\" src=\"../../assets/img/man-2.jpg\" alt=\"team member\"/></div>\n        <div class=\"col-md-6 float-right\">\n          <div class=\"h4\">Vincent Harris</div>\n          <h6 class=\"font-bold blue-grey-text mb-4\">Web Developer</h6>\n          <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.</p><a href=\"https://twitter.com\" target=\"_blank\"><i class=\"fa fa-twitter\"></i><span class=\"ml-1\">@vincentharris</span></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- <section id=\"contact\" style=\"background-image:url('../../assets/img/panorama-3094696_1920.jpg');\"> -->\n<section id=\"contact\" style=\"background-image:url('../../assets/img/0002.jpg');\">\n  <div class=\"rgba-black-strong py-5\">\n    <div class=\"container\">\n      <div class=\"wow fadeIn\">\n        <h2 class=\"h1 text-white pt-5 pb-3 text-center\">Contact us</h2>\n        <p class=\"text-white px-5 mb-5 pb-3 lead text-center\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate\n          esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.\n        </p>\n      </div>\n      <div class=\"card mb-5 wow fadeInUp\" data-wow-delay=\".4s\">\n        <div class=\"card-body p-5\">\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n              <form action=\"https://formspree.io/youremail@example.com\" method=\"POST\">\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"md-form\">\n                      <input class=\"form-control\" id=\"name\" type=\"text\" name=\"name\" required=\"required\"/>\n                      <label for=\"name\">Your name</label>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"md-form\">\n                      <input class=\"form-control\" id=\"email\" type=\"text\" name=\"_replyto\" required=\"required\"/>\n                      <label for=\"email\">Your email</label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"md-form\">\n                      <input class=\"form-control\" id=\"subject\" type=\"text\" name=\"subject\" required=\"required\"/>\n                      <label for=\"subject\">Subject</label>\n                    </div>\n                  </div>\n                  <div class=\"col-md-12\">\n                    <div class=\"md-form\">\n                      <textarea class=\"md-textarea\" id=\"message\" name=\"message\" required=\"required\"></textarea>\n                      <label for=\"message\">Your message</label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"center-on-small-only mb-4\">\n                  <button class=\"btn btn-indigo ml-0\" type=\"submit\"><i class=\"fa fa-paper-plane-o mr-2\"></i> Send</button>\n                </div>\n              </form>\n            </div>\n            <div class=\"col-md-4\">\n              <ul class=\"list-unstyled text-center\">\n                <li class=\"mt-4\"><i class=\"fa fa-map-marker indigo-text fa-2x\"></i>\n                  <p class=\"mt-2\">140, City Center, New York, U.S.A</p>\n                </li>\n                <li class=\"mt-4\"><i class=\"fa fa-phone indigo-text fa-2x\"></i>\n                  <p class=\"mt-2\">+ 01 234 567 89</p>\n                </li>\n                <li class=\"mt-4\"><i class=\"fa fa-envelope indigo-text fa-2x\"></i>\n                  <p class=\"mt-2\">contact@company.com</p>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section></div>\n    <!-- <footer class=\"page-footer indigo darken-2 center-on-small-only pt-0 mt-0\"> -->\n    <footer class=\"page-footer yellow cutome-1 center-on-small-only pt-0 mt-0\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"mb-5 flex-center\"><a class=\"px-3\"><i class=\"fa fa-facebook fa-lg text-brown\"></i></a><a class=\"px-3\"><i class=\"fa fa-twitter fa-lg text-brown\"></i></a><a class=\"px-3\"><i class=\"fa fa-google-plus fa-lg text-brown\"></i></a><a class=\"px-3\"><i class=\"fa fa-linkedin fa-lg text-brown\"></i></a></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"footer-copyright\">\n        <div class=\"container-fluid\">\n          <p class=\"text-brown\">&copy; <a href=\"/\" class=\"text-brown\">ArWOS</a> \n            <!-- - Design: <a href=\"https://templateflip.com/\" target=\"_blank\">TemplateFlip</a> -->\n          </p>\n        </div>\n      </div>\n    </footer>\n    <!-- <script type=\"text/javascript\" src=\"../../assets/js/jquery-3.2.1.min.js\"></script>\n    <script type=\"text/javascript\" src=\"../../assets/js/popper.min.js\"></script>\n    <script type=\"text/javascript\" src=\"../../assets/js/bootstrap.min.js\"></script>\n    <script type=\"text/javascript\" src=\"../../assets/js/mdb.min.js\"></script>\n    <script>new WOW().init();</script> -->\n  </body>\n</html>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth/login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth/signup/signup.component */
    "./src/app/auth/signup/signup.component.ts");
    /* harmony import */


    var _auth_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth/forget-password/forget-password.component */
    "./src/app/auth/forget-password/forget-password.component.ts");
    /* harmony import */


    var _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./landing/landing.component */
    "./src/app/landing/landing.component.ts");

    var routes = [{
      path: "",
      component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"]
    }, {
      path: "login",
      component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: "signup",
      component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
    }, {
      path: "forget-password",
      component: _auth_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgetPasswordComponent"]
    }, {
      path: "dashboard",
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var ngx_wow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-wow */
    "./node_modules/ngx-wow/esm2015/ngx-wow.js");

    var AppComponent = function AppComponent(wowService) {
      _classCallCheck(this, AppComponent);

      this.wowService = wowService;
      this.title = 'ArWOS';
      this.wowService.init();
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: ngx_wow__WEBPACK_IMPORTED_MODULE_2__["NgwWowService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./landing/landing.component */
    "./src/app/landing/landing.component.ts");
    /* harmony import */


    var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth/login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth/signup/signup.component */
    "./src/app/auth/signup/signup.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _auth_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./auth/forget-password/forget-password.component */
    "./src/app/auth/forget-password/forget-password.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ngx_wow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-wow */
    "./node_modules/ngx-wow/esm2015/ngx-wow.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js"); //angular material


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _auth_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgetPasswordComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["addUserDialog"]],
      entryComponents: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["addUserDialog"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], ngx_wow__WEBPACK_IMPORTED_MODULE_11__["NgwWowModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"]],
      providers: [{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
        useValue: {
          appearance: 'fill'
        }
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/forget-password/forget-password.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/auth/forget-password/forget-password.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthForgetPasswordForgetPasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  background: linear-gradient(45deg, #f0bd19c4, #FFFFFF 100%);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n}\n\n.myContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  background: url('008.jpg') no-repeat center center;\n  background-size: cover;\n}\n\n.card-pos-dim {\n  width: 37%;\n  margin: 0 auto;\n  top: 30%;\n}\n\n.full-width {\n  text-align: -webkit-center;\n  width: -webkit-fill-available;\n}\n\n.example-container .mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n\n.mg-top-20 {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9mb3JnZXQtcGFzc3dvcmQvRTpcXHdvcmtcXE5ldyBmb2xkZXJcXEFyV09TL3NyY1xcYXBwXFxhdXRoXFxmb3JnZXQtcGFzc3dvcmRcXGZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksMkRBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ0FKOztBREVBO0VBQ0ksYUFBQTtFQUNGLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUVBLGtEQUFBO0VBQ0Esc0JBQUE7QUNBRjs7QURHQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtBQ0FKOztBREVBO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7QUNFSjs7QURDRTtFQUNFLGlCQUFBO0FDRUo7O0FEQ0U7O0VBRUUsYUFBQTtBQ0VKOztBRENFO0VBQ0UsMEJBQUE7QUNFSjs7QURDRTtFQUNFLGdCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcclxuICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg0MiwgMjcsIDE2MSwgMC43KSwgcmdiYSgyOSwgMjEwLCAxNzcsIDAuNykgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmMGJkMTljNCwgI0ZGRkZGRiAxMDAlKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuLm15Q29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgLy8gYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9wYW5vcmFtYS0zMDk0Njk2XzE5MjAuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvMDA4LmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIFxyXG59XHJcbi5jYXJkLXBvcy1kaW17XHJcbiAgICB3aWR0aDogMzclO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0b3A6IDMwJTtcclxufVxyXG4uZnVsbC13aWR0aHtcclxuICAgIHRleHQtYWxpZ246LXdlYmtpdC1jZW50ZXI7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxufVxyXG4uZXhhbXBsZS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXJpZ2h0LWFsaWduIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICBpbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG4gIGlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbiB7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxuICB9XHJcbiAgXHJcbiAgLm1nLXRvcC0yMHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfSIsIi53cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZjBiZDE5YzQsICNGRkZGRkYgMTAwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4ubXlDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvMDA4LmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmNhcmQtcG9zLWRpbSB7XG4gIHdpZHRoOiAzNyU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0b3A6IDMwJTtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uZXhhbXBsZS1yaWdodC1hbGlnbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn1cblxuLm1nLXRvcC0yMCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/auth/forget-password/forget-password.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/auth/forget-password/forget-password.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ForgetPasswordComponent */

  /***/
  function srcAppAuthForgetPasswordForgetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function () {
      return ForgetPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ForgetPasswordComponent = /*#__PURE__*/function () {
      function ForgetPasswordComponent() {
        _classCallCheck(this, ForgetPasswordComponent);
      }

      _createClass(ForgetPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ForgetPasswordComponent;
    }();

    ForgetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forget-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forget-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forget-password/forget-password.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forget-password.component.scss */
      "./src/app/auth/forget-password/forget-password.component.scss"))["default"]]
    })], ForgetPasswordComponent);
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.scss":
  /*!*************************************************!*\
    !*** ./src/app/auth/login/login.component.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  background: linear-gradient(45deg, #f0bd19c4, #FFFFFF 100%);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n}\n\n.myContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  background: url('007.jpg') no-repeat center center;\n  background-size: cover;\n}\n\n.card-pos-dim {\n  width: 37%;\n  margin: 0 auto;\n  top: 20%;\n}\n\n.full-width {\n  text-align: -webkit-center;\n  width: -webkit-fill-available;\n}\n\n.example-container .mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n\n.mg-top-20 {\n  margin-top: 20px;\n}\n\n/* \n  ##Device = Desktops\n  ##Screen = 1281px to higher resolution desktops\n*/\n\n/* \n  ##Device = Laptops, Desktops\n  ##Screen = B/w 1025px to 1280px\n*/\n\n/* \n  ##Device = Tablets, Ipads (portrait)\n  ##Screen = B/w 768px to 1024px\n*/\n\n@media (min-width: 768px) and (max-width: 1024px) {\n  .card-pos-dim {\n    width: 68% !important;\n  }\n}\n\n/* \n  ##Device = Tablets, Ipads (landscape)\n  ##Screen = B/w 768px to 1024px\n*/\n\n/* \n  ##Device = Low Resolution Tablets, Mobiles (Landscape)\n  ##Screen = B/w 481px to 767px\n*/\n\n@media (min-width: 481px) and (max-width: 767px) {\n  .card-pos-dim {\n    width: 93% !important;\n  }\n}\n\n/* \n  ##Device = Most of the Smartphones Mobiles (Portrait)\n  ##Screen = B/w 320px to 479px\n*/\n\n@media (min-width: 320px) and (max-width: 480px) {\n  .card-pos-dim {\n    width: 93% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9FOlxcd29ya1xcTmV3IGZvbGRlclxcQXJXT1Mvc3JjXFxhcHBcXGF1dGhcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDJEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNBSjs7QURFQTtFQUNJLGFBQUE7RUFDRix1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFFQSxrREFBQTtFQUNBLHNCQUFBO0FDQUY7O0FER0E7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7QUNBSjs7QURFQTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0FDRUo7O0FEQ0U7RUFDRSxpQkFBQTtBQ0VKOztBRENFOztFQUVFLGFBQUE7QUNFSjs7QURDRTtFQUNFLDBCQUFBO0FDRUo7O0FERUU7RUFDRSxnQkFBQTtBQ0NKOztBREVFOzs7Q0FBQTs7QUFXRjs7O0NBQUE7O0FBV0E7OztDQUFBOztBQUtBO0VBR0U7SUFDRSxxQkFBQTtFQ2hCRjtBQUNGOztBRG9CQTs7O0NBQUE7O0FBYUE7OztDQUFBOztBQUtBO0VBR0U7SUFDRSxxQkFBQTtFQzlCRjtBQUNGOztBRGlDQTs7O0NBQUE7O0FBS0E7RUFHRTtJQUNFLHFCQUFBO0VDbENGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoNDIsIDI3LCAxNjEsIDAuNyksIHJnYmEoMjksIDIxMCwgMTc3LCAwLjcpIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZjBiZDE5YzQsICNGRkZGRkYgMTAwJSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcbi5teUNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIC8vIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvcGFub3JhbWEtMzA5NDY5Nl8xOTIwLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nLzAwNy5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBcclxufVxyXG4uY2FyZC1wb3MtZGlte1xyXG4gICAgd2lkdGg6IDM3JTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdG9wOiAyMCU7XHJcbn1cclxuLmZ1bGwtd2lkdGh7XHJcbiAgICB0ZXh0LWFsaWduOi13ZWJraXQtY2VudGVyO1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbn1cclxuLmV4YW1wbGUtY29udGFpbmVyIC5tYXQtZm9ybS1maWVsZCArIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1yaWdodC1hbGlnbiB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuICBpbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5tZy10b3AtMjB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLyogXHJcbiAgIyNEZXZpY2UgPSBEZXNrdG9wc1xyXG4gICMjU2NyZWVuID0gMTI4MXB4IHRvIGhpZ2hlciByZXNvbHV0aW9uIGRlc2t0b3BzXHJcbiovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MXB4KSB7XHJcbiAgXHJcbiAgLy9DU1NcclxuICBcclxufVxyXG5cclxuLyogXHJcbiAgIyNEZXZpY2UgPSBMYXB0b3BzLCBEZXNrdG9wc1xyXG4gICMjU2NyZWVuID0gQi93IDEwMjVweCB0byAxMjgwcHhcclxuKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICBcclxuICAvL0NTU1xyXG5cclxufVxyXG5cclxuLyogXHJcbiAgIyNEZXZpY2UgPSBUYWJsZXRzLCBJcGFkcyAocG9ydHJhaXQpXHJcbiAgIyNTY3JlZW4gPSBCL3cgNzY4cHggdG8gMTAyNHB4XHJcbiovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICBcclxuICAvL0NTU1xyXG4gIC5jYXJkLXBvcy1kaW17XHJcbiAgICB3aWR0aDogNjglIWltcG9ydGFudDtcclxuICAgIC8vIHRvcDozMSUgIWltcG9ydGFudDtcclxuICB9ICBcclxufVxyXG5cclxuLyogXHJcbiAgIyNEZXZpY2UgPSBUYWJsZXRzLCBJcGFkcyAobGFuZHNjYXBlKVxyXG4gICMjU2NyZWVuID0gQi93IDc2OHB4IHRvIDEwMjRweFxyXG4qL1xyXG5cclxuLy8gQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICBcclxuLy8gICAvL0NTU1xyXG4vLyAgIC5jYXJkLXBvcy1kaW17XHJcbi8vICAgICB3aWR0aDogNjglIWltcG9ydGFudDtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8qIFxyXG4gICMjRGV2aWNlID0gTG93IFJlc29sdXRpb24gVGFibGV0cywgTW9iaWxlcyAoTGFuZHNjYXBlKVxyXG4gICMjU2NyZWVuID0gQi93IDQ4MXB4IHRvIDc2N3B4XHJcbiovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIFxyXG4gIC8vQ1NTXHJcbiAgLmNhcmQtcG9zLWRpbXtcclxuICAgIHdpZHRoOiA5MyUhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLyogXHJcbiAgIyNEZXZpY2UgPSBNb3N0IG9mIHRoZSBTbWFydHBob25lcyBNb2JpbGVzIChQb3J0cmFpdClcclxuICAjI1NjcmVlbiA9IEIvdyAzMjBweCB0byA0NzlweFxyXG4qL1xyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICBcclxuICAvL0NTU1xyXG4gIC5jYXJkLXBvcy1kaW17XHJcbiAgICB3aWR0aDogOTMlIWltcG9ydGFudDtcclxuICB9XHJcbn0iLCIud3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2YwYmQxOWM0LCAjRkZGRkZGIDEwMCUpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLm15Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nLzAwNy5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5jYXJkLXBvcy1kaW0ge1xuICB3aWR0aDogMzclO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdG9wOiAyMCU7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbi5tZy10b3AtMjAge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4vKiBcbiAgIyNEZXZpY2UgPSBEZXNrdG9wc1xuICAjI1NjcmVlbiA9IDEyODFweCB0byBoaWdoZXIgcmVzb2x1dGlvbiBkZXNrdG9wc1xuKi9cbi8qIFxuICAjI0RldmljZSA9IExhcHRvcHMsIERlc2t0b3BzXG4gICMjU2NyZWVuID0gQi93IDEwMjVweCB0byAxMjgwcHhcbiovXG4vKiBcbiAgIyNEZXZpY2UgPSBUYWJsZXRzLCBJcGFkcyAocG9ydHJhaXQpXG4gICMjU2NyZWVuID0gQi93IDc2OHB4IHRvIDEwMjRweFxuKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuY2FyZC1wb3MtZGltIHtcbiAgICB3aWR0aDogNjglICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qIFxuICAjI0RldmljZSA9IFRhYmxldHMsIElwYWRzIChsYW5kc2NhcGUpXG4gICMjU2NyZWVuID0gQi93IDc2OHB4IHRvIDEwMjRweFxuKi9cbi8qIFxuICAjI0RldmljZSA9IExvdyBSZXNvbHV0aW9uIFRhYmxldHMsIE1vYmlsZXMgKExhbmRzY2FwZSlcbiAgIyNTY3JlZW4gPSBCL3cgNDgxcHggdG8gNzY3cHhcbiovXG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY2FyZC1wb3MtZGltIHtcbiAgICB3aWR0aDogOTMlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qIFxuICAjI0RldmljZSA9IE1vc3Qgb2YgdGhlIFNtYXJ0cGhvbmVzIE1vYmlsZXMgKFBvcnRyYWl0KVxuICAjI1NjcmVlbiA9IEIvdyAzMjBweCB0byA0NzlweFxuKi9cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jYXJkLXBvcy1kaW0ge1xuICAgIHdpZHRoOiA5MyUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);

        this.hide = true;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/auth/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/auth/signup/signup.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/auth/signup/signup.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthSignupSignupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  background: linear-gradient(45deg, #f0bd19c4, #FFFFFF 100%);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n}\n\n.myContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  background: url('001.jpg') no-repeat center center;\n  background-size: cover;\n}\n\n.card-pos-dim {\n  width: 37%;\n  margin: 0 auto;\n  top: 20%;\n}\n\n.full-width {\n  text-align: -webkit-center;\n  width: -webkit-fill-available;\n}\n\n.example-container .mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n\n.mg-top-20 {\n  margin-top: 20px;\n}\n\n/* \n  ##Device = Desktops\n  ##Screen = 1281px to higher resolution desktops\n*/\n\n/* \n  ##Device = Laptops, Desktops\n  ##Screen = B/w 1025px to 1280px\n*/\n\n/* \n  ##Device = Tablets, Ipads (portrait)\n  ##Screen = B/w 768px to 1024px\n*/\n\n@media (min-width: 768px) and (max-width: 1024px) {\n  .card-pos-dim {\n    width: 68% !important;\n  }\n}\n\n/* \n  ##Device = Tablets, Ipads (landscape)\n  ##Screen = B/w 768px to 1024px\n*/\n\n/* \n  ##Device = Low Resolution Tablets, Mobiles (Landscape)\n  ##Screen = B/w 481px to 767px\n*/\n\n@media (min-width: 481px) and (max-width: 767px) {\n  .card-pos-dim {\n    width: 93% !important;\n  }\n}\n\n/* \n  ##Device = Most of the Smartphones Mobiles (Portrait)\n  ##Screen = B/w 320px to 479px\n*/\n\n@media (min-width: 320px) and (max-width: 480px) {\n  .card-pos-dim {\n    width: 93% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvRTpcXHdvcmtcXE5ldyBmb2xkZXJcXEFyV09TL3NyY1xcYXBwXFxhdXRoXFxzaWdudXBcXHNpZ251cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksMkRBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ0FKOztBREVBO0VBQ0ksYUFBQTtFQUNGLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUVBLGtEQUFBO0VBQ0Esc0JBQUE7QUNBRjs7QURHQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtBQ0FKOztBREVBO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7QUNFSjs7QURDRTtFQUNFLGlCQUFBO0FDRUo7O0FEQ0U7O0VBRUUsYUFBQTtBQ0VKOztBRENFO0VBQ0UsMEJBQUE7QUNFSjs7QURDRTtFQUNFLGdCQUFBO0FDRUo7O0FEQ0U7OztDQUFBOztBQVdGOzs7Q0FBQTs7QUFXQTs7O0NBQUE7O0FBS0E7RUFHRTtJQUNFLHFCQUFBO0VDZkY7QUFDRjs7QURtQkE7OztDQUFBOztBQWFBOzs7Q0FBQTs7QUFLQTtFQUdFO0lBQ0UscUJBQUE7RUM3QkY7QUFDRjs7QURnQ0E7OztDQUFBOztBQUtBO0VBR0U7SUFDRSxxQkFBQTtFQ2pDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoNDIsIDI3LCAxNjEsIDAuNyksIHJnYmEoMjksIDIxMCwgMTc3LCAwLjcpIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZjBiZDE5YzQsICNGRkZGRkYgMTAwJSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcbi5teUNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIC8vIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvcGFub3JhbWEtMzA5NDY5Nl8xOTIwLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nLzAwMS5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBcclxufVxyXG4uY2FyZC1wb3MtZGlte1xyXG4gICAgd2lkdGg6IDM3JTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdG9wOiAyMCU7XHJcbn1cclxuLmZ1bGwtd2lkdGh7XHJcbiAgICB0ZXh0LWFsaWduOi13ZWJraXQtY2VudGVyO1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbn1cclxuLmV4YW1wbGUtY29udGFpbmVyIC5tYXQtZm9ybS1maWVsZCArIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1yaWdodC1hbGlnbiB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuICBpbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZy10b3AtMjB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLyogXHJcbiAgIyNEZXZpY2UgPSBEZXNrdG9wc1xyXG4gICMjU2NyZWVuID0gMTI4MXB4IHRvIGhpZ2hlciByZXNvbHV0aW9uIGRlc2t0b3BzXHJcbiovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MXB4KSB7XHJcbiAgXHJcbiAgLy9DU1NcclxuICBcclxufVxyXG5cclxuLyogXHJcbiAgIyNEZXZpY2UgPSBMYXB0b3BzLCBEZXNrdG9wc1xyXG4gICMjU2NyZWVuID0gQi93IDEwMjVweCB0byAxMjgwcHhcclxuKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICBcclxuICAvL0NTU1xyXG5cclxufVxyXG5cclxuLyogXHJcbiAgIyNEZXZpY2UgPSBUYWJsZXRzLCBJcGFkcyAocG9ydHJhaXQpXHJcbiAgIyNTY3JlZW4gPSBCL3cgNzY4cHggdG8gMTAyNHB4XHJcbiovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICBcclxuICAvL0NTU1xyXG4gIC5jYXJkLXBvcy1kaW17XHJcbiAgICB3aWR0aDogNjglIWltcG9ydGFudDtcclxuICAgIC8vIHRvcDozMSUgIWltcG9ydGFudDtcclxuICB9ICBcclxufVxyXG5cclxuLyogXHJcbiAgIyNEZXZpY2UgPSBUYWJsZXRzLCBJcGFkcyAobGFuZHNjYXBlKVxyXG4gICMjU2NyZWVuID0gQi93IDc2OHB4IHRvIDEwMjRweFxyXG4qL1xyXG5cclxuLy8gQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICBcclxuLy8gICAvL0NTU1xyXG4vLyAgIC5jYXJkLXBvcy1kaW17XHJcbi8vICAgICB3aWR0aDogNjglIWltcG9ydGFudDtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8qIFxyXG4gICMjRGV2aWNlID0gTG93IFJlc29sdXRpb24gVGFibGV0cywgTW9iaWxlcyAoTGFuZHNjYXBlKVxyXG4gICMjU2NyZWVuID0gQi93IDQ4MXB4IHRvIDc2N3B4XHJcbiovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIFxyXG4gIC8vQ1NTXHJcbiAgLmNhcmQtcG9zLWRpbXtcclxuICAgIHdpZHRoOiA5MyUhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLyogXHJcbiAgIyNEZXZpY2UgPSBNb3N0IG9mIHRoZSBTbWFydHBob25lcyBNb2JpbGVzIChQb3J0cmFpdClcclxuICAjI1NjcmVlbiA9IEIvdyAzMjBweCB0byA0NzlweFxyXG4qL1xyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICBcclxuICAvL0NTU1xyXG4gIC5jYXJkLXBvcy1kaW17XHJcbiAgICB3aWR0aDogOTMlIWltcG9ydGFudDtcclxuICB9XHJcbn0iLCIud3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2YwYmQxOWM0LCAjRkZGRkZGIDEwMCUpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLm15Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nLzAwMS5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5jYXJkLXBvcy1kaW0ge1xuICB3aWR0aDogMzclO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdG9wOiAyMCU7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbi5tZy10b3AtMjAge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4vKiBcbiAgIyNEZXZpY2UgPSBEZXNrdG9wc1xuICAjI1NjcmVlbiA9IDEyODFweCB0byBoaWdoZXIgcmVzb2x1dGlvbiBkZXNrdG9wc1xuKi9cbi8qIFxuICAjI0RldmljZSA9IExhcHRvcHMsIERlc2t0b3BzXG4gICMjU2NyZWVuID0gQi93IDEwMjVweCB0byAxMjgwcHhcbiovXG4vKiBcbiAgIyNEZXZpY2UgPSBUYWJsZXRzLCBJcGFkcyAocG9ydHJhaXQpXG4gICMjU2NyZWVuID0gQi93IDc2OHB4IHRvIDEwMjRweFxuKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuY2FyZC1wb3MtZGltIHtcbiAgICB3aWR0aDogNjglICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qIFxuICAjI0RldmljZSA9IFRhYmxldHMsIElwYWRzIChsYW5kc2NhcGUpXG4gICMjU2NyZWVuID0gQi93IDc2OHB4IHRvIDEwMjRweFxuKi9cbi8qIFxuICAjI0RldmljZSA9IExvdyBSZXNvbHV0aW9uIFRhYmxldHMsIE1vYmlsZXMgKExhbmRzY2FwZSlcbiAgIyNTY3JlZW4gPSBCL3cgNDgxcHggdG8gNzY3cHhcbiovXG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY2FyZC1wb3MtZGltIHtcbiAgICB3aWR0aDogOTMlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qIFxuICAjI0RldmljZSA9IE1vc3Qgb2YgdGhlIFNtYXJ0cGhvbmVzIE1vYmlsZXMgKFBvcnRyYWl0KVxuICAjI1NjcmVlbiA9IEIvdyAzMjBweCB0byA0NzlweFxuKi9cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jYXJkLXBvcy1kaW0ge1xuICAgIHdpZHRoOiA5MyUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/auth/signup/signup.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/auth/signup/signup.component.ts ***!
    \*************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppAuthSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent() {
        _classCallCheck(this, SignupComponent);
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignupComponent;
    }();

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.scss */
      "./src/app/auth/signup/signup.component.scss"))["default"]]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-container {\n  width: 100%;\n  height: 90vh;\n}\n\n.header-css {\n  background: -webkit-gradient(linear, right top, left top, color-stop(0, #FFFFFF), color-stop(100, #FFC60D));\n  color: #993300;\n}\n\n.logo-style {\n  height: -webkit-fill-available;\n}\n\n.side-menu-style {\n  width: 20%;\n  background-color: #FFC60D;\n}\n\n.side-menu-text {\n  color: #993300;\n}\n\n.list-color {\n  background-color: #FFC60D;\n  color: #993300;\n}\n\n.list-color:hover {\n  background-color: #FFDE71 !important;\n  cursor: pointer;\n}\n\n.mat-expansion-panel {\n  padding: 0 0 0 0 !important;\n}\n\n.mat-accordion .mat-expansion-panel:first-of-type {\n  border-top-right-radius: 0px;\n  border-top-left-radius: 0px;\n}\n\n.mat-accordion .mat-expansion-panel:last-of-type {\n  border-bottom-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n}\n\n.mat-expansion-indicator::after, .mat-expansion-panel-header-description {\n  color: white !important;\n}\n\n.card-style {\n  margin: 20px;\n  flex-direction: column;\n  display: flex;\n}\n\n.card-style-d {\n  flex-direction: column;\n  display: flex;\n}\n\n.btn-card {\n  justify-content: flex-end;\n  display: flex;\n}\n\ntable {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n\n.section-align-center {\n  text-align: -webkit-center;\n}\n\n.margin-20-both-side {\n  margin: 0 20px 0 20px;\n}\n\n.margin-auto {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0U6XFx3b3JrXFxOZXcgZm9sZGVyXFxBcldPUy9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREdFO0VBSUUsMkdBQUE7RUFFQSxjQUFBO0FDSko7O0FETUU7RUFDRSw4QkFBQTtBQ0hKOztBREtFO0VBQ0UsVUFBQTtFQUVBLHlCQUFBO0FDSEo7O0FES0U7RUFDRSxjQUFBO0FDRko7O0FESUU7RUFFRSx5QkFBQTtFQUNBLGNBQUE7QUNGSjs7QURJRTtFQUVJLG9DQUFBO0VBQ0EsZUFBQTtBQ0ZOOztBRElFO0VBQ0UsMkJBQUE7QUNESjs7QURHRTtFQUNHLDRCQUFBO0VBQ0EsMkJBQUE7QUNBTDs7QURFRTtFQUNFLCtCQUFBO0VBQ0EsOEJBQUE7QUNDSjs7QURDQTtFQUNFLHVCQUFBO0FDRUY7O0FEQUU7RUFDRSxZQUFBO0VBQ0Msc0JBQUE7RUFDRCxhQUFBO0FDR0o7O0FEREU7RUFFRyxzQkFBQTtFQUNELGFBQUE7QUNHSjs7QURBRTtFQUNFLHlCQUFBO0VBQ0YsYUFBQTtBQ0dGOztBREFFO0VBQ0UsV0FBQTtBQ0dKOztBREFFO0VBQ0UsWUFBQTtBQ0dKOztBREFFO0VBQ0UsMEJBQUE7QUNHSjs7QURBRTtFQUNFLHFCQUFBO0FDR0o7O0FEREU7RUFDRSxZQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgLy8gbWFyZ2luOiAxMHB4O1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgIzU1NTtcclxuICB9XHJcbiAgLmhlYWRlci1jc3N7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoNDIsIDI3LCAxNjEsIDAuNyksIHJnYmEoMjksIDIxMCwgMTc3LCAwLjcpIDEwMCUpO1xyXG4gICAgLy8gLy8gYmFja2dyb3VuZC1jb2xvcjogIzQ0NTM2YztcclxuICAgIC8vIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAsICNGRkZGRkYpLCBjb2xvci1zdG9wKDEwMCwgI0ZGQzYwRCkpO1xyXG4gICAgLy8gY29sb3I6ICM0OTUwNTc7XHJcbiAgICBjb2xvcjojOTkzMzAwO1xyXG4gIH1cclxuICAubG9nby1zdHlsZXtcclxuICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICB9XHJcbiAgLnNpZGUtbWVudS1zdHlsZXtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E0NTU4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzYwRDtcclxuICB9XHJcbiAgLnNpZGUtbWVudS10ZXh0e1xyXG4gICAgY29sb3I6ICM5OTMzMDA7XHJcbiAgfVxyXG4gIC5saXN0LWNvbG9ye1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzNBNDU1ODtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkM2MEQ7XHJcbiAgICBjb2xvcjojOTkzMzAwO1xyXG4gIH1cclxuICAubGlzdC1jb2xvcjpob3ZlciB7XHJcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM5MDk1OWMgIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREU3MSAhaW1wb3J0YW50O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVse1xyXG4gICAgcGFkZGluZzogMCAwIDAgMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubWF0LWFjY29yZGlvbiAubWF0LWV4cGFuc2lvbi1wYW5lbDpmaXJzdC1vZi10eXBlICB7XHJcbiAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgfVxyXG4gIC5tYXQtYWNjb3JkaW9uIC5tYXQtZXhwYW5zaW9uLXBhbmVsOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xyXG59XHJcbi5tYXQtZXhwYW5zaW9uLWluZGljYXRvcjo6YWZ0ZXIsIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbntcclxuICBjb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbiAgLmNhcmQtc3R5bGV7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICAuY2FyZC1zdHlsZS1ke1xyXG4gICBcclxuICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAuYnRuLWNhcmR7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1hbGlnbi1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5tYXJnaW4tMjAtYm90aC1zaWRle1xyXG4gICAgbWFyZ2luOiAwIDIwcHggMCAyMHB4O1xyXG4gIH1cclxuICAubWFyZ2luLWF1dG97XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfSIsIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwdmg7XG59XG5cbi5oZWFkZXItY3NzIHtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMCwgI0ZGRkZGRiksIGNvbG9yLXN0b3AoMTAwLCAjRkZDNjBEKSk7XG4gIGNvbG9yOiAjOTkzMzAwO1xufVxuXG4ubG9nby1zdHlsZSB7XG4gIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbn1cblxuLnNpZGUtbWVudS1zdHlsZSB7XG4gIHdpZHRoOiAyMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkM2MEQ7XG59XG5cbi5zaWRlLW1lbnUtdGV4dCB7XG4gIGNvbG9yOiAjOTkzMzAwO1xufVxuXG4ubGlzdC1jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkM2MEQ7XG4gIGNvbG9yOiAjOTkzMzAwO1xufVxuXG4ubGlzdC1jb2xvcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkRFNzEgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIHBhZGRpbmc6IDAgMCAwIDAgIWltcG9ydGFudDtcbn1cblxuLm1hdC1hY2NvcmRpb24gLm1hdC1leHBhbnNpb24tcGFuZWw6Zmlyc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbn1cblxuLm1hdC1hY2NvcmRpb24gLm1hdC1leHBhbnNpb24tcGFuZWw6bGFzdC1vZi10eXBlIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xufVxuXG4ubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyLCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtc3R5bGUge1xuICBtYXJnaW46IDIwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jYXJkLXN0eWxlLWQge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYnRuLWNhcmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uc2VjdGlvbi1hbGlnbi1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cblxuLm1hcmdpbi0yMC1ib3RoLXNpZGUge1xuICBtYXJnaW46IDAgMjBweCAwIDIwcHg7XG59XG5cbi5tYXJnaW4tYXV0byB7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent, addUserDialog */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addUserDialog", function () {
      return addUserDialog;
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


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(dialog) {
        _classCallCheck(this, DashboardComponent);

        this.dialog = dialog;
        this.foods = [{
          value: 'steak-0',
          viewValue: 'Steak'
        }, {
          value: 'pizza-1',
          viewValue: 'Pizza'
        }, {
          value: 'tacos-2',
          viewValue: 'Tacos'
        }];
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](ELEMENT_DATA);
        this.panelOpenState = false;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }, {
        key: "openDialog",
        value: function openDialog() {
          this.dialogRef = this.dialog.open(addUserDialog, {
            data: {
              animal: 'panda'
            }
          });
          this.dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: ".concat(result)); // Pizza!
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    })], DashboardComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], {
      "static": true
    })], DashboardComponent.prototype, "sort", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/dashboard/dashboard.component.scss"))["default"]]
    })], DashboardComponent);
    var ELEMENT_DATA = [{
      position: 1,
      name: 'Hydrogen',
      weight: 1.0079,
      symbol: 'H'
    }, {
      position: 2,
      name: 'Helium',
      weight: 4.0026,
      symbol: 'He'
    }, {
      position: 3,
      name: 'Lithium',
      weight: 6.941,
      symbol: 'Li'
    }, {
      position: 4,
      name: 'Beryllium',
      weight: 9.0122,
      symbol: 'Be'
    }, {
      position: 5,
      name: 'Boron',
      weight: 10.811,
      symbol: 'B'
    }, {
      position: 6,
      name: 'Carbon',
      weight: 12.0107,
      symbol: 'C'
    }, {
      position: 7,
      name: 'Nitrogen',
      weight: 14.0067,
      symbol: 'N'
    }, {
      position: 8,
      name: 'Oxygen',
      weight: 15.9994,
      symbol: 'O'
    }, {
      position: 9,
      name: 'Fluorine',
      weight: 18.9984,
      symbol: 'F'
    }, {
      position: 10,
      name: 'Neon',
      weight: 20.1797,
      symbol: 'Ne'
    }, {
      position: 11,
      name: 'Sodium',
      weight: 22.9897,
      symbol: 'Na'
    }, {
      position: 12,
      name: 'Magnesium',
      weight: 24.305,
      symbol: 'Mg'
    }, {
      position: 13,
      name: 'Aluminum',
      weight: 26.9815,
      symbol: 'Al'
    }, {
      position: 14,
      name: 'Silicon',
      weight: 28.0855,
      symbol: 'Si'
    }, {
      position: 15,
      name: 'Phosphorus',
      weight: 30.9738,
      symbol: 'P'
    }, {
      position: 16,
      name: 'Sulfur',
      weight: 32.065,
      symbol: 'S'
    }, {
      position: 17,
      name: 'Chlorine',
      weight: 35.453,
      symbol: 'Cl'
    }, {
      position: 18,
      name: 'Argon',
      weight: 39.948,
      symbol: 'Ar'
    }, {
      position: 19,
      name: 'Potassium',
      weight: 39.0983,
      symbol: 'K'
    }, {
      position: 20,
      name: 'Calcium',
      weight: 40.078,
      symbol: 'Ca'
    }];

    var addUserDialog = /*#__PURE__*/function () {
      function addUserDialog(data, dialogRef) {
        _classCallCheck(this, addUserDialog);

        this.data = data;
        this.dialogRef = dialogRef;
        this.foods = [{
          value: 'steak-0',
          viewValue: 'Steak'
        }, {
          value: 'pizza-1',
          viewValue: 'Pizza'
        }, {
          value: 'tacos-2',
          viewValue: 'Tacos'
        }];
      }

      _createClass(addUserDialog, [{
        key: "closeDialog",
        value: function closeDialog() {
          this.dialogRef.close('Pizza!');
        }
      }]);

      return addUserDialog;
    }();

    addUserDialog.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
      }];
    };

    addUserDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'add-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-user.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/add-user.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/dashboard/dashboard.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))], addUserDialog);
    /***/
  },

  /***/
  "./src/app/landing/landing.component.scss":
  /*!************************************************!*\
    !*** ./src/app/landing/landing.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLandingLandingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".my-class {\n  display: none !important;\n}\n\n.my-class2 {\n  display: block !important;\n}\n\n.logo-style {\n  height: 6vh;\n}\n\n.text-brown {\n  color: #993300 !important;\n}\n\n#myVideo {\n  right: 0;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9FOlxcd29ya1xcTmV3IGZvbGRlclxcQXJXT1Mvc3JjXFxhcHBcXGxhbmRpbmdcXGxhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSx5QkFBQTtBQ0VKOztBREFBO0VBRUksV0FBQTtBQ0VKOztBREFBO0VBQ0kseUJBQUE7QUNHSjs7QUREQTtFQUVJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktY2xhc3N7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLm15LWNsYXNzMntcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxvZ28tc3R5bGV7XHJcbiAgICAvLyBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICBoZWlnaHQ6IDZ2aDtcclxuICB9XHJcbi50ZXh0LWJyb3due1xyXG4gICAgY29sb3I6Izk5MzMwMCAhaW1wb3J0YW50O1xyXG59ICBcclxuI215VmlkZW8ge1xyXG4gICAgLy8gcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIH0iLCIubXktY2xhc3Mge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5teS1jbGFzczIge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4ubG9nby1zdHlsZSB7XG4gIGhlaWdodDogNnZoO1xufVxuXG4udGV4dC1icm93biB7XG4gIGNvbG9yOiAjOTkzMzAwICFpbXBvcnRhbnQ7XG59XG5cbiNteVZpZGVvIHtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/landing/landing.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/landing/landing.component.ts ***!
    \**********************************************/

  /*! exports provided: LandingComponent */

  /***/
  function srcAppLandingLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
      return LandingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LandingComponent = /*#__PURE__*/function () {
      function LandingComponent() {
        _classCallCheck(this, LandingComponent);

        this.topNav = false;
        this.displayBlock = false;
      }

      _createClass(LandingComponent, [{
        key: "onWindowScroll",
        value: function onWindowScroll() {
          // do some stuff here when the window is scrolled
          var verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
          console.log(verticalOffset);

          if (verticalOffset > 100) {
            this.topNav = true;
          } else {
            this.topNav = false;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onScroll",
        value: function onScroll(e) {
          console.log(e);
          console.log("scroll");
        }
      }]);

      return LandingComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", [])], LandingComponent.prototype, "onWindowScroll", null);
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-landing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./landing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./landing.component.scss */
      "./src/app/landing/landing.component.scss"))["default"]]
    })], LandingComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\work\New folder\ArWOS\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map