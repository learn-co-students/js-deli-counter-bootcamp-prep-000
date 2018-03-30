function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  //adding name to the end of the katzDeliLine array
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    //if nobody is in line katzDeliLine.length will equal to 0
  return "There is nobody waiting to be served!";  
  } else {
    //return first person in line then remove that individual from line
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}
function currentLine(katzDeliLine){
  var line = [];
  if (katzDeliLine.length === 0){
  return "The line is currently empty.";
  } else {
    for(var i = 0; i < katzDeliLine.length; i++){
      line.push(" " + (i+1) + ". " + katzDeliLine[i]);
  }
  return "The line is currently:" + line ;
  }
}

 
  //returns the current line
  //ex katzDeliLine ["Ada", "Grace"]
  //would return "The line is currently: 1. Ada, 2. Grace"
  //if nobody in line
  //return "The line is currently empty."