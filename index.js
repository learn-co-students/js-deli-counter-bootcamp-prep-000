const katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  
  katzDeliLine.push(name)
  katzDeliLine = katzDeliLine.length
  return `Welcome, ${name}. You are number ${katzDeliLine} in line.`
  
}

function nowServing(katzDeliLine) {
  var orderUp = katzDeliLine.shift()
  if (katzDeliLine.length===0) {
    return `There is nobody waiting to be served!` }
  else {
    return `Currently serving ${orderUp}.`
}
}

function currentLine(katzDeliLine) {
  var line = []
  
  for (var i = 0; i < katzDeliLine.length; i++) {
    
      line.push(` ${i + 1}. ${katzDeliLine[i]}`)
      
  }
  
  if (katzDeliLine.length===0) {
      return `The line is currently empty.`
  }
  
  return `The line is currently:` + line
}