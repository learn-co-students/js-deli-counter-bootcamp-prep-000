/*var lastNumber = 0

function currentNumber(lastNumber)
{
  
  lastNumber += 1
  katzDeliLine.push(lastNumber)
  
  return `Welcome ticket ${lastNumber}, you are ${katzDeliLine.length} in line`
}
*/




function takeANumber(katzDeliLine, n)
{
  katzDeliLine.push(`${n}`);
return `Welcome, ${n}. You are number ${(katzDeliLine.length)} in line.`;
}




function nowServing(katzDeliLine)
{
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } 
     return `Currently serving ${katzDeliLine.shift()}.`
}


function currentLine(katzDeliLine)
{
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  } 
    var i = 0;
    var c = [];
    while( i < katzDeliLine.length) {
 c.push(`${(i + 1)}. ${katzDeliLine[i]}`);
 i++;
    }
   return `The line is currently: ${c.join(", ")}`
}
