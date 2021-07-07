
var katzDeli = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push (name)
   return "Welcome, " + katzDeliLine[katzDeliLine.length-1] + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeli){
  if (katzDeli.length == 0){
    return "There is nobody waiting to be served!"
  } else return "Currently serving " + katzDeli.shift() + "."
}

function currentLine(line){
  
 for (let i = 0; i < line.length; i++){
   var sub = " " + parseInt(i+1) + ". " + line[i] 
    line.splice(i, 1 , sub)
  }
  if (line.length == 0) {
    return "The line is currently empty."
  } else return "The line is currently:" +  line
}
