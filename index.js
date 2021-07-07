function takeANumber(currentLine, customerName) {
  
  currentLine.push(customerName);
  
  var position = currentLine.length;
  
  return `Welcome, ${customerName}. You are number ${position} in line.`;
}

function nowServing(currentLine) {
  return ( currentLine.length === 0 ? `There is nobody waiting to be served!` : `Currently serving ${currentLine.shift()}.`);
}

function currentLine(currentLine) {
  if (currentLine.length === 0) {
    return `The line is currently empty.`;
  }
    
  var names = [];
    
  for ( let i = 0; i < currentLine.length; i++) {
    names.push(`${i+1}. ${currentLine[i]}`); 
  }

  var lineList = `The line is currently: `.concat( names.join(`, `) );
  return lineList;
}