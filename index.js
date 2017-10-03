var katzDeli=[]
function takeANumber(katzDeliLine, newPersonsName)
{
  katzDeliLine.push(newPersonsName)
  return "Welcome, " + newPersonsName + ". You are number "+ katzDeliLine.length + " in line."
}

function nowServing(array)
{
  if(array.length===0)
  {
    return "There is nobody waiting to be served!"
  }
    var name = array.shift()
    return "Currently serving " + name + "."
}

function currentLine(line)
{
  if(line.length ===0)
  {
    return "The line is currently empty."
  }
  else {
    var str="The line is currently: "
  for(var i = 0; i<line.length; i++)
  {
    str = str + (i+1) + ". "+ line[i]
    if(i+1 <line.length)
    str = str + ", "
  }
  return str
}
}
