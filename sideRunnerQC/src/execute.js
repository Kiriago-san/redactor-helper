#!/usr/bin/env node
"use strict";


const exportAndImport = require('./exportsANDImport')
const addToCommands = require('./addToCommands');
const editSelectors = require('./editSelectors');
const runSeleniumSideRunner = require('./runSeleniumSideRunner');
const addNames = require('./addNames');
const combine = require('./combine');


// INIT File
let file = exportAndImport.importSideFile();

// EDIT File
addNames.changeNames(file);
combine.combineWithFirst(file);

// editSelectors.editSelectors(file);
// //addToCommands.addPauseBeforeClick(file);
// addToCommands.addWaitsAndHoverBeforeClick(file);
// addToCommands.addPauseBeforeSelectFrame(file);
// addToCommands.addWaitForElementEditableBeforeType(file);

// // EXPORT File
// exportAndImport.exportAsSideFile(file);

// // START selenium-side-runner
// runSeleniumSideRunner.run();

