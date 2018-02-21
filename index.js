function takeANumber(array, name)
{
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
}

function nowServing(array)
{
  if(array.length > 0)
  {
    return `Currently serving ${array.shift()}.`;
  }
  else
  {
    return 'There is nobody waiting to be served!';
  }
 
}

function currentLine(array)
{
  if(array.length > 0)
  {
    var tempArray = [];
    for(var i = 0; i < array.length; i++)
    {
      if(i === 0)
      {
        tempArray.push(`${i+1}. ${array[i]}`);
      }
      else
      {
        tempArray.push(` ${i+1}. ${array[i]}`);
      }
    }
    return `The line is currently: ${tempArray}`;
  }
  else
  {
    return "The line is currently empty."
  }
}