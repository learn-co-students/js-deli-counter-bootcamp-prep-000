function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
  
}

function nowServing(katzDeliLine) {
  if (katzDeliLine[0]) 
  {
    let first = katzDeliLine.splice(0,1);
    return `Currently serving ${first}.`; 
  }
  else 
  {
    return "There is nobody waiting to be served!";
  }
}


function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.';
  }
  else {
    return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`;
  }
}