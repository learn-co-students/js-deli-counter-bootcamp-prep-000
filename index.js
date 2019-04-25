function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzLine) {
  if (katzLine.length == 0) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${katzLine.shift()}.`
}

function currentLine(linePeople) {
  if (linePeople.length == 0) {
    return "The line is currently empty."
  }

  var str = "The line is currently:"
  for (var i = 0; i < linePeople.length; i++){
    if (i == 0) {
      str+= ` ${i + 1}. ${linePeople[i]}`

    } else {
      str+= `, ${i + 1}. ${linePeople[i]}`

    }
  }
  return str
}
