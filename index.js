var katzDeli = [];

function takeANumber(katzDeliLine, name){
  var orderInLine = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + orderInLine + " in line.";
}

function nowServing(firstInLine){
  var name = [];
  if (firstInLine.length == 0){
    return "There is nobody waiting to be served!";
  }
  name = firstInLine.shift()
  return "Currently serving " + name + ".";
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length == 0){
    return "The line is currently empty.";
  } else {
    var lineList = "The line is currently: 1. " + katzDeliLine[0];
    for (let i = 1; i < katzDeliLine.length; i++){
      lineList += ", " + [i + 1] + ". " + katzDeliLine[i];
    }
  }
  return lineList
}
