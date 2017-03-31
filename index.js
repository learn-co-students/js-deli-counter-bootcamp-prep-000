var katzDeliLine = [];

function takeANumber(currentLine, name)
{
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}
function nowServing(currentLine)
{
  if(currentLine.length === 0)
  {
    return "There is nobody waiting to be served!";
  }
  var name = currentLine[0];
  currentLine.shift();
  return `Currently serving ${name}.`;
}
function currentLine(line)
{
  if(line.length === 0)
  {
    return "The line is currently empty.";
  }
  var theLine = "The line is currently:";
  for(var i =0; i< line.length; i++)
  {
    theLine = theLine + `${i===0 ?"":","} ${i+1}. ${line[i]}`;
  }
  return theLine;
}
