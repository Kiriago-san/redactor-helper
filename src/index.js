#!/usr/bin/env node
"use strict";

const {convertToJson} = require('./convertToJson');
const exportAndImport = require('./exportsANDImport');
const {compareJsons} = require('./compareJsons');

const first = convertToJson(exportAndImport.importAssFile('Графіті_Гурманки_Koufuku_Graffiti_07_з_12720p_UKR_SUB_track3_ukr'));
const second = convertToJson(exportAndImport.importAssFile('Графіті_Гурманки_Koufuku_Graffiti_07_з_12720p_UKR_SUB_track3_ukr_edited'),'second')
exportAndImport.exportAsTxt(compareJsons(first,second))