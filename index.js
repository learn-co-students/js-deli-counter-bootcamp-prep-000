var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  katzDeli.push(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)

  return katzDeli.pop()
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

var line = []
function currentLine(katzDeliLine) {
  let i= 0
  while (i < katzDeliLine.length) {
    line.push(` `+[i+1]+`. `  + katzDeliLine[i])
    i++;
  }
  if (katzDeliLine.length > 0) {
    return `The line is currently:${line}`
  } else{
    return "The line is currently empty."
  }
}
