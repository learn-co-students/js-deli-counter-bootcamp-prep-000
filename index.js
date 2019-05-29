var katzDeli = [];
function takeANumber(katzDeli,name)
{
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.indexOf(name)+1} in line.`
}

function nowServing(katzDeli)
{
  if(katzDeli.length===0)
  {
    return "There is nobody waiting to be served!";
  }
  else
  { var current=katzDeli[0];
    katzDeli.shift();  
    return `Currently serving ${current}.`;
  }
}


function currentLine(katzDeli)
{ 
  if(katzDeli.length===0)
  {
    return "The line is currently empty.";
  }
  
  else
  {
  var string=" ";
  for(var i=0;i<katzDeli.length-1;i++)
  {
   string+=`${i+1}. ${katzDeli[i]}, ` 
  }
  string+=`${katzDeli.length}. ${katzDeli[katzDeli.length-1]}`
  
  return`The line is currently:${string}`
  }
  
}






