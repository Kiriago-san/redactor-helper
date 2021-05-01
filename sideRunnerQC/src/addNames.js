
class AddNames {

    isEmpty(str) {
        if (str.trim() == '') {
            return true;
        }
        else { return false; }
    }

    checkAndChangeName(file) {
        if(this.isEmpty(file.name)){
            file.name = 'Test Suite';
        }
    }

    checkAndChangeTestName(file) {
        if(this.isEmpty(file.tests[0].name)){
            file.tests[0].name = 'Test';
        }
    }

    checkAndChangeSuiteName(file){
        if(this.isEmpty(file.suites[0].name)){
            file.suites[0].name = 'Default Suite';
        }
    }

    changeNames(file) {
        this.checkAndChangeName(file);
        this.checkAndChangeTestName(file);
        this.checkAndChangeSuiteName(file);
    }



}

module.exports = new AddNames();