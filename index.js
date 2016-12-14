var katzDeli = [];

function takeANumber(katzDeliLine, name) {
   let num = katzDeliLine.push(name);
   return `Welcome, ${name}. You are number ${num} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  let name = katzDeliLine.shift();
  return `Currently serving ${name}.`;
}

function currentLine(katzDeliLine){
  var line = 'The line is currently:'
  // always declare var OUTSIDE of the loop
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    for (let i = 0; i < katzDeliLine.length; i++)
    line += ` ${i+1}. ${katzDeliLine[i]},`
  }
  return line.slice(0,-1)
}
