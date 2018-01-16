var katzDeli = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return  `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    var nextInLine = `Currently serving ${katzDeliLine[0]}.`
    console.log(nextInLine)
    katzDeliLine.shift()
  }
  else return "There is nobody waiting to be served!"
  
  return nextInLine
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length > 0){
    var message = "The line is currently:"
    
    for(let x = 0 ; x < katzDeliLine.length ; x++){
      message += x == 0 ? " " : ", "
      message += `${x+1}. ${katzDeliLine[x]}` 
      
    }
  }else return "The line is currently empty."
  return message
}