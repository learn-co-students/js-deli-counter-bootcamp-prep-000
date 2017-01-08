

function takeANumber(katzDeliLine, person) {
    if (katzDeliLine.length == 0) {
      katzDeliLine.push(person);
      return `Welcome, ${person}. You are number 1 in line.`;
    } else {
      katzDeliLine.push(person);
      return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`;
    }
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    var nextCustomer = katzDeliLine.shift();
    return `Currently serving ${nextCustomer}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length == 0) {
    return "The line is currently empty.";
  } else {
    const lineString = katzDeliLine.map((entry, i) => `${i + 1}. ${entry}`).join(", ");
    return `The line is currently: ${lineString}`;
  }
}
