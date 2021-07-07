

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  name = line.shift();
  return `Currently serving ${name}.`;
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  }

  var lineList = "The line is currently: ";
  for (var i = 1; i <= line.length; i++) {
    if (i === line.length) {
      lineList += `${i}. ${line[i-1]}`
    }
    else {
      lineList += `${i}. ${line[i-1]}, `;
    }
  }

  return lineList;
}
