var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  var number = line.length;

  return "Welcome, " + name + ". You are number " + number + " in line."
}

function nowServing(line) {
  if (line.length < 1) {
    return "There is nobody waiting to be served!";
  }
  else {
    return "Currently serving " + line.shift() + ".";
  }
}

function currentLine(line) {
  var lineList = [];

  for (let i = 0; i < line.length; i++) {
    lineList.push(" " + (i + 1) + "." + " " + line[i]);
  }

  if (line.length < 1) {
    return "The line is currently empty."
  }
  else {
    return "The line is currently:" + lineList
  }
}
