
const yargs = require('yargs');

class yargses {

       takeOption(option) {
        const options = yargs
            .usage("Usage: redactor-helper -n <fileName>")
            .option("n", { alias: "fileName", describe: "Your fileName without .side", type: "string", demandOption: false })
            .default('n', null)
            .option('srt', { alias: "SRT", describe: "Title of files that would be created", type: "string", demandOption: false })
            .default('srt', '')
            .option('fix', {alias:"FIX", describe:"Create a 'fix'.txt file comparing .ass and .srt file", type:"string", demandOption: false})
            .default('fix','')
            .argv;

        switch (option) {
            case 'name': return options.fileName;
            case 'srt': return options.srt;
            case 'fix': return options.fix;
        }
        return {
            'name': options.fileName,
            'srt': option.srt,
            'fix': option.fix
        }
    }

    takeName(){
        return this.takeOption('name');
    }

    takeSRT(){
        return this.takeOption('srt')
    }

    takeFix(){
        return this.takeOption('fix')
    }

   
}

module.exports = new yargses();
