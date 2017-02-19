function takeANumber(line, person) {
  line.push(person);

  return `Welcome, ${person}. You are number ${line.length} in line.`;
}

function nowServing(line) {

  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line) {
  const waiting = [];

  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
      for (let i = 0; i < line.length; i++) {
        waiting.push(`${i + 1}. ${line[i]}`);
      }
  }
  return `The line is currently: ${waiting.join(', ')}`;
}
