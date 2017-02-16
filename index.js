function takeANumber(katzDeli, otherDeli) {
  katzDeli.push(otherDeli)
  return `Welcome, ${otherDeli}. You are number ${katzDeli.length} in line.`
}

function nowServing(otherDeli) {

  if (otherDeli.length === 0) {
  return `There is nobody waiting to be served!`
}
  return `Currently serving ${otherDeli.shift()}.`
}

function currentLine(line) {

  if (line.length === 0) {
    return `The line is currently empty.`
  }

  const placeAndName = []
  for (let i = 0; i < line.length; i++) {
    placeAndName.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${placeAndName.join(', ')}`
}
