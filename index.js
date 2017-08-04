var katzDeli = [];

function takeANumber(array,name){
  array.push(name)
  return `Welcome, ${name}. You are number ${array.length} in line.`
}

function nowServing(array){
  if(array.length===0){
    return "There is nobody waiting to be served!"
  }else{
    return `Currently serving ${array.splice(0,1)}.`
  }
}

//"The line is currently: 1. Ada, 2. Grace". If there is nobody in line, it should return "The line is currently empty."
function currentLine(line){
  if(line.length===0){
    return "The line is currently empty."
  }else{
    var ret = "The line is currently:"
    for(var i=0;i<line.length-1;i++){
      ret = `${ret} ${i+1}. ${line[i]},`
    }
    ret = `${ret} ${line.length}. ${line[line.length-1]}`
    return ret
  }
}
