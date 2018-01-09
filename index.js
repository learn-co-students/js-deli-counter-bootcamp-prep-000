var katzDeli = [];

takeANumber(katzDeli, "Ada");
takeANumber(katzDeli, "Grace");
takeANumber(katzDeli, "Kent");
currentLine(katzDeli);
nowServing(katzDeli);
takeANumber(katzDeli, "Matz"); 
currentLine(katzDeli); 
nowServing(katzDeli);
currentLine(katzDeli);

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  var currentlyServing = [];
  
  for(var i=0; i<katzDeliLine.length; i++) {
    currentlyServing.push(i+1 + ". "+ katzDeliLine[i]);
  }
  return "The line is currently: " + currentlyServing.join(', ');
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeliLine.shift() + '.';
  }
}

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}