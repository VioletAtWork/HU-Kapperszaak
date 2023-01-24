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

/***/ "./components/pagecomponents/Login/registerform.js":
/*!*********************************************************!*\
  !*** ./components/pagecomponents/Login/registerform.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst RegisterForm = ()=>{\n    _s();\n    /*  CONST FOR INPUT GRABBING TO BACKEND */ const [userfirstName, setUserFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [usermiddleName, setUserMiddleName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [userlastName, setUserLastName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [userEmail, setUserEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [userPassword, setUserPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    /* CONST FOR EMAIL VALIDATION */ const [emailCheck, setEmailCheck] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [emailMessage, setEmailMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [emailAlreadyExist, setEmailAlreadyExist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [registrationSucces, setRegistrationSucces] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    /* FUNCTION THAT IS CALLED WHEN U CLICK ON REGISTRATION WITH FORMAT CHECK ON THE EMAIL-ADRESS */ const userRegistration = ()=>{\n        const regExP = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9]+\\.)+[A-Za-z]+$/g;\n        if (regExP.test(emailCheck)) {\n            axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:3001/register\", {\n                userFirstName: userfirstName,\n                userMiddleName: usermiddleName,\n                userLastName: userlastName,\n                userEmail: userEmail,\n                userPassword: userPassword\n            }).then((response)=>{\n                if (response.data.registrationFailur) {\n                    setEmailAlreadyExist(response.data.registrationFailur) // MESSAGE DISPLAYED WHEN EMAIL ADRESS ALREADY EXISTS IN THE DATABASE\n                    ;\n                } else {\n                    setRegistrationSucces(response.data.registrationSuccesfull) // MESSAGE DISPLAYED WHEN DATABASE INSERTION HAS BEEN COMPLETED\n                    ;\n                }\n            });\n        } else if (!regExP.test(emailCheck) && emailCheck !== \"\") {\n            setEmailMessage(\"Invalid Email\"); // MESSAGE DISPLAYED WHEN EMAIL FORMAT IS WRONG\n        } else {\n            setEmailMessage(\"This field is mandatory\"); // MESSAGE DISPLAYED WHEN FIELD IS EMPTY      \n        }\n    };\n    /* CONTAINER OF FORM FIELDS AND REGISTER BUTTON */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                        children: \"Voornaam\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\OneDrive\\\\Documenten\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\pagecomponents\\\\Login\\\\registerform.js\",\n                        lineNumber: 68,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        variant: \"loginform\",\n                        onChange: (e)=>{\n                            setUserFirstName(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\OneDrive\\\\Documenten\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\pagecomponents\\\\Login\\\\registerform.js\",\n                        lineNumber: 69,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                        children: \"Tussenvoegsel\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\OneDrive\\\\Documenten\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\pagecomponents\\\\Login\\\\registerform.js\",\n                        lineNumber: 73,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        variant: \"loginform\",\n                        onChange: (e)=>{\n                            setUserMiddleName(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\OneDrive\\\\Documenten\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\pagecomponents\\\\Login\\\\registerform.js\",\n                        lineNumber: 74,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                        children: \"Achternaam\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\OneDrive\\\\Documenten\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\pagecomponents\\\\Login\\\\registerform.js\",\n                        lineNumber: 78,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        variant: \"loginform\",\n                        onChange: (e)=>{\n                            setUserLastName(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\OneDrive\\\\Documenten\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\pagecomponents\\\\Login\\\\registerform.js\",\n                        lineNumber: 79,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                        children: \"Email address\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\OneDrive\\\\Documenten\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\pagecomponents\\\\Login\\\\registerform.js\",\n                        lineNumber: 83,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        type: \"email\",\n                        variant: \"loginform\",\n                        onChange: (e)=>{\n                            setUserEmail(e.target.value);\n                            setEmailCheck(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\OneDrive\\\\Documenten\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\pagecomponents\\\\Login\\\\registerform.js\",\n                        lineNumber: 84,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: emailMessage\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\OneDrive\\\\Documenten\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\pagecomponents\\\\Login\\\\registerform.js\",\n                        lineNumber: 89,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: emailAlreadyExist\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\OneDrive\\\\Documenten\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\pagecomponents\\\\Login\\\\registerform.js\",\n                        lineNumber: 90,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                        children: \"Wachtwoord\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\OneDrive\\\\Documenten\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\pagecomponents\\\\Login\\\\registerform.js\",\n                        lineNumber: 92,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        variant: \"loginform\",\n                        onChange: (e)=>{\n                            setUserPassword(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\OneDrive\\\\Documenten\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\pagecomponents\\\\Login\\\\registerform.js\",\n                        lineNumber: 93,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormHelperText, {\n                        children: \"We'll never share your details.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roald\\\\OneDrive\\\\Documenten\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\pagecomponents\\\\Login\\\\registerform.js\",\n                        lineNumber: 97,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Roald\\\\OneDrive\\\\Documenten\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\pagecomponents\\\\Login\\\\registerform.js\",\n                lineNumber: 67,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                onClick: ()=>{\n                    userRegistration();\n                },\n                children: \"Registreren\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Roald\\\\OneDrive\\\\Documenten\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\pagecomponents\\\\Login\\\\registerform.js\",\n                lineNumber: 100,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: registrationSucces\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Roald\\\\OneDrive\\\\Documenten\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\pagecomponents\\\\Login\\\\registerform.js\",\n                lineNumber: 104,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Roald\\\\OneDrive\\\\Documenten\\\\GitHub\\\\HU-Kapperszaak\\\\components\\\\pagecomponents\\\\Login\\\\registerform.js\",\n        lineNumber: 66,\n        columnNumber: 13\n    }, undefined);\n};\n_s(RegisterForm, \"KlsyB55RYt1hOanGzPGhUR8CUvY=\");\n_c = RegisterForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegisterForm);\nvar _c;\n$RefreshReg$(_c, \"RegisterForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BhZ2Vjb21wb25lbnRzL0xvZ2luL3JlZ2lzdGVyZm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQWtEO0FBV3hCO0FBQ0E7QUFFMUIsTUFBTWMsZUFBZSxJQUFNOztJQUUzQix3Q0FBd0MsR0FFcEMsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR2YsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDZ0IsZ0JBQWdCQyxrQkFBa0IsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU0sQ0FBQ2tCLGNBQWNDLGdCQUFnQixHQUFHbkIsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDb0IsV0FBV0MsYUFBYSxHQUFHckIsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDc0IsY0FBY0MsZ0JBQWdCLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUVyRCw4QkFBOEIsR0FFMUIsTUFBTSxDQUFDd0IsWUFBWUMsY0FBYyxHQUFHekIsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDMEIsY0FBY0MsZ0JBQWdCLEdBQUczQiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUM0QixtQkFBbUJDLHFCQUFxQixHQUFHN0IsK0NBQVFBLENBQUM7SUFDM0QsTUFBTSxDQUFDOEIsb0JBQW9CQyxzQkFBc0IsR0FBRy9CLCtDQUFRQSxDQUFDO0lBRWpFLDhGQUE4RixHQUV0RixNQUFNZ0MsbUJBQW1CLElBQU07UUFDM0IsTUFBTUMsU0FBUztRQUVuQixJQUFJQSxPQUFPQyxJQUFJLENBQUNWLGFBQWE7WUFFckJaLGtEQUFVLENBQUMsa0NBQWtDO2dCQUM3Q3dCLGVBQWV0QjtnQkFDZnVCLGdCQUFnQnJCO2dCQUNoQnNCLGNBQWNwQjtnQkFDZEUsV0FBV0E7Z0JBQ1hFLGNBQWNBO1lBQ2xCLEdBQUdpQixJQUFJLENBQUMsQ0FBQ0MsV0FBYTtnQkFFbEIsSUFBSUEsU0FBU0MsSUFBSSxDQUFDQyxrQkFBa0IsRUFBRTtvQkFDbENiLHFCQUFxQlcsU0FBU0MsSUFBSSxDQUFDQyxrQkFBa0IsRUFBRSxxRUFBcUU7O2dCQUNoSSxPQUFPO29CQUNIWCxzQkFBc0JTLFNBQVNDLElBQUksQ0FBQ0Usc0JBQXNCLEVBQUUsK0RBQStEOztnQkFDL0gsQ0FBQztZQUNMO1FBR0osT0FBTyxJQUFJLENBQUNWLE9BQU9DLElBQUksQ0FBQ1YsZUFBZUEsZUFBZSxJQUFJO1lBQ2xERyxnQkFBaUIsa0JBQWtCLCtDQUErQztRQUV0RixPQUFPO1lBQ0hBLGdCQUFpQiw0QkFBNEIsOENBQThDO1FBQy9GLENBQUM7SUFDTDtJQUVSLGdEQUFnRCxHQUV4QyxxQkFDSSw4REFBQ2hCLHVEQUFTQTs7MEJBQ04sOERBQUNOLHlEQUFXQTs7a0NBQ1IsOERBQUNDLHVEQUFTQTtrQ0FBQzs7Ozs7O2tDQUNYLDhEQUFDRyxtREFBS0E7d0JBQUNtQyxTQUFRO3dCQUFZQyxVQUFVLENBQUNDLElBQU07NEJBQ3hDL0IsaUJBQWlCK0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO3dCQUNuQzs7Ozs7O2tDQUVBLDhEQUFDMUMsdURBQVNBO2tDQUFDOzs7Ozs7a0NBQ1gsOERBQUNHLG1EQUFLQTt3QkFBQ21DLFNBQVE7d0JBQVlDLFVBQVUsQ0FBQ0MsSUFBTTs0QkFDeEM3QixrQkFBa0I2QixFQUFFQyxNQUFNLENBQUNDLEtBQUs7d0JBQ3BDOzs7Ozs7a0NBRUEsOERBQUMxQyx1REFBU0E7a0NBQUM7Ozs7OztrQ0FDWCw4REFBQ0csbURBQUtBO3dCQUFDbUMsU0FBUTt3QkFBWUMsVUFBVSxDQUFDQyxJQUFNOzRCQUN4QzNCLGdCQUFnQjJCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzt3QkFDbEM7Ozs7OztrQ0FFQSw4REFBQzFDLHVEQUFTQTtrQ0FBQzs7Ozs7O2tDQUNYLDhEQUFDRyxtREFBS0E7d0JBQUN3QyxNQUFLO3dCQUFRTCxTQUFRO3dCQUFZQyxVQUFVLENBQUNDLElBQU07NEJBQ3JEekIsYUFBYXlCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs0QkFDM0J2QixjQUFjcUIsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO3dCQUNoQzs7Ozs7O2tDQUVBLDhEQUFDRTtrQ0FBR3hCOzs7Ozs7a0NBQ0osOERBQUN3QjtrQ0FBR3RCOzs7Ozs7a0NBRUosOERBQUN0Qix1REFBU0E7a0NBQUM7Ozs7OztrQ0FDWCw4REFBQ0csbURBQUtBO3dCQUFDbUMsU0FBUTt3QkFBWUMsVUFBVSxDQUFDQyxJQUFNOzRCQUN4Q3ZCLGdCQUFnQnVCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzt3QkFDbEM7Ozs7OztrQ0FFQSw4REFBQ3pDLDREQUFjQTtrQ0FBQzs7Ozs7Ozs7Ozs7OzBCQUdwQiw4REFBQ0csb0RBQU1BO2dCQUFDeUMsU0FBUyxJQUFNO29CQUNuQm5CO2dCQUNKOzBCQUFHOzs7Ozs7MEJBRUgsOERBQUNrQjswQkFBR3BCOzs7Ozs7Ozs7Ozs7QUFLaEI7R0E5RkVqQjtLQUFBQTtBQWdHTiwrREFBZUEsWUFBWUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlY29tcG9uZW50cy9Mb2dpbi9yZWdpc3RlcmZvcm0uanM/OGUxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1xyXG4gICAgRmxleCxcclxuICAgIEJveCxcclxuICAgIEhlYWRpbmcsXHJcbiAgICBGb3JtQ29udHJvbCxcclxuICAgIEZvcm1MYWJlbCxcclxuICAgIEZvcm1IZWxwZXJUZXh0LFxyXG4gICAgRm9ybUVycm9yTWVzc2FnZSxcclxuICAgIElucHV0LFxyXG4gICAgQnV0dG9uLCBDb250YWluZXJcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IFJlZ2lzdGVyRm9ybSA9ICgpID0+IHtcclxuXHJcbi8qICBDT05TVCBGT1IgSU5QVVQgR1JBQkJJTkcgVE8gQkFDS0VORCAqL1xyXG5cclxuICAgIGNvbnN0IFt1c2VyZmlyc3ROYW1lLCBzZXRVc2VyRmlyc3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3VzZXJtaWRkbGVOYW1lLCBzZXRVc2VyTWlkZGxlTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt1c2VybGFzdE5hbWUsIHNldFVzZXJMYXN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt1c2VyRW1haWwsIHNldFVzZXJFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt1c2VyUGFzc3dvcmQsIHNldFVzZXJQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbi8qIENPTlNUIEZPUiBFTUFJTCBWQUxJREFUSU9OICovXHJcblxyXG4gICAgY29uc3QgW2VtYWlsQ2hlY2ssIHNldEVtYWlsQ2hlY2tdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZW1haWxNZXNzYWdlLCBzZXRFbWFpbE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZW1haWxBbHJlYWR5RXhpc3QsIHNldEVtYWlsQWxyZWFkeUV4aXN0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3JlZ2lzdHJhdGlvblN1Y2Nlcywgc2V0UmVnaXN0cmF0aW9uU3VjY2VzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuLyogRlVOQ1RJT04gVEhBVCBJUyBDQUxMRUQgV0hFTiBVIENMSUNLIE9OIFJFR0lTVFJBVElPTiBXSVRIIEZPUk1BVCBDSEVDSyBPTiBUSEUgRU1BSUwtQURSRVNTICovXHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXJSZWdpc3RyYXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZ0V4UCA9IC9eW2EtekEtWjAtOS5fJSstXStAKD86W2EtekEtWjAtOV0rXFwuKStbQS1aYS16XSskL2dcclxuXHJcbiAgICAgICAgaWYgKHJlZ0V4UC50ZXN0KGVtYWlsQ2hlY2spKSB7IC8vIENIRUNLUyBFTUFJTCBGT1JNQVQgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBBeGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3JlZ2lzdGVyXCIsIHtcclxuICAgICAgICAgICAgICAgIHVzZXJGaXJzdE5hbWU6IHVzZXJmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICB1c2VyTWlkZGxlTmFtZTogdXNlcm1pZGRsZU5hbWUsXHJcbiAgICAgICAgICAgICAgICB1c2VyTGFzdE5hbWU6IHVzZXJsYXN0TmFtZSxcclxuICAgICAgICAgICAgICAgIHVzZXJFbWFpbDogdXNlckVtYWlsLFxyXG4gICAgICAgICAgICAgICAgdXNlclBhc3N3b3JkOiB1c2VyUGFzc3dvcmQsXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucmVnaXN0cmF0aW9uRmFpbHVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RW1haWxBbHJlYWR5RXhpc3QocmVzcG9uc2UuZGF0YS5yZWdpc3RyYXRpb25GYWlsdXIpIC8vIE1FU1NBR0UgRElTUExBWUVEIFdIRU4gRU1BSUwgQURSRVNTIEFMUkVBRFkgRVhJU1RTIElOIFRIRSBEQVRBQkFTRVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRSZWdpc3RyYXRpb25TdWNjZXMocmVzcG9uc2UuZGF0YS5yZWdpc3RyYXRpb25TdWNjZXNmdWxsKSAvLyBNRVNTQUdFIERJU1BMQVlFRCBXSEVOIERBVEFCQVNFIElOU0VSVElPTiBIQVMgQkVFTiBDT01QTEVURURcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCFyZWdFeFAudGVzdChlbWFpbENoZWNrKSAmJiBlbWFpbENoZWNrICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFbWFpbE1lc3NhZ2UgKFwiSW52YWxpZCBFbWFpbFwiKTsgLy8gTUVTU0FHRSBESVNQTEFZRUQgV0hFTiBFTUFJTCBGT1JNQVQgSVMgV1JPTkdcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0RW1haWxNZXNzYWdlIChcIlRoaXMgZmllbGQgaXMgbWFuZGF0b3J5XCIpOyAvLyBNRVNTQUdFIERJU1BMQVlFRCBXSEVOIEZJRUxEIElTIEVNUFRZICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4vKiBDT05UQUlORVIgT0YgRk9STSBGSUVMRFMgQU5EIFJFR0lTVEVSIEJVVFRPTiAqL1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+Vm9vcm5hYW08L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdmFyaWFudD1cImxvZ2luZm9ybVwiIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VyRmlyc3ROYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5UdXNzZW52b2Vnc2VsPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhcmlhbnQ9XCJsb2dpbmZvcm1cIiBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXNlck1pZGRsZU5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPkFjaHRlcm5hYW08L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdmFyaWFudD1cImxvZ2luZm9ybVwiIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VyTGFzdE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPkVtYWlsIGFkZHJlc3M8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgdmFyaWFudD1cImxvZ2luZm9ybVwiIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VyRW1haWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFbWFpbENoZWNrKGUudGFyZ2V0LnZhbHVlKTsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9IH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e2VtYWlsTWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e2VtYWlsQWxyZWFkeUV4aXN0fTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5XYWNodHdvb3JkPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhcmlhbnQ9XCJsb2dpbmZvcm1cIiBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXNlclBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH0gLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1IZWxwZXJUZXh0PldlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZGV0YWlscy48L0Zvcm1IZWxwZXJUZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyUmVnaXN0cmF0aW9uICgpO1xyXG4gICAgICAgICAgICAgICAgfX0+UmVnaXN0cmVyZW48L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cD57cmVnaXN0cmF0aW9uU3VjY2VzfTwvcD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcbiAgICAgXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyRm9ybVxyXG5cclxuXHJcbi8qIFJFR0lTVEVSRk9STSBNQUFSIE1PRVQgTk9HIEdFQ0xFQVJFRCBXT1JERU4qL1xyXG5cclxuLyppbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgICBGbGV4LFxyXG4gICAgQm94LFxyXG4gICAgSGVhZGluZyxcclxuICAgIEZvcm1Db250cm9sLFxyXG4gICAgRm9ybUxhYmVsLFxyXG4gICAgRm9ybUhlbHBlclRleHQsXHJcbiAgICBGb3JtRXJyb3JNZXNzYWdlLFxyXG4gICAgSW5wdXQsXHJcbiAgICBCdXR0b24sIENvbnRhaW5lclxyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcblxyXG5jb25zdCBSZWdpc3RlckZvcm0gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+Vm9vcm5hYW08L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB2YXJpYW50PVwibG9naW5mb3JtXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlR1c3NlbnZvZWdzZWw8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB2YXJpYW50PVwibG9naW5mb3JtXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPkFjaHRlcm5hYW08L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB2YXJpYW50PVwibG9naW5mb3JtXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPkVtYWlsIGFkZHJlc3M8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiZW1haWxcIiB2YXJpYW50PVwibG9naW5mb3JtXCIgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtSGVscGVyVGV4dD5XZSdsbCBuZXZlciBzaGFyZSB5b3VyIGVtYWlsLjwvRm9ybUhlbHBlclRleHQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5XYWNodHdvb3JkPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdmFyaWFudD1cImxvZ2luZm9ybVwiIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uPlJlZ2lzdHJlcmVuPC9CdXR0b24+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlckZvcm0gKi8iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZsZXgiLCJCb3giLCJIZWFkaW5nIiwiRm9ybUNvbnRyb2wiLCJGb3JtTGFiZWwiLCJGb3JtSGVscGVyVGV4dCIsIkZvcm1FcnJvck1lc3NhZ2UiLCJJbnB1dCIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkF4aW9zIiwiUmVnaXN0ZXJGb3JtIiwidXNlcmZpcnN0TmFtZSIsInNldFVzZXJGaXJzdE5hbWUiLCJ1c2VybWlkZGxlTmFtZSIsInNldFVzZXJNaWRkbGVOYW1lIiwidXNlcmxhc3ROYW1lIiwic2V0VXNlckxhc3ROYW1lIiwidXNlckVtYWlsIiwic2V0VXNlckVtYWlsIiwidXNlclBhc3N3b3JkIiwic2V0VXNlclBhc3N3b3JkIiwiZW1haWxDaGVjayIsInNldEVtYWlsQ2hlY2siLCJlbWFpbE1lc3NhZ2UiLCJzZXRFbWFpbE1lc3NhZ2UiLCJlbWFpbEFscmVhZHlFeGlzdCIsInNldEVtYWlsQWxyZWFkeUV4aXN0IiwicmVnaXN0cmF0aW9uU3VjY2VzIiwic2V0UmVnaXN0cmF0aW9uU3VjY2VzIiwidXNlclJlZ2lzdHJhdGlvbiIsInJlZ0V4UCIsInRlc3QiLCJwb3N0IiwidXNlckZpcnN0TmFtZSIsInVzZXJNaWRkbGVOYW1lIiwidXNlckxhc3ROYW1lIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInJlZ2lzdHJhdGlvbkZhaWx1ciIsInJlZ2lzdHJhdGlvblN1Y2Nlc2Z1bGwiLCJ2YXJpYW50Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwicCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/pagecomponents/Login/registerform.js\n"));

/***/ })

});