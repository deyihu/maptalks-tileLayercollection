
import BaseTileLayer from "./BaseTileLayer";
import params from "./../param"

class TencentTileLayer extends BaseTileLayer{
    constructor(id,options={}){
        var style=options.style||'Normal'
        options.urlTemplate=params.Tencent[style].url;
        super(id,options);
    }

    getTileUrl(x,y,z){
        var urlArgs=this.getUrlArgs(x,y,z);
        var z=urlArgs.z;
        var x=urlArgs.x;
        var y=urlArgs.y;
 
        var m=Math.floor(x / 16.0)
        var n=Math.floor(y / 16.0)
        const urlTemplate = this.options['urlTemplate'];
        var url=urlTemplate.replace('{x}',x).replace('{y}',y).replace('{z}',z).replace('{m}',m).replace('{n}',n);
        return url;
    
    }

    getUrlArgs(x,y,z){
        return {
            z: z,
            x: x,
            y: Math.pow(2, z) - 1 - y
        };
    }
}

export default TencentTileLayer;