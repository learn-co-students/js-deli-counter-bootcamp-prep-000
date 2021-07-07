var katzDeliLine = [];

function takeANumber (line, name){
  line.push(name);
  return ("Welcome, " + name + ". You are number " + line.length + " in line.");
}

function nowServing (line,name){
  if (line.length > 0) {
  var i=line.shift(name); 
  return "Currently serving " + i + "."; }
  else {return "There is nobody waiting to be served!";}
}
  
function currentLine (line){
  if (line.length===0)
  {return "The line is currently empty."}
  var katzDeliLine=[];
  for (let i = 0; i < line.length; i++) {
  katzDeliLine.push(i+1 + ". " + line[i]);}
  return "The line is currently: " + katzDeliLine.join(", ");
}



  
