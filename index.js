function takeANumber(katzDeliLine, name){
 katzDeliLine.push(name)
   return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}
function nowServing(katzDeliLine){
if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"

  }
  return "Currently serving " + katzDeliLine.shift() + "."
}

function currentLine(line){

  if(line.length === 0){
    return "The line is currently empty."
  }
 return "The line is currently: 1. " + line.shift() + ", 2. " + line.shift(1) + ", 3. " + line.shift(2)
}
