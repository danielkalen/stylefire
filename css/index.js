"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styler_1 = require("../styler");
var render_1 = require("./render");
var value_types_1 = require("./value-types");
var transform_props_1 = require("./transform-props");
var prefixer_1 = require("./prefixer");
var cssStyler = styler_1.default({
    onRead: function (key, _a) {
        var element = _a.element;
        var valueType = value_types_1.default(key);
        if (transform_props_1.isTransformProp(key)) {
            return (valueType)
                ? valueType.default || 0
                : 0;
        }
        else {
            var domValue = window.getComputedStyle(element, null).getPropertyValue(prefixer_1.default(key)) || 0;
            return (valueType && valueType.parse) ? valueType.parse(domValue) : domValue;
        }
    },
    onRender: function (state, _a, changedValues) {
        var element = _a.element, enableHardwareAcceleration = _a.enableHardwareAcceleration;
        render_1.default(element, state, changedValues, enableHardwareAcceleration);
    },
    aliasMap: {
        x: 'translateX',
        y: 'translateY',
        z: 'translateZ',
        originX: 'transform-origin-x',
        originY: 'transform-origin-y'
    }
});
exports.default = function (element, props) {
    return cssStyler(__assign({ element: element, enableHardwareAcceleration: true }, props));
};
//# sourceMappingURL=index.js.map