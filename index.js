function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    let next = katzDeliLine.shift();
    return `Currently serving ${next}.`;
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    let line = "The line is currently: ";
    for(let i = 0;i < katzDeliLine.length;i++) {
      if(i === 0) {
        line = line + `1. ${katzDeliLine[i]}`;
      } else {
      line =  line + `, ${i + 1}. ${katzDeliLine[i]}`;
      }
    }
    return line;
  }
}