(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TileLayer = window.maptalks.TileLayer;

var BaseTileLayer = function (_TileLayer) {
    _inherits(BaseTileLayer, _TileLayer);

    function BaseTileLayer(id, options) {
        _classCallCheck(this, BaseTileLayer);

        return _possibleConstructorReturn(this, (BaseTileLayer.__proto__ || Object.getPrototypeOf(BaseTileLayer)).call(this, id, options));
    }

    return BaseTileLayer;
}(TileLayer);

exports.default = BaseTileLayer;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var mapboxKey = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejh2N21nMzAxMmQzMnA5emRyN2lucW0ifQ.jSE-g2vsn48Ry928pqylcg';

var params = {
    TDT: {
        Normal: {
            url: 'http://t0.tianditu.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}'
        },
        Normal_Label: {
            url: 'http://t0.tianditu.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}'
        },
        Satellite: {
            url: 'http://t0.tianditu.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}'
        },
        Satellite_Label: {
            url: 'http://t0.tianditu.cn/DataServer?T=cia_w&X={x}&Y={y}&L={z}'
        },

        Terrain: {
            url: 'http://t0.tianditu.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}'
        },

        Terrain_Label: {
            url: 'http://t0.tianditu.cn/DataServer?T=cta_w&X={x}&Y={y}&L={z}'
        }
    },
    GEOQ: {
        Colour: {
            url: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}'
        },
        Gray: {
            url: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}'
        },
        Midnightblue: {
            url: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}'
        }
    },
    Google: {
        Normal: {
            url: 'http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}'
        },
        Satellite: {
            url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
        }

    },
    Amap: {
        Normal: {
            url: 'http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
        },
        Satellite: {
            url: "http://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}"
        },
        Satellite_Label: {
            url: "http://webst01.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}"
        }
    },
    Tencent: {
        Normal: {
            url: "http://rt0.map.gtimg.com/realtimerender?z={z}&x={x}&y={y}&type=vector&style=0"

        },
        Satellite: {
            url: "http://p0.map.gtimg.com/sateTiles/{z}/{m}/{n}/{x}_{y}.jpg"

        },
        Satellite_Label: {
            url: "http://rt3.map.gtimg.com/tile?z={z}&x={x}&y={y}&type=vector&styleid=3&version=117"
        },
        Terrain: {
            url: "http://p0.map.gtimg.com/demTiles/{z}/{m}/{n}/{x}_{y}.jpg"
        },
        Terrain_Label: {
            url: "http://rt3.map.gtimg.com/tile?z={z}&x={x}&y={y}&type=vector&styleid=3&version=117"
        }
    },
    Osm: {
        Normal: {
            url: 'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png'
        },
        Bike: {
            url: 'https://c.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=6170aad10dfd42a38d4d8c709a536f38'
        },
        Transport: {
            url: 'https://c.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=6170aad10dfd42a38d4d8c709a536f38'
        },
        Humanitarian: {
            url: 'https://tile-b.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        }
    },
    CartoDb: {
        Dark: {
            url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
        },
        Light: {
            url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
        }
    },
    Mapbox: {
        Streets: {
            url: 'http://a.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=' + mapboxKey
        },
        Dark: {
            url: 'http://a.tiles.mapbox.com/v4/mapbox.dark/{z}/{x}/{y}.png?access_token=' + mapboxKey
        },
        LightDark: {
            url: 'http://a.tiles.mapbox.com/v3/spatialdev.map-c9z2cyef/{z}/{x}/{y}.png'
        },
        Satellite: {
            url: 'http://a.tiles.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?access_token=' + mapboxKey
        },
        Light: {
            url: 'http://a.tiles.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png?access_token=' + mapboxKey
        },
        Emerald: {
            url: 'http://a.tiles.mapbox.com/v4/mapbox.emerald/{z}/{x}/{y}.png?access_token=' + mapboxKey
        },
        White: {
            url: 'http://a.tiles.mapbox.com/v4/examples.map-h67hf2ic/{z}/{x}/{y}.png?access_token=' + mapboxKey
        },
        Red: {
            url: 'http://a.tiles.mapbox.com/v4/examples.map-h68a1pf7,examples.npr-stations/{z}/{x}/{y}.png?access_token=' + mapboxKey
        },
        Outdoors: {
            url: 'http://a.tiles.mapbox.com/v4/mapbox.outdoors/{z}/{x}/{y}.png?access_token=' + mapboxKey
        },
        StreetsSatellite: {
            url: 'http://a.tiles.mapbox.com/v4/mapbox.streets-satellite/{z}/{x}/{y}.png?access_token=' + mapboxKey
        },
        Comic: {
            url: 'http://a.tiles.mapbox.com/v4/mapbox.comic/{z}/{x}/{y}.png?access_token=' + mapboxKey
        },
        Building: {
            url: 'https://b.tiles.mapbox.com/v3/osmbuildings.kbpalbpk/{z}/{x}/{y}.png'
        }
    }
};

