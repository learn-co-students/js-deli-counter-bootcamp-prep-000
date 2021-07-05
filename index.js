var katzDeli = [];
function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing (katzDeliLine) {
  if (katzDeliLine < 1) {
    return `There is nobody waiting to be served!`;
  }
  else (katzDeliLine > 1); {
    return `Currently serving ${katzDeliLine.shift()}.`;
    }
} 

function currentLine (katzDeliLine) {
  if (katzDeliLine < 0.5) {
    return `The line is currently empty.`;
  }
  else (katzDeliLine > 0.5); {
    return `The line is currently: 1. ${katzDeliLine.shift()}, 2. ${katzDeliLine.shift()}, 3. ${katzDeliLine.shift()}`;
    }
  }