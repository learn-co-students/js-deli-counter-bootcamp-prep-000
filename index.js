function takeANumber(quantity,name){
    quantity.push(name)
  return `Welcome, ${name}. You are number ${quantity.length} in line.`
}

function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line){
  var lineNames = []
  var namePosition = 1
  var i = 0

  if (line.length === 0){
    return "The line is currently empty."
  }else{
    while(i < line.length){
      lineNames.push(`${namePosition}. ${line[i]}`)
      i++
      namePosition++
  }
    return `The line is currently: ${lineNames.join(', ')}`
  }
}
