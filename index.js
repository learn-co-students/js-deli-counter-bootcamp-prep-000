function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  var name = line.shift();
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${name}.`;
  }
}

function currentLine(line) {
  var result = "The line is currently: ";
  if (line.length !== 0) {
    for (var i = 0; i < line.length; i++) {
      if (i + 1 === line.length) {
        result += (i + 1) + ". " + line[i];
      } else {
        result += (i + 1) + ". " + line[i] + ", ";
      }
    }
    return result;
  } else {
    return "The line is currently empty."
  }
}
