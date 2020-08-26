function takeANumber(line, name) {
  line.push(name);

  var place = line.length;

  return `Welcome, ${name}. You are number ${place} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = line[0];
    line.shift();
    return `Currently serving ${name}.`;
  }
}

function currentLine(line) {
  var lineStr = 'The line is currently: '
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < line.length; i++) {
      var name = line[i];

      lineStr += `${i + 1}. ${name}, `;
    }
  }
  return lineStr.slice(0, lineStr.length - 2);
}
