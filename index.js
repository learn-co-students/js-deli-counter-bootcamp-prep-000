
function takeANumber(deli,person)
{
  var num=deli.length
  deli.push(person)
  return `Welcome, ${person}. You are number ${num+1} in line.`
}

function nowServing(deli)
{
  if(deli.length==0)
   return "There is nobody waiting to be served!"
  var name =deli[0]
  deli.shift()
  return `Currently serving ${name}.`
}

function currentLine(line){
  if(line.length==0)
    return "The line is currently empty."
  var s="The line is currently: "
  for(let i=0;i<line.length;i++)
   if(i+1==line.length)
    s=  s=s+(i+1)+". "+line[i]
  else
    s=s+(i+1)+". "+line[i]+", "
  return s
}
