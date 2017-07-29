function takeANumber(deli, name) {
  deli.push(name)
  return `Welcome, ${name}. You are number ` + deli.length + ` in line.`
}

function nowServing(deli) {
  if (deli.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    let person = deli.shift()
    return `Currently serving ${person}.`
  }
}

function currentLine(line) {
  if (line.length==0) {
    return "The line is currently empty."
  }

  let currLine = "The line is currently: "
  for (let i = 0; i < line.length; i++) {
    if (i == line.length - 1){
      currLine = currLine + (i + 1) + ". " + line[i]
    }
    else {
      currLine = currLine + (i + 1) + ". " + line[i] + ", "
    }
  }

  return currLine
}
