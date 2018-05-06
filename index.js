var katzDeli = [];

function takeANumber (katzDeliLine, name) {
  katzDeliLine.push (name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var x = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
    return x
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var newArray = []
    for (var i = line.length - 1; i >= 0; --i) {
      newArray.unshift(` ${i + 1}. ${line[i]}`)
    }
    return `The line is currently:${newArray}`
  } else {
    return "The line is currently empty."
  }
}
