function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length > 0) {
  var serve = line[0]
  line.shift()
  return `Currently serving ${serve}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  var print = "The line is currently"
  if (line.length === 0) {
    return print + " empty."
  }
  else {
    print += ": "
    for(let i = 0; i < line.length; i++) {
      print += (i+1) + ". " + line[i]
      if (i !== line.length-1)
        print += ", "
    }
  }
  return print
}
