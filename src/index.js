#!/usr/bin/env node
"use strict";

const yargs = require('./yargs');
const { convertToJson } = require('./convertToJson');
const exportAndImport = require('./exportsANDImport');
const { compareJsons } = require('./compareJsons');
const createSRT = require('./createSRTs');
const createFixes = require('./createFixes/createFixes')


const name = yargs.takeName() != null ? yargs.takeName() : '*'
let srt = yargs.takeSRT()

const first = convertToJson(exportAndImport.importAssFile(name, 1, srt));

if (yargs.takeFix()) {
    createFixes.create(first);
}
else if (yargs.takeSRT()) {
    createSRT.createSRTbyActors(first, srt);
}
else {
    let second = convertToJson(exportAndImport.importAssFile(name, 2));
    console.log(second)
    exportAndImport.exportAsTxt(compareJsons(first, second));
}