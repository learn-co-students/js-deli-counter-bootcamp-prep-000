var katzDeli = []
var otherDeli = ["Steven", "Blake", "Avi"]
const deliLine = ["Steven", "Blake", "Avi"]

function takeANumber(pos,name){
  var position = pos.length
  pos[position]=name
  position += 1
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(pos){
  var position = pos.length
  if(position===0)
  {
    return "There is nobody waiting to be served!"
  }
  var name = pos[0]
  pos.shift()
  return `Currently serving ${name}.`
}

function currentLine(line){
  var l = line.length
  if(l===0)
  {
    return "The line is currently empty."
  }
  var string= "The line is currently:"
  for(var i=0;i<l;i++)
  {
    string+= ` ${i+1}. ${line[i]}`
    if(i!==(l-1))
    {
      string+= ","
    }
  }
  return string
}





