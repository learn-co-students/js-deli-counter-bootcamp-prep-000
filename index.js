var katzDeli =[];

function takeANumber(line, name)
{
  line[line.length] = name;
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line)
{
  if(line.length == 0)
  {
    return "There is nobody waiting to be served!";
  }
  else 
  {
    var x = line.shift();
    return `Currently serving ${x}.`
  }
}

function currentLine(line)
{
  var finalString = "The line is currently: ";
  if (line.length == 0)
  {
    return "The line is currently empty.";
  }
  else
  {
    for (var i = 0; i < line.length; i++)
    {
      if(i != line.length-1)
      {
        finalString += i+1 + ". " + line[i] + ", ";
      }
      else 
      {
        finalString += i+1 + ". " + line[i];
      }
    }
    return finalString;
  }
}