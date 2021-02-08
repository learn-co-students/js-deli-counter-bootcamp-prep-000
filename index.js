function takeANumber (katzDeliLine, name) {
  for (let i=0; i <= katzDeliLine.length; i++){
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;
}
}

function nowServing (katzDeliLine) {
 var firstPersonInLine = katzDeliLine.shift();
 if (firstPersonInLine === undefined) {
   return "There is nobody waiting to be served!";
 }
 return `Currently serving ${firstPersonInLine}.`;
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
}