

class ConvertToSRT {
    convertToSRT(file) {
        let result = []
        for (let i = 0; i < file.length; i++) {
            if (i == 0) {

                result.push("1")
                result.push("0:00:00,01 --> 0:00:05,00")
                result.push("              ")
                result.push("")

            }
            result.push(`${i + 2}`);
            result.push(`${(file[i].startTime)} --> ${file[i].endTime}`);
            result.push(`${file[i].text}`)
            result.push("");
        }
        return result;
    }
}
module.exports = new ConvertToSRT()