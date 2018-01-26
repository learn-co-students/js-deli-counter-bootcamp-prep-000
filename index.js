var katzDeli = []
function takeANumber(array, person) {
  array.push(person)
  return `Welcome, ${person}. You are number ${array.length} in line.`
}
function nowServing(array) {
  if (array.length > 0) {
    let current = array.shift()
    return `Currently serving ${current}.`
  }
  else {
    return 'There is nobody waiting to be served!'
  }
}
function currentLine(line) {
  let current = []
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      current.push(` ${i+1}. ${line[i]}`)
    }
    return `The line is currently:${current}`
  }
  else {
    return 'The line is currently empty.'
  }
}
