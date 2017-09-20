var katzDeli = [];

var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)

  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`


}

function nowServing(katzDeliLine) {

  if (katzDeliLine.length > 0) {

    var currentlyServed = katzDeliLine[0]

    katzDeliLine.shift()
    return `Currently serving ${currentlyServed}.`

  }

  else {
    return "There is nobody waiting to be served!"
  }
  katzDeliLine.unshift
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0 ) {
    return "The line is currently empty."
  }

  else {

    var whoIsInLine = "The line is currently: "

    for (let i = 1; i <= katzDeliLine.length; i++) {

      if (i < katzDeliLine.length) {
        whoIsInLine = whoIsInLine + i + ". " + katzDeliLine[i-1] + ", "
      }

      else {
        whoIsInLine = whoIsInLine + i + ". " + katzDeliLine[i-1]
      }
    }
    return whoIsInLine
  }
}
