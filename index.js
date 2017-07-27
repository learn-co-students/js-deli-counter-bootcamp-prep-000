function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${line.shift()}.`
}

function currentLine(line){
  if(!line.length){
    return "The line is currently empty."
  }
  var temp = []
  for(let i=0; i < line.length; i++){
    temp.push(`${i+1}. ${line[i]}`)
  }
  return `The line is currently: ${temp.join(', ')}`

}
