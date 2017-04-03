var katzDeli = []

function takeANumber(katzDeliLine,name)
{
  katzDeliLine.push(name)
  var lineNumber = katzDeliLine.indexOf(name) +1
  var response = `Welcome, ${name}. You are number ${lineNumber} in line.`

  return response
  return katzDeliLine
}

function nowServing(array)
{
  if (array.length ===0)
  {
    return "There is nobody waiting to be served!"
  }
  else
  {
    var currentlyServing = array[0]
    array.shift()
    return `Currently serving ${currentlyServing}.`
    return array
  }
}
function currentLine(katzDeliLine)
{
  if (katzDeliLine.length ===0)
  {
    return "The line is currently empty."
  }
  else
  {
    var lineMakeup = ""
    var deliLineLength = katzDeliLine.length
    for (var ii = 0; ii < deliLineLength; ii++)
    {
      var lineNumber = ii+1
      var name = katzDeliLine[ii]
      var numberName = `${lineNumber}. ${name}`
      var currentCountName = numberName
      if (deliLineLength-1 > ii)
      {
        lineMakeup = lineMakeup + currentCountName +", "
      }
      else
      {
        lineMakeup = lineMakeup + currentCountName
      }
    }
    //  lineMakeup = lineMakeup + currentCountName
    return `The line is currently: ${lineMakeup}`
  }
}
