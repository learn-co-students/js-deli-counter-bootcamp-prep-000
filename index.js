let katzDeli = [];

function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  let numsAndNames = []
  for (let i = 0; i < line.length; i++) {
    numsAndNames.push(`${i+1}. ${line[i]}`)
  }
  if (numsAndNames.length == 0) {
    return "The line is currently empty."
  }
  else {
    return `The line is currently: ${numsAndNames.join(', ')}`
  }  
}