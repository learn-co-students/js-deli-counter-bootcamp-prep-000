
function takeANumber(line , name) // thought this was vastly more complex than it was
{
    line[line.length] = name;
    return `Welcome, ${name}. You are number ${line.length} in line.`; 
}

function nowServing(line)
{
  var currentCustomer = line[0];
  if(line.length === 0)
  {
      return "There is nobody waiting to be served!"    
  }
  else
  {
    var serving = line[0];
    line.shift();
    return `Currently serving ${serving}.`;
  }
}

function currentLine(line)
{
  if(line.length === 0)
  {
    return "The line is currently empty.";
  }
  else
  {
    var newString = "The line is currently:"
      for(let i = 0; i < line.length; i++)
      {
        var pos = i + 1;
        var newNewString = ` ${pos}. ${line[i]},`
        if(i === line.length - 1)
          newNewString = ` ${pos}. ${line[i]}`
              newString += newNewString;
        
      }
      return newString;
  }
}
