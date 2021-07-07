
function takeANumber(currentLine, newPerson) {
  currentLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`;
}

function nowServing(currentLine) {
  if(currentLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var name = currentLine[0];
    currentLine.shift();
    return `Currently serving ${name}.`
    }
}

function currentLine(x) {
  var line = []
  if(x.length === 0) {
    return 'The line is currently empty.'
  } else {
     for(var i = 0; i < x.length; i++) {
        line += (i + 1) + ". " + x[i] + ", "
      }
      line = line.slice(0, line.length-2)
    return 'The line is currently: ' + line
  }
}

