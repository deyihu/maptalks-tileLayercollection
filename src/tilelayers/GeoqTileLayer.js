

import BaseTileLayer from "./BaseTileLayer";
import params from "./../param"

class GeoqTileLayer extends BaseTileLayer{
    constructor(id,options={}){
        var style=options.style||'Colour'
        options.urlTemplate=params.GEOQ[style].url;
        super(id,options);
    }
}

export default GeoqTileLayer;