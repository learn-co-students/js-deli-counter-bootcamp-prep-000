var katzDeli = []

function takeANumber(katzDeliLine, newGuy)
{
  katzDeliLine.push(newGuy)
  var newLine= katzDeliLine.length
  return "Welcome, "+newGuy+". You are number "+newLine+" in line."
}

function nowServing(katzDeliLine)
{
  if(katzDeliLine.length>0)
  {
    var served= katzDeliLine[0]
    katzDeliLine.shift()
    return "Currently serving "+served+"."
  }
  else
  {
    return "There is nobody waiting to be served!"
  }
  return katzDeliLine
}

function currentLine(line)
{
  if(line.length>0)
  {
    var lineArray= []
    for(let x=0;x<line.length;x++)
    {

      lineArray.push(`${x+1}. ${line[x]}`)
    }
    return `The line is currently: ${lineArray.join(', ')}`
  }
  else
  {
    return "The line is currently empty."
  }
}
