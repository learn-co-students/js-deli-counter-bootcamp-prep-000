function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  return katzDeliLine.length !== 0 ? `Currently serving ${katzDeliLine.shift()}.`
    :  "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine) {
  var line = "The line is currently:";

  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for (let i = 0; i < katzDeliLine.length; i++) {
      line += ` ${i + 1}. ${katzDeliLine[i]}${i === katzDeliLine.length - 1 ? '' : ','}`;
    }
    return line;
  }


}
