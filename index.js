function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${(line.length).toString()} in line.`;
}

function nowServing(line) {
// Step 1: if line length does not exist, return there is nobody in line
  if (!line.length) {
    return "There is nobody waiting to be served!";
  }
  
//If a line exists, store the first person, remove them from line, then output the first person as being served
  else {
    var person = line[0];
    line.shift();
    return `Currently serving ${person}.`;
  }
}

function currentLine(line) {
//Step 1: if a line length does not exist, return the line is empty
  if (!line.length) {
    return "The line is currently empty.";
  }
  
//Step 2: If a line does exist, output the list through a variable
  else {
    var currentLine = `The line is currently: 1. ${line[0]},`;
    for (let i = 1; i < line.length; i++) {
        currentLine += ` ${(i+1).toString()}. ${line[i]},`;
    }
    return currentLine.slice(0, currentLine.length-1);
  }
}