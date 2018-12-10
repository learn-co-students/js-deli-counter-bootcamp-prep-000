var katzDeliLine = [];

function takeANumber(line, person) {
  line.push(person)
  return `Welcome, ${person}. You are number ${line.length} in line.`
}

function nowServing(line) {
  var serving = line[0];
  line.shift();
  if (line.length > 0) {
      return `Currently serving ${serving}.`;
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(line) {
  var str = 'The line is currently:'
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      str += ` ${i+1}. ${line[i]}${i === line.length - 1 ? '' : ','}`
    }
  } else {
    return 'The line is currently empty.'
  }
  return str;
}