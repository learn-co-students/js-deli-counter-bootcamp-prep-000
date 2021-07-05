var KatzDeliLine = []
function takeANumber(KatzDeliLine,name) {
  KatzDeliLine.push(name)
  return "Welcome, " + name +". You are number " + KatzDeliLine.length +" in line."
}
function nowServing(KatzDeliLine) {
  if (KatzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
   return "Currently serving " + KatzDeliLine.shift() + "."
  }
}

function currentLine(KatzDeliLine) {
  if (KatzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var x = "The line is currently: "
    for(var i = 0; i < KatzDeliLine.length; i++) {
      x += (i+1) + ". " + KatzDeliLine[i] 
      if(i !== KatzDeliLine.length-1) { 
        x += ", "
      }
    }
    return x
  }
}
  
   
    
      
   
     
     
    
    