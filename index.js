var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return ("There is nobody waiting to be served!")
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var lineStatus = "The line is currently:"
    for (let i = 0; i < katzDeliLine.length; i++) {
      lineStatus = `${lineStatus} ${i+1}. ${katzDeliLine[i]},`
    }
    lineStatus = lineStatus.slice(0,-1)
    return lineStatus
  } else {
    return "The line is currently empty."
  }

}
