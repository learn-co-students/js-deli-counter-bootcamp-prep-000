function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}
  
function nowServing(line) {
  return line.length === 0 ? "There is nobody waiting to be served!" : `Currently serving ${line.shift()}.`;
}

function currentLine (katzDeliLine){
  if (katzDeliLine.length===0)
  return `The line is currently empty.`;
  else
  return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`;
} 

