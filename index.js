
function takeANumber(line, name)
{

  line.push(name)
  var locationInLine = line.indexOf(name) + 1; //Array starts at 0 - Hence the +1 to recreate actual locationInLine

  return "Welcome, " + name + ". You are number " + locationInLine + " in line."

}


function nowServing(line)
{
  if (line.length == 0 )
  {
    return "There is nobody waiting to be served!"
  }
  else
  {
    var Output = "Currently serving " + line[0] + "."
    line.shift()
    return Output
  }

}

function currentLine(line)
{
  if (line.length == 0 )
  {
    return "The line is currently empty."
  }
  else
  {

  var i = 0
  var currentLine = []

  while ( i < line.length)
  {
    var location = (i + 1);
    currentLine[i] = " " + location + ". " + line[i]
    i++
  }
  return "The line is currently:" + currentLine.toString()


  }
}


//var i
//while (i < line.length)
//var currentLine = [];

//{
  //var location = i + 1;
  //currentLine[i] = location + ". " + line[i] + ", "
  //i++

  //return line
//}
