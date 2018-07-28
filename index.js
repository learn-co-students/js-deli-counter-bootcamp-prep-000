function takeANumber(deliLine, custName) {
  deliLine.push(custName);
  return `Welcome, ${custName}. You are number ${deliLine.length} in line.`;
}

function nowServing(deliLine) {
  
  if (deliLine.length > 0) {
    return `Currently serving ${deliLine.shift()}.`;
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(deliLine) {
  
  if (deliLine.length > 0) {
    
    var announce = "The line is currently: ";
    
    for (let i = 0; i < deliLine.length; i++) {
      announce += `${(i + 1)}. ${deliLine[i]}, `
    }
    
    return announce.slice(0, -2);
    
  } else {
    return 'The line is currently empty.'
  }
}