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
    var current = deli.shift()
    return `Currently serving ${current}.` 
  } else {
    return "There is nobody waiting to be served!"
  }
}

//return string if empty
//otherwise, say position first three people in line are
function currentLine(deli) {
  if(deli.length === 0) {
    return "The line is currently empty."
  } else {
    var newLine = [];
    for(var i =0; i < deli.length; i++) {
      newLine.push(`${i+1}. ${deli[i]}`)
    }
  }
  return "The line is currently: " + newLine.join(", ")
}