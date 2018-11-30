function takeANumber(line, name) {
  line.push(name);
  var length = line.length;
  return `Welcome, ${name}. You are number ${length} in line.`;
}

function nowServing(line) {
  if (line.length > 0) {
    var lastPerson = line.shift();
    return `Currently serving ${lastPerson}.` 
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var i = 0;
    var totalLine = [];
    for (i = 0; i < line.length; i++) {
      var lineItem = `${i + 1}. ${line[i]}`;
      totalLine.push(lineItem);
    }
    return "The line is currently: " + totalLine.join(", ");
  } else {
    return "The line is currently empty.";
  }
}