function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  const beingServed = katzDeliLine.shift();
  
  if (beingServed) { 
    return `Currently serving ${beingServed}.`;
  }
  
  return 'There is nobody waiting to be served!';
}

function currentLine(katzDeliLine) {
  if (!katzDeliLine.length) return 'The line is currently empty.';
  
  let strToReturn = 'The line is currently: ';
  for(var index = 0; index < katzDeliLine.length; index++) {
    const nameInLine = katzDeliLine[index];
    const posInLine = index + 1;
    
    if (posInLine === 1) {
      strToReturn += `${posInLine}. ${nameInLine}`;
    } else {
      strToReturn += `, ${posInLine}. ${nameInLine}`;
    }
  }
  
  return strToReturn;
}