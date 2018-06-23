var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length < 1){
    return "There is nobody waiting to be served!"
  }
  else{
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length < 1){
    return "The line is currently empty.";
  }
  var lineString = `The line is currently: 1. ${katzDeliLine[0]}`;
  for(let i = 1; i < katzDeliLine.length; i++){
    lineString += `, ${i+1}. ${katzDeliLine[i]}`;
  }
  return lineString;
}