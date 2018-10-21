function takeANumber(line,newname) {
  line.push(newname);
  return `Welcome, ${newname}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length > 0) {
    return `Currently serving ${line.shift()}.`;
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var part1 = 'The line is currently:';
    var part2 = '';
    for(var i = 0; i < line.length-1; i++) {
      part2 = part2 + ' ' + (i+1) + '. '+line[i]+',';
    }
    return part1 + part2 + ' ' + (i+1) + '. ' + line[line.length-1];
  } else {
    return 'The line is currently empty.'
  }
}