function takeANumber(katzDeliLine, nextName) {
  katzDeliLine.push(nextName);
  
  return (`Welcome, ${nextName}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(name) {
  if (name.length === 0) {
    return (`There is nobody waiting to be served!`)
  }
  
  return (`Currently serving ${name.shift()}.`)
}

function currentLine(line) {
  if (line.length === 0) {
    return (`The line is currently empty.`)
  }
  
  var numAndName = (`The line is currently: `)
  
  for (let i = 0; i < line.length; i++) { 
    numAndName = numAndName + (i + 1) + `. ${line[i]}, `
  } 
  return numAndName.slice(0, -2)
}  