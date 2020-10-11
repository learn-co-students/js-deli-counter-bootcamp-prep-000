var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
  var current = katzDeliLine[0];
  katzDeliLine.shift()
  return `Currently serving ${current}.`;
  }
}

function currentLine(katzDeliLine) {
  var str = "The line is currently: ";
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (let i = 0; katzDeliLine.length - i > 0; i++) {
      str += `${i + 1}. ${katzDeliLine[i]}${katzDeliLine.length - i > 1 ? `, ` : ``}`
    }
  }
  return str
}