

import BaseTileLayer from "./BaseTileLayer";
import params from "./../param"

class TDTTileLayer extends BaseTileLayer{
    constructor(id,options={}){
        var style=options.style||'Normal'
        options.urlTemplate=params.TDT[style].url;
        super(id,options);
    }
}

export default TDTTileLayer;