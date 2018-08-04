function takeANumber(line, name){
  line.push(`${name}`)
  return (`Welcome, ${name}. You are number ${line.length} in line.`)}

function nowServing(line){
  var name = line[0]
  if (line.length === 0){return "There is nobody waiting to be served!"}
  else line.shift()
  return `Currently serving ${name}.`}
  
function currentLine(line){
  var array = [];
  for (var i = 0; i < line.length; i++){
   array.push(` `+[1+i]+`. ${line[i]}`)}
  if (i === 0){return "The line is currently empty."} 
  else {return "The line is currently:"+array}}
   