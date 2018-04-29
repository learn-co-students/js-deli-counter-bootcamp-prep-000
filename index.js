var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}


function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "There is nobody waiting to be served!";
  } else { 
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "The line is currently empty.";
  }
  
  var numbersAndName = [];
  
  for (let i = 0, l = katzDeliLine.length; i < l; i++) {
    numbersAndName.push(`${i + 1}. ${katzDeliLine[i]}`);
  }
    return `The line is currently: ${numbersAndName.join(', ')}`;
}