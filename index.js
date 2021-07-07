function takeANumber(line, name) {
  line.push(name);
  return (`Welcome, ${name}. You are number ${line.length} in line.`);
}

function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line) {
  var text = 'The line is currently:';
  if (line.length === 0) {
    return 'The line is currently empty.';
  } else {
    for (var i = 1; i < line.length; i++) {
      text += ' ' + i + '. ' + line[i - 1] + ',';
    }
    text += ' ' + line.length + '. ' + line[line.length - 1];
  }
  return text;
}
