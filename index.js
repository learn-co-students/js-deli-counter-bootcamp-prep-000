function takeANumber (line,name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.indexOf(name) + 1} in line.`
}

function nowServing (line) {
  var i = line.length
  if ( i === 0 ) {
    return "There is nobody waiting to be served!"
  }
  else {
    var newLine = line[0]
    line.shift()
    return `Currently serving ${newLine}.`
  }
}

function currentLine (line) {
  let i = 0
  var newLine = []
  if ( line.length === 0 ) {
    return "The line is currently empty."
  }
  else {
    while ( i < line.length ) {
    newLine.push(` ${i+1}. ${line[i]}`)
    i++
    }
  }
  return `The line is currently:${newLine}`
}