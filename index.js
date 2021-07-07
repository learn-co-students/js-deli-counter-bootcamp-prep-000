var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
 katzDeliLine.push(`${name}`);
 return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
  }

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0)
  {return (`Currently serving ${katzDeliLine.shift()}.`);
  }
  else {return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
 var lineNumber = [];
 for (var i = 0; line.length > i; i++) {
 lineNumber.push(` ${i+1}. ${line[i]}`);
 }
  if (line.length === 0) {
    return "The line is currently empty."
   }
  else {
    return (`The line is currently:${lineNumber}`);
  }
}