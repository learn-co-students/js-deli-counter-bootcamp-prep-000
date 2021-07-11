function takeANumber(line, name){
  line.push(name);
  var linePosition = line.length ;
  var greeting = "Welcome, "+name+". You are number "+linePosition+" in line.";
  return greeting;
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  return "Currently serving "+katzDeliLine.shift()+".";
}
function currentLine(katzDeliLine){
  if(katzDeliLine.length===0){
    return "The line is currently empty."
  }
  var line = "The line is currently: ";
  for(var i = 1;i <= katzDeliLine.length; i++){
    line = line+i+". "+katzDeliLine[i-1];
    if(i !== katzDeliLine.length){
      line+=", "
    }
  }
  return line;
}
