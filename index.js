function takeANumber(Deli, name)
{
  Deli.push(name);
  var line = Deli.length
  return (`Welcome, ${name}. You are number ${line} in line.`)
}
function nowServing(Deli)
{
  if(Deli.length>0)
  {
    return `Currently serving ${Deli.shift()}.`
  }
  else{
    return "There is nobody waiting to be served!"
  }
}
function currentLine(Deli)
{
  if(Deli.length>0)
  {
    var line = [];
    for(let i=0;i<Deli.length;i++)
    {
      line.push(` ${i+1}. ${Deli[i]}`)
    }
    return `The line is currently:${line}`
  }
  else {
    return "The line is currently empty."
  }
}
