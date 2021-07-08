function takeANumber(line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  while (line.length > 0){
    var current = line[0]
    line.shift()
    return `Currently serving ${current}.`
  }
  return "There is nobody waiting to be served!"
}

function currentLine(line){
  var lineString = ""
  
  if (line.length > 0){
    for (let i = 0; i < line.length; i++){
      let position = i + 1
      if (position === line.length){
        lineString += `${position}. ${line[i]}`
      }
      else{
        lineString += `${position}. ${line[i]}, `
      }
    }
    return `The line is currently: ${lineString}`
  }
  else {
    return "The line is currently empty."
  }
}