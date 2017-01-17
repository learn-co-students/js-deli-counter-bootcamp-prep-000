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
var newline = "The line is currently: ";

if (line[0] != undefined) {

for (let i = 0; i < line.length; i++) {


//lineIndex = line.indexOf(i)
newLineArray.push(" " + (i+1) + ". " + line[i])


}


return "The line is currently:" + newLineArray
  
} else {
  
  var emptyLine = "The line is currently empty.";
  return emptyLine


  
}


  
}
