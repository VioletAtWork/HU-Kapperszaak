"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./components/loginform.js":
/*!*********************************!*\
  !*** ./components/loginform.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst LoginForm = ()=>{\n    _s();\n    const [loginemail, setLoginEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loginpassword, setLoginPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loginstatus, setLoginStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const loginUser = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:3002/userlogin\", {\n            loginEmail: loginemail,\n            loginPassword: loginpassword\n        }).then((response)=>{\n            if (response.data.message) {\n                setLoginStatus(response.data.message);\n            } else {\n                setLoginStatus(response.data[0].message);\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                        children: \"Email address\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\HBO-ICT Jaar1\\\\Blok B - Kapperzaak\\\\components\\\\loginform.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        type: \"email\",\n                        variant: \"loginform\",\n                        onChange: (e)=>{\n                            setLoginEmail(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\HBO-ICT Jaar1\\\\Blok B - Kapperzaak\\\\components\\\\loginform.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                        children: \"Wachtwoord\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\HBO-ICT Jaar1\\\\Blok B - Kapperzaak\\\\components\\\\loginform.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        variant: \"loginform\",\n                        onChange: (e)=>{\n                            setLoginPassword(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\HBO-ICT Jaar1\\\\Blok B - Kapperzaak\\\\components\\\\loginform.js\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormHelperText, {\n                        children: \"Wachtwoord vergeten?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\HBO-ICT Jaar1\\\\Blok B - Kapperzaak\\\\components\\\\loginform.js\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: loginstatus\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\HBO-ICT Jaar1\\\\Blok B - Kapperzaak\\\\components\\\\loginform.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Roald\\\\HBO-ICT Jaar1\\\\Blok B - Kapperzaak\\\\components\\\\loginform.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                onClick: loginUser,\n                children: \"Inloggen\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Roald\\\\HBO-ICT Jaar1\\\\Blok B - Kapperzaak\\\\components\\\\loginform.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Roald\\\\HBO-ICT Jaar1\\\\Blok B - Kapperzaak\\\\components\\\\loginform.js\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, undefined);\n};\n_s(LoginForm, \"ANQgIkcFnKiQAk2OnjLXO9Tv5dA=\");\n_c = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xvZ2luZm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQWtEO0FBV3pCO0FBQ0M7QUFFMUIsTUFBTWMsWUFBWSxJQUFNOztJQUVwQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR2YsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDZ0IsZUFBZUMsaUJBQWlCLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUVuRCxNQUFNLENBQUNrQixhQUFhQyxlQUFlLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUczQyxNQUFNb0IsWUFBWSxJQUFNO1FBQ3BCUixrREFBVSxDQUFDLG1DQUFtQztZQUMxQ1UsWUFBWVI7WUFDWlMsZUFBZVA7UUFDbkIsR0FBR1EsSUFBSSxDQUFDLENBQUNDLFdBQWE7WUFFbEIsSUFBSUEsU0FBU0MsSUFBSSxDQUFDQyxPQUFPLEVBQUU7Z0JBQ3ZCUixlQUFlTSxTQUFTQyxJQUFJLENBQUNDLE9BQU87WUFDeEMsT0FBTztnQkFDSFIsZUFBZU0sU0FBU0MsSUFBSSxDQUFDLEVBQUUsQ0FBQ0MsT0FBTztZQUMzQyxDQUFDO1FBQ0w7SUFDSjtJQUVKLHFCQUNJLDhEQUFDaEIsdURBQVNBOzswQkFDTiw4REFBQ04seURBQVdBOztrQ0FFUiw4REFBQ0MsdURBQVNBO2tDQUFDOzs7Ozs7a0NBR1gsOERBQUNHLG1EQUFLQTt3QkFBQ21CLE1BQUs7d0JBQVFDLFNBQVE7d0JBQVlDLFVBQVUsQ0FBQ0MsSUFBTTs0QkFDakRoQixjQUFjZ0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO3dCQUNoQzs7Ozs7O2tDQUVKLDhEQUFDM0IsdURBQVNBO2tDQUFDOzs7Ozs7a0NBR1gsOERBQUNHLG1EQUFLQTt3QkFBQ29CLFNBQVE7d0JBQVlDLFVBQVUsQ0FBQ0MsSUFBTTs0QkFDcENkLGlCQUFpQmMsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO3dCQUNuQzs7Ozs7O2tDQUNKLDhEQUFDMUIsNERBQWNBO2tDQUFDOzs7Ozs7a0NBSWhCLDhEQUFDMkI7a0NBQUloQjs7Ozs7Ozs7Ozs7OzBCQUdULDhEQUFDUixvREFBTUE7Z0JBQUN5QixTQUFTZjswQkFBVzs7Ozs7Ozs7Ozs7O0FBR3hDO0dBakRNUDtLQUFBQTtBQW1ETiwrREFBZUEsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xvZ2luZm9ybS5qcz9lOWIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgICBGbGV4LFxyXG4gICAgQm94LFxyXG4gICAgSGVhZGluZyxcclxuICAgIEZvcm1Db250cm9sLFxyXG4gICAgRm9ybUxhYmVsLFxyXG4gICAgRm9ybUhlbHBlclRleHQsXHJcbiAgICBGb3JtRXJyb3JNZXNzYWdlLFxyXG4gICAgSW5wdXQsXHJcbiAgICBCdXR0b24sIENvbnRhaW5lclxyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2xvZ2luZW1haWwsIHNldExvZ2luRW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbbG9naW5wYXNzd29yZCwgc2V0TG9naW5QYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBjb25zdCBbbG9naW5zdGF0dXMsIHNldExvZ2luU3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgbG9naW5Vc2VyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBBeGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAyL3VzZXJsb2dpblwiLCB7XHJcbiAgICAgICAgICAgICAgICBsb2dpbkVtYWlsOiBsb2dpbmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgbG9naW5QYXNzd29yZDogbG9naW5wYXNzd29yZCxcclxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMb2dpblN0YXR1cyhyZXNwb25zZS5kYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExvZ2luU3RhdHVzKHJlc3BvbnNlLmRhdGFbMF0ubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEZvcm1MYWJlbD4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgRW1haWwgYWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgdmFyaWFudD1cImxvZ2luZm9ybVwiIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2dpbkVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIFdhY2h0d29vcmRcclxuICAgICAgICAgICAgICAgIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHZhcmlhbnQ9XCJsb2dpbmZvcm1cIiBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9naW5QYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSB9IC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUhlbHBlclRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgV2FjaHR3b29yZCB2ZXJnZXRlbj9cclxuICAgICAgICAgICAgICAgIDwvRm9ybUhlbHBlclRleHQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxoNT57bG9naW5zdGF0dXN9PC9oNT5cclxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17bG9naW5Vc2VyfT5JbmxvZ2dlbjwvQnV0dG9uPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZsZXgiLCJCb3giLCJIZWFkaW5nIiwiRm9ybUNvbnRyb2wiLCJGb3JtTGFiZWwiLCJGb3JtSGVscGVyVGV4dCIsIkZvcm1FcnJvck1lc3NhZ2UiLCJJbnB1dCIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkF4aW9zIiwiTG9naW5Gb3JtIiwibG9naW5lbWFpbCIsInNldExvZ2luRW1haWwiLCJsb2dpbnBhc3N3b3JkIiwic2V0TG9naW5QYXNzd29yZCIsImxvZ2luc3RhdHVzIiwic2V0TG9naW5TdGF0dXMiLCJsb2dpblVzZXIiLCJwb3N0IiwibG9naW5FbWFpbCIsImxvZ2luUGFzc3dvcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwibWVzc2FnZSIsInR5cGUiLCJ2YXJpYW50Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoNSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/loginform.js\n"));

/***/ })

});