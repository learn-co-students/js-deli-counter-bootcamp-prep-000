
function takeANumber(katzDeliLine,newperson){

katzDeliLine.push(newperson);
return ("Welcome, " + newperson + ". You are number " + (katzDeliLine.indexOf(newperson)+1) +" in line." )
}

function nowServing(katzDeliLine){
if (katzDeliLine.length>=1){
  return ( "Currently serving " + katzDeliLine.shift() + ".");
}
else{
  return ("There is nobody waiting to be served!");
}
}

/* function currentLine(katzDeliLine){
  if (katzDeliLine.length>0){
  return ( "The line is currently: " + (katzDeliLine.indexOf()+1) + "." + katzDeliLine + ",");
  }
  else {
    return ("The line is currently empty.");
  }
}
*/


function currentLine(line){
if (line.length<=0){
  return ("The line is currently empty.");
}
else{
var adline;
for (var i=1; line.length >= i; i++)
{
  adline= (i + "." + line[i] + ",");
}
return ("The line is currently: " + line);
}
}
