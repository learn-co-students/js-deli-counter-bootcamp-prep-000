function takeANumber (line, person) {
  line.push(person);
  return `Welcome, ${person}. You are number ${line.indexOf(person) + 1} in line.`;
}

function nowServing (line) {
  return (line.length) ? `Currently serving ${line.shift()}.` : "There is nobody waiting to be served!";
}

function currentLine (line) {
  let str = "The line is currently: ";
  for (let i = 0; i < line.length; i++) {
    str += `${i + 1}. ${line[i]}, `;
  }
  return (line.length) ? str.slice(0, -2) : "The line is currently empty.";
}