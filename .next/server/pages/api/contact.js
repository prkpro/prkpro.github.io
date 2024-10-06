"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable import/no-anonymous-default-export */ /* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    (__webpack_require__(/*! dotenv */ \"dotenv\").config)({\n        path: `${__dirname}/../../Collections/.env`\n    });\n    let nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n    const transporter = nodemailer.createTransport({\n        port: 465,\n        host: \"smtp.gmail.com\",\n        auth: {\n            user: process.env.SENDER,\n            pass: process.env.PASSWORD\n        },\n        secure: true\n    });\n    const mailData = {\n        from: process.env.SENDER,\n        to: process.env.TO,\n        subject: `Message From Portfolio Website`,\n        text: req.body.message + \" | Sent from: \" + req.body.email,\n        html: `<p>Name: ${req.body.name}</p><p>Email: ${req.body.email}</p><p>Phone: ${req.body.phone}</p><p>Message: ${req.body.message}</p>`\n    };\n    transporter.sendMail(mailData, function(err, info) {\n        if (err) console.log(\"error\");\n        else console.log(\"info\");\n    });\n    res.status(200);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEscURBQXFELEdBQ3JELDZCQUFlLG9DQUFVQSxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNqQ0Msb0RBQXdCLENBQUM7UUFBRUUsSUFBSSxFQUFFLENBQUMsRUFBRUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDO0tBQUUsQ0FBQztJQUV6RSxJQUFJQyxVQUFVLEdBQUdKLG1CQUFPLENBQUMsOEJBQVksQ0FBQztJQUN0QyxNQUFNSyxXQUFXLEdBQUdELFVBQVUsQ0FBQ0UsZUFBZSxDQUFDO1FBQzdDQyxJQUFJLEVBQUUsR0FBRztRQUNUQyxJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCQyxJQUFJLEVBQUU7WUFDSkMsSUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsTUFBTTtZQUN4QkMsSUFBSSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csUUFBUTtTQUMzQjtRQUNEQyxNQUFNLEVBQUUsSUFBSTtLQUNiLENBQUM7SUFDRixNQUFNQyxRQUFRLEdBQUc7UUFDZkMsSUFBSSxFQUFFUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsTUFBTTtRQUN4Qk0sRUFBRSxFQUFFUixPQUFPLENBQUNDLEdBQUcsQ0FBQ1EsRUFBRTtRQUNsQkMsT0FBTyxFQUFFLENBQUMsOEJBQThCLENBQUM7UUFDekNDLElBQUksRUFBRXhCLEdBQUcsQ0FBQ3lCLElBQUksQ0FBQ0MsT0FBTyxHQUFHLGdCQUFnQixHQUFHMUIsR0FBRyxDQUFDeUIsSUFBSSxDQUFDRSxLQUFLO1FBQzFEQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUU1QixHQUFHLENBQUN5QixJQUFJLENBQUNJLElBQUksQ0FBQyxjQUFjLEVBQUU3QixHQUFHLENBQUN5QixJQUFJLENBQUNFLEtBQUssQ0FBQyxjQUFjLEVBQUUzQixHQUFHLENBQUN5QixJQUFJLENBQUNLLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTlCLEdBQUcsQ0FBQ3lCLElBQUksQ0FBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQztLQUN2STtJQUNEbkIsV0FBVyxDQUFDd0IsUUFBUSxDQUFDWixRQUFRLEVBQUUsU0FBVWEsR0FBRyxFQUFFQyxJQUFJLEVBQUU7UUFDbEQsSUFBSUQsR0FBRyxFQUNMRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7YUFFcEJELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDLENBQUM7SUFDRmxDLEdBQUcsQ0FBQ21DLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Bya3Byby5naXRodWIuaW8vLi9wYWdlcy9hcGkvY29udGFjdC5qcz8zNDkzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1hbm9ueW1vdXMtZGVmYXVsdC1leHBvcnQgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICByZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoeyBwYXRoOiBgJHtfX2Rpcm5hbWV9Ly4uLy4uL0NvbGxlY3Rpb25zLy5lbnZgIH0pXG5cbiAgbGV0IG5vZGVtYWlsZXIgPSByZXF1aXJlKCdub2RlbWFpbGVyJylcbiAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgcG9ydDogNDY1LFxuICAgIGhvc3Q6IFwic210cC5nbWFpbC5jb21cIixcbiAgICBhdXRoOiB7XG4gICAgICB1c2VyOiBwcm9jZXNzLmVudi5TRU5ERVIsXG4gICAgICBwYXNzOiBwcm9jZXNzLmVudi5QQVNTV09SRCxcbiAgICB9LFxuICAgIHNlY3VyZTogdHJ1ZSxcbiAgfSlcbiAgY29uc3QgbWFpbERhdGEgPSB7XG4gICAgZnJvbTogcHJvY2Vzcy5lbnYuU0VOREVSLFxuICAgIHRvOiBwcm9jZXNzLmVudi5UTyxcbiAgICBzdWJqZWN0OiBgTWVzc2FnZSBGcm9tIFBvcnRmb2xpbyBXZWJzaXRlYCxcbiAgICB0ZXh0OiByZXEuYm9keS5tZXNzYWdlICsgXCIgfCBTZW50IGZyb206IFwiICsgcmVxLmJvZHkuZW1haWwsXG4gICAgaHRtbDogYDxwPk5hbWU6ICR7cmVxLmJvZHkubmFtZX08L3A+PHA+RW1haWw6ICR7cmVxLmJvZHkuZW1haWx9PC9wPjxwPlBob25lOiAke3JlcS5ib2R5LnBob25lfTwvcD48cD5NZXNzYWdlOiAke3JlcS5ib2R5Lm1lc3NhZ2V9PC9wPmBcbiAgfVxuICB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsRGF0YSwgZnVuY3Rpb24gKGVyciwgaW5mbykge1xuICAgIGlmIChlcnIpXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InKVxuICAgIGVsc2VcbiAgICAgIGNvbnNvbGUubG9nKCdpbmZvJylcbiAgfSlcbiAgcmVzLnN0YXR1cygyMDApXG59Il0sIm5hbWVzIjpbInJlcSIsInJlcyIsInJlcXVpcmUiLCJjb25maWciLCJwYXRoIiwiX19kaXJuYW1lIiwibm9kZW1haWxlciIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0IiwicG9ydCIsImhvc3QiLCJhdXRoIiwidXNlciIsInByb2Nlc3MiLCJlbnYiLCJTRU5ERVIiLCJwYXNzIiwiUEFTU1dPUkQiLCJzZWN1cmUiLCJtYWlsRGF0YSIsImZyb20iLCJ0byIsIlRPIiwic3ViamVjdCIsInRleHQiLCJib2R5IiwibWVzc2FnZSIsImVtYWlsIiwiaHRtbCIsIm5hbWUiLCJwaG9uZSIsInNlbmRNYWlsIiwiZXJyIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();