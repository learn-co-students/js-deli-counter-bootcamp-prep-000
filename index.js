function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"}
}

function currentLine(katzDeliLine) {
  let lineArray = []
  if (katzDeliLine.length > 0) {
    for (let n = 0; n < katzDeliLine.length; n += 1) {
      lineArray.push(`${n + 1}. ${katzDeliLine[n]}`)
    }
    return `The line is currently: ${lineArray.join(`, `)}`
  } else {
    return "The line is currently empty."
  }
}
