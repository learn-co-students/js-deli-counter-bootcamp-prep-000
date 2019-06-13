function takeANumber(katzDeliLine,Ada){
katzDeliLine.push(Ada)
  return`Welcome, ${Ada}. You are number ${katzDeliLine.length} in line.` }
function nowServing(katzDeliLine){
  if(katzDeliLine.length===0)
  {return 'There is nobody waiting to be served!' }
   else
  {return `Currently serving ${katzDeliLine.shift()}.`}}
  function currentLine(line){
    if(line===0)
    {return 'The line is currently empty'}
    else
    {return`The line is currently ${index} ${line.shift()}` }}