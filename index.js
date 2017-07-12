var katzDeli=[]
function takeANumber(katzDeliLine,name)
{ katzDeliLine.push(name)

  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine)
{
  if(katzDeliLine.length ===0)
  {return 'There is nobody waiting to be served!'}

  return `Currently serving ${katzDeliLine.shift()}.`
  function currentLine(line)
  {
    if(line.length===0)
    {return 'The line is currently empty'}
    var a = []
    for(var i = 1 ;i<line.length+1;i++)
    {a.push(`${i}. ${line[i]}, `)}

  return 'the line is currently: '+a}
