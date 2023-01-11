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

/***/ "./components/registerform.js":
/*!************************************!*\
  !*** ./components/registerform.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst RegisterForm = ()=>{\n    _s();\n    /*  CONST FOR INPUT GRABBING TO BACKEND */ const [userfirstName, setUserFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [usermiddleName, setUserMiddleName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [userlastName, setUserLastName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [userEmail, setUserEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [userPassword, setUserPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    /* CONST FOR EMAIL VALIDATION */ const [emailCheck, setEmailCheck] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [emailMessage, setEmailMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [emailAlreadyExist, setEmailAlreadyExist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    /* FUNCTION THAT IS CALLED WHEN U CLICK ON REGISTRATION WITH FORMAT CHECK ON THE EMAIL-ADRESS */ const userRegistration = ()=>{\n        const regEx = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9]+\\.)+[A-Za-z]+$/g;\n        if (regEx.test(emailCheck)) {\n            axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:3001/register\", {\n                userFirstName: userfirstName,\n                userMiddleName: usermiddleName,\n                userLastName: userlastName,\n                userEmail: userEmail,\n                userPassword: userPassword\n            }).then((response)=>{\n                if (response.data.registrationFailur) {\n                    setEmailAlreadyExist(response.data.registrationFailur);\n                } else {\n                    alert(\"Registration Succesfull!\");\n                }\n            });\n        } else if (!regEx.test(emailCheck) && emailCheck !== \"\") {\n            setEmailMessage(\"Invalid Email\"); // MESSAGE GOING BACK TO FE WHEN EMAIL FORMAT IS INCORRECT\n        } else {\n            setEmailMessage(\"This field is mandatory\");\n        }\n    };\n    /* CONTAINER OF FORM FIELDS AND REGISTER BUTTON */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                        children: \"Voornaam\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\HBO-ICT Jaar1\\\\Blok B - Kapperzaak\\\\components\\\\registerform.js\",\n                        lineNumber: 67,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        variant: \"loginform\",\n                        onChange: (e)=>{\n                            setUserFirstName(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\HBO-ICT Jaar1\\\\Blok B - Kapperzaak\\\\components\\\\registerform.js\",\n                        lineNumber: 68,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                        children: \"Tussenvoegsel\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\HBO-ICT Jaar1\\\\Blok B - Kapperzaak\\\\components\\\\registerform.js\",\n                        lineNumber: 72,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        variant: \"loginform\",\n                        onChange: (e)=>{\n                            setUserMiddleName(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\HBO-ICT Jaar1\\\\Blok B - Kapperzaak\\\\components\\\\registerform.js\",\n                        lineNumber: 73,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                        children: \"Achternaam\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\HBO-ICT Jaar1\\\\Blok B - Kapperzaak\\\\components\\\\registerform.js\",\n                        lineNumber: 77,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        variant: \"loginform\",\n                        onChange: (e)=>{\n                            setUserLastName(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\HBO-ICT Jaar1\\\\Blok B - Kapperzaak\\\\components\\\\registerform.js\",\n                        lineNumber: 78,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                        children: \"Email address\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\HBO-ICT Jaar1\\\\Blok B - Kapperzaak\\\\components\\\\registerform.js\",\n                        lineNumber: 82,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        type: \"email\",\n                        variant: \"loginform\",\n                        onChange: (e)=>{\n                            setUserEmail(e.target.value);\n                            setEmailCheck(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\HBO-ICT Jaar1\\\\Blok B - Kapperzaak\\\\components\\\\registerform.js\",\n                        lineNumber: 83,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: emailMessage\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\HBO-ICT Jaar1\\\\Blok B - Kapperzaak\\\\components\\\\registerform.js\",\n                        lineNumber: 88,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: emailAlreadyExist\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\HBO-ICT Jaar1\\\\Blok B - Kapperzaak\\\\components\\\\registerform.js\",\n                        lineNumber: 89,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                        children: \"Wachtwoord\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\HBO-ICT Jaar1\\\\Blok B - Kapperzaak\\\\components\\\\registerform.js\",\n                        lineNumber: 91,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        variant: \"loginform\",\n                        onChange: (e)=>{\n                            setUserPassword(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\HBO-ICT Jaar1\\\\Blok B - Kapperzaak\\\\components\\\\registerform.js\",\n                        lineNumber: 92,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormHelperText, {\n                        children: \"We'll never share your details.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\HBO-ICT Jaar1\\\\Blok B - Kapperzaak\\\\components\\\\registerform.js\",\n                        lineNumber: 96,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Roald\\\\HBO-ICT Jaar1\\\\Blok B - Kapperzaak\\\\components\\\\registerform.js\",\n                lineNumber: 66,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                onClick: ()=>{\n                    userRegistration();\n                },\n                children: \"Registreren\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Roald\\\\HBO-ICT Jaar1\\\\Blok B - Kapperzaak\\\\components\\\\registerform.js\",\n                lineNumber: 99,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Roald\\\\HBO-ICT Jaar1\\\\Blok B - Kapperzaak\\\\components\\\\registerform.js\",\n        lineNumber: 65,\n        columnNumber: 13\n    }, undefined);\n};\n_s(RegisterForm, \"/E2RvqFwZ0a8wuAgxMO5CM1e6LU=\");\n_c = RegisterForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegisterForm);\nvar _c;\n$RefreshReg$(_c, \"RegisterForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxVQUFVLENBQUNDLElBQU07NEJBQ3hDckIsZ0JBQWdCcUIsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO3dCQUNsQzs7Ozs7O2tDQUVBLDhEQUFDdkMsNERBQWNBO2tDQUFDOzs7Ozs7Ozs7Ozs7MEJBR3BCLDhEQUFDRyxvREFBTUE7Z0JBQUN1QyxTQUFTLElBQU07b0JBQ25CbkI7Z0JBQ0o7MEJBQUc7Ozs7Ozs7Ozs7OztBQU1mO0dBNUZFakI7S0FBQUE7QUE4Rk4sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZWdpc3RlcmZvcm0uanM/NjliYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1xyXG4gICAgRmxleCxcclxuICAgIEJveCxcclxuICAgIEhlYWRpbmcsXHJcbiAgICBGb3JtQ29udHJvbCxcclxuICAgIEZvcm1MYWJlbCxcclxuICAgIEZvcm1IZWxwZXJUZXh0LFxyXG4gICAgRm9ybUVycm9yTWVzc2FnZSxcclxuICAgIElucHV0LFxyXG4gICAgQnV0dG9uLCBDb250YWluZXJcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IFJlZ2lzdGVyRm9ybSA9ICgpID0+IHtcclxuXHJcbi8qICBDT05TVCBGT1IgSU5QVVQgR1JBQkJJTkcgVE8gQkFDS0VORCAqL1xyXG5cclxuICAgIGNvbnN0IFt1c2VyZmlyc3ROYW1lLCBzZXRVc2VyRmlyc3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3VzZXJtaWRkbGVOYW1lLCBzZXRVc2VyTWlkZGxlTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt1c2VybGFzdE5hbWUsIHNldFVzZXJMYXN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt1c2VyRW1haWwsIHNldFVzZXJFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt1c2VyUGFzc3dvcmQsIHNldFVzZXJQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbi8qIENPTlNUIEZPUiBFTUFJTCBWQUxJREFUSU9OICovXHJcblxyXG4gICAgY29uc3QgW2VtYWlsQ2hlY2ssIHNldEVtYWlsQ2hlY2tdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZW1haWxNZXNzYWdlLCBzZXRFbWFpbE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZW1haWxBbHJlYWR5RXhpc3QsIHNldEVtYWlsQWxyZWFkeUV4aXN0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuLyogRlVOQ1RJT04gVEhBVCBJUyBDQUxMRUQgV0hFTiBVIENMSUNLIE9OIFJFR0lTVFJBVElPTiBXSVRIIEZPUk1BVCBDSEVDSyBPTiBUSEUgRU1BSUwtQURSRVNTICovXHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXJSZWdpc3RyYXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZ0V4ID0gL15bYS16QS1aMC05Ll8lKy1dK0AoPzpbYS16QS1aMC05XStcXC4pK1tBLVphLXpdKyQvZ1xyXG5cclxuICAgICAgICBpZiAocmVnRXgudGVzdChlbWFpbENoZWNrKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIEF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvcmVnaXN0ZXJcIiwge1xyXG4gICAgICAgICAgICAgICAgdXNlckZpcnN0TmFtZTogdXNlcmZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICAgIHVzZXJNaWRkbGVOYW1lOiB1c2VybWlkZGxlTmFtZSxcclxuICAgICAgICAgICAgICAgIHVzZXJMYXN0TmFtZTogdXNlcmxhc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgdXNlckVtYWlsOiB1c2VyRW1haWwsXHJcbiAgICAgICAgICAgICAgICB1c2VyUGFzc3dvcmQ6IHVzZXJQYXNzd29yZCxcclxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5yZWdpc3RyYXRpb25GYWlsdXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFbWFpbEFscmVhZHlFeGlzdChyZXNwb25zZS5kYXRhLnJlZ2lzdHJhdGlvbkZhaWx1cilcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQgKFwiUmVnaXN0cmF0aW9uIFN1Y2Nlc2Z1bGwhXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICghcmVnRXgudGVzdChlbWFpbENoZWNrKSAmJiBlbWFpbENoZWNrICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFbWFpbE1lc3NhZ2UgKFwiSW52YWxpZCBFbWFpbFwiKTsgLy8gTUVTU0FHRSBHT0lORyBCQUNLIFRPIEZFIFdIRU4gRU1BSUwgRk9STUFUIElTIElOQ09SUkVDVFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFbWFpbE1lc3NhZ2UgKFwiVGhpcyBmaWVsZCBpcyBtYW5kYXRvcnlcIik7ICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbi8qIENPTlRBSU5FUiBPRiBGT1JNIEZJRUxEUyBBTkQgUkVHSVNURVIgQlVUVE9OICovXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5Wb29ybmFhbTwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCB2YXJpYW50PVwibG9naW5mb3JtXCIgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFVzZXJGaXJzdE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlR1c3NlbnZvZWdzZWw8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdmFyaWFudD1cImxvZ2luZm9ybVwiIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VyTWlkZGxlTmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSB9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+QWNodGVybmFhbTwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCB2YXJpYW50PVwibG9naW5mb3JtXCIgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFVzZXJMYXN0TmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSB9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+RW1haWwgYWRkcmVzczwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiZW1haWxcIiB2YXJpYW50PVwibG9naW5mb3JtXCIgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFVzZXJFbWFpbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVtYWlsQ2hlY2soZS50YXJnZXQudmFsdWUpOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+e2VtYWlsTWVzc2FnZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT57ZW1haWxBbHJlYWR5RXhpc3R9PC9oNT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5XYWNodHdvb3JkPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhcmlhbnQ9XCJsb2dpbmZvcm1cIiBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXNlclBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH0gLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1IZWxwZXJUZXh0PldlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZGV0YWlscy48L0Zvcm1IZWxwZXJUZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyUmVnaXN0cmF0aW9uICgpO1xyXG4gICAgICAgICAgICAgICAgfX0+UmVnaXN0cmVyZW48L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG4gICAgIFxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlckZvcm1cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZsZXgiLCJCb3giLCJIZWFkaW5nIiwiRm9ybUNvbnRyb2wiLCJGb3JtTGFiZWwiLCJGb3JtSGVscGVyVGV4dCIsIkZvcm1FcnJvck1lc3NhZ2UiLCJJbnB1dCIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkF4aW9zIiwiUmVnaXN0ZXJGb3JtIiwidXNlcmZpcnN0TmFtZSIsInNldFVzZXJGaXJzdE5hbWUiLCJ1c2VybWlkZGxlTmFtZSIsInNldFVzZXJNaWRkbGVOYW1lIiwidXNlcmxhc3ROYW1lIiwic2V0VXNlckxhc3ROYW1lIiwidXNlckVtYWlsIiwic2V0VXNlckVtYWlsIiwidXNlclBhc3N3b3JkIiwic2V0VXNlclBhc3N3b3JkIiwiZW1haWxDaGVjayIsInNldEVtYWlsQ2hlY2siLCJlbWFpbE1lc3NhZ2UiLCJzZXRFbWFpbE1lc3NhZ2UiLCJlbWFpbEFscmVhZHlFeGlzdCIsInNldEVtYWlsQWxyZWFkeUV4aXN0IiwidXNlclJlZ2lzdHJhdGlvbiIsInJlZ0V4IiwidGVzdCIsInBvc3QiLCJ1c2VyRmlyc3ROYW1lIiwidXNlck1pZGRsZU5hbWUiLCJ1c2VyTGFzdE5hbWUiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwicmVnaXN0cmF0aW9uRmFpbHVyIiwiYWxlcnQiLCJ2YXJpYW50Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwiaDUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/registerform.js\n"));

/***/ })

});