function takeANumber(line,name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing(line,name){
  for (let i = 0; i < line.length; i++){
  return `Currently serving ${line.shift(name)}.`
  }
  return "There is nobody waiting to be served!"
}
function currentLine(line, name){
var peopleOnLine = ""
if (line.length !== 0){
  for (let i = 0; i < line.length - 1; i++){
    (peopleOnLine += `${i + 1}. ${line[i]}`)
    }
    
    return `The line is currently: ${peopleOnLine} ${line.length}. line[line.length]`
}
  else {
  return "The line is currently empty."
  
  }
}