function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  
  var newLine = [...katzDeliLine,name]
  
  var lineLength = newLine.length-1
  
  var welcome = "Welcome, " + name +". You are number " + lineLength + " in line."
  
  return welcome
  return newLine
}


function nowServing(katzDeliLine){

  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
    var guest = katzDeliLine[0];
        katzDeliLine.shift();
    return "Currently serving " + guest + ".";
  }
}


function currentLine(katzDeliLine){
  
  var newLine = [];

  for (var i = 0; i < katzDeliLine.length; i++){
    newLine[i] = " " + (i+1) + ". " + katzDeliLine[i];
  }
  
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  else{
    return "The line is currently:" + newLine
  }
}