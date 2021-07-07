
function takeANumber(deliLine, name) {
   deliLine.push(name);
   return (`Welcome, ${name}. You are number ${deliLine.length} in line.` )
} 

function nowServing(line) {
  if(line.length === 0) {
    return `There is nobody waiting to be served!`
  }
  
  return `Currently serving ${ line.shift() }.`
}

function currentLine(line) {
  if(line.length === 0) return `The line is currently empty.`
  
  var newLine = []
  for (let i = 0; i < line.length; i++) {
    newLine.push(`${ i + 1 }. ${ line[i] }`)
  }
  return `The line is currently: ${ newLine.join(', ') }` 
}
