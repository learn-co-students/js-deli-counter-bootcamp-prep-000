
function takeANumber(katzDeliLine,newperson){

katzDeliLine.push(newperson);
return ("Welcome, " + newperson + ". You are number " + (katzDeliLine.indexOf(newperson)+1) +" in line." )
}

function nowServing(katzDeliLine){
if (katzDeliLine.length>1){
  katzDeliLine.shift;
  return ( "Currently serving " + (katzDeliLine[newperson]);
}
else{
  return ("There is nobody waiting to be served!");
}
}
