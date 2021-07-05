function takeANumber(currentLine, newPerson) {
   currentLine.push(newPerson)
   var number = currentLine.length
   return (`Welcome, ${newPerson}. You are number ${number} in line.`)
}

function nowServing(currentLine) {
  if (currentLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var currentPerson = currentLine.shift();
    return `Currently serving ${currentPerson}.`
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var answer = `The line is currently: `
    var counter = 0
    while(counter < line.length) {
      counter++;
      answer += `${counter}. ${line[counter - 1]}`
      if (counter !== line.length) {
        answer +=", "
      }
    }
    return answer
  }
}