var katzDeli = [];

function takeANumber(KatzDeliLine, Ada) {
  KatzDeliLine.push(Ada);
  var num = parseInt(KatzDeliLine.length);
  return `Welcome, ${Ada}. You are number ${num} in line.`;
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ${deliLine.shift()}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    var array = []
    for (let i = 0; i < katzDeliLine.length; i++) {
      var j = i + 1
      var s = `${j}. ${katzDeliLine[i]}`
      array.push(s)
    }
    return `The line is currently: ${array.join(', ')}`
  }
}
