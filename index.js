function takeANumber(line, person){
  line.push(person)
  return `Welcome, ${person}. You are number ${(line.length)} in line.`
}
function nowServing(line){
  if (line.length!==0)
  return `Currently serving ${line.shift()}.`
  else
  return  "There is nobody waiting to be served!"
  
}
function currentLine(line){
  if(line.length!==0){
    var str = `The line is currently:`
    for(var i=0;i<line.length;i++)
      if(i<line.length-1)
        str+=` ${i+1}. ${line[i]},`
      else
      str+=` ${i+1}. ${line[i]}`
    return str
    
  }
  else
  return "The line is currently empty."
}