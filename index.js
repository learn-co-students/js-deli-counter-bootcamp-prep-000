function takeANumber(line, name) {
  line.push(name)
  var i = line.length
  return `Welcome, ${name}. You are number ${i} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return ("There is nobody waiting to be served!")
  } else {
    return (`Currently serving ${line.shift()}.`)
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return ("The line is currently empty.")
  } else {
    var i = 0
    var output = []
    while (i < line.length) {
      output[i] = ' ' + [i + 1] + '. ' + line[i]
      i++
    }
  }
  return (`The line is currently:${output}`)
}