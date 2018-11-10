function takeANumber(line, person) {
  line.push(person);
  return `Welcome, ${person}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length > 0) {
    return `Currently serving ${line.shift()}.`;
  } else {
    return  "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if (line.length > 0) {
    let string = '';
    for (let i = 0; i < line.length; i++) {
    string += `${i + 1}. ${line[i]}, `
  }
    return `The line is currently: ${string.substring(0, string.length - 2)}`;
  } else {
    return  "The line is currently empty.";
  }
}
