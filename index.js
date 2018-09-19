var katzDeliLine = [];

function takeANumber(line, person) {
  line.push(person)
  return `Welcome, ${person}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  var people = []
  if (!line.length) {
    return "The line is currently empty."
  } else {
    for (let n = 0; n < line.length; n++) {
    people.push(`${n + 1}. ${line[n]}`)
  }
    return("The line is currently: " + people.join(", "))
  }
}


/*var katzDeli = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`

}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  } else {
    var lineup = []
      for (let n = 0; n < line.length; n++)
        lineup.push(`${n + 1}. ${line[n]}`)
        }
  return `The line is currently: ${lineup.join(', ')}`
}
*/
