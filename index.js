function takeANumber(currentLine, personName) {
    currentLine.push(personName);
    
    return `Welcome, ${personName}. You are number ${currentLine.length} in line.`; 
  
}

function nowServing(array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!"; 
  }
  
  else {
    return `Currently serving ${array.shift()}.` ; 
  }
  
}

function currentLine(array) {
  var empty = []
  if (array.length === 0) {
    return "The line is currently empty."; 
  }
  
  else {
    for(var i = 1; i<array.length + 1; i++ ) {
      if (i === 1) {
         empty.push(`${i}. ${array[i-1]}`)
      }
      else {
         empty.push(` ${i}. ${array[i-1]}`)
      }
    }
    
  }
  return "The line is currently: " + empty

}