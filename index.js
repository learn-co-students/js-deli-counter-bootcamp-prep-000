var katzDeliLine = []

function takeANumber(line,name){
line.push(name)
return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  var currentlyserved=line[0]
  if (line.length===0){return 'There is nobody waiting to be served!'}
  line.shift()
  return `Currently serving ${currentlyserved}.`
}
function currentLine(line){
  if (line.length===0){return "The line is currently empty."}
  var arr=line.map(function(x){return ` ${line.indexOf(x)+1}. ${x}`})
  return `The line is currently:${arr}`
}
