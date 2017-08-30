const takeANumber = (line, name) => {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}; 

const nowServing = (line) => {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  } else {
    var firstPerson = line[0];
    line.shift();
    return `Currently serving ${firstPerson}.`;
  }
};

const currentLine = (line) => {
  if (!line.length) {
    return "The line is currently empty."
  } else {
    var peopleInLine = [];
    for (var i = 0; i < line.length; i++) {
      peopleInLine.push(`${i + 1}. ${line[i]}`);
    }
    return `The line is currently: ${peopleInLine.join(', ')}`
  }
};