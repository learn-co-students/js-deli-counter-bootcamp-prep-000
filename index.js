var katzDeli = [];

function takeANumber (deliLine, newName) {
  
  deliLine.push(newName);
  return `Welcome, ${newName}. You are number ${deliLine.indexOf(newName) + 1} in line.`;
}

function nowServing (deliLine) {
  let firstPerson = deliLine[0];
  deliLine.shift();
  return (deliLine.length > 0) ? `Currently serving ${firstPerson}.` : "There is nobody waiting to be served!";
}


function currentLine (deliLine) {
  var readOut = `1. ${deliLine[0]}`;
  
  var i;
  for ( i = 1; i < deliLine.length; i++ ) {
    readOut += `, ${i+1}. ${deliLine[i]}`;
  }
  
  return (deliLine.length > 0) ? `The line is currently: ${readOut}` : "The line is currently empty.";
}

