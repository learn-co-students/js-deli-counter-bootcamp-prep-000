var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return 'Welcome, ' + name +'. You are number ' + katzDeliLine.length + ' in line.'
  }
  
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + "."
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  var n = katzDeliLine.length
  if (n === 0) {
    return "The line is currently empty."
  } else {
    var array = []
    for (var i = 0; i < n; i++) {
      array.push(" " + (i + 1) + ". " + katzDeliLine[i])
    }
    return "The line is currently:" + array
  }
  }