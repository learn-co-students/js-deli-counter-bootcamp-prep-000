var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  if(katzDeliLine.length >= 0) {
    katzDeliLine.push(name);
  }
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(lineNum) {
    if(lineNum.length == 0) {
      return "The line is currently empty."
    } else {
      var lineLength = ``;
      for (var i = 0; i < lineNum.length; i++) {
        if(i != lineNum.length -1) {
          lineLength += `${i+1}. ${lineNum[i]}, `;
        } else {
          lineLength += `${i+1}. ${lineNum[i]}`;
        }
      }
      return `The line is currently: ${lineLength}`;
    }
}