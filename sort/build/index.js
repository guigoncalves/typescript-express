"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var Sorter_1 = require("./Sorter");
var numberCollection = new NumbersCollection_1.NumbersCollection([0, 6, 5, 3, 4]);
var sorter = new Sorter_1.Sorter(numberCollection);
sorter.sort();
console.log("here");
console.log(sorter.collection);