exports.default = params;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _TileLayerCollection = __webpack_require__(3);

var _TileLayerCollection2 = _interopRequireDefault(_TileLayerCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (!window.maptalks) throw new Error('not find maptalks lib');

window.maptalks.TileLayerCollection = _TileLayerCollection2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TdtTileLayer = __webpack_require__(4);

var _TdtTileLayer2 = _interopRequireDefault(_TdtTileLayer);

var _GeoqTileLayer = __webpack_require__(5);

var _GeoqTileLayer2 = _interopRequireDefault(_GeoqTileLayer);

var _GoogleTileLayer = __webpack_require__(6);

var _GoogleTileLayer2 = _interopRequireDefault(_GoogleTileLayer);

var _AmapTileLayer = __webpack_require__(7);

var _AmapTileLayer2 = _interopRequireDefault(_AmapTileLayer);

var _TencentTileLayer = __webpack_require__(8);

var _TencentTileLayer2 = _interopRequireDefault(_TencentTileLayer);

var _OsmTileLayer = __webpack_require__(9);

var _OsmTileLayer2 = _interopRequireDefault(_OsmTileLayer);

var _CartoDbTileLayer = __webpack_require__(10);

var _CartoDbTileLayer2 = _interopRequireDefault(_CartoDbTileLayer);

var _MapboxTileLayer = __webpack_require__(11);

var _MapboxTileLayer2 = _interopRequireDefault(_MapboxTileLayer);

var _utils = __webpack_require__(12);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var maptalks = window.maptalks;

var TileLayerCollection = function () {
    function TileLayerCollection() {
        _classCallCheck(this, TileLayerCollection);
    }

    _createClass(TileLayerCollection, null, [{
        key: "getTdtTileLayer",
        value: function getTdtTileLayer(id) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var baselayers = [];
            var baseLayer = new _TdtTileLayer2.default(_utils2.default.uuid(), options);
            baselayers.push(baseLayer);

            if (options.style) {
                options.style = options.style + '_Label';
                var baseLayer1 = new _TdtTileLayer2.default(_utils2.default.uuid(), options);
                baselayers.push(baseLayer1);
            }

            return new maptalks.GroupTileLayer(id, baselayers);
        }
    }, {
        key: "getGeoqTileLayer",
        value: function getGeoqTileLayer(id) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var baseLayer = new _GeoqTileLayer2.default(id, options);
            return baseLayer;
        }
    }, {
        key: "getGoogleTileLayer",
        value: function getGoogleTileLayer(id) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var baseLayer = new _GoogleTileLayer2.default(id, options);
            return baseLayer;
        }
    }, {
        key: "getAmapTileLayer",
        value: function getAmapTileLayer(id) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (options.style === 'Satellite') {
                var baseLayers = [];
                var baseLayer = new _AmapTileLayer2.default(_utils2.default.uuid(), options);
                baseLayers.push(baseLayer);
                options.style = options.style + '_Label';
                var baseLayer1 = new _AmapTileLayer2.default(_utils2.default.uuid(), options);
                baseLayers.push(baseLayer1);
                return new maptalks.GroupTileLayer(id, baseLayers);
            } else return new _AmapTileLayer2.default(id, options);
        }
    }, {
        key: "getTencentTileLayer",
        value: function getTencentTileLayer(id) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (options.style === 'Normal') {
                return new _TencentTileLayer2.default(id, options);
            } else {
                var baseLayers = [];
                var baseLayer = new _TencentTileLayer2.default(_utils2.default.uuid(), options);
                baseLayers.push(baseLayer);
                options.style = options.style + '_Label';
                var baseLayer1 = new _TencentTileLayer2.default(_utils2.default.uuid(), options);
                baseLayers.push(baseLayer1);
                return new maptalks.GroupTileLayer(id, baseLayers);
            }
        }
    }, {
        key: "getOsmTileLayer",
        value: function getOsmTileLayer(id) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new _OsmTileLayer2.default(id, options);
        }
    }, {
        key: "getCartoDbTileLayer",
        value: function getCartoDbTileLayer(id) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new _CartoDbTileLayer2.default(id, options);
        }
    }, {
        key: "getMapboxTileLayer",
        value: function getMapboxTileLayer(id) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new _MapboxTileLayer2.default(id, options);
        }
    }]);

    return TileLayerCollection;
}();

