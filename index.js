function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if(line.length===0){
    return "There is nobody waiting to be served!"
  }
  else{
    return `Currently serving ${line.splice(0,1)}.`
  }
}

function currentLine(line){
  if(line.length===0){
    return "The line is currently empty."
  }
  else{
    var str=`The line is currently: 1. ${line[0]}`
    for(var i=1; i<line.length; i++){
      str+=`, ${i+1}. ${line[i]}`
    }
    return str
  }
}