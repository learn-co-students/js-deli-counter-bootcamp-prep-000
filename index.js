var katzDeliLine = [];

function takeANumber (katzDeliLine, name){
  katzDeliLine.push(name);
  var i = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing (katzDeliLine){
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`;
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine){
  var currentLine = [];
  for (var i = 0; i < katzDeliLine.length; i++){
    currentLine.push(" " + (i + 1) + ". " + katzDeliLine[i]);
  }
  if (katzDeliLine.length === 0){
    return `The line is currently empty.`;
  } else {
     return `The line is currently:${currentLine}`;
  }
}
