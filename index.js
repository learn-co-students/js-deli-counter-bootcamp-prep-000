var katzDeli = [];

function takeANumber(katzDeliLine, new_name) {
  katzDeliLine.push(new_name);
  return `Welcome, ${new_name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    var sentence = "The line is currently:";
    for (var i = 0; i < katzDeliLine.length - 1; i++) {
      sentence = sentence + ` ${i+1}. ${katzDeliLine[i]},`;
    }
    sentence = sentence + ` ${i+1}. ${katzDeliLine[i]}`
    return sentence;
  }
}
