"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = exports.router = void 0;
var AppRouter_1 = require("../../AppRouter");
exports.router = AppRouter_1.AppRouter.getInstance();
function controller(prefix) {
    return function (target) {
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata('path', target.prototype, key);
            if (path) {
                exports.router.get(prefix + path, routeHandler);
            }
        }
    };
}
exports.controller = controller;
