function takeANumber(katzDeli, name) {
    katzDeli.push(`${name}`);
  return `Welcome, ${name}. You are number ` + [katzDeli.length] + ` in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
      return 'Currently serving ' + katzDeliLine.shift() + '.';  
  }
  else 
  return 'There is nobody waiting to be served!'
}

function currentLine(line) {
  var i = 0;
  var str = 'The line is currently: '
  if (line.length > 0) {
    do {
      str += [i + 1] + '. ' + line[i] + ', ';
      i++;
      } while (i < line.length - 1);
    str += line.length + '. ' + 
    line.slice(-1);
    return str
  }
  else
  return 'The line is currently empty.'
}