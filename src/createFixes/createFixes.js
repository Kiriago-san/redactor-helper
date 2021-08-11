const rawActors = require('../helper/actors.json');
const exportAndImport = require('../exportsANDImport');
const convertToJSON = require('../convertToJson');


class createFixes {
    create(file) {
        let fixesSRT = convertToJSON.convertSRTtoJSON(exportAndImport.importSRTFile('*'));
        // console.log(fixesSRT)
        exportAndImport.exportAsTxt(this.findFixesInAssFile(fixesSRT, file), 'fixes', false)
    }

    findFixesInAssFile(fixes, file) {
        let data = []
        for (const [key, value] of Object.entries(rawActors)) { //every role
            data.push('\n');
            data.push(key, ':');
            data.push('\n');
            for (let c = 0; c < file.length; c++) { // every phrase
                for (let i = 0; i < fixes.length; i++) { // check every fix
                    let srtStart = parseFloat(fixes[i].startTime.slice(0, -1).replace(/[:|.|,]/g, ''));
                    let comment,
                        actor,
                        switcher = false;
                    if (fixes[i].comment[0] == fixes[i].comment[1] == '!') {
                        actor = ((fixes[i].comment.split(' ', 1))[0]).toLowerCase()
                        comment = fixes[i].comment.replace(`${actor} `, '');
                    }
                    else {
                        comment = fixes[i].comment;
                        switcher = true;
                    }

                    if ((value.includes(actor) && key == file[c].actor) || (switcher && key == file[c].actor)) {
                        let assStart = parseFloat(file[c].startTime.replace(/[:|.|,]/g, ''));
                        let assEnd = parseFloat(file[c].endTime.replace(/[:|.|,]/g, ''));
                        //console.log(assStart, srtStart, assEnd)
                        if (assStart <= srtStart && srtStart <= assEnd) {

                            data.push(`${file[c].startTime} ${file[c].text} (${comment})`, '\n')
                        }
                    }
                }
            }
        }
        return data.join('');
    }
}

module.exports = new createFixes();