var katzDeliLine = []

function takeANumber(katzDeliLine, name){ 
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  var currentLine= katzDeliLine.shift() 
  if (katzDeliLine.length > 0){
  return `Currently serving ${currentLine}.`
  } 
  if (katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!'
  }
}


function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  
  var lineStr = "The line is currently: "
  for (let i = 0; i < katzDeliLine.length; i++) {
    lineStr += `${i+1}. ${katzDeliLine[i]}`
    
    if (i !== katzDeliLine.length - 1) {
      lineStr += `, `
    }
  }
  
  return lineStr
}


// "The line is currently: 1. Ada, 2. Grace, 3. Kent,"
