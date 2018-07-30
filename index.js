var katzDeli = [];
function takeANumber (katzDeliLine, personname) {
  katzDeliLine.push(personname);
  return `Welcome, ${personname}. You are number ${katzDeliLine.length} in line.`;
}
function nowServing (katzDeliLine) {
  var removedname;
  if (katzDeliLine.length===0) {
    return "There is nobody waiting to be served!"
  }
   else {
     removedname = katzDeliLine[0];
     katzDeliLine.shift();
     return `Currently serving ${removedname}.`;
}
}
function currentLine(line) { 
  if (!line.length) 
  { return "The line is currently empty." } 
  const numbersAndNames = [];
  for (let i = 0, l = line.length; i < l; i++) 
  { numbersAndNames.push(`${i + 1}. ${line[i]}`) } 
  return `The line is currently: ${numbersAndNames.join(', ')}`
  }