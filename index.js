//takeANumber
function takeANumber(line, name) {
  line.push(name)
  return (`Welcome, ${name}. You are number ${line.length} in line.`)
}

//nowServing
function nowServing(line, name) {
  if (line.length === 0){
    return ("There is nobody waiting to be served!")
}
else {
  return (`Currently serving ${line.shift()}.`)
}
}

//currentLine
function currentLine(line) {
  if (line.length === 0){
    return('The line is currently empty.')
  }
  const result = []
  for(let x = 0, y = line.length; x < y; x++) {
    result.push(`${x + 1}. ${line[x]}`)
  }
  return (`The line is currently: ${result.join(', ')}`)
}