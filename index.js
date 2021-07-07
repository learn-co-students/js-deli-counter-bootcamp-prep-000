function takeANumber(line, name){
  return `Welcome, ${name}. You are number ${line.push(name)} in line.`
}

function nowServing(line){
  if(line.length>0) return `Currently serving ${line.shift()}.`
  else return "There is nobody waiting to be served!"
}

function currentLine(line){
  if(line.length>0) {
    var str = `The line is currently: 1. ${line[0]}`
    for(var i=1; i<line.length; i++){
      str+= `, ${i+1}. ${line[i]}`
    }
    return str
  }
  else return "The line is currently empty."
}