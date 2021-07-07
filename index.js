let katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  let arr = [...katzDeliLine];
  return `Welcome, ${name}. You are number ${arr.length} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if(line.length < 1) {
    return "The line is currently empty."
  } 
  var nameNum = [];
  for (var i = 0; i < line.length; i++) {
    nameNum.push(`${i + 1}. ${line[i]}`);
  }
    return `The line is currently: ${nameNum.join(', ')}`
}