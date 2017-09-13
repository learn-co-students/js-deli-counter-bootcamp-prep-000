function takeANumber(katzDeliLine, personName)
{
  var index;
  var greeting;
  var position;
  katzDeliLine.push(personName);

  position = katzDeliLine.length;
  index = position -1;
  greeting = "Welcome, "+katzDeliLine[index]+". You are number "+position+" in line.";

  return greeting;

}

function nowServing(katzDeliLine)
{
  var firstPerson;
  var sentence;

  if (katzDeliLine=="")
  {
    return "There is nobody waiting to be served!";
  }
  else
  {
    firstPerson = katzDeliLine[0];
    sentence = "Currently serving "+firstPerson+".";
    katzDeliLine.shift();
    return sentence;
  }
}

function currentLine(katzDeliLine)
{
  var line = "";
  if (katzDeliLine=="")
  {
      return "The line is currently empty.";
  }
  else
  {
    for (var i = 0; i < katzDeliLine.length; i++)
    {
      if(i==katzDeliLine.length-1)
      {
          line+=i+1+". "+katzDeliLine[i];
      }
      else
      {
          line+=i+1+". "+katzDeliLine[i]+", ";
      }

    }
    return "The line is currently: "+line;
  }
}
