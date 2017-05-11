function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(deliLine) {
  if (deliLine[0] === undefined) {
    return "There is nobody waiting to be served!"
  }
  let nowServing = deliLine[0]
  deliLine.shift()
  return `Currently serving ${nowServing}.`
}

function currentLine(deliLine) {
  if (deliLine[0] === undefined) {
    return "The line is currently empty."
  }
  let currentLine = "The line is currently: "
  for (let i = 0; i < deliLine.length; i++) {
    let end = i === deliLine.length - 1 ? "" : ", "
    currentLine += `${i + 1}. ${deliLine[i]}${end}`
  }
  return currentLine
}
