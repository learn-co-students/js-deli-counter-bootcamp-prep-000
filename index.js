
function takeANumber (array, newName)
{
  array.push(newName);
  return `Welcome, ${newName}. You are number ${array.length} in line.`;
}

function nowServing(array)
{
  var servingName;
  if (array.length==0)
    return "There is nobody waiting to be served!";
  else{
  servingName = array[0];
  array.shift();
  return `Currently serving ${servingName}.`;
  }
}

function currentLine(array)
{
  var i;
  var inLine = "The line is currently:";
  
  if (array.length==0)
    return "The line is currently empty.";
    
  else {
        for (i=0; i<array.length; i++)
            inLine = inLine + ` ${i+1}. ${array[i]},`;
        return inLine.substring(0, inLine.length-1);
  }
}