function takeANumber(katzDeliLine, newPerson) {
 katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
    }
    else {
     var tempPerson = katzDeliLine[0];
     katzDeliLine.shift();
     return `Currently serving ${tempPerson}.`;
    }
}

function currentLine(katzDeliLine) {
    if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
    }
    else {
      var lineNumber = "";
      var i = 0;
      do {
        var comma ;
        if (i === katzDeliLine.length -1) {
          comma = "";
        }
        else {
          comma = ", ";
        }
    lineNumber = lineNumber + (1 + i) +". " + katzDeliLine[i] + comma;
    i++;
  }
  while (i < katzDeliLine.length);
  return "The line is currently: "+lineNumber; 
    }
}