var katzDeli = [];

function takeANumber(katzDeliLine, newname)
{
  katzDeliLine.push(newname);
  return `Welcome, ${newname}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0)
  {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0)
  {
    return "The line is currently empty."
  }
  else
  {
    var linestatus = "The line is currently: "
    for (var i=0; i < katzDeliLine.length; i++)
    {
      linestatus += `${i+1}. ${katzDeliLine[i]}`
      if (i<katzDeliLine.length-1)
      {
        linestatus += ", "
      }
    }
    return linestatus
  }
}
