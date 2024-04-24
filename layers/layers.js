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
var format_HSD_Project_1 = new ol.format.GeoJSON();
var features_HSD_Project_1 = format_HSD_Project_1.readFeatures(json_HSD_Project_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HSD_Project_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HSD_Project_1.addFeatures(features_HSD_Project_1);
var lyr_HSD_Project_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HSD_Project_1, 
                style: style_HSD_Project_1,
                popuplayertitle: "HSD_Project",
                interactive: true,
                title: '<img src="styles/legend/HSD_Project_1.png" /> HSD_Project'
            });
var format_HSD_PROPERTY_2 = new ol.format.GeoJSON();
var features_HSD_PROPERTY_2 = format_HSD_PROPERTY_2.readFeatures(json_HSD_PROPERTY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HSD_PROPERTY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HSD_PROPERTY_2.addFeatures(features_HSD_PROPERTY_2);
var lyr_HSD_PROPERTY_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HSD_PROPERTY_2, 
                style: style_HSD_PROPERTY_2,
                popuplayertitle: "HSD_PROPERTY",
                interactive: true,
                title: '<img src="styles/legend/HSD_PROPERTY_2.png" /> HSD_PROPERTY'
            });

lyr_satellitemaps_0.setVisible(true);lyr_HSD_Project_1.setVisible(true);lyr_HSD_PROPERTY_2.setVisible(true);
var layersList = [lyr_satellitemaps_0,lyr_HSD_Project_1,lyr_HSD_PROPERTY_2];
lyr_HSD_Project_1.set('fieldAliases', {'ID': 'ID', 'PROJECTID_': 'PROJECTID_', 'PROJECT_NA': 'PROJECT_NA', 'AREA_NAME': 'AREA_NAME', 'BLOCK_NO': 'BLOCK_NO', 'PROJ_TYPE': 'PROJ_TYPE', 'SITE_NO': 'SITE_NO', 'TOWNHOUSES': 'TOWNHOUSES', 'TH_UNITS': 'TH_UNITS', 'APARTMENT_': 'APARTMENT_', 'APARTMENT1': 'APARTMENT1', 'PLOT_UNITS': 'PLOT_UNITS', 'PP_NO': 'PP_NO', 'WL_APP_STA': 'WL_APP_STA', 'PLANNED_ST': 'PLANNED_ST', 'PLANNED_EN': 'PLANNED_EN', 'REV_COMP_D': 'REV_COMP_D', 'PROJ_STATU': 'PROJ_STATU', 'INI_APP_DA': 'INI_APP_DA', 'INI_APP_CO': 'INI_APP_CO', 'PPS_ROADS': 'PPS_ROADS', 'PPS_SEPPD': 'PPS_SEPPD', 'PPS_EDD': 'PPS_EDD', 'PPS_PSD_E': 'PPS_PSD_E', 'PPS_WDD': 'PPS_WDD', 'PPS_PSD_W': 'PPS_PSD_W', 'PPS_TRA': 'PPS_TRA', 'PPS_SURVEY': 'PPS_SURVEY', 'PPS_MUNICI': 'PPS_MUNICI', 'PPS_PARK_M': 'PPS_PARK_M', 'PPS_GOVERN': 'PPS_GOVERN', 'PPS_TV_PLA': 'PPS_TV_PLA', 'PPS_DPS_ED': 'PPS_DPS_ED', 'PPS_CPU': 'PPS_CPU', 'PPS_AGR_EN': 'PPS_AGR_EN', 'PPS_ENV': 'PPS_ENV', 'PPS_COASTG': 'PPS_COASTG', 'PPS_BAPCO': 'PPS_BAPCO', 'PPS_FISHER': 'PPS_FISHER', 'COMMENTS': 'COMMENTS', 'SCH_EDD': 'SCH_EDD', 'SCH_WDD': 'SCH_WDD', 'SCH_TRA': 'SCH_TRA', 'SCH_EDD_ST': 'SCH_EDD_ST', 'SCH_SEPPD': 'SCH_SEPPD', 'SITE_PLAN_': 'SITE_PLAN_', 'SITE_PLAN1': 'SITE_PLAN1', 'GOV_NAME': 'GOV_NAME', 'SECTOR': 'SECTOR', 'CONTRACT_T': 'CONTRACT_T', 'CONTRACT_S': 'CONTRACT_S', 'WORK_COMPL': 'WORK_COMPL', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_HSD_PROPERTY_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'HOUSEID': 'HOUSEID', 'ROAD_NO': 'ROAD_NO', 'BLOCK_NO': 'BLOCK_NO', 'FLOORS': 'FLOORS', 'HEIGHT': 'HEIGHT', 'SITE_NO': 'SITE_NO', 'PROJECT_ID': 'PROJECT_ID', 'PROJECT_NA': 'PROJECT_NA', 'BLD_CATEGO': 'BLD_CATEGO', 'NO_OF_FLAT': 'NO_OF_FLAT', 'ALLOTMENT': 'ALLOTMENT', 'PARCEL_NO': 'PARCEL_NO', 'PROPERTY_T': 'PROPERTY_T', 'GOVERNORAT': 'GOVERNORAT', 'DATA_INSER': 'DATA_INSER', 'AREA_NAME': 'AREA_NAME', 'BLD_NO': 'BLD_NO', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_HSD_Project_1.set('fieldImages', {'ID': 'Range', 'PROJECTID_': 'TextEdit', 'PROJECT_NA': 'TextEdit', 'AREA_NAME': 'TextEdit', 'BLOCK_NO': 'TextEdit', 'PROJ_TYPE': 'TextEdit', 'SITE_NO': 'Range', 'TOWNHOUSES': 'TextEdit', 'TH_UNITS': 'Range', 'APARTMENT_': 'TextEdit', 'APARTMENT1': 'Range', 'PLOT_UNITS': 'Range', 'PP_NO': 'TextEdit', 'WL_APP_STA': 'TextEdit', 'PLANNED_ST': 'DateTime', 'PLANNED_EN': 'DateTime', 'REV_COMP_D': 'DateTime', 'PROJ_STATU': 'TextEdit', 'INI_APP_DA': 'DateTime', 'INI_APP_CO': 'TextEdit', 'PPS_ROADS': 'TextEdit', 'PPS_SEPPD': 'TextEdit', 'PPS_EDD': 'TextEdit', 'PPS_PSD_E': 'TextEdit', 'PPS_WDD': 'TextEdit', 'PPS_PSD_W': 'TextEdit', 'PPS_TRA': 'TextEdit', 'PPS_SURVEY': 'TextEdit', 'PPS_MUNICI': 'TextEdit', 'PPS_PARK_M': 'TextEdit', 'PPS_GOVERN': 'TextEdit', 'PPS_TV_PLA': 'TextEdit', 'PPS_DPS_ED': 'TextEdit', 'PPS_CPU': 'TextEdit', 'PPS_AGR_EN': 'TextEdit', 'PPS_ENV': 'TextEdit', 'PPS_COASTG': 'TextEdit', 'PPS_BAPCO': 'TextEdit', 'PPS_FISHER': 'TextEdit', 'COMMENTS': 'TextEdit', 'SCH_EDD': 'TextEdit', 'SCH_WDD': 'TextEdit', 'SCH_TRA': 'TextEdit', 'SCH_EDD_ST': 'TextEdit', 'SCH_SEPPD': 'TextEdit', 'SITE_PLAN_': 'TextEdit', 'SITE_PLAN1': 'TextEdit', 'GOV_NAME': 'TextEdit', 'SECTOR': 'TextEdit', 'CONTRACT_T': 'TextEdit', 'CONTRACT_S': 'TextEdit', 'WORK_COMPL': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_HSD_PROPERTY_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'HOUSEID': 'TextEdit', 'ROAD_NO': 'Range', 'BLOCK_NO': 'Range', 'FLOORS': 'Range', 'HEIGHT': 'TextEdit', 'SITE_NO': 'Range', 'PROJECT_ID': 'Range', 'PROJECT_NA': 'TextEdit', 'BLD_CATEGO': 'TextEdit', 'NO_OF_FLAT': 'Range', 'ALLOTMENT': 'TextEdit', 'PARCEL_NO': 'TextEdit', 'PROPERTY_T': 'TextEdit', 'GOVERNORAT': 'TextEdit', 'DATA_INSER': 'TextEdit', 'AREA_NAME': 'TextEdit', 'BLD_NO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_HSD_Project_1.set('fieldLabels', {'ID': 'no label', 'PROJECTID_': 'header label - always visible', 'PROJECT_NA': 'no label', 'AREA_NAME': 'inline label - always visible', 'BLOCK_NO': 'no label', 'PROJ_TYPE': 'no label', 'SITE_NO': 'no label', 'TOWNHOUSES': 'no label', 'TH_UNITS': 'no label', 'APARTMENT_': 'no label', 'APARTMENT1': 'no label', 'PLOT_UNITS': 'no label', 'PP_NO': 'no label', 'WL_APP_STA': 'no label', 'PLANNED_ST': 'no label', 'PLANNED_EN': 'no label', 'REV_COMP_D': 'no label', 'PROJ_STATU': 'no label', 'INI_APP_DA': 'no label', 'INI_APP_CO': 'no label', 'PPS_ROADS': 'no label', 'PPS_SEPPD': 'no label', 'PPS_EDD': 'no label', 'PPS_PSD_E': 'no label', 'PPS_WDD': 'no label', 'PPS_PSD_W': 'no label', 'PPS_TRA': 'no label', 'PPS_SURVEY': 'no label', 'PPS_MUNICI': 'no label', 'PPS_PARK_M': 'no label', 'PPS_GOVERN': 'no label', 'PPS_TV_PLA': 'no label', 'PPS_DPS_ED': 'no label', 'PPS_CPU': 'no label', 'PPS_AGR_EN': 'no label', 'PPS_ENV': 'no label', 'PPS_COASTG': 'no label', 'PPS_BAPCO': 'no label', 'PPS_FISHER': 'no label', 'COMMENTS': 'no label', 'SCH_EDD': 'no label', 'SCH_WDD': 'no label', 'SCH_TRA': 'no label', 'SCH_EDD_ST': 'no label', 'SCH_SEPPD': 'no label', 'SITE_PLAN_': 'no label', 'SITE_PLAN1': 'no label', 'GOV_NAME': 'no label', 'SECTOR': 'no label', 'CONTRACT_T': 'no label', 'CONTRACT_S': 'no label', 'WORK_COMPL': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_HSD_PROPERTY_2.set('fieldLabels', {'OBJECTID': 'no label', 'HOUSEID': 'no label', 'ROAD_NO': 'no label', 'BLOCK_NO': 'no label', 'FLOORS': 'no label', 'HEIGHT': 'no label', 'SITE_NO': 'no label', 'PROJECT_ID': 'no label', 'PROJECT_NA': 'no label', 'BLD_CATEGO': 'no label', 'NO_OF_FLAT': 'no label', 'ALLOTMENT': 'no label', 'PARCEL_NO': 'no label', 'PROPERTY_T': 'no label', 'GOVERNORAT': 'no label', 'DATA_INSER': 'no label', 'AREA_NAME': 'no label', 'BLD_NO': 'inline label - always visible', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_HSD_PROPERTY_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});