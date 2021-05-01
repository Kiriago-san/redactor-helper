
const yargs = require('yargs');

class yargses {

       takeOption(option) {
        const options = yargs
            .usage("Usage: side-runner-qc -n <fileName>")
            .option("n", { alias: "fileName", describe: "Your fileName without .side", type: "string", demandOption: false })
            .default('n', null)
            .argv;

        switch (option) {
            case 'name': return options.fileName;
    
        }
    }

    takeName(){
        return this.takeOption('name');
    }

   
}

module.exports = new yargses();
