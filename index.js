var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  var position = katzDeliLine.length + 1
  katzDeliLine.push(name)
  return 'Welcome, ' + name + '. You are number ' + position + ' in line.'
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var name = katzDeliLine.shift()
    return "Currently serving "+ name + "."
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    var text = "The line is currently: "
    for (var i = 0; i<katzDeliLine.length; i++) {
      var position = i + 1
      if (position===katzDeliLine.length) { 
      text =  text + position + '. ' + katzDeliLine[i]
      }
      else {
      text =  text + position + '. ' + katzDeliLine[i] + ", "
      }
    }
    return text
  }
}