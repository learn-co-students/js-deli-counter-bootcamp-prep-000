function takeANumber(line, name) {
  line[line.length] = name
  return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing(line) {
  if (line.length > 0) {
    return `Currently serving ${line.shift()}.`
    return line
  }
  else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var i = 0
    var text = `The line is currently: `
    while ( i < line.length - 1) {
      text += `${i+1}. ${line[i]}, `
      i++
    }
    return text + `${line.length}. ${line[line.length-1]}`
  } else {
    return "The line is currently empty."
  }
}


//"Welcome, Ada. You are number 1 in line."
