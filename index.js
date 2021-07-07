function takeANumber(deliLine, name)  {
  deliLine.push(name)
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`
}

function nowServing(deliLine) {
  return deliLine.length > 0 ? `Currently serving ${deliLine.shift()}.` : "There is nobody waiting to be served!"
}

function currentLine(deliLine)  {
  if (deliLine.length > 0)  {
    let deliLineString = 'The line is currently: ';
    for (let i = 0; i < deliLine.length - 1; i++) {
      deliLineString += `${i+1}. ${deliLine[i]}, `;
    }
    deliLineString += `${deliLine.length}. ${deliLine[deliLine.length - 1]}`;
    return deliLineString;


  } else {
    return "The line is currently empty.";
  }
}
