var katzDeli = [ ]

function takeANumber(deliLine, name) {
  deliLine.push(name)
  var welcome = "Welcome, " + name + ". You are number " + 
  deliLine.length + " in line."
  
  return welcome
}

function nowServing(deliLine) {
  
  if(deliLine.length > 0) {
  
   return "Currently serving " +  deliLine.shift() + "."

  } else {
    
        return "There is nobody waiting to be served!"
        
  }
}

function currentLine(deliLine) {
  
  var lineMessage
  
  if(deliLine.length > 0) {
    for(var i = 0; i < deliLine.length; i++) {
       deliLine[i] = [i + 1] + ". " + deliLine[i]
       deliLine.push(" ")
       lineMessage = "The line is currently: " + deliLine
    } 
  }else{
    return "The line is currently empty."
  }
  return lineMessage
}

