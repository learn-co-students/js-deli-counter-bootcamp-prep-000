function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  return line.length ? line.shift() : "There is nobody waiting to be served!"
}

function currentLine(line) {
  var msg = "The line is currently: "
  for (var i = 0; i < line.length; i++) {
    msg += `${i + 1}. ${line[i]}${i + 1 === line.length? '' : ', '}`
  }
  return msg
}
