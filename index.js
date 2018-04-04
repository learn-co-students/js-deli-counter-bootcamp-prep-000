var joesDeli = [];

function takeANumber(joesDeli, name)
{
  joesDeli.push(`${name}`);
  return (`Welcome, ${name}. You are number ${joesDeli.length} in line.`)
}

function nowServing(joesDeli)
{
  if (joesDeli.length > 0)
  {
    let announcement = (`Currently serving ${joesDeli[0]}.`);
    joesDeli.shift();
    return announcement;
  }
  else
  {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(joesDeli)
{
  var line = [];
  let i = 0;
  
  while(i < joesDeli.length)
  {
    //Add to the line array
    line.push(` ` + [i + 1] + `. ` + joesDeli[i]);
    i++;
  }
  
  if (joesDeli.length === 0)
  {
    return "The line is currently empty.";
  }
  else
  {
    return "The line is currently:" + line;
  }
}
