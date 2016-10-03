// var deliLine =[];

function takeANumber(katzDeliLine, name)
{
  katzDeliLine.push(name);
  return "Welcome, " +name +". " + "You are number " + (katzDeliLine.indexOf(name) + 1) + " in line.";
}

function nowServing(deliLine)
{
  if (deliLine.length === 0)
  {
    return "There is nobody waiting to be served!";
  }
  else
  {
    var first = deliLine[0];
    deliLine.shift();
    return "Currently serving " + first + ".";

  }
}

function currentLine(line)
{
  var newString = "";
  for (var i = 0; i < line.length - 1 ; i ++)
  {
    newString = newString + (i+1) +". " + line[i] +", ";
  }
  newString = newString + (line.length) +". " + line[line.length - 1];
  if (line.length === 0)
  {
    return "The line is currently empty.";
  }
  else {
    return "The line is currently: " + newString;
  }
}
