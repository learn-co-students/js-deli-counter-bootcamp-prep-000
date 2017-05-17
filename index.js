var katzDeli = [];

function takeANumber(katzDeliLine, newName)
{
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine)
{
  //Return the first person in line
  if (katzDeliLine.length == 0)
  {
    return "There is nobody waiting to be served!";
  }
  else
  {
    var nextInLine = katzDeliLine[0];
    katzDeliLine = katzDeliLine.shift();
    return `Currently serving ${nextInLine}.`;
  }
}

function currentLine(katzDeliLine)
{
  var theCurrentLine = "The line is currently"
  if (katzDeliLine.length == 0)
  {
    theCurrentLine += " empty."
  }
  else
  {
    theCurrentLine += ": ";
    for (let x = 0; x < katzDeliLine.length; x++)
    {
      theCurrentLine += `${x + 1}. ${katzDeliLine[x]}`;
      if (x < katzDeliLine.length - 1)
      {
        theCurrentLine += ", ";
      }
    }
  }
  return theCurrentLine;
}