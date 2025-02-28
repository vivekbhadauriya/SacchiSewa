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
exports.id = "app/api/verifiedFundraiser/route";
exports.ids = ["app/api/verifiedFundraiser/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FverifiedFundraiser%2Froute&page=%2Fapi%2FverifiedFundraiser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FverifiedFundraiser%2Froute.ts&appDir=C%3A%5CUsers%5Chp%5CDesktop%5CsacchisewaUI%5Cmy-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Chp%5CDesktop%5CsacchisewaUI%5Cmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FverifiedFundraiser%2Froute&page=%2Fapi%2FverifiedFundraiser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FverifiedFundraiser%2Froute.ts&appDir=C%3A%5CUsers%5Chp%5CDesktop%5CsacchisewaUI%5Cmy-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Chp%5CDesktop%5CsacchisewaUI%5Cmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_hp_Desktop_sacchisewaUI_my_app_src_app_api_verifiedFundraiser_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/verifiedFundraiser/route.ts */ \"(rsc)/./src/app/api/verifiedFundraiser/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/verifiedFundraiser/route\",\n        pathname: \"/api/verifiedFundraiser\",\n        filename: \"route\",\n        bundlePath: \"app/api/verifiedFundraiser/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\hp\\\\Desktop\\\\sacchisewaUI\\\\my-app\\\\src\\\\app\\\\api\\\\verifiedFundraiser\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_hp_Desktop_sacchisewaUI_my_app_src_app_api_verifiedFundraiser_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ2ZXJpZmllZEZ1bmRyYWlzZXIlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnZlcmlmaWVkRnVuZHJhaXNlciUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnZlcmlmaWVkRnVuZHJhaXNlciUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNocCU1Q0Rlc2t0b3AlNUNzYWNjaGlzZXdhVUklNUNteS1hcHAlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2hwJTVDRGVza3RvcCU1Q3NhY2NoaXNld2FVSSU1Q215LWFwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDeUM7QUFDdEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGhwXFxcXERlc2t0b3BcXFxcc2FjY2hpc2V3YVVJXFxcXG15LWFwcFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx2ZXJpZmllZEZ1bmRyYWlzZXJcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3ZlcmlmaWVkRnVuZHJhaXNlci9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3ZlcmlmaWVkRnVuZHJhaXNlclwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdmVyaWZpZWRGdW5kcmFpc2VyL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcaHBcXFxcRGVza3RvcFxcXFxzYWNjaGlzZXdhVUlcXFxcbXktYXBwXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHZlcmlmaWVkRnVuZHJhaXNlclxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FverifiedFundraiser%2Froute&page=%2Fapi%2FverifiedFundraiser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FverifiedFundraiser%2Froute.ts&appDir=C%3A%5CUsers%5Chp%5CDesktop%5CsacchisewaUI%5Cmy-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Chp%5CDesktop%5CsacchisewaUI%5Cmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/verifiedFundraiser/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/verifiedFundraiser/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/database */ \"(rsc)/./src/utils/database.js\");\n\n\n\nasync function GET() {\n    console.log(\"inside  get req\");\n    try {\n        await (0,_utils_database__WEBPACK_IMPORTED_MODULE_2__.connectToDB)();\n        // Direct collection access\n        const db = (mongoose__WEBPACK_IMPORTED_MODULE_1___default().connection).db;\n        if (!db) {\n            throw new Error('Database connection not established');\n        }\n        const collection = db.collection('verifiedCamp'); // Exact match from your logs\n        // Try to get documents directly\n        console.log(collection);\n        const campaigns = await collection.find({}).toArray();\n        console.log(\"Direct collection access found:\", campaigns.length, \"documents\");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(campaigns, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Error fetching campaigns',\n            error: error instanceof Error ? error.message : 'An unknown error occurred'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS92ZXJpZmllZEZ1bmRyYWlzZXIvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMkM7QUFDWDtBQUNlO0FBRXhDLGVBQWVHO0lBQ2xCQyxRQUFRQyxHQUFHLENBQUM7SUFDWixJQUFJO1FBQ0EsTUFBTUgsNERBQVdBO1FBRWpCLDJCQUEyQjtRQUMzQixNQUFNSSxLQUFLTCw0REFBbUIsQ0FBQ0ssRUFBRTtRQUNqQyxJQUFJLENBQUNBLElBQUk7WUFDTCxNQUFNLElBQUlFLE1BQU07UUFDcEI7UUFDQSxNQUFNQyxhQUFhSCxHQUFHRyxVQUFVLENBQUMsaUJBQWlCLDZCQUE2QjtRQUUvRSxnQ0FBZ0M7UUFDaENMLFFBQVFDLEdBQUcsQ0FBQ0k7UUFDWixNQUFNQyxZQUFZLE1BQU1ELFdBQVdFLElBQUksQ0FBQyxDQUFDLEdBQUdDLE9BQU87UUFDbkRSLFFBQVFDLEdBQUcsQ0FBQyxtQ0FBbUNLLFVBQVVHLE1BQU0sRUFBRTtRQUVqRSxPQUFPYixxREFBWUEsQ0FBQ2MsSUFBSSxDQUFDSixXQUFXO1lBQUVLLFFBQVE7UUFBSTtJQUN0RCxFQUFFLE9BQU9DLE9BQU87UUFDWlosUUFBUVksS0FBSyxDQUFDLFVBQVVBO1FBQ3hCLE9BQU9oQixxREFBWUEsQ0FBQ2MsSUFBSSxDQUFDO1lBQ3JCRyxTQUFTO1lBQ1RELE9BQU9BLGlCQUFpQlIsUUFBUVEsTUFBTUMsT0FBTyxHQUFHO1FBQ3BELEdBQUc7WUFBRUYsUUFBUTtRQUFJO0lBQ3JCO0FBQ0oiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXHNhY2NoaXNld2FVSVxcbXktYXBwXFxzcmNcXGFwcFxcYXBpXFx2ZXJpZmllZEZ1bmRyYWlzZXJcXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IGNvbm5lY3RUb0RCIH0gZnJvbSBcIkAvdXRpbHMvZGF0YWJhc2VcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpe1xuICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlICBnZXQgcmVxXCIpO1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGNvbm5lY3RUb0RCKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBEaXJlY3QgY29sbGVjdGlvbiBhY2Nlc3NcbiAgICAgICAgY29uc3QgZGIgPSBtb25nb29zZS5jb25uZWN0aW9uLmRiO1xuICAgICAgICBpZiAoIWRiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RhdGFiYXNlIGNvbm5lY3Rpb24gbm90IGVzdGFibGlzaGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ3ZlcmlmaWVkQ2FtcCcpOyAvLyBFeGFjdCBtYXRjaCBmcm9tIHlvdXIgbG9nc1xuICAgICAgICBcbiAgICAgICAgLy8gVHJ5IHRvIGdldCBkb2N1bWVudHMgZGlyZWN0bHlcbiAgICAgICAgY29uc29sZS5sb2coY29sbGVjdGlvbik7XG4gICAgICAgIGNvbnN0IGNhbXBhaWducyA9IGF3YWl0IGNvbGxlY3Rpb24uZmluZCh7fSkudG9BcnJheSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRpcmVjdCBjb2xsZWN0aW9uIGFjY2VzcyBmb3VuZDpcIiwgY2FtcGFpZ25zLmxlbmd0aCwgXCJkb2N1bWVudHNcIik7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oY2FtcGFpZ25zLCB7IHN0YXR1czogMjAwIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvciBmZXRjaGluZyBjYW1wYWlnbnMnLCBcbiAgICAgICAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkJ1xuICAgICAgICB9LCB7IHN0YXR1czogNTAwIH0pO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibW9uZ29vc2UiLCJjb25uZWN0VG9EQiIsIkdFVCIsImNvbnNvbGUiLCJsb2ciLCJkYiIsImNvbm5lY3Rpb24iLCJFcnJvciIsImNvbGxlY3Rpb24iLCJjYW1wYWlnbnMiLCJmaW5kIiwidG9BcnJheSIsImxlbmd0aCIsImpzb24iLCJzdGF0dXMiLCJlcnJvciIsIm1lc3NhZ2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/verifiedFundraiser/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/utils/database.js":
/*!*******************************!*\
  !*** ./src/utils/database.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDB: () => (/* binding */ connectToDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet isConnected = false; // tracking the connection of user and database\nconsole.log(process.env.MONGODB_URI);\nconst connectToDB = async ()=>{\n    // Check if not already connected\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {\n            dbName: \"SewaSacchi\",\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        isConnected = true; // Update connection state\n        console.log('Connected to MongoDB');\n    } catch (error) {\n        console.error('MongoDB connection error:', error);\n        throw new Error('Failed to connect to MongoDB');\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvZGF0YWJhc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBQ2hDLElBQUlDLGNBQWMsT0FBTywrQ0FBK0M7QUFDeEVDLFFBQVFDLEdBQUcsQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0FBQzVCLE1BQU1DLGNBQWM7SUFDeEIsaUNBQWlDO0lBQzVCLElBQUk7UUFDQSxNQUFNUCx1REFBZ0IsQ0FBQ0ksUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUU7WUFDNUNHLFFBQVE7WUFDUkMsaUJBQWlCO1lBQ2pCQyxvQkFBb0I7UUFDeEI7UUFDQVYsY0FBYyxNQUFNLDBCQUEwQjtRQUM5Q0MsUUFBUUMsR0FBRyxDQUFDO0lBQ2hCLEVBQUUsT0FBT1MsT0FBTztRQUNaVixRQUFRVSxLQUFLLENBQUMsNkJBQTZCQTtRQUMzQyxNQUFNLElBQUlDLE1BQU07SUFDcEI7QUFDSixFQUFFIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGhwXFxEZXNrdG9wXFxzYWNjaGlzZXdhVUlcXG15LWFwcFxcc3JjXFx1dGlsc1xcZGF0YWJhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmxldCBpc0Nvbm5lY3RlZCA9IGZhbHNlOyAvLyB0cmFja2luZyB0aGUgY29ubmVjdGlvbiBvZiB1c2VyIGFuZCBkYXRhYmFzZVxuY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpXG5leHBvcnQgY29uc3QgY29ubmVjdFRvREIgPSBhc3luYyAoKSA9PiB7XG4gICAvLyBDaGVjayBpZiBub3QgYWxyZWFkeSBjb25uZWN0ZWRcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkksIHtcbiAgICAgICAgICAgICAgICBkYk5hbWU6IFwiU2V3YVNhY2NoaVwiLFxuICAgICAgICAgICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSwgLy8gT3B0aW9uYWwgaW4gbmV3ZXIgdmVyc2lvbnNcbiAgICAgICAgICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsIC8vIE9wdGlvbmFsIGluIG5ld2VyIHZlcnNpb25zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlzQ29ubmVjdGVkID0gdHJ1ZTsgLy8gVXBkYXRlIGNvbm5lY3Rpb24gc3RhdGVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gTW9uZ29EQicpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTW9uZ29EQiBjb25uZWN0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGNvbm5lY3QgdG8gTW9uZ29EQicpO1xuICAgICAgICB9XG4gICAgfTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImlzQ29ubmVjdGVkIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImNvbm5lY3RUb0RCIiwiY29ubmVjdCIsImRiTmFtZSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImVycm9yIiwiRXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/database.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FverifiedFundraiser%2Froute&page=%2Fapi%2FverifiedFundraiser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FverifiedFundraiser%2Froute.ts&appDir=C%3A%5CUsers%5Chp%5CDesktop%5CsacchisewaUI%5Cmy-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Chp%5CDesktop%5CsacchisewaUI%5Cmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();