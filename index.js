function takeANumber(katzDeliLine, name){
  var positionInLine = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + positionInLine + " in line.";
}
function nowServing(line){
  if(line.length < 1){
  return "There is nobody waiting to be served!";
  }
  var next = line.shift();
  return "Currently serving " + next +".";
}
function currentLine(katzDeliLine){
  if(katzDeliLine.length < 1){
    return "The line is currently empty.";
  }
  var result = `The line is currently: 1. ${katzDeliLine[0]}`;
  for(let i = 1; i < katzDeliLine.length; i++){
    result += `, ${i+1}. ${katzDeliLine[i]}`;
  }
  return result;
}