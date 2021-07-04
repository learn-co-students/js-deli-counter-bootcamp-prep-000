function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  }  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length > 0) {
    let txt = ""
    let i
    for (i = 0; i < line.length; i++) {
      txt += i + 1 + ". " + line[i] + "," + " "
    } return "The line is currently: " + txt.substring(0, txt.length -2)
  } else {
    return "The line is currently empty."
  }
}
