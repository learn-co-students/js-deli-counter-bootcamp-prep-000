var katzDeliLine = []

function takeANumber(position, name){
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine){
  if (null === katzDeliLine){
    return "There is nobody waiting to be served!"
  } Else {
    var firstPerson = []
    firstPerson = katzDeliLine[0]
    katzDeliLine.shift()
    return katzDeliLine
  }
}
