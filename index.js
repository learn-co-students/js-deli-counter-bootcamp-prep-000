var katzDeli = []

function takeANumber(katzDeli, name){
  katzDeli.push(name)
  return (`Welcome, ${name}. You are number ` + katzDeli.length + ` in line.`)
}

function nowServing(line){
  if (line.length < 1){
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + line.shift() + "."
  }
}

function currentLine(line){
var lineDescription = ""
if (line.length < 1){
  return "The line is currently empty."
} else {
  for (var i = 0; i < line.length-1; i++){
    lineDescription += (i)+1 + ". "+ line[i] + ", "
  }
lineDescription += (i)+1 + ". "+ line[i]
}
return "The line is currently: " + lineDescription
}
