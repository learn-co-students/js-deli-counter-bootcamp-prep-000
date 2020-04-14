var katzDeliLine = [];

function takeANumber(deli, person) {
  deli.push(person)
  return `Welcome, ${person}. You are number ${deli.length} in line.`
}

function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!"
  }

  var customer = line.shift()
  return `Currently serving ${customer}.`

}

function currentLine(line) {
  if (line.length == 0) {
    return "The line is currently empty."
  }

  var result = "The line is currently: "
  for (let i = 0; i < line.length; i++) {
    var addPerson =`${i+1}. ${line[i]}`
    if (i == line.length - 1) {
      result += addPerson
      break;
    }
    result += addPerson + ', '
  }
  return result

}
