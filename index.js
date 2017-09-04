var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return 'There is nobody waiting to be served!'
  } else {
    const personServing = katzDeliLine.shift()
    return `Currently serving ${personServing}.`
  }
}

function currentLine(katzDeliLine) {
  let lineData = 'The line is currently: '

  if (katzDeliLine < 1) {
    return 'The line is currently empty.'
  } else {
    for (let i = 0; i < katzDeliLine.length; i++ ) {
      lineData += `${i + 1}. ${katzDeliLine[i]}`
      lineData += (i < katzDeliLine.length - 1) ? ', ' : ''
    }
    return lineData
  }
}
