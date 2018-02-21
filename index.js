function takeANumber (line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.indexOf(name) + 1} in line.`
}

function nowServing (line) {
  if (line.length == 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var nowServingName = line.shift()
    return `Currently serving ${nowServingName}.`
  }
}

function currentLine (line) {
  if (line.length == 0) {
    return `The line is currently empty.`
  } else {
    var placesInLine = [];
    for (var i = 0; i < line.length; i++) {
      placesInLine.push(`${i + 1}. ${line[i]}`)
    }
    return `The line is currently: ${placesInLine.join(`, `)}`
  }
}
