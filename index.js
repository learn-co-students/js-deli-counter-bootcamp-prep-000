function takeANumber(line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if (line.length > 0) 
  return `Currently serving ${line.shift()}.`
  else
  return `There is nobody waiting to be served!`
}
function currentLine(line){
  var s = `The line is currently: `
  var newLine = []
  if (line.length === 0)
  return "The line is currently empty."
  else{
    for (let i = 0; i < line.length; i++){
      newLine[i] = `${[i+1]}. ${line[i]}`
    }
    s += newLine.join(`, `)
    return s
  }
    
  
}