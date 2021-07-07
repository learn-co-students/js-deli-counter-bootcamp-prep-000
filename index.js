var katzDeliline=[];
function takeANumber(katzDeliline,name)
{
  katzDeliline.push(name);
 return 'Welcome, '+name+'. You are number '+katzDeliline.length+ ' in line.';
}

function nowServing(katzDeliline)
{
  if(katzDeliline.length>0)
  {
      var next = katzDeliline.shift();
    return "Currently serving "+next+".";
  }
  else
   return "There is nobody waiting to be served!";
}

function currentLine(katzDeliline)
{
  var line = "";
  if(katzDeliline.length>0)
  {
  line = "The line is currently:";
  } 
  else
  {
    line = "The line is currently empty.";
  }
  
  if(katzDeliline.length>0)
  {
    for(var x = 1; x<= katzDeliline.length; x++)
    {
      line= line+" "+x+ ". "+katzDeliline[x-1]+(x===0||x==katzDeliline.length ?"":",");
    }
  }
  return line;
  
}