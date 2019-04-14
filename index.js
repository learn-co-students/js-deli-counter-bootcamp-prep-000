var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 1) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
      return 'There is nobody waiting to be served!'
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 1) {
    var status = 'The line is currently:';
    let i = 0;
    for (let i = 0; i < katzDeliLine.length; i++) {
      status = status.concat(` ${i + 1}. ${katzDeliLine[i]},`)
    }
    return status.slice(0, -1)
  } else {
      return 'The line is currently empty.'
  }
}
