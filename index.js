function takeANumber(currentLine, name) {
      currentLine.push(name);
  if (currentLine.length) {
    return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
  }else {
    return `Welcome, ${name}. You are number 1 in line.`
  }
}
function nowServing(currentLine) {
  if (!currentLine.length) {
    return "There is nobody waiting to be served!";
  }else {
    return `Currently serving ${currentLine.shift()}.`;
  }
}

function currentLine(currentLine) {
    if (!currentLine.length) {
        return "The line is currently empty.";
    }
    let line = [];

    for (let i=0; i<currentLine.length; i++)line.push(i + 1 + '. ' + currentLine[i]);
    console.log("The line is currently " + line);

    return "The line is currently: " + line.join(', ');


}


