function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  let line = 'The line is currently'
  if (katzDeliLine.length > 0) {
    line = `${line}:`
    for (let i = 0; i < katzDeliLine.length; i++) {
      line = `${line} ${i+1}. ${katzDeliLine[i]}${i<katzDeliLine.length-1?',':''}`
    }
  } else {
    line = `${line} empty.`
  }
  return line
}
