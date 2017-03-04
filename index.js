function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  return line.length
    ? `Currently serving ${line.shift()}.`
    : `There is nobody waiting to be served!`;
}

function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`;
  }

  var numberedNames = line.map((val, i) => `${i + 1}. ${val}`);
  return `The line is currently: ${numberedNames.join(', ')}`;
}