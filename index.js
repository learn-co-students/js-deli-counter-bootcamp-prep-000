
function takeANumber(katzDeliLine,newperson){

katzDeliLine.push(newperson);
return ("Welcome, " + newperson + ". You are number " + (katzDeliLine.indexOf(newperson)+1) +" in line." )
}
