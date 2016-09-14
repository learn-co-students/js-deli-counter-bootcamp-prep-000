function takeANumber(katzDeliLine, name)
{
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(line)
{
  if (line.length === 0)
  {
    return "There is nobody waiting to be served!"
  }
  else
  {
    var name = line[0];
    line.splice(0,1);
    return "Currently serving " + name + ".";
  }
}

function currentLine(line)
{
  if(line.length === 0)
  {
    return "The line is currently empty.";
  }
  else
  {
    var output = 'The line is currently: ';
    line.forEach(function(name, index){
      var number = index + 1;
      output += number + ". " + name + ", ";
    });
    return output.slice(0, -2)

  }
}
