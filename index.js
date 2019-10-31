function takeANumber(line, person) {
  line.push(person);
  return `Welcome, ${person}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) return "There is nobody waiting to be served!";
  var person = line.shift();
  return `Currently serving ${person}.`;
}

function currentLine(line) {
  if (line.length === 0) return "The line is currently empty.";
  var mess = "The line is currently:"
  var people = [];
  for(let i = 0; i < line.length; i++) {
    people.push(` ${i+1}. ${line[i]}`);
  }
  return mess + people;
}