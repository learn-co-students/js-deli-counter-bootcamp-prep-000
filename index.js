var katzDeli = [];

function takeANumber(katzDeli, name) {
      katzDeli.push(name)
      return "Welcome, " + name + ". You are number " + katzDeli.length + " in line."
}

function nowServing(deliLine) {
    if (deliLine.length === 0) {
      return 'There is nobody waiting to be served!'
    } else {
      return "Currently serving " + deliLine.shift() + "."
    }
}

var array = ["The line is currently:"];
function currentLine(line) {
  for (let i = 0; i < line.length; i++) {
    if (line.length >= 0) {
      var string = (i + 1) + ". " + line[i] + ","
      array.push(string)
    } else {
      var otherStr = 'The line is currently empty.'
      array.push(otherStr)
    }
  }
  return array.join(" ").slice(0, -1)
}
