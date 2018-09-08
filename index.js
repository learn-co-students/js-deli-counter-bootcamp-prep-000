function takeANumber(people, name) {
  people.push(name);
  return `Welcome, ${name}. You are number ${people.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var current = katzDeliLine.shift();
    return `Currently serving ${current}.`;
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var arr = [];
    for (var i = 0; i < line.length; i++) {
      arr.push(`${i + 1}. ${line[i]}`);
    }
    var waiting = arr.join(", ");
    return `The line is currently: ${waiting}`;
  }
}