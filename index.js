function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  var guest = line.shift();
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${guest}.`;
}

function currentLine(line) {
  var queue = [];
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  for (let i = 0; i < line.length; i++) {
    queue.push(`${i + 1}. ${line[i]}${i === line.length - 1? "" : ","}`);
  }
  return `The line is currently: ${queue.join(" ")}`;
}
