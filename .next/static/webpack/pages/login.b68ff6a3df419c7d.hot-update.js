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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst LoginForm = ()=>{\n    _s();\n    const [loginemail, setLoginEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loginpassword, setLoginPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const loginUser = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:3002/userlogin\", {\n            loginEmail: loginemail,\n            loginPassword: loginpassword\n        }).then((response)=>{\n            console.log(response);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                        children: \"Email address\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owens\\\\Documents\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\loginform.js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        type: \"email\",\n                        variant: \"loginform\",\n                        onChange: (e)=>{\n                            setLoginEmail(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owens\\\\Documents\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\loginform.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                        children: \"Wachtwoord\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owens\\\\Documents\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\loginform.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        variant: \"loginform\",\n                        onChange: (e)=>{\n                            setLoginPassword(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owens\\\\Documents\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\loginform.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormHelperText, {\n                        children: \"Wachtwoord vergeten?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owens\\\\Documents\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\loginform.js\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\owens\\\\Documents\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\loginform.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                onClick: loginUser,\n                children: \"Inloggen\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\owens\\\\Documents\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\loginform.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\owens\\\\Documents\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\loginform.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_s(LoginForm, \"WLVmDyxm/ys7j3EjZQVyP/LCdIU=\");\n_c = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xvZ2luZm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQWtEO0FBV3pCO0FBQ0M7QUFFMUIsTUFBTWMsWUFBWSxJQUFNOztJQUVwQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR2YsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDZ0IsZUFBZUMsaUJBQWlCLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUcvQyxNQUFNa0IsWUFBWSxJQUFNO1FBQ3BCTixrREFBVSxDQUFDLG1DQUFtQztZQUMxQ1EsWUFBWU47WUFDWk8sZUFBZUw7UUFDbkIsR0FBR00sSUFBSSxDQUFDLENBQUNDLFdBQWE7WUFDcEJDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDtJQUNKO0lBRUoscUJBQ0ksOERBQUNaLHVEQUFTQTs7MEJBQ04sOERBQUNOLHlEQUFXQTs7a0NBRVIsOERBQUNDLHVEQUFTQTtrQ0FBQzs7Ozs7O2tDQUdYLDhEQUFDRyxtREFBS0E7d0JBQUNpQixNQUFLO3dCQUFRQyxTQUFRO3dCQUFZQyxVQUFVLENBQUNDLElBQU07NEJBQ2pEZCxjQUFjYyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7d0JBQ2hDOzs7Ozs7a0NBRUosOERBQUN6Qix1REFBU0E7a0NBQUM7Ozs7OztrQ0FHWCw4REFBQ0csbURBQUtBO3dCQUFDa0IsU0FBUTt3QkFBWUMsVUFBVSxDQUFDQyxJQUFNOzRCQUNwQ1osaUJBQWlCWSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7d0JBQ25DOzs7Ozs7a0NBQ0osOERBQUN4Qiw0REFBY0E7a0NBQUM7Ozs7Ozs7Ozs7OzswQkFLcEIsOERBQUNHLG9EQUFNQTtnQkFBQ3NCLFNBQVNkOzBCQUFXOzs7Ozs7Ozs7Ozs7QUFHeEM7R0F4Q01MO0tBQUFBO0FBMENOLCtEQUFlQSxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbG9naW5mb3JtLmpzP2U5YjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtcclxuICAgIEZsZXgsXHJcbiAgICBCb3gsXHJcbiAgICBIZWFkaW5nLFxyXG4gICAgRm9ybUNvbnRyb2wsXHJcbiAgICBGb3JtTGFiZWwsXHJcbiAgICBGb3JtSGVscGVyVGV4dCxcclxuICAgIEZvcm1FcnJvck1lc3NhZ2UsXHJcbiAgICBJbnB1dCxcclxuICAgIEJ1dHRvbiwgQ29udGFpbmVyXHJcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbbG9naW5lbWFpbCwgc2V0TG9naW5FbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtsb2dpbnBhc3N3b3JkLCBzZXRMb2dpblBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgbG9naW5Vc2VyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBBeGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAyL3VzZXJsb2dpblwiLCB7XHJcbiAgICAgICAgICAgICAgICBsb2dpbkVtYWlsOiBsb2dpbmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgbG9naW5QYXNzd29yZDogbG9naW5wYXNzd29yZCxcclxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgRW1haWwgYWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgdmFyaWFudD1cImxvZ2luZm9ybVwiIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2dpbkVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIFdhY2h0d29vcmRcclxuICAgICAgICAgICAgICAgIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHZhcmlhbnQ9XCJsb2dpbmZvcm1cIiBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9naW5QYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSB9IC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUhlbHBlclRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgV2FjaHR3b29yZCB2ZXJnZXRlbj9cclxuICAgICAgICAgICAgICAgIDwvRm9ybUhlbHBlclRleHQ+XHJcbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2xvZ2luVXNlcn0+SW5sb2dnZW48L0J1dHRvbj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGbGV4IiwiQm94IiwiSGVhZGluZyIsIkZvcm1Db250cm9sIiwiRm9ybUxhYmVsIiwiRm9ybUhlbHBlclRleHQiLCJGb3JtRXJyb3JNZXNzYWdlIiwiSW5wdXQiLCJCdXR0b24iLCJDb250YWluZXIiLCJBeGlvcyIsIkxvZ2luRm9ybSIsImxvZ2luZW1haWwiLCJzZXRMb2dpbkVtYWlsIiwibG9naW5wYXNzd29yZCIsInNldExvZ2luUGFzc3dvcmQiLCJsb2dpblVzZXIiLCJwb3N0IiwibG9naW5FbWFpbCIsImxvZ2luUGFzc3dvcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsInZhcmlhbnQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/loginform.js\n"));

