# sideRunnerQC

## Using
Add the side files that you need to test
run this one with: 
```side-runner-qc -n [name of file (without .side)]```
Side files must located in 'inputSides' folder.
After converted side files saving in 'outputSides' folder.

### Additional settings

Additional settings you can check:
```side-runner-qc --help```


## What it do

1. Fix some selectors, add css= or xpath= if it needed;
2. Add hard pause before click;
3. Add the waitForElementPresent and waitForElementVisible before click;
4. Add the mouseOver before click;
5. Create file in outputSides ```[yourName]_edited.side```;
6. Run the selenium-side-runner with a file that was created earlier.

## Example how it works
### Before using 'side-runner-qc'
```terminal
{
      "id": "0fbf9ea0-e96d-46b0-a3a9-d4fb47c7c499",
      "comment": "",
      "command": "click",
      "target": "[data-quid=\"main-navigation-menu\"]",
      "targets": [],
      "value": "",
      "lexieMetaData": "lexieNoMD"
}
```

### After using 'reBuilder'
Using 
```terminal
    {
     "id": "",
     "comment": "",
     "command": "pause",
     "target": 3000,
     "targets": [],
     "value": ""
    },
    {
     "id": "",
     "comment": "",
     "command": "waitForElementPresent",
     "target": "css=[data-quid=\"main-navigation-menu\"]",
     "targets": [],
     "value": 30000
    },
    {
     "id": "",
     "comment": "",
     "command": "waitForElementVisible",
     "target": "css=[data-quid=\"main-navigation-menu\"]",
     "targets": [],
     "value": 30000
    },
    {
     "id": "",
     "comment": "",
     "command": "mouseOver",
     "target": "css=[data-quid=\"main-navigation-menu\"]",
     "targets": [],
     "value": ""
    },
    {
    "id": "0fbf9ea0-e96d-46b0-a3a9-d4fb47c7c499",
      "comment": "",
      "command": "click",
      "target": "css=[data-quid=\"main-navigation-menu\"]",
      "targets": [],
      "value": "",
      "lexieMetaData": "lexieNoMD"
    }
```