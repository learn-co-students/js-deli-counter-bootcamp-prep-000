function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine,name) {
 if(katzDeliLine.length===0) {
 return "There is nobody waiting to be served!"
 }
 name= katzDeliLine.shift()
 return "Currently serving "+ name + "."
}

function currentLine(katzDeliLine,name) {
  if(katzDeliLine.length===0) {
   return "The line is currently empty."
  }
  var string =`The line is currently: 1. ${katzDeliLine[0]}`
  
   for(let i = 1; i < katzDeliLine.length; i++) {
   string +=`, ${i+1}. ${katzDeliLine[i]}`
   }
 return string;
}
