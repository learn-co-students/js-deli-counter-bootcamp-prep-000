var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length > 0) {
    var serving = `Currently serving ${line[0]}.`;
    line.shift();
    return serving
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var lineString = "The line is currently: "
    for (let i = 0; i < line.length; i++) {
      lineString += `${i + 1}. ${line[i]}`
      if (i < line.length - 1) {
        lineString += ', '
      }
    }
    return lineString
  } else {
    return "The line is currently empty."
  }
}