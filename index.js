function takeANumber(array, name) {
  array.push(name)
  return `Welcome, ${name}. You are number ${array.length} in line.`
}

function nowServing(array) {
  if (array.length > 0)
    result = `Currently serving ${array[0]}`
    array.shift()
    return result
  else
    return "There is nobody waiting to be served!"
}

function currentLine(array) {
  if (array.length > 0)
    result = []
    for (n = 1; n < array.length, n++) {
      result.push(`The line is currently: ${n}. ${array[n-1]}`)
      return result
    }
  else
    return "The line is currently empty."
}
