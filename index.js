
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

/* unction currentLine(katzDeliLine){
  if (katzDeliLine.length<=0){
    return ("The line is currently empty.");
  }
  else {
    return ( "The line is currently: " + (katzDeliLine.indexOf()+1) + "." + katzDeliLine + ",");
  }
}
*/


function currentLine(katzDeliLine){
  if (var i=1; katzDeliLine.length > 0; i++){
    return ( "The line is currently: " + i + "." + katzDeliLine + ",")
}
  else {
    return ("The line is currently empty.");
}
}
