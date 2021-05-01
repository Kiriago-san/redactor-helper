

function compareJsons(first,second){
    let diferences = [];
    for(let i =0;i<first.length;i++){
        if(first[i].text!=second[i].text||first[i].comment!=second[i].comment){
            diferences.push(`${first[i].startTime} ${first[i].text} ('${second[i].text}' - ${second[i].comment})`);
        }
    }
    return diferences

}
module.exports = {
    compareJsons:compareJsons
}