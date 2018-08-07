var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return `There is nobody waiting to be served!`;
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`;
  } else {
    let string = 'The line is currently:';
    for (let i = 0; i < line.length; i++) {
      if (i < line.length - 1) {
        string += ` ${i + 1}. ${line[i]},`;
      } else {
        string += ` ${i + 1}. ${line[i]}`;
      }
    }
    return string;
  }
}