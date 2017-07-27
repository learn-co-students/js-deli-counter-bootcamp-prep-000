var katzDeli = [];

function takeANumber(line, name){
  line.push(name)
  var greet = `Welcome, ${name}. You are number ${line.length} in line.`
  return greet

}

function currentLine(line)
{
  if(line.length<=0)
  {
    return "The line is currently empty."
  }
  else
  {
    var list = "The line is currently:"
    for(var i=0;i<line.length;i++)
    {
      list += ` ${i+1}. ${line[i]}`
      if(i!=(line.length)-1)
      {
        list += ","
      }
    }
    return list
  }
}

function nowServing(line)
{
  if(line.length<=0)
  {
    return "There is nobody waiting to be served!"
  }
  else {
  var customer = line.shift()
  var serving = `Currently serving ${customer}.`
  return serving
}
}
