function takeANumber(katzDeli, newPerson) {
  katzDeli[katzDeli.length] = newPerson
  return `Welcome, ${newPerson}. You are number ${katzDeli.length} in line.`
}

function nowServing(deliLine) {
  if (deliLine.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${deliLine.shift()}.`
  }
}

function currentLine(line) {
  var text = "The line is currently:"
  if(line.length == 0) {
    text = "The line is currently empty."
  }
  else {
    for (var i = 0; i < line.length; i++) {
      if (i < line.length-1){
        text += ` ${i+1}. ${line[i]},`
      }
      else {
        text += ` ${i+1}. ${line[i]}`
      }
    }
  }
  return text
}
