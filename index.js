function takeANumber(people,newPerson) {
  people.push(newPerson)
  
  return `Welcome, ${newPerson}. You are number ${people.length} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
   return `Currently serving ${katzDeliLine.shift()}.`
  } else {
     return "There is nobody waiting to be served!"
    
  }
  
}

function currentLine(katzDeliLine) {
  if(!katzDeliLine.length) {
    return "The line is currently empty."
  }
  
  const nextInLine = []
  for(let i = 0; i < katzDeliLine.length; i++) {
      nextInLine.push(`${i + 1}. ${katzDeliLine[i]}`)
  }
  
  return `The line is currently: ${nextInLine.join(', ')}`
}