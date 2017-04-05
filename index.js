var katzDeli = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.indexOf(name) + 1} in line.`
}

function nowServing(line, first) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + line.shift(line[0]) + "."
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var lineList = '';
    for(var i = 0; i < line.length; i++) {
      lineList += (i + 1) + ". " + line[i] + ", ";
    }
  } else {
    return "The line is currently empty."
  }
  return "The line is currently: " + lineList.slice(0, lineList.length - 2)
}
