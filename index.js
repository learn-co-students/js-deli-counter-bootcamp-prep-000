var katzDeli = []

function takeANumber(Line, name) {
  var n = Line.length
  Line.push(name)
  return `Welcome, ${name}. You are number ${n + 1} in line.`
}

function nowServing(Line) {
  if (Line.length > 0) {
    var current = Line[0]
    Line.shift()
    return `Currently serving ${current}.`
  }
  return "There is nobody waiting to be served!"
}

function currentLine(Line) {
  if (Line.length > 0) {
    var str = ''
    for (var i = 0; i < Line.length - 1; i++) {
      str = str + `${i + 1}. ${Line[i]}, `
    }
    str = str + `${Line.length}. ${Line[Line.length - 1]}`
    return `The line is currently: ${str}`
  }
  return "The line is currently empty."
}