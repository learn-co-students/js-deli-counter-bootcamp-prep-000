function takeANumber(current, name){
  current.push(name)
  return `Welcome, ${name}. You are number ${current.length} in line.`
}

function nowServing(current){
  if(current.length === 0){
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${current.shift()}.`
  }
}

function currentLine(line){
  let lineList = []
  for(let i = 0; i < line.length; i++){
    lineList.push(` ${i + 1}. ${line[i]}`)
  }
  if(line.length === 0){
    return 'The line is currently empty.'
  } else {
    return `The line is currently:${lineList}`
  }
}