var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var temp
  temp = katzDeliLine.indexOf(name)
  var tempy = temp + 1
  return "Welcome, " + name + ". You are number " + tempy + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }

  else if(katzDeliLine.length != 0) {
    var temp = katzDeliLine[0]
    katzDeliLine.shift()
    return "Currently serving " + temp + "."
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }


  else if (katzDeliLine.length != 0) {
    var sentence = "The line is currently: "
    for(var i=0;i<katzDeliLine.length;i++) {
      var linePosition = i+1
      if (i === katzDeliLine.length -1) {
        sentence = sentence + linePosition + ". " + katzDeliLine[i]
      }
      else {
        sentence = sentence + linePosition + ". " + katzDeliLine[i] + ", "
      }
    }
    return sentence
  }

}
