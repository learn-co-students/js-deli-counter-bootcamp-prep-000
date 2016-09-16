var katzDeli = []
function takeANumber(katzDeliLine,name)
{
  katzDeliLine.push(name)
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}
function nowServing(array)
{
  var name
  if(array.length>0)
  {
  name = array[0]
  array.shift()
  return (`Currently serving ${name}.`)
  }
  else return("There is nobody waiting to be served!")
}
function currentLine(array)
{
var names=""
if(array.length>0)
{
  for(let i=0;i<array.length;i++)
  {
    names = names + `${i+1}. `+array[i]
    if(i==array.length-1)
    {}
    else
    {names=names+ ", "}
  }
  return ("The line is currently: " + names)
}
else return("The line is currently empty.")
}
