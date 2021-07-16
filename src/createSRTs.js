const exportAndImport = require('./exportsANDImport');
const yargs = require('./yargs');
const convertToSRT = require('./converToSRT')

class createSRT{
    createSRTbyActors(file,srt){
       this.createSRTFile(file,this.getStyleNames(file),srt)
    }

    getStyleNames(file){
        let names = [];
        for(let i = 0; i<file.length;i++){
            if(names.length==0){names.push(file[i].actor)}
           
                if(!names.includes(file[i].actor)){
                    names.push(file[i].actor)
                }
        }
        return names;
    }

    createSRTFile(file,names,title){
        let srt = [];
        for(let i = 0; i<names.length;i++ ){
            for(let a = 0; a <file.length;a++){
                if(file[a].actor == names[i]){
                    srt.push(file[a])
                }
            }
            exportAndImport.exportAsSRT(convertToSRT.convertToSRT(srt),`${names[i]}_${title}`);
            srt = [];
        }
        console.log(`Created ${names.length} file(s)`)
    }
}
module.exports = new createSRT()