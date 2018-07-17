function takeANumber(katzDeliLine, customername)
{
  var string
  if (katzDeliLine.length === 0)
  {
    katzDeliLine.push(customername)
    string = `Welcome, ${customername}. You are number 1 in line.`
  }
  else
  {
    katzDeliLine.push(customername)
    string = `Welcome, ${customername}. You are number ${katzDeliLine.length} in line.`
  }
  return string
}
function nowServing(katzDeliLine)
{
  if (katzDeliLine.length === 0)
  {
    return "There is nobody waiting to be served!"
  }
  else
  {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}
function currentLine(line)
{
  var string = ""
  if (line.length === 0)
  {
    return "The line is currently empty."
  }
  else
  {
    for (let i = 0; i < line.length; i++)
    {
      string += `${i + 1}. ${line[i]}, `
    }
    return `The line is currently: ${string.slice(0,-2)}`
  }
}