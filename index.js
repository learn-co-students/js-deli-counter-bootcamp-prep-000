function takeANumber(array, name) {
  array.push(name)
  return `Welcome, ${name}. You are number ${array.length} in line.`
}

function nowServing(array) {
  if (array.length > 0) {
    var result = `Currently serving ${array[0]}.`
    array.shift()
    return result
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(array) {
  if (array.length > 0) {
    var result = "The line is currently: "
    for (var n = 1; n <= array.length; n++) {
      result+= n + ". " + array[n-1] + ", "
    }
    return result.substr(0, result.length - 2)
  }
  else {
    return "The line is currently empty."
  }
}
