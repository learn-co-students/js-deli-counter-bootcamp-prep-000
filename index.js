

function takeANumber(katzDeliLine, newPerson)
{
  katzDeliLine.push(newPerson);
  var returnString = "Welcome, "+ newPerson + ". You are number " + katzDeliLine.length + " in line.";
  return returnString;
}

function nowServing(katzDeliLine)
{
  if(katzDeliLine.length === 0)
  {
    return "There is nobody waiting to be served!";
  }
  else
  {
    var returnString = "Currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.shift();
    return returnString;
  }
}

function currentLine(line)
{
  if(line.length === 0)
  {
    return "The line is currently empty.";
  }
  else {
    var returnString = "The line is currently: ";
    for(var i = 0; i < line.length; i++)
    {
      var leadingNumber = (i + 1).toString();
      returnString += leadingNumber + ". " + line[i];
      if(i < line.length - 1)
      {
        returnString += ", "
      }
    }
    return returnString;
  }
}
