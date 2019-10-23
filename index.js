

function takeANumber(katzDeliLine,newName) {
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.indexOf(newName)+1} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length != 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return `There is nobody waiting to be served!`;
  }
}

function currentLine(katzDeliLine) {
  var phrase = `The line is currently: `
  if (katzDeliLine.length != 0) {
    var i;
    for (i = 0; i < katzDeliLine.length; i++) {
      if (i != katzDeliLine.length-1) {
      phrase = phrase + `${i+1}. ${katzDeliLine[i]}, `
      } else if (i == katzDeliLine.length-1) {
      phrase = phrase + `${i+1}. ${katzDeliLine[i]}`
      }
    }
  } else {
    return `The line is currently empty.`;
  }
  return phrase;
}
