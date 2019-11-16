function takeANumber(line, person)
{
  line.push(person);
  return `Welcome, ${person}. You are number ${line.length} in line.`
}

function nowServing(line)
{
  let returnString = "";
  if(line.length === 0)
  {
    returnString = "There is nobody waiting to be served!";
  }
  else
  {
    returnString = `Currently serving ${line[0]}.`;
    line.shift();
  }
  return returnString;
}

function currentLine(line)
{
  let returnString = "";
  if(line.length === 0)
  {
    returnString = "The line is currently empty.";
  }
  else
  {
    returnString = "The line is currently:";
    let counter = 0;
    while(counter < line.length)
    {
      returnString = returnString + ` ${counter+1}. ${line[counter]}`;
      if(counter < line.length-1)
      {
        returnString = returnString + ',';
      }
      counter++;
    }
  }
  return returnString;
}