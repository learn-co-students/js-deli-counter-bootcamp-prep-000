function takeANumber (katzDeliLine, name){
  var position = katzDeliLine.length +  1
  
  katzDeliLine.push(name)
return "Welcome, " + name +". You are number "+ position +" in line."

}


function nowServing (katzDeliLine){
  
  var name
  
  if (katzDeliLine.length=== 0){
    return "There is nobody waiting to be served!"
}
    
    name= katzDeliLine.shift()
    
    return "Currently serving "+ name + "."

  }
  
  
  
  
  
  
var Deli = [];

function currentLine(line){
  if(!line.length) {
    return "The line is currently empty.";
  }
  var nLM = [];
  
  for(var i=0; i<line.length; i++) {
    nLM.push(i+1 + ". "+ line[i]);
  }
  console.log("The line is currently: " + nLM)
  return "The line is currently: " + nLM.join(', ');
}
