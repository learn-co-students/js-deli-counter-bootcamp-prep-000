function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`

}

function nowServing(line) {
  var name = line.shift()

  return name ? `Currently serving ${name}.` : `There is nobody waiting to be served!`
}

function currentLine(line) {
  var strLine = "The line is currently empty."

  if (line.length > 0) {
    strLine = "The line is currently: "

    for (var i = 0; i < line.length; i++) {
      strLine = i < line.length - 1 ? strLine + `${i + 1}. ${line[i]}, ` : strLine + `${i + 1}. ${line[i]}`
    }
  }

  return strLine
}
