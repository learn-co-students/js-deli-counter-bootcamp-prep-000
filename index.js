function takeANumber(katzDeliLine, name)
{
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine)
{
  if(katzDeliLine[0] === undefined)
  {
    return `There is nobody waiting to be served!`;
  }
  else
  {
    name = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${name}.`;
  }
}

function currentLine(katzDeliLine)
{
  if(katzDeliLine[0] === undefined)
  {
    return `The line is currently empty.`;
  }
  else
  {
    var string = 'The line is currently: ';
    for(var i = 0; i < katzDeliLine.length; i++)
    {
      if(i === katzDeliLine.length -1)
      {
        string += `${i + 1}. ${katzDeliLine[i]}`;
      }
      else
      {
        string += `${i + 1}. ${katzDeliLine[i]}, `;
      }
    }
    return string;
  }
}