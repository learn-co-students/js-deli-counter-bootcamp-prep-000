function takeANumber(currLine, personName){
  currLine.push(personName);
  return `Welcome, ${personName}. You are number ${currLine.length} in line.`;
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length == 0)
    return "There is nobody waiting to be served!"
  else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0)
    return "The line is currently empty."
  var str = "The line is currently:";
  for (let i=0; i<katzDeliLine.length; i++){
    str += ` ${i+1}. ${katzDeliLine[i]}`
    if (!(i === katzDeliLine.length -1))
      str += ","
  }
  return str;
}
