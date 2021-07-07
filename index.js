function takeANumber(katzDeliLine, name){
  while (katzDeliLine){
    katzDeliLine.push(name)
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  }  
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!'
  }
  else {
    while (katzDeliLine.length>0){
      return `Currently serving ${katzDeliLine.shift()}.`
    }
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0){
    return 'The line is currently empty.'
  }
  else {
    let i = 1
    let n = 2
    let lineReport = [`${1}. ${katzDeliLine[0]}`]
    while (katzDeliLine[i]){
      lineReport.push(` ${n}. ${katzDeliLine[i]}`)
      i++
      n++
    }
    return `The line is currently: ${lineReport}`
  }
}