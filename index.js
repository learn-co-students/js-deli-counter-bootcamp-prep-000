function takeANumber(current,name){
  current.push(name)
  return `Welcome, ${name}. You are number ${current.length} in line.`
}
function nowServing(current){
  if(current.length === 0){
    return `There is nobody waiting to be served!`
  }
for(var i = 0; i < current.length; i++){
  return `Currently serving ${current.shift()}.`
}
 
}
function currentLine(current){
  if(current.length === 0){
    return `The line is currently empty.`
  }
  var i = 0;
  var line = []
  while(i < current.length){
    line.push(` ` + [i+1] +`.`+ ` `+current[i])
    i++
  }
  return `The line is currently:` + line
}