function takeANumber(array,name){
  var i=0
  array.push(name)
  i = array.length
  
  return `Welcome, ${name}. You are number ${i} in line.`
}

function nowServing(line){
  if (line.length>0){
  var removed = line.shift()
  return `Currently serving ${removed}.`
  }
  else{
    return "There is nobody waiting to be served!"
  }
  
}

function currentLine (line){
  var statement = `The line is currently: `
  var i = 0
  if(line.length<1){
    return "The line is currently empty."
  }
  
  do{
    if(line.length>1){
    statement = statement + (i+1) + ". " + line[0] +", "
    line.shift()
    i++
    }
    else{
      statement = statement + (i+1) + ". " + line[0]
    line.shift()
    i++
    }
  }
  while (line.length>0)
  return statement
}