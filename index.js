function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing (line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  var index = 0
  var result = "The line is currently: "
  if (line.length === 0) {
    return "The line is currently empty."
  }
  while (index < line.length - 1) {
       result += `${index + 1}. ${line[index]}, `
       index ++
    }
  return result + `${line.length}. ${line[line.length - 1]}`
  }
