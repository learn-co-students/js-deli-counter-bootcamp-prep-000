var katzDeliLine = [];

function takeANumber(katzDeliLine, name)
{
  katzDeliLine.push(name)

  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}


function nowServing(line)
{
if (line.length === 0)
{
  return "There is nobody waiting to be served!"
}

let name = line.shift()
return `Currently serving ${name}.`

}


function currentLine(line)
{
  if (line.length === 0)
  {
    return "The line is currently empty."
  }

  var namesAndNumbers = [];

  for (let i = 0; i < line.length; i++)
  {
    namesAndNumbers.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${namesAndNumbers.join(', ')}`
}
