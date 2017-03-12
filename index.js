function takeANumber(katzDeli, person)
{
  katzDeli.push(person);
  return "Welcome, "+person+". You are number "+ katzDeli.length+" in line.";
}

function nowServing(katzDeli)
{
  if (katzDeli.length===0)
  return "There is nobody waiting to be served!"
  else {
    return "Currently serving "+katzDeli.shift()+".";
  }
}

function currentLine(line)
{
  var arr=[];
  if (line.length===0)
  return "The line is currently empty.";
  else {
    for (let i=0; i<line.length; i++)
    {
      var j=i+1;
      arr[i]=" "+j+". "+line[i]
    
    //  var k="";
    //  k.concat(j+". "+line[i]+" ");
    }
    return "The line is currently:"+arr;
  }
}