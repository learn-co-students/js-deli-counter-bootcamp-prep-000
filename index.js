function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;   
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    var turnAndName = '';
    for(var i = 0; i < katzDeliLine.length - 1; i++) {
      turnAndName += ` ${i + 1}. ${katzDeliLine[i]},`; 
    }
    turnAndName += ` ${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length - 1]}`;
    return `The line is currently:${turnAndName}`;
  } else {
    return 'The line is currently empty.';
  }
}