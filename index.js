function takeANumber(line, customer){
  line.push(customer);
  return "Welcome, "+customer+". You are number "+line.length+" in line.";
}
function nowServing(line){
  if (line.length>0){
    var serving = line.shift();
    return "Currently serving "+serving+".";
  }
  else{
    return "There is nobody waiting to be served!";
  }
}
function currentLine(line){
  var message = "The line is currently: ";
  for (let i=0; i<line.length; i++){
    message += (i+1)+". "+line[i]+", ";
  }
  message = message.slice(0,-2)//gets rid of extra ", " or ": " if line is empty
  if (line.length === 0){
    message += " empty."
  }
  return message;
}
