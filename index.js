// takeANumber adds a person to the line
// takeANumber appends a person if there already people on line
// takeANumber properly handles multiple people being added
function takeANumber(line, name) {
    line.push(name);
    return `Welcome, ${name}. You are number ${line.length} in line.`;
}

// nowServing returns the line is empty when no one is on line
// nowServing returns an announcement about the person it's serving and shifts line
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
  
  // if (line.length === 0) {
  //  return 'The line is currently empty.';
  // } else {
  //  do {
  //    newLine.push(` ${i+1}. ${line[i]}`);
  //    i++;
  //  } while (line.length > i);
  //  return `The line is currently:${newLine}`;
  // }
  
  if (line.length === 0) {
    return 'The line is currently empty.';
  } else {
    while(line.length > i) {
      newLine.push(` ${i+1}. ${line[i]}`);
      i++;
    }
    return `The line is currently:${newLine}`;
  }
}

// user comes in, takes a number
function takeANumber(line) {
    line.push(number);
    return `You are number ${line.length} in line.`;
}
// after taking a number, append onto array
// called by number vs. name
function currentLine(line) {
  var newLine = [];
  var i = 0;
  
  // if (line.length === 0) {
  //  return 'The line is currently empty.';
  // } else {
  //  do {
  //    newLine.push(` ${i+1}. ${line[i]}`);
  //    i++;
  //  } while (line.length > i);
  //  return `The line is currently:${newLine}`;
  // }
  
  if (line.length === 0) {
    return 'The line is currently empty.';
  } else {
    while(line.length > i) {
      newLine.push(` ${i+1}`);
      i++;
    }
    return `The line is currently:${newLine}`;
  }
}
array.push(array.length)