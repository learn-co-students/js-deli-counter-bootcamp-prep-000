var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  var position = katzDeliLine.length + 1
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return  "There is nobody waiting to be served!"
  } else {
    let current = katzDeliLine[0];
    katzDeliLine.shift()
    return `Currently serving ${current}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return  "The line is currently empty."
  } else {
    let newString = `The line is currently: 1. ${katzDeliLine[0]}`;
    for (let i = 1; i < katzDeliLine.length; i++) {
      newString = newString + `, ${i+1}. ${katzDeliLine[i]}`
    }
    return newString;
  }
}