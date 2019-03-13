var katzDeli = [];

function takeANumber(currentLine, name){
  var placeInLine = currentLine.length + 1;
  var outputString = (`Welcome, ${name}. You are number ${placeInLine} in line.`);
  currentLine.push(name);
  return outputString;
}