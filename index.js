var papGenos = [];

function takeANumber (line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing (line) {
  var currentPatron;
  if (line.length < 1) {
    
    currentPatron = "There is nobody waiting to be served!"
  } else {
    currentPatron = `Currently serving ${line.shift()}.`
  }
  
  return currentPatron
}

function currentLine (line) {
  var lineString = 'The line is currently: ';
  var nameString;
  if (line.length < 1) {
    lineString = "The line is currently empty."
  } else {
    for (var i = 0; i < line.length; i++) {
      if (i === 0) {
        nameString = `${i+1}. ${line[i]}`;
      } else {
        nameString = nameString + `, ${i+1}. ${line[i]}`
      }
    } 
    
    lineString += nameString;
  }
  
  return lineString
  
}