//takes two arguments, one for an array and one for a person's name
function takeANumber(katzDeliLine, newPerson) {
//we need to use a method that will add a person to back of the array when called as argument
  katzDeliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line, count) {
  if (line.length === 0) {
    return `There is nobody waiting to be served!`
  } else {
    return `Currently serving ${line.shift()}, customer number ${count}`
  }
}

//take argument line
//create object using that array
//return string The line is currently: 1. Ada, 2. Grace
//if no one is online return string "The line is currently empty."
  //var newArray = []this equals empty array
function currentLine(line) {
  var newArray = []
  if (line.length === 0) {
    return `The line is currently empty.`
  } else {
    for (var i = 0; i < line.length; i++) {
      newArray.push(`${i + 1}. ${line[i]}`)
    }
  }
  return `The line is currently: ${newArray.join(", ")}`
}
