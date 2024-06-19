ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-9318177.360535, 1022087.637054, -9316424.523755, 1023363.525136]);
var wms_layers = [];


        var lyr_EsriImagery_0 = new ol.layer.Tile({
            'title': 'Esri Imagery',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_CURVASDENIVELSELVA5_1 = new ol.format.GeoJSON();
var features_CURVASDENIVELSELVA5_1 = format_CURVASDENIVELSELVA5_1.readFeatures(json_CURVASDENIVELSELVA5_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CURVASDENIVELSELVA5_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CURVASDENIVELSELVA5_1.addFeatures(features_CURVASDENIVELSELVA5_1);
var lyr_CURVASDENIVELSELVA5_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CURVASDENIVELSELVA5_1, 
                style: style_CURVASDENIVELSELVA5_1,
                popuplayertitle: "CURVAS DE NIVEL SELVA 5",
                interactive: true,
                title: '<img src="styles/legend/CURVASDENIVELSELVA5_1.png" /> CURVAS DE NIVEL SELVA 5'
            });

lyr_EsriImagery_0.setVisible(true);lyr_CURVASDENIVELSELVA5_1.setVisible(true);
var layersList = [lyr_EsriImagery_0,lyr_CURVASDENIVELSELVA5_1];
lyr_CURVASDENIVELSELVA5_1.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_CURVASDENIVELSELVA5_1.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_CURVASDENIVELSELVA5_1.set('fieldLabels', {'ID': 'inline label - always visible', 'ELEV': 'inline label - always visible', });
lyr_CURVASDENIVELSELVA5_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});