var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
katzDeliLine.push(name);
return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
  
}

function nowServing (katzDeliLine){
  if (katzDeliLine.length > 0){
    
    return `Currently serving ${katzDeliLine.shift()}.`
    
  }
  else return "There is nobody waiting to be served!"
}
var line = []
function currentLine (array){
  for (var i = 0;i < array.length; i++){
    line.push( ` ${i+1}. ${array[i]}`)
  }
  if (array.length > 0){
    return "The line is currently:" +line
  }
  else return "The line is currently empty."
}