/***/ }),

/***/ "./components/registerform.js":
/*!************************************!*\
  !*** ./components/registerform.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst RegisterForm = ()=>{\n    _s();\n    /*  CONST FUNCTIONS GRABBING ONchange VARIABLE FROM FIELDS */ const [userfirstName, setUserFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [usermiddleName, setUserMiddleName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [userlastName, setUserLastName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [userEmail, setUserEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [userPassword, setUserPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    /* THIS CONST FUNCTION IS LINKED WITH THE REGISTRATION BUTTON, INFORMATION IS STORED INTO AN OBJECT SO IT CAN BE PULLED INTO THE BACKEND */ const registerUser = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:3001/register\", {\n            userFirstName: userfirstName,\n            userMiddleName: usermiddleName,\n            userLastName: userlastName,\n            userEmail: userEmail,\n            userPassword: userPassword\n        }).then(()=>{\n            console.log(\"Succesfull\");\n        });\n    };\n    /* CONTAINER OF FORM FIELDS AND REGISTER BUTTON */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                        children: \"Voornaam\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owens\\\\Documents\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\registerform.js\",\n                        lineNumber: 44,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        variant: \"loginform\",\n                        onChange: (e)=>{\n                            setUserFirstName(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owens\\\\Documents\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\registerform.js\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                        children: \"Tussenvoegsel\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owens\\\\Documents\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\registerform.js\",\n                        lineNumber: 49,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        variant: \"loginform\",\n                        onChange: (e)=>{\n                            setUserMiddleName(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owens\\\\Documents\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\registerform.js\",\n                        lineNumber: 50,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                        children: \"Achternaam\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owens\\\\Documents\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\registerform.js\",\n                        lineNumber: 54,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        variant: \"loginform\",\n                        onChange: (e)=>{\n                            setUserLastName(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owens\\\\Documents\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\registerform.js\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                        children: \"Email address\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owens\\\\Documents\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\registerform.js\",\n                        lineNumber: 59,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        type: \"email\",\n                        variant: \"loginform\",\n                        onChange: (e)=>{\n                            setUserEmail(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owens\\\\Documents\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\registerform.js\",\n                        lineNumber: 60,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                        children: \"Wachtwoord\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owens\\\\Documents\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\registerform.js\",\n                        lineNumber: 64,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        variant: \"loginform\",\n                        onChange: (e)=>{\n                            setUserPassword(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owens\\\\Documents\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\registerform.js\",\n                        lineNumber: 65,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormHelperText, {\n                        children: \"We'll never share your details.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\owens\\\\Documents\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\registerform.js\",\n                        lineNumber: 69,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\owens\\\\Documents\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\registerform.js\",\n                lineNumber: 43,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                onClick: registerUser,\n                children: \"Registreren\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\owens\\\\Documents\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\registerform.js\",\n                lineNumber: 72,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\owens\\\\Documents\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\registerform.js\",\n        lineNumber: 42,\n        columnNumber: 13\n    }, undefined);\n};\n_s(RegisterForm, \"g3lilbGE6ph7Tf65CFAg6TyeQIY=\");\n_c = RegisterForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegisterForm);\nvar _c;\n$RefreshReg$(_c, \"RegisterForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlZ2lzdGVyZm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQWtEO0FBV3hCO0FBQ0E7QUFFMUIsTUFBTWMsZUFBZSxJQUFNOztJQUUzQiwyREFBMkQsR0FFdkQsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR2YsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDZ0IsZ0JBQWdCQyxrQkFBa0IsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU0sQ0FBQ2tCLGNBQWNDLGdCQUFnQixHQUFHbkIsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDb0IsV0FBV0MsYUFBYSxHQUFHckIsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDc0IsY0FBY0MsZ0JBQWdCLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUVyRCx5SUFBeUksR0FFakksTUFBTXdCLGVBQWUsSUFBTTtRQUN2Qlosa0RBQVUsQ0FBQyxrQ0FBa0M7WUFDekNjLGVBQWVaO1lBQ2ZhLGdCQUFnQlg7WUFDaEJZLGNBQWNWO1lBQ2RFLFdBQVdBO1lBQ1hFLGNBQWNBO1FBQ2xCLEdBQUdPLElBQUksQ0FBQyxJQUFNO1lBQ1ZDLFFBQVFDLEdBQUcsQ0FBQztRQUNoQjtJQUNKO0lBRVIsZ0RBQWdELEdBRXhDLHFCQUNJLDhEQUFDcEIsdURBQVNBOzswQkFDTiw4REFBQ04seURBQVdBOztrQ0FDUiw4REFBQ0MsdURBQVNBO2tDQUFDOzs7Ozs7a0NBQ1gsOERBQUNHLG1EQUFLQTt3QkFBQ3VCLFNBQVE7d0JBQVlDLFVBQVUsQ0FBQ0MsSUFBTTs0QkFDeENuQixpQkFBaUJtQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7d0JBQ25DOzs7Ozs7a0NBRUEsOERBQUM5Qix1REFBU0E7a0NBQUM7Ozs7OztrQ0FDWCw4REFBQ0csbURBQUtBO3dCQUFDdUIsU0FBUTt3QkFBWUMsVUFBVSxDQUFDQyxJQUFNOzRCQUN4Q2pCLGtCQUFrQmlCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzt3QkFDcEM7Ozs7OztrQ0FFQSw4REFBQzlCLHVEQUFTQTtrQ0FBQzs7Ozs7O2tDQUNYLDhEQUFDRyxtREFBS0E7d0JBQUN1QixTQUFRO3dCQUFZQyxVQUFVLENBQUNDLElBQU07NEJBQ3hDZixnQkFBZ0JlLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzt3QkFDbEM7Ozs7OztrQ0FFQSw4REFBQzlCLHVEQUFTQTtrQ0FBQzs7Ozs7O2tDQUNYLDhEQUFDRyxtREFBS0E7d0JBQUM0QixNQUFLO3dCQUFRTCxTQUFRO3dCQUFZQyxVQUFVLENBQUNDLElBQU07NEJBQ3JEYixhQUFhYSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7d0JBQy9COzs7Ozs7a0NBRUEsOERBQUM5Qix1REFBU0E7a0NBQUM7Ozs7OztrQ0FDWCw4REFBQ0csbURBQUtBO3dCQUFDdUIsU0FBUTt3QkFBWUMsVUFBVSxDQUFDQyxJQUFNOzRCQUN4Q1gsZ0JBQWdCVyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7d0JBQ2xDOzs7Ozs7a0NBRUEsOERBQUM3Qiw0REFBY0E7a0NBQUM7Ozs7Ozs7Ozs7OzswQkFHcEIsOERBQUNHLG9EQUFNQTtnQkFBQzRCLFNBQVNkOzBCQUFjOzs7Ozs7Ozs7Ozs7QUFLNUM7R0E5REdYO0tBQUFBO0FBZ0VOLCtEQUFlQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcmVnaXN0ZXJmb3JtLmpzPzY5YmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtcclxuICAgIEZsZXgsXHJcbiAgICBCb3gsXHJcbiAgICBIZWFkaW5nLFxyXG4gICAgRm9ybUNvbnRyb2wsXHJcbiAgICBGb3JtTGFiZWwsXHJcbiAgICBGb3JtSGVscGVyVGV4dCxcclxuICAgIEZvcm1FcnJvck1lc3NhZ2UsXHJcbiAgICBJbnB1dCxcclxuICAgIEJ1dHRvbiwgQ29udGFpbmVyXHJcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBSZWdpc3RlckZvcm0gPSAoKSA9PiB7XHJcblxyXG4vKiAgQ09OU1QgRlVOQ1RJT05TIEdSQUJCSU5HIE9OY2hhbmdlIFZBUklBQkxFIEZST00gRklFTERTICovXHJcblxyXG4gICAgY29uc3QgW3VzZXJmaXJzdE5hbWUsIHNldFVzZXJGaXJzdE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdXNlcm1pZGRsZU5hbWUsIHNldFVzZXJNaWRkbGVOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3VzZXJsYXN0TmFtZSwgc2V0VXNlckxhc3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3VzZXJFbWFpbCwgc2V0VXNlckVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3VzZXJQYXNzd29yZCwgc2V0VXNlclBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuLyogVEhJUyBDT05TVCBGVU5DVElPTiBJUyBMSU5LRUQgV0lUSCBUSEUgUkVHSVNUUkFUSU9OIEJVVFRPTiwgSU5GT1JNQVRJT04gSVMgU1RPUkVEIElOVE8gQU4gT0JKRUNUIFNPIElUIENBTiBCRSBQVUxMRUQgSU5UTyBUSEUgQkFDS0VORCAqL1xyXG5cclxuICAgICAgICBjb25zdCByZWdpc3RlclVzZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIEF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvcmVnaXN0ZXJcIiwge1xyXG4gICAgICAgICAgICAgICAgdXNlckZpcnN0TmFtZTogdXNlcmZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICAgIHVzZXJNaWRkbGVOYW1lOiB1c2VybWlkZGxlTmFtZSxcclxuICAgICAgICAgICAgICAgIHVzZXJMYXN0TmFtZTogdXNlcmxhc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgdXNlckVtYWlsOiB1c2VyRW1haWwsXHJcbiAgICAgICAgICAgICAgICB1c2VyUGFzc3dvcmQ6IHVzZXJQYXNzd29yZCxcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc2Z1bGxcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4vKiBDT05UQUlORVIgT0YgRk9STSBGSUVMRFMgQU5EIFJFR0lTVEVSIEJVVFRPTiAqL1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+Vm9vcm5hYW08L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdmFyaWFudD1cImxvZ2luZm9ybVwiIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VyRmlyc3ROYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5UdXNzZW52b2Vnc2VsPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhcmlhbnQ9XCJsb2dpbmZvcm1cIiBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXNlck1pZGRsZU5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPkFjaHRlcm5hYW08L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdmFyaWFudD1cImxvZ2luZm9ybVwiIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VyTGFzdE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPkVtYWlsIGFkZHJlc3M8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgdmFyaWFudD1cImxvZ2luZm9ybVwiIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VyRW1haWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5XYWNodHdvb3JkPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhcmlhbnQ9XCJsb2dpbmZvcm1cIiBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXNlclBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH0gLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1IZWxwZXJUZXh0PldlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZGV0YWlscy48L0Zvcm1IZWxwZXJUZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3JlZ2lzdGVyVXNlcn0+UmVnaXN0cmVyZW48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIHsvKiA8QnV0dG9uIG9uQ2xpY2s9e3JlZ2lzdGVyVXNlcn1jbGVhcklucHV0PC9CdXR0b24+ICAqL31cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICAgIClcclxuICAgfVxyXG4gICAgICAgXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyRm9ybVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRmxleCIsIkJveCIsIkhlYWRpbmciLCJGb3JtQ29udHJvbCIsIkZvcm1MYWJlbCIsIkZvcm1IZWxwZXJUZXh0IiwiRm9ybUVycm9yTWVzc2FnZSIsIklucHV0IiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiQXhpb3MiLCJSZWdpc3RlckZvcm0iLCJ1c2VyZmlyc3ROYW1lIiwic2V0VXNlckZpcnN0TmFtZSIsInVzZXJtaWRkbGVOYW1lIiwic2V0VXNlck1pZGRsZU5hbWUiLCJ1c2VybGFzdE5hbWUiLCJzZXRVc2VyTGFzdE5hbWUiLCJ1c2VyRW1haWwiLCJzZXRVc2VyRW1haWwiLCJ1c2VyUGFzc3dvcmQiLCJzZXRVc2VyUGFzc3dvcmQiLCJyZWdpc3RlclVzZXIiLCJwb3N0IiwidXNlckZpcnN0TmFtZSIsInVzZXJNaWRkbGVOYW1lIiwidXNlckxhc3ROYW1lIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJ2YXJpYW50Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/registerform.js\n"));

/***/ })

});