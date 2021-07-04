function takeANumber (currentLine, name){
    currentLine.push(name)
    return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

function nowServing(currentLine) {
if (!currentLine.length) {
return "There is nobody waiting to be served!"
}
return `Currently serving ${currentLine.shift()}.`

}

function currentLine(currentLine){
  if (!currentLine.length){
    return "The line is currently empty."
  }
  const lineNumberName = []
  for (let i = 0, l = currentLine.length; i < l; i++){
    lineNumberName.push(`${i + 1}. ${currentLine[i]}`)
  }
  return `The line is currently: ${lineNumberName.join(', ')}`
}








