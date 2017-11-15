function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson);
  return "Welcome, " + newPerson + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
    var toReturn = "Currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.shift();
    return toReturn;
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently " +  "empty.";
  }
  else{
    var list = "";
    for (let i=0; i<katzDeliLine.length; i++){
      if (i === katzDeliLine.length-1){
        list = list + (i+1) + ". " + katzDeliLine[i];
      }
      else{
        list = list + (i+1) + ". " + katzDeliLine[i] + ", ";
      }
    }
    return "The line is currently: " + list;
  }
}
