var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
  if (katzDeli.length >= 1) {
    var current = katzDeli[0]
    katzDeli.shift()
    return `Currently serving ${current}.` 
  }
  else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine(line) {
  if (line.length === 1) {
    return `The line is currently: 1. ${line}`
  }
  var newLine = []
  if(line.length > 1) {
    for (var i = 0; i < line.length; i++) {
      newLine += `${i + 1}. ${line[i]}, `
    }
    newLine = newLine.slice(0, -2);
    return "The line is currently: " + newLine
  }
  else {
    return "The line is currently empty."
  }
}