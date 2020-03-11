var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
      return `There is nobody waiting to be served!`;
  }
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + ".";
  } else {
      return `There is nobody waiting to be served!`;
  }
}

var deliline = [];
function currentLine(katzDeliLine) {
  let i = 0;
  while (i < katzDeliLine.length) {
    deliline.push(""+[i + 1]+"."  + katzDeliLine[i])
    i++;
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
      return `The line is currently: ${deliline}`;
    
  }
}