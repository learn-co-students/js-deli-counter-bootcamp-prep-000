var katzDeli=[]
function takeANumber(katzDeliLine,name)
{ katzDeliLine.push(name)

  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine)
{
  if(katzDeliLine.length ===0)
  {return 'There is nobody waiting to be served!'}

  return `Currently serving ${katzDeliLine.shift()}.`}
  function currentLine(line)
  {
    if(line.length===0)
    {return 'The line is currently empty.'}
    var a = []
    a.push(`1. ${line[0]}`)
    for(var i = 0 ;i<line.length-1;i++)
    {a.push(` ${i+2}. ${line[i+1]}` )}

  return ('The line is currently: '+a)}
