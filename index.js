function currentLine(line) {
  var lineInfo = "The line is currently";
  if (line.length === 0) lineInfo += " empty.";
  else {
    lineInfo += ": ";
    lineInfo += line.map(function(name, position) {
      return `${position + 1}. ${name}`;
    }).join(', ');
  }
  return lineInfo;
}

function nowServing(line) {
  var current_customer = line[0];
  if (current_customer) return `Currently serving ${line.shift()}.`
  else return "There is nobody waiting to be served!";
}

function takeANumber(line, name) {
  return `Welcome, ${name}. You are number ${line.push(name)} in line.`
}
