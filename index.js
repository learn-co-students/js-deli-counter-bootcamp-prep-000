var katzDeli = []

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

function currentLine(line) {
  if (line.length === 0){
    return 'The line is currently empty.'
  }
  else {
    let i = 1
    let n = 2
    let lineReport = [`${1}. ${line[0]}`]
    while (line[i]){
      lineReport.push(` ${n}. ${line[i]}`)
      i++
      n++
    }
    return `The line is currently: ${lineReport}`
  }
}