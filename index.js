function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length === 0)
    return 'There is nobody waiting to be served!';

  return `Currently serving ${line.shift()}.`;
}

function currentLine(line) {
  let greeting = 'The line is currently';

  if (line.length === 0) {
    greeting += ' empty.';
  } else {
    greeting += ': ';

    for (let i = 0; i < line.length; i++) {
      greeting += `${i + 1}. ${line[i]}`;
      if (i + 1 < line.length)
        greeting += ', ';
    }
  }
  
  return greeting;
}
