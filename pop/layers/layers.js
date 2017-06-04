var format_0 = new ol.format.GeoJSON();
var features_0 = format_0.readFeatures(json_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_0.addFeatures(features_0);var lyr_0 = new ol.layer.Vector({
                source:jsonSource_0, 
                style: style_0,
                title: "人口"
            });

lyr_0.setVisible(true);
var layersList = [lyr_0];
lyr_0.set('fieldAliases', {'COUNTY_ID': 'COUNTY_ID', 'COUNTY': 'COUNTY', 'Census': 'Census', 'Male': 'Male', 'Female': 'Female', 'Rate': 'Rate', 'pop_stat_': 'pop_stat_', 'pop_stat__1': 'pop_stat__1', 'pop_stat__2': 'pop_stat__2', });
lyr_0.set('fieldImages', {'COUNTY_ID': 'TextEdit', 'COUNTY': 'TextEdit', 'Census': 'TextEdit', 'Male': 'TextEdit', 'Female': 'TextEdit', 'Rate': 'TextEdit', 'pop_stat_': 'TextEdit', 'pop_stat__1': 'TextEdit', 'pop_stat__2': 'TextEdit', });
lyr_0.set('fieldLabels', {'COUNTY_ID': 'no label', 'COUNTY': 'no label', 'Census': 'no label', 'Male': 'no label', 'Female': 'no label', 'Rate': 'no label', 'pop_stat_': 'no label', 'pop_stat__1': 'no label', 'pop_stat__2': 'no label', });
lyr_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});