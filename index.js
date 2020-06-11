function takeANumber(line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`
}

function currentLine(line){
  if(!line.length){
    return "The line is currently empty."
  }
  var namenumber = []

  for (let a = 0, b = line.length; a < b; a++) {
    namenumber.push(`${a+1}. ${line[a]}`)
  } return `The line is currently: ${namenumber.join(', ')}`
}
