function takeANumber(array, name)
{
  array.push(name)
  return `Welcome, ${name}. You are number ${array.length} in line.`
}

function nowServing(array)
{
  if(array.length < 1)
  {
    return"There is nobody waiting to be served!"
  }
  else
  {
    return `Currently serving ${array.shift()}.`
  }
}

function currentLine(line)
{
  var toReturn = "The line is currently:"
  var i = 0
  if(line.length == 0)
  {
    return "The line is currently empty."
  }
  for(;i<line.length;i++)
  {
    if(i == line.length-1)
    {
      toReturn +=` ${i+1}. ${line[i]}`
    }
    else
    {
      toReturn +=` ${i+1}. ${line[i]},`
    }
    
  }
  return toReturn
}