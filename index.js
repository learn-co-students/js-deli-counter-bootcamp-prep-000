// Function that adds a customer and lets them know the position of line they're at.
function takeANumber(line, person) {
  line.push(person);
  return 'Welcome, ' + person + '. You are number ' + line.length + ' in line.';
}

// Function that serves the first person in line and if nobody is on line it'll say that.
function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return 'Currently serving ' + line.shift([0]) + '.';
  }
}

// Function that informs the person who exactly is on the line with their names and line position. 
function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.';
  } else {
      let currentLine = [];
      for (let i = 0; i < line.length; i ++) {
        currentLine.push( i+1 + '. ' + line[i]);
    }
    return 'The line is currently: ' + currentLine.join(', ' );
  }
}


