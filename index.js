var katzDeli = ['Blake', "Shawna", "Steven", 'Justine']

function takeANumber(katzDeliLine, name) {
  
 katzDeliLine.push(name)
 var msg = "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
 return msg
  
}

function nowServing (katzDeliLine) {
  
  var msg
  var newLine = katzDeliLine
  
  if (newLine.length === 0){
    
    msg = "There is nobody waiting to be served!"
    return msg
    
  } else {
    
    msg = "Currently serving " + newLine[0] + '.'
    katzDeliLine.shift()
    return msg
    
    
  }
  
}

function currentLine(line) {
  
  var msg = "The line is currently: "
  if (line.length === 0) {
    
    return "The line is currently empty."
    
  } else {
    
    
    for (let i = 0; i < line.length; i++ ){
      
      if (i === line.length -1) {
        msg = msg + `${i + 1}. ${line[i] }`
      } else {
        msg = msg + `${i + 1}. ${line[i] }, `
      }
    }
    return msg
     
  }
  
}

console.log( currentLine(katzDeli) ) 
