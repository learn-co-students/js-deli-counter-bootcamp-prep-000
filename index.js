var katzDeli = [];

function takeANumber(line, name) {
  line.push(name)
  return 'Welcome, ' + name  + '. You are number ' + line.length + ' in line.'
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var frontOfLine = line[0];
    line.shift();
    return `Currently serving ${frontOfLine}.`;
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var instructions = "The line is currently:"
    for (var i = 0; i < line.length; i++) {
      instructions += ` ${i + 1}. ${line[i]},`
    }
    return instructions.slice(0,-1)
  }
  
  
}