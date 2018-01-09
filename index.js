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

function currentLine(line){
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  var lineNamesandNumbers = [];
  
  for(var i=0; i<line.length; i++) {
    lineNamesandNumbers.push(i+1 + ". "+ line[i]);
  }
  return "The line is currently: " + lineNamesandNumbers.join(', ');
}

function nowServing(line) {
  if(line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + line.shift() + '.';
  }
}

function takeANumber(katzDeliLine, name){
  line.push(name);
  
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

