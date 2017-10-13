var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(katzDeliLine) {
  var retval = 'The line is currently'
  if (katzDeliLine.length) {
    for (let i in katzDeliLine) {
      retval += `${i > 0 ? ',' : ':'} ${parseInt(i)+1}. ${katzDeliLine[i]}`
    }
    return retval
  } else {
    return retval + ' empty.'
  }
}
