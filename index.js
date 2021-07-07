function takeANumber(deliLine, name) {
  deliLine.push(name);
  
  return `Welcome, ${name}. You are number ${(deliLine.indexOf(name) + 1)} in line.`;
}

function nowServing(katzLine) {
  if (katzLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  
  let currentPerson = katzLine.shift();
  return `Currently serving ${currentPerson}.`;
  
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  
  let comboArray = [];
  for (let i = 0; i < line.length; i++) {
    comboArray.push(`${i + 1}. ${line[i]}`);
  }
  return `The line is currently: ${comboArray.join(', ')}`;
}