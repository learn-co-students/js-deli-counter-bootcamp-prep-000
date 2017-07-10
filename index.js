

function takeANumber(katzDeli, katzDeliLine)
{
  katzDeli.push(katzDeliLine);
  return "Welcome, " + `${katzDeliLine}` + ". You are number " + `${katzDeli.length}` + " in line.";
}

function nowServing(katzDeli)
{
  if (katzDeli.length === 0)
  {
    return "There is nobody waiting to be served!";
  }
  else
  {
    var firsPerson = katzDeli.shift();
    return "Currently serving " + `${firsPerson}` + ".";
  }
}

function currentLine(katzDeliLine)
{
  if (katzDeliLine.length === 0)
  {
    return "The line is currently empty.";
  }
  else
  {
    var peopleInline = "";
    var i = 0;

    peopleInline = `${i+1}` + ". " + `${katzDeliLine[i]}`;

    for(i = 1; i < katzDeliLine.length; i++)
    {
      peopleInline = peopleInline + ", " + `${i+1}` + ". " + `${katzDeliLine[i]}`;
    }
    return "The line is currently: " + `${peopleInline}`;
  }

}
