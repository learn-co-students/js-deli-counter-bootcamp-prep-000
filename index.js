function currentLine(line){
  if (!line.length) {
    //no one in line
    return "The line is currently empty."
  }  const personAndNumber = []
  //someone in line
  for (let i = 0, l = line.length; i < l; i++) {
    personAndNumber.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${personAndNumber.join(', ')}`
};


function nowServing(line) {
  if (!line.length) {
    //no one in line
    return "There is nobody waiting to be served!"
  }
    //someone in line
  return `Currently serving ${line.shift()}.`
};


function takeANumber(katzDeliLine, newName) {
 //return position in line
 katzDeliLine.push(newName)
 return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
};
