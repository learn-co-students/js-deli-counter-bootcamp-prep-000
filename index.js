var takeANumber = function(line, name) {
  line.push(name);
  var position = line.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${position} in line.`;
};

var nowServing = function(line) {
  var statement = "";
  if (line.length < 1) {
    statement = "There is nobody waiting to be served!";
  } else {
    statement = `Currently serving ${line[0]}.`;
    line.shift();
  }
  return statement;
};

var currentLine = function(line) {
  var currentLine = "The line is currently:";
  if (line.length < 1) {
    return "The line is currently empty.";
  } else {
    for (var i=0; i<line.length; i++) {
      currentLine += ` ${i + 1}. ${line[i]}${(line.length - 1 === i ? '' : ',')}`;
    }
  }
  return currentLine;
};