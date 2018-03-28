"use strict";
exports.__esModule = true;
var StaticValidator_1 = require("./StaticValidator");
var strings = [
    "Feliece", "98502", "101"
];
strings.forEach(function (pluto) {
    console.log("\"" + pluto + "\" " + StaticValidator_1["default"](pluto) + " " + (StaticValidator_1["default"](pluto) ? "matches" : "does not match"));
});
