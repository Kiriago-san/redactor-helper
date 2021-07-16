# Install
```npm install redactor-helper -g```
## Update
``` npm update -g ```

## Usage
Open git bash or another console in folder were located 2 ass files.

### AutoDetect files

Use ```redactor-helper``` to create logs with differences between 2 files : 
First file can have any title.
The second file must have  _edited.ass ending.

### Creating srt

This script check all style titles, and create srt files for each style.
With srt u have add the string for your file name e.g.
```
redactor-helper --srt 'some_title'
```

## Options:
```
      --help        Show help                                          [boolean]
      --version     Show version number                                [boolean]
  -n, --fileName    Your fileName without .side         [string] [default: null]
      --srt, --SRT  Title of files that would be created  [string] [default: ""]
```