var katzDeli = [];

function takeANumber(katzDeliLine, newName){
  katzDeliLine.push(newName);
  return "Welcome, " + newName + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving " + katzDeliLine.shift() + ".";
}
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  else {
    var curLine = "The line is currently: "
    for (var x = 0; x < katzDeliLine.length; x++){
      if (x === katzDeliLine.length-1){
      curLine = curLine + (x+1) + ". " + katzDeliLine[x];

    }
      else {
        curLine = curLine + (x+1) + ". " + katzDeliLine[x] + ", ";
      }
  }
  return curLine;
}
}   
