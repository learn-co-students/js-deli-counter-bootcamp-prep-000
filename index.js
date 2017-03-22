function takeANumber (katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var nextPerson = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${nextPerson}.`
  }
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    var return_str = "The line is currently: "
    for(var i = 0; i < katzDeliLine.length; i++) {
      return_str += `${i+1}. ${katzDeliLine[i]}${i === (katzDeliLine.length -1) ? "" : ", "}`
    }
  return return_str
  }
}
