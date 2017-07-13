var katzDeli = [];

function takeANumber(katzDeliLine, name)
{
  katzDeliLine.push(name);
  return "Welcome, "+name + ". You are number "+katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine)
{
  if(katzDeliLine.length===0)
  {
    return "There is nobody waiting to be served!"
  }
  else {
    var firstPerson = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " +firstPerson+"."
  }
}

function currentLine(katzDeliLine)
{
  if(katzDeliLine.length === 0)
  {
    return "The line is currently empty."
  }
  else{
    var newString = "The line is currently: "
    for(let i=0;i<katzDeliLine.length;i++)
    {
      newString = newString + parseInt(i+1) +". "+katzDeliLine[i]
      if(i<katzDeliLine.length-1)
      {
        newString +=", "
      }
    }
    return newString
  }
}
