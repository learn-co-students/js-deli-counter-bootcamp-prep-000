var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length > 0) {
    var x = line.shift()
    return `Currently serving ${x}.`
  }else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length == 0) {
    return "The line is currently empty."
  }
  var names = []
  for (var i = 0; i < line.length; i++) {
    names.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${names.join(', ')}`

}
