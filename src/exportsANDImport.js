
const fs = require('fs');
const path = require('path');
//const yargses = require('./yargs')

class exportsAndImportsFile {

    importSRTFile(name) {
        var rawdata;
        let data = fs.readdirSync(process.cwd());
        let counter = fs.readdirSync(process.cwd()).length;

        if (name === '*') {
            for (let i = 0; i < counter; i++) {
                if (data[i].toString().includes('.SRT') == true) {
                    rawdata = fs.readFileSync(`./${data[i]}`, 'utf8').split('\n');
                }
            }
        }


        else {
            rawdata = fs.readFileSync(`./${name}.srt`, 'utf8').split('\n');
        }

        return rawdata;
    }

    importAssFile(name, tier, srt, consoles) {
        let rawdata;
        let processCWD = consoles ? process.cwd() + '/input' : process.cwd();
        let data = fs.readdirSync(processCWD);
        let counter = fs.readdirSync(processCWD).length;

        if (name === '*') {

            for (let i = 0; i < counter; i++) {
               let fileName = consoles ? `./input/${data[i]}` : `./${data[i]}`;
                if ((tier == 1 && data[i].toString().includes('.ass') == true && data[i].includes('_edited.ass') == false) || (srt && data[i].toString().includes('.ass') == true)) {
                    rawdata = fs.readFileSync(fileName, 'utf8').split('\n');
                }
                if (tier == 2 && data[i].toString().includes('_edited.ass') == true) {
                    rawdata = fs.readFileSync(fileName, 'utf8').split('\n');
                }
            }
        }

        else if (name !== '*') {
            if (tier == 1 && name !== '*') {
                rawdata = fs.readFileSync(`./${name}.ass`, 'utf8').split('\n');
            }
            if (tier == 2 && name.includes('_edited') == true && name !== '*') {
                rawdata = fs.readFileSync(`./${name}_edited.ass`, 'utf8').split('\n');
            }
        }

        console.log(tier, name)
        return rawdata;
    }


    exportAsJsonFile(result, tag = '') {
        let fileName = `./changed${tag}.json`;
        //let output = JSON.stringify(result, null, 1);

        fs.writeFile(fileName, result, (err) => {
            if (err) throw err;
            console.log('Data written to file');
        });
    }

    exportAsTxt(result, name, strigify = true, consoles) {
        let fileName = name == undefined ? `./changeLog.txt` : name;
        fileName = consoles? './output/changeLog.txt' : fileName;
        let output = JSON.stringify(result, null, 1).replace(/[[\]]|",|"/g, '').replace(/\\/g, '"');
        fs.writeFile(fileName, strigify == true ? output : result, (err) => {
            if (err) throw err;
            console.log('Data written to file');
        });
    }

    exportAsSRT(result, name) {
        let fileName = `./${name}.srt`;

        let output = result.join('\n');

        fs.writeFile(fileName, output, (err) => {
            if (err) throw err;

        });
    }


}

module.exports = new exportsAndImportsFile();