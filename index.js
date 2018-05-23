var katzDeliLine = []

function takeANumber(katzDeliLine,customer){
  katzDeliLine.push(customer)
  return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.` 
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    var current = katzDeliLine.shift()
    return `Currently serving ${current}.`
  }
  else
    return "There is nobody waiting to be served!"
}

function currentLine(katzDeliLine){
  var theline = "The line is currently: "
  if (katzDeliLine.length > 0){
    theline = theline+`1. ${katzDeliLine[0]}`
    for(let i = 1; i < katzDeliLine.length; i++){
      theline = theline+`, ${i+1}. ${katzDeliLine[i]}`
    }
    return theline
  }
  else{
    return "The line is currently empty."
  }
}