
const fs = require('fs');
const yargses = require('.')

class exportsAndImportsFile {

    importSideFile() {
        let rawdata = fs.readFileSync(`./inputSides/` + yargses.takeName() + '.side');
        const file = JSON.parse(rawdata);
        return file;
    }


    exportAsSideFile(result) {
        let fileName = `./outputSides/` + yargses.takeName() + '_edited.side';
        let output = JSON.stringify(result, null, 1);

        fs.writeFile(fileName, output, (err) => {
            if (err) throw err;
            console.log('Data written to file');
        });
    }


}

module.exports = new exportsAndImportsFile();