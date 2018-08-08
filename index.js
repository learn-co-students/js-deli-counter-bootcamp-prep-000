function takeANumber(line, name){
 line.push(`${name}`)
 return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length < 1) {
    return "There is nobody waiting to be served!" }
  else {
    return `Currently serving ${line.shift()}.`
  }}

function currentLine(line) {
  var newLine = ("")
  if (line.length < 1) {
    return "The line is currently empty."
  }
  else {
    newLine = `The line is currently: `
    for (let i = 0; i < line.length; i++) {
      console.log(i)
      newLine = newLine + (i+1) + ". " + line[i] + ", " 
    }
    newLine = newLine.slice(0, newLine.length-2)
  }
  return newLine 
} 
