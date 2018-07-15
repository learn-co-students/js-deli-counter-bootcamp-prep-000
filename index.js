var lineNumber = [];

function takeANumber(lineNumber, name) {
  lineNumber.push(name);
  return (`Welcome, ${name}. You are number ${lineNumber.length} in line.`);
}


function nowServing(lineNumber) {
  var n = 0;
  while (n < lineNumber.length) {
   n++;
  }
  if (lineNumber.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${lineNumber.shift()}.`;
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