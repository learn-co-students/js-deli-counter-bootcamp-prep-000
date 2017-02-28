var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
  if (katzDeli.length == 0) {
    return "There is nobody waiting to be served!"
  } else return `Currently serving ${katzDeli.shift()}.`
  }

function currentLine(line) {
  var i = 0
  var current = "The line is currently: "
  if (line.length == 0) {
    return "The line is currently empty."
  } else while (i < line.length) {
    current = current + `${i + 1}. ${line[i]}`
    i++
    if (i != line.length) {
      current = current + ", "
    }
  }
    return current
}
