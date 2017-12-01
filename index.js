var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
};

function nowServing(line) {
  if(!line.length) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`
}

function currentLine(line) {
  if(!line.length) {
    return "The line is currently empty."
  }
  const namesAndNumbers = [];

  for(let i = 0, l = line.length; i < l; i++) {
    namesAndNumbers.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${namesAndNumbers.join(", ")}`
}
