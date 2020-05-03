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


    __webpack_exports__["default"] = "\n<router-outlet></router-outlet>";
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


    __webpack_exports__["default"] = "<p>forget-password works!</p>\n";
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


    __webpack_exports__["default"] = "<!DOCTYPE html>\n<html class=\"full-height\" lang=\"en-US\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    \n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\n    <link href=\"./assets/css/bootstrap.min.css\" rel=\"stylesheet\">\n    <link href=\"./assets/css/mdb.min.css\" rel=\"stylesheet\">\n    <link href=\"./assets/styles/main.css\" rel=\"stylesheet\">\n  </head>\n  <body id=\"top\">\n    <header> \n      \n      <!-- Intro Section-->\n      <section class=\"view hm-gradient\" id=\"intro\">\n        <div class=\"full-bg-img d-flex align-items-center\">\n          <div class=\"myContainer\" style=\"min-width: 50%;\">\n            <div class=\"row no-gutters\">\n              <div class=\"col-md-12 col-lg-12 text-center text-md-left margins\">\n\n<mdb-card>\n    \n    <!--Card content-->\n    <mdb-card-body class=\"text-center\">\n      <!--Title-->\n      <mdb-card-title>\n        <h4>Login</h4>\n      </mdb-card-title>\n  \n      <!-- Text\n      <mdb-card-text> Login with the cre.\n      </mdb-card-text> -->\n  \n      <!-- <a href=\"#\" mdbBtn color=\"primary\" mdbWavesEffect>Button</a> -->\n      <form\n    class=\"text-center\"\n    style=\"color: #757575;\"\n    [formGroup]=\"contactForm\"\n    (ngSubmit)=\"onSubmit()\"\n  >\n    <div class=\"md-form mt-3\">\n      <input\n        type=\"text\"\n        formControlName=\"contactFormName\"\n        id=\"materialContactFormName\"\n        class=\"form-control\"\n        mdbInput\n        mdbValidate\n      />\n      <label for=\"materialContactFormName\">User Name</label>\n      <mdb-error *ngIf=\"name.invalid && (name.dirty || name.touched)\"\n        >Input invalid</mdb-error\n      >\n      <!-- <mdb-success *ngIf=\"name.valid && (name.dirty || name.touched)\"\n        >Input valid</mdb-success -->\n      \n    </div>\n\n    <div class=\"md-form\">\n      <input\n        type=\"password\"\n        formControlName=\"contactFormPassword\"\n        id=\"materialContactFormPassword\"\n        class=\"form-control\"\n        mdbInput\n        mdbValidate\n      />\n      <label for=\"materialContactFormPassword\">Password</label>\n      <!-- <mdb-error *ngIf=\"password.invalid && (password.dirty || password.touched)\"\n        >Input invalid</mdb-error\n      >\n      <mdb-success *ngIf=\"password.valid && (password.dirty || password.touched)\"\n        >Input valid</mdb-success\n      > -->\n    </div>\n\n    \n\n    <button\n    \n      mdbBtn\n      color=\"primary\"\n      \n      rounded=\"true\"\n      style=\"background-color: #4285F4;\"\n      class=\"z-depth-0 my-4 waves-effect btn btn-primary\"\n      mdbWavesEffect\n      type=\"submit\"\n      [disabled]=\"disabledSubmitButton\"\n    >\n      Send\n    </button>\n  </form>\n    </mdb-card-body>\n  </mdb-card>\n  <!-- Card -->\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n    </header>\n    \n    <script type=\"text/javascript\" src=\"../../assets/jquery-3.2.1.min.js\"></script>\n    <script type=\"text/javascript\" src=\"../../assetsjs/popper.min.js\"></script>\n    <script type=\"text/javascript\" src=\"../../assetsjs/bootstrap.min.js\"></script>\n    <script type=\"text/javascript\" src=\"../../assetsjs/mdb.min.js\"></script>\n    <script>new WOW().init();</script>\n  </body>\n</html>\n\n\n\n";
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


    __webpack_exports__["default"] = "<!DOCTYPE html>\n<html class=\"full-height\" lang=\"en-US\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n   \n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\n    <link href=\"../../assets/css/bootstrap.min.css\" rel=\"stylesheet\">\n    <link href=\"../../assets/css/mdb.min.css\" rel=\"stylesheet\">\n    <link href=\"../../assets/styles/main.css\" rel=\"stylesheet\">\n  </head>\n  <body id=\"top\">\n    <header> \n      \n      <!-- Intro Section-->\n      <section class=\"view hm-gradient\" id=\"intro\">\n        <div class=\"full-bg-img d-flex align-items-center\">\n          <div class=\"myContainer\" style=\"min-width: 50%;\">\n            <div class=\"row no-gutters\">\n              <div class=\"col-md-12 col-lg-12 text-center text-md-left margins\">\n\n<mdb-card>\n    \n    <!--Card content-->\n    <mdb-card-body class=\"text-center\">\n      <!--Title-->\n      <mdb-card-title>\n        <h4>Sign up</h4>\n      </mdb-card-title>\n  \n      <!-- Text\n      <mdb-card-text> Login with the cre.\n      </mdb-card-text> -->\n  \n      <!-- <a href=\"#\" mdbBtn color=\"primary\" mdbWavesEffect>Button</a> -->\n      <form\n    class=\"text-center\"\n    style=\"color: #757575;\"\n    [formGroup]=\"contactForm\"\n    (ngSubmit)=\"onSubmit()\"\n  >\n    <div class=\"md-form mt-3\">\n      <input\n        type=\"text\"\n        formControlName=\"contactFormName\"\n        id=\"materialContactFormName\"\n        class=\"form-control\"\n        mdbInput\n        mdbValidate\n      />\n      <label for=\"materialContactFormName\">User Name</label>\n      <mdb-error *ngIf=\"name.invalid && (name.dirty || name.touched)\"\n        >Input invalid</mdb-error\n      >\n      <!-- <mdb-success *ngIf=\"name.valid && (name.dirty || name.touched)\"\n        >Input valid</mdb-success -->\n      \n    </div>\n\n    <div class=\"md-form\">\n      <input\n        type=\"password\"\n        formControlName=\"contactFormPassword\"\n        id=\"materialContactFormPassword\"\n        class=\"form-control\"\n        mdbInput\n        mdbValidate\n      />\n      <label for=\"materialContactFormPassword\">Password</label>\n      <!-- <mdb-error *ngIf=\"password.invalid && (password.dirty || password.touched)\"\n        >Input invalid</mdb-error\n      >\n      <mdb-success *ngIf=\"password.valid && (password.dirty || password.touched)\"\n        >Input valid</mdb-success\n      > -->\n    </div>\n\n    \n\n    <button\n    \n      mdbBtn\n      color=\"primary\"\n      \n      rounded=\"true\"\n      style=\"background-color: #4285F4;\"\n      class=\"z-depth-0 my-4 waves-effect btn btn-primary\"\n      mdbWavesEffect\n      type=\"submit\"\n      [disabled]=\"disabledSubmitButton\"\n    >\n      Send\n    </button>\n  </form>\n    </mdb-card-body>\n  </mdb-card>\n  <!-- Card -->\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n    </header>\n    \n    <script type=\"text/javascript\" src=\"../../assets/jquery-3.2.1.min.js\"></script>\n    <script type=\"text/javascript\" src=\"../../assetsjs/popper.min.js\"></script>\n    <script type=\"text/javascript\" src=\"../../assetsjs/bootstrap.min.js\"></script>\n    <script type=\"text/javascript\" src=\"../../assetsjs/mdb.min.js\"></script>\n    <script>new WOW().init();</script>\n  </body>\n</html>\n\n\n\n";
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


    __webpack_exports__["default"] = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"></script>\r\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\r\n<!------ Include the above in your HEAD tag ---------->\r\n\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"utf-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n    <meta name=\"description\" content=\"Responsive sidebar template with sliding effect and dropdown menu based on bootstrap 3\">\r\n    <title>Sidebar template</title>\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\"\r\n        crossorigin=\"anonymous\">\r\n    <link href=\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\" rel=\"stylesheet\">\r\n \r\n\r\n</head>\r\n\r\n<body>\r\n<div class=\"page-wrapper chiller-theme toggled\">\r\n  <a id=\"show-sidebar\" class=\"btn btn-sm btn-dark\" href=\"#\">\r\n    <i class=\"fas fa-bars\"></i>\r\n  </a>\r\n  <nav id=\"sidebar\" class=\"sidebar-wrapper\">\r\n    <div class=\"sidebar-content\">\r\n      <div class=\"sidebar-brand\">\r\n        <a href=\"#\">pro sidebar</a>\r\n        <div id=\"close-sidebar\">\r\n          <i class=\"fas fa-times\"></i>\r\n        </div>\r\n      </div>\r\n      <div class=\"sidebar-header\">\r\n        <div class=\"user-pic\">\r\n          <img class=\"img-responsive img-rounded\" src=\"https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg\"\r\n            alt=\"User picture\">\r\n        </div>\r\n        <div class=\"user-info\">\r\n          <span class=\"user-name\">Jhon\r\n            <strong>Smith</strong>\r\n          </span>\r\n          <span class=\"user-role\">Administrator</span>\r\n          <span class=\"user-status\">\r\n            <i class=\"fa fa-circle\"></i>\r\n            <span>Online</span>\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <!-- sidebar-header  -->\r\n      <div class=\"sidebar-search\">\r\n        <div>\r\n          <div class=\"input-group\">\r\n            <input type=\"text\" class=\"form-control search-menu\" placeholder=\"Search...\">\r\n            <div class=\"input-group-append\">\r\n              <span class=\"input-group-text\">\r\n                <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- sidebar-search  -->\r\n      <div class=\"sidebar-menu\">\r\n        <ul>\r\n          <li class=\"header-menu\">\r\n            <span>General</span>\r\n          </li>\r\n          <li class=\"sidebar-dropdown\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-tachometer-alt\"></i>\r\n              <span>Dashboard</span>\r\n              <span class=\"badge badge-pill badge-warning\">New</span>\r\n            </a>\r\n            <div class=\"sidebar-submenu\">\r\n              <ul>\r\n                <li>\r\n                  <a href=\"#\">Dashboard 1\r\n                    <span class=\"badge badge-pill badge-success\">Pro</span>\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Dashboard 2</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Dashboard 3</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </li>\r\n          <li class=\"sidebar-dropdown\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-shopping-cart\"></i>\r\n              <span>E-commerce</span>\r\n              <span class=\"badge badge-pill badge-danger\">3</span>\r\n            </a>\r\n            <div class=\"sidebar-submenu\">\r\n              <ul>\r\n                <li>\r\n                  <a href=\"#\">Products\r\n\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Orders</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Credit cart</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </li>\r\n          <li class=\"sidebar-dropdown\">\r\n            <a href=\"#\">\r\n              <i class=\"far fa-gem\"></i>\r\n              <span>Components</span>\r\n            </a>\r\n            <div class=\"sidebar-submenu\">\r\n              <ul>\r\n                <li>\r\n                  <a href=\"#\">General</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Panels</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Tables</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Icons</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Forms</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </li>\r\n          <li class=\"sidebar-dropdown\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-chart-line\"></i>\r\n              <span>Charts</span>\r\n            </a>\r\n            <div class=\"sidebar-submenu\">\r\n              <ul>\r\n                <li>\r\n                  <a href=\"#\">Pie chart</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Line chart</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Bar chart</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Histogram</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </li>\r\n          <li class=\"sidebar-dropdown\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-globe\"></i>\r\n              <span>Maps</span>\r\n            </a>\r\n            <div class=\"sidebar-submenu\">\r\n              <ul>\r\n                <li>\r\n                  <a href=\"#\">Google maps</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Open street map</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </li>\r\n          <li class=\"header-menu\">\r\n            <span>Extra</span>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-book\"></i>\r\n              <span>Documentation</span>\r\n              <span class=\"badge badge-pill badge-primary\">Beta</span>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-calendar\"></i>\r\n              <span>Calendar</span>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-folder\"></i>\r\n              <span>Examples</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!-- sidebar-menu  -->\r\n    </div>\r\n    <!-- sidebar-content  -->\r\n    <div class=\"sidebar-footer\">\r\n      <a href=\"#\">\r\n        <i class=\"fa fa-bell\"></i>\r\n        <span class=\"badge badge-pill badge-warning notification\">3</span>\r\n      </a>\r\n      <a href=\"#\">\r\n        <i class=\"fa fa-envelope\"></i>\r\n        <span class=\"badge badge-pill badge-success notification\">7</span>\r\n      </a>\r\n      <a href=\"#\">\r\n        <i class=\"fa fa-cog\"></i>\r\n        <span class=\"badge-sonar\"></span>\r\n      </a>\r\n      <a href=\"#\">\r\n        <i class=\"fa fa-power-off\"></i>\r\n      </a>\r\n    </div>\r\n  </nav>\r\n  <!-- sidebar-wrapper  -->\r\n  <main class=\"page-content\">\r\n    <div class=\"container-fluid\">\r\n      <h2>Pro Sidebar</h2>\r\n      <hr>\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-12\">\r\n          <p>This is a responsive sidebar template with dropdown menu based on bootstrap 4 framework.</p>\r\n          <p> You can find the complete code on <a href=\"https://github.com/azouaoui-med/pro-sidebar-template\" target=\"_blank\">\r\n              Github</a>, it contains more themes and background image option</p>\r\n        </div>\r\n        \r\n      </div>\r\n      <h5>More templates</h5>\r\n      <hr>\r\n        \r\n    </div>\r\n\r\n  </main>\r\n  <!-- page-content\" -->\r\n</div>\r\n<!-- page-wrapper -->\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\"\r\n        crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\"\r\n        crossorigin=\"anonymous\"></script>\r\n    <script>jQuery(function ($) {\r\n\r\n        $(\".sidebar-dropdown > a\").click(function() {\r\n      $(\".sidebar-submenu\").slideUp(200);\r\n      if (\r\n        $(this)\r\n          .parent()\r\n          .hasClass(\"active\")\r\n      ) {\r\n        $(\".sidebar-dropdown\").removeClass(\"active\");\r\n        $(this)\r\n          .parent()\r\n          .removeClass(\"active\");\r\n      } else {\r\n        $(\".sidebar-dropdown\").removeClass(\"active\");\r\n        $(this)\r\n          .next(\".sidebar-submenu\")\r\n          .slideDown(200);\r\n        $(this)\r\n          .parent()\r\n          .addClass(\"active\");\r\n      }\r\n    });\r\n    \r\n    $(\"#close-sidebar\").click(function() {\r\n      $(\".page-wrapper\").removeClass(\"toggled\");\r\n    });\r\n    $(\"#show-sidebar\").click(function() {\r\n      $(\".page-wrapper\").addClass(\"toggled\");\r\n    });\r\n    \r\n    \r\n       \r\n       \r\n    });</script>\r\n</body>\r\n\r\n</html>";
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


    __webpack_exports__["default"] = "<!DOCTYPE html>\n<html class=\"full-height\" lang=\"en-US\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n   \n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\n    <link href=\"../../assets/css/bootstrap.min.css\" rel=\"stylesheet\">\n    <link href=\"../../assets/css/mdb.min.css\" rel=\"stylesheet\">\n    <link href=\"../../assets/styles/main.css\" rel=\"stylesheet\">\n  </head>\n  <body id=\"top\">\n    <header> \n      <!-- Navbar-->\n      <nav class=\"navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar\" id=\"navbar\">\n        <div class=\"container\"><a class=\"navbar-brand\" href=\"#\"><strong>Material Landing</strong></a>\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarContent\" aria-controls=\"navbarContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button>\n          <div class=\"collapse navbar-collapse\" id=\"navbarContent\">\n            <ul class=\"navbar-nav ml-auto\">\n              <li class=\"nav-item\"><a class=\"nav-link active\" href=\"#about\">About</a></li>\n              <li class=\"nav-item\"><a class=\"nav-link\" href=\"#projects\">Projects</a></li>\n              <li class=\"nav-item\"><a class=\"nav-link\" href=\"#pricing\">Pricing</a></li>\n              <li class=\"nav-item\"><a class=\"nav-link\" href=\"#team\">Team</a></li>\n              <li class=\"nav-item\"><a class=\"nav-link\" href=\"#contact\">Contact</a></li>\n            </ul><a class=\"btn btn-primary btn-rounded my-0\" href=\"https://templateflip.com/templates/material-landing\" target=\"_blank\">Download</a>\n          </div>\n        </div>\n      </nav>\n      <!-- Intro Section-->\n      <section class=\"view hm-gradient\" id=\"intro\">\n        <div class=\"full-bg-img d-flex align-items-center\">\n          <div class=\"container\">\n            <div class=\"row no-gutters\">\n              <div class=\"col-md-10 col-lg-6 text-center text-md-left margins\">\n                <div class=\"white-text\">\n                  <div class=\"wow fadeInLeft\" data-wow-delay=\"0.3s\">\n                    <h1 class=\"h1-responsive font-bold mt-sm-5\">Your Success is Our Mission.</h1>\n                    <div class=\"h6\">\n                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt\n                      dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae\n                      iste.\n                    </div>\n                  </div><br>\n                  <div class=\"wow fadeInLeft\" data-wow-delay=\"0.3s\"><a class=\"btn btn-white dark-grey-text font-bold ml-0\" href=\"https://www.youtube.com/watch?v=60ItHLz5WEA\" target=\"_blank\"><i class=\"fa fa-play mr-1\"></i> View Demo</a><a class=\"btn btn-outline-white\" href=\"#\">Learn more</a></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n    </header>\n    <div id=\"content\">\n<section class=\"row no-gutters\" id=\"features\">\n  <div class=\"col-lg-3 col-md-6 col-sm-12 deep-purple lighten-1 text-white\">\n    <div class=\"p-5 text-center wow zoomIn\" data-wow-delay=\".1s\"><i class=\"fa fa-line-chart fa-2x\"></i>\n      <div class=\"h5 mt-3\">Agile Frameworks</div>\n      <p class=\"mt-5\">Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>\n    </div>\n  </div>\n  <div class=\"col-lg-3 col-md-6 purple lighten-1 text-white\">\n    <div class=\"p-5 text-center wow zoomIn\" data-wow-delay=\".3s\"><i class=\"fa fa-industry fa-2x\"></i>\n      <div class=\"h5 mt-3\">Corporate Strategy</div>\n      <p class=\"mt-5\">Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition</p>\n    </div>\n  </div>\n  <div class=\"col-lg-3 col-md-6 teal lighten-1 text-white\">\n    <div class=\"p-5 text-center wow zoomIn\" data-wow-delay=\".5s\"><i class=\"fa fa-users fa-2x\"></i>\n      <div class=\"h5 mt-3\"> Workplace Diversity</div>\n      <p class=\"mt-5\">Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>\n    </div>\n  </div>\n  <div class=\"col-lg-3 col-md-6 light-blue lighten-1 text-white\">\n    <div class=\"p-5 text-center wow zoomIn\" data-wow-delay=\".7s\"><i class=\"fa fa-bullhorn fa-2x\"></i>\n      <div class=\"h5 mt-3\"> Survival Strategies</div>\n      <p class=\"mt-5\">Bring to the table win-win survival strategies to ensure proactive domination.</p>\n    </div>\n  </div>\n</section>\n<section class=\"text-center py-5 grey lighten-4\" id=\"about\">\n  <div class=\"container\">\n    <div class=\"wow fadeIn\">\n      <h2 class=\"h1 pt-5 pb-3\">Why work with us?</h2>\n      <p class=\"px-5 mb-5 pb-3 lead blue-grey-text\">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n        aliqua. Ut enim ad minim veniam.\n      </p>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4 mb-r wow fadeInUp\" data-wow-delay=\".3s\"><i class=\"fa fa-dashboard fa-3x orange-text\"></i>\n        <h3 class=\"h4 mt-3\">Design</h3>\n        <p class=\"mt-3 blue-grey-text\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti\n          hic.\n        </p>\n      </div>\n      <div class=\"col-md-4 mb-r wow fadeInUp\" data-wow-delay=\".4s\"><i class=\"fa fa-comments-o fa-3x cyan-text\"></i>\n        <h3 class=\"h4 mt-3\">Feedback</h3>\n        <p class=\"mt-3 blue-grey-text\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti\n          hic.\n        </p>\n      </div>\n      <div class=\"col-md-4 mb-r wow fadeInUp\" data-wow-delay=\".5s\"><i class=\"fa fa-cubes fa-3x red-text\"></i>\n        <h3 class=\"h4 mt-3\">Execution</h3>\n        <p class=\"mt-3 blue-grey-text\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti\n          hic.\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"py-5\" id=\"projects\">\n  <div class=\"container\">\n    <div class=\"wow fadeIn\">\n      <h2 class=\"text-center h1 my-4\">Our best projects</h2>\n      <p class=\"px-5 mb-5 pb-3 lead blue-grey-text text-center\">\n        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n      </p>\n    </div>\n    <div class=\"row wow fadeInLeft\" data-wow-delay=\".3s\">\n      <div class=\"col-lg-6 col-xl-5 pr-lg-5 pb-5\"><img class=\"img-fluid rounded z-depth-2\" src=\"../../assets/img/kuala-lumpur.jpg\" alt=\"project image\"/></div>\n      <div class=\"col-lg-6 col-xl-7 pl-lg-5 pb-4\">\n        <div class=\"row mb-3\">\n          <div class=\"col-1 mr-1\"><i class=\"fa fa-book fa-2x cyan-text\"></i></div>\n          <div class=\"col-10\">\n            <h5 class=\"font-bold\">Education</h5>\n            <p class=\"grey-text\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda\n              voluptate velit.\n            </p>\n          </div>\n        </div>\n        <div class=\"row mb-3\">\n          <div class=\"col-1 mr-1\"><i class=\"fa fa-code fa-2x red-text\"></i></div>\n          <div class=\"col-10\">\n            <h5 class=\"font-bold\">Technology</h5>\n            <p class=\"grey-text\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda\n              voluptate velit.\n            </p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-1 mr-1\"><i class=\"fa fa-money fa-2x deep-purple-text\"></i></div>\n          <div class=\"col-10\">\n            <h5 class=\"font-bold\">Finance</h5>\n            <p class=\"grey-text\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda\n              voluptate velit.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <hr/>\n    <div class=\"row pt-5 wow fadeInRight\" data-wow-delay=\".3s\">\n      <div class=\"col-lg-6 col-xl-7 mb-3\">\n        <div class=\"row mb-3\">\n          <div class=\"col-1 mr-1\"><i class=\"fa fa-bar-chart fa-2x indigo-text\"></i></div>\n          <div class=\"col-10\">\n            <h5 class=\"font-bold\">Marketing</h5>\n            <p class=\"grey-text\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda\n              voluptate velit.\n            </p>\n          </div>\n        </div>\n        <div class=\"row mb-3\">\n          <div class=\"col-1 mr-1\"><i class=\"fa fa-music fa-2x pink-text\"></i></div>\n          <div class=\"col-10\">\n            <h5 class=\"font-bold\">Entertainment</h5>\n            <p class=\"grey-text\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda\n              voluptate velit.\n            </p>\n          </div>\n        </div>\n        <div class=\"row mb-3\">\n          <div class=\"col-1 mr-1\"><i class=\"fa fa-smile-o fa-2x blue-text\"></i></div>\n          <div class=\"col-10\">\n            <h5 class=\"font-bold\">Communication</h5>\n            <p class=\"grey-text\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda\n              voluptate velit.\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-6 col-xl-5 mb-3\"><img class=\"img-fluid rounded z-depth-2\" src=\"../../assets/img/san-francisco.jpg\" alt=\"project image\"/></div>\n    </div>\n  </div>\n</section>\n<section class=\"text-center py-5 indigo darken-1 text-white\" id=\"pricing\">\n  <div class=\"container\">\n    <div class=\"wow fadeIn\">\n      <h2 class=\"h1 pt-5 pb-3\">Our pricing plans</h2>\n      <p class=\"px-5 mb-5 pb-3 lead\">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi,\n        veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.\n      </p>\n    </div>\n    <div class=\"row wow zoomIn\">\n      <div class=\"col-lg-4 col-md-12 mb-r\">\n        <div class=\"card card-image\">\n          <div class=\"text-white text-center pricing-card d-flex align-items-center rgba-stylish-strong py-3 px-3 rounded\">\n            <div class=\"card-body\">\n              <div class=\"h5\">Individual</div>\n              <div class=\"py-5\"><sup class=\"display-4\">$</sup><span class=\"display-1\">9</span><span class=\"display-4\">/m</span></div>\n              <ul class=\"list-unstyled\">\n                <li>\n                  <p><strong>1</strong> person</p>\n                </li>\n                <li>\n                  <p><strong>10</strong> projects</p>\n                </li>\n                <li>\n                  <p><strong>100</strong> features</p>\n                </li>\n                <li>\n                  <p><strong>20GB</strong> storage</p>\n                </li>\n              </ul><a class=\"btn btn-outline-white mt-5\"> Buy now</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-12 mb-r\">\n        <div class=\"card card-image\">\n          <div class=\"text-white text-center pricing-card d-flex align-items-center rgba-teal-strong py-3 px-3 rounded\">\n            <div class=\"card-body\">\n              <div class=\"h5\">Startup</div>\n              <div class=\"py-5\"><sup class=\"display-4\">$</sup><span class=\"display-1\">29</span><span class=\"display-4\">/m</span></div>\n              <ul class=\"list-unstyled\">\n                <li>\n                  <p><strong>10</strong> person</p>\n                </li>\n                <li>\n                  <p><strong>100</strong> projects</p>\n                </li>\n                <li>\n                  <p><strong>200</strong> features</p>\n                </li>\n                <li>\n                  <p><strong>100GB</strong> storage</p>\n                </li>\n              </ul><a class=\"btn btn-outline-white mt-5\"> Buy now</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-12 mb-r\">\n        <div class=\"card card-image\">\n          <div class=\"text-white text-center pricing-card d-flex align-items-center rgba-red-strong py-3 px-3 rounded\">\n            <div class=\"card-body\">\n              <div class=\"h5\">Enterprise</div>\n              <div class=\"py-5\"><sup class=\"display-4\">$</sup><span class=\"display-1\">99</span><span class=\"display-4\">/m</span></div>\n              <ul class=\"list-unstyled\">\n                <li>\n                  <p><strong>10+</strong> person</p>\n                </li>\n                <li>\n                  <p><strong>Unlimited</strong> projects</p>\n                </li>\n                <li>\n                  <p><strong>Unlimited</strong> features</p>\n                </li>\n                <li>\n                  <p><strong>1TB</strong> storage</p>\n                </li>\n              </ul><a class=\"btn btn-outline-white mt-5\"> Buy now</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"py-5\" id=\"team\">\n  <div class=\"container\">\n    <div class=\"wow fadeIn\">\n      <h2 class=\"h1 pt-5 pb-3 text-center\">Our team members</h2>\n      <p class=\"px-5 mb-5 pb-3 lead text-center blue-grey-text\">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate\n        esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.\n      </p>\n    </div>\n    <div class=\"row mb-lg-4 center-on-small-only\">\n      <div class=\"col-lg-6 col-md-12 mb-r wow fadeInLeft\" data-wow-delay=\".3s\">\n        <div class=\"col-md-6 float-left\"><img class=\"img-fluid rounded z-depth-1 mb-3\" src=\"../../assets/img/woman-1.jpg\" alt=\"team member\"/></div>\n        <div class=\"col-md-6 float-right\">\n          <div class=\"h4\">Nicole West</div>\n          <h6 class=\"font-bold blue-grey-text mb-4\">Lead Designer</h6>\n          <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.</p><a href=\"https://twitter.com\" target=\"_blank\"><i class=\"fa fa-twitter\"></i><span class=\"ml-1\">@nicolewest</span></a>\n        </div>\n      </div>\n      <div class=\"col-lg-6 col-md-12 mb-r wow fadeInRight\" data-wow-delay=\".3s\">\n        <div class=\"col-md-6 float-left\"><img class=\"img-fluid rounded z-depth-1 mb-3\" src=\"../../assets/img/woman-2.jpg\" alt=\"team member\"/></div>\n        <div class=\"col-md-6 float-right\">\n          <div class=\"h4\">Hannah Cruz</div>\n          <h6 class=\"font-bold blue-grey-text mb-4\">Photographer</h6>\n          <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.</p><a href=\"https://twitter.com\" target=\"_blank\"><i class=\"fa fa-twitter\"></i><span class=\"ml-1\">@hannahcruz</span></a>\n        </div>\n      </div>\n    </div>\n    <div class=\"row center-on-small-only\">\n      <div class=\"col-lg-6 col-md-12 mb-r wow fadeInLeft\" data-wow-delay=\".3s\">\n        <div class=\"col-md-6 float-left\"><img class=\"img-fluid rounded z-depth-1 mb-3\" src=\"../../assets/img/man-1.jpg\" alt=\"team member\"/></div>\n        <div class=\"col-md-6 float-right\">\n          <div class=\"h4\">Mark Hall</div>\n          <h6 class=\"font-bold blue-grey-text mb-4\">Web Developer</h6>\n          <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.</p><a href=\"https://twitter.com\" target=\"_blank\"><i class=\"fa fa-twitter\"></i><span class=\"ml-1\">@markhall</span></a>\n        </div>\n      </div>\n      <div class=\"col-lg-6 col-md-12 mb-r wow fadeInRight\" data-wow-delay=\".3s\">\n        <div class=\"col-md-6 float-left\"><img class=\"img-fluid rounded z-depth-1 mb-3\" src=\"../../assets/img/man-2.jpg\" alt=\"team member\"/></div>\n        <div class=\"col-md-6 float-right\">\n          <div class=\"h4\">Vincent Harris</div>\n          <h6 class=\"font-bold blue-grey-text mb-4\">Web Developer</h6>\n          <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.</p><a href=\"https://twitter.com\" target=\"_blank\"><i class=\"fa fa-twitter\"></i><span class=\"ml-1\">@vincentharris</span></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section id=\"contact\" style=\"background-image:url('../../assets/img/panorama-3094696_1920.jpg');\">\n  <div class=\"rgba-black-strong py-5\">\n    <div class=\"container\">\n      <div class=\"wow fadeIn\">\n        <h2 class=\"h1 text-white pt-5 pb-3 text-center\">Contact us</h2>\n        <p class=\"text-white px-5 mb-5 pb-3 lead text-center\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate\n          esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.\n        </p>\n      </div>\n      <div class=\"card mb-5 wow fadeInUp\" data-wow-delay=\".4s\">\n        <div class=\"card-body p-5\">\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n              <form action=\"https://formspree.io/youremail@example.com\" method=\"POST\">\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"md-form\">\n                      <input class=\"form-control\" id=\"name\" type=\"text\" name=\"name\" required=\"required\"/>\n                      <label for=\"name\">Your name</label>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"md-form\">\n                      <input class=\"form-control\" id=\"email\" type=\"text\" name=\"_replyto\" required=\"required\"/>\n                      <label for=\"email\">Your email</label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"md-form\">\n                      <input class=\"form-control\" id=\"subject\" type=\"text\" name=\"subject\" required=\"required\"/>\n                      <label for=\"subject\">Subject</label>\n                    </div>\n                  </div>\n                  <div class=\"col-md-12\">\n                    <div class=\"md-form\">\n                      <textarea class=\"md-textarea\" id=\"message\" name=\"message\" required=\"required\"></textarea>\n                      <label for=\"message\">Your message</label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"center-on-small-only mb-4\">\n                  <button class=\"btn btn-indigo ml-0\" type=\"submit\"><i class=\"fa fa-paper-plane-o mr-2\"></i> Send</button>\n                </div>\n              </form>\n            </div>\n            <div class=\"col-md-4\">\n              <ul class=\"list-unstyled text-center\">\n                <li class=\"mt-4\"><i class=\"fa fa-map-marker indigo-text fa-2x\"></i>\n                  <p class=\"mt-2\">140, City Center, New York, U.S.A</p>\n                </li>\n                <li class=\"mt-4\"><i class=\"fa fa-phone indigo-text fa-2x\"></i>\n                  <p class=\"mt-2\">+ 01 234 567 89</p>\n                </li>\n                <li class=\"mt-4\"><i class=\"fa fa-envelope indigo-text fa-2x\"></i>\n                  <p class=\"mt-2\">contact@company.com</p>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section></div>\n    <footer class=\"page-footer indigo darken-2 center-on-small-only pt-0 mt-0\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"mb-5 flex-center\"><a class=\"px-3\"><i class=\"fa fa-facebook fa-lg white-text\"></i></a><a class=\"px-3\"><i class=\"fa fa-twitter fa-lg white-text\"></i></a><a class=\"px-3\"><i class=\"fa fa-google-plus fa-lg white-text\"></i></a><a class=\"px-3\"><i class=\"fa fa-linkedin fa-lg white-text\"></i></a></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"footer-copyright\">\n        <div class=\"container-fluid\">\n          <p>&copy; <a href=\"/\">Material Landing</a> - Design: <a href=\"https://templateflip.com/\" target=\"_blank\">TemplateFlip</a></p>\n        </div>\n      </div>\n    </footer>\n    <script type=\"text/javascript\" src=\"../../assets/js/jquery-3.2.1.min.js\"></script>\n    <script type=\"text/javascript\" src=\"../../assets/js/popper.min.js\"></script>\n    <script type=\"text/javascript\" src=\"../../assets/js/bootstrap.min.js\"></script>\n    <script type=\"text/javascript\" src=\"../../assets/js/mdb.min.js\"></script>\n    <script>new WOW().init();</script>\n  </body>\n</html>";
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


    var _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./landing/landing.component */
    "./src/app/landing/landing.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth/login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth/signup/signup.component */
    "./src/app/auth/signup/signup.component.ts");
    /* harmony import */


    var _auth_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./auth/forget-password/forget-password.component */
    "./src/app/auth/forget-password/forget-password.component.ts");

    var routes = [{
      path: "",
      component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"]
    }, {
      path: "dashboard",
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
    }, {
      path: "login",
      component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }, {
      path: "signup",
      component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]
    }, {
      path: "forget-password",
      component: _auth_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgetPasswordComponent"]
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
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
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


    var wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! wowjs/dist/wow.min */
    "./node_modules/wowjs/dist/wow.min.js");
    /* harmony import */


    var wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__);

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'ArWOS';
        this.wow = new wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__["WOW"]();
      }

      _createClass(AppComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.wow.init();
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
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


    var ngx_wow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-wow */
    "./node_modules/ngx-wow/esm2015/ngx-wow.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./landing/landing.component */
    "./src/app/landing/landing.component.ts");
    /* harmony import */


    var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./auth/login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./auth/signup/signup.component */
    "./src/app/auth/signup/signup.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _auth_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./auth/forget-password/forget-password.component */
    "./src/app/auth/forget-password/forget-password.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], _auth_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_10__["ForgetPasswordComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], ngx_wow__WEBPACK_IMPORTED_MODULE_3__["NgwWowModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["MDBBootstrapModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/forget-password/forget-password.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/auth/forget-password/forget-password.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthForgetPasswordForgetPasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */";
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
      /*! ./forget-password.component.css */
      "./src/app/auth/forget-password/forget-password.component.css"))["default"]]
    })], ForgetPasswordComponent);
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.css":
  /*!************************************************!*\
    !*** ./src/app/auth/login/login.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".myContainer {\r\n    width: 70%;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n  }\r\n  .error-message, .success-message{\r\n    top: 50px!important;\r\n  }\r\n  @media (min-width: 1281px) {\r\n  \r\n  \r\n    .myContainer {\r\n        width: 50% !important;\r\n    }  \r\n  }\r\n  /* \r\n    ##Device = Laptops, Desktops\r\n    ##Screen = B/w 1025px to 1280px\r\n  */\r\n  @media (min-width: 1025px) and (max-width: 1280px) {\r\n    \r\n    .myContainer {\r\n        width: 50% !important;\r\n    }\r\n    \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBRUE7OztJQUdFO1FBQ0kscUJBQXFCO0lBQ3pCO0VBQ0Y7RUFFQTs7O0dBR0M7RUFFRDs7SUFFRTtRQUNJLHFCQUFxQjtJQUN6Qjs7RUFFRiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teUNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIH1cclxuICAuZXJyb3ItbWVzc2FnZSwgLnN1Y2Nlc3MtbWVzc2FnZXtcclxuICAgIHRvcDogNTBweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MXB4KSB7XHJcbiAgXHJcbiAgXHJcbiAgICAubXlDb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIH0gIFxyXG4gIH1cclxuICBcclxuICAvKiBcclxuICAgICMjRGV2aWNlID0gTGFwdG9wcywgRGVza3RvcHNcclxuICAgICMjU2NyZWVuID0gQi93IDEwMjVweCB0byAxMjgwcHhcclxuICAqL1xyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIFxyXG4gICAgLm15Q29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICB9Il19 */";
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
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(formBuilder) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.disabledSubmitButton = true;
        this.submitted = false;
        this.contactForm = formBuilder.group({
          'contactFormName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          'contactFormPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(LoginComponent, [{
        key: "oninput",
        value: function oninput() {
          if (this.contactForm.valid) {
            this.disabledSubmitButton = false;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        // get subjects() {
        //   return this.contactForm.get('contactFormSubjects');
        // }
        // get message() {
        //   return this.contactForm.get('contactFormMessage');
        // }
        // get copy() {
        //   return this.contactForm.get('contactFormCopy');
        // }
        value: function onSubmit() {
          console.log("form submitted"); // this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
          //   alert('Your message has been sent.');
          //   this.contactForm.reset();

          this.disabledSubmitButton = true; // }, (error: any) => {
          //   console.log('Error', error);
          // });
        }
      }, {
        key: "name",
        get: function get() {
          return this.contactForm.get('contactFormName');
        }
      }, {
        key: "email",
        get: function get() {
          return this.contactForm.get('contactFormPassword');
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input')], LoginComponent.prototype, "oninput", null);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/auth/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/auth/signup/signup.component.css":
  /*!**************************************************!*\
    !*** ./src/app/auth/signup/signup.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthSignupSignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".myContainer {\r\n    width: 70%;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n  }\r\n  .error-message, .success-message{\r\n    top: 50px!important;\r\n  }\r\n  @media (min-width: 1281px) {\r\n  \r\n  \r\n    .myContainer {\r\n        width: 50% !important;\r\n    }  \r\n  }\r\n  /* \r\n    ##Device = Laptops, Desktops\r\n    ##Screen = B/w 1025px to 1280px\r\n  */\r\n  @media (min-width: 1025px) and (max-width: 1280px) {\r\n    \r\n    .myContainer {\r\n        width: 50% !important;\r\n    }\r\n    \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFFQTs7O0lBR0U7UUFDSSxxQkFBcUI7SUFDekI7RUFDRjtFQUVBOzs7R0FHQztFQUVEOztJQUVFO1FBQ0kscUJBQXFCO0lBQ3pCOztFQUVGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlDb250YWluZXIge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB9XHJcbiAgLmVycm9yLW1lc3NhZ2UsIC5zdWNjZXNzLW1lc3NhZ2V7XHJcbiAgICB0b3A6IDUwcHghaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyODFweCkge1xyXG4gIFxyXG4gIFxyXG4gICAgLm15Q29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICB9ICBcclxuICB9XHJcbiAgXHJcbiAgLyogXHJcbiAgICAjI0RldmljZSA9IExhcHRvcHMsIERlc2t0b3BzXHJcbiAgICAjI1NjcmVlbiA9IEIvdyAxMDI1cHggdG8gMTI4MHB4XHJcbiAgKi9cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICBcclxuICAgIC5teUNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfSJdfQ== */";
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
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(formBuilder) {
        _classCallCheck(this, SignupComponent);

        this.formBuilder = formBuilder;
        this.disabledSubmitButton = true;
        this.submitted = false;
        this.contactForm = formBuilder.group({
          'contactFormName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          'contactFormPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(SignupComponent, [{
        key: "oninput",
        value: function oninput() {
          if (this.contactForm.valid) {
            this.disabledSubmitButton = false;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        // get subjects() {
        //   return this.contactForm.get('contactFormSubjects');
        // }
        // get message() {
        //   return this.contactForm.get('contactFormMessage');
        // }
        // get copy() {
        //   return this.contactForm.get('contactFormCopy');
        // }
        value: function onSubmit() {
          console.log("form submitted"); // this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
          //   alert('Your message has been sent.');
          //   this.contactForm.reset();

          this.disabledSubmitButton = true; // }, (error: any) => {
          //   console.log('Error', error);
          // });
        }
      }, {
        key: "name",
        get: function get() {
          return this.contactForm.get('contactFormName');
        }
      }, {
        key: "email",
        get: function get() {
          return this.contactForm.get('contactFormPassword');
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input')], SignupComponent.prototype, "oninput", null);
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.css */
      "./src/app/auth/signup/signup.component.css"))["default"]]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.css":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@-webkit-keyframes swing {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    10% {\r\n      transform: rotate(10deg);\r\n    }\r\n    30% {\r\n      transform: rotate(0deg);\r\n    }\r\n    40% {\r\n      transform: rotate(-10deg);\r\n    }\r\n    50% {\r\n      transform: rotate(0deg);\r\n    }\r\n    60% {\r\n      transform: rotate(5deg);\r\n    }\r\n    70% {\r\n      transform: rotate(0deg);\r\n    }\r\n    80% {\r\n      transform: rotate(-5deg);\r\n    }\r\n    100% {\r\n      transform: rotate(0deg);\r\n    }\r\n  }\r\n  \r\n  @keyframes swing {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    10% {\r\n      transform: rotate(10deg);\r\n    }\r\n    30% {\r\n      transform: rotate(0deg);\r\n    }\r\n    40% {\r\n      transform: rotate(-10deg);\r\n    }\r\n    50% {\r\n      transform: rotate(0deg);\r\n    }\r\n    60% {\r\n      transform: rotate(5deg);\r\n    }\r\n    70% {\r\n      transform: rotate(0deg);\r\n    }\r\n    80% {\r\n      transform: rotate(-5deg);\r\n    }\r\n    100% {\r\n      transform: rotate(0deg);\r\n    }\r\n  }\r\n  \r\n  @-webkit-keyframes sonar {\r\n    0% {\r\n      transform: scale(0.9);\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      transform: scale(2);\r\n      opacity: 0;\r\n    }\r\n  }\r\n  \r\n  @keyframes sonar {\r\n    0% {\r\n      transform: scale(0.9);\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      transform: scale(2);\r\n      opacity: 0;\r\n    }\r\n  }\r\n  \r\n  body {\r\n    font-size: 0.9rem;\r\n  }\r\n  \r\n  .page-wrapper .sidebar-wrapper,\r\n  .sidebar-wrapper .sidebar-brand > a,\r\n  .sidebar-wrapper .sidebar-dropdown > a:after,\r\n  .sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a:before,\r\n  .sidebar-wrapper ul li a i,\r\n  .page-wrapper .page-content,\r\n  .sidebar-wrapper .sidebar-search input.search-menu,\r\n  .sidebar-wrapper .sidebar-search .input-group-text,\r\n  .sidebar-wrapper .sidebar-menu ul li a,\r\n  #show-sidebar,\r\n  #close-sidebar {\r\n    transition: all 0.3s ease;\r\n  }\r\n  \r\n  /*----------------page-wrapper----------------*/\r\n  \r\n  .page-wrapper {\r\n    height: 100vh;\r\n  }\r\n  \r\n  .page-wrapper .theme {\r\n    width: 40px;\r\n    height: 40px;\r\n    display: inline-block;\r\n    border-radius: 4px;\r\n    margin: 2px;\r\n  }\r\n  \r\n  .page-wrapper .theme.chiller-theme {\r\n    background: #1e2229;\r\n  }\r\n  \r\n  /*----------------toggeled sidebar----------------*/\r\n  \r\n  .page-wrapper.toggled .sidebar-wrapper {\r\n    left: 0px;\r\n  }\r\n  \r\n  @media screen and (min-width: 768px) {\r\n    .page-wrapper.toggled .page-content {\r\n      padding-left: 300px;\r\n    }\r\n  }\r\n  \r\n  /*----------------show sidebar button----------------*/\r\n  \r\n  #show-sidebar {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 10px;\r\n    border-radius: 0 4px 4px 0px;\r\n    width: 35px;\r\n    transition-delay: 0.3s;\r\n  }\r\n  \r\n  .page-wrapper.toggled #show-sidebar {\r\n    left: -40px;\r\n  }\r\n  \r\n  /*----------------sidebar-wrapper----------------*/\r\n  \r\n  .sidebar-wrapper {\r\n    width: 260px;\r\n    height: 100%;\r\n    max-height: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    left: -300px;\r\n    z-index: 999;\r\n  }\r\n  \r\n  .sidebar-wrapper ul {\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  \r\n  .sidebar-wrapper a {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  /*----------------sidebar-content----------------*/\r\n  \r\n  .sidebar-content {\r\n    max-height: calc(100% - 30px);\r\n    height: calc(100% - 30px);\r\n    overflow-y: auto;\r\n    position: relative;\r\n  }\r\n  \r\n  .sidebar-content.desktop {\r\n    overflow-y: hidden;\r\n  }\r\n  \r\n  /*--------------------sidebar-brand----------------------*/\r\n  \r\n  .sidebar-wrapper .sidebar-brand {\r\n    padding: 10px 20px;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  \r\n  .sidebar-wrapper .sidebar-brand > a {\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    flex-grow: 1;\r\n  }\r\n  \r\n  .sidebar-wrapper .sidebar-brand #close-sidebar {\r\n    cursor: pointer;\r\n    font-size: 20px;\r\n  }\r\n  \r\n  /*--------------------sidebar-header----------------------*/\r\n  \r\n  .sidebar-wrapper .sidebar-header {\r\n    padding: 20px;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .sidebar-wrapper .sidebar-header .user-pic {\r\n    float: left;\r\n    width: 60px;\r\n    padding: 2px;\r\n    border-radius: 12px;\r\n    margin-right: 15px;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .sidebar-wrapper .sidebar-header .user-pic img {\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n  \r\n  .sidebar-wrapper .sidebar-header .user-info {\r\n    float: left;\r\n  }\r\n  \r\n  .sidebar-wrapper .sidebar-header .user-info > span {\r\n    display: block;\r\n  }\r\n  \r\n  .sidebar-wrapper .sidebar-header .user-info .user-role {\r\n    font-size: 12px;\r\n  }\r\n  \r\n  .sidebar-wrapper .sidebar-header .user-info .user-status {\r\n    font-size: 11px;\r\n    margin-top: 4px;\r\n  }\r\n  \r\n  .sidebar-wrapper .sidebar-header .user-info .user-status i {\r\n    font-size: 8px;\r\n    margin-right: 4px;\r\n    color: #5cb85c;\r\n  }\r\n  \r\n  /*-----------------------sidebar-search------------------------*/\r\n  \r\n  .sidebar-wrapper .sidebar-search > div {\r\n    padding: 10px 20px;\r\n  }\r\n  \r\n  /*----------------------sidebar-menu-------------------------*/\r\n  \r\n  .sidebar-wrapper .sidebar-menu {\r\n    padding-bottom: 10px;\r\n  }\r\n  \r\n  .sidebar-wrapper .sidebar-menu .header-menu span {\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n    padding: 15px 20px 5px 20px;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .sidebar-wrapper .sidebar-menu ul li a {\r\n    display: inline-block;\r\n    width: 100%;\r\n    text-decoration: none;\r\n    position: relative;\r\n    padding: 8px 30px 8px 20px;\r\n  }\r\n  \r\n  .sidebar-wrapper .sidebar-menu ul li a i {\r\n    margin-right: 10px;\r\n    font-size: 12px;\r\n    width: 30px;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    text-align: center;\r\n    border-radius: 4px;\r\n  }\r\n  \r\n  .sidebar-wrapper .sidebar-menu ul li a:hover > i::before {\r\n    display: inline-block;\r\n    -webkit-animation: swing ease-in-out 0.5s 1 alternate;\r\n            animation: swing ease-in-out 0.5s 1 alternate;\r\n  }\r\n  \r\n  .sidebar-wrapper .sidebar-menu .sidebar-dropdown > a:after {\r\n    font-family: \"Font Awesome 5 Free\";\r\n    font-weight: 900;\r\n    content: \"\\f105\";\r\n    font-style: normal;\r\n    display: inline-block;\r\n    font-style: normal;\r\n    font-variant: normal;\r\n    text-rendering: auto;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    text-align: center;\r\n    background: 0 0;\r\n    position: absolute;\r\n    right: 15px;\r\n    top: 14px;\r\n  }\r\n  \r\n  .sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu ul {\r\n    padding: 5px 0;\r\n  }\r\n  \r\n  .sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li {\r\n    padding-left: 25px;\r\n    font-size: 13px;\r\n  }\r\n  \r\n  .sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a:before {\r\n    content: \"\\f111\";\r\n    font-family: \"Font Awesome 5 Free\";\r\n    font-weight: 400;\r\n    font-style: normal;\r\n    display: inline-block;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    margin-right: 10px;\r\n    font-size: 8px;\r\n  }\r\n  \r\n  .sidebar-wrapper .sidebar-menu ul li a span.label,\r\n  .sidebar-wrapper .sidebar-menu ul li a span.badge {\r\n    float: right;\r\n    margin-top: 8px;\r\n    margin-left: 5px;\r\n  }\r\n  \r\n  .sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a .badge,\r\n  .sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a .label {\r\n    float: right;\r\n    margin-top: 0px;\r\n  }\r\n  \r\n  .sidebar-wrapper .sidebar-menu .sidebar-submenu {\r\n    display: none;\r\n  }\r\n  \r\n  .sidebar-wrapper .sidebar-menu .sidebar-dropdown.active > a:after {\r\n    transform: rotate(90deg);\r\n    right: 17px;\r\n  }\r\n  \r\n  /*--------------------------side-footer------------------------------*/\r\n  \r\n  .sidebar-footer {\r\n    position: absolute;\r\n    width: 100%;\r\n    bottom: 0;\r\n    display: flex;\r\n  }\r\n  \r\n  .sidebar-footer > a {\r\n    flex-grow: 1;\r\n    text-align: center;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    position: relative;\r\n  }\r\n  \r\n  .sidebar-footer > a .notification {\r\n    position: absolute;\r\n    top: 0;\r\n  }\r\n  \r\n  .badge-sonar {\r\n    display: inline-block;\r\n    background: #980303;\r\n    border-radius: 50%;\r\n    height: 8px;\r\n    width: 8px;\r\n    position: absolute;\r\n    top: 0;\r\n  }\r\n  \r\n  .badge-sonar:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    border: 2px solid #980303;\r\n    opacity: 0;\r\n    border-radius: 50%;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-animation: sonar 1.5s infinite;\r\n            animation: sonar 1.5s infinite;\r\n  }\r\n  \r\n  /*--------------------------page-content-----------------------------*/\r\n  \r\n  .page-wrapper .page-content {\r\n    display: inline-block;\r\n    width: 100%;\r\n    padding-left: 0px;\r\n    padding-top: 20px;\r\n  }\r\n  \r\n  .page-wrapper .page-content > div {\r\n    padding: 20px 40px;\r\n  }\r\n  \r\n  .page-wrapper .page-content {\r\n    overflow-x: hidden;\r\n  }\r\n  \r\n  /*------scroll bar---------------------*/\r\n  \r\n  ::-webkit-scrollbar {\r\n    width: 5px;\r\n    height: 7px;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-button {\r\n    width: 0px;\r\n    height: 0px;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb {\r\n    background: #525965;\r\n    border: 0px none #ffffff;\r\n    border-radius: 0px;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb:hover {\r\n    background: #525965;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb:active {\r\n    background: #525965;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-track {\r\n    background: transparent;\r\n    border: 0px none #ffffff;\r\n    border-radius: 50px;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-track:hover {\r\n    background: transparent;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-track:active {\r\n    background: transparent;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-corner {\r\n    background: transparent;\r\n  }\r\n  \r\n  /*-----------------------------chiller-theme-------------------------------------------------*/\r\n  \r\n  .chiller-theme .sidebar-wrapper {\r\n      background: #31353D;\r\n  }\r\n  \r\n  .chiller-theme .sidebar-wrapper .sidebar-header,\r\n  .chiller-theme .sidebar-wrapper .sidebar-search,\r\n  .chiller-theme .sidebar-wrapper .sidebar-menu {\r\n      border-top: 1px solid #3a3f48;\r\n  }\r\n  \r\n  .chiller-theme .sidebar-wrapper .sidebar-search input.search-menu,\r\n  .chiller-theme .sidebar-wrapper .sidebar-search .input-group-text {\r\n      border-color: transparent;\r\n      box-shadow: none;\r\n  }\r\n  \r\n  .chiller-theme .sidebar-wrapper .sidebar-header .user-info .user-role,\r\n  .chiller-theme .sidebar-wrapper .sidebar-header .user-info .user-status,\r\n  .chiller-theme .sidebar-wrapper .sidebar-search input.search-menu,\r\n  .chiller-theme .sidebar-wrapper .sidebar-search .input-group-text,\r\n  .chiller-theme .sidebar-wrapper .sidebar-brand>a,\r\n  .chiller-theme .sidebar-wrapper .sidebar-menu ul li a,\r\n  .chiller-theme .sidebar-footer>a {\r\n      color: #818896;\r\n  }\r\n  \r\n  .chiller-theme .sidebar-wrapper .sidebar-menu ul li:hover>a,\r\n  .chiller-theme .sidebar-wrapper .sidebar-menu .sidebar-dropdown.active>a,\r\n  .chiller-theme .sidebar-wrapper .sidebar-header .user-info,\r\n  .chiller-theme .sidebar-wrapper .sidebar-brand>a:hover,\r\n  .chiller-theme .sidebar-footer>a:hover i {\r\n      color: #b8bfce;\r\n  }\r\n  \r\n  .page-wrapper.chiller-theme.toggled #close-sidebar {\r\n      color: #bdbdbd;\r\n  }\r\n  \r\n  .page-wrapper.chiller-theme.toggled #close-sidebar:hover {\r\n      color: #ffffff;\r\n  }\r\n  \r\n  .chiller-theme .sidebar-wrapper ul li:hover a i,\r\n  .chiller-theme .sidebar-wrapper .sidebar-dropdown .sidebar-submenu li a:hover:before,\r\n  .chiller-theme .sidebar-wrapper .sidebar-search input.search-menu:focus+span,\r\n  .chiller-theme .sidebar-wrapper .sidebar-menu .sidebar-dropdown.active a i {\r\n      color: #16c7ff;\r\n      text-shadow:0px 0px 10px rgba(22, 199, 255, 0.5);\r\n  }\r\n  \r\n  .chiller-theme .sidebar-wrapper .sidebar-menu ul li a i,\r\n  .chiller-theme .sidebar-wrapper .sidebar-menu .sidebar-dropdown div,\r\n  .chiller-theme .sidebar-wrapper .sidebar-search input.search-menu,\r\n  .chiller-theme .sidebar-wrapper .sidebar-search .input-group-text {\r\n      background: #3a3f48;\r\n  }\r\n  \r\n  .chiller-theme .sidebar-wrapper .sidebar-menu .header-menu span {\r\n      color: #6c7b88;\r\n  }\r\n  \r\n  .chiller-theme .sidebar-footer {\r\n      background: #3a3f48;\r\n      box-shadow: 0px -1px 5px #282c33;\r\n      border-top: 1px solid #464a52;\r\n  }\r\n  \r\n  .chiller-theme .sidebar-footer>a:first-child {\r\n      border-left: none;\r\n  }\r\n  \r\n  .chiller-theme .sidebar-footer>a:last-child {\r\n      border-right: none;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7TUFDRSx1QkFBdUI7SUFDekI7SUFDQTtNQUNFLHdCQUF3QjtJQUMxQjtJQUNBO01BQ0UsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSx5QkFBeUI7SUFDM0I7SUFDQTtNQUNFLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSx1QkFBdUI7SUFDekI7SUFDQTtNQUNFLHdCQUF3QjtJQUMxQjtJQUNBO01BQ0UsdUJBQXVCO0lBQ3pCO0VBQ0Y7O0VBNUJGO0lBQ0k7TUFDRSx1QkFBdUI7SUFDekI7SUFDQTtNQUNFLHdCQUF3QjtJQUMxQjtJQUNBO01BQ0UsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSx5QkFBeUI7SUFDM0I7SUFDQTtNQUNFLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSx1QkFBdUI7SUFDekI7SUFDQTtNQUNFLHdCQUF3QjtJQUMxQjtJQUNBO01BQ0UsdUJBQXVCO0lBQ3pCO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLHFCQUFxQjtNQUNyQixVQUFVO0lBQ1o7SUFDQTtNQUNFLG1CQUFtQjtNQUNuQixVQUFVO0lBQ1o7RUFDRjs7RUFUQTtJQUNFO01BQ0UscUJBQXFCO01BQ3JCLFVBQVU7SUFDWjtJQUNBO01BQ0UsbUJBQW1CO01BQ25CLFVBQVU7SUFDWjtFQUNGOztFQUNBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUNBOzs7Ozs7Ozs7OztJQWVFLHlCQUF5QjtFQUMzQjs7RUFFQSwrQ0FBK0M7O0VBRS9DO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQSxtREFBbUQ7O0VBRW5EO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0U7TUFDRSxtQkFBbUI7SUFDckI7RUFDRjs7RUFDQSxzREFBc0Q7O0VBQ3REO0lBQ0UsZUFBZTtJQUNmLE9BQU87SUFDUCxTQUFTO0lBQ1QsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxzQkFBc0I7RUFDeEI7O0VBQ0E7SUFDRSxXQUFXO0VBQ2I7O0VBQ0Esa0RBQWtEOztFQUVsRDtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixNQUFNO0lBQ04sWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsU0FBUztFQUNYOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBLGtEQUFrRDs7RUFFbEQ7SUFDRSw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUEsMERBQTBEOztFQUUxRDtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZUFBZTtFQUNqQjs7RUFDQSwyREFBMkQ7O0VBRTNEO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7RUFFQSxnRUFBZ0U7O0VBRWhFO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBLDhEQUE4RDs7RUFFOUQ7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLHFEQUE2QztZQUE3Qyw2Q0FBNkM7RUFDL0M7O0VBRUE7SUFDRSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG1DQUFtQztJQUNuQyxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixtQ0FBbUM7SUFDbkMsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCOztFQUVBOztJQUVFLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBOztJQUVFLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLFdBQVc7RUFDYjs7RUFFQSxzRUFBc0U7O0VBRXRFO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0VBQ1I7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixNQUFNO0VBQ1I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBOEI7WUFBOUIsOEJBQThCO0VBQ2hDOztFQUVBLHNFQUFzRTs7RUFFdEU7SUFDRSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUEsd0NBQXdDOztFQUV4QztJQUNFLFVBQVU7SUFDVixXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxVQUFVO0lBQ1YsV0FBVztFQUNiOztFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7O0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7O0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtFQUNyQjs7RUFDQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFDQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFDQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFHQSw4RkFBOEY7O0VBRTlGO01BQ0ksbUJBQW1CO0VBQ3ZCOztFQUVBOzs7TUFHSSw2QkFBNkI7RUFDakM7O0VBRUE7O01BRUkseUJBQXlCO01BQ3pCLGdCQUFnQjtFQUNwQjs7RUFFQTs7Ozs7OztNQU9JLGNBQWM7RUFDbEI7O0VBRUE7Ozs7O01BS0ksY0FBYztFQUNsQjs7RUFFQTtNQUNJLGNBQWM7RUFDbEI7O0VBRUE7TUFDSSxjQUFjO0VBQ2xCOztFQUVBOzs7O01BSUksY0FBYztNQUNkLGdEQUFnRDtFQUNwRDs7RUFFQTs7OztNQUlJLG1CQUFtQjtFQUN2Qjs7RUFFQTtNQUNJLGNBQWM7RUFDbEI7O0VBRUE7TUFDSSxtQkFBbUI7TUFDbkIsZ0NBQWdDO01BQ2hDLDZCQUE2QjtFQUNqQzs7RUFFQTtNQUNJLGlCQUFpQjtFQUNyQjs7RUFFQTtNQUNJLGtCQUFrQjtFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgc3dpbmcge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcclxuICAgIH1cclxuICAgIDMwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgNDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgNjAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XHJcbiAgICB9XHJcbiAgICA3MCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDgwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzb25hciB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBib2R5IHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxuICAucGFnZS13cmFwcGVyIC5zaWRlYmFyLXdyYXBwZXIsXHJcbiAgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1icmFuZCA+IGEsXHJcbiAgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1kcm9wZG93biA+IGE6YWZ0ZXIsXHJcbiAgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIC5zaWRlYmFyLXN1Ym1lbnUgbGkgYTpiZWZvcmUsXHJcbiAgLnNpZGViYXItd3JhcHBlciB1bCBsaSBhIGksXHJcbiAgLnBhZ2Utd3JhcHBlciAucGFnZS1jb250ZW50LFxyXG4gIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51LFxyXG4gIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIC5pbnB1dC1ncm91cC10ZXh0LFxyXG4gIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaSBhLFxyXG4gICNzaG93LXNpZGViYXIsXHJcbiAgI2Nsb3NlLXNpZGViYXIge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICB9XHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tcGFnZS13cmFwcGVyLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgXHJcbiAgLnBhZ2Utd3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuICBcclxuICAucGFnZS13cmFwcGVyIC50aGVtZSB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gIH1cclxuICBcclxuICAucGFnZS13cmFwcGVyIC50aGVtZS5jaGlsbGVyLXRoZW1lIHtcclxuICAgIGJhY2tncm91bmQ6ICMxZTIyMjk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLXRvZ2dlbGVkIHNpZGViYXItLS0tLS0tLS0tLS0tLS0tKi9cclxuICBcclxuICAucGFnZS13cmFwcGVyLnRvZ2dsZWQgLnNpZGViYXItd3JhcHBlciB7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAucGFnZS13cmFwcGVyLnRvZ2dsZWQgLnBhZ2UtY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMzAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLXNob3cgc2lkZWJhciBidXR0b24tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAjc2hvdy1zaWRlYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMHB4O1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xyXG4gIH1cclxuICAucGFnZS13cmFwcGVyLnRvZ2dsZWQgI3Nob3ctc2lkZWJhciB7XHJcbiAgICBsZWZ0OiAtNDBweDtcclxuICB9XHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tc2lkZWJhci13cmFwcGVyLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgXHJcbiAgLnNpZGViYXItd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMjYwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogLTMwMHB4O1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhci13cmFwcGVyIHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyLXdyYXBwZXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLXNpZGViYXItY29udGVudC0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIFxyXG4gIC5zaWRlYmFyLWNvbnRlbnQge1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItY29udGVudC5kZXNrdG9wIHtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLXNpZGViYXItYnJhbmQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICBcclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWJyYW5kIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWJyYW5kID4gYSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItYnJhbmQgI2Nsb3NlLXNpZGViYXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tc2lkZWJhci1oZWFkZXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICBcclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLnVzZXItcGljIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLnVzZXItcGljIGltZyB7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciAudXNlci1pbmZvIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciAudXNlci1pbmZvID4gc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLnVzZXItaW5mbyAudXNlci1yb2xlIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLnVzZXItaW5mbyAudXNlci1zdGF0dXMge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciAudXNlci1pbmZvIC51c2VyLXN0YXR1cyBpIHtcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICBjb2xvcjogIzVjYjg1YztcclxuICB9XHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXNpZGViYXItc2VhcmNoLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICBcclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCA+IGRpdiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXNpZGViYXItbWVudS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIFxyXG4gIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5oZWFkZXItbWVudSBzcGFuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMTVweCAyMHB4IDVweCAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDhweCAzMHB4IDhweCAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSBpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaSBhOmhvdmVyID4gaTo6YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGFuaW1hdGlvbjogc3dpbmcgZWFzZS1pbi1vdXQgMC41cyAxIGFsdGVybmF0ZTtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duID4gYTphZnRlciB7XHJcbiAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29udGVudDogXCJcXGYxMDVcIjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAwIDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHRvcDogMTRweDtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIC5zaWRlYmFyLXN1Ym1lbnUgdWwge1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biAuc2lkZWJhci1zdWJtZW51IGxpIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIC5zaWRlYmFyLXN1Ym1lbnUgbGkgYTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXGYxMTFcIjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHVsIGxpIGEgc3Bhbi5sYWJlbCxcclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSBzcGFuLmJhZGdlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biAuc2lkZWJhci1zdWJtZW51IGxpIGEgLmJhZGdlLFxyXG4gIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biAuc2lkZWJhci1zdWJtZW51IGxpIGEgLmxhYmVsIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLXN1Ym1lbnUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duLmFjdGl2ZSA+IGE6YWZ0ZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgcmlnaHQ6IDE3cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1zaWRlLWZvb3Rlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgXHJcbiAgLnNpZGViYXItZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItZm9vdGVyID4gYSB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItZm9vdGVyID4gYSAubm90aWZpY2F0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgXHJcbiAgLmJhZGdlLXNvbmFyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6ICM5ODAzMDM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5iYWRnZS1zb25hcjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5ODAzMDM7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbmltYXRpb246IHNvbmFyIDEuNXMgaW5maW5pdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1wYWdlLWNvbnRlbnQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgXHJcbiAgLnBhZ2Utd3JhcHBlciAucGFnZS1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2Utd3JhcHBlciAucGFnZS1jb250ZW50ID4gZGl2IHtcclxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2Utd3JhcHBlciAucGFnZS1jb250ZW50IHtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLyotLS0tLS1zY3JvbGwgYmFyLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICBcclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDdweDtcclxuICB9XHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIGhlaWdodDogMHB4O1xyXG4gIH1cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICM1MjU5NjU7XHJcbiAgICBib3JkZXI6IDBweCBub25lICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgfVxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzUyNTk2NTtcclxuICB9XHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzUyNTk2NTtcclxuICB9XHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMHB4IG5vbmUgI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgfVxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWNoaWxsZXItdGhlbWUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICBcclxuICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzMxMzUzRDtcclxuICB9XHJcbiAgXHJcbiAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIsXHJcbiAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2gsXHJcbiAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHtcclxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzYTNmNDg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51LFxyXG4gIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLnVzZXItaW5mbyAudXNlci1yb2xlLFxyXG4gIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGVyIC51c2VyLWluZm8gLnVzZXItc3RhdHVzLFxyXG4gIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51LFxyXG4gIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIC5pbnB1dC1ncm91cC10ZXh0LFxyXG4gIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItYnJhbmQ+YSxcclxuICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSxcclxuICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci1mb290ZXI+YSB7XHJcbiAgICAgIGNvbG9yOiAjODE4ODk2O1xyXG4gIH1cclxuICBcclxuICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGk6aG92ZXI+YSxcclxuICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24uYWN0aXZlPmEsXHJcbiAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLnVzZXItaW5mbyxcclxuICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWJyYW5kPmE6aG92ZXIsXHJcbiAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItZm9vdGVyPmE6aG92ZXIgaSB7XHJcbiAgICAgIGNvbG9yOiAjYjhiZmNlO1xyXG4gIH1cclxuICBcclxuICAucGFnZS13cmFwcGVyLmNoaWxsZXItdGhlbWUudG9nZ2xlZCAjY2xvc2Utc2lkZWJhciB7XHJcbiAgICAgIGNvbG9yOiAjYmRiZGJkO1xyXG4gIH1cclxuICBcclxuICAucGFnZS13cmFwcGVyLmNoaWxsZXItdGhlbWUudG9nZ2xlZCAjY2xvc2Utc2lkZWJhcjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICBcclxuICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIHVsIGxpOmhvdmVyIGEgaSxcclxuICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWRyb3Bkb3duIC5zaWRlYmFyLXN1Ym1lbnUgbGkgYTpob3ZlcjpiZWZvcmUsXHJcbiAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggaW5wdXQuc2VhcmNoLW1lbnU6Zm9jdXMrc3BhbixcclxuICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24uYWN0aXZlIGEgaSB7XHJcbiAgICAgIGNvbG9yOiAjMTZjN2ZmO1xyXG4gICAgICB0ZXh0LXNoYWRvdzowcHggMHB4IDEwcHggcmdiYSgyMiwgMTk5LCAyNTUsIDAuNSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaSBhIGksXHJcbiAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIGRpdixcclxuICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCBpbnB1dC5zZWFyY2gtbWVudSxcclxuICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzYTNmNDg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuaGVhZGVyLW1lbnUgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiAjNmM3Yjg4O1xyXG4gIH1cclxuICBcclxuICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci1mb290ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjM2EzZjQ4O1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggLTFweCA1cHggIzI4MmMzMztcclxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0NjRhNTI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLWZvb3Rlcj5hOmZpcnN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLWZvb3Rlcj5hOmxhc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgfVxyXG4gICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // import { MdbNavBar} from './mdb-nav-bar.component';


    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/dashboard/dashboard.component.css"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/landing/landing.component.css":
  /*!***********************************************!*\
    !*** ./src/app/landing/landing.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLandingLandingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIn0= */";
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
      }

      _createClass(LandingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LandingComponent;
    }();

    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-landing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./landing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./landing.component.css */
      "./src/app/landing/landing.component.css"))["default"]]
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
    /*! E:\work\abhishek\ArWOS\ArWOS\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map