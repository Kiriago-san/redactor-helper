
const yargs = require('yargs');

class yargses {

       takeOption(option) {
        const options = yargs
            .usage("Usage: redactor-helper -n <fileName>")
            .option("n", { alias: "fileName", describe: "Your fileName without .side", type: "string", demandOption: false })
            .default('n', null)
            .option('srt', { alias: "SRT", describe: "Your fileName without .side", type: "string", demandOption: false })
            .default('srt', '')
            .argv;

        switch (option) {
            case 'name': return options.fileName;
            case 'srt': return options.srt;
    
        }
    }

    takeName(){
        return this.takeOption('name');
    }

    takeSRT(){
        return this.takeOption('srt')
    }

   
}

module.exports = new yargses();
