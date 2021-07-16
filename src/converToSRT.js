

class ConvertToSRT{
    convertToSRT(file){
        let result = []
        for(let i = 0; i<file.length;i++){
            result.push(`${i+1}`);
            result.push(`${(file[i].startTime)} --> ${file[i].endTime}`);
            result.push(`${file[i].text}`)
            result.push("");
        }
        return result;
    }
}
module.exports = new ConvertToSRT()