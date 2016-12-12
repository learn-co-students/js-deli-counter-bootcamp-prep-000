function takeANumber(array, newPerson) {
  array.push(newPerson);
  let tmp = array.length;
  return 'Welcome, ' + newPerson + '. You are number ' + tmp + ' in line.';
}

function nowServing(array) {
  if (array.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    let tmp = array.shift();
    return `Currently serving ${tmp}.`;
  }
}

function currentLine(line) {
  //"The line is currently: 1. Ada 2. Grace"

  if (line.length == 0)
    return 'The line is currently empty.';

  var output = 'The line is currently:';
  for (let x = 0; x < line.length; x++) {
    if (x == line.length - 1) {
      output += ' ' + (x + 1) + '. ' + line[x];
    } else {
      output += ' ' + (x + 1) + '. ' + line[x] +',';
    }
  }
  return output;
}
