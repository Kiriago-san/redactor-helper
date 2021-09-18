#!/usr/bin/env node
"use strict";

const yargs = require('./yargs');
const { convertToJson } = require('./convertToJson');
const exportAndImport = require('./exportsANDImport');
const { compareJsons } = require('./compareJsons');
const createSRT = require('./createSRTs');
const createFixes = require('./createFixes/createFixes')

const options = yargs.takeOption();

const name = options.name != null ? options.name : '*'
const srt = options.srt;
const consoles = options.consoles;


const first = convertToJson(exportAndImport.importAssFile(name, 1, srt, consoles));

if (yargs.takeFix()) {
    createFixes.create(first);
}
else if (srt) {
    createSRT.createSRTbyActors(first, srt, consoles);
}
else {
    let second = convertToJson(exportAndImport.importAssFile(name, 2, srt, consoles));
    exportAndImport.exportAsTxt(compareJsons(first, second));
}