var katzDeli = [];
function takeANumber(katzDeli, name){
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(Deli){
  if(Deli.length>0){
    return  `Currently serving ${Deli.shift()}.`
  }
  else if(Deli.length===0){
    return "There is nobody waiting to be served!"
  }
}



function currentLine(line){
  if(line.length>0){
    return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`
  }
  else if(line.length===0){
    return "The line is currently empty."
  }
}