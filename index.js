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
   
     var first = katzDeliLine[0];
    katzDeliLine.shift() 
     return `Currently serving ${first}.`
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
