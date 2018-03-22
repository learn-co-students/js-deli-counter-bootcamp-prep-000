function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0)
  {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
  else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0)
  {
    var msg = "The line is currently:";
    for(var i = 0; i < katzDeliLine.length; i++){
      if (i !== katzDeliLine.length - 1){ //not last element
        msg += ` ${i + 1}. ${katzDeliLine[i]},`;
      }
      else{
        msg += ` ${i + 1}. ${katzDeliLine[i]}`;
      }
    }
    return msg;
  }
  else{
    return "The line is currently empty.";
  }
}