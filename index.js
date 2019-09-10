var katzDeliLine = []

function takeANumber (katzDeliLine, newPerson){
  katzDeliLine.push(newPerson)
  var place = katzDeliLine.length
  return `Welcome, ${newPerson}. You are number ${place} in line.`
}
function nowServing (katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
  var person = katzDeliLine[0]
  katzDeliLine.shift()
  return `Currently serving ${person}.`
  }
}

function currentLine(katzDeliLine){
  var statement
  if (katzDeliLine.length === 0){
    statement = "The line is currently empty."
  } else {
  var list = "The line is currently:"
  var num = 0
  var person
  while (num < katzDeliLine.length){
    person = katzDeliLine[num]
    if (num < katzDeliLine.length - 1){
      person = person + ","
    }
    num++
    list = list + ` ${num}. ${person}`
  }
  statement = list
  }
  return statement
}