
const fs = require('fs');
//const yargses = require('./yargs')

class exportsAndImportsFile {

    importAssFile(name) {
        let rawdata = fs.readFileSync(`./${name}.ass`,'utf8').split('\n');
       //const file = JSON.parse(rawdata);
        return rawdata;
    }


    exportAsJsonFile(result,tag='') {
        let fileName =  `./changed${tag}.json`;
        //let output = JSON.stringify(result, null, 1);

        fs.writeFile(fileName, result, (err) => {
            if (err) throw err;
            console.log('Data written to file');
        });
    }

    exportAsTxt(result){
        let fileName = `./changeLog.txt`;
        let output = JSON.stringify(result, null, 1);
        fs.writeFile(fileName, output, (err) => {
            if (err) throw err;
            console.log('Data written to file');
        });
    }


}

module.exports = new exportsAndImportsFile();