"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../styler/utils");
var transform_props_1 = require("../css/transform-props");
var ZERO_NOT_ZERO = 0.0000001;
var percentToPixels = function (percent, length) {
    return (percent / 100) * length + 'px';
};
var build = function (state, dimensions, isPath, pathLength) {
    var hasTransform = false;
    var hasDashArray = false;
    var props = {};
    var dashArrayStyles = isPath ? {
        pathLength: '0',
        pathSpacing: "" + pathLength
    } : undefined;
    var scale = state.scale !== undefined ? state.scale || ZERO_NOT_ZERO : state.scaleX || 1;
    var scaleY = state.scaleY !== undefined ? state.scaleY || ZERO_NOT_ZERO : scale || 1;
    var transformOriginX = dimensions.width * ((state.originX || 50) / 100) + dimensions.x;
    var transformOriginY = dimensions.height * ((state.originY || 50) / 100) + dimensions.y;
    var scaleTransformX = -transformOriginX * (scale * 1);
    var scaleTransformY = -transformOriginY * (scaleY * 1);
    var scaleReplaceX = transformOriginX / scale;
    var scaleReplaceY = transformOriginY / scaleY;
    var transform = {
        translate: "translate(" + state.translateX + ", " + state.translateY + ") ",
        scale: "translate(" + scaleTransformX + ", " + scaleTransformY + ") scale(" + scale + ", " + scaleY + ") translate(" + scaleReplaceX + ", " + scaleReplaceY + ") ",
        rotate: "rotate(" + state.rotate + ", " + transformOriginX + ", " + transformOriginY + ") ",
        skewX: "skewX(" + state.skewX + ") ",
        skewY: "skewY(" + state.skewY + ") "
    };
    for (var key in state) {
        if (state.hasOwnProperty(key)) {
            var value = state[key];
            if (transform_props_1.isTransformProp(key)) {
                hasTransform = true;
            }
            else if (isPath && (key === 'pathLength' || key === 'pathSpacing') && typeof value === 'number') {
                hasDashArray = true;
                dashArrayStyles[key] = percentToPixels(value, pathLength);
            }
            else if (isPath && key === 'pathOffset') {
                props['stroke-dashoffset'] = percentToPixels(-value, pathLength);
            }
            else {
                props[utils_1.camelToDash(key)] = value;
            }
        }
    }
    if (hasDashArray) {
        props['stroke-dasharray'] = dashArrayStyles.pathLength + ' ' + dashArrayStyles.pathSpacing;
    }
    if (hasTransform) {
        props.transform = '';
        for (var key in transform) {
            if (transform.hasOwnProperty(key)) {
                var defaultValue = (key === 'scale') ? '1' : '0';
                props.transform += transform[key].replace(/undefined/g, defaultValue);
            }
        }
    }
    return props;
};
exports.default = build;
//# sourceMappingURL=build.js.map