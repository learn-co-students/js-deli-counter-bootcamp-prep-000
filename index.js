var deliLine = [];

function takeANumber(deliLine, newName) {
  deliLine.push(newName);
  return `Welcome, ${newName}. You are number ${deliLine.length} in line.`;
}

function nowServing(deliLine) {
  if (deliLine.length > 0) {
    return `Currently serving ${deliLine.shift()}.`;
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(deliLine) {
    if (deliLine.length > 0) {
        let messageStart = 'The line is currently:';
        let currLine = [];
        
        for (let i = 0; i < deliLine.length; i++) {
            if (i == deliLine.length - 1) {
                currLine.push(` ${i + 1}. ${deliLine[i]}`);
            } else {
                currLine.push(` ${i + 1}. ${deliLine[i]},`);
            }
        }
     
        return messageStart.concat(...currLine);
    } else {
      return 'The line is currently empty.';
    }
}