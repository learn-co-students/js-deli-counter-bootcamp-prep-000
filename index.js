let katzDeliLine = []
function takeANumber(array, name){
  array.push(name)

  for(var i = 0; i < array.length; i ++){
    return `Welcome, ${name}. You are number ${array.indexOf(name)+1} in line.`
  }
}

function nowServing(array){
  if(array.length ===0){
    return "There is nobody waiting to be served!"
  }else{
    return `Currently serving ${array.shift()}.`
  }
}
  let lineStatus =`The line is currently:`
function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty."
  }
  else {
    for(var i = 0; i < line.length; i++){
     lineStatus += ` ${i+1}. ${line[i]},`
    }
    return lineStatus.slice(0,-1)
  }
}
