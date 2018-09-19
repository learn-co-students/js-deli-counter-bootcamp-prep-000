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
  var newLine = ["The line is currently:"]
  var people = line.join(", ")
  if (!line.length) {
    return "The line is currently empty."
  } else {
    for (let n = 0; n < people.length; n++) {
    newLine.push(` ${n + 1}. ${people[n]}`)
    console.log(newLine)
  }

  }
}

//people = line.join(", ")






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
