function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length > 0) {
    var a = line[0]
    line.shift()
    return `Currently serving ${a}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  var str = "The line is currently: "
  if (line.length > 0) {
    var i = 0
    while (line.length > 0) {
      str += `${i + 1}. ${line[0]}`
      line.shift()
      if (line.length > 0) {
        str += ", "
      }
      i++;
    }
  } else {
    return "The line is currently empty."
  }
  return str
}
