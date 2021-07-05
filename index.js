function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!'
  }
  
  var name = line.slice(0,1)
  line.shift()
  return `Currently serving ${name}.`
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  
  let i = 0
  var message = `The line is currently: ${i + 1}. ${line[i]}`
  i++
  
  while (i < line.length) {
    message = message + `, ${i + 1}. ${line[i]}`
    i++
  }
  
  return message
}