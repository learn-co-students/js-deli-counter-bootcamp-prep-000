function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.indexOf(name) +1} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {return "There is nobody waiting to be served!";}
  else {
    let current = line.shift();
    return `Currently serving ${current}.`;
  }
}

function currentLine(line) {
  if (line.length === 0) {return "The line is currently empty."}
  else {
    let people = [];
    for (let i=0; i < line.length; i++) {
      people.push(`${i + 1}. ${line[i]}`)
    }
    return `The line is currently: ${people.join(", ")}`;
  }
}