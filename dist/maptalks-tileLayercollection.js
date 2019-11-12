/*
 * maptalks-tileLayercollection v0.0.1
 * this is extends maptalks.js 
 * build by Iverson.hu 
*/

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('maptalks')) :
  typeof define === 'function' && define.amd ? define(['exports', 'maptalks'], factory) :
  (global = global || self, factory(global.maptalks = global.maptalks || {}, global.maptalks));
}(this, function (exports, maptalks) { 'use strict';

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var BaseTileLayer = function (_TileLayer) {
      inherits(BaseTileLayer, _TileLayer);

      function BaseTileLayer() {
          classCallCheck(this, BaseTileLayer);
          return possibleConstructorReturn(this, (BaseTileLayer.__proto__ || Object.getPrototypeOf(BaseTileLayer)).apply(this, arguments));
      }

      return BaseTileLayer;
  }(maptalks.TileLayer);

  var mapboxKey = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejh2N21nMzAxMmQzMnA5emRyN2lucW0ifQ.jSE-g2vsn48Ry928pqylcg';
  var tdtKey = 'fb1bfb9e06cd7681813a42f4c934e1ea';

  var params = {
      TDT: {
          Normal: {
              url: 'http://t0.tianditu.gov.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk=' + tdtKey
          },
          Normal_Label: {
              url: 'http://t0.tianditu.gov.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk=' + tdtKey
          },
          Satellite: {
              url: 'http://t0.tianditu.gov.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}&tk=' + tdtKey
          },
          Satellite_Label: {
              url: 'http://t0.tianditu.gov.cn/DataServer?T=cia_w&X={x}&Y={y}&L={z}&tk=' + tdtKey
          },

          Terrain: {
              url: 'http://t0.tianditu.gov.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}&tk=' + tdtKey
          },

          Terrain_Label: {
              url: 'http://t0.tianditu.gov.cn/DataServer?T=cta_w&X={x}&Y={y}&L={z}&tk=' + tdtKey
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
              url: 'http://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}'
          },
          Satellite_Label: {
              url: 'http://webst01.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}'
          }
      },
      Tencent: {
          Normal: {
              url: 'http://rt0.map.gtimg.com/realtimerender?z={z}&x={x}&y={y}&type=vector&style=0'

          },
          Satellite: {
              url: 'http://p0.map.gtimg.com/sateTiles/{z}/{m}/{n}/{x}_{y}.jpg'

          },
          Satellite_Label: {
              url: 'http://rt3.map.gtimg.com/tile?z={z}&x={x}&y={y}&type=vector&styleid=3&version=117'
          },
          Terrain: {
              url: 'http://p0.map.gtimg.com/demTiles/{z}/{m}/{n}/{x}_{y}.jpg'
          },
          Terrain_Label: {
              url: 'http://rt3.map.gtimg.com/tile?z={z}&x={x}&y={y}&type=vector&styleid=3&version=117'
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

  var TDTTileLayer = function (_BaseTileLayer) {
      inherits(TDTTileLayer, _BaseTileLayer);

      function TDTTileLayer(id) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          classCallCheck(this, TDTTileLayer);

          var style = options.style || 'Normal';
          options.urlTemplate = params.TDT[style].url;
          return possibleConstructorReturn(this, (TDTTileLayer.__proto__ || Object.getPrototypeOf(TDTTileLayer)).call(this, id, options));
      }

      return TDTTileLayer;
  }(BaseTileLayer);

  var GeoqTileLayer = function (_BaseTileLayer) {
      inherits(GeoqTileLayer, _BaseTileLayer);

      function GeoqTileLayer(id) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          classCallCheck(this, GeoqTileLayer);

          var style = options.style || 'Colour';
          options.urlTemplate = params.GEOQ[style].url;
          return possibleConstructorReturn(this, (GeoqTileLayer.__proto__ || Object.getPrototypeOf(GeoqTileLayer)).call(this, id, options));
      }

      return GeoqTileLayer;
  }(BaseTileLayer);

  var GoogleTileLayer = function (_BaseTileLayer) {
      inherits(GoogleTileLayer, _BaseTileLayer);

      function GoogleTileLayer(id) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          classCallCheck(this, GoogleTileLayer);

          var style = options.style || 'Normal';
          options.urlTemplate = params.Google[style].url;
          return possibleConstructorReturn(this, (GoogleTileLayer.__proto__ || Object.getPrototypeOf(GoogleTileLayer)).call(this, id, options));
      }

      return GoogleTileLayer;
  }(BaseTileLayer);

  var AmapTileLayer = function (_BaseTileLayer) {
      inherits(AmapTileLayer, _BaseTileLayer);

      function AmapTileLayer(id) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          classCallCheck(this, AmapTileLayer);

          var style = options.style || 'Normal';
          options.urlTemplate = params.Amap[style].url;
          return possibleConstructorReturn(this, (AmapTileLayer.__proto__ || Object.getPrototypeOf(AmapTileLayer)).call(this, id, options));
      }

      return AmapTileLayer;
  }(BaseTileLayer);

  var TencentTileLayer = function (_BaseTileLayer) {
      inherits(TencentTileLayer, _BaseTileLayer);

      function TencentTileLayer(id) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          classCallCheck(this, TencentTileLayer);

          var style = options.style || 'Normal';
          options.urlTemplate = params.Tencent[style].url;
          return possibleConstructorReturn(this, (TencentTileLayer.__proto__ || Object.getPrototypeOf(TencentTileLayer)).call(this, id, options));
      }

      createClass(TencentTileLayer, [{
          key: 'getTileUrl',
          value: function getTileUrl(x, y, z) {
              var urlArgs = this.getUrlArgs(x, y, z);
              var l = urlArgs.z;
              var r = urlArgs.x;
              var c = urlArgs.y;

              var m = Math.floor(r / 16.0);
              var n = Math.floor(c / 16.0);
              var urlTemplate = this.options['urlTemplate'];
              var url = urlTemplate.replace('{x}', r).replace('{y}', c).replace('{z}', l).replace('{m}', m).replace('{n}', n);
              return url;
          }
      }, {
          key: 'getUrlArgs',
          value: function getUrlArgs(x, y, z) {
              return {
                  z: z,
                  x: x,
                  y: Math.pow(2, z) - 1 - y
              };
          }
      }]);
      return TencentTileLayer;
  }(BaseTileLayer);

  var OsmTileLayer = function (_BaseTileLayer) {
      inherits(OsmTileLayer, _BaseTileLayer);

      function OsmTileLayer(id) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          classCallCheck(this, OsmTileLayer);

          var style = options.style || 'Normal';
          options.urlTemplate = params.Osm[style].url;
          return possibleConstructorReturn(this, (OsmTileLayer.__proto__ || Object.getPrototypeOf(OsmTileLayer)).call(this, id, options));
      }

      return OsmTileLayer;
  }(BaseTileLayer);

  var CartoDbTileLayer = function (_BaseTileLayer) {
      inherits(CartoDbTileLayer, _BaseTileLayer);

      function CartoDbTileLayer(id) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          classCallCheck(this, CartoDbTileLayer);

          var style = options.style || 'light';
          options.urlTemplate = params.CartoDb[style].url;
          return possibleConstructorReturn(this, (CartoDbTileLayer.__proto__ || Object.getPrototypeOf(CartoDbTileLayer)).call(this, id, options));
      }

      return CartoDbTileLayer;
  }(BaseTileLayer);

  var MapboxTileLayer = function (_BaseTileLayer) {
      inherits(MapboxTileLayer, _BaseTileLayer);

      function MapboxTileLayer(id) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          classCallCheck(this, MapboxTileLayer);

          var style = options.style || 'light';
          options.urlTemplate = params.Mapbox[style].url;
          return possibleConstructorReturn(this, (MapboxTileLayer.__proto__ || Object.getPrototypeOf(MapboxTileLayer)).call(this, id, options));
      }

      return MapboxTileLayer;
  }(BaseTileLayer);

  var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

  var Utils = function () {
      function Utils() {
          classCallCheck(this, Utils);
      }

      createClass(Utils, null, [{
          key: 'uuid',
          value: function uuid() {
              var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ID';

              var uuid = new Array(36);
              var rnd = 0,
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

  var TileLayerCollection = function () {
      function TileLayerCollection() {
          classCallCheck(this, TileLayerCollection);
      }

      createClass(TileLayerCollection, null, [{
          key: 'getTdtTileLayer',
          value: function getTdtTileLayer(id) {
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

              var baselayers = [];
              var baseLayer = new TDTTileLayer(Utils.uuid(), options);
              baselayers.push(baseLayer);

              if (options.style) {
                  options.style = options.style + '_Label';
                  var baseLayer1 = new TDTTileLayer(Utils.uuid(), options);
                  baselayers.push(baseLayer1);
              }

              return new maptalks.GroupTileLayer(id, baselayers);
          }
      }, {
          key: 'getGeoqTileLayer',
          value: function getGeoqTileLayer(id) {
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

              var baseLayer = new GeoqTileLayer(id, options);
              return baseLayer;
          }
      }, {
          key: 'getGoogleTileLayer',
          value: function getGoogleTileLayer(id) {
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

              var baseLayer = new GoogleTileLayer(id, options);
              return baseLayer;
          }
      }, {
          key: 'getAmapTileLayer',
          value: function getAmapTileLayer(id) {
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

              if (options.style === 'Satellite') {
                  var baseLayers = [];
                  var baseLayer = new AmapTileLayer(Utils.uuid(), options);
                  baseLayers.push(baseLayer);
                  options.style = options.style + '_Label';
                  var baseLayer1 = new AmapTileLayer(Utils.uuid(), options);
                  baseLayers.push(baseLayer1);
                  return new maptalks.GroupTileLayer(id, baseLayers);
              } else {
                  return new AmapTileLayer(id, options);
              }
          }
      }, {
          key: 'getTencentTileLayer',
          value: function getTencentTileLayer(id) {
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

              if (options.style === 'Normal') {
                  return new TencentTileLayer(id, options);
              } else {
                  var baseLayers = [];
                  var baseLayer = new TencentTileLayer(Utils.uuid(), options);
                  baseLayers.push(baseLayer);
                  options.style = options.style + '_Label';
                  var baseLayer1 = new TencentTileLayer(Utils.uuid(), options);
                  baseLayers.push(baseLayer1);
                  return new maptalks.GroupTileLayer(id, baseLayers);
              }
          }
      }, {
          key: 'getOsmTileLayer',
          value: function getOsmTileLayer(id) {
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

              return new OsmTileLayer(id, options);
          }
      }, {
          key: 'getCartoDbTileLayer',
          value: function getCartoDbTileLayer(id) {
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

              return new CartoDbTileLayer(id, options);
          }
      }, {
          key: 'getMapboxTileLayer',
          value: function getMapboxTileLayer(id) {
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

              return new MapboxTileLayer(id, options);
          }
      }]);
      return TileLayerCollection;
  }();

  exports.TileLayerCollection = TileLayerCollection;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=maptalks-tileLayercollection.js.map
