function takeANumber (katzDeliLine, newPerson){
  katzDeliLine.push(newPerson);
  let positionInLine = katzDeliLine.length;

  return `Welcome, ${newPerson}. You are number ${positionInLine} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }

  let firstPerson = katzDeliLine[0];
  katzDeliLine.shift()

  return `Currently serving ${firstPerson}.`
}

function currentLine (katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }

  for (var i = 0 ; i < katzDeliLine.length; i++){
    return `The line is currently: ${}`
  }

}
