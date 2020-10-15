"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var j = 0; j < length; j++) {
            for (var i = 0; i < length - j; i++) {
                if (this.collection.compare(i, i + 1)) {
                    this.collection.swap(i, i + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
