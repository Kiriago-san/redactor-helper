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
                let splitArray = ((input[i].replace(/\\N/g,''))).replace(/\r/g,'').replace(/\"/g,'"').split(',,');
                let number = splitArray.length
                texts = splitArray[number-1]
                    if(texts.includes('{/c/')||texts.includes('{/с/')){
                        texts = texts.replace(new RegExp('(?<=/)(.*)(?=/)'),'c') //change to lat C
                        let commentRaw = texts;
                        texts = texts.replace(new RegExp('(?<={/c/)(.*)(?=})'),'').replace('{/c/}','')// delete comment
                        comment = (commentRaw.split(new RegExp('(?<=/c/)(.*)(?=})')))[1]// add comment to comment
                    }
                texts = texts.replace(/(?<={)(.*)(?=})/g,'').replace('{}','')
                startTime = (input[i].split(new RegExp('(?<=0,)(.*)(?=,0:)')))[1]
                result.push(getObject(startTime, texts, comment));
            }
        }

        return result
    }



}


function getObject(startTime = 1, text = 2, comment = ' ', endTime = 1, actor = 2, ) {
    return {
        "startTime": `${startTime}`,
        //"endTime": `${endTime}`,
        //"actor": `${actor}`,
        "text": `${text}`,
        "comment": `${comment}`
    }
}

module.exports = {
    getObject: getObject,
}


module.exports = new convertToJson()