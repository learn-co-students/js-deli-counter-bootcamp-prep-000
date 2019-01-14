function takeANumber(currentLine,newPerson)
{
  currentLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`
}

function nowServing(currentLine)
{
  
  if(currentLine.length===0)
  {
  return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${currentLine.shift()}.`)
}

function currentLine(line)
{
  if(line.length===0)
  return "The line is currently empty."
  else
  {
    var newArr=[];
    for(var i=0;i<line.length;i++)
    {
    newArr.push(` ${i+1}. ${line[i]}`)
    }
    return `The line is currently:${newArr}`
  }
}



var adil=["ad","er","wf"]
console.log(nowServing(adil))
console.log(adil)