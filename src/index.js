#!/usr/bin/env node
"use strict";

const yargs = require('./yargs');
const {convertToJson} = require('./convertToJson');
const exportAndImport = require('./exportsANDImport');
const {compareJsons} = require('./compareJsons');


let name;
if(yargs.takeName()!=null){
     name = yargs.takeName()
}
else {
    name = '*'
}




const first = convertToJson(exportAndImport.importAssFile(name,1));
const second = convertToJson(exportAndImport.importAssFile(name,2));
//exportAndImport.exportAsTxt(first)
exportAndImport.exportAsTxt(compareJsons(first,second))