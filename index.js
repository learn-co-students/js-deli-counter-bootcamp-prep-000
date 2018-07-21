var katzDeli = [];
var deliLine = [];
function takeANumber(katzDeli, newCustName) {
  katzDeli.push(`${newCustName}`);
  return `Welcome, ${newCustName}. You are number ${katzDeli.length} in line.`;
}
function nowServing(deliLine) {
  let i = 0;
  while (i < deliLine.length) {
    i++;
  }
  if (i == 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${deliLine.shift()}.`;
    }
}

let line = [];
let newLine = [];
let i = 0;
function currentLine(line) {
  if (line.length > 0) {
    for (; i < line.length; i++) {
      newLine.push(`${i + 1}. ${line[i]}`);
    }
    return `The line is currently: ${newLine.join(', ')}`;
  }else {
      return "The line is currently empty.";
  }
}
