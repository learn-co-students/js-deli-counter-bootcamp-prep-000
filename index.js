function takeANumber(line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if(line.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    var upNext = line[0]
    line.shift()
    return `Currently serving ${upNext}.`
  }
}

function currentLine(line){
  var current = "The line is currently: "
  if (line.length === 0){
    return "The line is currently empty."
  }
  else{
    for(var i=0; i<line.length-1; i++){
      current = current + `${i+1}. ${line[i]}, `
    }
    return current + `${line.length}. ${line[line.length -1]}`
  }
}