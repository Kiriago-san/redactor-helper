
const yargses = require('./yargs')
const { exec } = require("child_process");

class seleniumSideRunner {

    run() {
        let nameOfFile = yargses.takeName() + '_edited.side';
        
        exec("selenium-side-runner ./outputSides/" + nameOfFile, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
    }


}

module.exports = new seleniumSideRunner();