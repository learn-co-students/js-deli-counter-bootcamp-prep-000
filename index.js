function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line){
  if(line.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    var first = line[0]
    line.shift()
    return `Currently serving ${first}.`
  }
}

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty."
  }else{
    var lineList = "The line is currently:"
    for(var i=1; i<=line.length; i++){
      if(i<line.length){
        lineList += ` ${i}. ${line[i-1]},`
      }else if(i===line.length){
        lineList += ` ${i}. ${line[i-1]}`
      }
    }
  }
  return lineList
}