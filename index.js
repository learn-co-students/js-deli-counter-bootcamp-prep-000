function takeANumber(curLine, newName) {
  curLine.push(newName);
  return `Welcome, ${newName}. You are number ${curLine.length} in line.`;
}

function nowServing(curLine) {
  if(curLine.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${curLine.shift()}.`;
  }
}

function currentLine(curLine) {
  if(curLine.length < 1) {
    return "The line is currently empty.";
  } else {
    let lineStr = `The line is currently: 1. ${curLine[0]}`;
    for(let i = 1; i < curLine.length; i++) {
      lineStr = lineStr + `, ${i + 1}. ${curLine[i]}`;
    }
    return lineStr;
  }
}