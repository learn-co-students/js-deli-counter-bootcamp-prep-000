var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine === undefined || katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var announcement = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
    return announcement
  }
}

function currentLine(line) {
  var arr = [];
  if (line === undefined || line.length === 0) {
    return 'The line is currently empty.'
  } else {
    for (var i = 0; i < line.length; i++) {
      var counter = i + 1;
      arr[i] = i + 1 + '. ' + line[i];
      var thisLine = arr.join(', ');
     }
   return `The line is currently: ${thisLine}`
  }
}
