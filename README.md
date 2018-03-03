this is TileLayer collection

Contain Tdt(天地图)，AMap(高德地图)，Geoq(智图)，Google，Tencent(腾讯),Osm,CartoDb,Mapbox

[demo](https://deyihu.github.io/src/maptalks-tileLayercollection/examples/)


example code

<pre>

   var id='helle-world-layer'

      var map = new maptalks.Map('map', {
        center: [120,31.49856],
        zoom: 5
      });

      var tileLayer=maptalks.TileLayerCollection.getTdtTileLayer(id,{style:'Terrain'});
      map.setBaseLayer(tileLayer)
   </pre>  

List all the cases


    var tileLayer=maptalks.TileLayerCollection.getTdtTileLayer(id,{style:'Terrain'||'Normal'||'Satellite'});



    var tileLayer=maptalks.TileLayerCollection.getGeoqTileLayer(id,{style:'Colour'||'Gray'||'Midnightblue'});



    var tileLayer=maptalks.TileLayerCollection.getGoogleTileLayer(id,{style:'Normal'||'Satellite'});



    var tileLayer=maptalks.TileLayerCollection.getAmapTileLayer(id,{style:'Normal'||'Satellite'});



    var tileLayer=maptalks.TileLayerCollection.getTencentTileLayer(id,{style:'Normal'||'Satellite'||'Terrain'});



    var tileLayer=maptalks.TileLayerCollection.getOsmTileLayer(id,{style:'Normal'||'Bike'||'Transport'||'Humanitarian'});



    var tileLayer=maptalks.TileLayerCollection.getCartoDbTileLayer(id,{style:'Dark'||'Light'});



    var tileLayer=maptalks.TileLayerCollection.getMapboxTileLayer(id,{style:'Streets'||'Dark'||'LightDark'||'Satellite'||'Light'||'Emerald'||'White'||'Red'||'Outdoors'||'StreetsSatellite'||'Comic'||'Building'});


