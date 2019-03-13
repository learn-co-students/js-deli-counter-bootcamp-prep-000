var katzDeli = [];

function takeANumber(currentLine, name){
  var placeInLine = currentLine.length + 1;
  var outputString = (`Welcome, ${name}. You are number ${placeInLine} in line.`);
  currentLine.push(name);
  return outputString;
}

function nowServing(currentLine){
  var outputString;
  if (currentLine.length === 0){
    outputString = "There is nobody waiting to be served!"
  }
  else {
    outputString = "Currently serving " + currentLine[0] + ".";
    currentLine.shift();
  }return outputString;
}