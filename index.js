function takeANumber(katzDeli, name) {
  
  katzDeli.push(name) ;
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.` ;
}


function nowServing(deliLine) {
  
  if (deliLine.length === 0) {
  return "There is nobody waiting to be served!" ;
  
  } else {
    
    return `Currently serving ${deliLine.shift()}.` ;
  }
}


function currentLine(line) {
  
  if (line.length === 0) {
    return "The line is currently empty." ;
    
  } else { 
    
    var newLine = [] ;
    
    for (let i = 0; i < line.length; i++) {
      newLine.push(` ${i + 1}. ${line[i]}`) ;
    }
    
    return `The line is currently:` + newLine ;
  }
}