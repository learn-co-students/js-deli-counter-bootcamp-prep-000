function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${katzDeliLine[katzDeliLine.length-1]}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(a){
  if(a.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    var b = a[0]
    a.shift()
    return `Currently serving ${b}.`
  }
}

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty."
  }
  else{
    var hold = "The line is currently: "
    for(var i = 0; i < line.length; i++){
      if(i === line.length - 1){
        hold += `${i + 1}. ${line[i]}`
      }
      else{
        hold += `${i + 1}. ${line[i]}, `
      }
    }
    return hold
  }
}