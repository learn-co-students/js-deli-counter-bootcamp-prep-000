var katzDeli = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`;
  };
}

function currentLine(line) {
  var output = "The line is currently: ";
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 1; i <= line.length; i++) {
      output += i + ". " + line[i-1];
      if (i < line.length) {
        output += ', ';
      };
    };
    return output;
  }
}
