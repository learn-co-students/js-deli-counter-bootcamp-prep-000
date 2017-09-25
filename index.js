var katzDeli = [];

function takeANumber(katzDeliLine,newName){
    katzDeliLine.push(newName);
    return "Welcome, " + newName + ". You are number " + katzDeliLine.length + " in line."

}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}


function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  var currentLineNames = [];

  for(var i=0; i<katzDeliLine.length; i++) {
    currentLineNames.push(i+1 + ". "+ katzDeliLine[i]);
  }
  return "The line is currently: " + currentLineNames.join(', ');
}



var katzDeliLine = [];
takeANumber(katzDeliLine, "Ada");
takeANumber(katzDeliLine, "Grace");
takeANumber(katzDeliLine, "Kent");


currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"

nowServing(katzDeliLine); // "Currently serving Ada."

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"

takeANumber(katzDeliLine, "Matz"); // "3"

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"

nowServing(katzDeliLine); // "Currently serving Grace."

currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"
