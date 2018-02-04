var katzDeli = []

function takeANumber(deliLine, name) {
  deliLine.push(name);
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${deliLine.shift(0)}.`
  }
}

function currentLine (deliLine) {
  const katzDeliLine = [];
  if (deliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (var i = 0; i <deliLine.length; i++) {
      katzDeliLine.push(` ${i + 1}. ${deliLine[i]}`)
    }
  }
  return `The line is currently:${katzDeliLine}`
}
