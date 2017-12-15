var KatzDeliLine = []

function takeANumber(line,name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`
}

function currentLine(line){
  if (line.length === 0) {
    return "The line is currently empty."
  }

  if (line.length == 1){
    return `Currently serving line[0]`
  }
  
  var outStr = ""
  for (var i = 0 ; i < line.length ; i++){
    outStr += `, ${i+1}. ${line[i]}`
  }
  outStr = outStr.slice(2)
  
  return `The line is currently: ${outStr}`
}