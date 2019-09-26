function takeANumber (line,person) {
  line.push(`${person}`)
  return(`Welcome, ${person}. You are number ${line.length} in line.`)
} 

function nowServing (line) {
  let i=0
  while (i<line.length) {
    i++
  }
  if (line.length === 0) {
    return("There is nobody waiting to be served!")
  }
  else
    return(`Currently serving ${line.shift()}.`)
}

function currentLine (line) {
  let j=0
  while (j<line.length) {
    line.push(` `+[j+1]+`. `+line[j])
    j++
  }
  if (line.length === 0) {
    return "The line is currently empty."
  }
  else
    return (`The line is currently:`+line)
}