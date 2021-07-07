var katzDeli = [];

function takeANumber(line, newCustomer) {
  line.push(newCustomer)
  if (line != []) {
    var i = line.indexOf(newCustomer) + 1
    return `Welcome, ${newCustomer}. You are number ${i} in line.`
  } else {
      return `Welcome, ${newCustomer}. You are number 1 in line.`
  }
}

function nowServing(line) {
if (line.length == 0) {
  return "There is nobody waiting to be served!"
} var person = line[0]
  line.splice(0,1)
  return `Currently serving ${person}.`
}

function currentLine(line) {
  if (line.length == 0) {
    return "The line is currently empty."
  }
  var newLine = []
  for (var i = 0; i < line.length; i++) {
    newLine.push(i+1 + ". " + line[i])
  }
  newLine = newLine.join(", ")

  return "The line is currently: " + newLine

}
