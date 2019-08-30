var katzDeliLine = []

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine) {
  let l = katzDeliLine.length
  
  if (l === 0) {
    return 'The line is currently empty.'
  } 
  
  let line = 'The line is currently: '
  
  for (let i = 0; i < l; i++){
    line = line + `${i+1}. ${katzDeliLine[i]}`
    if (i < (l - 1)) {
      line = line + `, `
    }
  }
  return line
}