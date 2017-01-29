function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)
  return "Welcome, "+name+". You are number "+katzDeliLine.length+" in line."
}

function nowServing(katzDeliLine) {
  var string = "There is nobody waiting to be served!"
  if (katzDeliLine.length>0) {
    string = "Currently serving " + katzDeliLine.shift() + "."
  }
  return string
}

function currentLine(katzDeliLine) {
  var string = "The line is currently empty."
  if (katzDeliLine.length>0) {
    string = "The line is currently:"
    for (var i = 0; i<katzDeliLine.length;i++) {
      string += " " + (i+1) + ". " + katzDeliLine[i]
      if(i < katzDeliLine.length-1) {
        string += ","
      }
    }
  }
  return string
}
