function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}
function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
    var line = `The line is currently:`;
    for(var i = 1; i<=katzDeliLine.length; i++) {
      if(i===1) {
        line+= " 1. " + katzDeliLine[0];
      }
      else {
        line+= `, ${i}. ${katzDeliLine[i-1]}`;
      }
    }
    return line;
  }
}