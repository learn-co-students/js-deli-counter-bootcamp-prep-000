var katzDeliLine = [];

function takeANumber(line, name) {
  return 'Welcome, ' + name + '. You are number ' + line.push(name) + ' in line.';
}

function nowServing(line) {
  return line.length > 0 ? 'Currently serving ' + line.shift() + '.' : 'There is nobody waiting to be served!';
}

function currentLine(line) {
  function listLine() {
    return line.reduce(function(prev, curr, index) {
      return prev + `${index + 1}. ${curr}` + (line.length === index + 1 ? '' : ', ');
    }, '');
  }
  return line.length > 0 ? 'The line is currently: ' + listLine() : 'The line is currently empty.';
}
