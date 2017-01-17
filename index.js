function takeANumber(katzDeliLine, name) {

  katzDeliLine.push(name)
  
  var arrayIndex = (katzDeliLine.indexOf(name) + 1);
  var numberInLine = ("Welcome, " + name + ". You are number " + arrayIndex + " in line.");

  return numberInLine

}

function nowServing(katzDeliLine, name) {


if (katzDeliLine[0] != undefined) {

  var firstInLine = ("Currently serving " + katzDeliLine[0] + ".");
  katzDeliLine.shift();
  return firstInLine
  

  
} else {
  
  var emptyLine = "There is nobody waiting to be served!";
  return emptyLine
  
}


  
}


function currentLine(line) {

var newLineArray = [];
string newline = "The line is currently: ";

if (line[0] != undefined) {

for (let i = 0; i < line.length; i++) {
//lineIndex = 

newLineArray.push(line.indexOf(i) + ". " + line[i])


}


return newLine + newLineArray
  
} else {
  
  var emptyLine = "The line is currently empty.";
  return emptyLine


  
}


  
}
