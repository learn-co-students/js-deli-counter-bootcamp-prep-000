var line = []

function takeANumber(line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if (line.length == 0){
    return "There is nobody waiting to be served!"
  } else{
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line){
  if (line.length == 0){
    return "The line is currently empty."
  } else{
    var currLine = []

    for (let i = 0, j = 1; i < line.length; i++, j++){
      currLine.push(`${j}. ${line[i]}`)
    }
  }
  return `The line is currently: ${currLine.join(", ")}`
}
