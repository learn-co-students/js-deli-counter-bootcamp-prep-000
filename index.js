
var katzDeli = [];

var takeANumber = function (katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

var nowServing = function (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var beingServed = katzDeliLine.shift();
    return `Currently serving ${beingServed}.`
  }
}

var currentLine = function (line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var tmpLine = line.slice();
    var strLine = '';
    while (tmpLine.length > 0) {
      strLine = ' ' + tmpLine.length + '. ' + tmpLine.pop() + strLine
      if (tmpLine.length > 0) {
        strLine = "," + strLine
      }

    }
    return  'The line is currently:' + strLine;
  }
}
