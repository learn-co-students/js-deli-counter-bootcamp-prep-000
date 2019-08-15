
function takeANumber(array,name) {
  array.push(name)
  return(`Welcome, ${name}. You are number ${array.length} in line.`)
}

function nowServing(array) {
  if (array.length === 0) {
    return ("There is nobody waiting to be served!")
  } else {
    var name = (`Currently serving ${array[0]}.`)
    array.shift()
    return name
  }
}

function currentLine(array) {
  if (array.length === 0) {
    return ("The line is currently empty.")
  } else {
      var string = "The line is currently:"
      for (var arrCount = 1; arrCount <= array.length; arrCount++) {
      string = string + (` ${arrCount}. ${array[arrCount - 1]},`)
      }
    }
    return (string.slice(0,-1))
}