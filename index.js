function takeANumber(array, name) {
    array.push(name)
    var n = array.indexOf(name) + 1
    return "Welcome, " + name + ". You are number " + n + " in line."
 }

function nowServing(array) {
  var number = array.shift()
  if (!array.length) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + number + "."
  }
}

function currentLine(line) {
  var phrase = "The line is currently: "
  if (!line.length) {
    return "The line is currently empty."
  } else {
    for (var i = 0; i < line.length; i++) {
        var customer = line[i] + ", "
        var n = i + 1 + ". "
        phrase += n + customer
     }
  }
  return phrase.slice(0,phrase.length - 2)
}
