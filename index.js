var katzDeli = [];

function takeANumber(katzDeliLine, newPersonName) {
 var positionInLine = katzDeliLine.length + 1;
 katzDeliLine.push(newPersonName);

return "Welcome, "+ newPersonName+". You are number "+positionInLine+" in line."

}

function nowServing(katzDeliLine){
if (katzDeliLine.length > 0) {
  var removeCustomer = katzDeliLine.shift();
  return "Currently serving " +removeCustomer+".";

}else {
return "There is nobody waiting to be served!"
}
}

function currentLine(line) {
  for (var i = 0; i < line.length; i++){
      if (i >= 1) {
    line[i] = " "+ (i+1) +". "+line[i];
}else {
  line[i] = (i+1) +". "+line[i];
}


  }
    if (line.length > 0) {
      return "The line is currently: " + line;
    }else {
      return "The line is currently empty."
    }

    }
