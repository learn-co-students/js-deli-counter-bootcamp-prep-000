function takeANumber(line, name) {
  line.push(name);
  var position = line.length;
  var welcome = `Welcome, ${name}. You are number ${position} in line.`;
  return welcome
}

function nowServing(line) {
  var person = "";
  if (line.length === 0) {
    person = "There is nobody waiting to be served!";
  } else {
    person = `Currently serving ${line[0]}.`;
    line.shift();
  }
  return person
}

function currentLine(line) {
  var people = "";
  if (line.length === 0) {
    people = "The line is currently empty.";
  } else {
    people = "The line is currently: ";
    for (let i = 0; i < line.length; i++) {
      people += `${i + 1}. ${line[i]}`;
      if ((i + 1) < line.length) {
        people += ", ";
      }
    }
  }
  return people
}