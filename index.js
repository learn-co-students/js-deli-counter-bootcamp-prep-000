var katzDeli = [];

function takeANumber(katzDeliLine,name){
  var line = katzDeliLine.length+1
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + line + " in line.";
}

function nowServing(katzDeliLine){
  var name;
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
    name = katzDeliLine.shift()
    return "Currently serving " + name + ".";
  }
}

function currentLine (katzDeliLine){
   if(katzDeliLine.length == 0){
     return "The line is currently empty."
   }

   var deline = `The line is currently: 1. ${katzDeliLine[0]}`

   for(let i = 1; i<katzDeliLine.length;i++){
   deline += `, ${i+1}. ${katzDeliLine[i]}`
 }
 return deline
 }
