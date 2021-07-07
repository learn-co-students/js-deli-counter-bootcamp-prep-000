var katzDeli = [];
var KatzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`
}

function nowServing(katzDeliLine) {

  var person = katzDeliLine[0];
    if(katzDeliLine.length > 0) {
    katzDeliLine.shift();
    return `Currently serving ${person}.`;
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(line) {
  var arr = [];
  if(line.length > 0) {
  for(var i = 0; i < line.length; i++){
    arr.push(`${' '}${i+1}. ${line[i]}`);
  } return `The line is currently:${arr}`;
} return 'The line is currently empty.'
}
