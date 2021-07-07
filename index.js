function takeANumber(katzDeli, customer) {
  katzDeli.push(customer);
  return `Welcome, ${customer}. You are number ${katzDeli.length} in line.`;
}

function nowServing(deliLine) {
  if (deliLine.length !== 0) {
    return `Currently serving ${deliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  } 
}

function currentLine(line) {
  var numberInLine = [];
  for (let i = 1; i <= line.length; i++) {
    numberInLine.push(` ${i}. ${line[i-1]}`);
  }
  
  if (line.length !== 0) {
    return `The line is currently:${numberInLine}`;
  } else {
    return `The line is currently empty.`;
  }
}