exports.default = TileLayerCollection;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _BaseTileLayer2 = __webpack_require__(0);

var _BaseTileLayer3 = _interopRequireDefault(_BaseTileLayer2);

var _param = __webpack_require__(1);

var _param2 = _interopRequireDefault(_param);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TDTTileLayer = function (_BaseTileLayer) {
    _inherits(TDTTileLayer, _BaseTileLayer);

    function TDTTileLayer(id) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, TDTTileLayer);

        var style = options.style || 'Normal';
        options.urlTemplate = _param2.default.TDT[style].url;
        return _possibleConstructorReturn(this, (TDTTileLayer.__proto__ || Object.getPrototypeOf(TDTTileLayer)).call(this, id, options));
    }

    return TDTTileLayer;
}(_BaseTileLayer3.default);

exports.default = TDTTileLayer;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _BaseTileLayer2 = __webpack_require__(0);

var _BaseTileLayer3 = _interopRequireDefault(_BaseTileLayer2);

var _param = __webpack_require__(1);

var _param2 = _interopRequireDefault(_param);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GeoqTileLayer = function (_BaseTileLayer) {
    _inherits(GeoqTileLayer, _BaseTileLayer);

    function GeoqTileLayer(id) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, GeoqTileLayer);

        var style = options.style || 'Colour';
        options.urlTemplate = _param2.default.GEOQ[style].url;
        return _possibleConstructorReturn(this, (GeoqTileLayer.__proto__ || Object.getPrototypeOf(GeoqTileLayer)).call(this, id, options));
    }

    return GeoqTileLayer;
}(_BaseTileLayer3.default);

exports.default = GeoqTileLayer;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _BaseTileLayer2 = __webpack_require__(0);

var _BaseTileLayer3 = _interopRequireDefault(_BaseTileLayer2);

var _param = __webpack_require__(1);

var _param2 = _interopRequireDefault(_param);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoogleTileLayer = function (_BaseTileLayer) {
    _inherits(GoogleTileLayer, _BaseTileLayer);

    function GoogleTileLayer(id) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, GoogleTileLayer);

        var style = options.style || 'Normal';
        options.urlTemplate = _param2.default.Google[style].url;
        return _possibleConstructorReturn(this, (GoogleTileLayer.__proto__ || Object.getPrototypeOf(GoogleTileLayer)).call(this, id, options));
    }

    return GoogleTileLayer;
}(_BaseTileLayer3.default);

exports.default = GoogleTileLayer;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _BaseTileLayer2 = __webpack_require__(0);

var _BaseTileLayer3 = _interopRequireDefault(_BaseTileLayer2);

var _param = __webpack_require__(1);

var _param2 = _interopRequireDefault(_param);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AmapTileLayer = function (_BaseTileLayer) {
    _inherits(AmapTileLayer, _BaseTileLayer);

    function AmapTileLayer(id) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, AmapTileLayer);

        var style = options.style || 'Normal';
        options.urlTemplate = _param2.default.Amap[style].url;
        return _possibleConstructorReturn(this, (AmapTileLayer.__proto__ || Object.getPrototypeOf(AmapTileLayer)).call(this, id, options));
    }

    return AmapTileLayer;
}(_BaseTileLayer3.default);

exports.default = AmapTileLayer;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseTileLayer2 = __webpack_require__(0);

var _BaseTileLayer3 = _interopRequireDefault(_BaseTileLayer2);

var _param = __webpack_require__(1);

