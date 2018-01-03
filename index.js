let katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  let num = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${num} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`
  } else if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  let lineName = [];

  katzDeliLine.forEach((name, index)=> {
    lineName.push(`${katzDeliLine.indexOf(name) + 1}. ${name}`)
  })

  if (katzDeliLine.length > 0){
    return `The line is currently: ${lineName.join(', ')}`
  } else if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
}
