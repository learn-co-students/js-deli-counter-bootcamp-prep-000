function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length > 0) {
    var firstInLine = line[0]
    line.shift()
    return `Currently serving ${firstInLine}.`
  }
  else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var lineIntro = ['The line is currently:']
    var linePeople = []
    var i
    for (i = 0; i < line.length; i++) {
      linePeople.push(` ${i + 1}. ${line[i]}`) 
    }
    return `${lineIntro}${linePeople.toString()}`
  }
  else {
    return 'The line is currently empty.'
  }
}