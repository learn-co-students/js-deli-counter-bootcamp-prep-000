var katzDeliLine = [];

function takeANumber(katzDeliLine, newName) { //current line list adds new person to line list and tells them their position in line
  katzDeliLine.push(newName);
  
  return katzDeliLine && `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    console.log('The line is currently: ${katzDeliLIne}');
    return 'The line is currently: ' + katzDeliLine.map((x, i)=>i+1 +'. ' + x).join(', ');
  } else {
    return 'The line is currently empty.';
  }
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length>0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return `There is nobody waiting to be served!`;
  }
}