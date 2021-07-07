function takeANumber(katzDeliLine, name){

  katzDeliLine.push(name)

  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`

}

function nowServing(katzDeliLine){
  if (!katzDeliLine.length) {
    return `There is nobody waiting to be served!`
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(line) {
  if (!line.length) {
    return `The line is currently empty.`
  }

  var numAndName = []
  for (var i = 0, l = line.length; i < l; i++) {
    numAndName.push(`${i+1}. ${line[i]}`)

  }
  return `The line is currently: ${numAndName.join(', ')}`
}
