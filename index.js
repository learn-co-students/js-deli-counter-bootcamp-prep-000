function takeANumber(currentLine, name){
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.indexOf(name) + 1} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    return (`Currently serving ${katzDeliLine.shift()}.`)
    
  }
}

function currentLine(katzDeliLine){
  var currentLineArray = [];
  
  if (katzDeliLine.length === 0){
    return 'The line is currently empty.'
  }
  
  for (var i = 0; i<katzDeliLine.length; i++){
    currentLineArray.push(` ${i + 1}. ${katzDeliLine[i]}`)
  }
  return `The line is currently:${currentLineArray}`
}