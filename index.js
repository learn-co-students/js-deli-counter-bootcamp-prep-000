var katzDeliLine = []

function takeANumber(katzDeliLine, customer){
  katzDeliLine.push(customer)
  for(let i = 0; i < katzDeliLine.length; i++){
    if(katzDeliLine[i] === customer){
      let position = i+1
      return "Welcome, " + customer + ". You are number " + position + " in line."
    }
  }
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var served = katzDeliLine[0]
    katzDeliLine.shift()
    return "Currently serving " + served + "."
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    let line = ""
    for(let i = 0; i<katzDeliLine.length; i++){
      let position = i+1
      line += " " + position + ". " + katzDeliLine[i]
      if(i < katzDeliLine.length - 1){
        line += "," //add a comma after each position but the last
      }
    }
    return "The line is currently:" + line
  }
}