function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return(`Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0){
    return(`There is nobody waiting to be served!`)
  }

  return(`Currently serving ${katzDeliLine.shift()}.`)


}

function currentLine(katzDeliLine) {

  if (katzDeliLine.length == 0){
    return(`The line is currently empty.`)
  }

  var line = `The line is currently:`;

  for (var i = 0; i < katzDeliLine.length; i++){
      line += ` ${i + 1}. ${katzDeliLine[i]}`

      if (i < katzDeliLine.length - 1){
        line += `,`
      }
    }

  return line;
}
