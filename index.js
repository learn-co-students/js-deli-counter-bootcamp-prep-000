var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
 /* const katzDeliLineClone = Object.assign({}, katzDeliLine) */
  const katzDeliLineClone = katzDeliLine.slice(0)
  katzDeliLine.shift()
  if (katzDeliLine.length === 0) {
      return `There is nobody waiting to be served!`
  } else {
      return `Currently serving ${katzDeliLineClone[0]}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`
  } else {
  const numbersAndNames = []
    numbersAndNames.push(`1. ${katzDeliLine[0]}`)
  for (let i = 1, l = katzDeliLine.length; i < l; i++) {
    numbersAndNames.push(` ${i + 1}. ${katzDeliLine[i]}`)
  }
  return `The line is currently: ${numbersAndNames}`
  }
}