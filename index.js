function takeANumber(katzDeli, name)
{
  var retString
    katzDeli.push(name)
    retString = "Welcome, " + name + ". You are number " + katzDeli.length + " in line."
    return retString;
}

function nowServing(katzDeliLine)
{
  var retString
  if(katzDeliLine.length === 0)
  {
    retString = "There is nobody waiting to be served!"

  }
  else
  {
    var number = katzDeliLine.length
      retString = "Currently serving " + katzDeliLine[0] + ".";
      katzDeliLine.shift();
    }
    return retString
}

function currentLine(katzDeliLine)
{
  var retString
  if(katzDeliLine.length === 0)
  {
    retString = "The line is currently empty."
  }
  else {
    retString = "The line is currently: "
    for(var i=0; i< katzDeliLine.length; i++)
    {
      retString = retString + (i+1) + ". " + katzDeliLine[i]
      if(i < katzDeliLine.length-1)
      {
        retString = retString + ", "
      }
    }
  }
  return retString
}
