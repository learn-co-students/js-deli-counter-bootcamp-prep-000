function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  const linePosition = []
  linePosition.push (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
  return linePosition.slice(-1)
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    katzDeliLine[0] = `Currently serving ${katzDeliLine[0]}.`
    return katzDeliLine.shift()
  }
}
function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var lineList = []
    for (let i = 0; i < line.length; i++) {
      if (i === 0) {
        lineList.push (`${i+1}. ${line[i]}`)
      } else {
        lineList.push (` ${i+1}. ${line[i]}`)
      }
    }
    return `The line is currently: ${lineList}`
  }
}
