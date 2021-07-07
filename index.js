function takeANumber(katzDeliLine, newName)
{
  var position=katzDeliLine.length+1;
  katzDeliLine.push(newName);
  return "Welcome, "+newName+". You are number "+position+" in line.";
}
function nowServing(katzDeliLine)
{
  var msg="There is nobody waiting to be served!";
  if(katzDeliLine.length>0)
  {
    msg="Currently serving "+katzDeliLine[0]+".";
    katzDeliLine.shift();
  }
  return msg;
}
function currentLine(katzDeliLine)
{
  var msg="The line is currently empty."
  if(katzDeliLine.length>0)
  {
      //"The line is currently: 1. Ada 2. Grace"
      msg="The line is currently:";
      for(var i=0; i<katzDeliLine.length; i++)
      {
        var position=i+1;
        var person=katzDeliLine[i];
        if(i==0)
        {
          msg=msg+" "+position+". "+person;
        }
        else
        {
          msg=msg+", "+position+". "+person;
        }

      }
  }
  return msg;
}
