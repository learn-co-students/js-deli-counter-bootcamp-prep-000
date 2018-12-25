function takeANumber (currentLine, newPerson) {
  currentLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`;
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length<1)
    return `There is nobody waiting to be served!`;
   else {
   return `Currently serving ${katzDeliLine.shift()}.`}
}

function currentLine (katzDeliLine){
  if (katzDeliLine.length===0)
  return `The line is currently empty.`;
  else
  return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`;
}