const exportAndImport = require('./exportsANDImport');
const yargs = require('./yargs');
const convertToSRT = require('./converToSRT')

class createSRT{
    createSRTbyActors(file,srt,consoles){
       this.createSRTFile(file,this.getStyleNames(file),srt,consoles)
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

    createSRTFile(file,names,title,consoles){
        let srt = [];
        for(let i = 0; i<names.length;i++ ){
            for(let a = 0; a <file.length;a++){
                if(file[a].actor == names[i]){
                    srt.push(file[a])
                }
            }
            if(!consoles){
                exportAndImport.exportAsSRT(convertToSRT.convertToSRT(srt),`${names[i]}_${title}`);
            }else{
                exportAndImport.exportAsSRT(convertToSRT.convertToSRT(srt),`output/${names[i]}_sub`);
            }
            
            srt = [];
        }
        console.log(`Created ${names.length} file(s)`)
    }
}
module.exports = new createSRT()