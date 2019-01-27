katzDeliLine = []

function takeANumber(katzDeliLine, name) {
   katzDeliLine.push(name)
   return ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line." )
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
  return("Currently serving " + katzDeliLine.shift() + ".")
} else {
  return ("There is nobody waiting to be served!")
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var x = "The line is currently: " 
     for (let i = 0; i < katzDeliLine.length ; i++) {
       if (i===katzDeliLine.length-1) {
          x+= `${i+1}. ${katzDeliLine[i]}` 
       }
       else {
       x+= `${i+1}. ${katzDeliLine[i]}, ` 
       }
     } 
     return x 
} else {
  return("The line is currently empty.")
  }
}