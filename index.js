function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var now = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${now}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
    
  } else {
    var str = "The line is currently: ";
    let i = 0;
    while (i < katzDeliLine.length - 1) {
      str = str + `${i+1}. ${katzDeliLine[i]}, `;
      i = i+1;
    }
    str = str + `${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length - 1]}`;
    return str;
  }
}
