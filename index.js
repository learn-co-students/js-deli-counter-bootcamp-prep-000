var katzDeli = [];

function takeANumber(line, name) {
  line.push(name);
  var positionInLine = line.length;
  return "Welcome, " + name + ". You are number " + positionInLine + " in line.";
}

function nowServing(line) {
  if (line.length < 1) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + line.splice(0, 1) + ".";
    return line;
  }
}

function currentLine(line) {
  if (line.length < 1) {
    return "The line is currently empty."
  } else {
    var lineOrder = "The line is currently: ";
    for (let i = 0, l = line.length - 1; i < l; i++) {
      lineOrder += (i+1) + ". " + line[i] + ", "
    }
    lineOrder += line.length + ". " + line[line.length - 1];
    return lineOrder;
  }
}
