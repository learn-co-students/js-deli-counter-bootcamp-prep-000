var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return 'Welcome, ' + name  + '. You are number ' + katzDeliLine.length + ' in line.';
}

function nowServing(person) {
  if (person.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var current = person[0];
    person.splice(0, 1);
    return 'Currently serving ' + current + '.';
  }
}

function currentLine(line) {
  var result = [];

  if (line.length === 0) {
    return 'The line is currently empty.';
  } else {
    for (var i = 0; i < line.length; i++) {
      result += (i + 1) + ". " + line[i] + ', ';
    }
  result = result.slice(0, result.length - 2)
  return 'The line is currently: ' + result;
  }
}
