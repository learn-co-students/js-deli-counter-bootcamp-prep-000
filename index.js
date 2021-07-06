function takeANumber(deliLine, newName) {
  deliLine.push(newName);
  return `Welcome, ${newName}. You are number ${deliLine.length} in line.`; 
}

function nowServing(deliLine) {
  if (deliLine.length < 1) {
    return "There is nobody waiting to be served!"; 
  }
  else {
    let currentlyServing = `Currently serving ${deliLine[0]}.`; 
    deliLine.shift();
    return currentlyServing; 
  }
}

function currentLine(deliLine) {
  if (deliLine.length < 1) {
    return "The line is currently empty."; 
  }
  else {
    let lineStatus = "The line is currently: ";
    for(let i = 0; i < deliLine.length; i++) {
      if (i > 0) {
        lineStatus += ", ";
      }
      lineStatus += `${i + 1}. ${deliLine[i]}`;
    }
    return lineStatus; 
  }
}