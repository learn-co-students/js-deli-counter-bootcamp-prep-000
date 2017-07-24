var katzDeli = [];

function takeANumber(katzDeli, name){
  katzDeli.push(name)
  var positionLine = (katzDeli.length)
  return ("Welcome, " + name + ". You are number " + positionLine + " in line.")
}

function nowServing(katzDeli){
    if (katzDeli.length > 0) {
      var firstPerson = katzDeli[0]
        return "Currently serving " + katzDeli.shift() + "."
            return katzDeli
    } else {
      return "There is nobody waiting to be served!"
    }
}

function currentLine(katzDeli){

  var katzDeliLine = []
  var i, j

  if (katzDeli.length > 0) {
    for (i = 0, j = katzDeli.length; i < j; i++) {
      katzDeliLine.push(" " + (i + 1) + ". " + katzDeli[i])
    }
    return `The line is currently:${katzDeliLine}`

  } else {
    return "The line is currently empty."
  }
}
