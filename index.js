
function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing (line) {
  while (line.length>0){
    return `Currently serving ${line.shift()}.`
  }

  return "There is nobody waiting to be served!"
}


function currentLine (katzDeliLine) {
  if(katzDeliLine.length>0) {
    var string = ""
    for (let i=0; i<katzDeliLine.length; i++) {
      string = string + `${i+1}. ${katzDeliLine[i]}, `
    }
    string=string.slice(0,-2)
    return `The line is currently: ${string}`
  }
  else {
  return `The line is currently empty.`}
}
