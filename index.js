
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var next = katzDeliLine.shift()
    return `Currently serving ${next}.`
  }
}

function currentLine(katzDeliLine) {
  var string = "The line is currently:"
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      string += ` ${i+1}. ${katzDeliLine[i]},`
    }
  }
  return string.slice(0, string.length - 1)
}
