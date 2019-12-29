
function takeANumber(deliLine, customerName) {
  deliLine.push(customerName);
  return `Welcome, ${customerName}. You are number ${deliLine.length} in line.`;
}

function nowServing(katzDeli) {
  if(katzDeli.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${katzDeli.shift()}.`
  }
}

function currentLine(katzDeli) {

  if(katzDeli.length === 0) 
    return 'The line is currently empty.';

  let line = "";
  for (let i = 0; i < katzDeli.length; i++) {
    line += i + 1 + ". " + katzDeli[i] + ", ";
  }
  
    line = line.substring(0, line.length - 2);
  
  return `The line is currently: ${line}`;
}
