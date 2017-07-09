var katzDeli = [];

function takeANumber(katzDeliLine, newPerson) {
  if (katzDeliLine.length > 0) {
    katzDeliLine.push(newPerson);
    return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
  } else {
    katzDeliLine.push(newPerson);
    return `Welcome, ${newPerson}. You are number 1 in line.`;
  }
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}



function  currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var orderLine = "The line is currently: ";
    for (let i = 0; i < katzDeliLine.length-1; i++) {
      orderLine += `${i+1}. ${katzDeliLine[i]}, `;
    }
    return orderLine += `${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length-1]}`;
  }
}
