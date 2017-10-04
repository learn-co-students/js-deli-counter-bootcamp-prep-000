function takeANumber(line, person) {
  line.push(person)
  return `Welcome, ${person}. You are number ${line.length} in line.`
}

function nowServing(line) {

  if (line.length == 0) {
    return "There is nobody waiting to be served!"
    }

  else {
    return `Currently serving ${line.shift()}.`
    }
  }

function currentLine(line) {
  if (line.length == 0) {
    return "The line is currently empty."
  }

  var currentLine = [];
    for (let i = 0; i < line.length; i++) { // iterate over entire line array
      if (i == line.length) { // changes grammar depending on position in line array
        currentLine[i] = ` ${i+1}. ${line[i]}`
      }
      else {
        currentLine[i] = ` ${i+1}. ${line[i]}`
      }
    }

    return `The line is currently:${[currentLine]}` // outputs entire phrase required

}
