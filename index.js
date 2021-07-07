var katzDeli = []

function takeANumber(line, name) {
  line.push(name)
  
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line, name) {
  if (line.length > 0) {
    return `Currently serving ${line.shift()}.`
  }
    else {
      return "There is nobody waiting to be served!"
    }
}

function currentLine(line) {
if (line.length === 0) {
  return "The line is currently empty."
}
  
var deliLine = []

  for (let i = 0, l = line.length; i < l; i++ ) {
    
    deliLine.push(`${i + 1}. ${line[i]}`)
    
  }
    return `The line is currently: ${deliLine.join(", ")}`
    
}