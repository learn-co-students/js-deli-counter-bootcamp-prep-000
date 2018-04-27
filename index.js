var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". " + "You are number " + katzDeliLine.length + " in line." 
}

function nowServing(katzDeliLine, name){
  if(katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.` //remove last person inline
  }
  else {
    return `There is nobody waiting to be served!`
  }
}
var arr = [];
function currentLine(katzDeliLine){
  if(katzDeliLine.length > 0){
    for(var i = 0; i < katzDeliLine.length; i++){
      arr.push(` ${i + 1}. ${katzDeliLine[i]}`)
    }
   return `The line is currently:${arr}`
  }
  else{
    return "The line is currently empty."
  }
}