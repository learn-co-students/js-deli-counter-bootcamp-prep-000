var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
var i=1;
katzDeliLine.push( name );

  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.` )
}

function nowServing(katzDeliLine){
  var i = 0;
  
if (katzDeliLine.length>0){
    
return `Currently serving ${katzDeliLine.shift()}.`
 }
else {return "There is nobody waiting to be served!"}
}

function currentLine(katzDeliLine){
var lineToReturn = "The line is currently: "
var namesNumbers = [];
	if(katzDeliLine.length > 0) {
  		for (var i = 0; i < katzDeliLine.length; i++){
  
  namesNumbers.push(`${i+1}. ${katzDeliLine[i]}`)
 
 //lineToReturn +=  (i+1) +". " + katzDeliLine[i];
  
  		}
 return lineToReturn + namesNumbers.join(', ')
} else {
  return 'The line is currently empty.';
}
  
}