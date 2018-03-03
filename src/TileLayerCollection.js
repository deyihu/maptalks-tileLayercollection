import TdtTileLayer from "./tilelayers/TdtTileLayer"
import GeoqTileLayer from "./tilelayers/GeoqTileLayer"
import GoogleTileLayer from "./tilelayers/GoogleTileLayer"
import AmapTileLayer from "./tilelayers/AmapTileLayer"
import TencentTileLayer from "./tilelayers/TencentTileLayer"
import OsmTileLayer from "./tilelayers/OsmTileLayer"
import CartoDbTileLayer from "./tilelayers/CartoDbTileLayer"
import MapboxTileLayer from "./tilelayers/MapboxTileLayer"

import Utils from "./utils"
const maptalks=window.maptalks;

class TileLayerCollection{
    constructor(){

    }

    static getTdtTileLayer(id,options={}){
         var baselayers=[];
         var baseLayer=new TdtTileLayer(Utils.uuid(),options);
         baselayers.push(baseLayer)
         
         if(options.style){
             options.style=options.style+'_Label';
             var baseLayer1=new TdtTileLayer(Utils.uuid(),options)
             baselayers.push(baseLayer1);
         }

         return new maptalks.GroupTileLayer(id,baselayers);

    }

    static getGeoqTileLayer(id,options={}){
        var baseLayer=new GeoqTileLayer(id,options);
        return baseLayer;
    }

    static getGoogleTileLayer(id,options={}){
        var baseLayer=new GoogleTileLayer(id,options);
        return baseLayer;
    }
    

    static getAmapTileLayer(id,options={}){
        if(options.style==='Satellite'){
            var baseLayers=[];
            var baseLayer=new AmapTileLayer(Utils.uuid(),options);
            baseLayers.push(baseLayer)
            options.style=options.style+'_Label';
            var baseLayer1=new AmapTileLayer(Utils.uuid(),options);
            baseLayers.push(baseLayer1);
            return new maptalks.GroupTileLayer(id,baseLayers);
        }else
          return new AmapTileLayer(id,options);
    }

    static getTencentTileLayer(id,options={}){
        if(options.style==='Normal'){
            return new TencentTileLayer(id,options);
        }else{
            var baseLayers=[];
            var baseLayer=new TencentTileLayer(Utils.uuid(),options);
            baseLayers.push(baseLayer);
            options.style=options.style+'_Label';
            var baseLayer1=new TencentTileLayer(Utils.uuid(),options);
            baseLayers.push(baseLayer1);
            return new maptalks.GroupTileLayer(id,baseLayers);
        }
    }

    static getOsmTileLayer(id,options={}){
        return new OsmTileLayer(id,options);
    }

    static getCartoDbTileLayer(id,options={}){
        return new CartoDbTileLayer(id,options);
    }

    static getMapboxTileLayer(id,options={}){
        return new MapboxTileLayer(id,options);
    }
}

export default  TileLayerCollection;