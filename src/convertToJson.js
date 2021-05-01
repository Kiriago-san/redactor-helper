const exportAndImport = require('./exportsANDImport');


class convertToJson {



    convertToJson(input,tag) {

        let result = [];



        for (let i = 1; i < input.length; i++) {
            let commentFlag = false;
            let flag = true;
            let switcher = 0;
            let startTime = '';
            let endTime = '';
            let actor = '';
            let texts = '';
            let comment = '';
            if (input[i].includes('Dialogue:')) {
                //console.log(input[i]);

                for (let a = 1; a < (input[i].length - 2); a++) { // -1 to cut /r; -1 for delete coma at text
                    if (input[i][a] == ',' && switcher != 9) {
                        switcher++;
                        //console.log(switcher);
                    }

                    switch (switcher) {
                        case 1: startTime = input[i][a] == ',' ? startTime : startTime + input[i][a]
                            break;
                        case 2: endTime = input[i][a] == ',' ? endTime : endTime + input[i][a]
                            break;
                        case 3: actor = input[i][a] == ',' ? actor : actor + input[i][a]
                            break;
                        case 9:
                            if (input[i][a + 1] == '{') flag = false;
                            if (input[i][a - 2] == `/` && (input[i][a - 1] == `c` || input[i][a - 1] == `с`) && input[i][a] == `/`) commentFlag = true;

                            comment = commentFlag ? comment + input[i][a + 1] : comment;
                            texts = flag ? texts + input[i][a + 1] : texts;

                            if (input[i][a + 1] == '}') flag = true;
                            if (input[i][a + 2] == `}`) commentFlag = false;
                            break;
                    }
                }
                //console.log(input[i].length)
               // console.log(getObject(startTime, endTime, actor, texts, comment));
                // console.log(input);
                // console.log(texts);
                result.push(getObject(startTime, endTime, actor, texts, comment));
            }
        }
        //console.log(result)
        //exportAndImport.exportAsJsonFile(result,tag)
        return result
    }



}


function getObject(startTime = 1, endTime = 1, actor = 2, text = 2, comment = ' ') {
    return {
        "startTime": `${startTime}`,
        "endTime": `${endTime}`,
        "actor": `${actor}`,
        "text": `${text}`,
        "comment": `${comment}`
    }
}

module.exports = {
    getObject: getObject,
}


module.exports = new convertToJson()