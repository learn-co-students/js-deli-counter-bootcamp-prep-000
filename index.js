function takeANumber(line, name) {
    line.push(name)
    return "Welcome, " + name + ". You are number " + line.length + " in line."
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var phrase = "Currently serving " + line[0] + "."
    line.shift()
    return phrase
     
  }
}

function currentLine(line) {
  var i = 0
  var number = 1
  var array = []
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    while (i < line.length) {
      array[i] = " " + number + ". " + line[i]
      i++
      number++
    }
    return "The line is currently:" + array.toString()
  }
}

