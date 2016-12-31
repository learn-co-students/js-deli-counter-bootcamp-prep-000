var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return  ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.")
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var text = "Currently serving " + katzDeliLine[0] + "."; 
    katzDeliLine.shift();  
    return text;
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  var line = []
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
  for (var i = 0 ; i < katzDeliLine.length ; i++) {
    var j = i + 1
    line.push(" " + j +"." + " " + katzDeliLine[i])
    }
    return "The line is currently:" + line
  }
  }