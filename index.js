function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name); // adds person to the line
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`); // returns number in line
}


function nowServing(line) {
  if (line.length === 0) { // if there is no elements in array (people in line) 
    return "There is nobody waiting to be served!";
  } else {
    var firstPerson = line.shift();
    return `Currently serving ${firstPerson}.`;
  }
}


var lineList = [];

function currentLine(lineNumber, name) {
  for (let n = 0; n < lineNumber.length; n++) {
    lineList.push(` `+ [n + 1]+`. ` + lineNumber[n])
  }
  if (lineNumber.length === 0) {
    return "The line is currently empty."
  } else {
    return(`The line is currently:` + lineList);
  }
}