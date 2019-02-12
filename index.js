function takeANumber(line, name) {
  return `Welcome, ${name}. You are number ${line.push(name)} in line.`;
}



function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift(name)}.`;
  }
}



function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } 
    var i = 0;
    var message = "The line is currently: ";
    while (i < line.length) {
      if (i === line.length - 1) {
      message = message + (i + 1) + ". " + line[i];
      } else {
      message = message + (i + 1) + ". " + line[i] + ", ";
      }
      i++
    }
    return message;
  }
