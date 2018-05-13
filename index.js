var katzDeliLine = [];
function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName)
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!"
  } else {
    var first = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${first}.`
  }
}
function currentLine(katzDeliLine) {
  var array = []
  if (katzDeliLine.length < 1) {
    return "The line is currently empty."
  } else {
    for (let i = 0; i < katzDeliLine.length; i++) {
      var string = ` ${i+1}. ${katzDeliLine[i]}`
      array.push(string)
    }
    return `The line is currently:${array}`
  }
}