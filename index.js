var katzDeliLine = [];

function takeANumber(katzDeliLine, name)
{
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function currentLine(katzDeliLine)
{
  var theline="The line is currently: "
  var theline2=""
  if (katzDeliLine.length>0)
  {
    for(var i=0; i<katzDeliLine.length;i++)
    {
      if(i<katzDeliLine.length-1)
      {
      theline2=`${i+1}. ${katzDeliLine[i]}, `
      theline=theline.concat(theline2)
      }
      else {
        theline2=`${i+1}. ${katzDeliLine[i]}`
        theline=theline.concat(theline2)
      }
    }
    return theline;
   }
  else {return "The line is currently empty."}
}

function nowServing(katzDeliLine)
{
  var servewho=katzDeliLine[0]
  katzDeliLine.shift()
  if (katzDeliLine.length>0)
  {return `Currently serving ${servewho}.`
  }
  else {return "There is nobody waiting to be served!"}
}
