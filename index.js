//var katzDeliLine = []

function takeANumber(line,newName){
  var x = line
  x.push(newName)
  //return x
  return `Welcome, ${newName}. You are number ${x.length} in line.`
}

function nowServing(line){
  if(line.length==0){
    return "There is nobody waiting to be served!"
  }else{
    return "Currently serving "+line.splice(0,1)+"."
  }
}

function currentLine(line){
  var r = ""
  if (line.length==0){
    r = "The line is currently empty."
  }else{
    r = "The line is currently: 1. "
    r += line[0]
    for(let i=1;i<line.length;i++){
    r+= ", "+(i+1)+". "+line[i] 
    }
  }
  return r
}