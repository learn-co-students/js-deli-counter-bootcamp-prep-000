function takeANumber(current, newPerson) {
  var linePosition = current.length + 1
  current.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${linePosition} in line.`
}
function nowServing(katzDeliLine) {
  var calledPerson
  if(katzDeliLine.length === 0){
  return "There is nobody waiting to be served!"
  }
  calledPerson = katzDeliLine.shift()
  return "Currently serving "+ calledPerson + "."
}
function currentLine(katzDeliLine){
  var str = `The line is currently: `;
  var newLine = [];
  if (katzDeliLine.length === 0) return "The line is currently empty.";
  else{
    for (let i = 0; i < katzDeliLine.length; i++){
        newLine[i] = `${[i+1]}. ${katzDeliLine[i]}`;
      }
    str += newLine.join(', ')
    return str;
  }
}