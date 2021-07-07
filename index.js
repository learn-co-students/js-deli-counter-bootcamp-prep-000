function takeANumber(katzDeliLine,newPerson){
  // return person's position in line
  katzDeliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine[0]===undefined){
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine){
  var longLine = [];
  if (katzDeliLine[0]===undefined){
    return 'The line is currently empty.'
  } else {
    for (let i=0; i<katzDeliLine.length; i++){
      longLine.push(`${i+1}. ${katzDeliLine[i]}`)
    }
    return `The line is currently: ${longLine.join(', ')}`
  }
}
    // return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`
