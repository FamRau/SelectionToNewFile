%SCRIPT

var fileName = getFileName();
var selectedText = getSelectedText();
var path = getPath();
var pathAndName = path + '/' + fileName + '.tex';

// Select Text
function getSelectedText(){
	return(cursor.selectedText());
};

// Get path to current opend file
function getPath(){
	const RegexPattern = /[^\/](\w+\.\w+$)/i;
	return(editor.fileName().replace(RegexPattern, ''));
};

// Choose Filename 
// FixMe: Change function to a more convenient solution
function getFileName(){
	fileChooser.exec() 
	return(fileChooser.fileName());
};

// Write the selected Text to file
writeFile(pathAndName, selectedText); 

// insert \input{} tag to current cursor position
editor.insertText("\\input" + "{"+ fileName + "}"); 

app.load(pathAndName);
