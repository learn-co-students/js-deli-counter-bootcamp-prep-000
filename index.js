function takeANumber(deliLine, name)
{
  deliLine.push(name);
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`;
}

function nowServing(deliLine)
{
  if(deliLine.length === 0)
  {
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ${deliLine.shift()}.`;
  }
}

function currentLine(deliLine)
{
  if(deliLine.length ===0)
  {
    return "The line is currently empty.";
  }
  else {
    var list = "The line is currently: ";
    var position=1;
    for(var i=0; i<deliLine.length; i++)
    {
      if(i===0)
      {
        list += `${position++}. ${deliLine[i]}`;
      }
      else {
        list += `, ${position++}. ${deliLine[i]}`;
      }
    }
    return list;
  }
}
