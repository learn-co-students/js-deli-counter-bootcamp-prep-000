function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine){
  var customer = '';
  
  if(katzDeliLine.length > 0){
    customer = katzDeliLine.shift();  
    return "Currently serving " + customer + ".";
  }
  
  return "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine){
  var line = 'The line is currently: ';
  
  if(katzDeliLine.length !== 0){
    for(var x = 0; x < katzDeliLine.length; x++){
      line += x+1 + ". " + katzDeliLine[x];
      
      x !== katzDeliLine.length-1 ? line += ", " : line += "";
    }
    return line;
  }
  return "The line is currently empty."
}