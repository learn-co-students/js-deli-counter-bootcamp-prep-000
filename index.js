var deliLine = [];

function takeANumber(deliLine, name) {
  deliLine.push(name);
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`
}

function nowServing(deliLine) {
  if (deliLine.length > 0) {
    var now = `Currently serving ${deliLine[0]}.`
  } else {
    return "There is nobody waiting to be served!"
  }

  deliLine.shift();
  return now
}

function currentLine(line) {
  if (line.length > 0) {
    var lineArray = [`The line is currently: 1. ${line[0]}`]
    var personNumber = 1;

       for (var i = 2; i <= line.length; i++) {
         lineArray.push(` ${i}. ${line[personNumber]}`)
         personNumber++
       }

  return lineArray.join()
  } else {
    return "The line is currently empty."
  }
}
