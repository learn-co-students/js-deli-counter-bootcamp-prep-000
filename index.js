var katzDeli = [];
var otherDeli = []

function takeANumber(katzDeliLine, person) {
  var len = katzDeliLine.length + 1;
  var position = ''
  katzDeliLine.push(person);
  position = "Welcome, " + person + ". You are number " + len + " in line."
  return position
}

function nowServing(katzDeliLine) {
  var serving = ''
  var name = ''
  if(katzDeliLine.length > 0) {
    name = katzDeliLine.shift()
    serving = "Currently serving " + name + "."
  } else {
    serving = "There is nobody waiting to be served!"
  }
  return serving
}

function currentLine(katzDeliLine) {
  var line = ''
  if (katzDeliLine.length > 0) {
    line = 'The line is currently: '
    var people = []
    var i = 0
    while (i < katzDeliLine.length) {
      var p = (i + 1) + '. ' + katzDeliLine[i]
      people.push(p)
      i++
    }
    line += people.join(', ')
  } else {
    line = 'The line is currently empty.'
  }
  return line
}
