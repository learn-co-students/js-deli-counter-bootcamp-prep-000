var deli = [];

//adds a person to the end of the line
//return current line of people and name

function takeANumber(deli, name) {
  deli.push(name)
  return `Welcome, ${name}. You are number ${deli.length} in line.`
}


 //returns the line is empty if no one is in line
 //otherwise, make announcement 
 
function nowServing(deli) {
  if(deli.length > 0) {
    var first = deli.shift()
    return `Currently serving ${first}.` 
  } else {
    
  }return "There is nobody waiting to be served!"
}

function currentLine(deli) {
  if(deli.length === 0) {
    return "The line is currently empty."
  } else {
    return `The line is currently: 1. ${deli[0]}, 2. ${deli[1]}, 3. ${deli[2]}`
  }
}