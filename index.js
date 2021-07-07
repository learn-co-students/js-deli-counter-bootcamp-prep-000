var katzDeli = []
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine, name) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var name = katzDeliLine.shift(0)
    return `Currently serving ${name}.`
  }
}
function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.'
  } else {
    var place = []
    for (var i = 0; i < line.length; i++) {
       place.push(`${i + 1}. ${line[i]}`)
    }
    return `The line is currently: ${place.join(', ')}`

  }


}
