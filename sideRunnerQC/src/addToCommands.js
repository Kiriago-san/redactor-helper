
const yargses = require('./yargs')

class AddToCommands {

    pause(timeOfPause) {
        let pause = {
            id: '',
            comment: '',
            command: 'pause',
            target: `${timeOfPause}`,
            targets: [],
            value: '',
        };

        return pause;
    }

    mouseOver(target) {
        let mouseOver = {
            id: '',
            comment: '',
            command: 'mouseOver',
            target: target,
            targets: [],
            value: '',
        };

        return mouseOver;
    }

    waitForElementPresent(target, value) {
        let waitForElementPresent = {
            id: '',
            comment: '',
            command: 'waitForElementPresent',
            target: `${target}`,
            targets: [],
            value: `${value}`,
        };

        return waitForElementPresent;
    }

    waitForElementVisible(target, value) {
        let waitForElementVisible = {
            id: '',
            comment: '',
            command: 'waitForElementVisible',
            target: `${target}`,
            targets: [],
            value: `${value}`,
        };
        return waitForElementVisible;
    }

    waitForElementNotPresent(target, value){
        let waitForElementNotPresent = {
            id: '',
            comment: '',
            command: 'waitForElementNotPresent',
            target: `css=disabled="disabled"`,
            targets: [],
            value: `${value}`,
        };
        return waitForElementNotPresent;
    }

    waitForElementEditable(target, value){
        let waitForElementNotPresent = {
            id: '',
            comment: '',
            command: 'waitForElementEditable',
            target: `${target}`,
            targets: [],
            value: `${value}`,
        };
        return waitForElementNotPresent;
    }



    addPauseBeforeClick(file) {
        let timeOfPause = yargses.takePause();
        let buffer = {};
        const lenght = file.tests[0].commands.length;

        for (let i = 0; i < lenght; i++) {
            buffer = (file.tests[0].commands[i]);

            if (file.tests[0].commands[i].command == 'click') {
                file.tests[0].commands.push(this.pause(timeOfPause));
              
                file.tests[0].commands.push(buffer);
            }
            else {
                file.tests[0].commands.push(buffer);
            }
        }
        let counter = 0;
        while (counter < lenght) {
            file.tests[0].commands.shift();
            counter++;
        }
    }


    addWaitsAndHoverBeforeClick(result) {
        let valueOfWaits = yargses.takeWait();
        let buffer = {};
        const lenght = result.tests[0].commands.length;


        for (let i = 0; i < lenght; i++) {
            buffer = (result.tests[0].commands[i]);
            let command = result.tests[0].commands[i].command;
            if (command == 'click') {
                let target = result.tests[0].commands[i].target;
                //result.tests[0].commands.push(this.waitForElementNotPresent(target, valueOfWaits));
                result.tests[0].commands.push(this.waitForElementPresent(target, valueOfWaits));
                result.tests[0].commands.push(this.waitForElementVisible(target, valueOfWaits));
                result.tests[0].commands.push(this.mouseOver(target));
                result.tests[0].commands.push(buffer);
            }
            else {
                result.tests[0].commands.push(buffer);
            }
        }
        let counter = 0;
        while (counter < lenght) {
            result.tests[0].commands.shift();
            counter++;
        }

    }

    addPauseBeforeSelectFrame(file){
        let timeOfPause = yargses.takePause();
        let buffer = {};
        const lenght = file.tests[0].commands.length;

        for (let i = 0; i < lenght; i++) {
            buffer = (file.tests[0].commands[i]);

            if (file.tests[0].commands[i].command == 'selectFrame') {
                file.tests[0].commands.push(this.pause(timeOfPause));
                file.tests[0].commands.push(buffer);
            }
            else {
                file.tests[0].commands.push(buffer);
            }
        }
        let counter = 0;
        while (counter < lenght) {
            file.tests[0].commands.shift();
            counter++;
        }
    }

    addWaitForElementEditableBeforeType(result){
        let valueOfWaits = yargses.takeWait();
        let buffer = {};
        const lenght = result.tests[0].commands.length;

        for (let i = 0; i < lenght; i++) {
            buffer = (result.tests[0].commands[i]);
            let command = result.tests[0].commands[i].command;
            if (command == 'type') {
                let target = result.tests[0].commands[i].target;
                result.tests[0].commands.push(this.waitForElementEditable(target, valueOfWaits));
                result.tests[0].commands.push(buffer);
            }
            else {
                result.tests[0].commands.push(buffer);
            }
        }
        let counter = 0;
        while (counter < lenght) {
            result.tests[0].commands.shift();
            counter++;
        }
    }

}

module.exports = new AddToCommands();