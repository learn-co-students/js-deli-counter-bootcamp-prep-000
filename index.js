var deli = [];

function takeANumber(deli, name) {
  //return current line of people and name
  deli.push(name)
  return `Welcome, ${name}. You are number ${deli.length} in line.`
}

function nowServing(deli) {
  if(deli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var first = deli.shift()
    return `Currently serving ${first}.` 
  }
}

function currentLine(deli) {
  if(deli.length === 0) {
    return "The line is currently empty."
  } else {
    return `The line is currently: 1. ${deli[0]}, 2. ${deli[1]}, 3. ${deli[2]}`
  }
}