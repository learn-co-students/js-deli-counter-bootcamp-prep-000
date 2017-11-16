var katzDeliLine = []

function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person)
  return `Welcome, ` + person + `. You are number ` + katzDeliLine.length + ` in line.`
}

function nowServing(deliLine) {
  if (deliLine.length > 0) {
    return `Currently serving ${deliLine.shift()}.`
  } else {
    return `There is nobody waiting to be served!`
    }
}
var numberedKatzDeliLine = [];

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    for (let i = 0; i < katzDeliLine.length; i++) {
      numberedKatzDeliLine.push([` ${i + 1}. ${katzDeliLine[i]}`]);
  } return `The line is currently:${numberedKatzDeliLine}`
  } else {
    return `The line is currently empty.`
  }
}
