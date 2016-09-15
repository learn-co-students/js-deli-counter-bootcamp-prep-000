function takeANumber (katzDeliLine, name) {
  katzDeliLine.push (name)
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}



function nowServing (katzDeliLine) {
  if (katzDeliLine.length >= 1) {
    return (`Currently serving ${katzDeliLine.shift()}.`)
 }
  else return "There is nobody waiting to be served!"

}

function currentLine (line) {
  const numLine = []

  let n = 0
  while (n < line.length) {
    numLine.push(`${n+1}. ${line[n]}`)
    n++
  }
  if (line.length >= 1) {
    return `The line is currently: ${numLine.join(', ')}`
 }
  else return "The line is currently empty."

}
