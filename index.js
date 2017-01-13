var katzDeliLine = []

function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing() {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    let name = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${name}.`
  }
}

function currentLine() {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var string = "The line is currently: "
    var i = katzDeliLine.length;
    while (i > 0) {
      var string = string + `${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length - 1]}, `
      --i
    }
    return string
  }
}
