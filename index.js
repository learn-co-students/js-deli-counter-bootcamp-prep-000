let katzDeliLine = [];

function takeANumber(Line, newName) {
  Line.push(newName);
  return `Welcome, ${newName}. You are number ${Line.length} in line.`;
}

function nowServing(Line) {
  if (Line.length > 0) {
    let person = Line.shift();
    return `Currently serving ${person}.`
    return
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(line) {
  if (line.length < 1) {
    return 'The line is currently empty.';
  } else {
    let string = 'The line is currently: ';
    for (let i = 0; i < line.length; i++) {
      string += `${i}. ${line[i]}, `;
    }
    return string.slice(0, string.length - 2);
  }
}