var _param2 = _interopRequireDefault(_param);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TencentTileLayer = function (_BaseTileLayer) {
    _inherits(TencentTileLayer, _BaseTileLayer);

    function TencentTileLayer(id) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, TencentTileLayer);

        var style = options.style || 'Normal';
        options.urlTemplate = _param2.default.Tencent[style].url;
        return _possibleConstructorReturn(this, (TencentTileLayer.__proto__ || Object.getPrototypeOf(TencentTileLayer)).call(this, id, options));
    }

    _createClass(TencentTileLayer, [{
        key: "getTileUrl",
        value: function getTileUrl(x, y, z) {
            var urlArgs = this.getUrlArgs(x, y, z);
            var z = urlArgs.z;
            var x = urlArgs.x;
            var y = urlArgs.y;

            var m = Math.floor(x / 16.0);
            var n = Math.floor(y / 16.0);
            var urlTemplate = this.options['urlTemplate'];
            var url = urlTemplate.replace('{x}', x).replace('{y}', y).replace('{z}', z).replace('{m}', m).replace('{n}', n);
            return url;
        }
    }, {
        key: "getUrlArgs",
        value: function getUrlArgs(x, y, z) {
            return {
                z: z,
                x: x,
                y: Math.pow(2, z) - 1 - y
            };
        }
    }]);

    return TencentTileLayer;
}(_BaseTileLayer3.default);

exports.default = TencentTileLayer;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _BaseTileLayer2 = __webpack_require__(0);

var _BaseTileLayer3 = _interopRequireDefault(_BaseTileLayer2);

var _param = __webpack_require__(1);

var _param2 = _interopRequireDefault(_param);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OsmTileLayer = function (_BaseTileLayer) {
    _inherits(OsmTileLayer, _BaseTileLayer);

    function OsmTileLayer(id) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, OsmTileLayer);

        var style = options.style || 'Normal';
        options.urlTemplate = _param2.default.Osm[style].url;
        return _possibleConstructorReturn(this, (OsmTileLayer.__proto__ || Object.getPrototypeOf(OsmTileLayer)).call(this, id, options));
    }

    return OsmTileLayer;
}(_BaseTileLayer3.default);

exports.default = OsmTileLayer;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _BaseTileLayer2 = __webpack_require__(0);

var _BaseTileLayer3 = _interopRequireDefault(_BaseTileLayer2);

var _param = __webpack_require__(1);

var _param2 = _interopRequireDefault(_param);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CartoDbTileLayer = function (_BaseTileLayer) {
    _inherits(CartoDbTileLayer, _BaseTileLayer);

    function CartoDbTileLayer(id) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, CartoDbTileLayer);

        var style = options.style || 'light';
        options.urlTemplate = _param2.default.CartoDb[style].url;
        return _possibleConstructorReturn(this, (CartoDbTileLayer.__proto__ || Object.getPrototypeOf(CartoDbTileLayer)).call(this, id, options));
    }

    return CartoDbTileLayer;
}(_BaseTileLayer3.default);

exports.default = CartoDbTileLayer;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _BaseTileLayer2 = __webpack_require__(0);

var _BaseTileLayer3 = _interopRequireDefault(_BaseTileLayer2);

var _param = __webpack_require__(1);

var _param2 = _interopRequireDefault(_param);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapboxTileLayer = function (_BaseTileLayer) {
    _inherits(MapboxTileLayer, _BaseTileLayer);

    function MapboxTileLayer(id) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, MapboxTileLayer);

        var style = options.style || 'light';
        options.urlTemplate = _param2.default.Mapbox[style].url;
        return _possibleConstructorReturn(this, (MapboxTileLayer.__proto__ || Object.getPrototypeOf(MapboxTileLayer)).call(this, id, options));
    }

    return MapboxTileLayer;
}(_BaseTileLayer3.default);

exports.default = MapboxTileLayer;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

var Utils = function () {
    function Utils() {
        _classCallCheck(this, Utils);
    }

    _createClass(Utils, null, [{
        key: 'uuid',
        value: function uuid() {
            var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ID';

            var uuid = new Array(36),
                rnd = 0,
                r = void 0;
            for (var i = 0; i < 36; i++) {
                if (i === 8 || i === 13 || i === 18 || i === 23) {
                    uuid[i] = '-';
                } else if (i === 14) {
                    uuid[i] = '4';
                } else {
                    if (rnd <= 0x02) rnd = 0x2000000 + Math.random() * 0x1000000 | 0;
                    r = rnd & 0xf;
                    rnd = rnd >> 4;
                    uuid[i] = CHARS[i === 19 ? r & 0x3 | 0x8 : r];
                }
            }
            return prefix + '-' + uuid.join('');
        }
    }]);

    return Utils;
}();

exports.default = Utils;

/***/ })
/******/ ]);
});