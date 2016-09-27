var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var serving = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
    return serving;
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
    var newLine = [];
    for(var i = 0; i < katzDeliLine.length; i++) {
      newLine.push(`${i + 1}. ${katzDeliLine[i]}`);
    }
    return `The line is currently: ${newLine.join(', ')}`;
  }
}
