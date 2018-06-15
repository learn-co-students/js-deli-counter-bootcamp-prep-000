var katzDeliLine = [];

function takeANumber(katzDeliLine,newClient){
  katzDeliLine.push(newClient);
  var l=katzDeliLine.length
  var m=`Welcome, ${newClient}. You are number ${l} in line.`
  
  return m;
  
} function nowServing(katzDeliLine){
if ( katzDeliLine.length===0){
 var noPpl = "There is nobody waiting to be served!";
 return noPpl
}
else{
  var currentlyServing =`Currently serving ${katzDeliLine[0]}.`
  katzDeliLine.shift();
  return currentlyServing
  
}
}
function currentLine(katzDeliLine){
 
if ( katzDeliLine.length===0){
 var noPpl = "The line is currently empty.";
 return noPpl
}


else{
var newNumberArr= new Array();	 
	
for (var i=0; i<katzDeliLine.length; i++) {
newNumberArr[i]=(` ${i+1}. ${katzDeliLine[i]}`);
}
  var currentlyWaiting='The line is currently:' +  newNumberArr.toString()
  return currentlyWaiting 
  
}
  
}