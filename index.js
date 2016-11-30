
var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  } else {
    const lineInfo = []

      for (let n = 0, l = line.length; n < l; n++) {
        lineInfo.push(`${n+1}. ${line[n]}`)
    }
    return `The line is currently: ${lineInfo.join(', ')}`
  }

}
