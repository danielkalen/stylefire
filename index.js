"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var css_1 = require("./css");
var svg_1 = require("./svg");
var styler_1 = require("./styler");
function default_1(node) {
    return (node instanceof SVGGraphicsElement) ? svg_1.default(node) : css_1.default(node);
}
exports.default = default_1;
;
exports.createStyler = styler_1.default;
//# sourceMappingURL=index.js.map