function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line.";
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    var goku = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + goku + ".";
  }
  else{
    return "There is nobody waiting to be served!";
  }
}

function  currentLine(line) {
  if(line.length > 0){
    var stringComp = "The line is currently:";
    for(var i =0; i < line.length; i++){
      stringComp = stringComp + " " + (i + 1) + ". " + line[i];
      if((i+1) != line.length){
        stringComp = stringComp + ",";
      }
    }
    return stringComp
  }
  else{
    return "The line is currently empty."
  }
}