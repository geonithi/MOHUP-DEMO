var wms_layers = [];


        var lyr_satellitemaps_0 = new ol.layer.Tile({
            'title': ' satellite  maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_SEwer_1 = new ol.format.GeoJSON();
var features_SEwer_1 = format_SEwer_1.readFeatures(json_SEwer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEwer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEwer_1.addFeatures(features_SEwer_1);
var lyr_SEwer_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEwer_1, 
                style: style_SEwer_1,
                popuplayertitle: "SEwer",
                interactive: true,
                title: '<img src="styles/legend/SEwer_1.png" /> SEwer'
            });
var format_BAH_BOUNDARYN_2 = new ol.format.GeoJSON();
var features_BAH_BOUNDARYN_2 = format_BAH_BOUNDARYN_2.readFeatures(json_BAH_BOUNDARYN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BAH_BOUNDARYN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BAH_BOUNDARYN_2.addFeatures(features_BAH_BOUNDARYN_2);
var lyr_BAH_BOUNDARYN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BAH_BOUNDARYN_2, 
                style: style_BAH_BOUNDARYN_2,
                popuplayertitle: "BAH_BOUNDARYN",
                interactive: true,
                title: '<img src="styles/legend/BAH_BOUNDARYN_2.png" /> BAH_BOUNDARYN'
            });

lyr_satellitemaps_0.setVisible(true);lyr_SEwer_1.setVisible(true);lyr_BAH_BOUNDARYN_2.setVisible(true);
var layersList = [lyr_satellitemaps_0,lyr_SEwer_1,lyr_BAH_BOUNDARYN_2];
lyr_SEwer_1.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Level': 'Level', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'Date_Updat': 'Date_Updat', 'Date_Recei': 'Date_Recei', 'Project_Re': 'Project_Re', 'Project_St': 'Project_St', 'Project_Es': 'Project_Es', 'Project_Ma': 'Project_Ma', 'Project__1': 'Project__1', 'Project_Ti': 'Project_Ti', 'Project_No': 'Project_No', 'Date_Rec_1': 'Date_Rec_1', 'Project__2': 'Project__2', 'Project__3': 'Project__3', });
lyr_BAH_BOUNDARYN_2.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Level': 'Level', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'MsLink_DMR': 'MsLink_DMR', 'MsCtlg_DMR': 'MsCtlg_DMR', 'MsLink_ODB': 'MsLink_ODB', 'MsCtlg_ODB': 'MsCtlg_ODB', 'MsLink_Fra': 'MsLink_Fra', 'MsCtlg_Fra': 'MsCtlg_Fra', });
lyr_SEwer_1.set('fieldImages', {'FID_': '', 'Entity': '', 'Level': '', 'Layer': '', 'Color': '', 'Linetype': '', 'Elevation': '', 'LineWt': '', 'RefName': '', 'Date_Updat': '', 'Date_Recei': '', 'Project_Re': '', 'Project_St': '', 'Project_Es': '', 'Project_Ma': '', 'Project__1': '', 'Project_Ti': '', 'Project_No': '', 'Date_Rec_1': '', 'Project__2': '', 'Project__3': '', });
lyr_BAH_BOUNDARYN_2.set('fieldImages', {'FID_': 'Range', 'Entity': 'TextEdit', 'Level': 'Range', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'MsLink_DMR': 'Range', 'MsCtlg_DMR': 'Range', 'MsLink_ODB': 'Range', 'MsCtlg_ODB': 'Range', 'MsLink_Fra': 'Range', 'MsCtlg_Fra': 'Range', });
lyr_SEwer_1.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Level': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'Date_Updat': 'no label', 'Date_Recei': 'no label', 'Project_Re': 'no label', 'Project_St': 'no label', 'Project_Es': 'no label', 'Project_Ma': 'no label', 'Project__1': 'no label', 'Project_Ti': 'no label', 'Project_No': 'no label', 'Date_Rec_1': 'no label', 'Project__2': 'no label', 'Project__3': 'no label', });
lyr_BAH_BOUNDARYN_2.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Level': 'inline label - always visible', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'MsLink_DMR': 'no label', 'MsCtlg_DMR': 'no label', 'MsLink_ODB': 'no label', 'MsCtlg_ODB': 'no label', 'MsLink_Fra': 'no label', 'MsCtlg_Fra': 'no label', });
lyr_BAH_BOUNDARYN_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});