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
  for (let i = 0; i < line.length; i++){
    (peopleOnLine +=  `${i}. ${line[i]} `)
    }
    return `The line is currently ${peopleOnLine} `
}
  else {
  return "The line is currently empty."
  
  }
}