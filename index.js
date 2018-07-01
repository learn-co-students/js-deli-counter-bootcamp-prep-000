function takeANumber(line, name) {
  line.push(name)
  return (`Welcome, ${name}. You are number ${line.length} in line.`)
}
function currentLine(line,name){
  var currentline = ('The line is currently: ')
  if (line.length===0)  {
  return "The line is currently empty."
  }
  else
    for (var i=0;i < line.length; i++) {
        currentline += (i+1) + ". " + line[i] + ", "
}

return currentline.slice(0, currentline.length-2)
}

function nowServing(line, name) { 
  if(line.length===0) {
    return "There is nobody waiting to be served!"
  }
  else 
  return (`Currently serving ${line.shift()}.`) 
}
