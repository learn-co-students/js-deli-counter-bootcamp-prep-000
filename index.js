function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!';
  }

  const name = line.shift();
  return `Currently serving ${name}.`;
}

function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.';
  }

  let message = 'The line is currently:';
  for (let i = 0; i < line.length; i++) {
    message = `${message} ${i + 1}. ${line[i]}${i === line.length - 1 ? '' : ','}`;
  }

  return message;
}
