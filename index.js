

function takeANumber(kdl, anotherone)
{
  kdl.push(anotherone)
  return "Welcome, " + anotherone+ ". You are number " + kdl.length + " in line."
}

function nowServing(dl)
{

  if(dl.length===0)
  {
    return "There is nobody waiting to be served!"
  }
  else {

    return "Currently serving " + dl.shift() + "."

  }
}

function currentLine(cl)
{
  var theline =""

  if(cl.length===0)
  {
    return "The line is currently empty."
  }
  else {
    for(var count = 1; count<=cl.length; count++)
    {
      if(count<cl.length)
      {
      theline= theline + count + ". " + cl[count-1] + ", "
      }
      else {
        theline= theline + count + ". " + cl[count-1]
      }
    }
    return "The line is currently: " + theline
  }

}
