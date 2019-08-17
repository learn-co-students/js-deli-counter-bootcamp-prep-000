

function takeANumber(line, name)
{
  line.push(name);
  return "Welcome, " + name + ". You are number " + (line.length) + " in line.";
}

function nowServing(Line){
  
  if(Line[0] === undefined){
    return "There is nobody waiting to be served!";
  }
  else{
    let tempHolder = Line.shift();
    
    return "Currently serving " + tempHolder +".";
  }
}

function currentLine(nowserving){
  let lineHolder ="The line is currently:";
  let i;
  if(nowserving === undefined || nowserving.length === 0)
  {
    return "The line is currently empty."
  }
  else
  {
    for(i = 0; i < nowserving.length-1; i++)
    {
      lineHolder += " " + (i + 1) +". " + nowserving[i]+",";
    }
  }
  return lineHolder += " " + (i + 1) +". " + nowserving[i];
}