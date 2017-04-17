var katzDeli = [];
function takeANumber(line, name){
    line.push(name)
    return `Welcome, ${name}. You are number ${line.length} in line.`
  }

  function nowServing(line){
    if (line.length > 0) {
    return `Currently serving ${line.shift()}.`
} 
    else {
    return `There is nobody waiting to be served!`
}
  }

  function currentLine(line){
    const lineNumber = []
    for (let i = 0, l = line.length; i < l; i++) {
    lineNumber.push(`${i + 1}. ${line[i]}`)
  }
    if (line.length < 1){
      return `The line is currently empty.`
    }
    else{
      return `The line is currently: ${lineNumber.join(', ')}`
    }
  }