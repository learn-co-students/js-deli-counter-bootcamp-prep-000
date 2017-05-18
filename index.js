function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length < 1) {
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  if (line.length < 1) {
    return 'The line is currently empty.';
  } else {
    var msg = ['The line is currently:'];
    for (var i = 0; i < line.length; i++) {
      if (i === line.length - 1) {
        var item = `${i + 1}. ${line[i]}`;
      } else {
        var item = `${i + 1}. ${line[i]},`;
      }

      msg.push(item);
    }
    return msg.join(' ');
  }

}
