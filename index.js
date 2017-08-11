var katzDeli = []

function takeANumber(line, customer) {
  line.push(customer)
  return "Welcome, " + customer + ". You are number " + (line.indexOf(customer)+1) + " in line."
}

function nowServing(line) {
  if(line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var person = line.shift()
    return "Currently serving " + person + "."
  }
}

function currentLine(line) {
  var str = "The line is currently: "
  if(line.length !== 0) {
    for (var i = 0; i < line.length; i++) {
      str = str + (i+1) + ". " + line[i]
      if(i < line.length - 1) {
        str += ", "
      }
    }
    return str
  }
  return "The line is currently empty."
}
