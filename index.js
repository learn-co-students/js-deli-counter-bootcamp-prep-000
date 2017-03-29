var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return "Welcome, " + name + ". You are number " + katzDeli.length + " in line.";
}

function nowServing(deliLine) {
  if (deliLine.length > 0) {
  return "Currently serving " + deliLine.shift() + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  var variable = "The line is currently: ";
  if (line.length > 0) {
    for (var i = 1; i < line.length + 1; i++) {
      var add = i + ". " + line[i - 1] + ", ";
      if (i === line.length) {
        variable = variable + i + ". " + line[i - 1]
      } else {
        variable = variable + add;
      }
  } return variable;
} else {
  return "The line is currently empty.";
}
}
