function takeANumber(katzDeliLine, name) {
  
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;
}

function nowServing(katzDeliLine) {

  if(katzDeliLine.length > 0) {
  
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    
    return "There is nobody waiting to be served!";
    }
}

function currentLine(katzDeliLine) {

  if (katzDeliLine.length > 0) {
    var line = "";
    for(var i = 1;katzDeliLine.length > 0 ;i++ ) {
    
      line += ` ${i}. ${katzDeliLine.shift()}${katzDeliLine.length > 0 ? ',' : '' }` // use ternery condition to void last comma. 
  }
  } else {
  
    return "The line is currently empty.";
    }
  
    return "The line is currently:" + line;
}