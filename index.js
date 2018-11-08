function takeANumber (line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
  //return message
}

function nowServing (line) {
  if (line.length >= 1) {
    var firstPerson = line[0]
    line.shift();
    return `Currently serving ${firstPerson}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine (line) {
  var message = "The line is currently"
  if (line.length >= 1) {
    message += ':'
    for(var i = 0; i < line.length; i++) {
      message += ` ${i+1}. ${line[i]},`
    }
    return (message.slice(0, -1))
  } else {
    return (message + ' empty.')
  }
}
