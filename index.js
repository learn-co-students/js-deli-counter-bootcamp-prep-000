function takeANumber(katzDeliLine, name) {
  var num = katzDeliLine.length + 1
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${num} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift(0)}.`
  }
  katzDeliLine.shift()
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } 
  else {
    var currentLine= 'The line is currently: '
    for (var i = 0; katzDeliLine.length > i ; i++) {
    var currentLineName = katzDeliLine[i];
    var linePosition = katzDeliLine.indexOf(currentLineName) + 1
    currentLine += linePosition + '.' + ' ' + currentLineName + ',' + ' ';
    }
  return currentLine.slice(0,-2);  
  }
}
