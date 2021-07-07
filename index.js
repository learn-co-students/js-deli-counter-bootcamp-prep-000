function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine[katzDeliLine.length] = newPerson;
  return `Welcome, ${katzDeliLine[katzDeliLine.length-1]}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(deliLine) {
  if (deliLine.length === 0)
    return 'There is nobody waiting to be served!';
  else {
    var served = deliLine[0];
    deliLine.shift();
    return `Currently serving ${served}.`;
  }
}

function currentLine(line) {
  var i =1;
  var queue = "";
  if (line.length === 0)
    return 'The line is currently empty.';
  else {
    while (i <= line.length) {
      if (queue !== "")
        queue +=", ";
      queue += `${i}. ${line[i-1]}`;
      i++;
    }
    
  }
  
  return `The line is currently: ${queue}`;
}