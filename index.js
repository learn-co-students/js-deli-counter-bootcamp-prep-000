function takeANumber(line, name) {
  line.push(name) //adds name to end of array
  return `Welcome, ${name}. You are number ${line.length} in line.`
} //above line interpolates name and number and returns the string

function nowServing(line) {
  if (line.length > 0) { //if there are people in line
    var a = line[0] //set a = to value of the first item in array
    line.shift() //remove the first item from the array
    return `Currently serving ${a}.` //return the shifted value
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  var str = "The line is currently: "
  if (line.length > 0) { //if the array isn't empty
    var i = 0
    while (line.length > 0) { //while the array isn't empty
      str += `${i + 1}. ${line[0]}` //formatting / adding strings
      line.shift()
      if (line.length > 0) {
        str += ", " //formatting / adding strings
      }
      i++; //variable to track number in line
    }
  } else {
    return "The line is currently empty."
  }
  return str
}
