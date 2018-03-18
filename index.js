var katzDeliLine = [];

function takeANumber(katzDeliLine, name)
{
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine)
{
   if(katzDeliLine.length === 0)
  {
    return 'There is nobody waiting to be served!'
  } else
  {
    var newPerson = katzDeliLine.shift()
    return `Currently serving ${newPerson}.`;
  }
}

function currentLine(katzDeliLine)
{
  if(katzDeliLine.length === 0)
  {
    return 'The line is currently empty.';
  } else
  {
  var text = [];
  for( var i = 0 ; i < katzDeliLine.length ; i++)
  {
    text[i] = (i + 1) + '. ' + katzDeliLine[i];
  }
  
  return `The line is currently: ${text.join(', ')}`;
  }
}