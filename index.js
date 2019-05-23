var katzDeli = [];

function takeANumber(katzDeliLine, customerName){
  katzDeliLine.push(customerName);
  return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  var customerName = katzDeliLine[0];
  if (katzDeliLine.length===0){
    return "There is nobody waiting to be served!";
  }
  katzDeliLine.shift();
  return `Currently serving ${customerName}.`;
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length===0){
    return "The line is currently empty.";
  }
  var lineStr = `1. ${katzDeliLine[0]}`;
  for(var i = 1; i < katzDeliLine.length; i++){
    lineStr = lineStr + ", " + (i + 1) + ". " + katzDeliLine[i];
  }
  return `The line is currently: ${lineStr}`;
}