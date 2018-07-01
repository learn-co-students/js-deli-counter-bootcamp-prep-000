function takeANumber(deliLine, name) {
  deliLine.push(name); //adds person to line-array will have //existing names plus new name
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`;
}

function nowServing(deliLine) {
  if (deliLine[0] === undefined) {
    return "There is nobody waiting to be served!";
  }
  else {return `Currently serving ${deliLine.shift()}.`}
}