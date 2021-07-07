var katzDeliLine = [];
function takeANumber(currentLine, newName) {
  currentLine.push(newName);
  return `Welcome, ${newName}. You are number ${currentLine.length} in line.`;
}
function nowServing(katzDeliLine) {
  var serving = katzDeliLine[0];
  if (serving) {
    katzDeliLine.shift();
    return `Currently serving ${serving}.`
  } else {
    return "There is nobody waiting to be served!"
  }
  
}
function currentLine(line) {
  var n = 1;
  var m = 0
  var l = line.length;
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    while (l > 0) {
      line[m] = ` ${n}. ${line[m]}`
      l--
      m++
      n++
    }
  
    return `The line is currently:${line}`;
  }
}
