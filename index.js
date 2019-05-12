function takeANumber(katzDeliLine, newPerson)
{
  katzDeliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(deliLine)
{
  if (deliLine.length > 0)
  {
    var person = deliLine[0]
    deliLine.shift()
    return `Currently serving ${person}.`
  }
  else
  {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(deliLine)
{
  if (deliLine.length > 0)
  {
    var line = 'The line is currently:'
    for (let i = 0; i < deliLine.length; i++)
    {
      if (i < deliLine.length - 1)
      {
        line += ` ${i + 1}. ${deliLine[i]},`
      }
      else
      {
        line += ` ${i + 1}. ${deliLine[i]}`
      }
    }
    return line
  }
  else
  {
    return 'The line is currently empty.'
  }
}