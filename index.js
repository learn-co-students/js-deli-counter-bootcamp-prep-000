let katzDeliLine = ['Ada', 'Grace']

// #1 takeANumber

function takeANumber (katzDeliLine, newName) {
  console.log('Welcome', newName, 'You are number', i+1, 'in line.')
}

// #2 nowServing

function nowServing (katzDeliLine) {
  if (Array.isArrary(katzDeliLine) || katzDeliLine.length) {
  return katzDeliLine[0]
  katzDeliLine.shift()
  } else {
  console.log('There is nobody waiting to be served!')
  }
}

// #3

function currentLine(katzDeliLine) {
  if (Array.isArrary(katzDeliLine) || katzDeliLine.length) {
  console.log('The line is currently:', katzDeliLine.length)
  } else {
  console.log('The line is currently ')
  }
}
