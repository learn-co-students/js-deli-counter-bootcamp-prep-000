

function takeANumber(line, name) {
  line.push(name) ;
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  var message = `${line.length === 0 ? 'There is nobody waiting to be served!' : `Currently serving ${line[0]}.`}`;
  line.shift();
  return message
}

function currentLine(line) {
  var message = "";
  var i = 0;
  if (line.length === 0) {
    message = 'The line is currently empty.';
  } else if (line.length === 1) {
    message = `The line is currently: ${1}. ${line[0]}`;
  } else {
    message = `The line is currently: ${1}. ${line[0]}`;
    for (i = 1; i < line.length; i ++) {
      message = message + `, ${i+1}. ${line[i]}`;
    }
  }
  return message
}