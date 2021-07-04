  var takeANumber = function(line, name) {
    line.push(name);
    return `Welcome, ${name}. You are number ${line.length} in line.`;
  }

  var nowServing = function(line) {
    if (line.length === 0) {
      return "There is nobody waiting to be served!";
    }
    else
    {
      var first = line[0];
      line.shift();
      return `Currently serving ${first}.`;
    }
}

var currentLine = function(line) {
  var peopleInLine = "The line is currently:"
  if (line.length === 0) {
    return "The line is currently empty."
  }
  else {
    for (var i = 0; i < line.length; i++) {
      peopleInLine += ` ${i+1}. ${line[i]},`
    }
    return peopleInLine.slice(0, -1);
  }
}
