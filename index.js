function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.splice(0, 1)}.`
  }
}

function currentLine(katzDeliLine) {
  let arr = []
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (let i = 0, len = katzDeliLine.length; i < len; i++) {
      arr.push(` ${i + 1}. ${katzDeliLine[i]}`)
    }
    return "The line is currently:" + arr   // 1. Ada, 2. Grace"
  }
}
