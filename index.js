// takeANumber adds a person to the line
// takeANumber appends a person if there already people on line
// takeANumber properly handles multiple people being added
function takeANumber(line, name) {
    line.push(name);
    return `Welcome, ${name}. You are number ${line.length} in line.`;
}

// nowServing returns the line is empty when no one is on line
// nowServing returnsan announcement about the person it's serving and shifts line
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift(1)}.`;
  }
}

// currentLine(line) returns "The line is currently empty." if no one is in line
// currentLine(line) says who is in line when there are people waiting
function currentLine(line) {
  var newLine = [];
  var i = 0;
  
  if (line.length === 0) {
    return 'The line is currently empty.';
  } else {
    do {
      newLine.push(` ${i+1}. ${line[i]}`);
      i++;
    } while (line.length > i);
    return `The line is currently:${newLine}`;
  }
}