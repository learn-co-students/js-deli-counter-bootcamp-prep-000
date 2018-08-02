// function to allow a customer to take a number for line position
function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

// function to show who will be served 
function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line) {
  var count = 0;
  var lineString = "The line is currently";
  
  lineString += (line.length === 0 ? " empty." : ": ");

  while (count < line.length) {
    lineString += `${count + 1}. ${line[count]}`;
    if (count++ < line.length - 1) lineString += ", ";
  } 

  return lineString;
}