
var katzDeliLine = [];

function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var first = katzDeliLine[0];
  katzDeliLine.shift();
  return `Currently serving ${first}.`;
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  
  var formatted = [];
  var counter = 0;
  while (katzDeliLine.length > counter) {
    if (counter === 0) {
      var texty = `${counter + 1}. ${katzDeliLine[counter]}`;
    } else {
      var texty = ` ${counter + 1}. ${katzDeliLine[counter]}`;
    }
    
    formatted.push(texty);
    
    counter++
  }
  var line = formatted.toString();
  
  return `The line is currently: ${line}`;
}
