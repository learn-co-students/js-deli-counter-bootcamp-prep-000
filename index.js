var katzDeliLine = [];

function takeANumber(katzDeliLine, name)
{
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine)
{
  if (katzDeliLine.length < 1)
  {
    return "There is nobody waiting to be served!";
  }
  else
  {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine)
{
  if (katzDeliLine.length < 1)
  {
    return "The line is currently empty.";
  }
  else
  {
    var message = `The line is currently: 1. ${katzDeliLine[0]}`;
    var i = 1;
    while (i < katzDeliLine.length)
    {
      message += `, ${i + 1}. ${katzDeliLine[i]}`;
      i += 1;
    }
    return message;
  }
  
}