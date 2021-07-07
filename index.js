function takeANumber(line, name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var now = line[0];
    line.shift();
    return "Currently serving " + now + ".";
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var announce = [];
    for (var i = 1; i <= line.length; i++) {
      announce.push(" " + i + ". " + line[i-1]);
    }
    return "The line is currently:" + announce;
  }
}

