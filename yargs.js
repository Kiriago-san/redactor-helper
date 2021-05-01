const yargs = require("yargs");

class yargses {

       takeOption(option) {
        const options = yargs
            .usage("Usage: side-runner-qc -n <fileName>")
            .option("n", { alias: "fileName", describe: "Your fileName without .side", type: "string", demandOption: true })
            .option("pause", {
                allias: "pause",
                describe: "How long 'hard pause' would works",
                type: "number"
            })
            .option("wait",{
                allias:("wait"),
                describe: "How long 'waits' would works",
                type: "number"
            })
            .option("combine",{
                alias:"combine",
                describe: "Add the file to first one. Usage --combine <secondFileName>",
                type: "string"
            })
            .default('pause', 2000)
            .default('wait', 10000)
            .argv;

        switch (option) {
            case 'name': return options.fileName;
            case 'pause': return options.pause;
            case 'wait': return options.wait;
            case 'combine': return options.combine;
        }
    }

    takeName(){
        return this.takeOption('name');
    }

    takeCombineName(){
        return this.takeOption('combine')
    }

    takePause(){
        return this.takeOption('pause');
    }

    takeWait(){
        return this.takeOption('wait');
    }
}

module.exports = new yargses();
