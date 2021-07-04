var katzDeliLine = []

function takeANumber(katzDeliLine, person){
  katzDeliLine.push(person);
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
if (!katzDeliLine.length){
return `There is nobody waiting to be served!`
}
return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(line){
  if (!line.length){
    return 'The line is currently empty.'
  }
  for (var i = 0; i < line.length; i++){
    katzDeliLine.push (`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${katzDeliLine.join(', ')}`
}
