var katzDeli = [];

function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name)
  var number = katzDeliLine.indexOf(name) + 1
  return "Welcome, " + name + ". You are number " + number + " in line."
}

function nowServing (line) {
  for (var i = 0; i<line.length +1; i++){
  if (line.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var serving = line[0]
    line.shift()
    return "Currently serving " + serving + "."
  }
  }
}

function currentLine (line) {
  if (line.length == 0) {
    return "The line is currently empty."
  }
  else {
   var lineList = []
  for (var i = 0; i <line.length; i++){
  	var name = line[i]
      var lineNumber = line.indexOf(name) + 1
      lineList.push(" " + lineNumber + ". " + name)
    }
}
return "The line is currently:" + lineList
  }
