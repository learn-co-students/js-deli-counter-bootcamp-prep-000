var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length > 0) {
    var person = line.shift();
    return `Currently serving ${person}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line){
  var current = "The line is currently: ";
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      current += i+1 + ". " + line[i];
      if (i < line.length - 1) {
        current += ", ";
      }
    }
  } else {
    return "The line is currently empty.";
  }
  return current;
}
