function takeANumber (line, name) {
 line.push(name);
 var lineNumber = line.indexOf(name) + 1;
 
 return `Welcome, ${name}. You are number ${lineNumber} in line.`;
}

function nowServing (line) {
  var lineNumber2 = line[0];
  line.shift([0]);
  
  if (line[0] !== undefined) {
    return `Currently serving ${lineNumber2}.`;
  }
  
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine (line) {
  var numberArray = [];
  
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      numberArray.push(` ${i + 1}. ${line[i]}`);
    }
    return `The line is currently:${numberArray}`;
  }
  
  else {
    return "The line is currently empty.";
  }
}