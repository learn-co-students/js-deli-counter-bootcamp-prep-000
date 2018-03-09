var katzDeli = [];
function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty."
  }
  const numbersAndName = []
  for (let i=0, l = line.length; i < l; i++){
    numbersAndName.push(`${i+1}. ${line[i]}`)
  }
  return `The line is currently: ${numbersAndName.join(', ')}`
  }
  
function takeANumber(line,name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!"
  }
  return`Currently serving ${line.shift()}.`
}