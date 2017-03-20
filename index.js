var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  var first = katzDeliLine.shift();
  return (first == undefined) ? "There is nobody waiting to be served!" : `Currently serving ${first}.`;
}

function currentLine(katzDeliLine){
  var line = "The line is currently:";
  for(let i = 0; i < katzDeliLine.length; i++){
    if(i < katzDeliLine.length-1)line += ` ${i+1}. ${katzDeliLine[i]},`;
    else line += ` ${i+1}. ${katzDeliLine[i]}`;
  }
  return katzDeliLine.length != 0 ? line : "The line is currently empty.";
}