

function takeANumber(currentLine, name){
  currentLine.push(name);
 return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
  return "Currently serving " + katzDeliLine.shift() + ".";
  } else {
  return 'There is nobody waiting to be served!'
  }
}

function currentLine(line){
  if (line.length > 0){
  return "The line is currently: 1. " + line.shift() + ", 2. " + line.shift() + ", 3. " + line.shift();
  } else {
    return "The line is currently empty."
  }
}