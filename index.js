function takeANumber(line, next){
  line.push(next)
  return `Welcome, ${next}. You are number ${line.length} in line.`
}

function nowServing(line){
  if (line[0] == null){
    return 'There is nobody waiting to be served!'
  } 
  else{
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line){
  if (line[0] == null){
    return 'The line is currently empty.'
  }
  var baseString = 'The line is currently:'
  for(var i=0; i< line.length; i++){
    baseString = `${baseString} ${i+1}. ${line[i]}`
    if(i!=line.length -1){
      baseString = `${baseString},`
    }
  }
  return baseString
}