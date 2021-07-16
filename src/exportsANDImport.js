
const fs = require('fs');
const path = require('path');
//const yargses = require('./yargs')

class exportsAndImportsFile {

    importAssFile(name, tier, srt) {
        let rawdata;
        let data = fs.readdirSync(process.cwd());
        let counter = fs.readdirSync(process.cwd()).length;



        if (name === '*') {

            for (let i = 0; i < counter; i++) {
                if ((tier == 1 && data[i].toString().includes('.ass') == true && data[i].includes('_edited.ass') == false) || (srt && data[i].toString().includes('.ass') == true)) {
                    rawdata = fs.readFileSync(`./${data[i]}`, 'utf8').split('\n');
                }
                if (tier == 2 && data[i].toString().includes('_edited.ass') == true) {

                    rawdata = fs.readFileSync(`./${data[i]}`, 'utf8').split('\n');
                }
            }
        }

        else if (name !== '*') {
            if (tier == 1 && name !== '*') {
                rawdata = fs.readFileSync(`./${name}.ass`, 'utf8').split('\n');
            }
            if (tier == 2 && name.includes('_edited') == true && name !== '*') {
            }
        }



        //     let rawdata = fs.readFileSync(`./${name}.ass`,'utf8').split('\n');
        //    //const file = JSON.parse(rawdata);
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

    exportAsTxt(result) {
        let fileName = `./changeLog.txt`;
        let output = JSON.stringify(result, null, 1);
        fs.writeFile(fileName, output, (err) => {
            if (err) throw err;
            console.log('Data written to file');
        });
    }

    exportAsSRT(result,name) {
        let fileName = `./${name}.srt`;
       // let newRes = (result.shift());
        let output = JSON.stringify(result, '\n', 1).replace(/[[\]]|",|"/g,'')
        fs.writeFile(fileName, output, (err) => {
            if (err) throw err;
            //console.log('Data written to file');
        });
    }


}

module.exports = new exportsAndImportsFile();