

function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine) {
  
  if (katzDeliLine.length === 0) {
    
    return "There is nobody waiting to be served!"
    
  } else {
    
    return `Currently serving ${katzDeliLine.shift()}.`
    
  }
}

function currentLine(currentVal) {
  
  let message =""
  
  if (currentVal.length === 0) {
    
    message = "The line is currently empty."
    
  } else {
    
    for (let i = 1 ; i <= currentVal.length ; i++) {
      
      if (i < currentVal.length) {
        
        message = `${message} ${i}. ${currentVal[i-1]},`
      
      } else {
        
        message = `The line is currently:${message} ${i}. ${currentVal[i-1]}`
        
      }
      
    }
    
  }
  
  return message
}