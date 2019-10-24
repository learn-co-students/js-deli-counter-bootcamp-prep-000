function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson)
  var answer = `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
  return answer
}

function nowServing(katzDeliLine){
  var answer
  if (katzDeliLine.length === 0) {
    answer =  "There is nobody waiting to be served!"
  } else {
    answer =  `Currently serving ${katzDeliLine[0]}.`
  }
  katzDeliLine.shift()
  return answer
}

function currentLine(katzDeliLine){

  var currentLine = "The line is currently empty."

  if (katzDeliLine.length > 0) {
    currentLine = "The line is currently:"
    for (var i = 0; i < katzDeliLine.length; i++) {
      currentLine = currentLine + ` ${i+1}. ${katzDeliLine[i]},`
    }
    currentLine = currentLine.slice(0, -1);
  }

  return currentLine
}
