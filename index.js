var KatzDeli = []

var takeANumber = (katzDeliLine, name) => {
  katzDeliLine.push(name)
  return katzDeliLine.length + 1
}

var nowServing = katzDeliLine => {
  var firstPerson = katzDeliLine.slice(0,1)
  katzDeliLine.shift()
  return firstPerson
}

var currentLine = katzDeliLine => {
  if (katzDeliLine.length !== 0) {
    var string = "The line is currently:"
    for (var i = 0; i < katzDeliLine.length; i++) {
      string + `${i}. ${katzDeliLine[i]},`
    }
    return string.length - 1
  } else {
    return "The line is currently empty."
  }
}
