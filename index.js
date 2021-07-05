//Take a number

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return (`Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`);
}

//Now serving
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

//Current Line

function currentLine(katzDeliLine) {
  var daLine = new Array()
  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i++) {
      daLine.push(` ${i+1}. ${katzDeliLine[i]}`)
    }
    return `The line is currently:${daLine}`
  }
  else {
    return "The line is currently empty.";
  }
}
