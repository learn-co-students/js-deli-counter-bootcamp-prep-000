
var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine, name) {
  if(katzDeliLine.length > 0) {
    name = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${name}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var line = [];
  let i = 0;
  while(i < katzDeliLine.length) {
    line.push(` ${i + 1}. ${katzDeliLine[i]}`)
    i++;
  }
  if(katzDeliLine.length > 0){
      return `The line is currently:${line}`;
    } else {
      return "The line is currently empty.";
    }
  }