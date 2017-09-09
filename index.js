

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  else {
    var lineList = new Array();
    for (var i = 0; i < line.length; i++) {
      lineList.push(` ${i + 1}. ${line[i]}`)
    }
    console.log(lineList)
    return `The line is currently:${lineList}`
  }
}

currentLine(["ada", "pinkett", "smith"])
