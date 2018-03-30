/// PROGRAM TO HANDLE A STORE'S LINE. ///

// Initialize the line of the 'STORE'
var katzDeli = []

// Give status of the line whether empty or for a flood of guests
function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  let listNames = []
  for (let i = 0; i < line.length; i++) {
      listNames.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${listNames.join(', ')}`
}
// Adds guest to the back of the line (katzDeli array) & returns their place in line.
function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

// Announces who is being served unless there isn't anyone on line.
function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}
