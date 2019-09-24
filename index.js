function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name); 
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length >= 1) {
    const currentCustomer = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${currentCustomer}.`;
  } else return "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length >= 1) {
    let line = "";
    for (let i = 0; i < katzDeliLine.length; i++) {
      line = line + (i + 1) + ". " + katzDeliLine[i];
      if (i < katzDeliLine.length -1) {
        line = line + ", ";
      }
    }
    line.slice(-1);
    return `The line is currently: ` + line;
  }
  else {
    return "The line is currently empty.";
  }
}