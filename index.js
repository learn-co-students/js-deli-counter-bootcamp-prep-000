function takeANumber(currentLine, personName) {
    currentLine.push(personName);
    
    return `Welcome, ${personName}. You are number ${currentLine.length} in line.`; 
  
}

function nowServing(array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!"; 
  }
  
  else {
    return "Currently serving " + array[0] + "." ; 
  }
  array.shift();
  return array;
}

function currentLine(array) {
  var empty = []
  if (array.length === 0) {
    return "The line is currently empty."; 
  }
  
  else {
    for(var i = 1; i<array.length; i++ ) {
      empty.push(` ${i}. array[i-1] `)
    }
    
  }
  return "The line is currently: " + array

}