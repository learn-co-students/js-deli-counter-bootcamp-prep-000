function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line) {
  var string = "The line is currently"
  if (line.length === 0) {
    return string + " empty.";
  } else {
    string += ":";
    for (var i = 0; i < line.length - 1; i++) {
      string += ` ${i + 1}. ${line[i]},`;
    }
    string += ` ${line.length}. ${line[line.length - 1]}`;
  }
  return string;
}