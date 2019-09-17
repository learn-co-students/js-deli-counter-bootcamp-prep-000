

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var position = katzDeliLine.indexOf(name)
  return `Welcome, ${name}. You are number ${position + 1} in line.`
}

function nowServing(katzDeliLine){
  var firstPerson
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  firstPerson = katzDeliLine[0]
  katzDeliLine.shift()
  return `Currently serving ${firstPerson}.`
}

function currentLine(katzDeliLine){
  var currentLine2 = "The line is currently: "
  if (katzDeliLine.length > 0){
    for (var i = 0; i < katzDeliLine.length; i++){
      currentLine2 = currentLine2 + `${i+1}. ${katzDeliLine[i]}, `
    }
    return currentLine2.slice(0, -2)
  }
  if (katzDeliLine.length === 0){
  return "The line is currently empty."
}
}