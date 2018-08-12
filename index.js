function takeANumber(currentLine, newPerson) {
  currentLine.push(newPerson)
  
  return (`Welcome, ${newPerson}. You are number ${currentLine.length} in line.`)
}

function nowServing(katzDeliLine){
  
  if (katzDeliLine.length === 0){
    return (`There is nobody waiting to be served!`)
  } 
  
  else {
    var currentlyServing = katzDeliLine.shift(0)
    return (`Currently serving ${currentlyServing}.`)
  }
  
}


function currentLine(katzDeliLine){
  
  if (katzDeliLine.length === 0){
    return (`The line is currently empty.`)
  } 
  
  else {
    let string = "The line is currently:"
    for(var i = 0; i < katzDeliLine.length; i++){
      if (i === katzDeliLine.length - 1){
        string += ` ${i+1}. ${katzDeliLine[i]}`
      }
      else {
      string += ` ${i+1}. ${katzDeliLine[i]},`
    }
    }
    return string
  }
}