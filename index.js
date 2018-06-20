function takeANumber(line, name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line."
}

function nowServing(katzDeliLine) {
  var oneServing = katzDeliLine[0];
  katzDeliLine.shift();
  if(katzDeliLine.length === 0) 
  return ('There is nobody waiting to be served!')
  else 
  return "Currently serving " + oneServing + "."
}

 function currentLine(katzDeliLine){
  var i = 0
  var katzNewDeliLine = []
  
  while(i<katzDeliLine.length){
    katzNewDeliLine.push( i+1+". " + katzDeliLine[i]);
    i++;
}
  if(katzDeliLine.length === 0)
  return "The line is currently empty."
  else
  return "The line is currently: " + katzNewDeliLine.join(", ") 
}