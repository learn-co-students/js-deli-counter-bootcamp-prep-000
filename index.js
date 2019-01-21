function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = line.shift()
    return `Currently serving ${name}.`;
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var theLine = "The line is currently: 1. " + line[0];
    for (var i = 1; i < line.length; i++) {
      theLine += ", " + (i+1) + ". " + line[i];
    }
    return theLine;
  }
}
