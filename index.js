function takeANumber(array, name) {
  array.push(name)
  return `Welcome, ${name}. You are number ${array.indexOf(name) + 1} in line.`
}

function nowServing(array) {
  if (array.length == 0) {
    return "There is nobody waiting to be served!"
  }else {
    return `Currently serving ${array.shift()}.`
  }
}

function currentLine(array) {
  if (array.length == 0) {
    return "The line is currently empty."
  } else {
    /*var ans = "The line is currently: "
    for (var i = 0; i < array.length; i++) {

    }*/

    return `The line is currently: 1. ${array[0]}, 2. ${array[1]}, 3. ${array[2]}`
  }
}
