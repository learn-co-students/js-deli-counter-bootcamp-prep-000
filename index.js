function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(array) {
  var newArray = ["The line is currently: "]
  if (array.length === 0) {
    return "The line is currently empty."
  }
  for (var i = 0; i < array.length; i++) {
    newArray[0] = newArray[0] + `${i + 1}. ${array[i]}, `
  }
  var finalArrayString = newArray[0].substr(0, newArray[0].length - 1)
  finalArrayString = finalArrayString.substr(0, finalArrayString.length - 1)
  newArray[0] = finalArrayString
  return newArray[0]
}
