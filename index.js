var katzDeliLine = []

function takeANumber(line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
 }

function nowServing(line){
  if(line.length!==0){
    var currentlyserved=line[0]
    line.shift()
    return `Currently serving ${currentlyserved}.`
  }
  else {
    return `There is nobody waiting to be served!`
  }
}
function currentLine(line){
    var linepairs=[]
    var i=0
  if(line.length!==0){
    for (i=0;i<line.length;i++){
        linepairs[i]=` ${i+1}. ${line[i]}`}
    return `The line is currently:${linepairs}`
  }
  else {
  return "The line is currently empty."
}
}
