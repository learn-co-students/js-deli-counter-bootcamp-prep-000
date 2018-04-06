var katzDeli = [];

/* adds a person to the line
appends the person the end of the line if there are already people on it
properly handles multiple people being added */

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
}

function nowServing(x) {
  if (x.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = x[0];
    x.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}

function currentLine(line) {
    if (line.length === 0) {
        return "The line is currently empty.";
    } else {
        let persons = [];
        for (let i = 0; i < line.length; i++) {
            persons.push(`${i + 1}. ${line[i]}`);
        }
        return `The line is currently: ${persons.join(', ')}`;
    }
}
