function takeANumber(katzDeli, new_cust)
{
  console.log(new_cust);
  katzDeli.push(new_cust);
  return `Welcome, ${new_cust}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli)
{
  console.log (katzDeli);
  if (katzDeli[0] === undefined)
    return 'There is nobody waiting to be served!'
  else
    return `Currently serving ${katzDeli.shift()}.`;
}

function currentLine(katzDeli)
{
  if (katzDeli[0] === undefined)
    return "The line is currently empty.";
  else
    {
      console.log(katzDeli.length)-1;
      var strOut = "The line is currently: ";
    for (var count = 0; count <= (katzDeli.length)-1; count ++)
      {
      strOut = strOut + String(count+1) +". "+katzDeli[count]+", ";
      console.log(count);
      }
      return strOut.slice(0,strOut.length-2);
    }
}
