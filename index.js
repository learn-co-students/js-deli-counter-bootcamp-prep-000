var katzDeliLine = [];

function takeANumber(currentLine, newName) {
  currentLine.push(newName);
  return `Welcome, ${newName}. You are number ${currentLine.length} in line.`;
}

function nowServing(currentLine) {
  if (currentLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return`Currently serving ${currentLine.shift()}.`;
  }
}

function currentLine(currentLine) {
  var i;
  var ans = "The line is currently: ";
  
  if (currentLine.length === 0) {
    return `The line is currently empty.`;
  } else {
    for (i = 0; i < currentLine.length; i++) {
        ans = ans.concat(`${i + 1}. ${currentLine[i]}`);
        
        if (i < currentLine.length - 1) {
          ans = ans.concat(`, `);
        }
      }
  }
  
  return ans;
}