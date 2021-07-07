function takeANumber(currentLine, name) {
  var position = currentLine.length + 1;
  currentLine.push(name);
  return "Welcome, " + name + ". You are number " + position + " in line.";
}

function nowServing(currentLine) {
  if (currentLine.length === 0) {
    return "There is nobody waiting to be served!"
  } 
  var name = currentLine.shift()
  return "Currently serving " + name + "."
}

function currentLine(currentLine) {
  if (currentLine.length === 0) {
  return "The line is currently empty."
  }
  var string = `The line is currently: 1. ${currentLine[0]}`
  
  for (let i = 1; i < currentLine.length; i++) {
    string += `, ${i+1}. ${currentLine[i]}`;
  }
  return string;
}