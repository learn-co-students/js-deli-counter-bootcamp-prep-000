function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return `There is nobody waiting to be served!`
  }
  else {
    return `Currently serving ${deliLine.shift()}.`
  }
}

function currentLine(array) {
  if (array.length === 0) {
    return `The line is currently empty.`
  }
  else {
    var lineString = "The line is currently: "
    for (let i = 0; i < array.length; i++) {
      if (i === (array.length - 1)) {
        lineString = lineString + `${i + 1}. ${array[i]}`
      }
      else {
        lineString = lineString + `${i + 1}. ${array[i]}, `
      }
    }
    return lineString
  }
}
