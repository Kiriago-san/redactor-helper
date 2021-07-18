

function compareJsons(first, second) {
    let diferences = [];
    for (let i = 0; i < first.length; i++) {
        let firstLeng = (first[i].comment.length != 0);
        let secondLeng = (second[i].comment.length != 0);
        let equal = first[i].text != second[i].text;

        if ((equal
            && first[i].comment != second[i].comment) && (firstLeng || secondLeng)
        ) {
            diferences.push(`${first[i].startTime} ${first[i].text} ("${second[i].text}" — ${first[i].comment}) — ${second[i].comment}`);
        }
        else if ((equal
            && first[i].comment == second[i].comment) && (firstLeng || secondLeng)) {
            diferences.push(`${first[i].startTime} ${first[i].text} ("${second[i].text}" — ${second[i].comment})`);
        }
        else if ((equal
            || first[i].comment != second[i].comment) && (!firstLeng && !firstLeng)
        ) {
            diferences.push(`${first[i].startTime} ${first[i].text} ("${second[i].text}")`);
        }
    }
    return diferences

}
module.exports = {
    compareJsons: compareJsons
}