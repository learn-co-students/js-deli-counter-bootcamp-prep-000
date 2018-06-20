
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine) {
  let l = katzDeliLine.length
  if (l < 1) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}
function currentLine(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "The line is currently empty."
  } else {
    const numberedNames = []
    for (let i = 0, l = katzDeliLine.length; i < l; i++) {
      numberedNames.push(`${i + 1}. ${katzDeliLine[i]}`)}
      return `The line is currently: ${numberedNames.join(', ')}`
  }
}