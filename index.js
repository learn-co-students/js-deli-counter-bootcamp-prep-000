function takeANumber(line,name)
{
  var i = line.length+1;
  line.push(name);
  return "Welcome, "+ name+". You are number "+i+" in line.";
}
function nowServing(line)
{
  if(line.length===0)
  {
    return "There is nobody waiting to be served!";
  }
  else
  {
    line = line.shift();
    var serv=line[0];
    return "Currently serving "+line+ '.';

  }

}
function currentLine(katzDeli)
{
  var i = 0;
  var line =[];
  while(i<katzDeli.length)
  {
    line.push(` `+[i+1]+`. `  + katzDeli[i]);
    i++;
  }
  if(line.length===0)
  {
    return "The line is currently empty." ;
  }
  else
  {

      return "The line is currently:"+line;
  }
}
