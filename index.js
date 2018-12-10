 var katzDeliLine = [];

   


function takeANumber(currentLine, name){
  currentLine.push(name);
var placeInLine = currentLine.length;
var outputString = "Welcome, " + name +". You are number " + placeInLine + " in line.";

return outputString;
}

function nowServing(currentLine){
var outputString;
if (currentLine.length === 0){
outputString = "There is nobody waiting to be served!"
}
else{
outputString = "Currently serving " + currentLine[0] + ".";
currentLine.shift();
}
return outputString;
}


function currentLine(line){
var outputString;
if (line.length === 0){
outputString = "The line is currently empty."
}
else{
outputString = "The line is currently: "
for(var i = 0; i < line.length ; i++){
if (i === 0){

outputString = outputString + (i+1) + ". " + line[i];
}
else{
outputString = outputString + "," + " " + (i+1) + ". " + line[i];
}
}
}
return outputString;
}
