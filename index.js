var katzDeli = [];

function takeANumber(katzDeli, name)
{
  katzDeli.push(name)
  return ("Welcome, " + name + ". You are number " + (katzDeli.length) + " in line.")
}

function nowServing(katzDeli)
{
  if(katzDeli.length === 0)
  {
    return "There is nobody waiting to be served!"
  }
  
  var firstPerson = katzDeli[0]
  katzDeli.shift()
  return "Currently serving " + firstPerson + "."
}

function currentLine(katzDeli)
{
  var line = [];
  
  if(katzDeli.length === 0)
  {
    return "The line is currently empty."  
  }
  
  line.push((1) + ". " + katzDeli[0])
  for(let i = 1; i < katzDeli.length; i++)
  {
    line.push(" " + (i+1) + ". " + katzDeli[i])
  }
  return "The line is currently: " + line
}