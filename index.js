var katzDeli = []

function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person)
  return "Welcome, " + person + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine){
  var customer
  
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  
  else{
    customer = katzDeliLine[0]
    katzDeliLine.shift()
    return "Currently serving " + customer + "."
  }
}

function currentLine(katzDeliLine) {
  console.log(katzDeliLine)
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  
  else{
    var str = "The line is currently: "
    for(let i=0; i<katzDeliLine.length-1; i++) {
      str += (i + 1) + ". " + katzDeliLine[i] + ", "
    }
    str += (katzDeliLine.length) + ". " + katzDeliLine[katzDeliLine.length-1]
    return str
  }
}

currentLine(["Ada", "beth", "carl"])