function takeANumber(currentline, name) {
  currentline.push(name)
  return `Welcome, ${name}. You are number ${currentline.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
  var move = katzDeliLine.shift()
  return `Currently serving ${move}.`
  }
  else if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!"
  }
}

function currentLine(array) {
  var newarray = ""
  for (let i = 0; i < array.length; i++) {
    newarray = newarray + (i + 1) + `. ${array[i]}, `
  }
  if (array.length > 0) {
    return `The line is currently: ${newarray.slice(0, -2)}`
  }
  else if (array.length === 0) {
    return "The line is currently empty."
  }
}
