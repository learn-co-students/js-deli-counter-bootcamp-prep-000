function takeANumber(katzDeli,name){
  var positionInLine = katzDeli.length+1
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${positionInLine} in line.` 
}

function nowServing(katzDeli){
  if (katzDeli.length === 0){
    return "There is nobody waiting to be served!"}
  else {
    var firstPerson = katzDeli.shift()
  }
  return `Currently serving ${firstPerson}.` 
}

function currentLine(katzDeli){
  if (katzDeli.length === 0){
    return "The line is currently empty."
  }
  else {
    var positionInLine = 2
    var currentLine = `The line is currently: 1. ${katzDeli[0]}`
    var i = 1
    while (i<katzDeli.length){
      currentLine = currentLine +`, ${positionInLine}. ` + `${katzDeli[i]}`
      i = i + 1
      positionInLine = positionInLine + 1
    }
    
  return currentLine
  }
  
}