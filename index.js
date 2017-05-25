var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine, name){
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
      return `Currently serving ${katzDeliLine.shift()}.`
    }
}

function currentLine(katzDeliLine){
  const line = []
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  } else for (let i = 0, l = katzDeliLine.length; i < l; i++){
    line.push(`${i + 1}. ${katzDeliLine[i]}`)
    }
    return `The line is currently: ${line.join(', ')}`
}