

function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.indexOf(name) + 1} in line.`;
}

function nowServing(line) {
  var name = line.shift()
  if (name) {
    return `Currently serving ${name}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  var returnStr = "The line is currently";
  if (line.length === 0) {
    return returnStr + ' empty.'
  }
  returnStr = returnStr + ": "
  for (let i = 0; i < line.length; i++) {
    if (i < line.length - 1) {
    returnStr = returnStr + `${i + 1}. ${line[i]}, `
  } else {
    returnStr = returnStr + `${i + 1}. ${line[i]}`
  }
  }
  return returnStr
}
