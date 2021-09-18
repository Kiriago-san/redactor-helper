const exportAndImport = require('./exportsANDImport');


class convertToJson {

    convertSRTtoJSON(input) {
        let data = [];
        let buffer = [];

        for (const numberOfRow in input) {
            let rawData = `${input[numberOfRow]}`.replace('\r', '');
            let startTime;
            let comment;

            let index = rawData.indexOf(' --> ');
            let symbols = rawData.search(/[а-я]/gm)
            if (index != -1) {
                let bufferA = rawData.split(' --> ')
                startTime = bufferA[0];
                buffer.push({startTime})
            }
            else if(symbols != -1){
                comment = rawData;
                buffer.push({comment});
            }
        }

        for(let i = 0;i<((buffer.length)/2);i++ ){
            let startTime = buffer[i*2].startTime;
            let comment = buffer[i*2+1].comment;
            data.push({startTime,comment})
        }
        
        return data;
    }



    convertToJson(input) {

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
                let splitArray = ((input[i].replace(/\\N/g, ' '))).replace(/\r/g, '').replace(/\"/g, '"').split(',,');
                let number = splitArray.length
                texts = splitArray[number - 1]
                if (texts.includes('{/c/') || texts.includes('{/с/')) {
                    texts = texts.replace(new RegExp('(?<=/)(.*)(?=/)'), 'c') //change to lat C
                    let commentRaw = texts;
                    texts = texts.replace(new RegExp('(?<={/c/)(.*)(?=})'), '').replace('{/c/}', '')// delete comment
                    comment = ((commentRaw.split(new RegExp('(?<=/c/)(.*)(?=})')))[1]).replace(/"/g, "/'")// add comment to comment
                }
                texts = texts.replace(/(?<={)(.*)(?=})/g, '').replace('{}', '')
                startTime = (input[i].split(new RegExp('(?<=,)(.*)(?=,0:)')))[1];
                splitArray = input[i].split(',')
                endTime = splitArray[2];
                actor = splitArray[3];
                result.push(getObject(startTime, texts, comment, endTime, actor));
            }
        }

        return result
    }



}


function getObject(startTime = 1, text = 2, comment = ' ', endTime = 1, actor = 2,) {
    return {
        "startTime": `${startTime}`,
        "endTime": `${endTime}`,
        "actor": `${actor}`,
        "text": `${text}`,
        "comment": `${comment}`
    }
}



module.exports = new convertToJson()