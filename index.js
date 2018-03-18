function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  var person
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    person = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${person}.`
  }
}

function currentLine(katzDeliLine){
  var message = "The line is currently"
  if (katzDeliLine.length === 0){
    message = message + " empty."
  }
  else{
    message = message + ": "
    for (let i = 0; i < katzDeliLine.length; i++){
      message = message + `${i+1}. ${katzDeliLine[i]}`
      if(i < katzDeliLine.length - 1){
        message = message + ", "
      }
    }
  }
  return message
}

var testLine = ["Joe", "Irma", "Cedric"]

console.log(takeANumber(testLine, "Fred"))
console.log(nowServing(testLine))
console.log(testLine[0])