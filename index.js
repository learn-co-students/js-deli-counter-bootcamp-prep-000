function takeANumber(katzDeliLine, newPersonName ) {
 katzDeliLine.push(newPersonName);
  return "Welcome, " + newPersonName + ". You are number " + katzDeliLine.length + " in line.";
}

takeANumber(katzDeliLine, "Ada");
takeANumber(katzDeliLine, "Grace");
takeANumber(katzDeliLine, "Kent");
currentLine(katzDeliLine);
nowServing(katzDeliLine);
currentLine(katzDeliLine);
takeANumber(katzDeliLine, "Matz"); 
currentLine(katzDeliLine);
nowServing(katzDeliLine);
currentLine(katzDeliLine);

function nowServing(katzDeliLine) {
  if(!katzDeliLine.length){
    
  return "There is nobody waiting to be served!" ;

  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
  
}

function currentLine(katzDeliLine) {
  if(!katzDeliLine.legth) {
  return "The line is currently empty.";
  }
  let katz = [];
  for(var i = 0; i < katzDeliLine.length; i++) {
    katz.push(i+1 + ". " + katzDeliLine[i]);
  }   
  return "The line is currently " + katz;
}