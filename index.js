

function takeANumber(katzDeliLine, Name){
  katzDeliLine.push(Name);
  return `Welcome, ${Name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0) {
    return ("There is nobody waiting to be served!");
  }
  else {
  return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine){
  var numLine = [];
  
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else{
    for (var i = 0; i < katzDeliLine.length; i++)
    numLine.push(`${i + 1}. ${katzDeliLine[i]}`);
    return `The line is currently: ${numLine.join(", ")}`
}
}