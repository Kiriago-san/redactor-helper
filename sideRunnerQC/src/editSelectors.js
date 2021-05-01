
class editSelectors {

    editSelectors(result) {
        const lenght = result.tests[0].commands.length;

        for (let i = 0; i < lenght; i++) {
            let command = result.tests[0].commands[i].command;
            if (command == 'click') {
                let target = result.tests[0].commands[i].target;
                // if(target == "xpath=//button[contains(., 'Add to Order')]"){
                //     result.tests[0].commands[i].target = "xpath=(//button[contains(., 'Add to Order')])[2]"
                // }
                let idPatern = target.match('^id=');
                if (!target.includes('css=') && !target.includes('xpath=') && !target.includes('linkText=') && !idPatern) {
                    let paternXpath = target.match('^/');
                    if (paternXpath != null) {
                        result.tests[0].commands[i].target = 'xpath=' + target;
                    }
                    else {
                        result.tests[0].commands[i].target = 'css=' + target;
                    }
                }
            }
        }
    }
}

module.exports = new editSelectors();