function takeANumber(array,name){
  array.push(`${name}`)
  return `Welcome, ${name}. You are number ${array.length} in line.`
}

function nowServing(line){
  if (line.length===0){
  return "There is nobody waiting to be served!"}
  else{
  return `Currently serving ${line.shift()}.`}
}

function currentLine(line){
  if (line.length===0){
    return `The line is currently empty.`
  }
  else{
    let a=0,array=[]
    while(a<line.length){
      array.push(` ${a+1}. ${line[a]}`)
      a+=1
    }
    return `The line is currently:${array}`
  }
}
